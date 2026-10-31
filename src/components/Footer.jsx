import React from 'react';
import { Home, ShieldCheck } from 'lucide-react';

export default function Footer({ onAuthClick }) {
  const currentYear = new Date().getFullYear();

  const handleProfessionalClick = (type) => {
    alert(`Initiating sign up process for: ${type}`);
    onAuthClick('signup');
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--surface-sec)',
        borderTop: '1px solid rgba(74, 55, 40, 0.08)',
        padding: '5rem 10% 3rem',
        color: 'var(--text-charcoal)'
      }}
      className="footer-section"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem'
        }}
        className="footer-grid"
      >
        {/* Column 1: Brand Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-brown)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}
            >
              <Home size={15} />
            </div>
            <span className="font-fraunces" style={{ fontStyle: 'italic', fontWeight: 700, fontSize: '1.25rem' }}>
              Nivas
            </span>
          </div>

          <p className="font-inter" style={{ fontSize: '0.85rem', opacity: 0.75, lineHeight: 1.6, maxWidth: '240px' }}>
            A premium Indian real-estate ecosystem built on trust, transparency, and architectural excellence.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="badge-mono verification-badge" style={{ fontSize: '0.62rem', padding: '0.2rem 0.5rem' }}>
              ✓ SECURE PLATFORM
            </span>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <h4 className="font-mono" style={{ fontSize: '0.72rem', letterSpacing: '1px', fontWeight: 600, opacity: 0.6 }}>EXPLORE</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <a href="#properties" className="footer-link">Buy Properties</a>
            <a href="#properties" className="footer-link">Rent Properties</a>
            <a href="#cta" className="footer-link">Sell Property</a>
            <a href="#marketplace" className="footer-link">Build & Design</a>
          </div>
        </div>

        {/* Column 3: Company */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <h4 className="font-mono" style={{ fontSize: '0.72rem', letterSpacing: '1px', fontWeight: 600, opacity: 0.6 }}>COMPANY</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Trust & Safety</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>

        {/* Column 4: Professionals */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <h4 className="font-mono" style={{ fontSize: '0.72rem', letterSpacing: '1px', fontWeight: 600, opacity: 0.6 }}>FOR PROFESSIONALS</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <button onClick={() => handleProfessionalClick('Broker')} className="footer-btn">Join as Broker</button>
            <button onClick={() => handleProfessionalClick('Builder')} className="footer-btn">Join as Builder</button>
            <button onClick={() => handleProfessionalClick('Designer')} className="footer-btn">Join as Designer</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div
        style={{
          borderTop: '1px solid rgba(74, 55, 40, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.75rem',
          opacity: 0.7,
          fontFamily: 'JetBrains Mono, monospace'
        }}
      >
        <span>© {currentYear} Nivas Technologies Private Limited.</span>
        <span>Made with care in Jaipur, India.</span>
      </div>

      {/* Internal CSS for links & responsiveness */}
      <style>{`
        .footer-link {
          text-decoration: none;
          color: var(--text-charcoal);
          opacity: 0.8;
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          opacity: 1;
          color: var(--accent-gold);
          transform: translateX(2px);
        }
        .footer-btn {
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          color: var(--text-charcoal);
          opacity: 0.8;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          transition: var(--transition-fast);
        }
        .footer-btn:hover {
          opacity: 1;
          color: var(--accent-gold);
          transform: translateX(2px);
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-section {
            padding: 3rem 1.5rem 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
