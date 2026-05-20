import type { Metadata } from 'next';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles.css';

export const metadata: Metadata = {
  title: 'Squadly — Vous achetez un livrable, pas un CV.',
  description:
    "Squadly assemble des squads de freelances vérifiés pour livrer vos projets digitaux clés en main : MVP, refonte, growth, IA. 48h pour composer l'équipe.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  openGraph: {
    title: 'Squadly — Vous achetez un livrable, pas un CV.',
    description:
      'Marketplace de squads de freelances vérifiés. Brief intelligent, squad en 48h, qualité notée sur les livrables.',
    url: '/',
    siteName: 'Squadly',
    locale: 'fr_FR',
    type: 'website'
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
        <Nav />
        {children}
        <Footer />
        <script src="/scripts/theme.js" defer />
      </body>
    </html>
  );
}
