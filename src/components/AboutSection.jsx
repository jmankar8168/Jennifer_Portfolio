import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="jenni-about-section">
      <div className="about-inner-grid">
        {/* Left: Cobalt Blue Graphic Card with animated zigzag */}
        <div className="about-blue-card">
          <div className="blue-card-graphic-track">
            <svg viewBox="0 0 340 460" className="blue-card-svg" width="100%" height="100%">
              {/* Wavy hand-drawn zigzag path */}
              <path
                d="M 60 400 L 110 320 L 170 380 L 230 300 L 280 360"
                stroke="#ffffff"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M 60 400 L 110 320 L 170 380 L 230 300 L 280 360"
                stroke="#0038ff"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Badge Labels */}
              <g transform="translate(40, 60)">
                <rect width="130" height="34" rx="17" fill="#ffffff" />
                <text x="65" y="22" textAnchor="middle" fill="#0038ff" fontWeight="800" fontSize="13" fontFamily="Space Grotesk">Architecture</text>
              </g>

              <g transform="translate(180, 160)">
                <rect width="140" height="34" rx="17" fill="#ffffff" />
                <text x="70" y="22" textAnchor="middle" fill="#0038ff" fontWeight="800" fontSize="13" fontFamily="Space Grotesk">Motion Design</text>
              </g>

              <g transform="translate(30, 240)">
                <rect width="145" height="34" rx="17" fill="#ffffff" />
                <text x="72" y="22" textAnchor="middle" fill="#0038ff" fontWeight="800" fontSize="13" fontFamily="Space Grotesk">Product Design</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Right: Narrative statement & Character in blanket */}
        <div className="about-content-col">
          <div className="about-heading-box">
            <h2 className="about-main-headline">
              I MAKE DESIGNS <span className="eyes-emoji">&#128064;</span><br />
              PEOPLE REMEMBER
            </h2>
          </div>

          {/* Character wrapped in blanket with cozy illustrations */}
          <div className="about-illustration-ensemble">
            {/* Cup of tea */}
            <div className="item-tea-cup">
              <svg viewBox="0 0 60 60" width="46" height="46">
                <rect x="12" y="22" width="30" height="26" rx="6" fill="#86efac" stroke="#111" strokeWidth="2.5" />
                <path d="M42 26 Q54 32 42 42" stroke="#111" strokeWidth="2.5" fill="none" />
                <path d="M22 16 Q26 12 24 8" stroke="#94a3b8" strokeWidth="2" fill="none" />
                <path d="M30 16 Q34 12 32 8" stroke="#94a3b8" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Blanket character */}
            <div className="item-blanket-character">
              <svg viewBox="0 0 200 240" width="180" height="216">
                {/* Blanket Body */}
                <path
                  d="M50 80 Q100 60 150 80 Q170 140 165 220 L35 220 Q30 140 50 80 Z"
                  fill="#cbd5e1"
                  stroke="#111"
                  strokeWidth="3.5"
                />
                {/* Star decorations on blanket */}
                <path d="M70 120 L75 130 L85 130 L77 136 L80 146 L70 140 L60 146 L63 136 L55 130 L65 130 Z" fill="#facc15" />
                <path d="M130 150 L135 160 L145 160 L137 166 L140 176 L130 170 L120 176 L123 166 L115 160 L125 160 Z" fill="#38bdf8" />
                <path d="M90 175 L94 183 L102 183 L96 188 L98 196 L90 191 L82 196 L84 188 L78 183 L86 183 Z" fill="#facc15" />

                {/* Head sticking out */}
                <circle cx="100" cy="65" r="26" fill="#fde047" stroke="#111" strokeWidth="3" />
                <path d="M80 60 Q100 40 120 60" stroke="#111" strokeWidth="6" strokeLinecap="round" fill="none" />
                <circle cx="92" cy="66" r="2.5" fill="#111" />
                <circle cx="108" cy="66" r="2.5" fill="#111" />
                <path d="M97 74 Q100 77 103 74" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Ramen noodles with chopsticks */}
            <div className="item-noodles-box">
              <svg viewBox="0 0 70 70" width="56" height="56">
                <path d="M15 30 L55 30 L50 60 L20 60 Z" fill="#60a5fa" stroke="#111" strokeWidth="2.5" />
                <ellipse cx="35" cy="30" rx="20" ry="6" fill="#fef08a" stroke="#111" strokeWidth="2" />
                <line x1="20" y1="12" x2="48" y2="35" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                <line x1="28" y1="10" x2="54" y2="33" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Retro Alarm Clock */}
            <div className="item-alarm-clock">
              <svg viewBox="0 0 60 60" width="48" height="48">
                <circle cx="30" cy="34" r="18" fill="#fef08a" stroke="#111" strokeWidth="2.5" />
                <circle cx="30" cy="34" r="13" fill="#ffffff" />
                <line x1="30" y1="34" x2="30" y2="25" stroke="#111" strokeWidth="2" />
                <line x1="30" y1="34" x2="38" y2="34" stroke="#111" strokeWidth="2" />
                <path d="M18 18 L24 22" stroke="#111" strokeWidth="3" strokeLinecap="round" />
                <path d="M42 18 L36 22" stroke="#111" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Mushroom Lamp */}
            <div className="item-mushroom-lamp">
              <svg viewBox="0 0 60 70" width="48" height="56">
                <path d="M14 36 Q30 14 46 36 Z" fill="#fb923c" stroke="#111" strokeWidth="2.5" />
                <circle cx="24" cy="28" r="3" fill="#ffffff" />
                <circle cx="36" cy="24" r="3" fill="#ffffff" />
                <rect x="26" y="36" width="8" height="20" rx="3" fill="#e2e8f0" stroke="#111" strokeWidth="2" />
                <ellipse cx="30" cy="56" rx="14" ry="4" fill="#111" />
              </svg>
            </div>
          </div>

          <p className="about-bio-statement">
            I'm Jenni, I used to design rooms you could walk into. Now I design rooms you scroll through. Same instincts, fewer building codes.
          </p>
        </div>
      </div>
    </section>
  );
}
