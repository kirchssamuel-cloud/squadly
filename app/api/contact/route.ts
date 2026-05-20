import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { getSupabaseServiceClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const ContactSchema = z.object({
  type: z.string().min(1).max(50),
  budget: z.string().min(1).max(50),
  nom: z.string().min(1).max(120),
  email: z.string().email(),
  entreprise: z.string().max(160).optional().or(z.literal('')),
  delai: z.string().max(50).optional().or(z.literal('')),
  brief: z.string().min(20).max(5000)
});

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'JSON invalide' }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Champs manquants ou invalides' }, { status: 400 });
  }

  const data = parsed.data;

  // 1. Persist in Supabase if configured.
  if (process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.NEXT_PUBLIC_SUPABASE_URL) {
    try {
      const supabase = getSupabaseServiceClient();
      const { error } = await supabase.from('contact_leads').insert({
        type: data.type,
        budget: data.budget,
        nom: data.nom,
        email: data.email,
        entreprise: data.entreprise || null,
        delai: data.delai || null,
        brief: data.brief
      });
      if (error) {
        console.error('[contact] supabase insert error', error);
      }
    } catch (err) {
      console.error('[contact] supabase exception', err);
    }
  }

  // 2. Notify the Squadly team via Resend if configured.
  if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL && process.env.RESEND_TEAM_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.RESEND_TEAM_EMAIL.split(',').map((s) => s.trim()),
        replyTo: data.email,
        subject: `[Brief Squadly] ${data.nom} · ${data.type} · ${data.budget}`,
        text: [
          `Nouveau brief reçu`,
          ``,
          `Nom : ${data.nom}`,
          `Email : ${data.email}`,
          `Entreprise : ${data.entreprise || '—'}`,
          `Type : ${data.type}`,
          `Budget : ${data.budget}`,
          `Délai : ${data.delai || '—'}`,
          ``,
          `--- Brief ---`,
          data.brief
        ].join('\n')
      });
    } catch (err) {
      console.error('[contact] resend error', err);
    }
  }

  return NextResponse.json({ ok: true });
}
