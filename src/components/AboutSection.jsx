import React from "react";

/* ─── Decorative doodles (unchanged) ────────────────────── */
const SquigglyUnderline = () => (
  <svg viewBox="0 0 240 20" width="240" height="20" className="about-squiggle" aria-hidden="true">
    <path d="M4 13 Q22 4 40 13 Q58 22 76 13 Q94 4 112 13 Q130 22 148 13 Q166 4 184 13 Q202 22 218 13 Q230 6 238 11"
      stroke="#FF4B4B" strokeWidth="3.5" fill="none" strokeLinecap="round" />
  </svg>
);
const SparkleSmall = ({ size = 18, color = "#064BE8" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z" fill={color} />
  </svg>
);
const SparkleX = ({ size = 14, color = "#064BE8" }) => (
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
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

/* ─── ID Card sub-components ─────────────────────────────── */
const Starburst = () => (
  <svg viewBox="0 0 54 54" width="52" height="52" aria-hidden="true">
    <polygon
      points="27,2 30,18 42,7 33,21 52,22 35,29 46,44 29,35 29,54 21,37 10,50 19,35 2,38 19,27 6,14 23,23"
      fill="#1a3fd4" />
    <polygon
      points="27,6 30,18 40,9 33,21 50,23 35,29 44,42 29,34 28,52 21,37 11,48 19,35 4,37 19,27 7,16 23,23"
      fill="#3a62f5" opacity="0.85" />
    <circle cx="27" cy="27" r="6" fill="#1530b8" />
  </svg>
);

const BarcodeLines = () => (
  <svg viewBox="0 0 130 18" width="130" height="18" aria-hidden="true">
    <rect x="0" y="0" width="2" height="18" fill="white" opacity="0.8" />
    <rect x="4" y="0" width="4" height="18" fill="white" opacity="0.8" />
    <rect x="10" y="0" width="1" height="18" fill="white" opacity="0.8" />
    <rect x="13" y="0" width="3" height="18" fill="white" opacity="0.8" />
    <rect x="18" y="0" width="2" height="18" fill="white" opacity="0.8" />
    <rect x="22" y="0" width="5" height="18" fill="white" opacity="0.8" />
    <rect x="29" y="0" width="1" height="18" fill="white" opacity="0.8" />
    <rect x="32" y="0" width="3" height="18" fill="white" opacity="0.8" />
    <rect x="37" y="0" width="4" height="18" fill="white" opacity="0.8" />
    <rect x="43" y="0" width="1" height="18" fill="white" opacity="0.8" />
    <rect x="46" y="0" width="5" height="18" fill="white" opacity="0.8" />
    <rect x="53" y="0" width="2" height="18" fill="white" opacity="0.8" />
    <rect x="57" y="0" width="3" height="18" fill="white" opacity="0.8" />
    <rect x="62" y="0" width="1" height="18" fill="white" opacity="0.8" />
    <rect x="65" y="0" width="4" height="18" fill="white" opacity="0.8" />
    <rect x="71" y="0" width="2" height="18" fill="white" opacity="0.8" />
    <rect x="75" y="0" width="5" height="18" fill="white" opacity="0.8" />
    <rect x="82" y="0" width="1" height="18" fill="white" opacity="0.8" />
    <rect x="85" y="0" width="3" height="18" fill="white" opacity="0.8" />
    <rect x="90" y="0" width="2" height="18" fill="white" opacity="0.8" />
    <rect x="94" y="0" width="4" height="18" fill="white" opacity="0.8" />
    <rect x="100" y="0" width="1" height="18" fill="white" opacity="0.8" />
    <rect x="103" y="0" width="5" height="18" fill="white" opacity="0.8" />
    <rect x="110" y="0" width="2" height="18" fill="white" opacity="0.8" />
    <rect x="114" y="0" width="3" height="18" fill="white" opacity="0.8" />
    <rect x="119" y="0" width="4" height="18" fill="white" opacity="0.8" />
    <rect x="125" y="0" width="2" height="18" fill="white" opacity="0.8" />
    <rect x="129" y="0" width="1" height="18" fill="white" opacity="0.8" />
  </svg>
);

/* ─── Portfolio ID Card ──────────────────────────────────── */
function PortfolioIDCard() {
  return (
    <div className="id-card-scene" tabIndex={0} aria-label="Portfolio ID Card - hover to flip and discover more">
      <div className="id-card-flipper">

        {/* ══ FRONT ══ */}
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
                  <svg viewBox="0 0 68 80" width="68" height="80">
                    <rect width="68" height="80" rx="3" fill="#1535a8" />
                    <circle cx="34" cy="30" r="16" fill="#2448c0" />
                    <ellipse cx="34" cy="65" rx="24" ry="17" fill="#2448c0" />
                    <text x="34" y="48" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="monospace">PHOTO</text>
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

        {/* ══ BACK ══ */}
        <div className="id-card-face id-card-back">
          <div className="id-card-noise" aria-hidden="true" />
          <div className="id-punch-hole" aria-hidden="true" />
          <div className="id-back-texture" aria-hidden="true" />
          <div className="id-back-inner">
            {/* Stickers left cluster */}
            <div className="id-stickers-wrap" aria-hidden="true">
              <div className="id-stk id-stk-blue">YOUTH</div>
              <div className="id-stk id-stk-red">YOU WILL<br />NEVER<br />REGRET ✌</div>
              <div className="id-stk id-stk-yellow"><span className="id-stk-sm">do what makes you</span><br /><span className="id-stk-lg">HAPPY</span></div>
              <div className="id-stk id-stk-green">JUST<br />PEACHY ✿</div>
              <div className="id-stk id-stk-smiley">☺</div>
            </div>
            {/* Right CTA text */}
            <div className="id-back-cta">
              <p className="id-back-headline">KNOW<br />MORE<br />ABOUT<br />ME</p>
            </div>
            {/* Barcode bottom */}
            <div className="id-barcode-row" aria-hidden="true">
              <BarcodeLines />
              <span className="id-barcode-num">0 35545 62335 78 1</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Main About Section ─────────────────────────────────── */
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
            <a id="about-linkedin-cta" href="https://linkedin.com/in/jennifer"
              target="_blank" rel="noopener noreferrer" className="about-linkedin-btn">
              <SearchIcon />
              <span>linkedin.com/in/jennifer</span>
            </a>
          </div>
          <span className="about-deco about-deco--star-bl"><SparkleX size={16} color="#064BE8" /></span>
          <span className="about-deco about-deco--plus-mid"><SparkleX size={12} color="#064BE8" /></span>
        </div>

        {/* RIGHT — Portfolio ID Card */}
        <div className="about-right-col">
          <span className="about-deco about-deco--star-tr"><SparkleSmall size={16} color="#064BE8" /></span>
          <span className="about-deco about-deco--x-card"><SparkleX size={12} color="#064BE8" /></span>
          <PortfolioIDCard />
        </div>

      </div>
    </section>
  );
}
