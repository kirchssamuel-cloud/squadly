import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { getSupabaseServiceClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const FALLBACK_EMAIL = process.env.FALLBACK_CONTACT_EMAIL ?? 'kirchs.samuel@gmail.com';

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

  const subject = `[Brief Squadly] ${data.nom} · ${data.type} · ${data.budget}`;
  const body = [
    `Nouveau brief reçu via squadly-app.netlify.app`,
    ``,
    `Nom         : ${data.nom}`,
    `Email       : ${data.email}`,
    `Entreprise  : ${data.entreprise || '—'}`,
    `Type        : ${data.type}`,
    `Budget      : ${data.budget}`,
    `Délai       : ${data.delai || '—'}`,
    ``,
    `--- Brief ---`,
    data.brief
  ].join('\n');

  let emailSent = false;

  // 2a. Resend (préféré si clé configurée + domaine vérifié)
  if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL && process.env.RESEND_TEAM_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.RESEND_TEAM_EMAIL.split(',').map((s) => s.trim()),
        replyTo: data.email,
        subject,
        text: body
      });
      emailSent = true;
    } catch (err) {
      console.error('[contact] resend error', err);
    }
  }

  // 2b. Fallback FormSubmit (gratuit, zéro config DNS) si Resend n'a pas marché.
  // FormSubmit envoie un email de confirmation au premier message pour activer la boîte.
  if (!emailSent) {
    try {
      const fsResp = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(FALLBACK_EMAIL)}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({
          _subject: subject,
          _captcha: 'false',
          _template: 'box',
          _replyto: data.email,
          nom: data.nom,
          email: data.email,
          entreprise: data.entreprise || '—',
          type: data.type,
          budget: data.budget,
          delai: data.delai || '—',
          brief: data.brief
        })
      });
      if (!fsResp.ok) {
        console.error('[contact] formsubmit non-2xx', fsResp.status);
      } else {
        emailSent = true;
      }
    } catch (err) {
      console.error('[contact] formsubmit error', err);
    }
  }

  return NextResponse.json({ ok: true, emailSent });
}
