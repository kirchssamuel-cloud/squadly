import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import NavLink from './NavLink';

export default function Nav() {
  return (
    <header className="sq-nav">
      <div className="sq-container nav__inner">
        <Link className="nav__logo" href="/">
          <span className="nav__logo-mark" aria-hidden="true"></span>
          Squadly
        </Link>
        <nav className="nav__links" aria-label="Navigation principale">
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/comment-ca-marche">Comment ça marche</NavLink>
          <NavLink href="/squads">Squads</NavLink>
          <NavLink href="/freelances">Freelances</NavLink>
          <NavLink href="/pricing">Tarifs</NavLink>
          <NavLink href="/a-propos">À propos</NavLink>
        </nav>
        <div className="nav__cta">
          <ThemeToggle />
          <Link className="sq-btn sq-btn--primary sq-btn--sm" href="/contact">
            Démarrer un brief
          </Link>
        </div>
      </div>
    </header>
  );
}
