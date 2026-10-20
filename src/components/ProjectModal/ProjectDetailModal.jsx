import React, { useEffect } from 'react';
import { X, MessageSquare, CheckCircle, Cpu, Shield, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onNextProject, onPrevProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNextProject) onNextProject();
      if (e.key === 'ArrowLeft' && onPrevProject) onPrevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNextProject, onPrevProject]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(5, 6, 8, 0.85)',
        backdropFilter: 'blur(16px)',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '88vh',
          background: 'linear-gradient(160deg, #16181f 0%, #0d0e12 100%)',
          border: `1px solid ${project.accentColor}44`,
          borderRadius: '24px',
          boxShadow: `0 25px 60px rgba(0,0,0,0.8), 0 0 40px ${project.glowColor}`,
          overflowY: 'auto',
          padding: '2.5rem',
          color: 'var(--text-cloud)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header: Badge, Code, and Close Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: project.accentColor,
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: `${project.accentColor}18`,
                border: `1px solid ${project.accentColor}44`,
                letterSpacing: '0.15em',
              }}
            >
              LEVEL {project.number} // {project.badge}
            </span>

            {/* Explicit WhatsApp Badge if confirmed */}
            {project.hasWhatsApp && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#25D366',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                }}
              >
                <MessageSquare size={13} />
                <span>WhatsApp Integrated</span>
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-ash)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 60, 40, 0.2)';
              e.currentTarget.style.borderColor = '#FF3C28';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.color = 'var(--text-ash)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Title and Category */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            color: 'var(--text-pure)',
            letterSpacing: '-0.02em',
            marginBottom: '0.4rem',
          }}
        >
          {project.title}
        </h2>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: project.accentColor,
            marginBottom: '1.75rem',
          }}
        >
          {project.category}
        </div>

        {/* Summary Narrative */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-ash)',
            marginBottom: '1.75rem',
          }}
        >
          {project.summary}
        </p>

        {/* Problem Solved & Practical Value Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.025)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '16px',
              padding: '1.25rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                marginBottom: '0.4rem',
              }}
            >
              PROBLEM SOLVED
            </div>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-cloud)' }}>
              {project.problemSolved}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.025)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '16px',
              padding: '1.25rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                marginBottom: '0.4rem',
              }}
            >
              PRACTICAL IMPACT
            </div>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-cloud)' }}>
              {project.practicalValue}
            </div>
          </div>
        </div>

        {/* WhatsApp Integration Section (if applicable) */}
        {project.hasWhatsApp && project.whatsAppDescription && (
          <div
            style={{
              background: 'rgba(37, 211, 102, 0.06)',
              border: '1px solid rgba(37, 211, 102, 0.25)',
              borderRadius: '16px',
              padding: '1.25rem 1.5rem',
              marginBottom: '2rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                padding: '0.5rem',
                borderRadius: '10px',
                background: 'rgba(37, 211, 102, 0.15)',
                color: '#25D366',
                marginTop: '0.15rem',
              }}
            >
              <MessageSquare size={20} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: '#25D366',
                  marginBottom: '0.35rem',
                }}
              >
                WhatsApp Automation & Communication
              </div>
              <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: 'var(--text-ash)', margin: 0 }}>
                {project.whatsAppDescription}
              </p>
            </div>
          </div>
        )}

        {/* Implemented Features List */}
        <div style={{ marginBottom: '2rem' }}>
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--text-pure)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <CheckCircle size={16} color={project.accentColor} />
            <span>Verified Core Features</span>
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem' }}>
            {project.verifiedFeatures.map((feat, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '1rem',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-pure)', marginBottom: '0.3rem' }}>
                  {feat.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {feat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '0.75rem',
            }}
          >
            TECHNOLOGY STACK
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-cloud)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Between Levels */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
          }}
        >
          {onPrevProject ? (
            <button
              onClick={onPrevProject}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-ash)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              ← Previous Level
            </button>
          ) : <div />}

          {onNextProject && (
            <button
              onClick={onNextProject}
              style={{
                background: `${project.accentColor}18`,
                border: `1px solid ${project.accentColor}55`,
                color: project.accentColor,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 600,
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Next Level</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
