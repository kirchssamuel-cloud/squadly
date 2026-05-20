import Link from 'next/link';
import BriefBuilder from './BriefBuilder';

export default function ClientDashboard() {
  return (
    <div>
      <div className="metric-strip" style={{ borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)' }}>
        <div className="metric-strip__grid">
          <div className="metric-strip__item">
            <div className="sq-stat__value">0</div>
            <div className="sq-stat__label">Squads actives</div>
          </div>
          <div className="metric-strip__item">
            <div className="sq-stat__value">0</div>
            <div className="sq-stat__label">Jalons en attente</div>
          </div>
          <div className="metric-strip__item">
            <div className="sq-stat__value">—</div>
            <div className="sq-stat__label">Output Score moyen</div>
          </div>
        </div>
      </div>

      <div className="sec-head" style={{ marginTop: 'var(--space-12)' }}>
        <h2 className="sec-head__title">AI Brief Builder</h2>
        <Link className="sq-btn sq-btn--ghost" href="/comment-ca-marche#brief-builder">
          Comment ça marche <span className="sq-btn__chevron">→</span>
        </Link>
      </div>

      <BriefBuilder />

      <div className="sec-head" style={{ marginTop: 'var(--space-12)' }}>
        <h2 className="sec-head__title">Mes squads</h2>
      </div>
      <div className="case-grid">
        <article className="case-card" style={{ borderStyle: 'dashed' }}>
          <span className="case-card__tag">Aucune squad</span>
          <h3 className="case-card__title">Démarrez votre première squad.</h3>
          <p className="case-card__lede">
            Composez votre brief via l&apos;assistant ci-dessus, puis envoyez-le à Charlotte
            qui revient sous 24 h ouvrées.
          </p>
          <div className="case-card__stats">
            <Link className="sq-btn sq-btn--primary sq-btn--sm" href="/contact">Envoyer un brief</Link>
          </div>
        </article>
      </div>
    </div>
  );
}
