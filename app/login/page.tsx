import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Connexion — Squadly',
  description: 'Connectez-vous à votre espace Squadly pour suivre vos squads et vos jalons.'
};

export default function LoginPage() {
  return (
    <section className="hero">
      <div className="sq-container hero__compact" style={{ maxWidth: 480 }}>
        <span className="sq-eyebrow">Connexion</span>
        <h1 className="hero__title" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
          Votre espace Squadly.
        </h1>
        <p className="hero__lede">
          On vous envoie un lien magique par email. Aucun mot de passe à retenir.
        </p>
        <LoginForm />
      </div>
    </section>
  );
}
