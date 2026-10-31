import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Search & discover',
      desc: 'Filter by budget, BHK and verification level.'
    },
    {
      num: '02',
      title: 'Verify & visit',
      desc: 'See identity, property and video verification badges.'
    },
    {
      num: '03',
      title: 'Close with confidence',
      desc: 'Show transparent pricing, fees and deposits.'
    },
    {
      num: '04',
      title: 'Build & design',
      desc: 'Connect with verified builders, architects and designers.'
    }
  ];

  return (
    <section id="how-it-works" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      {/* Title */}
      <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
        <span className="badge-mono verification-badge" style={{ marginBottom: '1rem' }}>
          THE CIVIC STANDARD
        </span>
        <h2 className="font-fraunces" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}>
          How it works
        </h2>
      </div>

      {/* 4-Column Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="neumorphic-card"
            style={{
              padding: '2.5rem 2rem',
              backgroundColor: 'var(--surface-beige)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              borderRadius: '22px'
            }}
          >
            <span
              className="font-fraunces text-gold"
              style={{
                fontSize: '2.5rem',
                fontWeight: 500,
                fontStyle: 'italic',
                lineHeight: 1
              }}
            >
              {step.num}
            </span>
            <h3
              className="font-fraunces"
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-charcoal)'
              }}
            >
              {step.title}
            </h3>
            <p
              className="font-inter"
              style={{
                fontSize: '0.9rem',
                lineHeight: '1.6',
                opacity: 0.8
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
