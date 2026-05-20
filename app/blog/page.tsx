import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog Squadly — méthodologie, comparatifs, stratégie projet',
  description:
    "Articles de fond sur le freelancing en squad, les comparatifs marketplaces, et la méthodologie de cadrage projet par les équipes Squadly.",
  alternates: { canonical: '/blog' }
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="hero">
        <div className="sq-container hero__compact">
          <span className="sq-eyebrow">Blog · Méthodologie & comparatifs</span>
          <h1 className="hero__title">Ce qu&apos;on apprend<br />en livrant 1 000 squads.</h1>
          <p className="hero__lede">
            Articles de fond écrits par l&apos;équipe Squadly. Pas de SEO bourrin, pas de
            content marketing creux. Des analyses concrètes pour cadrer, vendre et livrer
            mieux vos projets digitaux.
          </p>
        </div>
      </section>

      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="case-grid">
            {BLOG_POSTS.map((post) => (
              <article className="case-card" key={post.slug}>
                <span className="case-card__tag">{post.category} · {post.readingMinutes} min</span>
                <h2 className="case-card__title">
                  <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h2>
                <p className="case-card__lede">{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
                  <div className="score-card__avatar" style={{ background: post.authorColor, color: '#fff' }}>
                    {post.authorInitials}
                  </div>
                  <div>
                    <div className="score-card__id">{post.author}</div>
                    <div className="score-card__role">{post.authorRole} · {new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="cta-final">
            <h2 className="cta-final__title">Pas d&apos;abonnement newsletter. Un article par mois, max.</h2>
            <div className="cta-final__actions">
              <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">
                Démarrer un brief
              </Link>
              <Link className="sq-btn sq-btn--secondary sq-btn--lg" href="/comment-ca-marche">
                Voir le process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
