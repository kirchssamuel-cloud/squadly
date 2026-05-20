-- ─────────────────────────────────────────────
-- Squadly — schema initial pour Supabase Postgres.
-- À exécuter dans Supabase SQL Editor.
-- ─────────────────────────────────────────────

-- Extensions
create extension if not exists "pgcrypto";

-- ── Profils utilisateurs (1-1 avec auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'client' check (role in ('client', 'freelance', 'admin')),
  display_name text,
  company_name text,
  bio text,
  output_score numeric(3,1),
  created_at timestamptz not null default now()
);

-- ── Leads entrants (formulaire de contact)
create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  budget text not null,
  nom text not null,
  email text not null,
  entreprise text,
  delai text,
  brief text not null,
  status text not null default 'new' check (status in ('new', 'qualified', 'won', 'lost')),
  assigned_to uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ── Briefs structurés (sortie de l'AI Brief Builder)
create table if not exists public.briefs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  type text not null,
  budget_cents bigint,
  delivery_weeks int,
  conversation jsonb not null default '[]'::jsonb,
  structured jsonb,
  status text not null default 'draft' check (status in ('draft', 'submitted', 'composed', 'closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ── Squads (équipes composées)
create table if not exists public.squads (
  id uuid primary key default gen_random_uuid(),
  brief_id uuid references public.briefs(id) on delete set null,
  client_id uuid references public.profiles(id) on delete set null,
  name text not null,
  status text not null default 'proposed' check (status in ('proposed', 'active', 'delivered', 'cancelled')),
  total_budget_cents bigint not null,
  commission_rate numeric(4,3) not null default 0.20,
  created_at timestamptz not null default now()
);

-- ── Membres de squad
create table if not exists public.squad_members (
  id uuid primary key default gen_random_uuid(),
  squad_id uuid references public.squads(id) on delete cascade,
  freelance_id uuid references public.profiles(id) on delete restrict,
  role text not null,
  is_lead boolean not null default false,
  share_cents bigint not null
);

-- ── Jalons (escrow Stripe)
create table if not exists public.milestones (
  id uuid primary key default gen_random_uuid(),
  squad_id uuid references public.squads(id) on delete cascade,
  label text not null,
  description text,
  amount_cents bigint not null,
  status text not null default 'pending' check (status in ('pending', 'invoiced', 'paid', 'released', 'cancelled')),
  due_at timestamptz,
  paid_at timestamptz,
  released_at timestamptz,
  stripe_session_id text,
  paid_amount_cents bigint,
  created_at timestamptz not null default now()
);

-- ── Output Score (audit par jalon)
create table if not exists public.output_scores (
  id uuid primary key default gen_random_uuid(),
  squad_id uuid references public.squads(id) on delete cascade,
  milestone_id uuid references public.milestones(id) on delete cascade,
  scope_score numeric(3,1),
  code_score numeric(3,1),
  design_score numeric(3,1),
  punctuality_score numeric(3,1),
  communication_score numeric(3,1),
  impact_score numeric(3,1),
  auditor_id uuid references public.profiles(id) on delete set null,
  audited_at timestamptz not null default now()
);

-- ── Journal d'audit générique
create table if not exists public.audit_log (
  id uuid primary key default gen_random_uuid(),
  entity text not null,
  entity_id uuid not null,
  event text not null,
  actor_id uuid references public.profiles(id) on delete set null,
  meta jsonb,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- Row Level Security
-- ─────────────────────────────────────────────
alter table public.profiles enable row level security;
alter table public.contact_leads enable row level security;
alter table public.briefs enable row level security;
alter table public.squads enable row level security;
alter table public.squad_members enable row level security;
alter table public.milestones enable row level security;
alter table public.output_scores enable row level security;
alter table public.audit_log enable row level security;

-- profiles : un utilisateur lit/écrit son propre profil
create policy if not exists "profiles_self_select" on public.profiles
  for select using (auth.uid() = id);
create policy if not exists "profiles_self_upsert" on public.profiles
  for insert with check (auth.uid() = id);
create policy if not exists "profiles_self_update" on public.profiles
  for update using (auth.uid() = id);

-- briefs : owner uniquement
create policy if not exists "briefs_owner_all" on public.briefs
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

-- squads : client_id ou membres
create policy if not exists "squads_client_select" on public.squads
  for select using (
    auth.uid() = client_id
    or exists (
      select 1 from public.squad_members sm where sm.squad_id = squads.id and sm.freelance_id = auth.uid()
    )
  );

-- squad_members : freelance lui-même ou client de la squad
create policy if not exists "squad_members_visible" on public.squad_members
  for select using (
    auth.uid() = freelance_id
    or exists (
      select 1 from public.squads s where s.id = squad_members.squad_id and s.client_id = auth.uid()
    )
  );

-- milestones : visibles aux membres de la squad et au client
create policy if not exists "milestones_visible" on public.milestones
  for select using (
    exists (
      select 1 from public.squads s
      where s.id = milestones.squad_id
        and (s.client_id = auth.uid()
             or exists (select 1 from public.squad_members sm where sm.squad_id = s.id and sm.freelance_id = auth.uid()))
    )
  );

-- contact_leads : pas accessible côté client (RLS bloque), uniquement service role
create policy if not exists "contact_leads_admin_only" on public.contact_leads
  for select using (false);

-- ─────────────────────────────────────────────
-- Triggers
-- ─────────────────────────────────────────────

-- Crée automatiquement un profil au signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.profiles (id, role, display_name)
  values (new.id, 'client', coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Auto-update updated_at sur briefs
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists briefs_touch_updated on public.briefs;
create trigger briefs_touch_updated
  before update on public.briefs
  for each row execute procedure public.touch_updated_at();
