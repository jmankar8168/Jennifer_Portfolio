import React from 'react';

const SquigglyUnderline = () => (
  <svg viewBox="0 0 240 20" width="240" height="20" className="about-squiggle" aria-hidden="true">
    <path
      d="M4 13 Q22 4 40 13 Q58 22 76 13 Q94 4 112 13 Q130 22 148 13 Q166 4 184 13 Q202 22 218 13 Q230 6 238 11"
      stroke="#FF4B4B"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const SparkleSmall = ({ size = 18, color = '#064BE8' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path
      d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z"
      fill={color}
    />
  </svg>
);

const SparkleX = ({ size = 14, color = '#064BE8' }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden="true">
    <path d="M10 1 L10 19 M1 10 L19 10 M3 3 L17 17 M17 3 L3 17"
      stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none" />
  </svg>
);

const HandDrawnArrow = () => (
  <svg viewBox="0 0 90 60" width="90" height="60" className="about-arrow" aria-hidden="true">
    <path d="M8 50 Q30 20 72 18" stroke="#222222" strokeWidth="2.8" fill="none" strokeLinecap="round" />
    <path d="M64 10 L74 18 L62 24" stroke="#222222" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="#777777" aria-hidden="true">
    <path d="M8 1a4 4 0 0 1 4 4c0 2.5-4 9-4 9S4 7.5 4 5a4 4 0 0 1 4-4Zm0 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
  </svg>
);

const AtIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#777777" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#777777" strokeWidth="2" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

export default function AboutSection() {
  return (
    <section id="about" className="jenni-about-section">
      <div className="about-container">

        {/* LEFT */}
        <div className="about-left-col">
          <span className="about-deco about-deco--star-tl">
            <SparkleSmall size={22} color="#064BE8" />
          </span>

          <div className="about-hello-wrap">
            <h2 className="about-hello-heading">Hello!</h2>
            <div className="about-squiggle-wrap"><SquigglyUnderline /></div>
          </div>

          <p className="about-bio-text">
            {"It's Jenni! A graphic design student majored in "}
            <em>Visual Communication Design</em>
            {" based in the Philippines. I'm interested in challenging myself to gain new knowledges and developing my creativity in fun and creative designs. I consider myself as a hard-working and easy to adapt. I hope my abilities able to contribute to the growth of your firm."}
          </p>

          <div className="about-cta-row">
            <HandDrawnArrow />
            <a
              id="about-linkedin-cta"
              href="https://linkedin.com/in/jennifer"
              target="_blank"
              rel="noopener noreferrer"
              className="about-linkedin-btn"
            >
              <SearchIcon />
              <span>linkedin.com/in/jennifer</span>
            </a>
          </div>

          <span className="about-deco about-deco--star-bl"><SparkleX size={16} color="#064BE8" /></span>
          <span className="about-deco about-deco--plus-mid"><SparkleX size={12} color="#064BE8" /></span>
        </div>

        {/* RIGHT */}
        <div className="about-right-col">
          <span className="about-deco about-deco--star-tr"><SparkleSmall size={16} color="#064BE8" /></span>
          <span className="about-deco about-deco--x-card"><SparkleX size={12} color="#064BE8" /></span>

          <div className="about-profile-card">
            <div className="about-photo-wrap">
              <div className="about-photo-placeholder">
                <svg viewBox="0 0 120 150" width="120" height="150" style={{display:'block'}}>
                  <rect width="120" height="150" rx="8" fill="#E8EBF0"/>
                  <circle cx="60" cy="52" r="28" fill="#BEC3CC"/>
                  <ellipse cx="60" cy="116" rx="42" ry="32" fill="#BEC3CC"/>
                </svg>
              </div>
            </div>
            <div className="about-card-info">
              <p className="about-card-name">Jennifer <span className="about-card-dash">—</span> <span className="about-card-pronoun">she/her</span></p>
              <ul className="about-card-details">
                <li><PinIcon /><span>Philippines</span></li>
                <li><AtIcon /><span>@jennifer_design</span></li>
                <li><MailIcon /><span>jenni@email.com</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
