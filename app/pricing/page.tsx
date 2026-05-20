import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Tarifs — Squadly',
  description:
    'Trois paliers squad pour clients (Starter 15 k€, Sprint 25 k€, Scale 75 k€+). Abonnement Premium freelance à 29 €/mois. Commission 20 %, sans surprise.'
};

export default function PricingPage() {
  return <PricingClient />;
}
