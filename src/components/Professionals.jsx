import React from 'react';
import { Star, Award, ChevronRight } from 'lucide-react';

export default function Professionals({ onShowToast }) {
  const pros = [
    {
      name: 'Raj Construction',
      role: 'Builder & Contractor',
      rating: 4.9,
      reviews: 84,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80',
      tags: ['Commercial', 'Villa Structure', 'RERA Registered']
    },
    {
      name: 'Meera Studio Interiors',
      role: 'Interior Designer',
      rating: 4.8,
      reviews: 112,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
      tags: ['Modern Luxury', 'Indian Heritage', 'Turnkey Furnishing']
    },
    {
      name: 'Arjun Architects',
      role: 'Architect',
      rating: 4.9,
      reviews: 67,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      tags: ['Passive House', 'Modern Courtyards', 'Liaisoning']
    },
    {
      name: 'Nova Paints Co.',
      role: 'Painter & Waterproofing',
      rating: 4.7,
      reviews: 215,
      avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=120&h=120&q=80',
      tags: ['Damp Proofing', 'Textured Walls', 'Eco Paints']
    },
    {
      name: 'Rahul Visuals',
      role: 'Videographer',
      rating: 4.9,
      reviews: 43,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
      tags: ['Drone Footage', '3D Walkthroughs', '4K Cinematic']
    }
  ];

  const handleProClick = (name) => {
    onShowToast(`Connecting with ${name}. Live chat request initialized.`, 'success');
  };

  return (
    <section id="professionals" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', overflow: 'hidden' }}>
      {/* Header with horizontally-aligned CTAs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <span className="badge-mono verification-badge" style={{ marginBottom: '1rem' }}>
            VERIFIED INDUSTRY EXPERTS
          </span>
          <h2 className="font-fraunces" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400, lineHeight: 1.2 }}>
            Connect with verified professionals
          </h2>
        </div>
        <button
          onClick={() => onShowToast('Loading all registered professionals...', 'info')}
          className="btn-pill btn-secondary"
          style={{ padding: '0.65rem 1.5rem', fontSize: '0.88rem' }}
        >
          View all 2,150 professionals <ChevronRight size={16} />
        </button>
      </div>

      {/* Horizontally Scrollable Row */}
      <div
        className="no-scrollbar"
        style={{
          display: 'flex',
          gap: '1.75rem',
          overflowX: 'auto',
          padding: '1rem 0.5rem 2rem 0.5rem',
          margin: '0 -0.5rem -2rem -0.5rem',
          scrollSnapType: 'x proximity',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {pros.map((pro, index) => (
          <div
            key={index}
            onClick={() => handleProClick(pro.name)}
            className="neumorphic-card"
            style={{
              flexShrink: 0,
              width: '320px',
              backgroundColor: 'var(--surface-beige)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '22px',
              padding: '1.75rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              scrollSnapAlign: 'start'
            }}
          >
            {/* Top row: Avatar & details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--accent-gold)',
                  boxShadow: 'var(--shadow-raised-sm)',
                  backgroundColor: 'var(--surface-sec)'
                }}
              >
                <img src={pro.avatar} alt={pro.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <h4 className="font-fraunces" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  {pro.name}
                </h4>
                <span className="font-mono text-gold" style={{ fontSize: '0.7rem', fontWeight: 600 }}>
                  {pro.role}
                </span>
              </div>
            </div>

            {/* Rating Strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid rgba(74, 55, 40, 0.08)', paddingTop: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--amber)', gap: '2px' }}>
                <Star size={14} style={{ fill: 'currentColor' }} />
                <span className="font-mono" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-charcoal)' }}>
                  {pro.rating}
                </span>
              </div>
              <span className="font-inter" style={{ fontSize: '0.78rem', opacity: 0.6 }}>
                ({pro.reviews} verified projects)
              </span>
              <span className="badge-mono verification-badge" style={{ fontSize: '0.58rem', marginLeft: 'auto', padding: '0.15rem 0.4rem' }}>
                ✓ VETTED
              </span>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {pro.tags.map((tag, tIndex) => (
                <span
                  key={tIndex}
                  className="font-mono"
                  style={{
                    fontSize: '0.65rem',
                    backgroundColor: 'var(--surface-sec)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-pill)',
                    opacity: 0.85
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
