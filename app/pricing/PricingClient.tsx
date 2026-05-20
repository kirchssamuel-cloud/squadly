'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function PricingClient() {
  const [tab, setTab] = useState<'client' | 'freelance'>('client');
  const [ticket, setTicket] = useState(25000);

  const formatted = useMemo(() => ticket.toLocaleString('fr-FR'), [ticket]);
  const commission = useMemo(() => Math.round(ticket * 0.2).toLocaleString('fr-FR'), [ticket]);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="sq-container hero__compact">
          <span className="sq-eyebrow">Tarification</span>
          <h1 className="hero__title">Simple,<br />sans surprise.</h1>
          <p className="hero__lede">
            Côté client&nbsp;: trois paliers de squad, commission 20 % comprise. Côté freelance&nbsp;:
            gratuit, ou Premium à 29 € par mois si vous voulez la place de devant.
          </p>

          <div className="pricing-toggle" role="tablist" aria-label="Vue tarif">
            <button
              type="button"
              data-pricing-tab="client"
              aria-selected={tab === 'client'}
              onClick={() => setTab('client')}
            >
              Pour clients
            </button>
            <button
              type="button"
              data-pricing-tab="freelance"
              aria-selected={tab === 'freelance'}
              onClick={() => setTab('freelance')}
            >
              Pour freelances
            </button>
          </div>
        </div>
      </section>

      {/* VUE CLIENT */}
      {tab === 'client' && (
        <section className="sq-section sq-section--tight">
          <div className="sq-container">
            <div className="pricing-grid">
              <article className="price-card">
                <span className="sq-eyebrow">Starter MVP</span>
                <p className="price-card__name" style={{ marginTop: 'var(--space-3)' }}>Squad 2 freelances</p>
                <p className="price-card__lede">Pour valider une intuition produit ou shipper un MVP solo founder.</p>
                <div className="price-card__price">15 k€<small> · 6 sem.</small></div>
                <ul className="price-card__features">
                  <li>2 freelances (1 design + 1 dev, ou 1 PM + 1 dev)</li>
                  <li>Brief structuré + cahier des charges signé</li>
                  <li>Squad lead inclus</li>
                  <li>Output Score audité à la livraison</li>
                </ul>
                <Link className="sq-btn sq-btn--secondary" href="/contact">Démarrer un brief</Link>
              </article>

              <article className="price-card price-card--featured">
                <span className="sq-eyebrow">Sprint Squad</span>
                <p className="price-card__name" style={{ marginTop: 'var(--space-3)' }}>Squad 3–4 freelances</p>
                <p className="price-card__lede">Pour une refonte, un lancement growth complet ou un MVP B2B sérieux.</p>
                <div className="price-card__price">25 k€<small> · 8–10 sem.</small></div>
                <ul className="price-card__features">
                  <li className="is-accent">Squad pluridisciplinaire complète (4 profils max)</li>
                  <li className="is-accent">Audit indépendant à mi-parcours <em>et</em> à la livraison</li>
                  <li>Squad lead dédié, joignable Slack</li>
                  <li>Mesure d&apos;impact business à 90 jours incluse</li>
                  <li>Remplacement freelance sous 72 h garanti</li>
                </ul>
                <Link className="sq-btn sq-btn--primary" href="/contact">Démarrer un brief</Link>
              </article>

              <article className="price-card">
                <span className="sq-eyebrow">Scale Squad</span>
                <p className="price-card__name" style={{ marginTop: 'var(--space-3)' }}>Squad 5+ freelances</p>
                <p className="price-card__lede">Projets multi-trimestres, refontes lourdes, déploiement IA en environnement réglementé.</p>
                <div className="price-card__price">75 k€+<small> · sur devis</small></div>
                <ul className="price-card__features">
                  <li>Squad 5 à 8 freelances, équipe stable sur 6 mois</li>
                  <li>Jalons mensuels facturables</li>
                  <li>Account manager Squadly dédié</li>
                  <li>Audit ANSSI / RGPD en option</li>
                  <li>Engagement contractuel sur le SLA livraison</li>
                </ul>
                <Link className="sq-btn sq-btn--secondary" href="/contact">Parler à un account</Link>
              </article>
            </div>

            <p className="sq-text-muted text-center" style={{ marginTop: 'var(--space-10)', fontSize: 14 }}>
              Tous les prix sont hors taxes. La commission Squadly (20 %) est déjà incluse dans le ticket affiché.
            </p>

            <div className="calc" style={{ marginTop: 'var(--space-16)' }}>
              <div>
                <p className="sq-eyebrow">Calculateur</p>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: 24,
                  letterSpacing: '-0.025em',
                  margin: 'var(--space-2) 0 0'
                }}>Quel ticket pour votre projet&nbsp;?</h3>
              </div>
              <div className="calc__output">
                <div>
                  <div className="sq-caption">Ticket squad</div>
                  <div className="calc__big">{formatted} €</div>
                </div>
                <div>
                  <div className="sq-caption">Dont commission Squadly</div>
                  <div className="calc__big">{commission} € <small>(20 %)</small></div>
                </div>
              </div>
              <div>
                <label className="sq-label" htmlFor="calc-slider">Ajustez le ticket projeté</label>
                <input
                  id="calc-slider"
                  className="calc__slider"
                  type="range"
                  min={15000}
                  max={150000}
                  step={1000}
                  value={ticket}
                  onChange={(e) => setTicket(Number(e.target.value))}
                />
                <div className="sq-mono sq-text-subtle" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                  <span>15 k€</span><span>150 k€</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VUE FREELANCE */}
      {tab === 'freelance' && (
        <section className="sq-section sq-section--tight">
          <div className="sq-container">
            <div className="pricing-grid" style={{ gridTemplateColumns: '1fr 1fr', maxWidth: 880, margin: '0 auto' }}>
              <article className="price-card">
                <span className="sq-eyebrow">Free</span>
                <p className="price-card__name" style={{ marginTop: 'var(--space-3)' }}>Pour démarrer</p>
                <p className="price-card__lede">Tout ce qu&apos;il faut pour postuler aux squads et apparaître dans les briefs ouverts.</p>
                <div className="price-card__price">0 €<small> · à vie</small></div>
                <ul className="price-card__features">
                  <li>Profil public + Output Score visible</li>
                  <li>Candidature illimitée aux squads ouvertes</li>
                  <li>Paiement à 7 jours après audit</li>
                  <li>Support email réponse 48 h</li>
                </ul>
                <Link className="sq-btn sq-btn--secondary" href="/contact">Postuler</Link>
              </article>

              <article className="price-card price-card--featured">
                <span className="sq-eyebrow">Premium</span>
                <p className="price-card__name" style={{ marginTop: 'var(--space-3)' }}>Pour passer devant</p>
                <p className="price-card__lede">Pour les freelances qui veulent maximiser les missions reconduites et bouger leur Output Score.</p>
                <div className="price-card__price">29 €<small> / mois · sans engagement</small></div>
                <ul className="price-card__features">
                  <li className="is-accent">Accès prioritaire aux squads finalistes</li>
                  <li className="is-accent">Multiplicateur Output Score × 1,2</li>
                  <li>Label « Squadly Verified » sur LinkedIn</li>
                  <li>1 coaching squad lead / trimestre (30 min)</li>
                  <li>Support prioritaire — réponse 4 h</li>
                  <li>Profil mis en avant dans la newsletter clients</li>
                </ul>
                <Link className="sq-btn sq-btn--primary" href="/contact">Devenir Premium</Link>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* FAQ PRICING */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="sec-head">
            <h2 className="sec-head__title">Questions sur les tarifs.</h2>
            <p className="sec-head__lede">Sept questions, des réponses directes.</p>
          </div>
          <div className="faq">
            {[
              ['La commission de 20 % est-elle vraiment plafonnée ?', 'Oui, fixe. Aucun frais caché, aucune ligne « administration » ou « gestion ». Sur un ticket de 25 k€, Squadly garde 5 k€, les freelances se partagent 20 k€ selon la répartition convenue au brief.'],
              ['Que se passe-t-il si le projet dépasse le scope ?', "Avenant signé par l'AI Brief Builder, validé en 24 h. Commission Squadly toujours à 20 %. Aucun rattrapage tarifaire surprise."],
              ['Puis-je annuler à mi-parcours ?', "Oui. Vous payez les jalons franchis + 10 % du restant comme indemnité de désengagement. Pas de pénalité au-delà."],
              ['Le Premium freelance est-il rentable ?', "Le break-even est à environ 2 jours de mission supplémentaires par an. Pour un freelance qui fait 60–80 k€ d'AOV via Squadly, le ROI est positif dès le premier mois."],
              ["Y a-t-il une période d'essai sur le Premium ?", "Premier mois gratuit pour tous les freelances activés depuis moins de 90 jours. Pas de carte bancaire requise pour l'essai."],
              ['Quels sont les délais de paiement réels ?', "Pour les freelances : 7 jours ouvrés après validation de jalon. Pour les clients : 30 jours fin de mois standard, possibilité de paiement échelonné sur les Scale Squads."],
              ['Squadly facture-t-elle la TVA ?', "Oui. Squadly émet une facture unique au client incluant la TVA française. Les freelances UE facturent Squadly avec ou sans TVA selon leur statut."]
            ].map(([q, a]) => (
              <details className="faq__item" key={q}>
                <summary>
                  {q}
                  <span className="faq__sign">+</span>
                </summary>
                <p className="faq__answer">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="cta-final">
            <h2 className="cta-final__title">Décidé. Maintenant, démarrez un brief ou postulez.</h2>
            <div className="cta-final__actions">
              <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">Démarrer un brief</Link>
              <Link className="sq-btn sq-btn--secondary sq-btn--lg" href="/freelances">Postuler à Squadly</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
