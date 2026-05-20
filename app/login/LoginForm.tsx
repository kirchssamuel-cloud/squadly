'use client';

import { useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard/client`
        }
      });
      if (error) throw error;
      setStatus('sent');
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message ?? 'Erreur inconnue');
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form" style={{ marginTop: 'var(--space-6)', padding: 'var(--space-8)', textAlign: 'center' }}>
        <span className="sq-eyebrow">Vérifiez vos emails</span>
        <p style={{ marginTop: 'var(--space-3)' }}>
          On vient d&apos;envoyer un lien de connexion à <strong>{email}</strong>. Cliquez dessus pour
          accéder à votre dashboard.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form" style={{ marginTop: 'var(--space-6)' }}>
      <div className="contact-form__row">
        <label className="sq-label" htmlFor="email">Email pro</label>
        <input
          className="sq-input"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vous@entreprise.fr"
          required
        />
      </div>
      {status === 'error' && (
        <div className="sq-body-sm" style={{ color: '#dc2626' }}>{errorMsg}</div>
      )}
      <button
        type="submit"
        className="sq-btn sq-btn--primary sq-btn--lg"
        disabled={status === 'sending' || !email}
      >
        {status === 'sending' ? 'Envoi…' : 'Recevoir mon lien magique'}
      </button>
    </form>
  );
}
