import React, { useState } from 'react';
import { MapPin, Home, IndianRupee, Search, Briefcase, Eye } from 'lucide-react';

export default function SearchPanel({ onSearch, onShowToast }) {
  const [activeTab, setActiveTab] = useState('properties'); // 'properties' or 'professionals'
  const [location, setLocation] = useState('All');
  const [propType, setPropType] = useState('All');
  const [budget, setBudget] = useState('All');
  const [mode, setMode] = useState('Buy'); // 'Buy' or 'Rent'

  const locations = [
    { value: 'All', label: 'All India' },
    { value: 'Jaipur', label: 'Jaipur, RJ' },
    { value: 'Mumbai', label: 'Mumbai, MH' },
    { value: 'Bangalore', label: 'Bangalore, KA' },
    { value: 'Delhi', label: 'Delhi NCR' }
  ];

  const propertyTypes = [
    { value: 'All', label: 'All Types' },
    { value: 'Villa', label: 'Luxury Villa' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'Penthouse', label: 'Penthouse' },
    { value: 'Builder Floor', label: 'Builder Floor' }
  ];

  const budgets = [
    { value: 'All', label: 'Any Budget' },
    { value: 'under-50', label: 'Under ₹50 L' },
    { value: '50-150', label: '₹50 L - ₹1.5 Cr' },
    { value: 'over-150', label: 'Over ₹1.5 Cr' }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'professionals') {
      onShowToast(`Searching verified ${location === 'All' ? '' : location} professionals...`, 'success');
      return;
    }
    
    onSearch({ location, propType, budget, mode });
    onShowToast(`Filtered verified homes in ${location === 'All' ? 'All Cities' : location}`, 'success');
  };

  return (
    <div
      style={{
        marginTop: '-3rem',
        position: 'relative',
        zIndex: 10,
        width: '100%'
      }}
      className="search-panel-container"
    >
      {/* Search Header Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '-1px', paddingLeft: '1rem' }}>
        <button
          onClick={() => {
            setActiveTab('properties');
            onShowToast('Switched search to Properties', 'info');
          }}
          className="font-fraunces"
          style={{
            background: activeTab === 'properties' ? 'var(--surface-beige)' : 'rgba(237, 230, 217, 0.5)',
            border: 'none',
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            borderTopLeftRadius: '14px',
            borderTopRightRadius: '14px',
            boxShadow: activeTab === 'properties' ? '0 -4px 10px rgba(184, 171, 153, 0.15)' : 'none',
            color: activeTab === 'properties' ? 'var(--text-charcoal)' : 'rgba(43, 38, 32, 0.6)',
            zIndex: activeTab === 'properties' ? 2 : 1,
            transition: 'var(--transition-fast)'
          }}
        >
          Properties
        </button>
        <button
          onClick={() => {
            setActiveTab('professionals');
            onShowToast('Switched search to Professionals Marketplace', 'info');
          }}
          className="font-fraunces"
          style={{
            background: activeTab === 'professionals' ? 'var(--surface-beige)' : 'rgba(237, 230, 217, 0.5)',
            border: 'none',
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            borderTopLeftRadius: '14px',
            borderTopRightRadius: '14px',
            boxShadow: activeTab === 'professionals' ? '0 -4px 10px rgba(184, 171, 153, 0.15)' : 'none',
            color: activeTab === 'professionals' ? 'var(--text-charcoal)' : 'rgba(43, 38, 32, 0.6)',
            zIndex: activeTab === 'professionals' ? 2 : 1,
            transition: 'var(--transition-fast)'
          }}
        >
          Professionals
        </button>
      </div>

      {/* Main Panel Box */}
      <div
        className="neumorphic-card"
        style={{
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          backgroundColor: 'var(--surface-beige)',
          border: '1px solid rgba(255, 255, 255, 0.6)'
        }}
      >
        <form
          onSubmit={handleSearchSubmit}
          style={{
            display: 'grid',
            gridTemplateColumns: activeTab === 'properties' ? '1fr 1fr 1fr 1fr 0.5fr' : '1.5fr 1.5fr 1fr',
            gap: '1.25rem',
            alignItems: 'end'
          }}
          className="search-form-grid"
        >
          {/* Field 1: Location */}
          <div>
            <label className="font-mono badge-mono" style={{ padding: 0, display: 'block', fontSize: '0.65rem', marginBottom: '0.5rem', color: 'var(--accent-brown)' }}>
              LOCATION
            </label>
            <div style={{ position: 'relative' }}>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="neumorphic-inset-field font-inter"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.6rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-charcoal)',
                  cursor: 'pointer'
                }}
              >
                {locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>{loc.label}</option>
                ))}
              </select>
              <MapPin size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--accent-brown)', opacity: 0.7 }} />
            </div>
          </div>

          {activeTab === 'properties' ? (
            <>
              {/* Field 2: Property Type */}
              <div>
                <label className="font-mono badge-mono" style={{ padding: 0, display: 'block', fontSize: '0.65rem', marginBottom: '0.5rem', color: 'var(--accent-brown)' }}>
                  PROPERTY TYPE
                </label>
                <div style={{ position: 'relative' }}>
                  <select
                    value={propType}
                    onChange={(e) => setPropType(e.target.value)}
                    className="neumorphic-inset-field font-inter"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem 0.85rem 2.6rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-charcoal)',
                      cursor: 'pointer'
                    }}
                  >
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                  <Home size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--accent-brown)', opacity: 0.7 }} />
                </div>
              </div>

              {/* Field 3: Budget */}
              <div>
                <label className="font-mono badge-mono" style={{ padding: 0, display: 'block', fontSize: '0.65rem', marginBottom: '0.5rem', color: 'var(--accent-brown)' }}>
                  BUDGET LIMIT
                </label>
                <div style={{ position: 'relative' }}>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="neumorphic-inset-field font-inter"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem 0.85rem 2.6rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-charcoal)',
                      cursor: 'pointer'
                    }}
                  >
                    {budgets.map((b) => (
                      <option key={b.value} value={b.value}>{b.label}</option>
                    ))}
                  </select>
                  <IndianRupee size={15} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--accent-brown)', opacity: 0.7 }} />
                </div>
              </div>

              {/* Field 4: Mode (Buy / Rent) */}
              <div>
                <label className="font-mono badge-mono" style={{ padding: 0, display: 'block', fontSize: '0.65rem', marginBottom: '0.5rem', color: 'var(--accent-brown)' }}>
                  ACQUISITION MODE
                </label>
                <div
                  className="neumorphic-inset-field"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    padding: '3px',
                    height: '46px'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setMode('Buy')}
                    className="font-inter"
                    style={{
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      backgroundColor: mode === 'Buy' ? 'var(--text-charcoal)' : 'transparent',
                      color: mode === 'Buy' ? 'var(--bg-warm-ivory)' : 'var(--text-charcoal)',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('Rent')}
                    className="font-inter"
                    style={{
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      backgroundColor: mode === 'Rent' ? 'var(--text-charcoal)' : 'transparent',
                      color: mode === 'Rent' ? 'var(--bg-warm-ivory)' : 'var(--text-charcoal)',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    Rent
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Professionals Selection */
            <div>
              <label className="font-mono badge-mono" style={{ padding: 0, display: 'block', fontSize: '0.65rem', marginBottom: '0.5rem', color: 'var(--accent-brown)' }}>
                PROFESSIONAL CATEGORY
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  className="neumorphic-inset-field font-inter"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 2.6rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-charcoal)',
                    cursor: 'pointer'
                  }}
                >
                  <option value="all">All Professionals</option>
                  <option value="builder">Builder & Contractor</option>
                  <option value="architect">Architect</option>
                  <option value="interior">Interior Designer</option>
                  <option value="painter">Painter & Waterproofing</option>
                </select>
                <Briefcase size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--accent-brown)', opacity: 0.7 }} />
              </div>
            </div>
          )}

          {/* Search Action Button */}
          <button
            type="submit"
            className="btn-pill btn-primary"
            style={{
              height: '46px',
              padding: '0 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <Search size={18} />
            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Search</span>
          </button>
        </form>
      </div>

      {/* Internal CSS for responsive grid layout for desktop/mobile */}
      <style>{`
        @media (max-width: 992px) {
          .search-form-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .search-panel-container {
            margin-top: -2rem !important;
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}
