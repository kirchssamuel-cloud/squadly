import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSupabaseServerClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await getSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <section className="sq-section sq-section--tight">
      <div className="sq-container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-6)',
          paddingBottom: 'var(--space-6)',
          marginBottom: 'var(--space-8)',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div>
            <span className="sq-eyebrow">Dashboard</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 32,
              letterSpacing: '-0.025em',
              margin: 'var(--space-2) 0 0'
            }}>
              {user.email}
            </h1>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <Link className="sq-btn sq-btn--ghost sq-btn--sm" href="/dashboard/client">Client</Link>
            <Link className="sq-btn sq-btn--ghost sq-btn--sm" href="/dashboard/freelance">Freelance</Link>
            <form action="/api/auth/logout" method="post" style={{ margin: 0 }}>
              <button className="sq-btn sq-btn--secondary sq-btn--sm" type="submit">
                Se déconnecter
              </button>
            </form>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
