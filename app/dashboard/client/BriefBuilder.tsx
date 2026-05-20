'use client';

import { useState } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };

const INITIAL_GREETING: Message = {
  role: 'assistant',
  content:
    "Bonjour. Je suis Squadly Brief Builder. Décrivez en 2-3 lignes ce que vous voulez livrer (produit, audience, objectif business), et je structure le brief avec vous."
};

export default function BriefBuilder() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_GREETING]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);

  async function send() {
    if (!input.trim() || streaming) return;
    const next: Message[] = [...messages, { role: 'user', content: input.trim() }];
    setMessages(next);
    setInput('');
    setStreaming(true);

    setMessages([...next, { role: 'assistant', content: '' }]);
    try {
      const res = await fetch('/api/brief', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: next })
      });
      if (!res.ok || !res.body) throw new Error('Erreur API');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistant = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        assistant += decoder.decode(value, { stream: true });
        setMessages([...next, { role: 'assistant', content: assistant }]);
      }
    } catch (err: any) {
      setMessages([
        ...next,
        { role: 'assistant', content: '[Erreur] Impossible de joindre l’IA. Vérifiez ANTHROPIC_API_KEY.' }
      ]);
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div className="brief-demo" style={{ marginTop: 'var(--space-4)' }}>
      <div className="brief-demo__chrome">
        <span className="brief-demo__dot"></span>
        <span className="brief-demo__dot"></span>
        <span className="brief-demo__dot"></span>
        <span className="brief-demo__url">app.squadly.fr / brief / nouveau</span>
      </div>

      <div className="brief-demo__body" style={{ maxHeight: 480, overflowY: 'auto', display: 'block' }}>
        {messages.map((m, i) => (
          <div key={i} className={`brief-step ${m.role === 'user' ? 'brief-step--active' : 'brief-step--done'}`} style={{ display: 'block' }}>
            <div className="brief-step__label">{m.role === 'user' ? 'Vous' : 'Squadly IA'}</div>
            <div className="brief-step__value" style={{ whiteSpace: 'pre-wrap' }}>
              {m.content || (streaming && i === messages.length - 1 ? '…' : '')}
            </div>
          </div>
        ))}
      </div>

      <div className="brief-demo__input">
        <div className="brief-demo__field">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder="Décrivez votre projet, ou répondez à la dernière question…"
            style={{
              background: 'transparent',
              border: 0,
              outline: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
              fontSize: 14,
              flex: 1
            }}
          />
        </div>
        <button
          className="sq-btn sq-btn--primary sq-btn--sm"
          type="button"
          onClick={send}
          disabled={streaming || !input.trim()}
        >
          {streaming ? '…' : 'Envoyer'}
        </button>
      </div>
    </div>
  );
}
