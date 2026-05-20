// Squadly — theme toggle + entrance animations (JS minimal)
(function () {
  const root = document.documentElement;
  const stored = (() => {
    try { return localStorage.getItem('sq-theme'); } catch (_) { return null; }
  })();
  const initial = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  function toggle() {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('sq-theme', next); } catch (_) {}
  }

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-theme-toggle]');
    if (t) { e.preventDefault(); toggle(); }
  });

  // Pricing toggle (Client / Freelance) ------------------------------
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-pricing-tab]');
    if (!btn) return;
    const which = btn.getAttribute('data-pricing-tab');
    document.querySelectorAll('[data-pricing-tab]').forEach((b) => {
      b.setAttribute('aria-selected', String(b.getAttribute('data-pricing-tab') === which));
    });
    document.querySelectorAll('[data-pricing-view]').forEach((v) => {
      v.hidden = v.getAttribute('data-pricing-view') !== which;
    });
  });

  // Calculateur ticket ----------------------------------------------
  const slider = document.querySelector('[data-calc-slider]');
  if (slider) {
    const ticketEl = document.querySelector('[data-calc-ticket]');
    const commEl = document.querySelector('[data-calc-comm]');
    const fmt = (n) => new Intl.NumberFormat('fr-FR').format(n);
    const update = () => {
      const v = Number(slider.value);
      if (ticketEl) ticketEl.textContent = fmt(v);
      if (commEl) commEl.textContent = fmt(Math.round(v * 0.20));
    };
    slider.addEventListener('input', update);
    update();
  }

  // Filtres squads (cas clients) ------------------------------------
  document.addEventListener('click', (e) => {
    const f = e.target.closest('[data-squad-filter]');
    if (!f) return;
    const v = f.getAttribute('data-squad-filter');
    document.querySelectorAll('[data-squad-filter]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-squad-filter') === v));
    });
    document.querySelectorAll('[data-squad-card]').forEach((c) => {
      const tags = (c.getAttribute('data-squad-card') || '').split(' ');
      c.style.display = (v === 'all' || tags.includes(v)) ? '' : 'none';
    });
  });

  // Entrance ---------------------------------------------------------
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('sq-enter');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  }
})();
