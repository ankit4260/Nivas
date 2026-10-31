import React from 'react';
import { Hammer, Palette, Paintbrush, Video, ArrowUpRight } from 'lucide-react';

export default function BuildMarketplace({ onShowToast }) {
  const services = [
    {
      icon: Hammer,
      title: 'Construction',
      desc: 'Connect with verified general contractors, structure builders, and project supervisors.',
      count: '142 Professionals',
      bgIcon: '🏗️'
    },
    {
      icon: Palette,
      title: 'Design',
      desc: 'Find curated interior designers, spatial architects, and 3D modeling specialists.',
      count: '318 Designers',
      bgIcon: '🎨'
    },
    {
      icon: Paintbrush,
      title: 'Finishing',
      desc: 'Hire premium painting experts, wood polished craftsmen, and waterproofing specialists.',
      count: '180 Contractors',
      bgIcon: '🖌️'
    },
    {
      icon: Video,
      title: 'Property Media',
      desc: 'Engage drone videographers and architectural photographers to list properties.',
      count: '54 Creators',
      bgIcon: '🎥'
    }
  ];

  const handleCardClick = (title) => {
    onShowToast(`Marketplace loading: Initializing database connection for "${title}"...`, 'info');
  };

  return (
    <section id="marketplace" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
        <span className="badge-mono verification-badge" style={{ marginBottom: '1rem' }}>
          POST-PURCHASE SERVICES
        </span>
        <h2
          className="font-fraunces"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '0.75rem'
          }}
        >
          Everything after the keys
        </h2>
        <p className="font-inter" style={{ fontSize: '0.98rem', opacity: 0.8, lineHeight: 1.6 }}>
          Construction, design and finishing professionals — all verified, all in one marketplace.
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}
      >
        {services.map((svc, index) => {
          const Icon = svc.icon;
          return (
            <div
              key={index}
              onClick={() => handleCardClick(svc.title)}
              className="neumorphic-card"
              style={{
                padding: '2.5rem 2rem',
                backgroundColor: 'var(--surface-beige)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '22px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Decal */}
              <div
                style={{
                  position: 'absolute',
                  right: '-10px',
                  bottom: '-15px',
                  fontSize: '5.5rem',
                  opacity: 0.05,
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              >
                {svc.bgIcon}
              </div>

              {/* Icon & Go-to Icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--surface-sec)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-brown)',
                    boxShadow: 'var(--shadow-raised-sm)',
                    border: '1px solid rgba(255,255,255,0.6)'
                  }}
                >
                  <Icon size={20} />
                </div>
                <div style={{ color: 'var(--accent-gold)' }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Title & Description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h3 className="font-fraunces" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {svc.title}
                </h3>
                <p className="font-inter" style={{ fontSize: '0.86rem', opacity: 0.75, lineHeight: 1.6 }}>
                  {svc.desc}
                </p>
              </div>

              {/* Total Professional Count Badge */}
              <span
                className="font-mono text-gold"
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  marginTop: 'auto',
                  paddingTop: '0.5rem'
                }}
              >
                {svc.count}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
