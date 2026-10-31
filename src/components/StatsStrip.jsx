import React from 'react';

export default function StatsStrip() {
  const stats = [
    { value: '12,400+', label: 'Verified property profiles' },
    { value: '860', label: 'Authorized brokers' },
    { value: '2,150', label: 'Verified professionals' },
    { value: '98.2%', label: 'Duplicate detection accuracy' }
  ];

  return (
    <section style={{ paddingtop: '2rem', paddingBottom: '2rem' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, var(--text-charcoal) 0%, var(--accent-brown) 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '3.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: 'var(--shadow-dark)'
        }}
        className="stats-container"
      >
        {stats.map((stat, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span
              className="font-fraunces"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: 'var(--gold-soft)',
                lineHeight: 1
              }}
            >
              {stat.value}
            </span>
            <span
              className="font-inter"
              style={{
                fontSize: '0.9rem',
                color: 'var(--bg-warm-ivory)',
                opacity: 0.9,
                fontWeight: 400,
                letterSpacing: '0.3px',
                maxWidth: '180px',
                margin: '0 auto'
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Internal CSS for mobile responsiveness */}
      <style>{`
        @media (max-width: 600px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
            padding: 2.5rem 1rem !important;
          }
          .stats-container span:first-child {
            font-size: 1.8rem !important;
          }
          .stats-container span:last-child {
            font-size: 0.78rem !important;
          }
        }
      `}</style>
    </section>
  );
}
