import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="sq-footer">
      <div className="sq-container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="nav__logo" href="/">
              <span className="nav__logo-mark" aria-hidden="true"></span>
              Squadly
            </Link>
            <p className="footer__brand-tag">
              Vous achetez un livrable, pas un CV. Marketplace de squads de freelances vérifiés,
              basée à Paris.
            </p>
          </div>
          <div>
            <p className="footer__col-title">Produit</p>
            <ul className="footer__col-links">
              <li><Link href="/comment-ca-marche">Comment ça marche</Link></li>
              <li><Link href="/squads">Squads livrées</Link></li>
              <li><Link href="/pricing">Tarifs</Link></li>
              <li><Link href="/freelances">Devenir freelance</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer__col-title">Ressources</p>
            <ul className="footer__col-links">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/comment-ca-marche#methodologie">Méthodologie Output Score</Link></li>
              <li><Link href="/blog/comment-rediger-brief-freelance-projet-reussi">Guide du brief</Link></li>
              <li><Link href="/blog/malt-vs-squadly-comparatif-2026">Malt vs Squadly</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer__col-title">Entreprise</p>
            <ul className="footer__col-links">
              <li><Link href="/a-propos">À propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/a-propos">On recrute</Link></li>
              <li><a href="mailto:presse@squadly.fr">Presse</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Squadly SAS · 42 rue de Paradis, 75010 Paris</span>
          <span className="sq-mono">v 2026.05 · Statut : opérationnel</span>
        </div>
      </div>
    </footer>
  );
}
