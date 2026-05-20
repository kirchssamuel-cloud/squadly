import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Squadly',
  description:
    "Décrivez votre projet en 2 minutes. Réponse de Charlotte Faivre sous 24 h ouvrées. Brief gratuit jusqu'à composition de la squad."
};

export default function ContactPage() {
  return (
    <>
      {/* HERO COMPACT */}
      <section className="hero">
        <div className="sq-container hero__compact" style={{ maxWidth: 720 }}>
          <span className="sq-eyebrow">Contact · Brief gratuit</span>
          <h1 className="hero__title" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
            Décrivez votre projet<br />en deux minutes.
          </h1>
          <p className="hero__lede">
            Pas de formulaire à rallonge. Quatre champs, un encart de description.
            Réponse personnalisée sous 24 heures ouvrées par Charlotte Faivre, Head of Growth.
          </p>
        </div>
      </section>

      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="contact-grid">
            <ContactForm />

            <aside className="contact-side">
              <span className="sq-eyebrow">Ce qui se passe ensuite</span>
              <div className="contact-side__steps">
                <div className="contact-side__step">
                  <span className="contact-side__step-n">1</span>
                  <div>
                    <div className="contact-side__step-t">Première réponse sous 24 h</div>
                    <div className="contact-side__step-d">Charlotte Faivre vous écrit personnellement avec 2–3 questions de cadrage.</div>
                  </div>
                </div>
                <div className="contact-side__step">
                  <span className="contact-side__step-n">2</span>
                  <div>
                    <div className="contact-side__step-t">Brief structuré ensemble</div>
                    <div className="contact-side__step-d">Visio de 45 min pour passer le brief dans l&apos;AI Brief Builder. Aucun engagement.</div>
                  </div>
                </div>
                <div className="contact-side__step">
                  <span className="contact-side__step-n">3</span>
                  <div>
                    <div className="contact-side__step-t">Squad proposée sous 48 h</div>
                    <div className="contact-side__step-d">Trois squads candidates, une recommandée. Vous validez, on kick-off.</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--border-subtle)' }}>
                <div className="score-card__avatar" style={{ background: '#6366F1', color: '#fff' }}>CF</div>
                <div>
                  <div className="score-card__id">Charlotte Faivre</div>
                  <div className="score-card__role">Head of Growth · charlotte@squadly.fr</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="case-grid">
            <article className="case-card">
              <span className="case-card__tag">Brief client</span>
              <h3 className="case-card__title" style={{ fontSize: 18 }}>sales@squadly.fr</h3>
              <p className="case-card__lede">Pour démarrer un projet ou demander un devis.</p>
            </article>
            <article className="case-card">
              <span className="case-card__tag">Candidature freelance</span>
              <h3 className="case-card__title" style={{ fontSize: 18 }}>freelance@squadly.fr</h3>
              <p className="case-card__lede">Pour candidater ou poser une question sur le process de vetting.</p>
            </article>
            <article className="case-card">
              <span className="case-card__tag">Presse</span>
              <h3 className="case-card__title" style={{ fontSize: 18 }}>presse@squadly.fr</h3>
              <p className="case-card__lede">Kit presse, demandes d&apos;interview, données marché.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
