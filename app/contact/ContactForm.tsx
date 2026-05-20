'use client';

import { useState } from 'react';

const PROJECT_TYPES = [
  ['mvp', 'MVP web/mobile'],
  ['refonte', 'Refonte produit'],
  ['growth', 'Lancement growth'],
  ['ia', 'Déploiement IA'],
  ['autre', 'Autre']
] as const;

const BUDGETS = [
  ['15-25', '15 – 25 k€'],
  ['25-50', '25 – 50 k€'],
  ['50-100', '50 – 100 k€'],
  ['100+', '100 k€+'],
  ['na', 'À cadrer ensemble']
] as const;

export default function ContactForm() {
  const [type, setType] = useState<string>('refonte');
  const [budget, setBudget] = useState<string>('25-50');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    const form = new FormData(e.currentTarget);
    const payload = {
      type,
      budget,
      nom: form.get('nom'),
      email: form.get('email'),
      entreprise: form.get('entreprise'),
      delai: form.get('delai'),
      brief: form.get('brief')
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? 'Erreur réseau');
      }
      setStatus('ok');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message ?? 'Erreur inconnue');
    } finally {
      setSubmitting(false);
    }
  }

  if (status === 'ok') {
    return (
      <div className="contact-form" style={{ padding: 'var(--space-10)', textAlign: 'center' }}>
        <span className="sq-eyebrow">Brief envoyé</span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: 32,
          letterSpacing: '-0.025em',
          margin: 'var(--space-4) 0'
        }}>
          Merci. Réponse sous 24 h ouvrées.
        </h2>
        <p className="sq-text-muted">
          Charlotte Faivre vous écrit personnellement avec 2–3 questions de cadrage.
          En attendant, jetez un œil aux squads livrées récemment.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__row">
        <label className="sq-label">Type de projet</label>
        <div className="chip-group">
          {PROJECT_TYPES.map(([val, label]) => (
            <span className="chip-input" key={val}>
              <input
                type="radio"
                name="type"
                id={`t-${val}`}
                checked={type === val}
                onChange={() => setType(val)}
              />
              <label htmlFor={`t-${val}`}>{label}</label>
            </span>
          ))}
        </div>
      </div>

      <div className="contact-form__row">
        <label className="sq-label">Budget envisagé</label>
        <div className="chip-group">
          {BUDGETS.map(([val, label]) => (
            <span className="chip-input" key={val}>
              <input
                type="radio"
                name="budget"
                id={`b-${val}`}
                checked={budget === val}
                onChange={() => setBudget(val)}
              />
              <label htmlFor={`b-${val}`}>{label}</label>
            </span>
          ))}
        </div>
      </div>

      <div className="contact-form__inline">
        <div className="contact-form__row">
          <label className="sq-label" htmlFor="nom">Votre nom</label>
          <input className="sq-input" id="nom" name="nom" type="text" placeholder="Camille Lefèvre" required />
        </div>
        <div className="contact-form__row">
          <label className="sq-label" htmlFor="email">Email pro</label>
          <input className="sq-input" id="email" name="email" type="email" placeholder="lea@entreprise.fr" required />
        </div>
      </div>

      <div className="contact-form__inline">
        <div className="contact-form__row">
          <label className="sq-label" htmlFor="entreprise">Entreprise</label>
          <input className="sq-input" id="entreprise" name="entreprise" type="text" />
        </div>
        <div className="contact-form__row">
          <label className="sq-label" htmlFor="delai">Délai souhaité</label>
          <select className="sq-select" id="delai" name="delai" defaultValue="1mois">
            <option value="2sem">Démarrer dans 2 semaines</option>
            <option value="1mois">Démarrer dans 1 mois</option>
            <option value="2-3mois">Démarrer dans 2–3 mois</option>
            <option value="aucun">Pas de contrainte</option>
          </select>
        </div>
      </div>

      <div className="contact-form__row">
        <label className="sq-label" htmlFor="brief">Décrivez votre projet</label>
        <textarea
          className="sq-textarea"
          id="brief"
          name="brief"
          placeholder="Objectif business, périmètre, contraintes connues, contexte d'équipe interne…"
          required
        />
      </div>

      {status === 'error' && (
        <div className="sq-body-sm" style={{ color: '#dc2626' }}>
          Erreur lors de l&apos;envoi : {errorMsg}. Essayez à nouveau ou écrivez à sales@squadly.fr.
        </div>
      )}

      <div className="contact-form__row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
        <span className="sq-body-sm sq-text-muted">
          En envoyant, vous acceptez notre <a href="#" style={{ textDecoration: 'underline' }}>politique de confidentialité</a>.
        </span>
        <button type="submit" className="sq-btn sq-btn--primary sq-btn--lg" disabled={submitting}>
          {submitting ? 'Envoi…' : 'Envoyer mon brief'}
        </button>
      </div>
    </form>
  );
}
