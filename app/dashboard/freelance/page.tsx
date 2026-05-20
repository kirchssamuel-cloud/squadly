import Link from 'next/link';

export default function FreelanceDashboard() {
  return (
    <div>
      <div className="metric-strip" style={{ borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)' }}>
        <div className="metric-strip__grid">
          <div className="metric-strip__item">
            <div className="sq-stat__value">—</div>
            <div className="sq-stat__label">Output Score</div>
          </div>
          <div className="metric-strip__item">
            <div className="sq-stat__value">0</div>
            <div className="sq-stat__label">Missions en cours</div>
          </div>
          <div className="metric-strip__item">
            <div className="sq-stat__value">0 €</div>
            <div className="sq-stat__label">Encours de paiement</div>
          </div>
        </div>
      </div>

      <div className="sec-head" style={{ marginTop: 'var(--space-12)' }}>
        <h2 className="sec-head__title">Squads ouvertes</h2>
        <Link className="sq-btn sq-btn--ghost" href="/freelances">
          Pourquoi Squadly ? <span className="sq-btn__chevron">→</span>
        </Link>
      </div>

      <div className="case-grid">
        <article className="case-card" style={{ borderStyle: 'dashed' }}>
          <span className="case-card__tag">À venir</span>
          <h3 className="case-card__title">Aucune squad disponible pour votre profil pour l&apos;instant.</h3>
          <p className="case-card__lede">
            Complétez votre profil et passez le vetting pour apparaître dans les squads candidates.
          </p>
          <div className="case-card__stats">
            <Link className="sq-btn sq-btn--primary sq-btn--sm" href="/contact">Postuler / compléter mon profil</Link>
          </div>
        </article>
      </div>

      <div className="sec-head" style={{ marginTop: 'var(--space-12)' }}>
        <h2 className="sec-head__title">Mon Output Score</h2>
      </div>
      <div className="score-card">
        <div className="score-card__head">
          <div className="score-card__name">
            <div className="score-card__avatar" style={{ background: 'var(--color-accent)', color: '#fff' }}>?</div>
            <div>
              <div className="score-card__id">Profil non noté</div>
              <div className="score-card__role">Complétez votre première mission test pour initialiser votre score.</div>
            </div>
          </div>
          <div className="score-card__big">—</div>
        </div>
      </div>
    </div>
  );
}
