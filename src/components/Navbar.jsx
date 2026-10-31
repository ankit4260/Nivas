import React, { useState, useEffect } from 'react';
import { Home, Bell, Menu, X } from 'lucide-react';

export default function Navbar({ onAuthClick, user, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Buy', href: '#properties' },
    { label: 'Rent', href: '#properties' },
    { label: 'Sell', href: '#cta' },
    { label: 'Build & Design', href: '#marketplace' },
    { label: 'Professionals', href: '#professionals' },
    { label: 'How it works', href: '#how-it-works' }
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? '0.75rem 5%' : '1.5rem 5%',
          backgroundColor: isScrolled ? 'rgba(247, 243, 237, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(74, 55, 40, 0.08)' : 'none',
          boxShadow: isScrolled ? '0 4px 20px rgba(43, 38, 32, 0.03)' : 'none',
          transition: 'padding 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s ease, border 0.4s ease, box-shadow 0.4s ease'
        }}
      >
        {/* Left Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-charcoal)',
            fontWeight: 700,
            fontSize: '1.4rem'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
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
            <Home size={18} />
          </div>
          <span className="font-fraunces" style={{ fontStyle: 'italic', letterSpacing: '0.5px' }}>Nivas</span>
        </a>

        {/* Center Links (Desktop Only) */}
        <div
          className="font-inter"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            '@media (max-width: 992px)': { display: 'none' }
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-charcoal)',
                fontWeight: 500,
                fontSize: '0.92rem',
                opacity: 0.85,
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = 1;
                e.target.style.color = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = 0.85;
                e.target.style.color = 'var(--text-charcoal)';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions (Desktop Only) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem'
          }}
        >
          {/* Notification Button */}
          <button
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-charcoal)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface-sec)',
              boxShadow: 'var(--shadow-raised-sm)',
              border: '1px solid rgba(255, 255, 255, 0.6)'
            }}
          >
            <Bell size={18} />
          </button>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className="font-mono" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-brown)' }}>
                {user.name.split(' ')[0]}
              </span>
              <button
                onClick={onLogout}
                className="btn-pill btn-secondary"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => onAuthClick('login')}
                className="btn-pill btn-secondary"
                style={{ padding: '0.55rem 1.4rem', fontSize: '0.88rem' }}
              >
                Log In
              </button>
              <button
                onClick={() => onAuthClick('signup')}
                className="btn-pill btn-primary"
                style={{ padding: '0.55rem 1.4rem', fontSize: '0.88rem' }}
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Hamburger button (Mobile Drawer trigger) */}
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-charcoal)',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface-sec)',
              boxShadow: 'var(--shadow-raised-sm)',
              border: '1px solid rgba(255, 255, 255, 0.6)'
            }}
            className="hamburger-btn"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* CSS injection for responsive navbar elements */}
      <style>{`
        @media (max-width: 992px) {
          nav div:nth-child(2) {
            display: none !important;
          }
          nav div:nth-child(3) button:not(.hamburger-btn),
          nav div:nth-child(3) div {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>

      {/* Mobile Drawer (Right side) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: '300px',
          backgroundColor: 'var(--bg-warm-ivory)',
          boxShadow: '-10px 0 30px rgba(43, 38, 32, 0.1)',
          zIndex: 2000,
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          transform: isMobileDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
        }}
      >
        {/* Drawer Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="font-fraunces" style={{ fontStyle: 'italic', fontWeight: 700, fontSize: '1.3rem' }}>Nivas</span>
          <button
            onClick={() => setIsMobileDrawerOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-charcoal)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface-sec)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileDrawerOpen(false)}
              className="font-inter"
              style={{
                textDecoration: 'none',
                color: 'var(--text-charcoal)',
                fontWeight: 500,
                fontSize: '1.05rem',
                opacity: 0.9
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Drawer Footer Actions */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {user ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <span className="font-mono" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                Logged in as: {user.name}
              </span>
              <button
                onClick={() => {
                  setIsMobileDrawerOpen(false);
                  onLogout();
                }}
                className="btn-pill btn-secondary"
                style={{ width: '100%' }}
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsMobileDrawerOpen(false);
                  onAuthClick('login');
                }}
                className="btn-pill btn-secondary"
                style={{ width: '100%' }}
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setIsMobileDrawerOpen(false);
                  onAuthClick('signup');
                }}
                className="btn-pill btn-primary"
                style={{ width: '100%' }}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Drawer Overlay backdrop */}
      {isMobileDrawerOpen && (
        <div
          onClick={() => setIsMobileDrawerOpen(false)}
          className="backdrop-blur-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1999
          }}
        />
      )}
    </>
  );
}
