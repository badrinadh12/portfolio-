import React from 'react';
import { Terminal, Globe, Database, Wrench, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  // Strictly the approved skill categories and items
  const skillCategories = [
    {
      title: 'Programming',
      icon: Terminal,
      color: '#00F0FF',
      skills: [
        { name: 'C', note: 'Low-level systems programming, memory allocation, and algorithmic logic' },
        { name: 'Python', note: 'AI scripting, data workflows, backend logic, and automation pipelines' },
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: '#FC6B2F',
      skills: [
        { name: 'HTML', note: 'Semantic structure, accessible markup, and modern web standards' },
        { name: 'CSS', note: 'Responsive architecture, fluid layouts, keyframe animation, and design systems' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: '#F59E0B',
      skills: [
        { name: 'SQL', note: 'Complex relational queries, table joins, aggregations, and performance indexing' },
        { name: 'DBMS', note: 'Entity-relationship modeling, database normalization (3NF), and data integrity' },
      ],
    },
    {
      title: 'Building Tools',
      icon: Wrench,
      color: '#A855F7',
      skills: [
        { name: 'Antigravity', note: 'AI-assisted rapid website engineering and full-stack software development' },
        { name: 'Lovable', note: 'AI-accelerated application prototyping, UI layout, and product scaffolding' },
        { name: 'Cursor', note: 'AI-augmented code editing, intelligent refactoring, and codebase orchestration' },
      ],
    },
  ];

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '7rem 2rem 5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '999px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'var(--text-ash)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          <Sparkles size={12} color="var(--ember-core)" />
          <span>Technical Toolkit // Verified Capabilities</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          fontWeight: 700,
          color: 'var(--text-pure)',
          letterSpacing: '-0.02em',
          marginBottom: '1rem'
        }}>
          Core Technical Skills
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'var(--text-ash)',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Practical proficiencies in systems programming, responsive web interfaces, relational databases, and modern AI-accelerated building environments.
        </p>
      </div>

      {/* 4 Approved Categories Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.75rem',
      }}>
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              style={{
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = cat.color;
                e.currentTarget.style.boxShadow = `0 15px 35px rgba(0,0,0,0.5), 0 0 25px ${cat.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: `${cat.color}15`,
                  border: `1px solid ${cat.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={18} color={cat.color} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--text-pure)'
                }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '12px',
                      padding: '0.85rem 1rem',
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--text-cloud)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.25rem'
                    }}>
                      <span>{skill.name}</span>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: cat.color,
                        boxShadow: `0 0 8px ${cat.color}`
                      }} />
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.45,
                      margin: 0
                    }}>
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
