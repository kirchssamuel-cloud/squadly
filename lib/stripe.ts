import Stripe from 'stripe';

let cached: Stripe | null = null;

export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is missing — set it in .env.local');
  }
  if (!cached) {
    cached = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-12-18.acacia',
      typescript: true
    });
  }
  return cached;
}

/**
 * Create a milestone-based payment intent.
 * Squadly takes its commission (20% by default) from the client charge.
 * Freelance payouts are wired separately via Stripe Connect transfers
 * once the milestone is audited.
 */
export async function createMilestonePayment(params: {
  amountEuros: number;
  squadId: string;
  milestoneId: string;
  customerEmail: string;
  commissionRate?: number;
}) {
  const stripe = getStripe();
  const amount = Math.round(params.amountEuros * 100);
  return stripe.paymentIntents.create({
    amount,
    currency: 'eur',
    receipt_email: params.customerEmail,
    metadata: {
      squad_id: params.squadId,
      milestone_id: params.milestoneId,
      commission_rate: String(params.commissionRate ?? 0.2)
    }
  });
}
