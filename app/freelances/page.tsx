import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelances — Squadly',
  description:
    "Pour freelances seniors : missions premium en squad, revenu moyen 6 200 €/mois, paiement sur livrable. Top 5% des candidatures retenues."
};

export default function FreelancesPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="sq-container hero__compact">
          <span className="sq-eyebrow">Pour freelances seniors · 5+ ans d&apos;expérience</span>
          <h1 className="hero__title">Livrez du travail,<br />pas des <em>candidatures</em>.</h1>
          <p className="hero__lede">
            Squadly compose des squads pour des projets premium. Vous travaillez en équipe,
            vous êtes payé sur livrable, votre Output Score remplace les étoiles.
          </p>
          <div className="hero__actions">
            <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">Postuler à Squadly</Link>
            <Link className="sq-btn sq-btn--ghost" href="#comparatif">
              Pourquoi pas Malt ? <span className="sq-btn__chevron">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* METRIC STRIP */}
      <section className="metric-strip">
        <div className="sq-container">
          <div className="metric-strip__grid">
            <div className="metric-strip__item">
              <div className="sq-stat__value">6 200<span style={{ fontSize: '0.45em', letterSpacing: '-0.02em', color: 'var(--text-tertiary)' }}> €</span></div>
              <div className="sq-stat__label">Revenu mensuel moyen d&apos;un freelance Premium en mission</div>
            </div>
            <div className="metric-strip__item">
              <div className="sq-stat__value">73<span style={{ fontSize: '0.55em', color: 'var(--text-tertiary)' }}>%</span></div>
              <div className="sq-stat__label">Missions reconduites au-delà du sprint initial</div>
            </div>
            <div className="metric-strip__item">
              <div className="sq-stat__value">5<span style={{ fontSize: '0.55em', color: 'var(--text-tertiary)' }}>%</span></div>
              <div className="sq-stat__label">Taux d&apos;acceptation des candidatures freelance</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS CANDIDATURE */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="sec-head">
            <h2 className="sec-head__title">Quatre étapes pour rejoindre les squads.</h2>
            <p className="sec-head__lede">Compter 10 à 15 jours du dossier à la première mission. Pas de pitch commercial.</p>
          </div>
          <div className="timeline">
            <div className="timeline__step is-current">
              <h3>Dossier en ligne</h3>
              <p>Portfolio + LinkedIn + 3 livrables emblématiques. 15 min à remplir.</p>
              <small>Jour 0</small>
            </div>
            <div className="timeline__step">
              <h3>Entretien squad lead</h3>
              <p>45 min avec un squad lead Squadly de votre métier. Sur Zoom.</p>
              <small>Jour 2–5</small>
            </div>
            <div className="timeline__step">
              <h3>Mission test rémunérée</h3>
              <p>Un livrable réel sur 5–8 jours, payé au taux marché. Audité par 2 pairs.</p>
              <small>Jour 6–14</small>
            </div>
            <div className="timeline__step">
              <h3>Activation profil</h3>
              <p>Output Score initialisé. Vous apparaissez dans les squads candidates dès le brief suivant.</p>
              <small>Jour 15</small>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIF */}
      <section className="sq-section" id="comparatif">
        <div className="sq-container">
          <div className="sec-head">
            <h2 className="sec-head__title">Côté freelance, ce que ça change vs. marketplace classique.</h2>
            <p className="sec-head__lede">Comparatif honnête. On ne convient pas à tout le monde — et c&apos;est très bien.</p>
          </div>

          <table className="compare">
            <thead>
              <tr>
                <th></th>
                <th>Marketplace freelance classique</th>
                <th className="compare__col-sq">Squadly</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Unité de vente</td><td>Jour-homme (TJM)</td><td className="compare__col-sq"><strong>Livrable signé en squad</strong></td></tr>
              <tr><td>Temps passé à pitcher</td><td>30 % du mois en moyenne</td><td className="compare__col-sq"><strong>Zéro</strong> — squads pré-composées</td></tr>
              <tr><td>Évaluation</td><td>Étoiles données par le client</td><td className="compare__col-sq">Output Score audité, 6 critères</td></tr>
              <tr><td>Commission marketplace</td><td>10 à 20 % (variable, peu lisible)</td><td className="compare__col-sq">20 % fixe, communiquée au client</td></tr>
              <tr><td>Délai de paiement</td><td>30 à 60 jours</td><td className="compare__col-sq"><strong>7 jours après audit</strong> du jalon</td></tr>
              <tr><td>Type de projets</td><td>Petits boulots à projets à 100 k€</td><td className="compare__col-sq">Tickets entre 15 et 150 k€ uniquement</td></tr>
              <tr><td>Sentiment dominant</td><td>« Trouve toi-même le client »</td><td className="compare__col-sq">« On t&apos;amène un livrable à signer »</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PREMIUM BANNER */}
      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="premium-banner">
            <div>
              <span className="sq-eyebrow">Squadly Premium</span>
              <h3 className="premium-banner__title">29 €/mois pour passer devant la file.</h3>
              <p className="premium-banner__lede">
                Accès prioritaire aux squads finalistes, multiplicateur Output Score x1.2,
                un coaching de 30 minutes par trimestre avec un squad lead senior,
                et le label « Squadly Verified » sur votre LinkedIn.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="premium-banner__price">29 €<small> / mois</small></div>
              <Link className="sq-btn sq-btn--primary" href="/pricing" style={{ marginTop: 'var(--space-4)' }}>
                Voir Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="sec-head">
            <h2 className="sec-head__title">Trois freelances Squadly, trois métiers, trois trajectoires.</h2>
            <p className="sec-head__lede">Pas des témoignages dictés. Vous pouvez les contacter sur LinkedIn.</p>
          </div>

          <div className="team-grid">
            <div className="person">
              <div className="person__portrait" style={{ background: '#0A0A0A', color: '#FAFAFA' }}>CL</div>
              <div>
                <div className="person__name">Camille Lefèvre</div>
                <div className="person__role">Product Designer · Paris</div>
              </div>
              <p className="sq-body-sm sq-text-muted">« Sur Malt je facturais 600 €/jour et je passais 8 jours par mois à pitcher. Avec Squadly, je suis sur 2 squads en parallèle et je n&apos;écris plus une seule propale. »</p>
              <span className="person__prev">AOV 2025 : 78 k€ · 6 squads · OS 9,1</span>
            </div>
            <div className="person">
              <div className="person__portrait" style={{ background: '#525252', color: '#FAFAFA' }}>AR</div>
              <div>
                <div className="person__name">Ayoub Rahmani</div>
                <div className="person__role">Dev React Native · Marseille</div>
              </div>
              <p className="sq-body-sm sq-text-muted">« Le Premium se rentabilise en deux jours. La transparence sur l&apos;Output Score est ce qui me retient — je sais exactement pourquoi je suis noté 9,4 sur la qualité du code. »</p>
              <span className="person__prev">AOV 2025 : 92 k€ · 4 squads · OS 9,4</span>
            </div>
            <div className="person">
              <div className="person__portrait" style={{ background: '#6366F1', color: '#fff' }}>MO</div>
              <div>
                <div className="person__name">Marion Olivier</div>
                <div className="person__role">PM Fintech · Squad Lead · Lyon</div>
              </div>
              <p className="sq-body-sm sq-text-muted">« Être squad lead, c&apos;est cadrer un projet, défendre le scope, livrer. Sans avoir à gérer la facturation ni les contrats. Pour 20 % de commission, c&apos;est honnête. »</p>
              <span className="person__prev">AOV 2025 : 124 k€ · 9 squads · OS 9,2</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="cta-final">
            <h2 className="cta-final__title">Si vous êtes top 5 %, vous avez votre place chez Squadly.</h2>
            <div className="cta-final__actions">
              <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">Postuler à Squadly</Link>
              <Link className="sq-btn sq-btn--secondary sq-btn--lg" href="/pricing">Voir Premium</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
