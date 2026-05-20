import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getStripe } from '@/lib/stripe';
import { getSupabaseServerClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const Schema = z.object({
  squadId: z.string().uuid(),
  milestoneId: z.string().uuid(),
  amountEuros: z.number().int().min(1000).max(500_000),
  label: z.string().min(1).max(160)
});

export async function POST(req: NextRequest) {
  const supabase = await getSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'JSON invalide' }, { status: 400 });
  }
  const parsed = Schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Champs invalides' }, { status: 400 });
  }

  const { squadId, milestoneId, amountEuros, label } = parsed.data;
  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card', 'sepa_debit'],
    customer_email: user.email ?? undefined,
    line_items: [
      {
        price_data: {
          currency: 'eur',
          unit_amount: amountEuros * 100,
          product_data: {
            name: `Squadly — Jalon : ${label}`,
            description: `Squad ${squadId} · jalon ${milestoneId}`
          }
        },
        quantity: 1
      }
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/client?milestone=${milestoneId}&status=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/client?milestone=${milestoneId}&status=cancel`,
    metadata: {
      squad_id: squadId,
      milestone_id: milestoneId,
      user_id: user.id,
      commission_rate: '0.20'
    }
  });

  return NextResponse.json({ url: session.url });
}
