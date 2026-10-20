import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PROJECTS } from '../../data/projectsData';
import ProjectDetailModal from '../ProjectModal/ProjectDetailModal';
import { ChevronLeft, ChevronRight, Navigation, Sparkles, MessageSquare, Play, Info } from 'lucide-react';

export default function ProjectsUniverse() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDriving, setIsDriving] = useState(false);
  const [browseMode, setBrowseMode] = useState(false); // Quick browse grid fallback

  const canvasRef = useRef(null);
  const currentPos = useRef(0); // 0 to 6 continuous along spline
  const targetPos = useRef(0);
  const animFrame = useRef(null);

  // Highway waypoints definition across 7 levels
  const waypoints = useRef([
    { x: 120, y: 160, angle: 0.15 },    // Level 01: DeepShield AI
    { x: 380, y: 240, angle: 0.35 },    // Level 02: Carbon Comply
    { x: 640, y: 170, angle: -0.25 },   // Level 03: DBMS Railway
    { x: 900, y: 260, angle: 0.4 },     // Level 04: Elevator Logic
    { x: 1160, y: 180, angle: -0.3 },   // Level 05: Luna Dental
    { x: 1420, y: 250, angle: 0.25 },   // Level 06: E-commerce Website
    { x: 1680, y: 180, angle: 0.0 },    // Level 07: Smart Address
  ]).current;

  const currentProject = PROJECTS[currentLevelIndex];

  const navigateToLevel = useCallback((index) => {
    if (index < 0 || index >= PROJECTS.length) return;
    setCurrentLevelIndex(index);
    targetPos.current = index;
    setIsDriving(true);
  }, []);

  // Keyboard navigation controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) return; // If modal open, ignore canvas controls

      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        navigateToLevel(Math.min(PROJECTS.length - 1, currentLevelIndex + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        navigateToLevel(Math.max(0, currentLevelIndex - 1));
      } else if (e.key === 'Enter' || e.key === ' ') {
        setSelectedProject(PROJECTS[currentLevelIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLevelIndex, selectedProject, navigateToLevel]);

  // Main Canvas Rendering Engine (Stylized 2.5D Rolling Hills & Highway)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 520);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 520;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      // Damped movement toward target level
      const diff = targetPos.current - currentPos.current;
      if (Math.abs(diff) > 0.005) {
        currentPos.current += diff * 0.08;
      } else {
        currentPos.current = targetPos.current;
        setIsDriving(false);
      }

      ctx.clearRect(0, 0, width, height);

      // Camera focal tracking: centered on the scooter with smooth bounds
      const activeWaypoint = getSplinePoint(currentPos.current, waypoints);
      const cameraX = activeWaypoint.x - width * 0.35;

      ctx.save();
      ctx.translate(-cameraX, 0);

      // 1. Rolling Hills Background Layer (Parallax 0.3)
      ctx.fillStyle = '#0f1118';
      ctx.beginPath();
      ctx.moveTo(-200, height);
      for (let x = -200; x < 2500; x += 150) {
        const hillY = 180 + Math.sin(x * 0.003) * 60 + Math.cos(x * 0.006) * 40;
        ctx.lineTo(x, hillY);
      }
      ctx.lineTo(2500, height);
      ctx.fill();

      // 2. Midground Rolling Hills Layer (Parallax 0.6)
      ctx.fillStyle = '#141722';
      ctx.beginPath();
      ctx.moveTo(-200, height);
      for (let x = -200; x < 2500; x += 100) {
        const hillY = 240 + Math.sin(x * 0.004 + 1.2) * 50;
        ctx.lineTo(x, hillY);
      }
      ctx.lineTo(2500, height);
      ctx.fill();

      // 3. Winding Highway Track
      ctx.lineWidth = 42;
      ctx.strokeStyle = '#222633';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      for (let i = 0; i <= 6; i += 0.05) {
        const pt = getSplinePoint(i, waypoints);
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();

      // Highway Neon Edges (Ember glow)
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(252, 107, 47, 0.4)';
      ctx.stroke();

      // Highway Center Dashed Line
      ctx.lineWidth = 2;
      ctx.setLineDash([12, 16]);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.stroke();
      ctx.setLineDash([]);

      // 4. Render the 7 Project Platforms & Portals
      PROJECTS.forEach((proj, idx) => {
        const wp = waypoints[idx];
        const isCurrent = idx === currentLevelIndex;

        // Platform Base
        ctx.fillStyle = isCurrent ? `${proj.accentColor}22` : 'rgba(255, 255, 255, 0.03)';
        ctx.strokeStyle = isCurrent ? proj.accentColor : 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = isCurrent ? 2 : 1;

        ctx.beginPath();
        ctx.ellipse(wp.x, wp.y + 40, 65, 24, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Level Number Flag Pole
        ctx.beginPath();
        ctx.moveTo(wp.x, wp.y + 40);
        ctx.lineTo(wp.x, wp.y - 70);
        ctx.strokeStyle = isCurrent ? proj.accentColor : 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Glowing Station Orb
        const glowRad = isCurrent ? 14 : 8;
        ctx.shadowColor = proj.accentColor;
        ctx.shadowBlur = isCurrent ? 25 : 8;
        ctx.fillStyle = proj.accentColor;
        ctx.beginPath();
        ctx.arc(wp.x, wp.y - 70, glowRad, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Level Label Header
        ctx.font = '700 11px JetBrains Mono, monospace';
        ctx.fillStyle = isCurrent ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)';
        ctx.textAlign = 'center';
        ctx.fillText(`LVL ${proj.number}`, wp.x, wp.y - 92);

        // Project Title
        ctx.font = isCurrent ? '700 13px Space Grotesk, sans-serif' : '500 12px Space Grotesk, sans-serif';
        ctx.fillStyle = isCurrent ? proj.accentColor : 'rgba(255, 255, 255, 0.7)';
        ctx.fillText(proj.title, wp.x, wp.y + 78);
      });

      // 5. Draw the Animated Scooter Rider
      const scooterPt = getSplinePoint(currentPos.current, waypoints);
      const nextPt = getSplinePoint(currentPos.current + 0.08, waypoints);
      // Believable road tangent heading (no random spinning!)
      const heading = Math.atan2(nextPt.y - scooterPt.y, nextPt.x - scooterPt.x);

      ctx.save();
      ctx.translate(scooterPt.x, scooterPt.y);
      ctx.rotate(heading * 0.4); // Subtle banking along the turn

      // Scooter Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.beginPath();
      ctx.ellipse(0, 16, 26, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Scooter Headlight Beam
      const lightGrad = ctx.createRadialGradient(25, 0, 2, 85, 0, 60);
      lightGrad.addColorStop(0, 'rgba(255, 240, 180, 0.6)');
      lightGrad.addColorStop(1, 'rgba(255, 240, 180, 0)');
      ctx.fillStyle = lightGrad;
      ctx.beginPath();
      ctx.moveTo(18, -4);
      ctx.lineTo(85, -28);
      ctx.lineTo(85, 28);
      ctx.closePath();
      ctx.fill();

      // Scooter Chassis (Yellow retro city scooter)
      ctx.fillStyle = '#F59E0B'; // Vibrant scooter yellow
      ctx.beginPath();
      ctx.roundRect(-16, -4, 32, 14, 4);
      ctx.fill();

      // Front Fairing & Handlebars
      ctx.fillStyle = '#D97706';
      ctx.fillRect(8, -14, 6, 12);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(11, -14);
      ctx.lineTo(11, -19);
      ctx.stroke();

      // Wheels
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.arc(-12, 10, 6, 0, Math.PI * 2);
      ctx.arc(14, 10, 6, 0, Math.PI * 2);
      ctx.fill();

      // Rider Figure (Student developer with glasses & hoodie)
      // Torso (Tech hoodie)
      ctx.fillStyle = '#1E293B';
      ctx.beginPath();
      ctx.roundRect(-6, -26, 12, 16, 3);
      ctx.fill();

      // Head
      ctx.fillStyle = '#8D5B4C'; // Warm skin tone
      ctx.beginPath();
      ctx.arc(0, -32, 6, 0, Math.PI * 2);
      ctx.fill();

      // Hair (Textured voluminous black hair)
      ctx.fillStyle = '#0F172A';
      ctx.beginPath();
      ctx.arc(0, -35, 7, Math.PI, Math.PI * 2);
      ctx.fill();

      // Eyeglasses frame
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1;
      ctx.strokeRect(2, -34, 4, 3);

      ctx.restore();

      ctx.restore();

      animFrame.current = requestAnimationFrame(render);
    };

    animFrame.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [waypoints, currentLevelIndex]);

  // Cubic Hermite Spline calculation across waypoint array
  function getSplinePoint(t, pts) {
    const clampedT = Math.max(0, Math.min(pts.length - 1, t));
    const p1Idx = Math.floor(clampedT);
    const p2Idx = Math.min(pts.length - 1, p1Idx + 1);
    const localT = clampedT - p1Idx;

    const p0 = pts[Math.max(0, p1Idx - 1)];
    const p1 = pts[p1Idx];
    const p2 = pts[p2Idx];
    const p3 = pts[Math.min(pts.length - 1, p2Idx + 1)];

    // Catmull-Rom interpolation
    const x = catmullRom(p0.x, p1.x, p2.x, p3.x, localT);
    const y = catmullRom(p0.y, p1.y, p2.y, p3.y, localT);

    return { x, y };
  }

  function catmullRom(p0, p1, p2, p3, t) {
    const v0 = (p2 - p0) * 0.5;
    const v1 = (p3 - p1) * 0.5;
    const t2 = t * t;
    const t3 = t * t2;
    return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
  }

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#090a0e',
        padding: '6rem 2rem 5rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Section Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: 'rgba(252, 107, 47, 0.12)',
                border: '1px solid rgba(252, 107, 47, 0.3)',
                color: 'var(--ember-core)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              <Sparkles size={12} />
              <span>Cinematic Projects Universe // 7 Sequential Levels</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 700,
                color: 'var(--text-pure)',
                letterSpacing: '-0.02em',
              }}
            >
              Interactive Project Highway
            </h2>
          </div>

          {/* Toggle between 3D Universe and Direct Grid Browse */}
          <button
            onClick={() => setBrowseMode(!browseMode)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '999px',
              padding: '0.6rem 1.25rem',
              color: 'var(--text-cloud)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.25s ease',
            }}
          >
            <Navigation size={14} color="var(--ember-core)" />
            <span>{browseMode ? 'Ride Highway (Interactive)' : 'Browse All 7 Levels'}</span>
          </button>
        </div>
      </div>

      {!browseMode ? (
        /* ================= 2.5D INTERACTIVE WORLD ================= */
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Level Selector Bar (Direct Jump) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {PROJECTS.map((proj, idx) => {
              const isActive = idx === currentLevelIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => navigateToLevel(idx)}
                  style={{
                    background: isActive ? `${proj.accentColor}25` : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${isActive ? proj.accentColor : 'rgba(255, 255, 255, 0.1)'}`,
                    color: isActive ? '#fff' : 'var(--text-ash)',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? `0 0 15px ${proj.accentColor}44` : 'none',
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{proj.number}</span>
                  <span style={{ display: 'none', md: 'inline' }}>{proj.title}</span>
                </button>
              );
            })}
          </div>

          {/* Canvas Viewport */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '460px',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'radial-gradient(ellipse at 50% 30%, #171b26 0%, #0a0b0f 100%)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
            }}
          >
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

            {/* Left / Right Ride Controls */}
            <button
              onClick={() => navigateToLevel(Math.max(0, currentLevelIndex - 1))}
              disabled={currentLevelIndex === 0}
              style={{
                position: 'absolute',
                top: '50%',
                left: '1.25rem',
                transform: 'translateY(-50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(15, 17, 24, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: currentLevelIndex === 0 ? 'not-allowed' : 'pointer',
                opacity: currentLevelIndex === 0 ? 0.35 : 1,
                backdropFilter: 'blur(8px)',
                zIndex: 20,
              }}
              title="Drive to previous project"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => navigateToLevel(Math.min(PROJECTS.length - 1, currentLevelIndex + 1))}
              disabled={currentLevelIndex === PROJECTS.length - 1}
              style={{
                position: 'absolute',
                top: '50%',
                right: '1.25rem',
                transform: 'translateY(-50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(15, 17, 24, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: currentLevelIndex === PROJECTS.length - 1 ? 'not-allowed' : 'pointer',
                opacity: currentLevelIndex === PROJECTS.length - 1 ? 0.35 : 1,
                backdropFilter: 'blur(8px)',
                zIndex: 20,
              }}
              title="Drive to next project"
            >
              <ChevronRight size={22} />
            </button>

            {/* Keyboard Hints Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                display: 'flex',
                gap: '1rem',
                zIndex: 10,
              }}
            >
              <span>[← / A] PREVIOUS</span>
              <span>[→ / D] NEXT</span>
              <span>[SPACE / CLICK] ENTER</span>
            </div>
          </div>

          {/* Active Mission HUD Terminal Card */}
          <div
            style={{
              marginTop: '1.5rem',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: `1px solid ${currentProject.accentColor}44`,
              padding: '1.5rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
              boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 25px ${currentProject.glowColor}`,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: currentProject.accentColor,
                  }}
                >
                  SECTOR {currentProject.number} // {currentProject.code}
                </span>

                {currentProject.hasWhatsApp && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#25D366',
                    }}
                  >
                    <MessageSquare size={12} />
                    <span>WhatsApp Verified</span>
                  </span>
                )}
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
                {currentProject.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-ash)', maxWidth: '650px', margin: '0.2rem 0 0' }}>
                {currentProject.summary}
              </p>
            </div>

            <button
              onClick={() => setSelectedProject(currentProject)}
              style={{
                background: currentProject.accentColor,
                color: '#000',
                border: 'none',
                borderRadius: '999px',
                padding: '0.75rem 1.75rem',
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: `0 0 25px ${currentProject.glowColor}`,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <Play size={14} fill="#000" />
              <span>ENTER MISSION BRIEFING</span>
            </button>
          </div>
        </div>
      ) : (
        /* ================= DIRECT 7-LEVEL GRID BROWSE ================= */
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              style={{
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.025)',
                border: `1px solid ${proj.accentColor}33`,
                padding: '1.75rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = proj.accentColor;
                e.currentTarget.style.boxShadow = `0 15px 35px rgba(0,0,0,0.6), 0 0 25px ${proj.glowColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = `${proj.accentColor}33`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: proj.accentColor,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      background: `${proj.accentColor}18`,
                    }}
                  >
                    LEVEL {proj.number}
                  </span>

                  {proj.hasWhatsApp && (
                    <span style={{ color: '#25D366', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                      <MessageSquare size={13} />
                      <span>WhatsApp</span>
                    </span>
                  )}
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>
                  {proj.title}
                </h3>
                <div style={{ fontSize: '0.78rem', color: proj.accentColor, fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
                  {proj.category}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-ash)', lineHeight: 1.6 }}>
                  {proj.summary}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {proj.technologies[0]} • {proj.technologies[1]}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: proj.accentColor }}>
                  Open Details →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNextProject={() => {
            const currentIdx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
            if (currentIdx < PROJECTS.length - 1) {
              setSelectedProject(PROJECTS[currentIdx + 1]);
              setCurrentLevelIndex(currentIdx + 1);
            }
          }}
          onPrevProject={() => {
            const currentIdx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
            if (currentIdx > 0) {
              setSelectedProject(PROJECTS[currentIdx - 1]);
              setCurrentLevelIndex(currentIdx - 1);
            }
          }}
        />
      )}
    </section>
  );
}
