import React, { useEffect, useRef } from 'react';

/**
 * EmberGlow Component
 * Renders the interactive glowing ember orb that follows the user's cursor,
 * and generates ambient cinematic dust particles drifting in 3D depth.
 */
export default function EmberGlow() {
  const orbRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animFrame = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mousePos.current.x = e.touches[0].clientX;
        mousePos.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    const updateOrb = () => {
      // Smooth lerp tracking
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.085;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.085;

      if (orbRef.current) {
        orbRef.current.style.left = `${currentPos.current.x}px`;
        orbRef.current.style.top = `${currentPos.current.y}px`;
      }

      animFrame.current = requestAnimationFrame(updateOrb);
    };

    animFrame.current = requestAnimationFrame(updateOrb);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  // Pre-generate 22 deterministic dust particles with staggered timings
  const dustParticles = [
    { id: 1, top: '15%', left: '12%', size: '2px', delay: '0s', dur: '7s', color: 'rgba(252,107,47,0.6)' },
    { id: 2, top: '28%', left: '85%', size: '1.5px', delay: '1s', dur: '8.5s', color: 'rgba(255,255,255,0.3)' },
    { id: 3, top: '42%', left: '18%', size: '2.5px', delay: '2s', dur: '6s', color: 'rgba(252,107,47,0.7)' },
    { id: 4, top: '65%', left: '92%', size: '1.2px', delay: '1.5s', dur: '9s', color: 'rgba(255,255,255,0.2)' },
    { id: 5, top: '78%', left: '26%', size: '2px', delay: '3s', dur: '7.5s', color: 'rgba(252,107,47,0.5)' },
    { id: 6, top: '22%', left: '68%', size: '1.8px', delay: '0.5s', dur: '6.8s', color: 'rgba(255,255,255,0.25)' },
    { id: 7, top: '88%', left: '48%', size: '2.8px', delay: '2.5s', dur: '8s', color: 'rgba(252,107,47,0.65)' },
    { id: 8, top: '35%', left: '38%', size: '1.4px', delay: '4s', dur: '7.2s', color: 'rgba(255,255,255,0.35)' },
    { id: 9, top: '72%', left: '76%', size: '2.2px', delay: '3.5s', dur: '9.2s', color: 'rgba(252,107,47,0.55)' },
    { id: 10, top: '55%', left: '8%', size: '1.6px', delay: '1.2s', dur: '6.5s', color: 'rgba(255,255,255,0.2)' },
    { id: 11, top: '30%', left: '94%', size: '2px', delay: '5s', dur: '8.2s', color: 'rgba(252,107,47,0.7)' },
    { id: 12, top: '82%', left: '14%', size: '1.2px', delay: '4.5s', dur: '7.8s', color: 'rgba(255,255,255,0.3)' },
    { id: 13, top: '18%', left: '46%', size: '2.4px', delay: '2.2s', dur: '6.4s', color: 'rgba(252,107,47,0.6)' },
    { id: 14, top: '48%', left: '74%', size: '1.7px', delay: '3.8s', dur: '8.8s', color: 'rgba(255,255,255,0.25)' },
  ];

  return (
    <>
      {/* Dynamic Cursor Light Orb */}
      <div ref={orbRef} className="cursor-ember-orb" aria-hidden="true" />

      {/* Ambient Drifting Dust Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {dustParticles.map((p) => (
          <div
            key={p.id}
            className="dust-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              animationDelay: p.delay,
              animationDuration: p.dur,
              boxShadow: p.color.includes('252') ? `0 0 6px ${p.color}` : 'none',
            }}
          />
        ))}
      </div>
    </>
  );
}
