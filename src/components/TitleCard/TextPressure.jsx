import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * TextPressure Component
 * Recreates the kinetic variable typography title card from the reference recording.
 * Letters dynamically stretch, expand, and compress with cursor proximity
 * using variable font axes: wdth (25..151) and wght (100..1000).
 */
export default function TextPressure({
  text = 'BADRINADH',
  subtitle = 'CRAFTING EXPERIENCES THAT PEOPLE REMEMBER.',
  textColor = 'rgba(255, 255, 255, 0.94)',
  strokeColor = '#FF3333',
  radius = 380,
  minWidth = 25,
  maxWidth = 151,
  minWeight = 100,
  maxWeight = 950,
  isSettled = true,
}) {
  const containerRef = useRef(null);
  const spansRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });
  const animFrameRef = useRef(null);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(text.split(''));
  }, [text]);

  const handleMouseMove = useCallback((e) => {
    mouseRef.current.targetX = e.clientX;
    mouseRef.current.targetY = e.clientY;
    mouseRef.current.active = true;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches[0]) {
      mouseRef.current.targetX = e.touches[0].clientX;
      mouseRef.current.targetY = e.touches[0].clientY;
      mouseRef.current.active = true;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const updatePhysics = () => {
      time += 0.02;

      // Inertia smoothing for mouse position
      if (mouseRef.current.active) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.15;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.15;
      } else {
        // Subtle ambient wave across the letters when idle
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const waveX = rect.left + rect.width * (0.5 + Math.sin(time) * 0.4);
          const waveY = rect.top + rect.height * 0.5;
          mouseRef.current.x += (waveX - mouseRef.current.x) * 0.05;
          mouseRef.current.y += (waveY - mouseRef.current.y) * 0.05;
        }
      }

      spansRef.current.forEach((span, i) => {
        if (!span) return;

        const rect = span.getBoundingClientRect();
        const charX = rect.left + rect.width / 2;
        const charY = rect.top + rect.height / 2;

        const dx = mouseRef.current.x - charX;
        const dy = mouseRef.current.y - charY;
        const dist = Math.hypot(dx, dy);

        // Proximity calculation
        const proximity = Math.max(0, 1 - dist / radius);
        // Ease out quadratic for natural stretch
        const eased = Math.pow(proximity, 1.7);

        // Calculate dynamic variable axes
        const width = Math.round(minWidth + (maxWidth - minWidth) * eased);
        const weight = Math.round(minWeight + (maxWeight - minWeight) * eased);
        const scaleY = (1 + eased * 0.08).toFixed(3);
        const rimAlpha = (0.2 + eased * 0.75).toFixed(2);
        const glow = Math.round(eased * 30);

        span.style.fontVariationSettings = `'wdth' ${width}, 'wght' ${weight}`;
        span.style.transform = `scaleY(${scaleY})`;
        span.style.setProperty('--rim-alpha', rimAlpha);

        if (glow > 2) {
          span.style.textShadow = `0 0 ${glow}px rgba(252, 107, 47, ${(eased * 0.6).toFixed(2)})`;
        } else {
          span.style.textShadow = 'none';
        }
      });

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [handleMouseMove, handleTouchMove, handleMouseLeave, radius, minWidth, maxWidth, minWeight, maxWeight]);

  return (
    <div className="title-name-container" ref={containerRef}>
      <div className="kinetic-title-word" aria-label={text}>
        {letters.map((char, index) => (
          <span
            key={`${char}-${index}`}
            ref={(el) => (spansRef.current[index] = el)}
            className="kinetic-letter"
            data-char={char}
            style={{
              color: textColor,
              fontVariationSettings: `'wdth' ${minWidth}, 'wght' ${minWeight}`,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Cinematic Red Subtitle Crossbar */}
      {subtitle && (
        <div className="title-crossbar-badge" aria-hidden="true">
          {subtitle}
        </div>
      )}
    </div>
  );
}
