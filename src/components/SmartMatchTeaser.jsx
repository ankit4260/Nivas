import React from 'react';
import { Award, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

export default function SmartMatchTeaser({ onShowToast }) {
  const handleCtaClick = () => {
    onShowToast(
      'Smart Match analysis loaded: Identifies duplicates, parses description discrepancies, and ranks by broker credentials.',
      'info'
    );
  };

  return (
    <section style={{ paddingBottom: '3rem' }}>
      <div
        className="neumorphic-card"
        style={{
          borderRadius: 'var(--radius-xl)',
          padding: '3rem',
          backgroundColor: 'var(--surface-beige)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}
        className="smart-match-card"
      >
        {/* Left Side: Text and Bullet details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <span
              className="badge-mono smart-match-badge"
              style={{
                backgroundColor: 'rgba(184, 146, 90, 0.12)',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}
            >
              🧬 SMART MATCH
            </span>
            <h2
              className="font-fraunces"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 400,
                lineHeight: 1.25,
                color: 'var(--text-charcoal)'
              }}
            >
              One property, three listings — we found the duplicate for you
            </h2>
          </div>

          <p className="font-inter" style={{ fontSize: '1.02rem', lineHeight: '1.6', opacity: 0.85 }}>
            Tired of seeing the same apartment listed multiple times by different brokers at different prices? Our advanced AI parses listings to automatically detect duplicates, ranking representatives based on:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '0.25rem'
            }}
          >
            {/* Value Points */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                backgroundColor: 'rgba(76, 122, 92, 0.1)',
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--green-success)'
              }}>
                <Award size={16} />
              </div>
              <div>
                <strong className="font-inter" style={{ fontSize: '0.92rem', color: 'var(--text-charcoal)' }}>Honest Pricing</strong>
                <p className="font-inter" style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '2px' }}>We filter out price hikes and prioritize the developer's direct rate or the certified broker pricing.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                backgroundColor: 'rgba(184, 146, 90, 0.1)',
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--accent-gold)'
              }}>
                <Sparkles size={16} />
              </div>
              <div>
                <strong className="font-inter" style={{ fontSize: '0.92rem', color: 'var(--text-charcoal)' }}>Verification Badges</strong>
                <p className="font-inter" style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '2px' }}>Brokers who submit local property documents and record video walkthroughs are listed first.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                backgroundColor: 'rgba(176, 82, 63, 0.1)',
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--red)'
              }}>
                <ShieldAlert size={16} />
              </div>
              <div>
                <strong className="font-inter" style={{ fontSize: '0.92rem', color: 'var(--text-charcoal)' }}>Distance Check</strong>
                <p className="font-inter" style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '2px' }}>We audit listing coordinates to guarantee the property matches its advertised location.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '0.75rem' }}>
            <button onClick={handleCtaClick} className="btn-pill btn-gold" style={{ padding: '0.8rem 2.2rem', fontWeight: 600 }}>
              See how matching works <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Visual Duplicates Parser Panel */}
        <div
          style={{
            backgroundColor: 'var(--surface-sec)',
            borderRadius: '18px',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.4)',
            boxShadow: 'var(--shadow-inset)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="font-mono" style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.6 }}>AI DEDUPLICATION ENGINE</span>
            <span className="badge-mono verification-badge" style={{ fontSize: '0.62rem', padding: '0.15rem 0.5rem' }}>98.2% ACCURATE</span>
          </div>

          {/* Listing 1 (Primary) */}
          <div
            style={{
              backgroundColor: 'var(--bg-warm-ivory)',
              borderRadius: '12px',
              padding: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1.5px solid var(--green-success)',
              boxShadow: '0 4px 12px rgba(76,122,92,0.06)'
            }}
          >
            <div>
              <span className="font-mono text-gold" style={{ fontSize: '0.65rem', fontWeight: 600 }}>RANK 1 • RECOMMENDED</span>
              <h4 className="font-fraunces" style={{ fontSize: '0.9rem', margin: '1px 0' }}>Gulmohar Heights</h4>
              <p className="font-inter" style={{ fontSize: '0.72rem', opacity: 0.6 }}>Direct Owner Listing</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="font-mono" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--green-success)' }}>₹1.85 Cr</span>
              <p className="font-inter" style={{ fontSize: '0.65rem', color: 'var(--green-success)', fontWeight: 600 }}>Verified Identity</p>
            </div>
          </div>

          {/* Listing 2 */}
          <div
            style={{
              backgroundColor: 'var(--bg-warm-ivory)',
              borderRadius: '12px',
              padding: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              opacity: 0.7,
              border: '1px solid rgba(74, 55, 40, 0.1)'
            }}
          >
            <div>
              <span className="font-mono" style={{ fontSize: '0.65rem', opacity: 0.6 }}>RANK 2 • DUPLICATE DETECTED</span>
              <h4 className="font-fraunces" style={{ fontSize: '0.9rem', margin: '1px 0' }}>Gulmohar Heights 3BHK</h4>
              <p className="font-inter" style={{ fontSize: '0.72rem', opacity: 0.6 }}>Independent Agent</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="font-mono" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-charcoal)' }}>₹1.92 Cr</span>
              <p className="font-inter" style={{ fontSize: '0.65rem', color: 'var(--red)', fontWeight: 600 }}>+₹7 L markup</p>
            </div>
          </div>

          {/* Listing 3 */}
          <div
            style={{
              backgroundColor: 'var(--bg-warm-ivory)',
              borderRadius: '12px',
              padding: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              opacity: 0.6,
              border: '1px solid rgba(74, 55, 40, 0.1)'
            }}
          >
            <div>
              <span className="font-mono" style={{ fontSize: '0.65rem', opacity: 0.6 }}>RANK 3 • DUPLICATE DETECTED</span>
              <h4 className="font-fraunces" style={{ fontSize: '0.9rem', margin: '1px 0' }}>Gulmohar Premium Flat</h4>
              <p className="font-inter" style={{ fontSize: '0.72rem', opacity: 0.6 }}>Third-Party Portal</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="font-mono" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-charcoal)' }}>₹1.95 Cr</span>
              <p className="font-inter" style={{ fontSize: '0.65rem', color: 'var(--red)', fontWeight: 600 }}>Outdated Listing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Internal CSS for responsive layout */}
      <style>{`
        @media (max-width: 992px) {
          .smart-match-card {
            grid-template-columns: 1fr !important;
            padding: 2rem 1.5rem !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
