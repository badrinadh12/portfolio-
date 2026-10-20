import React, { useState } from 'react';
import TextPressure from './TextPressure';
import EmberGlow from './EmberGlow';
import Preloader from './Preloader';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TitleCard({ onExploreWork, onContactClick }) {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setLoaderComplete(false);
    setKey((prev) => prev + 1);
  };

  return (
    <section id="hero" className="titlecard-stage">
      {/* Film Grain Texture Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Opening Loader Sequence (Milestone 2) */}
      <Preloader key={`loader-${key}`} onComplete={() => setLoaderComplete(true)} />

      {/* Interactive Cursor Light & Drifting Embers */}
      <EmberGlow />

      {/* Top Left Status Pill */}
      <div className="title-top-pill">
        <span className="pulse-dot" />
        <span>Shipping Ideas Into Reality.</span>
      </div>

      {/* Top Right Replay Action */}
      <div style={{ position: 'absolute', top: '6.5rem', right: 'clamp(1.5rem, 6vw, 5rem)', zIndex: 40 }}>
        <button
          onClick={handleReplay}
          className="hud-replay-btn"
          title="Replay cinematic title card sequence"
          aria-label="Replay intro animation"
        >
          <RotateCcw size={12} />
          <span>REPLAY</span>
        </button>
      </div>

      {/* Centerpiece: Kinetic Variable Font Typography */}
      <TextPressure
        key={`pressure-${key}`}
        text="BADRINADH"
        subtitle="CRAFTING EXPERIENCES THAT PEOPLE REMEMBER."
        minWidth={25}
        maxWidth={151}
        minWeight={100}
        maxWeight={950}
        radius={380}
        isSettled={loaderComplete}
      />

      {/* Bottom Left Student Developer Elevator Pitch */}
      <div className="title-pitch-box">
        <h3>Badrinadh // AI & Full-Stack Developer</h3>
        <p>
          B.Tech CSE (Artificial Intelligence) at JK Lakshmipat University. Engineering practical websites, AI
          applications, and business automation.
        </p>
      </div>

      {/* Bottom Right Direct Navigation Actions */}
      <div className="title-actions-box">
        {onExploreWork ? (
          <button onClick={onExploreWork} className="btn-ember-primary">
            <span>Explore Work</span>
            <ArrowUpRight size={16} />
          </button>
        ) : (
          <Link to="/projects" className="btn-ember-primary">
            <span>Explore Work</span>
            <ArrowUpRight size={16} />
          </Link>
        )}

        {onContactClick ? (
          <button onClick={onContactClick} className="btn-glass-secondary">
            <span>Let's Talk →</span>
          </button>
        ) : (
          <Link to="/contact" className="btn-glass-secondary">
            <span>Let's Talk →</span>
          </Link>
        )}
      </div>

      {/* Scroll Down Cue */}
      <a href="#about" className="scroll-cue" aria-label="Scroll down to explore personal story">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </a>
    </section>
  );
}
