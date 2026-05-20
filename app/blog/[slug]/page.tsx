import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_POSTS, getBlogPost } from '@/lib/blog';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Article introuvable — Squadly' };
  return {
    title: `${post.title} — Squadly`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `/blog/${post.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description
    }
  };
}

function renderMarkdown(md: string): string {
  // Mini renderer maison — pas de dépendance. Suffisant pour nos blocs.
  const lines = md.split('\n');
  let html = '';
  let inList = false;
  let inTable = false;
  let inCode = false;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trimEnd();

    if (line.startsWith('```')) {
      if (inCode) {
        html += '</code></pre>';
        inCode = false;
      } else {
        html += '<pre class="blog__code"><code>';
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      html += escapeHtml(raw) + '\n';
      continue;
    }

    if (line.startsWith('|') && lines[i + 1]?.match(/^\|[\s-:|]+\|/)) {
      inTable = true;
      html += '<div class="blog__table-wrap"><table class="blog__table"><thead><tr>';
      const cells = line.split('|').slice(1, -1);
      for (const c of cells) html += `<th>${escapeInline(c.trim())}</th>`;
      html += '</tr></thead><tbody>';
      i++; // skip separator line
      continue;
    }
    if (inTable) {
      if (!line.startsWith('|')) {
        html += '</tbody></table></div>';
        inTable = false;
      } else {
        const cells = line.split('|').slice(1, -1);
        html += '<tr>';
        for (const c of cells) html += `<td>${escapeInline(c.trim())}</td>`;
        html += '</tr>';
        continue;
      }
    }

    if (line.startsWith('### ')) {
      flushList();
      html += `<h3>${escapeInline(line.slice(4))}</h3>`;
    } else if (line.startsWith('## ')) {
      flushList();
      html += `<h2>${escapeInline(line.slice(3))}</h2>`;
    } else if (line.startsWith('# ')) {
      flushList();
      html += `<h1>${escapeInline(line.slice(2))}</h1>`;
    } else if (line.startsWith('> ')) {
      flushList();
      html += `<blockquote>${escapeInline(line.slice(2))}</blockquote>`;
    } else if (line.match(/^\d+\.\s/)) {
      if (!inList) {
        html += '<ol>';
        inList = true;
      }
      html += `<li>${escapeInline(line.replace(/^\d+\.\s/, ''))}</li>`;
    } else if (line.startsWith('- ')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      html += `<li>${escapeInline(line.slice(2))}</li>`;
    } else if (line === '') {
      flushList();
    } else {
      flushList();
      html += `<p>${escapeInline(line)}</p>`;
    }
  }
  if (inTable) html += '</tbody></table></div>';
  if (inCode) html += '</code></pre>';

  function flushList() {
    if (inList) {
      html += html.endsWith('</li>') ? '</ul>' : '';
      inList = false;
    }
  }

  return html;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeInline(str: string): string {
  // bold, italic, code, links
  let s = escapeHtml(str);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return s;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.content);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    keywords: post.keywords.join(', '),
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole
    },
    publisher: {
      '@type': 'Organization',
      name: 'Squadly',
      url: 'https://squadly-app.netlify.app'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://squadly-app.netlify.app/blog/${post.slug}`
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <section className="hero">
          <div className="sq-container hero__compact" style={{ maxWidth: 820 }}>
            <span className="sq-eyebrow">{post.category} · {post.readingMinutes} min de lecture</span>
            <h1 className="hero__title" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
              {post.title}
            </h1>
            <p className="hero__lede">{post.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              <div className="score-card__avatar" style={{ background: post.authorColor, color: '#fff' }}>
                {post.authorInitials}
              </div>
              <div>
                <div className="score-card__id">{post.author}</div>
                <div className="score-card__role">
                  {post.authorRole} ·{' '}
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sq-section sq-section--tight">
          <div className="sq-container" style={{ maxWidth: 760 }}>
            <div className="blog__content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>

        <section className="sq-section sq-section--tight">
          <div className="sq-container">
            <div className="cta-final">
              <h2 className="cta-final__title">Démarrer un brief, ça prend 12 minutes.</h2>
              <div className="cta-final__actions">
                <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">Démarrer un brief</Link>
                <Link className="sq-btn sq-btn--secondary sq-btn--lg" href="/blog">Voir les autres articles</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
