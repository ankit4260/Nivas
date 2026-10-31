import React from 'react';
import { Heart, Compass, CheckCircle } from 'lucide-react';

export default function PropertyGrid({ properties, favorites, onToggleFavorite, onShowToast }) {
  
  const handleFavoriteClick = (e, id, title) => {
    e.stopPropagation();
    e.preventDefault();
    onToggleFavorite(id);
    const isFav = favorites.includes(id);
    onShowToast(
      isFav ? `Removed "${title}" from favorites` : `Saved "${title}" to your favorites`,
      isFav ? 'warning' : 'success'
    );
  };

  return (
    <section id="properties" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Title block */}
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
        <span className="badge-mono verification-badge" style={{ marginBottom: '1rem' }}>
          ✓ IDENTITY & PROPERTY CHECKS
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
          Verified homes, honestly priced
        </h2>
        <p className="font-inter" style={{ fontSize: '0.98rem', opacity: 0.8, lineHeight: 1.6 }}>
          Every listing below has passed identity, property and availability checks.
        </p>
      </div>

      {/* Grid Container */}
      {properties.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 1.5rem', backgroundColor: 'var(--surface-sec)', borderRadius: 'var(--radius-lg)' }}>
          <Compass size={48} style={{ color: 'var(--accent-gold)', marginBottom: '1rem', opacity: 0.7 }} />
          <h3 className="font-fraunces" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>No listings match your search</h3>
          <p className="font-inter" style={{ opacity: 0.8, fontSize: '0.9rem' }}>Try clearing your filters or selecting a different location.</p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.2rem'
          }}
        >
          {properties.map((prop) => {
            const isFav = favorites.includes(prop.id);
            return (
              <div
                key={prop.id}
                className="neumorphic-card"
                style={{
                  borderRadius: '22px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'var(--surface-beige)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {/* Image Section */}
                <div
                  style={{
                    position: 'relative',
                    height: '220px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--surface-sec)'
                  }}
                  className="property-image-container"
                >
                  <img
                    src={prop.image}
                    alt={prop.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}
                    className="property-image"
                  />

                  {/* Badges Overlay */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span className="badge-mono verification-badge" style={{ backgroundColor: 'var(--bg-warm-ivory)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                      <CheckCircle size={12} style={{ marginRight: '4px', fill: 'var(--green-success)', color: '#fff' }} />
                      VERIFIED
                    </span>
                    {prop.duplicateCount > 1 && (
                      <span className="badge-mono smart-match-badge" style={{ backgroundColor: 'var(--bg-warm-ivory)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        🧬 SMART MATCH ({prop.duplicateCount} LISTINGS)
                      </span>
                    )}
                  </div>

                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => handleFavoriteClick(e, prop.id, prop.title)}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      border: 'none',
                      background: 'var(--bg-warm-ivory)',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <Heart size={16} style={{ fill: isFav ? 'var(--red)' : 'none', color: isFav ? 'var(--red)' : 'var(--text-charcoal)' }} />
                  </button>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '0.75rem' }}>
                  {/* Price and BHK */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span className="font-fraunces" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-charcoal)' }}>
                      {prop.price}
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.8rem', opacity: 0.65, fontWeight: 500 }}>
                      {prop.mode === 'Rent' ? '/ month' : ''}
                    </span>
                  </div>

                  {/* Title & Location */}
                  <div>
                    <h3 className="font-fraunces" style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '4px', lineHeight: '1.3' }}>
                      {prop.title}
                    </h3>
                    <p className="font-inter" style={{ fontSize: '0.85rem', opacity: 0.65 }}>
                      {prop.location}
                    </p>
                  </div>

                  {/* Details Strip (BHK, Area) */}
                  <div
                    className="font-mono"
                    style={{
                      marginTop: 'auto',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(74, 55, 40, 0.08)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      color: 'var(--text-charcoal)',
                      opacity: 0.8
                    }}
                  >
                    <span>{prop.bhk} BHK</span>
                    <span>•</span>
                    <span>{prop.area} sq ft</span>
                    <span>•</span>
                    <span className="text-gold" style={{ fontWeight: 600 }}>{prop.matchScore}% Smart Match</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Internal CSS for image hover effect */}
      <style>{`
        .neumorphic-card:hover .property-image {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
