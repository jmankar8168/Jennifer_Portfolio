import React from 'react';

export default function MarqueeTicker() {
  const items = [
    { label: 'UI/UX Engineering', icon: '&#10022;' },
    { label: 'Design Systems', icon: '&#9733;' },
    { label: 'Interaction Design', icon: '&#10022;' },
    { label: 'Creative Direction', icon: '&#9829;' },
    { label: 'Frontend Architecture', icon: '&#10022;' },
    { label: 'Tactile Micro-Animations', icon: '&#9733;' },
    { label: 'Figma Tokens to Code', icon: '&#10022;' },
    { label: 'Accessible Web Experiences', icon: '&#9829;' },
  ];

  return (
    <div className="ticker-wrapper-block">
      {/* Checkered Ribbon Accent inspired by Reference 2 */}
      <div className="checkered-ribbon"></div>

      <div className="editorial-ticker-container">
        <div className="ticker-track">
          {[...items, ...items, ...items].map((it, idx) => (
            <span key={idx} className="ticker-item">
              <span className="ticker-label">{it.label}</span>
              <span className="ticker-glyph" dangerouslySetInnerHTML={{ __html: it.icon }}></span>
            </span>
          ))}
        </div>
      </div>

      <div className="checkered-ribbon"></div>
    </div>
  );
}
