import Link from 'next/link';

export const metadata = {
  title: 'Page introuvable — Squadly',
  robots: { index: false }
};

export default function NotFound() {
  return (
    <section className="hero">
      <div className="sq-container hero__compact" style={{ maxWidth: 720, textAlign: 'center' }}>
        <span className="sq-eyebrow">Erreur 404</span>
        <h1 className="hero__title" style={{ fontSize: 'clamp(56px, 8vw, 96px)' }}>404</h1>
        <p className="hero__lede">
          Cette page n&apos;existe pas (ou plus). Le lien que vous avez suivi est cassé, ou la
          page a été retirée. Revenez à l&apos;accueil, ou continuez ailleurs.
        </p>
        <div className="hero__actions" style={{ justifyContent: 'center' }}>
          <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/">Retour à l&apos;accueil</Link>
          <Link className="sq-btn sq-btn--ghost" href="/blog">
            Lire les articles <span className="sq-btn__chevron">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
