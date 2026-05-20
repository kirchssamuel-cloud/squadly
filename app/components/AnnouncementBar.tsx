'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const MESSAGES = [
  { dot: '#84CC16', label: 'Squad #SQ-2841 — Fintech', text: 'kick-off il y a 2 heures' },
  { dot: '#6366F1', label: '12 squads en composition', text: 'cette semaine' },
  { dot: '#F59E0B', label: 'Nouvelle vague freelances', text: '3 designers produit · 5 devs senior' },
  { dot: '#84CC16', label: 'Output Score audité', text: '9,3/10 sur la dernière livraison Allianz·X' }
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? sessionStorage.getItem('sq-announce-dismissed') : null;
    if (stored === '1') setDismissed(true);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [dismissed]);

  if (dismissed) return null;

  const current = MESSAGES[index];

  return (
    <div className="announcement-bar" role="status" aria-live="polite">
      <div className="sq-container announcement-bar__inner">
        <span className="announcement-bar__dot" style={{ background: current.dot }} aria-hidden="true" />
        <span className="announcement-bar__text">
          <strong>{current.label}</strong> · {current.text}
        </span>
        <Link className="announcement-bar__cta" href="/squads">
          Voir les squads <span aria-hidden="true">→</span>
        </Link>
        <button
          type="button"
          className="announcement-bar__close"
          aria-label="Fermer l'annonce"
          onClick={() => {
            setDismissed(true);
            try {
              sessionStorage.setItem('sq-announce-dismissed', '1');
            } catch {}
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
