import Link from 'next/link';
import type { Metadata } from 'next';
import SquadsFilter from './SquadsFilter';

export const metadata: Metadata = {
  title: 'Squads livrées — Squadly',
  description:
    "Cas clients : MVP fintech, refonte mobile, lancement growth, déploiement IA. Une sélection de squads livrées en 2024–2026."
};

const SQUADS = [
  {
    types: ['mvp'],
    tag: 'MVP · Fintech',
    title: "App mobile d'une néo-assurance dommages.",
    lede: "Souscription mobile + KYC + dashboard contrat pour Allianz·X France, lancement Paris.",
    stats: [['10 sem.', 'Livraison'], ['+87%', 'Conversion'], ['35 k€', 'Ticket']]
  },
  {
    types: ['growth'],
    tag: 'Growth · SaaS RH',
    title: 'Lancement outbound pour un éditeur HRTech lyonnais.',
    lede: 'Stack Lemlist + SEO programmatique + reporting GA4 pour HelloWorker.',
    stats: [['8 sem.', 'Livraison'], ['4 800', 'Leads MQL'], ['22 k€', 'Ticket']]
  },
  {
    types: ['ia'],
    tag: 'IA · Agroalimentaire',
    title: 'Extraction IA sur 18 000 contrats fournisseurs.',
    lede: 'Pipeline OCR + LLM + revue humaine pour un groupe ETI basé à Rennes.',
    stats: [['12 sem.', 'Livraison'], ['96%', 'Précision'], ['78 k€', 'Ticket']]
  },
  {
    types: ['refonte'],
    tag: 'Refonte · Marketplace',
    title: "Refonte du parcours acheteur d'une marketplace B2B.",
    lede: "Restructuration du tunnel, refonte des fiches produits, intégration ERP pour Solwett.",
    stats: [['9 sem.', 'Livraison'], ['+34%', 'Panier moyen'], ['42 k€', 'Ticket']]
  },
  {
    types: ['mvp', 'ia'],
    tag: 'MVP · LegalTech',
    title: "Assistant juridique IA pour cabinets d'avocats.",
    lede: 'Recherche jurisprudence + rédaction de conclusions, base 80 000 décisions pour Cresus·Legal.',
    stats: [['11 sem.', 'Livraison'], ['8x', 'Vitesse recherche'], ['58 k€', 'Ticket']]
  },
  {
    types: ['growth', 'refonte'],
    tag: 'Growth · D2C',
    title: "Refonte site + ouverture Allemagne pour une D2C food.",
    lede: "Shopify Plus, traduction, paid social DE + AT pour la marque Maison Mère (Bordeaux).",
    stats: [['7 sem.', 'Livraison'], ['+22%', 'Conversion'], ['28 k€', 'Ticket']]
  }
] as const;

export default function SquadsPage() {
  return (
    <>
      <section className="hero">
        <div className="sq-container hero__compact">
          <span className="sq-eyebrow">Cas clients · 1 200 squads livrées</span>
          <h1 className="hero__title">Des squads livrées,<br />pas des CV envoyés.</h1>
          <p className="hero__lede">
            Filtrez par type de mission. Chaque cas est documenté&nbsp;: composition de la squad,
            jalons, KPI mesurés à 90 jours, Output Score audité.
          </p>
        </div>
      </section>

      <SquadsFilter squads={SQUADS as any} />

      {/* CAS FEATURED */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="sec-head">
            <h2 className="sec-head__title">Cas détaillé&nbsp;: refonte mobile pour une fintech série A.</h2>
            <p className="sec-head__lede">Allianz·X France — néo-assurance multi-risques habitation. 10 semaines, 4 freelances, livrable signé fin février 2026.</p>
          </div>

          <div className="pillar" style={{ borderTop: 0, paddingTop: 0 }}>
            <div className="pillar__text">
              <div className="pillar__num">Brief</div>
              <h3 className="pillar__title" style={{ fontSize: 28 }}>Faire passer la souscription mobile de 3,2 % à 6 % sans toucher au pricing.</h3>
              <p className="pillar__lede">
                Avant Squadly : parcours hérité d&apos;un POC 2022, friction KYC, abandons massifs.
                Brief composé par Léa Marchand (Head of Product Allianz·X) en 18 minutes via l&apos;AI Brief Builder.
              </p>
              <ul className="pillar__bullets">
                <li>Refonte de l&apos;onboarding (8 écrans → 4 écrans)</li>
                <li>Migration KYC vers Veriff + traçabilité ANSSI</li>
                <li>Dashboard contrat repensé pour mobile-first</li>
                <li>Mesure d&apos;impact 90 jours post-livraison</li>
              </ul>
            </div>
            <div className="pillar__demo">
              <div className="squad-graph">
                <svg className="squad-graph__svg" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
                  <path className="squad-graph__line squad-graph__line--accent" d="M200 200 L 80 80"></path>
                  <path className="squad-graph__line squad-graph__line--accent" d="M200 200 L 320 70"></path>
                  <path className="squad-graph__line squad-graph__line--accent" d="M200 200 L 60 320"></path>
                  <path className="squad-graph__line squad-graph__line--accent" d="M200 200 L 330 330"></path>
                </svg>
                <div className="squad-graph__brief">
                  <div className="squad-graph__brief-title">Allianz·X · Mobile</div>
                  <div className="squad-graph__brief-meta">10 sem. · 35 k€</div>
                </div>
                <div className="squad-node" style={{ top: '4%', left: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#0A0A0A' }}>CL</div>
                  <div><div className="squad-node__name">Camille Lefèvre</div><div className="squad-node__role">Product Designer</div></div>
                </div>
                <div className="squad-node" style={{ top: '4%', right: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#525252' }}>AR</div>
                  <div><div className="squad-node__name">Ayoub Rahmani</div><div className="squad-node__role">Dev React Native</div></div>
                </div>
                <div className="squad-node" style={{ bottom: '4%', left: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#6366F1' }}>MO</div>
                  <div><div className="squad-node__name">Marion Olivier</div><div className="squad-node__role">PM · Squad Lead</div></div>
                </div>
                <div className="squad-node" style={{ bottom: '4%', right: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#171717' }}>TD</div>
                  <div><div className="squad-node__name">Théo Duret</div><div className="squad-node__role">Backend Node</div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="metric-strip" style={{ marginTop: 'var(--space-12)' }}>
            <div className="metric-strip__grid">
              <div className="metric-strip__item">
                <div className="sq-stat__value">+87<span style={{ fontSize: '0.55em', color: 'var(--text-tertiary)' }}>%</span></div>
                <div className="sq-stat__label">Taux de conversion souscription (mesuré T+90)</div>
              </div>
              <div className="metric-strip__item">
                <div className="sq-stat__value">9,2<span style={{ fontSize: '0.55em', color: 'var(--text-tertiary)' }}>/10</span></div>
                <div className="sq-stat__label">Output Score moyen de la squad à la livraison</div>
              </div>
              <div className="metric-strip__item">
                <div className="sq-stat__value">0<span style={{ fontSize: '0.55em', color: 'var(--text-tertiary)' }}> écart</span></div>
                <div className="sq-stat__label">Budget tenu et délai respecté à la journée près</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="cta-final">
            <h2 className="cta-final__title">Le prochain cas pourrait être le vôtre.</h2>
            <div className="cta-final__actions">
              <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">Composer ma squad</Link>
              <Link className="sq-btn sq-btn--secondary sq-btn--lg" href="/comment-ca-marche">Voir le process</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
