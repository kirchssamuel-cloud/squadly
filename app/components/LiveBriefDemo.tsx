'use client';

import { useEffect, useState } from 'react';

const SCRIPT = [
  { label: 'Type de projet', value: 'MVP mobile B2C, fintech assurance' },
  { label: 'Budget & délai', value: '35 000 € · livraison 10 semaines' },
  {
    label: 'Compétences détectées',
    value: "L'IA a identifié 4 profils nécessaires.",
    chips: ['Product Designer', 'Dev React Native', 'Backend Node', 'PM Fintech']
  },
  { label: 'Validation finale', value: 'Squad finaliste proposée', chips: ['Camille L.', 'Ayoub R.', 'Marion O.', 'Théo D.'] }
];

export default function LiveBriefDemo() {
  const [step, setStep] = useState(2);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setStep((s) => (s >= SCRIPT.length - 1 ? 2 : s + 1));
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="brief-demo brief-demo--live" aria-hidden="true">
      <div className="brief-demo__chrome">
        <span className="brief-demo__dot"></span>
        <span className="brief-demo__dot"></span>
        <span className="brief-demo__dot"></span>
        <span className="brief-demo__url">app.squadly.fr / brief / nouveau</span>
        <span className="brief-demo__pulse" aria-hidden="true"></span>
      </div>
      <div className="brief-demo__body">
        {SCRIPT.map((s, i) => {
          const status = i < step ? 'done' : i === step ? 'active' : '';
          return (
            <div key={s.label} className={`brief-step ${status ? `brief-step--${status}` : ''}`}>
              <div className="brief-step__num">{i < step ? '✓' : i + 1}</div>
              <div>
                <div className="brief-step__label">{s.label}</div>
                <div className="brief-step__value">{s.value}</div>
                {s.chips && (
                  <div className="brief-step__chips">
                    {s.chips.map((c) => (
                      <span key={c} className={`brief-chip ${i === step ? 'brief-chip--accent' : ''}`}>
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="brief-demo__input">
        <div className="brief-demo__field">
          <span>L&apos;IA prépare la suite…</span>
          <span className="brief-demo__caret"></span>
        </div>
        <button className="sq-btn sq-btn--primary sq-btn--sm" type="button">Continuer</button>
      </div>
    </div>
  );
}
