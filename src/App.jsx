import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchPanel from './components/SearchPanel';
import PropertyGrid from './components/PropertyGrid';
import SmartMatchTeaser from './components/SmartMatchTeaser';
import HowItWorks from './components/HowItWorks';
import StatsStrip from './components/StatsStrip';
import BuildMarketplace from './components/BuildMarketplace';
import Professionals from './components/Professionals';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ToastContainer from './components/ToastContainer';

// Mock Indian Properties Database
const initialProperties = [
  {
    id: 'prop-1',
    title: 'Gulmohar Heights Penthouse',
    location: 'Jaipur, RJ',
    city: 'Jaipur',
    type: 'Penthouse',
    bhk: 4,
    area: 3200,
    price: '₹1.85 Cr',
    priceVal: 185, // in Lakhs
    mode: 'Buy',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=85',
    matchScore: 98,
    duplicateCount: 3
  },
  {
    id: 'prop-2',
    title: 'Aravali Green Retreat',
    location: 'Delhi NCR',
    city: 'Delhi',
    type: 'Villa',
    bhk: 4,
    area: 4500,
    price: '₹3.4 Cr',
    priceVal: 340, // in Lakhs
    mode: 'Buy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85',
    matchScore: 94,
    duplicateCount: 1
  },
  {
    id: 'prop-3',
    title: 'Malabar Hill Sea View Studio',
    location: 'Mumbai, MH',
    city: 'Mumbai',
    type: 'Apartment',
    bhk: 2,
    area: 1100,
    price: '₹2.1 Cr',
    priceVal: 210, // in Lakhs
    mode: 'Buy',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=85',
    matchScore: 97,
    duplicateCount: 2
  },
  {
    id: 'prop-4',
    title: 'Koramangala Executive Builder Floor',
    location: 'Bangalore, KA',
    city: 'Bangalore',
    type: 'Builder Floor',
    bhk: 3,
    area: 1950,
    price: '₹1.2 Cr',
    priceVal: 120, // in Lakhs
    mode: 'Buy',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=85',
    matchScore: 95,
    duplicateCount: 1
  },
  {
    id: 'prop-5',
    title: 'Patrika Gate Heritage Flat',
    location: 'Jaipur, RJ',
    city: 'Jaipur',
    type: 'Apartment',
    bhk: 2,
    area: 1250,
    price: '₹52.4 L',
    priceVal: 52.4, // in Lakhs
    mode: 'Buy',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85',
    matchScore: 92,
    duplicateCount: 4
  },
  {
    id: 'prop-6',
    title: 'Bandra West Luxury Suite',
    location: 'Mumbai, MH',
    city: 'Mumbai',
    type: 'Apartment',
    bhk: 1,
    area: 750,
    price: '₹95 L',
    priceVal: 95, // in Lakhs
    mode: 'Buy',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=85',
    matchScore: 96,
    duplicateCount: 2
  },
  {
    id: 'prop-7',
    title: 'Whitefield Sky Villa',
    location: 'Bangalore, KA',
    city: 'Bangalore',
    type: 'Villa',
    bhk: 3,
    area: 2800,
    price: '₹95,000',
    priceVal: 0.95, // Rent budget
    mode: 'Rent',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=85',
    matchScore: 97,
    duplicateCount: 3
  },
  {
    id: 'prop-8',
    title: 'DLF Phase 5 Duplex Floor',
    location: 'Delhi NCR',
    city: 'Delhi',
    type: 'Builder Floor',
    bhk: 3,
    area: 2400,
    price: '₹1.1 L',
    priceVal: 1.1, // Rent budget
    mode: 'Rent',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85',
    matchScore: 93,
    duplicateCount: 1
  }
];

function App() {
  const [activePill, setActivePill] = useState('Buy');
  const [properties, setProperties] = useState(initialProperties);
  const [favorites, setFavorites] = useState([]);
  
  // Auth state
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  
  // Toast notifications state
  const [toasts, setToasts] = useState([]);

  // Load user and favorites on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('nivas_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const savedFavs = localStorage.getItem('nivas_favorites');
    if (savedFavs) {
      setFavorites(JSON.parse(savedFavs));
    }
  }, []);

  // Helper: Trigger custom toast notification
  const handleShowToast = (message, type = 'info') => {
    const id = Date.now() + Math.random().toString(36).substr(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove after 4 seconds
    setTimeout(() => {
      handleRemoveToast(id);
    }, 4000);
  };

  const handleRemoveToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Auth Modal controls
  const handleAuthClick = (tab) => {
    setAuthTab(tab);
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = (userData, successMsg) => {
    setUser(userData);
    handleShowToast(successMsg, 'success');
  };

  const handleLogout = () => {
    localStorage.removeItem('nivas_user');
    setUser(null);
    handleShowToast('Logged out successfully', 'info');
  };

  // Toggle Property Favorite State
  const handleToggleFavorite = (id) => {
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter((favId) => favId !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem('nivas_favorites', JSON.stringify(updated));
  };

  // Handle Search Filtering
  const handleSearch = ({ location, propType, budget, mode }) => {
    let filtered = initialProperties;

    // Filter by mode (Buy/Rent)
    filtered = filtered.filter((p) => p.mode === mode);

    // Filter by city
    if (location !== 'All') {
      filtered = filtered.filter((p) => p.city === location);
    }

    // Filter by property type
    if (propType !== 'All') {
      filtered = filtered.filter((p) => p.type === propType);
    }

    // Filter by budget
    if (budget !== 'All') {
      if (mode === 'Buy') {
        if (budget === 'under-50') {
          filtered = filtered.filter((p) => p.priceVal < 50);
        } else if (budget === '50-150') {
          filtered = filtered.filter((p) => p.priceVal >= 50 && p.priceVal <= 150);
        } else if (budget === 'over-150') {
          filtered = filtered.filter((p) => p.priceVal > 150);
        }
      } else {
        // Rent mode budget filters (prices in Lakhs of rupees or direct values)
        // Let's assume Rent lists ₹1.1 L (1.1 Lakhs/month) or ₹95,000 (0.95 Lakhs/month)
        if (budget === 'under-50') {
          filtered = filtered.filter((p) => p.priceVal < 1.0);
        } else if (budget === '50-150') {
          filtered = filtered.filter((p) => p.priceVal >= 1.0 && p.priceVal <= 2.0);
        } else if (budget === 'over-150') {
          filtered = filtered.filter((p) => p.priceVal > 2.0);
        }
      }
    }

    setProperties(filtered);
  };

  // Link Hero category pills to filter properties
  const handleHeroPillSelect = (pill) => {
    setActivePill(pill);
    if (pill === 'Buy' || pill === 'Rent') {
      // Filter grid items directly
      const filtered = initialProperties.filter((p) => p.mode === pill);
      setProperties(filtered);
      
      // Scroll to property grid smoothly
      const element = document.getElementById('properties');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (pill === 'Build' || pill === 'Design') {
      // Scroll to Build & Design Marketplace
      const element = document.getElementById('marketplace');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (pill === 'Sell') {
      // Scroll to List CTA
      const element = document.getElementById('cta');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar onAuthClick={handleAuthClick} user={user} onLogout={handleLogout} />

      {/* Main Layout Container */}
      <main style={{ minHeight: '100vh' }}>
        
        {/* 1. Hero Section */}
        <Hero activePill={activePill} setActivePill={handleHeroPillSelect} onShowToast={handleShowToast} />

        {/* 2. Search Panel Section */}
        <div style={{ padding: '0 10% 2rem 10%', position: 'relative' }}>
          <SearchPanel onSearch={handleSearch} onShowToast={handleShowToast} />
        </div>

        {/* 3. Featured Properties Grid */}
        <PropertyGrid
          properties={properties}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onShowToast={handleShowToast}
        />

        {/* 4. Smart Match Teaser */}
        <SmartMatchTeaser onShowToast={handleShowToast} />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Statistics Strip */}
        <StatsStrip />

        {/* 7. Build & Design Marketplace */}
        <BuildMarketplace onShowToast={handleShowToast} />

        {/* 8. Professionals Horizontal Scroll */}
        <Professionals onShowToast={handleShowToast} />

        {/* 9. CTA Section */}
        <CtaSection onAuthClick={handleAuthClick} onShowToast={handleShowToast} />

      </main>

      {/* 10. Footer Section */}
      <Footer onAuthClick={handleAuthClick} />

      {/* Auth Modal Overlay */}
      <AuthModal
        isOpen={isAuthOpen}
        initialTab={authTab}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* Toast Alerts System */}
      <ToastContainer toasts={toasts} removeToast={handleRemoveToast} />
    </>
  );
}

export default App;
