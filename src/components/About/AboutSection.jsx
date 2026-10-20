import React from 'react';
import { GraduationCap, MapPin, Code2, Sparkles } from 'lucide-react';

function GithubIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="about-scene-container" style={{
      minHeight: '100vh',
      padding: '7rem 2rem 5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* Section Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '999px',
          background: 'rgba(252, 107, 47, 0.1)',
          border: '1px solid rgba(252, 107, 47, 0.3)',
          color: 'var(--ember-core)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          <Sparkles size={12} />
          <span>About Me // Profile</span>
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
          fontWeight: 700,
          color: 'var(--text-pure)',
          letterSpacing: '-0.02em',
          lineHeight: 1.15
        }}>
          Building Practical Software, <br />
          <span style={{ color: 'var(--ember-core)' }}>AI Applications & Business Automation</span>
        </h2>
      </div>

      {/* Grid Layout: Visual Study Scene + Personal Narrative */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3.5rem',
        alignItems: 'center'
      }}>
        {/* Left Column: Visual Study Scene with Student Likeness */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {/* Subtle Ambient Backdrop Glow */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -20%)',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(252, 107, 47, 0.2) 0%, transparent 70%)',
            filter: 'blur(35px)',
            pointerEvents: 'none',
          }} />

          {/* Student Portrait Likeness (Honoring Confirmed Asset) */}
          <div style={{
            position: 'relative',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(252, 107, 47, 0.4)',
            boxShadow: '0 0 30px rgba(252, 107, 47, 0.3)',
            marginBottom: '1.75rem',
          }}>
            <img
              src="/assets/character-reference.png"
              alt="Badrinadh - Student Developer"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'scale(1.05)',
              }}
              onError={(e) => {
                // Graceful fallback to retro character if needed
                e.target.src = '/assets/badrinadh_retro_character.png';
              }}
            />
          </div>

          {/* Study Workspace Badge Overlay */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 2,
            width: '100%'
          }}>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-pure)',
              fontFamily: 'var(--font-display)',
              marginBottom: '0.35rem'
            }}>
              Badrinadh
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--ember-core)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '1.25rem'
            }}>
              JK Lakshmipat University, Jaipur
            </div>

            {/* Quick Stats Pill Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              width: '100%',
              marginTop: '0.5rem'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.75rem',
                borderRadius: '12px',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DEGREE</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-cloud)', marginTop: '0.2rem' }}>B.Tech CSE (AI)</div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.75rem',
                borderRadius: '12px',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>STATUS</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#10B981', marginTop: '0.2rem' }}>Student Developer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Personal Narrative & Verified GitHub */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-ash)'
          }}>
            <p style={{ marginBottom: '1.25rem' }}>
              I am a <strong style={{ color: 'var(--text-pure)' }}>B.Tech Computer Science & Engineering</strong> student specializing in <strong style={{ color: 'var(--text-pure)' }}>Artificial Intelligence</strong> at <span style={{ color: 'var(--text-cloud)' }}>JK Lakshmipat University, Jaipur</span>.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              My focus is centered on translating ideas into functional code — designing responsive websites, implementing practical software engineering architectures, exploring AI applications, and setting up business automation pipelines that streamline real-world operations.
            </p>
            <p>
              I take pride in an honest, build-first mindset: writing clean code, understanding database relationships, designing intuitive digital experiences, and continuously learning through hands-on development projects.
            </p>
          </div>

          {/* Education Details Card */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-pure)' }}>
              <GraduationCap size={20} color="var(--ember-core)" />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem' }}>
                B.Tech in Computer Science and Engineering (Artificial Intelligence)
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-ash)', fontSize: '0.85rem' }}>
              <MapPin size={16} color="var(--text-muted)" />
              <span>JK Lakshmipat University, Jaipur, Rajasthan</span>
            </div>
          </div>

          {/* GitHub Profile (Only in About Section, as confirmed) */}
          <div style={{ marginTop: '0.5rem' }}>
            <a
              href="https://github.com/badrinadh12"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.85rem 1.75rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: 'var(--text-pure)',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(252, 107, 47, 0.15)';
                e.currentTarget.style.borderColor = 'var(--ember-core)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(252, 107, 47, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
              }}
            >
              <GithubIcon size={18} />
              <span>Explore GitHub @badrinadh12</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
