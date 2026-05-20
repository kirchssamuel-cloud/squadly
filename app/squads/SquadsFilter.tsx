'use client';

import { useState } from 'react';

type Squad = {
  types: readonly string[];
  tag: string;
  title: string;
  lede: string;
  stats: readonly (readonly [string, string])[];
};

const FILTERS = [
  ['all', 'Tous'],
  ['mvp', 'MVP'],
  ['refonte', 'Refonte'],
  ['growth', 'Growth'],
  ['ia', 'IA']
] as const;

export default function SquadsFilter({ squads }: { squads: Squad[] }) {
  const [active, setActive] = useState<string>('all');

  const filtered = active === 'all' ? squads : squads.filter((s) => s.types.includes(active));

  return (
    <section className="sq-section sq-section--tight" style={{ paddingTop: 0 }}>
      <div className="sq-container">
        <div className="chip-group" role="tablist" aria-label="Filtrer par type">
          {FILTERS.map(([key, label]) => (
            <button
              key={key}
              className="chip-input"
              aria-pressed={active === key}
              onClick={() => setActive(key)}
              data-squad-filter={key}
              type="button"
            >
              <label>{label}</label>
            </button>
          ))}
        </div>

        <style jsx>{`
          .chip-group :global([data-squad-filter]) {
            background: transparent;
            border: 0;
            padding: 0;
          }
          .chip-group :global([data-squad-filter] label) {
            display: inline-flex;
            align-items: center;
            height: 36px;
            padding: 0 14px;
            border: 1px solid var(--border-subtle);
            border-radius: 999px;
            font-size: 13px;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all var(--dur-fast) var(--ease-out);
          }
          .chip-group :global([data-squad-filter][aria-pressed='true'] label) {
            background: var(--color-ink-1000);
            color: var(--color-ink-50);
            border-color: var(--color-ink-1000);
          }
          :global([data-theme='dark']) .chip-group :global([data-squad-filter][aria-pressed='true'] label) {
            background: var(--color-ink-50);
            color: var(--color-ink-1000);
            border-color: var(--color-ink-50);
          }
        `}</style>

        <div className="case-grid" style={{ marginTop: 'var(--space-8)' }}>
          {filtered.map((squad) => (
            <article className="case-card" key={squad.title}>
              <span className="case-card__tag">{squad.tag}</span>
              <h3 className="case-card__title">{squad.title}</h3>
              <p className="case-card__lede">{squad.lede}</p>
              <div className="case-card__stats">
                {squad.stats.map(([v, l]) => (
                  <div key={l}>
                    <div className="case-card__stat-v">{v}</div>
                    <div className="case-card__stat-l">{l}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
