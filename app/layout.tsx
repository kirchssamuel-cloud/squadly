import type { Metadata } from 'next';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import './styles.css';

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://squadly-app.netlify.app';

export const metadata: Metadata = {
  title: {
    default: 'Squadly — Vous achetez un livrable, pas un CV.',
    template: '%s — Squadly'
  },
  description:
    "Squadly assemble des squads de freelances vérifiés pour livrer vos projets digitaux clés en main : MVP, refonte, growth, IA. 48h pour composer l'équipe.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    'marketplace freelance',
    'squad freelance',
    'alternative malt',
    'freelance vs agence',
    'développement MVP',
    'refonte digitale',
    'lancement growth',
    'déploiement IA',
    'freelance vérifié',
    'output score'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Squadly — Vous achetez un livrable, pas un CV.',
    description:
      'Marketplace de squads de freelances vérifiés. Brief intelligent, squad en 48h, qualité notée sur les livrables.',
    url: '/',
    siteName: 'Squadly',
    locale: 'fr_FR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squadly — Vous achetez un livrable, pas un CV.',
    description: "Marketplace de squads de freelances vérifiés pour livrer vos projets digitaux."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }
  }
};

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Squadly',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    'Marketplace de squads de freelances vérifiés. Brief intelligent, squad en 48h, garantie résultat.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42 rue de Paradis',
    addressLocality: 'Paris',
    postalCode: '75010',
    addressCountry: 'FR'
  },
  email: 'hello@squadly.fr',
  sameAs: ['https://github.com/kirchssamuel-cloud/squadly']
};

const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Squadly',
  url: SITE_URL,
  inLanguage: 'fr-FR',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <link rel="stylesheet" href="/styles/design-tokens.css" />
        <link rel="stylesheet" href="/styles/site.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('sq-theme');
                  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body>
        <a className="sq-skip-link" href="#main">Aller au contenu</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        <AnnouncementBar />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script src="/scripts/theme.js" defer />
      </body>
    </html>
  );
}
