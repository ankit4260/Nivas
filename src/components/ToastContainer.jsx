import React from 'react';
import { X, CheckCircle, Info, AlertTriangle } from 'lucide-react';

export default function ToastContainer({ toasts, removeToast }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      maxWidth: '380px',
      width: 'calc(100% - 48px)'
    }}>
      {toasts.map((toast) => {
        let Icon = Info;
        let iconColor = 'var(--accent-gold)';
        
        if (toast.type === 'success') {
          Icon = CheckCircle;
          iconColor = 'var(--green-success)';
        } else if (toast.type === 'warning') {
          Icon = AlertTriangle;
          iconColor = 'var(--amber)';
        }

        return (
          <div
            key={toast.id}
            className="animate-slide-up"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              backgroundColor: 'var(--text-charcoal)',
              color: 'var(--bg-warm-ivory)',
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
              borderLeft: `4px solid ${iconColor}`,
              transition: 'var(--transition-smooth)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Icon size={18} style={{ color: iconColor, flexShrink: 0 }} />
              <span className="font-inter" style={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>
                {toast.message}
              </span>
            </div>
            
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(247, 243, 237, 0.6)',
                cursor: 'pointer',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--bg-warm-ivory)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(247, 243, 237, 0.6)'}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
