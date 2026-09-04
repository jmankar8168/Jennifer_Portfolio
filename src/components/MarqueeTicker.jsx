import React from 'react';

export default function MarqueeTicker() {
  const items = [
    { label: 'Social Media Management', icon: '🌸' },
    { label: 'Content Creation', icon: '☁️' },
    { label: 'Influencer Marketing', icon: '⭐' },
    { label: 'Marketing Consulting', icon: '🌸' },
    { label: 'UI/UX Engineering', icon: '☁️' },
    { label: 'Creative Direction', icon: '⭐' },
    { label: 'Brand Architecture', icon: '🌸' },
    { label: 'High-Performance Web', icon: '☁️' },
  ];

  return (
    <div style={{
      backgroundColor: '#dce7eb',
      borderTop: '1px solid rgba(52, 33, 26, 0.15)',
      borderBottom: '1px solid rgba(52, 33, 26, 0.15)',
      padding: '10px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }}>
      <div style={{
        display: 'inline-flex',
        gap: '24px',
        animation: 'tickerScroll 30s linear infinite'
      }}>
        {[...items, ...items, ...items].map((it, idx) => (
          <span
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.05rem',
              fontWeight: 600,
              color: '#34211a',
              letterSpacing: '0.02em'
            }}
          >
            <span>{it.label}</span>
            <span style={{ fontSize: '0.85rem' }}>{it.icon}</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
