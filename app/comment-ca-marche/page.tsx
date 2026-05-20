import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comment ça marche — Squadly',
  description:
    "Du brief à la livraison en 4 étapes : Brief intelligent, Squad Composer, Sprint, Livraison. Méthodologie Output Score publique."
};

export default function CommentCaMarchePage() {
  return (
    <>
      {/* HERO COMPACT */}
      <section className="hero">
        <div className="sq-container hero__compact">
          <span className="sq-eyebrow">Process · Mise à jour mai 2026</span>
          <h1 className="hero__title">Du brief flou<br />au livrable signé.</h1>
          <p className="hero__lede">
            Quatre étapes, quarante-huit heures pour assembler la squad, six à douze
            semaines pour livrer. Pas plus.
          </p>
          <div className="hero__actions">
            <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">Lancer mon brief</Link>
            <Link className="sq-btn sq-btn--ghost" href="/pricing">
              Voir les tarifs <span className="sq-btn__chevron">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE 4 ÉTAPES */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="timeline">
            <div className="timeline__step is-current">
              <h3>Brief intelligent</h3>
              <p>L&apos;IA structure votre besoin en 12 min. Détection des compétences, chiffrage de scope, contraintes techniques.</p>
              <small>Jour 0 · 12 min</small>
            </div>
            <div className="timeline__step">
              <h3>Squad composée</h3>
              <p>Algorithme + curation humaine. 3 squads candidates, vetting déjà fait. Vous validez la finale.</p>
              <small>Jour 1–2 · 48h max</small>
            </div>
            <div className="timeline__step">
              <h3>Sprint d&apos;exécution</h3>
              <p>Kick-off, rituel hebdo, jalons facturables. Vous suivez en direct dans l&apos;app Squadly.</p>
              <small>Sem. 1–10</small>
            </div>
            <div className="timeline__step">
              <h3>Livraison auditée</h3>
              <p>Recette par un auditeur indépendant. Le paiement final libère l&apos;Output Score définitif.</p>
              <small>Sem. 6–12</small>
            </div>
          </div>
        </div>
      </section>

      {/* PILIER 1 ZOOM */}
      <section className="sq-section" id="brief-builder">
        <div className="sq-container">
          <div className="pillar" data-reveal>
            <div className="pillar__text">
              <div className="pillar__num">01 / AI Brief Builder</div>
              <h3 className="pillar__title">Un brief que votre CTO peut signer.</h3>
              <p className="pillar__lede">
                L&apos;IA pose les questions qu&apos;une bonne agence poserait avant un kick-off&nbsp;:
                objectif business mesurable, périmètre, contraintes techniques, risques connus.
                Sortie&nbsp;: un cahier des charges PDF + JSON, exploitable directement.
              </p>
              <ul className="pillar__bullets">
                <li>Détection des dépendances techniques (auth, paiement, RGPD, KYC…)</li>
                <li>Chiffrage estimatif à ±15 % basé sur l&apos;historique des 1 200 squads</li>
                <li>Génération automatique du contrat avec annexes</li>
                <li>Multi-langue&nbsp;: brief en français, livrables en anglais possibles</li>
              </ul>
            </div>
            <div className="pillar__demo">
              <div className="brief-demo">
                <div className="brief-demo__chrome">
                  <span className="brief-demo__dot"></span><span className="brief-demo__dot"></span><span className="brief-demo__dot"></span>
                  <span className="brief-demo__url">brief #SQ-2814 · étape 3 / 5</span>
                </div>
                <div className="brief-demo__body">
                  <div className="brief-step brief-step--done">
                    <div className="brief-step__num">✓</div>
                    <div>
                      <div className="brief-step__label">Objectif business</div>
                      <div className="brief-step__value">Souscription mobile 3,2% → 6% en 6 mois</div>
                    </div>
                  </div>
                  <div className="brief-step brief-step--done">
                    <div className="brief-step__num">✓</div>
                    <div>
                      <div className="brief-step__label">Stack existante</div>
                      <div className="brief-step__value">React Native · Node 20 · Postgres · Stripe Connect</div>
                    </div>
                  </div>
                  <div className="brief-step brief-step--active">
                    <div className="brief-step__num">3</div>
                    <div>
                      <div className="brief-step__label">Dépendances détectées par l&apos;IA</div>
                      <div className="brief-step__chips" style={{ marginTop: 6 }}>
                        <span className="brief-chip">KYC Veriff</span>
                        <span className="brief-chip">SCA PSD2</span>
                        <span className="brief-chip brief-chip--accent">Audit ANSSI (recommandé)</span>
                        <span className="brief-chip brief-chip--accent">Tracking RGPD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brief-demo__input">
                  <div className="brief-demo__field">
                    <span>Qui est responsable du DPO côté client ?</span>
                    <span className="brief-demo__caret"></span>
                  </div>
                  <button className="sq-btn sq-btn--primary sq-btn--sm" type="button">Répondre</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILIER 2 ZOOM */}
      <section className="sq-section" id="squad-composer">
        <div className="sq-container">
          <div className="pillar pillar--reverse" data-reveal>
            <div className="pillar__text">
              <div className="pillar__num">02 / Squad Composer</div>
              <h3 className="pillar__title">Une squad, pas une liste de profils.</h3>
              <p className="pillar__lede">
                On ne vous envoie pas 12 CV. L&apos;algorithme construit 3 squads cohérentes
                (compétences, fuseau, historique de collaboration), et un curator senior
                retient la meilleure. Le squad lead est nommé, signe le livrable.
              </p>
              <ul className="pillar__bullets">
                <li>Top 5 % des candidatures freelance acceptées</li>
                <li>Vérification de la dispo réelle sur la fenêtre du projet</li>
                <li>Historique de collaboration entre membres pris en compte</li>
                <li>Remplacement garanti sous 72 h en cas d&apos;incompatibilité</li>
              </ul>
            </div>
            <div className="pillar__demo">
              <div className="squad-graph">
                <svg className="squad-graph__svg" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
                  <path className="squad-graph__line squad-graph__line--accent" d="M200 200 L 80 80"></path>
                  <path className="squad-graph__line squad-graph__line--accent" d="M200 200 L 320 70"></path>
                  <path className="squad-graph__line squad-graph__line--accent" d="M200 200 L 60 320"></path>
                  <path className="squad-graph__line squad-graph__line--accent" d="M200 200 L 330 330"></path>
                  <path className="squad-graph__line" d="M80 80 C 200 40, 200 40, 320 70"></path>
                  <path className="squad-graph__line" d="M60 320 C 200 380, 200 380, 330 330"></path>
                  <path className="squad-graph__line" d="M80 80 C 40 200, 40 200, 60 320"></path>
                  <path className="squad-graph__line" d="M320 70 C 380 200, 380 200, 330 330"></path>
                </svg>
                <div className="squad-graph__brief">
                  <div className="squad-graph__brief-title">Squad finaliste</div>
                  <div className="squad-graph__brief-meta">composée en 31h</div>
                </div>
                <div className="squad-node" style={{ top: '4%', left: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#0A0A0A' }}>CL</div>
                  <div><div className="squad-node__name">Camille L.</div><div className="squad-node__role">Product Designer</div></div>
                </div>
                <div className="squad-node" style={{ top: '4%', right: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#525252' }}>AR</div>
                  <div><div className="squad-node__name">Ayoub R.</div><div className="squad-node__role">Dev React Native</div></div>
                </div>
                <div className="squad-node" style={{ bottom: '4%', left: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#6366F1' }}>MO</div>
                  <div><div className="squad-node__name">Marion O.</div><div className="squad-node__role">PM · Squad Lead</div></div>
                </div>
                <div className="squad-node" style={{ bottom: '4%', right: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#171717' }}>TD</div>
                  <div><div className="squad-node__name">Théo D.</div><div className="squad-node__role">Backend Node</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILIER 3 ZOOM */}
      <section className="sq-section" id="methodologie">
        <div className="sq-container">
          <div className="pillar" data-reveal>
            <div className="pillar__text">
              <div className="pillar__num">03 / Output Score</div>
              <h3 className="pillar__title">Six critères, audités à chaque jalon.</h3>
              <p className="pillar__lede">
                Pas d&apos;étoiles, pas de pouce levé. À chaque jalon de paiement, un auditeur
                indépendant note la livraison sur six dimensions mesurables. Le score
                devient public au moment de la mission suivante.
              </p>
              <ul className="pillar__bullets">
                <li>Respect du scope&nbsp;: livré vs. cahier des charges</li>
                <li>Qualité code&nbsp;: review SonarQube + revue humaine</li>
                <li>Qualité design&nbsp;: revue par 2 designers seniors externes</li>
                <li>Ponctualité&nbsp;: jalons tenus vs. plan</li>
                <li>Communication&nbsp;: NPS client et freelance</li>
                <li>Impact business&nbsp;: KPI mesuré 90 jours post-livraison</li>
              </ul>
            </div>
            <div className="pillar__demo">
              <div className="score-card">
                <div className="score-card__head">
                  <div className="score-card__name">
                    <div className="score-card__avatar" style={{ background: 'var(--color-accent)', color: '#fff' }}>MO</div>
                    <div>
                      <div className="score-card__id">Marion Olivier — Squad Lead</div>
                      <div className="score-card__role">14 missions · 1 incident résolu</div>
                    </div>
                  </div>
                  <div className="score-card__big">9,2<small> / 10</small></div>
                </div>
                <div className="score-bars">
                  {[
                    ['Respect du scope', '9,6', 96, true],
                    ['Qualité du code', '9,1', 91, false],
                    ['Qualité du design', '9,4', 94, false],
                    ['Ponctualité jalons', '8,8', 88, false],
                    ['Communication', '9,5', 95, false],
                    ['Impact business', '8,9', 89, true]
                  ].map(([label, value, width, accent]) => (
                    <div className="score-bar" key={String(label)}>
                      <span>{label}</span>
                      <span className="score-bar__value">{value}</span>
                      <div className="score-bar__row">
                        <div className={`score-bar__fill ${accent ? 'score-bar__fill--accent' : ''}`} style={{ width: `${width}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="score-card__foot">
                  <span>Méthodologie publique · github.com/squadly/output-score</span>
                  <span>v2.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="sec-head">
            <h2 className="sec-head__title">Les garanties qui rendent ça acceptable côté direction.</h2>
            <p className="sec-head__lede">Trois engagements contractuels par défaut. Pas de petits caractères.</p>
          </div>
          <div className="case-grid">
            <article className="case-card">
              <span className="case-card__tag">SLA</span>
              <h3 className="case-card__title">Squad finalisée sous 48 h ouvrées.</h3>
              <p className="case-card__lede">Au-delà, votre brief reste gratuit jusqu&apos;à composition complète. Aucune avance retenue.</p>
            </article>
            <article className="case-card">
              <span className="case-card__tag">Garantie</span>
              <h3 className="case-card__title">Remplacement freelance sous 72 h.</h3>
              <p className="case-card__lede">Si un membre de la squad ne convient pas (compétence, ton, livraison), nous le remplaçons sans coût additionnel.</p>
            </article>
            <article className="case-card">
              <span className="case-card__tag">Propriété intellectuelle</span>
              <h3 className="case-card__title">100 % du code et des fichiers vous appartient.</h3>
              <p className="case-card__lede">Cession de droits intégrale au paiement final. Aucun verrou, aucun lock-in technique.</p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="sec-head">
            <h2 className="sec-head__title">Questions fréquentes.</h2>
            <p className="sec-head__lede">Ce que les CTO et CMO nous demandent en moyenne en premier rendez-vous.</p>
          </div>
          <div className="faq">
            {[
              [
                'Quelle différence concrète avec Malt ou Comet ?',
                "Malt et Comet vendent du temps de freelance individuel. Squadly vend un livrable porté par une squad pluridisciplinaire, avec un squad lead responsable. Vous payez sur jalons de livraison, pas sur jours-homme."
              ],
              [
                "Quel est le ticket d'entrée minimum ?",
                "15 000 € hors taxes pour un Starter MVP (6 semaines, 2 freelances). En dessous, nous redirigeons vers nos confrères : notre modèle ne fonctionne pas sur des projets plus petits."
              ],
              [
                'Comment se passe la facturation ?',
                'Trois jalons standards : 30 % au kick-off, 40 % à mi-parcours, 30 % à la livraison auditée. Possibilité de jalons mensuels pour les Scale Squads (au-delà de 50 k€).'
              ],
              [
                "L'Output Score est-il opposable ?",
                'Oui. La méthodologie est publique (github.com/squadly/output-score), les notes sont auditées par un tiers, et un freelance peut contester via une procédure formelle. La transparence est notre seul moat.'
              ],
              [
                'Qui signe le contrat : Squadly ou les freelances ?',
                'Squadly. Vous avez un seul interlocuteur juridique. Les freelances sont sous-traitants de Squadly pour la mission. Tous les contrats annexes sont disponibles à la demande.'
              ],
              [
                'Et si je veux garder un freelance après la mission ?',
                'Possible. Au-delà de 12 mois de mission Squadly, le freelance peut signer directement avec vous sans pénalité. Avant, frais de transfert de 15 % du brut annuel.'
              ]
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
            <h2 className="cta-final__title">Prêt à voir le process en action sur votre projet ?</h2>
            <div className="cta-final__actions">
              <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">Lancer mon brief</Link>
              <Link className="sq-btn sq-btn--secondary sq-btn--lg" href="/squads">Voir des squads livrées</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
