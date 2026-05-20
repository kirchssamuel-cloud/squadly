import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog';

const SITE = process.env.NEXT_PUBLIC_APP_URL ?? 'https://squadly-app.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/comment-ca-marche', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/squads', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/freelances', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/a-propos', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const }
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE}${r.url}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }))
  ];
}
