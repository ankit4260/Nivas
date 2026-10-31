import React from 'react';
import { Home, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CtaSection({ onAuthClick, onShowToast }) {
  const handleCtaClick = (action) => {
    onShowToast(`Redirecting to registration for "${action}"...`, 'info');
    onAuthClick('signup');
  };

  return (
    <section id="cta" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div
        className="neumorphic-card"
        style={{
          borderRadius: 'var(--radius-xl)',
          padding: '4.5rem 3rem',
          backgroundColor: 'var(--surface-beige)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          textAlign: 'center',
          maxWidth: '920px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Glow */}
        <div
          className="animate-pulse-soft"
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(217, 190, 150, 0.12) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-brown)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--bg-warm-ivory)',
              boxShadow: 'var(--shadow-raised-sm)',
              border: '1px solid rgba(255, 255, 255, 0.4)'
            }}
          >
            <ShieldCheck size={28} />
          </div>

          <h2
            className="font-fraunces"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              lineHeight: 1.15,
              fontWeight: 400,
              maxWidth: '680px',
              color: 'var(--text-charcoal)'
            }}
          >
            List your property in minutes, get verified in days
          </h2>

          <p
            className="font-inter"
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.75',
              opacity: 0.85,
              maxWidth: '640px',
              color: 'var(--text-charcoal)'
            }}
          >
            Owners and brokers both welcome. Our verification team confirms identity, property and availability so buyers trust what they see.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              justifyContent: 'center',
              marginTop: '0.75rem',
              width: '100%'
            }}
          >
            <button
              onClick={() => handleCtaClick('List a property')}
              className="btn-pill btn-primary"
              style={{ padding: '0.9rem 2.2rem', fontWeight: 600 }}
            >
              List a property <Home size={16} />
            </button>
            <button
              onClick={() => handleCtaClick('Join as broker')}
              className="btn-pill btn-secondary"
              style={{ padding: '0.9rem 2.2rem', fontWeight: 600 }}
            >
              Join as a broker <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
