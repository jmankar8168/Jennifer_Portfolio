import React, { useEffect, useRef, useState } from 'react';

/* ═══════════════════════════════════════════════════════════
   PROJECT DATA (Matching Reference Screenshots & Identity)
   ═══════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    id: 'ihss',
    headline: 'From Zero to\nSummit',
    subline: 'Brand IP · Research · Event · Two editions',
    title: 'Indian Healthy\nSnacking Summit',
    version: '1.0 & 2.0',
    roleLabel: 'Creative direction, end-to-end',
    stat: '13,000+ surveyed',
    deliverables: [
      'User Research',
      'Brand Identity',
      'Website',
      '65-page report',
      'Data Visualization',
    ],
    code: 'IHSS · DVJ · 2026',
    link: 'https://storybook-static-mauve-pi.vercel.app',
    leftImage: '/ihss-stage.jpg',
    rightImage: '/ihss-deck.jpg',
  },
  {
    id: 'farmley',
    headline: 'Farmley.com\nRedesign',
    subline: 'D2C · House of brands · Shopify',
    title: 'Farmley.com Redesign',
    version: 'D2C & E-Commerce',
    roleLabel: 'Sr. Visual Designer · owned end-to-end',
    stat: '47 days · brief to live MVP',
    deliverables: [
      'UX',
      'Brand system',
      'Shopify build',
    ],
    code: 'FARMLEY · DVJ · 2026',
    link: 'https://jmankar8168.github.io/Jennifer_Portfolio/',
    leftImage: '/farmley-figma.jpg',
    rightImage: '/farmley-store.jpg',
  },
  {
    id: 'circle',
    headline: 'Circle Brand\nSystem',
    subline: 'Visual Identity · Digital Design · Guidelines',
    title: 'Circle Brand IP',
    version: 'Identity 2.0',
    roleLabel: 'Brand Identity & Visual Design Lead',
    stat: '360° Brand System',
    deliverables: [
      'Visual Identity',
      'Design Guidelines',
      'Design System',
      'Marketing Suite',
    ],
    code: 'CIRCLE · DVJ · 2026',
    link: 'https://github.com/jmankar8168/Jennifer_Portfolio',
    leftImage: '/project-saas.jpg',
    rightImage: '/project-ai.jpg',
  },
];

/* ═══════════════════════════════════════════════════════════
   PROCEDURAL BARCODE
   ═══════════════════════════════════════════════════════════ */
function Barcode({ code }) {
  const bars = React.useMemo(() => {
    const list = [];
    let x = 0;
    for (let i = 0; i < 52; i++) {
      const n = (code.charCodeAt(i % code.length) * 17 + i * 29) % 100;
      const w = n < 25 ? 1 : n < 60 ? 2 : n < 80 ? 1.5 : 3;
      const gap = n < 40 ? 1.5 : 1;
      list.push({ x, w });
      x += w + gap;
    }
    return { list, totalW: x };
  }, [code]);

  return (
    <svg
      width="100%"
      height="30"
      viewBox={`0 0 ${bars.totalW} 30`}
      preserveAspectRatio="none"
      style={{ display: 'block' }}
    >
      {bars.list.map((b, i) => (
        <rect key={i} x={b.x} y={0} width={b.w} height={30} fill="#0038ff" opacity="0.8" />
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERRATED / ZIG-ZAG TICKET EDGE
   ═══════════════════════════════════════════════════════════ */
function SerratedEdge({ flipped = false }) {
  return (
    <svg
      viewBox="0 0 360 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        display: 'block',
        width: '100%',
        height: 14,
        transform: flipped ? 'scaleY(-1)' : undefined,
      }}
    >
      <path
        d="M0,0 L10,12 L20,0 L30,12 L40,0 L50,12 L60,0 L70,12 L80,0 L90,12 L100,0 L110,12 L120,0 L130,12 L140,0 L150,12 L160,0 L170,12 L180,0 L190,12 L200,0 L210,12 L220,0 L230,12 L240,0 L250,12 L260,0 L270,12 L280,0 L290,12 L300,0 L310,12 L320,0 L330,12 L340,0 L350,12 L360,0 L360,14 L0,14 Z"
        fill="#fbf5dc"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function WorksSection() {
  const sectionRef = useRef(null);
  const ticketRefs = useRef([]);
  const rafRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tick = () => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrolled = window.scrollY - sectionTop;
      const totalScrollable = section.offsetHeight - window.innerHeight;
      const p = clamp(scrolled / totalScrollable, 0, 1);

      /* Card Stacking Scroll Physics
         Cards are anchored at top: 0 in the flex-stage.
         They are horizontally centered with translateX(-50%).
         Vertical offsets are driven by translateY.
      */
      const numCards = PROJECTS.length;
      let curActive = 0;

      for (let i = 0; i < numCards; i++) {
        const el = ticketRefs.current[i];
        if (!el) continue;

        if (i === 0) {
          // Base card: pinned, subtly offsets when stacked
          const p1Progress = clamp((p - 0.22) / 0.32, 0, 1);
          const ty = -14 * p1Progress;
          el.style.transform = `translateX(-50%) translateY(${ty}px)`;
          el.style.zIndex = 10;
        } else {
          // Subsequent cards rise from bottom to stack on top
          const startP = 0.22 + (i - 1) * 0.36;
          const endP = startP + 0.32;
          const progress = clamp((p - startP) / (endP - startP), 0, 1);
          const eased = easeOut(progress);

          const ty = (1 - eased) * 105; // 105vh -> 0vh
          el.style.transform = `translateX(-50%) translateY(${ty}vh)`;
          el.style.zIndex = 10 + i * 5;

          if (progress >= 0.5) {
            curActive = i;
          }
        }
      }

      setActiveProject(curActive);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    tick();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const proj = PROJECTS[activeProject];

  return (
    <section id="works" ref={sectionRef} className="works-scroll-container">
      <div className="works-sticky-frame">
        <div className="works-blue-panel">

          {/* ── Center Header Block with Responsive Spacing ── */}
          <div className="works-heading-block">
            <h2 className="works-main-h2">
              Things I have built,<br />owned, and shipped.
            </h2>
            <div className="works-section-label">Selected Work</div>
          </div>

          {/* ── Center Interactive Stage ─────────────────── */}
          <div className="works-stage">

            {/* Hover Side Elements (Left Title + Polaroids + Right Arrow) */}
            <div
              className={`works-hover-context ${isHovered ? 'is-active' : ''}`}
              aria-hidden="true"
            >
              {/* Left Headline & Tagline */}
              <div className="whc-left-text">
                <h3 className="whc-headline">{proj.headline}</h3>
                <p className="whc-subline">{proj.subline}</p>
              </div>

              {/* Bottom-Left Polaroid Photo */}
              <div className="whc-polaroid whc-polaroid-left">
                <div className="whc-polaroid-inner">
                  <img src={proj.leftImage} alt="" className="whc-polaroid-img" />
                </div>
              </div>

              {/* Top-Right Polaroid Screenshot */}
              <div className="whc-polaroid whc-polaroid-right">
                <div className="whc-polaroid-inner">
                  <img src={proj.rightImage} alt="" className="whc-polaroid-img" />
                </div>
              </div>

              {/* Bottom-Right Hero-Yellow Arrow */}
              <div className="whc-arrow-right">
                <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
                  <path
                    d="M32 2L44 14L32 26M42 14H4"
                    stroke="#fde047"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Stacked Receipt Cards */}
            {PROJECTS.map((p, idx) => (
              <div
                key={p.id}
                ref={el => { ticketRefs.current[idx] = el; }}
                className={`sw-receipt-card ${activeProject === idx ? 'sw-active-card' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="sw-receipt-paper">
                  {/* Top Serrated Edge */}
                  <SerratedEdge />

                  {/* Receipt Content Body */}
                  <div className="sw-receipt-body">
                    <h3 className="sw-r-title">
                      {p.title.split('\n').map((line, li, arr) => (
                        <React.Fragment key={li}>
                          {line}
                          {li < arr.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    <div className="sw-r-version">{p.version}</div>

                    <div className="sw-r-divider" />

                    <div className="sw-r-role">{p.roleLabel}</div>

                    <div className="sw-r-stat">{p.stat}</div>

                    <div className="sw-r-delivs">
                      {p.deliverables.map(d => (
                        <div key={d} className="sw-r-deliv-row">
                          <span className="sw-r-deliv-name">{d}</span>
                          <span className="sw-r-check">&#10003;</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sw-r-cta"
                      onClick={e => e.stopPropagation()}
                    >
                      CASE STUDY &#8594;
                    </a>
                  </div>

                  {/* Barcode Footer */}
                  <div className="sw-receipt-barcode-box">
                    <Barcode code={p.code} />
                    <div className="sw-r-code-label">{p.code}</div>
                  </div>

                  {/* Bottom Serrated Edge */}
                  <SerratedEdge flipped />
                </div>
              </div>
            ))}

          </div>{/* /works-stage */}

        </div>{/* /works-blue-panel */}
      </div>{/* /works-sticky-frame */}
    </section>
  );
}
