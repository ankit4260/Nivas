import React, { useState } from 'react';
import { X, Eye, EyeOff, Lock, Mail, User, ShieldCheck, Check } from 'lucide-react';

export default function AuthModal({ isOpen, initialTab = 'login', onClose, onAuthSuccess }) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [signupType, setSignupType] = useState('Buyer / Tenant');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Validation States
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  // Simple Email Regex Validation
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Simple Phone Validation (if numeric, must be 10 digits)
  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate login ID (email or phone)
    if (!loginId) {
      newErrors.loginId = 'Please enter your email or phone number';
    } else {
      const isEmail = loginId.includes('@');
      if (isEmail && !validateEmail(loginId)) {
        newErrors.loginId = 'Please enter a valid email address';
      } else if (!isEmail && isNaN(loginId)) {
        newErrors.loginId = 'Please enter a valid email or 10-digit phone number';
      } else if (!isEmail && !validatePhone(loginId)) {
        newErrors.loginId = 'Phone number must be exactly 10 digits';
      }
    }

    // Validate password
    if (!loginPassword) {
      newErrors.loginPassword = 'Password is required';
    } else if (loginPassword.length < 6) {
      newErrors.loginPassword = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success flow
    setErrors({});
    setIsSuccess(true);
    
    setTimeout(() => {
      const userData = {
        name: loginId.includes('@') ? loginId.split('@')[0] : 'Member',
        email: loginId.includes('@') ? loginId : 'member@nivas.in',
        role: 'User'
      };
      localStorage.setItem('nivas_user', JSON.stringify(userData));
      onAuthSuccess(userData, 'Successfully logged in!');
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate fields
    if (!signupName.trim()) {
      newErrors.signupName = 'Name is required';
    }

    if (!signupEmail) {
      newErrors.signupEmail = 'Email is required';
    } else if (!validateEmail(signupEmail)) {
      newErrors.signupEmail = 'Please enter a valid email address';
    }

    if (!signupPassword) {
      newErrors.signupPassword = 'Password is required';
    } else if (signupPassword.length < 6) {
      newErrors.signupPassword = 'Password must be at least 6 characters';
    }

    if (!acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and privacy policy';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success flow
    setErrors({});
    setIsSuccess(true);

    setTimeout(() => {
      const userData = {
        name: signupName,
        email: signupEmail,
        role: signupType
      };
      localStorage.setItem('nivas_user', JSON.stringify(userData));
      onAuthSuccess(userData, 'Account created successfully!');
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div
      className="backdrop-blur-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 5000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Card */}
      <div
        className="neumorphic-card"
        style={{
          width: '100%',
          maxWidth: '920px',
          height: '620px',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1.3fr',
          overflow: 'hidden',
          animation: 'pop-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          border: 'none',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10,
            background: 'var(--surface-sec)',
            border: '1px solid rgba(74, 55, 40, 0.1)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-charcoal)',
            boxShadow: 'var(--shadow-raised-sm)',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <X size={16} />
        </button>

        {/* Success Overlay state */}
        {isSuccess && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--bg-warm-ivory)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              animation: 'pop-in 0.3s ease-out'
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(76, 122, 92, 0.15)',
                border: '2px solid var(--green-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--green-success)',
                animation: 'scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <Check size={36} strokeWidth={3} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h2 className="font-fraunces" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                Welcome to Nivas
              </h2>
              <p className="font-inter" style={{ color: 'var(--text-charcoal)', opacity: 0.8, fontSize: '0.95rem' }}>
                Securing your session. Please wait...
              </p>
            </div>
          </div>
        )}

        {/* Left Column (Premium Branding & Testimonial) */}
        <div
          style={{
            background: 'linear-gradient(145deg, var(--text-charcoal), var(--accent-brown))',
            padding: '3rem 2.5rem',
            color: 'var(--bg-warm-ivory)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
          className="left-column"
        >
          {/* Radial Glow */}
          <div
            className="animate-pulse-soft"
            style={{
              position: 'absolute',
              top: '-15%',
              left: '-15%',
              width: '150%',
              height: '150%',
              background: 'radial-gradient(circle, rgba(184, 146, 90, 0.15) 0%, transparent 60%)',
              pointerEvents: 'none'
            }}
          />

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1 }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}
            >
              <ShieldCheck size={16} />
            </div>
            <span className="font-fraunces" style={{ fontStyle: 'italic', fontWeight: 600, fontSize: '1.2rem' }}>
              Nivas
            </span>
          </div>

          {/* Customer Testimonial */}
          <div style={{ zIndex: 1, marginTop: 'auto', marginBottom: '2rem' }}>
            <span className="font-mono badge-mono" style={{ color: 'var(--gold-soft)', padding: 0, fontSize: '0.7rem', display: 'block', marginBottom: '1rem' }}>
              TRUSTED BY OVER 12,000+ OWNERS
            </span>
            <p className="font-fraunces" style={{ fontStyle: 'italic', fontSize: '1.35rem', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: 300, color: 'var(--bg-warm-ivory)' }}>
              “Nivas made matching with builders and verifying duplicates incredibly simple. The transparent verification gives true peace of mind.”
            </p>
            <div>
              <p className="font-inter" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold-soft)' }}>
                Devendra Sharma
              </p>
              <p className="font-mono" style={{ fontSize: '0.72rem', opacity: 0.6 }}>
                Jaipur Property Owner
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Forms) */}
        <div
          style={{
            backgroundColor: 'var(--surface-beige)',
            padding: '3rem 2.5rem 2rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}
          className="right-column"
        >
          {/* Tab Selector */}
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid rgba(74, 55, 40, 0.1)',
              marginBottom: '2rem',
              paddingBottom: '2px'
            }}
          >
            <button
              onClick={() => {
                setActiveTab('login');
                setErrors({});
              }}
              className="font-fraunces"
              style={{
                background: 'none',
                border: 'none',
                padding: '0 1.5rem 0.75rem 0',
                fontSize: '1.25rem',
                fontWeight: 600,
                cursor: 'pointer',
                color: activeTab === 'login' ? 'var(--text-charcoal)' : 'rgba(43, 38, 32, 0.4)',
                borderBottom: activeTab === 'login' ? '2.5px solid var(--accent-gold)' : 'none',
                transition: 'var(--transition-fast)'
              }}
            >
              Log In
            </button>
            <button
              onClick={() => {
                setActiveTab('signup');
                setErrors({});
              }}
              className="font-fraunces"
              style={{
                background: 'none',
                border: 'none',
                padding: '0 1.5rem 0.75rem 0',
                fontSize: '1.25rem',
                fontWeight: 600,
                cursor: 'pointer',
                color: activeTab === 'signup' ? 'var(--text-charcoal)' : 'rgba(43, 38, 32, 0.4)',
                borderBottom: activeTab === 'signup' ? '2.5px solid var(--accent-gold)' : 'none',
                transition: 'var(--transition-fast)'
              }}
            >
              Create Account
            </button>
          </div>

          {activeTab === 'login' ? (
            /* --- LOGIN FORM --- */
            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label className="font-inter" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--accent-brown)' }}>
                  EMAIL OR PHONE NUMBER
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="Enter email or phone number"
                    className="neumorphic-inset-field font-inter"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.6rem',
                      fontSize: '0.9rem',
                      borderColor: errors.loginId ? 'var(--red)' : 'rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  <Mail size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--accent-brown)', opacity: 0.6 }} />
                </div>
                {errors.loginId && (
                  <span className="font-inter" style={{ color: 'var(--red)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                    {errors.loginId}
                  </span>
                )}
              </div>

              <div>
                <label className="font-inter" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--accent-brown)' }}>
                  PASSWORD
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="neumorphic-inset-field font-inter"
                    style={{
                      width: '100%',
                      padding: '0.8rem 2.6rem 0.8rem 2.6rem',
                      fontSize: '0.9rem',
                      borderColor: errors.loginPassword ? 'var(--red)' : 'rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  <Lock size={16} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--accent-brown)', opacity: 0.6 }} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '13px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--accent-brown)',
                      opacity: 0.6
                    }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.loginPassword && (
                  <span className="font-inter" style={{ color: 'var(--red)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                    {errors.loginPassword}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '2px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{ accentColor: 'var(--accent-brown)' }}
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-gold)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  onClick={() => alert('Simulated password reset link sent.')}
                >
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="btn-pill btn-primary" style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem', fontWeight: 600 }}>
                Log In to Nivas
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0.5rem 0' }}>
                <hr style={{ flexGrow: 1, border: 'none', borderTop: '1px solid rgba(74, 55, 40, 0.15)' }} />
                <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--accent-brown)', opacity: 0.6 }}>OR SIGN IN WITH</span>
                <hr style={{ flexGrow: 1, border: 'none', borderTop: '1px solid rgba(74, 55, 40, 0.15)' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button
                  type="button"
                  className="btn-pill btn-secondary font-inter"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.8rem', fontWeight: 500 }}
                  onClick={() => alert('Simulated Google Authentication initiated.')}
                >
                  Google
                </button>
                <button
                  type="button"
                  className="btn-pill btn-secondary font-inter"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.8rem', fontWeight: 500 }}
                  onClick={() => alert('Simulated Apple Authentication initiated.')}
                >
                  Apple
                </button>
              </div>
            </form>
          ) : (
            /* --- SIGNUP FORM --- */
            <form onSubmit={handleSignupSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
              <div>
                <label className="font-inter" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--accent-brown)' }}>
                  I WANT TO REGISTER AS A
                </label>
                <select
                  value={signupType}
                  onChange={(e) => setSignupType(e.target.value)}
                  className="neumorphic-inset-field font-inter"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.88rem',
                    color: 'var(--text-charcoal)',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Buyer / Tenant">Buyer / Tenant</option>
                  <option value="Property Owner">Property Owner</option>
                  <option value="Broker">Broker</option>
                  <option value="Builder / Contractor">Builder / Contractor</option>
                  <option value="Professional Service Provider">Professional Service Provider</option>
                </select>
              </div>

              <div>
                <label className="font-inter" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--accent-brown)' }}>
                  FULL NAME
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    placeholder="Enter full name"
                    className="neumorphic-inset-field font-inter"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.6rem',
                      fontSize: '0.88rem',
                      borderColor: errors.signupName ? 'var(--red)' : 'rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  <User size={15} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--accent-brown)', opacity: 0.6 }} />
                </div>
                {errors.signupName && (
                  <span className="font-inter" style={{ color: 'var(--red)', fontSize: '0.72rem', marginTop: '2px', display: 'block' }}>
                    {errors.signupName}
                  </span>
                )}
              </div>

              <div>
                <label className="font-inter" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--accent-brown)' }}>
                  EMAIL ADDRESS
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="neumorphic-inset-field font-inter"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.6rem',
                      fontSize: '0.88rem',
                      borderColor: errors.signupEmail ? 'var(--red)' : 'rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  <Mail size={15} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--accent-brown)', opacity: 0.6 }} />
                </div>
                {errors.signupEmail && (
                  <span className="font-inter" style={{ color: 'var(--red)', fontSize: '0.72rem', marginTop: '2px', display: 'block' }}>
                    {errors.signupEmail}
                  </span>
                )}
              </div>

              <div>
                <label className="font-inter" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--accent-brown)' }}>
                  CREATE PASSWORD
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="Min. 6 characters"
                    className="neumorphic-inset-field font-inter"
                    style={{
                      width: '100%',
                      padding: '0.75rem 2.6rem 0.75rem 2.6rem',
                      fontSize: '0.88rem',
                      borderColor: errors.signupPassword ? 'var(--red)' : 'rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  <Lock size={15} style={{ position: 'absolute', left: '12px', top: '13px', color: 'var(--accent-brown)', opacity: 0.6 }} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '11px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--accent-brown)',
                      opacity: 0.6
                    }}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {errors.signupPassword && (
                  <span className="font-inter" style={{ color: 'var(--red)', fontSize: '0.72rem', marginTop: '2px', display: 'block' }}>
                    {errors.signupPassword}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem', marginTop: '2px' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', cursor: 'pointer', lineHeight: '1.3' }}>
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    style={{ accentColor: 'var(--accent-brown)', marginTop: '2px' }}
                  />
                  I agree to Nivas' Terms of Service, Privacy Policy, and Verification Standard.
                </label>
                {errors.acceptTerms && (
                  <span className="font-inter" style={{ color: 'var(--red)', fontSize: '0.72rem', marginTop: '2px' }}>
                    {errors.acceptTerms}
                  </span>
                )}
              </div>

              <button type="submit" className="btn-pill btn-primary" style={{ width: '100%', padding: '0.85rem', marginTop: '0.4rem', fontWeight: 600 }}>
                Register Account
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Internal CSS for responsive grid layout for desktop/mobile */}
      <style>{`
        @media (max-width: 768px) {
          .neumorphic-card {
            grid-template-columns: 1fr !important;
            height: auto !important;
            max-height: 90vh !important;
          }
          .left-column {
            display: none !important;
          }
          .right-column {
            padding: 2.5rem 1.5rem 1.5rem !important;
          }
        }
        @keyframes scaleUp {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
