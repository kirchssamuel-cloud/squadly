import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos — Squadly',
  description:
    "Fondée en 2024 à Paris par d'anciens product leads de Doctolib, Qonto et BlaBlaCar. Mission : remplacer la marketplace de CV par une marketplace de livrables."
};

export default function AProposPage() {
  return (
    <>
      {/* HERO MANIFESTO */}
      <section className="hero">
        <div className="sq-container hero__compact" style={{ maxWidth: 920 }}>
          <span className="sq-eyebrow">Manifesto · Paris, 2026</span>
          <h1 className="hero__title">La marketplace de CV<br />a fait son temps.</h1>
          <p className="hero__lede">
            Pendant dix ans, on a digitalisé l&apos;envoi de CV en croyant régler la friction
            du recrutement projet. On a juste industrialisé le pitch. Squadly assemble
            des équipes qui livrent, et facture le livrable, pas le pitch.
          </p>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="pillar" style={{ borderTop: 0, paddingTop: 0 }}>
            <div className="pillar__text">
              <div className="pillar__num">Histoire</div>
              <h3 className="pillar__title">Fondée en octobre 2024, par trois product leads fatigués des SOW à rallonge.</h3>
              <p className="pillar__lede">
                Constat partagé : la majorité des projets digitaux que nos boîtes lançaient
                mouraient au pitch ou au cadrage. Trop de jours-homme vendus, pas assez
                de livrables signés. On a démarré Squadly avec 12 freelances triés à la main,
                un seul client (Allianz·X), et une obsession : facturer le résultat.
              </p>
              <ul className="pillar__bullets">
                <li>Oct. 2024 · Première squad livrée pour Allianz·X France</li>
                <li>Fév. 2025 · Levée seed de 3,4 M€ menée par Resonance VC</li>
                <li>Juin 2025 · 200 freelances actifs, 1,2 M€ de GMV trimestriel</li>
                <li>Jan. 2026 · 1 000 squads livrées · ouverture Allemagne reportée à 2027</li>
              </ul>
            </div>
            <div className="pillar__demo">
              <div className="score-card" style={{ padding: 'var(--space-8)' }}>
                <div className="sq-eyebrow">Squadly en chiffres · mai 2026</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
                  <div>
                    <div className="calc__big">1 230</div>
                    <div className="sq-caption">Squads livrées</div>
                  </div>
                  <div>
                    <div className="calc__big">485</div>
                    <div className="sq-caption">Freelances actifs</div>
                  </div>
                  <div>
                    <div className="calc__big">9,1<small> /10</small></div>
                    <div className="sq-caption">Output Score moyen</div>
                  </div>
                  <div>
                    <div className="calc__big">31</div>
                    <div className="sq-caption">Squadlies (salariés)</div>
                  </div>
                </div>
                <div className="score-card__foot">
                  <span>Siège · 42 rue de Paradis, 75010 Paris</span>
                  <span>SIREN 932 481 207</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="sec-head">
            <h2 className="sec-head__title">L&apos;équipe fondatrice et le noyau dur.</h2>
            <p className="sec-head__lede">Six personnes ici ; vingt-cinq autres derrière, qui ne tiennent pas dans une grille de 6.</p>
          </div>
          <div className="team-grid">
            {[
              { i: 'JR', name: 'Juliette Rousset', role: 'CEO & co-fondatrice', bio: 'A monté l’équipe Growth de Qonto de 4 à 60 personnes en 4 ans. Cherche à supprimer 100 % du pitch dans le freelancing.', prev: 'ex-Qonto · ex-Bain & Co', bg: '#0A0A0A', fg: '#FAFAFA' },
              { i: 'NV', name: 'Nicolas Vasseur', role: 'CTO & co-fondateur', bio: 'A bâti la plateforme messagerie sécurisée de Doctolib. Auteur de l’algorithme Squad Composer.', prev: 'ex-Doctolib · ex-Datadog', bg: '#525252', fg: '#FAFAFA' },
              { i: 'EM', name: 'Eliott Marchetti', role: 'CPO & co-fondateur', bio: "Ancien Head of Product de BlaBlaCar France, a écrit la première version de l'AI Brief Builder un dimanche.", prev: 'ex-BlaBlaCar · ex-Spendesk', bg: '#6366F1', fg: '#fff' },
              { i: 'CB', name: 'Clarisse Béjar', role: 'Head of Trust & Quality', bio: "Pilote la méthodologie Output Score. Tient la barre de l'audit, refuse trois embauches sur quatre. Préfère ça.", prev: 'ex-Stripe · ex-AB Tasty', bg: '#171717', fg: '#FAFAFA' },
              { i: 'SK', name: 'Sami Khedira', role: 'Head of Talent (Freelances)', bio: "Mène le vetting freelance. 5 % d'acceptation, c'est lui. Vient de la sélection des coachs internes chez Decathlon.", prev: 'ex-Decathlon · ex-Lydia', bg: '#A3A3A3', fg: '#0A0A0A' },
              { i: 'CF', name: 'Charlotte Faivre', role: 'Head of Growth', bio: "Construit la machine d'acquisition côté clients. A lancé le pricing transparent qui fait tourner la marketplace aujourd'hui.", prev: 'ex-Pennylane · ex-Lemlist', bg: '#404040', fg: '#FAFAFA' }
            ].map((p) => (
              <article className="person" key={p.name}>
                <div className="person__portrait" style={{ background: p.bg, color: p.fg }}>{p.i}</div>
                <div>
                  <div className="person__name">{p.name}</div>
                  <div className="person__role">{p.role}</div>
                </div>
                <p className="sq-body-sm sq-text-muted">{p.bio}</p>
                <span className="person__prev">{p.prev}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTISSEURS */}
      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <p className="logo-row__caption" style={{ marginBottom: 'var(--space-6)' }}>Investisseurs &amp; advisors</p>
          <div className="logo-row" style={{ borderBottom: 0, paddingBlock: 0 }}>
            <span className="logo-row__item">Resonance VC</span>
            <span className="logo-row__item">Kima Ventures</span>
            <span className="logo-row__item">Bpifrance</span>
            <span className="logo-row__item">Stéphane Treppoz</span>
            <span className="logo-row__item">Roxanne Varza</span>
            <span className="logo-row__item">Quentin Nickmans</span>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="sq-section">
        <div className="sq-container">
          <div className="sec-head">
            <h2 className="sec-head__title">Trois principes qu&apos;on tient quand c&apos;est inconfortable.</h2>
            <p className="sec-head__lede">Pas une charte sur un mur. Trois règles qui nous coûtent quelque chose chaque mois.</p>
          </div>
          <div className="case-grid">
            <article className="case-card">
              <span className="case-card__tag">Principe 01</span>
              <h3 className="case-card__title">Refuser un projet plutôt que mal le livrer.</h3>
              <p className="case-card__lede">On a décliné 23 % des briefs entrants en 2025. Mauvais scope, budget incohérent, ou pas de squad raisonnablement composable.</p>
            </article>
            <article className="case-card">
              <span className="case-card__tag">Principe 02</span>
              <h3 className="case-card__title">Publier nos chiffres, même quand ils piquent.</h3>
              <p className="case-card__lede">Output Score moyen, taux de remplacement, NPS — tout est sur la page Stats. Mise à jour mensuelle, audit annuel.</p>
            </article>
            <article className="case-card">
              <span className="case-card__tag">Principe 03</span>
              <h3 className="case-card__title">Payer les freelances avant les loyers.</h3>
              <p className="case-card__lede">Le cycle 7 jours est sacré. En cas de trésorerie tendue, la commission Squadly est différée, pas les paies freelances.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="sq-section sq-section--tight">
        <div className="sq-container">
          <div className="cta-final">
            <h2 className="cta-final__title">Travaillons ensemble. Ou parlons-en simplement.</h2>
            <div className="cta-final__actions">
              <Link className="sq-btn sq-btn--primary sq-btn--lg" href="/contact">Démarrer un brief</Link>
              <a className="sq-btn sq-btn--secondary sq-btn--lg" href="mailto:presse@squadly.fr">Contact presse</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
