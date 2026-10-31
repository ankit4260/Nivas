import React from 'react';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Hero({ activePill, setActivePill, onShowToast }) {
  const pills = ['Buy', 'Rent', 'Sell', 'Build', 'Design'];

  // Curated premium images
  const upperRightImg = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80";
  const lowerLeftImg = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=350&q=80";

  const handlePillClick = (pill) => {
    setActivePill(pill);
    onShowToast(`Category changed to "${pill}"`, 'info');
  };

  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '2.5rem',
        alignItems: 'center',
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        minHeight: '85vh',
        overflow: 'hidden'
      }}
      className="hero-section"
    >
      {/* Left Column: Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <span
            className="badge-mono font-mono"
            style={{
              backgroundColor: 'var(--surface-sec)',
              color: 'var(--accent-brown)',
              border: '1px solid rgba(74, 55, 40, 0.1)',
              marginBottom: '1.5rem',
              display: 'inline-flex'
            }}
          >
            ● NOW LIVE ACROSS 4 CITIES
          </span>
          
          <h1
            className="font-fraunces"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              lineHeight: '1.15',
              fontWeight: 400,
              color: 'var(--text-charcoal)',
              letterSpacing: '-0.5px'
            }}
          >
            Find a Home.<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent-brown)', fontWeight: 500 }}>Build</span> a Home.<br />
            Design a Home.
          </h1>
        </div>

        <p
          className="font-inter"
          style={{
            fontSize: '1.08rem',
            lineHeight: '1.7',
            color: 'var(--text-charcoal)',
            opacity: 0.85,
            maxWidth: '520px'
          }}
        >
          A smarter, more transparent way to discover, create and connect with real estate — from the first search to the last coat of paint.
        </p>

        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
          {pills.map((pill) => {
            const isActive = activePill === pill;
            return (
              <button
                key={pill}
                onClick={() => handlePillClick(pill)}
                className="btn-pill"
                style={{
                  padding: '0.7rem 1.7rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  backgroundColor: isActive ? 'var(--text-charcoal)' : 'var(--surface-beige)',
                  color: isActive ? 'var(--bg-warm-ivory)' : 'var(--text-charcoal)',
                  boxShadow: isActive ? 'var(--shadow-btn-hover)' : 'var(--shadow-raised-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  transform: isActive ? 'translateY(1px)' : 'none'
                }}
              >
                {pill}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: 3D Scene + Floating Cards */}
      <div
        style={{
          height: '480px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className="hero-3d-container"
      >
        {/* Soft Radial Gold Glow behind 3D Canvas */}
        <div
          className="animate-pulse-soft"
          style={{
            position: 'absolute',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(217, 190, 150, 0.22) 0%, transparent 70%)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* 3D WebGL Canvas */}
        <div style={{ width: '100%', height: '100%', zIndex: 1 }}>
          <ThreeHeroCanvas />
        </div>

        {/* Floating Card 1: Upper Right */}
        <div
          className="neumorphic-card animate-float-y"
          style={{
            position: 'absolute',
            top: '15px',
            right: '-10px',
            width: '210px',
            padding: '10px',
            zIndex: 2,
            pointerEvents: 'auto',
            borderRadius: '18px'
          }}
        >
          <div style={{ position: 'relative', height: '110px', overflow: 'hidden', borderRadius: '12px', marginBottom: '8px' }}>
            <img src={upperRightImg} alt="Gulmohar Villa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '6px', left: '6px' }}>
              <span className="badge-mono verification-badge" style={{ fontSize: '0.62rem', padding: '0.2rem 0.5rem', backgroundColor: '#EDE6D9' }}>
                ✓ VERIFIED
              </span>
            </div>
          </div>
          <h4 className="font-fraunces" style={{ fontSize: '0.92rem', marginBottom: '2px', fontWeight: 600 }}>Gulmohar Villa</h4>
          <p className="font-inter" style={{ fontSize: '0.72rem', opacity: 0.65, marginBottom: '6px' }}>Jaipur, RJ</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="font-mono" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-brown)' }}>₹1.85 Cr</span>
            <span className="font-mono text-gold" style={{ fontSize: '0.65rem', fontWeight: 600 }}>98% MATCH</span>
          </div>
        </div>

        {/* Floating Card 2: Lower Left */}
        <div
          className="neumorphic-card animate-float-alt-y"
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '-10px',
            width: '180px',
            padding: '8px',
            zIndex: 2,
            pointerEvents: 'auto',
            borderRadius: '18px'
          }}
        >
          <div style={{ position: 'relative', height: '90px', overflow: 'hidden', borderRadius: '12px', marginBottom: '6px' }}>
            <img src={lowerLeftImg} alt="Aravali Retreat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '5px', left: '5px' }}>
              <span className="badge-mono verification-badge" style={{ fontSize: '0.58rem', padding: '0.15rem 0.4rem', backgroundColor: '#EDE6D9' }}>
                ✓ VERIFIED
              </span>
            </div>
          </div>
          <h4 className="font-fraunces" style={{ fontSize: '0.85rem', marginBottom: '2px', fontWeight: 600 }}>Aravali Retreat</h4>
          <p className="font-inter" style={{ fontSize: '0.68rem', opacity: 0.65, marginBottom: '4px' }}>Gurugram, HR</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="font-mono" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-brown)' }}>₹95 L</span>
            <span className="font-mono text-gold" style={{ fontSize: '0.62rem', fontWeight: 600 }}>94% MATCH</span>
          </div>
        </div>
      </div>

      {/* Internal CSS for responsive grid layout */}
      <style>{`
        @media (max-width: 992px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding-top: 7rem !important;
            gap: 4rem !important;
            text-align: center;
          }
          .hero-section div:first-child {
            align-items: center;
          }
          .hero-section p {
            margin: 0 auto;
          }
          .hero-section div:first-child div:nth-child(3) {
            justify-content: center;
          }
          .hero-3d-container {
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
