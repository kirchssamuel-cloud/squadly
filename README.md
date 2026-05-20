# Squadly

> Marketplace de squads de freelances vérifiés. Vous achetez un livrable, pas un CV.

Stack : **Next.js 15 (App Router) + TypeScript · Supabase (auth + DB) · Anthropic Claude (AI Brief Builder) · Stripe (escrow par jalons) · Resend (emails) · Netlify/Vercel (hosting)**.

---

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env.local
# Remplir les clés Supabase, Anthropic, Stripe, Resend

# 3. Lancer en local
npm run dev
# → http://localhost:3000
```

## Structure

```
app/
├── (pages publiques)
│   ├── page.tsx                  → /
│   ├── comment-ca-marche/        → /comment-ca-marche
│   ├── squads/                   → /squads (avec filtre client)
│   ├── freelances/               → /freelances
│   ├── pricing/                  → /pricing (toggle client/freelance)
│   ├── a-propos/                 → /a-propos
│   └── contact/                  → /contact (form → /api/contact)
├── login/                        → /login (magic link Supabase)
├── dashboard/
│   ├── layout.tsx                → auth required
│   ├── client/page.tsx           → dashboard client + AI Brief Builder
│   └── freelance/page.tsx        → dashboard freelance + Output Score
├── api/
│   ├── contact/route.ts          → POST formulaire (Supabase + Resend)
│   ├── brief/route.ts            → POST stream Claude API
│   ├── auth/logout/route.ts      → POST signout
│   └── stripe/
│       ├── checkout/route.ts     → POST création session Stripe
│       └── webhook/route.ts      → POST webhook (paid → milestones)
└── components/                   → Nav, Footer, ThemeToggle, NavLink

lib/
├── supabase/server.ts            → server client + service role
├── supabase/browser.ts           → browser client
├── anthropic.ts                  → SDK + system prompt brief builder
└── stripe.ts                     → SDK + helpers paiement

public/
├── styles/design-tokens.css      → palette, typo, radius, spacings
├── styles/site.css               → composants UI (.sq-*, .hero, .pillar, …)
└── scripts/theme.js              → toggle dark/light persistant

supabase/
└── schema.sql                    → tables + RLS + triggers

middleware.ts                     → redirige /dashboard si non connecté
netlify.toml                      → build config Netlify
```

## Configuration des services

### 1. Supabase (auth + DB)

1. Créer un projet sur https://supabase.com
2. SQL Editor → coller le contenu de `supabase/schema.sql` et exécuter
3. Settings → API → copier `URL`, `anon key`, `service_role key` dans `.env.local`
4. Authentication → Providers → activer **Email (Magic Link)**
5. Authentication → URL Configuration → ajouter l'URL de prod en redirect autorisé

### 2. Anthropic (AI Brief Builder)

1. https://console.anthropic.com/settings/keys → générer une clé
2. Ajouter `ANTHROPIC_API_KEY` dans `.env.local`

### 3. Stripe (escrow par jalons)

1. https://dashboard.stripe.com/apikeys
2. Copier `Publishable key` et `Secret key` dans `.env.local`
3. Webhooks → Add endpoint → `https://<votre-url>/api/stripe/webhook`
4. Sélectionner `checkout.session.completed` et `payment_intent.payment_failed`
5. Copier le `Signing secret` dans `STRIPE_WEBHOOK_SECRET`

### 4. Resend (emails transactionnels)

1. https://resend.com/api-keys → créer une clé
2. Domains → vérifier `squadly.fr` (DKIM/SPF)
3. Ajouter `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TEAM_EMAIL` dans `.env.local`

## Déploiement

### Netlify (recommandé pour cet écran)

```bash
# Via la CLI
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

Variables d'environnement à reproduire dans **Site settings → Build & deploy → Environment**.

### Vercel

```bash
npm install -g vercel
vercel deploy --prod
```

## Sécurité

- Toutes les API routes valident leur payload avec `zod`
- `middleware.ts` bloque l'accès à `/dashboard/*` si non authentifié
- Row Level Security activée sur toutes les tables Supabase
- Les paiements Stripe sont vérifiés via signature webhook (`STRIPE_WEBHOOK_SECRET`)
- Le service role Supabase n'est utilisé que côté serveur (jamais exposé au client)

## Données fictives

Les chiffres affichés sur les pages publiques (1 230 squads livrées, 485 freelances actifs, etc.)
sont des données de démonstration. À remplacer par les vraies métriques une fois la marketplace
en production. Voir `app/page.tsx`, `app/a-propos/page.tsx`, `app/squads/page.tsx`.

## Prochaines itérations

- [ ] Squad Composer algorithmique (matching freelance ↔ brief structuré)
- [ ] Output Score : ingestion réelle (SonarQube, Lighthouse, revue humaine)
- [ ] Stripe Connect : payouts freelances automatisés post-jalon
- [ ] Page Stats publique (NPS, taux remplacement, Output Score moyen)
- [ ] Localisation Allemagne et Espagne
- [ ] Compteur opérations dashboard avec données réelles depuis Supabase
