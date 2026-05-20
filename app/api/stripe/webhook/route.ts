import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { getStripe } from '@/lib/stripe';
import { getSupabaseServiceClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  const rawBody = await req.text();
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(rawBody, sig, secret);
  } catch (err: any) {
    return NextResponse.json({ error: `Bad signature: ${err.message}` }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const milestoneId = session.metadata?.milestone_id;
      const squadId = session.metadata?.squad_id;
      const amount = session.amount_total ?? 0;
      if (milestoneId && process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const supabase = getSupabaseServiceClient();
        await supabase
          .from('milestones')
          .update({
            status: 'paid',
            paid_at: new Date().toISOString(),
            stripe_session_id: session.id,
            paid_amount_cents: amount
          })
          .eq('id', milestoneId);
        if (squadId) {
          await supabase.from('audit_log').insert({
            entity: 'milestone',
            entity_id: milestoneId,
            event: 'paid',
            meta: { stripe_session_id: session.id, amount }
          });
        }
      }
      break;
    }
    case 'payment_intent.payment_failed': {
      const intent = event.data.object as Stripe.PaymentIntent;
      console.warn('[stripe] payment failed', intent.id, intent.last_payment_error?.message);
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
