import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        background: '#07080a',
        padding: '3rem 2rem',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div>
          <div style={{ color: 'var(--text-ash)', fontWeight: 600, marginBottom: '0.25rem' }}>
            BADRINADH — AI & Full-Stack Developer
          </div>
          <div>B.Tech CSE (Artificial Intelligence), JK Lakshmipat University, Jaipur</div>
          <div style={{ marginTop: '0.35rem', color: 'var(--text-muted)' }}>
            badrinadhgoru@gmail.com • +91 7013288812
          </div>
        </div>

        <button
          onClick={scrollToTop}
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            padding: '0.5rem 1rem',
            color: 'var(--text-cloud)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(252, 107, 47, 0.15)';
            e.currentTarget.style.borderColor = 'var(--ember-core)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = 'var(--text-cloud)';
          }}
        >
          <span>Back to Top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
