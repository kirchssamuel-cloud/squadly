import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="sq-container">
          <div className="hero__grid">
            <div>
              <span className="sq-eyebrow hero__eyebrow">Marketplace de squads · 2026</span>
              <h1 className="hero__title sq-enter">
                Vous achetez un livrable,<br />
                pas un <em>CV</em>.
              </h1>
              <p className="hero__lede sq-enter sq-enter--d1">
                Squadly assemble des équipes pluridisciplinaires de freelances vérifiés
                pour livrer vos projets digitaux en 6 à 12 semaines. Brief intelligent,
                squad en 48h, qualité notée sur les livrables réels.
              </p>
              <div className="hero__actions sq-enter sq-enter--d2">
                <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">
                  Démarrer un brief
                </Link>
                <Link className="sq-btn sq-btn--ghost" href="/comment-ca-marche">
                  Comment ça marche
                  <span className="sq-btn__chevron" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* AI BRIEF BUILDER — mockup */}
            <div className="brief-demo sq-enter sq-enter--d3" aria-hidden="true">
              <div className="brief-demo__chrome">
                <span className="brief-demo__dot"></span>
                <span className="brief-demo__dot"></span>
                <span className="brief-demo__dot"></span>
                <span className="brief-demo__url">app.squadly.fr / brief / nouveau</span>
              </div>
              <div className="brief-demo__body">
                <div className="brief-step brief-step--done">
                  <div className="brief-step__num">✓</div>
                  <div>
                    <div className="brief-step__label">Type de projet</div>
                    <div className="brief-step__value">MVP mobile B2C, fintech assurance</div>
                  </div>
                </div>
                <div className="brief-step brief-step--done">
                  <div className="brief-step__num">✓</div>
                  <div>
                    <div className="brief-step__label">Budget &amp; délai</div>
                    <div className="brief-step__value">35 000 € · livraison 10 semaines</div>
                  </div>
                </div>
                <div className="brief-step brief-step--active">
                  <div className="brief-step__num">3</div>
                  <div>
                    <div className="brief-step__label">Compétences détectées</div>
                    <div className="brief-step__value">L&apos;IA a identifié 4 profils nécessaires.</div>
                    <div className="brief-step__chips">
                      <span className="brief-chip brief-chip--accent">Product Designer</span>
                      <span className="brief-chip brief-chip--accent">Dev React Native</span>
                      <span className="brief-chip brief-chip--accent">Backend Node</span>
                      <span className="brief-chip brief-chip--accent">PM Fintech</span>
                    </div>
                  </div>
                </div>
                <div className="brief-step">
                  <div className="brief-step__num">4</div>
                  <div>
                    <div className="brief-step__label">Validation finale</div>
                    <div className="brief-step__value sq-text-subtle">À venir</div>
                  </div>
                </div>
              </div>
              <div className="brief-demo__input">
                <div className="brief-demo__field">
                  <span>Préciser&nbsp;: « intégration Stripe Connect indispensable »</span>
                  <span className="brief-demo__caret"></span>
                </div>
                <button className="sq-btn sq-btn--primary sq-btn--sm" type="button">Continuer</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRIC STRIP */}
      <section className="metric-strip">
        <div className="sq-container">
          <div className="metric-strip__grid">
            <div className="metric-strip__item">
              <div className="sq-stat__value">48<span style={{ fontSize: '0.55em', letterSpacing: '-0.02em', color: 'var(--text-tertiary)' }}>h</span></div>
              <div className="sq-stat__label">Délai moyen pour composer et valider une squad</div>
            </div>
            <div className="metric-strip__item">
              <div className="sq-stat__value">89<span style={{ fontSize: '0.55em', letterSpacing: '-0.02em', color: 'var(--text-tertiary)' }}>%</span></div>
              <div className="sq-stat__label">Projets livrés sous contrainte de délai initial</div>
            </div>
            <div className="metric-strip__item">
              <div className="sq-stat__value">2,3<span style={{ fontSize: '0.55em', letterSpacing: '-0.02em', color: 'var(--text-tertiary)' }}> M€</span></div>
              <div className="sq-stat__label">Reversés aux freelances sur le dernier trimestre</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section>
        <div className="sq-container logo-row">
          <p className="logo-row__caption">Ils ont monté leur squad avec Squadly</p>
          <span className="logo-row__item">Allianz·X</span>
          <span className="logo-row__item">Doctolib</span>
          <span className="logo-row__item">Qonto</span>
          <span className="logo-row__item">Alan</span>
          <span className="logo-row__item">Spendesk</span>
          <span className="logo-row__item">Mirakl</span>
        </div>
      </section>

      {/* PILIERS PRODUIT */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="sec-head" data-reveal>
            <h2 className="sec-head__title">Trois briques pour transformer un besoin flou en projet livré.</h2>
            <p className="sec-head__lede">Pas de fonctionnalités gadgets. Trois outils qui font le travail&nbsp;: cadrer, assembler, mesurer.</p>
          </div>

          {/* PILIER 1 — AI BRIEF BUILDER */}
          <div className="pillar" data-reveal>
            <div className="pillar__text">
              <div className="pillar__num">01 / AI Brief Builder</div>
              <h3 className="pillar__title">Un cahier des charges précis,<br />sans agence à 30 k€.</h3>
              <p className="pillar__lede">
                Décrivez votre projet en langage courant. L&apos;IA pose les bonnes questions,
                détecte les profils nécessaires, chiffre le scope, et sort un brief
                prêt à exécuter en 12 minutes.
              </p>
              <ul className="pillar__bullets">
                <li>Détection automatique des compétences manquantes</li>
                <li>Chiffrage de scope basé sur 1 200 squads passées</li>
                <li>Export PDF + JSON, signature électronique en option</li>
              </ul>
            </div>
            <div className="pillar__demo">
              <div className="brief-demo">
                <div className="brief-demo__chrome">
                  <span className="brief-demo__dot"></span>
                  <span className="brief-demo__dot"></span>
                  <span className="brief-demo__dot"></span>
                  <span className="brief-demo__url">brief #SQ-2814 · Refonte app mobile</span>
                </div>
                <div className="brief-demo__body">
                  <div className="brief-step brief-step--done">
                    <div className="brief-step__num">✓</div>
                    <div>
                      <div className="brief-step__label">Objectif business</div>
                      <div className="brief-step__value">Augmenter le taux de souscription mobile de 3,2% à 6%</div>
                    </div>
                  </div>
                  <div className="brief-step brief-step--done">
                    <div className="brief-step__num">✓</div>
                    <div>
                      <div className="brief-step__label">Périmètre fonctionnel</div>
                      <div className="brief-step__value">Onboarding KYC, parcours souscription, dashboard contrat</div>
                    </div>
                  </div>
                  <div className="brief-step brief-step--active">
                    <div className="brief-step__num">3</div>
                    <div>
                      <div className="brief-step__label">Contraintes techniques</div>
                      <div className="brief-step__value">L&apos;IA vous propose&nbsp;:</div>
                      <div className="brief-step__chips">
                        <span className="brief-chip">SDK Veriff (KYC)</span>
                        <span className="brief-chip">Tracking RGPD</span>
                        <span className="brief-chip brief-chip--accent">+ Audit sécurité ANSSI ?</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brief-demo__input">
                  <div className="brief-demo__field">
                    <span>L&apos;audit sécurité est-il bloquant pour le go-live ?</span>
                    <span className="brief-demo__caret"></span>
                  </div>
                  <button className="sq-btn sq-btn--primary sq-btn--sm" type="button">Répondre</button>
                </div>
              </div>
            </div>
          </div>

          {/* PILIER 2 — SQUAD COMPOSER */}
          <div className="pillar pillar--reverse" data-reveal>
            <div className="pillar__text">
              <div className="pillar__num">02 / Squad Composer</div>
              <h3 className="pillar__title">La bonne équipe pluridisciplinaire,<br />assemblée en 48h.</h3>
              <p className="pillar__lede">
                À partir du brief, l&apos;algorithme assemble 3 squads candidates, vérifie
                les disponibilités réelles, et propose un trio finaliste. Vous validez,
                le kick-off est calé sous 48 heures ouvrées.
              </p>
              <ul className="pillar__bullets">
                <li>Vetting humain&nbsp;: portfolio + entretien + mission test rémunérée</li>
                <li>Compatibilité fuseau / langue / culture produit prise en compte</li>
                <li>Squad lead nommé responsable du livrable</li>
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
                  <div className="squad-graph__brief-title">Squad #SQ-2814</div>
                  <div className="squad-graph__brief-meta">Fintech · 35 k€ · 10 sem.</div>
                </div>
                <div className="squad-node" style={{ top: '4%', left: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#0A0A0A' }}>CL</div>
                  <div>
                    <div className="squad-node__name">Camille L.</div>
                    <div className="squad-node__role">Product Designer</div>
                  </div>
                </div>
                <div className="squad-node" style={{ top: '4%', right: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#525252' }}>AR</div>
                  <div>
                    <div className="squad-node__name">Ayoub R.</div>
                    <div className="squad-node__role">Dev React Native</div>
                  </div>
                </div>
                <div className="squad-node" style={{ bottom: '4%', left: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#6366F1' }}>MO</div>
                  <div>
                    <div className="squad-node__name">Marion O.</div>
                    <div className="squad-node__role">PM Fintech · Lead</div>
                  </div>
                </div>
                <div className="squad-node" style={{ bottom: '4%', right: '4%' }}>
                  <div className="squad-node__avatar" style={{ background: '#171717' }}>TD</div>
                  <div>
                    <div className="squad-node__name">Théo D.</div>
                    <div className="squad-node__role">Backend Node</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILIER 3 — OUTPUT SCORE */}
          <div className="pillar" data-reveal>
            <div className="pillar__text">
              <div className="pillar__num">03 / Output Score</div>
              <h3 className="pillar__title">Une note de qualité<br />basée sur les livrables réels.</h3>
              <p className="pillar__lede">
                Pas d&apos;étoiles données par sympathie. Chaque squad est notée sur 6 critères
                mesurables, audités à la livraison&nbsp;: code, design, respect du scope,
                ponctualité, communication, impact business.
              </p>
              <ul className="pillar__bullets">
                <li>Audit indépendant à chaque jalon de paiement</li>
                <li>Score visible côté client avant assignation</li>
                <li>Open data&nbsp;: méthodologie publique sur GitHub</li>
              </ul>
            </div>
            <div className="pillar__demo">
              <div className="score-card">
                <div className="score-card__head">
                  <div className="score-card__name">
                    <div className="score-card__avatar" style={{ background: 'var(--color-accent)', color: '#fff' }}>MO</div>
                    <div>
                      <div className="score-card__id">Marion Olivier — Squad Lead</div>
                      <div className="score-card__role">PM Fintech · 14 missions Squadly</div>
                    </div>
                  </div>
                  <div className="score-card__big">9,2<small> / 10</small></div>
                </div>

                <div className="score-bars">
                  {[
                    ['Respect du scope', '9,6', 96, true],
                    ['Qualité du code livré', '9,1', 91, false],
                    ['Qualité du design', '9,4', 94, false],
                    ['Ponctualité jalons', '8,8', 88, false],
                    ['Communication client', '9,5', 95, false],
                    ['Impact business mesuré', '8,9', 89, true]
                  ].map(([label, value, width, accent]) => (
                    <div className="score-bar" key={String(label)}>
                      <span>{label}</span>
                      <span className="score-bar__value">{value}</span>
                      <div className="score-bar__row">
                        <div
                          className={`score-bar__fill ${accent ? 'score-bar__fill--accent' : ''}`}
                          style={{ width: `${width}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="score-card__foot">
                  <span>Audité par Squadly · 12 mars 2026</span>
                  <span>Voir méthodologie →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAS CLIENTS APERÇU */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="sec-head" data-reveal>
            <h2 className="sec-head__title">Quelques squads livrées récemment.</h2>
            <Link className="sq-btn sq-btn--ghost" href="/squads">
              Voir tous les cas <span className="sq-btn__chevron">→</span>
            </Link>
          </div>

          <div className="case-grid">
            <article className="case-card" data-reveal>
              <span className="case-card__tag">MVP · Fintech</span>
              <h3 className="case-card__title">Refonte mobile pour une fintech série A.</h3>
              <p className="case-card__lede">Reconception de l&apos;onboarding KYC et du parcours de souscription pour une néo-assurance basée à Paris.</p>
              <div className="case-card__stats">
                <div><div className="case-card__stat-v">10 sem.</div><div className="case-card__stat-l">Livraison</div></div>
                <div><div className="case-card__stat-v">+87%</div><div className="case-card__stat-l">Conversion</div></div>
                <div><div className="case-card__stat-v">35 k€</div><div className="case-card__stat-l">Ticket squad</div></div>
              </div>
            </article>

            <article className="case-card" data-reveal>
              <span className="case-card__tag">Growth · SaaS</span>
              <h3 className="case-card__title">Lancement growth d&apos;un SaaS RH (4 800 leads en 8 sem.).</h3>
              <p className="case-card__lede">Stack outbound, SEO programmatique et reporting pour un éditeur logiciel basé à Lyon.</p>
              <div className="case-card__stats">
                <div><div className="case-card__stat-v">8 sem.</div><div className="case-card__stat-l">Livraison</div></div>
                <div><div className="case-card__stat-v">4 800</div><div className="case-card__stat-l">Leads MQL</div></div>
                <div><div className="case-card__stat-v">22 k€</div><div className="case-card__stat-l">Ticket squad</div></div>
              </div>
            </article>

            <article className="case-card" data-reveal>
              <span className="case-card__tag">IA · Industrie</span>
              <h3 className="case-card__title">Déploiement IA documentaire pour un groupe industriel.</h3>
              <p className="case-card__lede">Extraction de données sur 18 000 contrats fournisseurs pour une ETI de l&apos;agroalimentaire.</p>
              <div className="case-card__stats">
                <div><div className="case-card__stat-v">12 sem.</div><div className="case-card__stat-l">Livraison</div></div>
                <div><div className="case-card__stat-v">96%</div><div className="case-card__stat-l">Précision</div></div>
                <div><div className="case-card__stat-v">78 k€</div><div className="case-card__stat-l">Ticket squad</div></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="cta-final" data-reveal>
            <h2 className="cta-final__title">Décrivez votre projet. On compose votre squad en 48 heures.</h2>
            <div className="cta-final__actions">
              <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">Démarrer un brief</Link>
              <Link className="sq-btn sq-btn--secondary sq-btn--lg" href="/comment-ca-marche">Voir le process</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
