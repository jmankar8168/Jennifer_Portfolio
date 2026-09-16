import React from "react";

/* ─── Doodles (preserved) ────────────────────────────────── */
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

const HandDrawnArrow = () => (
  <svg viewBox="0 0 90 60" width="90" height="60" className="about-arrow" aria-hidden="true">
    <path d="M8 50 Q30 20 72 18" stroke="#222222" strokeWidth="2.8" fill="none" strokeLinecap="round" />
    <path d="M64 10 L74 18 L62 24" stroke="#222222" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

/* ─── ID Card Graphics ───────────────────────────────────── */
const Starburst = () => (
  <svg viewBox="0 0 54 54" width="70" height="70" aria-hidden="true">
    <polygon
      points="27,2 30,18 42,7 33,21 52,22 35,29 46,44 29,35 29,54 21,37 10,50 19,35 2,38 19,27 6,14 23,23"
      fill="#173ec8"
    />
    <polygon
      points="27,6 30,18 40,9 33,21 50,23 35,29 44,42 29,34 28,52 21,37 11,48 19,35 4,37 19,27 7,16 23,23"
      fill="#3b62f5"
      opacity="0.9"
    />
    <circle cx="27" cy="27" r="7" fill="#132fa0" />
  </svg>
);

const BarcodeLines = () => (
  <svg viewBox="0 0 240 28" className="id-barcode-svg" aria-hidden="true">
    <rect x="0" y="0" width="3" height="28" fill="white" opacity="0.85" />
    <rect x="5" y="0" width="6" height="28" fill="white" opacity="0.85" />
    <rect x="14" y="0" width="2" height="28" fill="white" opacity="0.85" />
    <rect x="19" y="0" width="5" height="28" fill="white" opacity="0.85" />
    <rect x="27" y="0" width="3" height="28" fill="white" opacity="0.85" />
    <rect x="33" y="0" width="7" height="28" fill="white" opacity="0.85" />
    <rect x="43" y="0" width="2" height="28" fill="white" opacity="0.85" />
    <rect x="48" y="0" width="4" height="28" fill="white" opacity="0.85" />
    <rect x="55" y="0" width="6" height="28" fill="white" opacity="0.85" />
    <rect x="64" y="0" width="2" height="28" fill="white" opacity="0.85" />
    <rect x="69" y="0" width="7" height="28" fill="white" opacity="0.85" />
    <rect x="79" y="0" width="3" height="28" fill="white" opacity="0.85" />
    <rect x="85" y="0" width="4" height="28" fill="white" opacity="0.85" />
    <rect x="92" y="0" width="2" height="28" fill="white" opacity="0.85" />
    <rect x="97" y="0" width="6" height="28" fill="white" opacity="0.85" />
    <rect x="106" y="0" width="3" height="28" fill="white" opacity="0.85" />
    <rect x="112" y="0" width="7" height="28" fill="white" opacity="0.85" />
    <rect x="122" y="0" width="2" height="28" fill="white" opacity="0.85" />
    <rect x="127" y="0" width="4" height="28" fill="white" opacity="0.85" />
    <rect x="134" y="0" width="3" height="28" fill="white" opacity="0.85" />
    <rect x="140" y="0" width="6" height="28" fill="white" opacity="0.85" />
    <rect x="149" y="0" width="2" height="28" fill="white" opacity="0.85" />
    <rect x="154" y="0" width="7" height="28" fill="white" opacity="0.85" />
    <rect x="164" y="0" width="3" height="28" fill="white" opacity="0.85" />
    <rect x="170" y="0" width="5" height="28" fill="white" opacity="0.85" />
    <rect x="178" y="0" width="2" height="28" fill="white" opacity="0.85" />
    <rect x="183" y="0" width="6" height="28" fill="white" opacity="0.85" />
    <rect x="192" y="0" width="3" height="28" fill="white" opacity="0.85" />
    <rect x="198" y="0" width="7" height="28" fill="white" opacity="0.85" />
    <rect x="208" y="0" width="2" height="28" fill="white" opacity="0.85" />
    <rect x="213" y="0" width="5" height="28" fill="white" opacity="0.85" />
    <rect x="221" y="0" width="3" height="28" fill="white" opacity="0.85" />
    <rect x="227" y="0" width="6" height="28" fill="white" opacity="0.85" />
    <rect x="236" y="0" width="3" height="28" fill="white" opacity="0.85" />
  </svg>
);

const SmileyIcon = () => (
  <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
    <circle cx="16" cy="16" r="14" fill="#a3e635" />
    <circle cx="11" cy="13" r="2.2" fill="#111111" />
    <circle cx="21" cy="13" r="2.2" fill="#111111" />
    <path d="M10 19 Q16 26 22 19" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" fill="none" />
  </svg>
);

/* ─── Portfolio ID Card (Large 3D Flip) ──────────────────── */
function PortfolioIDCard() {
  return (
    <div className="id-card-scene" tabIndex={0} aria-label="Portfolio ID Card - hover to flip and discover more">
      <div className="id-card-flipper">

        {/* ── FRONT ── */}
        <div className="id-card-face id-card-front">
          <div className="id-card-noise" aria-hidden="true" />
          <div className="id-punch-hole" aria-hidden="true" />
          <div className="id-front-inner">
            {/* Title bar */}
            <div className="id-title-bar">
              <span className="id-card-title">PORTFOLIO ID CARD</span>
            </div>
            {/* Content row */}
            <div className="id-content-row">
              {/* Left info */}
              <div className="id-info-col">
                <p className="id-greeting">hello my name is...</p>
                <p className="id-name">Jennifer</p>
                <div className="id-field">
                  <span className="id-field-key">position:</span>
                  <span className="id-field-val">Designer, Creative,{"\n"}Visual Storyteller</span>
                </div>
                <p className="id-expire">expire date: xx.xx.xx</p>
                <p className="id-num-tag">id number: JN-2024-001</p>
              </div>
              {/* Right visual */}
              <div className="id-visual-col">
                <div className="id-photo-box">
                  <svg viewBox="0 0 110 130" width="100%" height="100%">
                    <rect width="110" height="130" fill="#1536a0" />
                    <circle cx="55" cy="46" r="24" fill="#2449c2" />
                    <ellipse cx="55" cy="108" rx="38" ry="26" fill="#2449c2" />
                    <text x="55" y="74" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="9" fontFamily="monospace" letterSpacing="0.12em">PORTRAIT</text>
                  </svg>
                </div>
                <div className="id-starburst-wrap">
                  <Starburst />
                </div>
                <p className="id-frontal-label">FRONTAL VIEW{"\n"}id: JN-001</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="id-card-face id-card-back">
          <div className="id-card-noise" aria-hidden="true" />
          <div className="id-punch-hole" aria-hidden="true" />
          <div className="id-back-texture" aria-hidden="true" />
          <div className="id-back-inner">
            {/* Stickers left cluster */}
            <div className="id-stickers-wrap" aria-hidden="true">
              <div className="id-stk id-stk-blue">YOUTH</div>
              <div className="id-stk id-stk-red">
                <span>YOU WILL<br />NEVER REGRET<br />BEING KIND</span>
              </div>
              <div className="id-stk id-stk-yellow">
                <span className="id-stk-sm">do what makes you</span>
                <span className="id-stk-lg">HAPPY</span>
              </div>
              <div className="id-stk id-stk-peach">
                <span className="id-stk-peach-txt">JUST<br />PEACHY</span>
              </div>
              <div className="id-stk id-stk-smiley">
                <SmileyIcon />
              </div>
            </div>
            {/* Right CTA text */}
            <div className="id-back-cta">
              <p className="id-back-headline">KNOW<br />MORE<br />ABOUT<br />ME</p>
            </div>
            {/* Barcode bottom */}
            <div className="id-barcode-row" aria-hidden="true">
              <BarcodeLines />
              <span className="id-barcode-num">0 35545 62336 78 1</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Main About Section (Clean & Open Layout) ─────────────── */
export default function AboutSection() {
  return (
    <section id="about" className="jenni-about-section">
      <div className="about-container">

        {/* LEFT: Heading, Squiggle, Intro copy, and clean Lime LinkedIn CTA */}
        <div className="about-left-col">
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
        </div>

        {/* RIGHT: Large Portfolio ID Card with 3D Flip */}
        <div className="about-right-col">
          <PortfolioIDCard />
        </div>

      </div>
    </section>
  );
}