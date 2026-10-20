import React, { useEffect, useState } from 'react';

/**
 * Preloader Component
 * Recreates the exact opening loader sequence shown in frames 1-3 of the reference recording:
 * - Minimalist dark canvas
 * - Numeric counter (0 to 100)
 * - Tracked title BADRINADH
 * - Thin red/ember progress track filling smoothly
 */
export default function Preloader({ onComplete, forceSkip = false }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (forceSkip) {
      setProgress(100);
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      // Non-linear acceleration for cinematic pacing
      const step = current < 40 ? 3 : current < 80 ? 4 : 5;
      current += step;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);

        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
        }, 250);
      } else {
        setProgress(current);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete, forceSkip]);

  return (
    <div className={`preloader-screen ${isDone ? 'hidden' : ''}`} aria-hidden={isDone}>
      <span className="preloader-counter">{progress}</span>
      <span className="preloader-name">Badrinadh</span>
      <div className="preloader-track">
        <div className="preloader-bar" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  );
}
