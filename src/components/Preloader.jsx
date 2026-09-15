import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(20);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const steps = [
      { p: 20, delay: 100 },
      { p: 48, delay: 350 },
      { p: 76, delay: 650 },
      { p: 98, delay: 950 },
      { p: 100, delay: 1250 },
    ];

    const timeouts = steps.map(s =>
      setTimeout(() => {
        setPercent(s.p);
        if (s.p === 100) {
          setTimeout(() => {
            setFading(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 500);
          }, 200);
        }
      }, s.delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`jenni-preloader ${fading ? 'fade-out' : ''}`}>
      {/* Central Illustration: Jenni relaxing in armchair with tea */}
      <div className="preloader-center-illustration">
        <svg viewBox="0 0 320 320" className="preloader-svg" width="280" height="280">
          {/* Armchair */}
          <path d="M70 170 Q60 120 100 120 L220 120 Q260 120 250 170 L260 230 Q260 250 240 250 L80 250 Q60 250 60 230 Z" fill="#0038ff" />
          <path d="M90 140 L230 140 Q240 140 240 160 L240 230 L80 230 L80 160 Q80 140 90 140 Z" fill="#3b82f6" />
          {/* Chair cushion */}
          <rect x="75" y="210" width="170" height="35" rx="14" fill="#1d4ed8" />
          {/* Legs */}
          <line x1="90" y1="248" x2="80" y2="280" stroke="#111111" strokeWidth="6" strokeLinecap="round" />
          <line x1="230" y1="248" x2="240" y2="280" stroke="#111111" strokeWidth="6" strokeLinecap="round" />
          
          {/* Character */}
          <path d="M120 220 L120 260 L140 265" stroke="#111111" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M180 220 L195 255 L215 260" stroke="#111111" strokeWidth="10" strokeLinecap="round" fill="none" />
          <rect x="135" y="260" width="20" height="10" rx="5" fill="#ef4444" />
          <rect x="210" y="255" width="20" height="10" rx="5" fill="#ef4444" />
          
          {/* Torso/Sweater */}
          <path d="M125 155 Q160 145 195 155 L190 220 L130 220 Z" fill="#fbbf24" stroke="#111111" strokeWidth="3" />
          {/* Head & Long Hair */}
          <path d="M132 110 Q160 80 188 110 L195 180 L125 180 Z" fill="#111827" />
          <circle cx="160" cy="115" r="28" fill="#fde047" stroke="#111111" strokeWidth="3" />
          <path d="M138 110 Q145 85 160 85 Q175 85 182 110 Q170 100 160 100 Q150 100 138 110 Z" fill="#111827" />
          {/* Face details */}
          <circle cx="152" cy="115" r="2.5" fill="#111111" />
          <circle cx="168" cy="115" r="2.5" fill="#111111" />
          <path d="M156 125 Q160 128 164 125" stroke="#111111" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Arm holding mug */}
          <path d="M185 170 L200 190 L185 195" stroke="#111111" strokeWidth="7" strokeLinecap="round" fill="none" />
          <rect x="180" y="190" width="14" height="16" rx="3" fill="#ec4899" />
          <path d="M185 185 Q187 180 185 175" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M190 185 Q192 180 190 175" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Percentage Indicator in bottom-right */}
      <div className="preloader-counter-box">
        <span className="preloader-percent-num">{percent}%</span>
      </div>
    </div>
  );
}
