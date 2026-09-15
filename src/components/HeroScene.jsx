import React from 'react';

export default function HeroScene() {
  return (
    <section id="hero" className="jenni-hero-section">
      {/* Living Room Hand-Drawn SVG Illustration Scene */}
      <div className="living-room-canvas-wrap">
        {/* Floating Speech Bubbles from screenshot */}
        <div className="bubble-left">
          <span>Not just visuals. I make digital things look alive.</span>
        </div>

        <div className="bubble-right">
          <span>I design websites with art direction that brings brands to life.</span>
        </div>

        {/* Detailed Hand-Drawn Living Room SVG */}
        <svg viewBox="0 0 1100 580" className="living-room-svg" preserveAspectRatio="xMidYMid meet">
          {/* Wall Mirror */}
          <ellipse cx="480" cy="110" rx="36" ry="46" fill="#e0f2fe" stroke="#111" strokeWidth="4" />
          <line x1="480" y1="40" x2="480" y2="64" stroke="#111" strokeWidth="3" />
          <circle cx="480" cy="40" r="4" fill="#0038ff" />

          {/* Framed picture above fireplace */}
          <rect x="730" y="70" width="80" height="95" rx="6" fill="#fbbf24" stroke="#111" strokeWidth="4" />
          <circle cx="770" cy="110" r="18" fill="#f87171" />
          <path d="M756 128 Q770 112 784 128" stroke="#111" strokeWidth="3" fill="none" />

          {/* Floor Lamp Left */}
          <line x1="390" y1="130" x2="390" y2="330" stroke="#111" strokeWidth="4" />
          <path d="M370 130 L410 130 L425 170 L355 170 Z" fill="#fb923c" stroke="#111" strokeWidth="3" />
          <ellipse cx="390" cy="330" rx="24" ry="6" fill="#111" />

          {/* Plant Left in Striped Blue Pot */}
          <path d="M220 380 L290 380 L280 470 L230 470 Z" fill="#0038ff" stroke="#111" strokeWidth="3" />
          <line x1="240" y1="380" x2="240" y2="470" stroke="#93c5fd" strokeWidth="3" />
          <line x1="260" y1="380" x2="260" y2="470" stroke="#93c5fd" strokeWidth="3" />
          <line x1="280" y1="380" x2="275" y2="470" stroke="#93c5fd" strokeWidth="3" />
          {/* Monstera Leaves */}
          <path d="M255 380 Q210 320 180 340 Q190 380 255 380" fill="#15803d" stroke="#111" strokeWidth="3" />
          <path d="M255 380 Q230 260 210 280 Q250 330 255 380" fill="#16a34a" stroke="#111" strokeWidth="3" />
          <path d="M255 380 Q290 280 310 300 Q280 350 255 380" fill="#22c55e" stroke="#111" strokeWidth="3" />
          <path d="M255 380 Q330 330 340 360 Q290 380 255 380" fill="#15803d" stroke="#111" strokeWidth="3" />

          {/* Cozy Blue Armchair with sleeping Cat */}
          <path d="M350 290 Q340 250 380 250 L470 250 Q510 250 500 290 L510 390 Q500 410 480 410 L370 410 Q350 410 340 390 Z" fill="#0038ff" stroke="#111" strokeWidth="4" />
          <rect x="360" y="340" width="130" height="40" rx="12" fill="#3b82f6" stroke="#111" strokeWidth="3" />
          {/* Cute White Sleeping Cat */}
          <ellipse cx="430" cy="335" rx="18" ry="14" fill="#ffffff" stroke="#111" strokeWidth="2.5" />
          <polygon points="418,324 424,314 428,324" fill="#ffffff" stroke="#111" strokeWidth="2" />
          <polygon points="432,324 436,314 442,324" fill="#ffffff" stroke="#111" strokeWidth="2" />
          <path d="M446 340 Q455 330 450 320" stroke="#111" strokeWidth="2" fill="none" />

          {/* Fireplace Center */}
          <rect x="520" y="150" width="200" height="250" rx="8" fill="#e2e8f0" stroke="#111" strokeWidth="4" />
          <rect x="500" y="140" width="240" height="20" rx="4" fill="#78350f" stroke="#111" strokeWidth="3" />
          <rect x="540" y="180" width="160" height="170" rx="6" fill="#1e293b" />
          {/* Fireplace fire & logs */}
          <path d="M570 340 Q620 220 620 280 Q640 230 650 300 Q670 270 670 340 Z" fill="#f97316" />
          <path d="M590 340 Q620 260 620 300 Q630 270 645 340 Z" fill="#facc15" />
          <rect x="560" y="335" width="120" height="15" rx="6" fill="#451a03" />
          {/* Cozy Fireplace Hearth / Rug */}
          <path d="M500 400 L740 400 L770 440 L470 440 Z" fill="#ffedd5" stroke="#111" strokeWidth="3" />
          <path d="M510 415 Q540 425 570 415 Q600 405 630 415 Q660 425 690 415 Q720 405 750 415" stroke="#ea580c" strokeWidth="2.5" fill="none" />

          {/* Green Modern Sofa Right */}
          <path d="M720 310 Q710 260 760 260 L920 260 Q970 260 960 310 L970 410 L710 410 Z" fill="#15803d" stroke="#111" strokeWidth="4" />
          <path d="M730 330 Q740 310 840 310 Q940 310 950 330 L950 390 L730 390 Z" fill="#22c55e" stroke="#111" strokeWidth="3" />
          <rect x="740" y="370" width="200" height="40" rx="14" fill="#16a34a" stroke="#111" strokeWidth="3" />

          {/* Arch Floor Lamp Overhead */}
          <path d="M960 380 Q990 120 860 160" stroke="#111" strokeWidth="4" fill="none" />
          <path d="M840 160 L880 160 L870 190 L850 190 Z" fill="#22c55e" stroke="#111" strokeWidth="3" />

          {/* Potted Plant Right in Cream Pot */}
          <path d="M960 410 L1020 410 L1010 480 L970 480 Z" fill="#fef08a" stroke="#111" strokeWidth="3" />
          <path d="M990 410 Q940 350 970 330 Q990 380 990 410" fill="#16a34a" stroke="#111" strokeWidth="3" />
          <path d="M990 410 Q1040 340 1020 320 Q990 370 990 410" fill="#15803d" stroke="#111" strokeWidth="3" />
        </svg>
      </div>

      {/* Huge Bold Blue Signature Headline: JENNI MANDAL */}
      <div className="hero-giant-typography-row">
        <h1 className="giant-first-name">JENNI</h1>
        <h1 className="giant-last-name">MANKAR</h1>
      </div>
    </section>
  );
}
