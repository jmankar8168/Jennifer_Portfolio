import React, { useState, useRef, useEffect } from 'react';

/* ─── Project data ──────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'p1',
    title: 'Branding & Art Direction',
    subtitle: 'Brand Systems · Visual Identity',
    category: 'BRAND IP',
    year: '2025',
    duration: '2 Months',
    stat: '360° Brand System',
    deliverables: ['Brand Strategy', 'Visual Identity', 'Style Guide', 'Marketing Collateral'],
    code: 'JM-01',
    link: 'https://storybook-static-mauve-pi.vercel.app',
    color: '#0038ff'
  },
  {
    id: 'p2',
    title: 'Publication Design',
    subtitle: 'Editorial · Books & Print',
    category: 'EDITORIAL',
    year: '2025',
    duration: '3 Months',
    stat: '180+ Page Spread',
    deliverables: ['Layout Design', 'Typography System', 'Cover Design', 'Print Production'],
    code: 'JM-02',
    link: 'https://jmankar8168.github.io/Jennifer_Portfolio/',
    color: '#1b1b6e'
  },
  {
    id: 'p3',
    title: 'Motion Graphics',
    subtitle: '3D Motion · Kinetic Type',
    category: 'MOTION',
    year: '2024',
    duration: '6 Weeks',
    stat: '12 Motion Assets',
    deliverables: ['Title Sequence', 'Kinetic Typography', 'Logo Animation', 'Social Reels'],
    code: 'JM-03',
    link: 'https://github.com/jmankar8168/Jennifer_Portfolio',
    color: '#0038ff'
  },
  {
    id: 'p4',
    title: 'Packaging Design',
    subtitle: 'Physical Goods · Sustainable',
    category: 'PACKAGING',
    year: '2024',
    duration: '5 Weeks',
    stat: '8 SKU Variants',
    deliverables: ['Structural Design', 'Surface Graphics', 'Prototype', 'Print-Ready Files'],
    code: 'JM-04',
    link: 'https://storybook-static-mauve-pi.vercel.app',
    color: '#1b1b6e'
  },
  {
    id: 'p5',
    title: 'Art & Illustration',
    subtitle: 'Digital Canvas · Character Design',
    category: 'ILLUSTRATION',
    year: '2025',
    duration: '4 Weeks',
    stat: '20+ Illustrations',
    deliverables: ['Character Design', 'Scene Illustration', 'Icon Set', 'Digital Prints'],
    code: 'JM-05',
    link: 'https://jmankar8168.github.io/Jennifer_Portfolio/',
    color: '#0038ff'
  }
];

/* ─── Barcode SVG ───────────────────────────────────────────── */
function Barcode({ code }) {
  // Simple deterministic barcode from code string
  const bars = [];
  for (let i = 0; i < 60; i++) {
    const charCode = (code.charCodeAt(i % code.length) + i * 7) % 100;
    const w = charCode < 30 ? 1 : charCode < 60 ? 2 : charCode < 80 ? 1 : 3;
    const gap = charCode < 40 ? 1 : 2;
    bars.push({ w, gap });
  }
  let x = 0;
  const rects = bars.map((b, i) => {
    const rect = <rect key={i} x={x} y={0} width={b.w} height={40} fill="#111116" />;
    x += b.w + b.gap;
    return rect;
  });
  return (
    <svg width="100%" height="40" viewBox={`0 0 ${x} 40`} preserveAspectRatio="none" style={{ display: 'block' }}>
      {rects}
    </svg>
  );
}

/* ─── Wavy edge SVG path (torn paper) ───────────────────────── */
function WavyEdge({ flip = false }) {
  return (
    <svg
      className={`ticket-wavy-edge ${flip ? 'flip' : ''}`}
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,10 C10,0 20,20 30,10 C40,0 50,20 60,10 C70,0 80,20 90,10 C100,0 110,20 120,10 C130,0 140,20 150,10 C160,0 170,20 180,10 C190,0 200,20 210,10 C220,0 230,20 240,10 C250,0 260,20 270,10 C280,0 290,20 300,10 C310,0 320,20 330,10 C340,0 350,20 360,10 C370,0 380,20 390,10 C400,0 400,10 400,10 L400,20 L0,20 Z"
        fill="#f5f0e4"
      />
    </svg>
  );
}

/* ─── Single Ticket Card ────────────────────────────────────── */
function TicketCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-ticket-scene ${visible ? 'ticket-visible' : ''}`}
      style={{ '--delay': `${index * 0.13}s` }}
      onClick={() => setFlipped(f => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      onKeyDown={e => e.key === 'Enter' && setFlipped(f => !f)}
    >
      <div className={`ticket-flipper ${flipped ? 'is-flipped' : ''}`}>

        {/* ── FRONT ─────────────────────────────────────────── */}
        <div className="ticket-face ticket-front">
          <WavyEdge />
          <div className="ticket-body">
            <div className="ticket-meta-row">
              <span className="ticket-category">{project.category}</span>
              <span className="ticket-year">{project.year}</span>
            </div>
            <h3 className="ticket-title">{project.title}</h3>
            <p className="ticket-subtitle">{project.subtitle}</p>
            <div className="ticket-divider" />
            <div className="ticket-role-label">Creative direction, end-to-end</div>
            <div className="ticket-stat">{project.stat}</div>
            <div className="ticket-deliverables">
              {project.deliverables.map(d => (
                <div key={d} className="ticket-deliverable-row">
                  <span className="ticket-deliverable-name">{d}</span>
                  <span className="ticket-check">✓</span>
                </div>
              ))}
            </div>
            <div className="ticket-cta-row">
              <span className="ticket-cta-label">CASE STUDY</span>
              <span className="ticket-cta-arrow">→</span>
            </div>
          </div>
          <div className="ticket-barcode-zone">
            <Barcode code={project.code} />
            <span className="ticket-barcode-label">{project.code} · GD · {project.year}</span>
          </div>
          <WavyEdge flip />
        </div>

        {/* ── BACK ──────────────────────────────────────────── */}
        <div className="ticket-face ticket-back">
          <WavyEdge />
          <div className="ticket-body ticket-back-body">
            <div className="ticket-back-header">
              <span className="ticket-back-cat">{project.category}</span>
              <span className="ticket-back-code">{project.code}</span>
            </div>
            <div className="ticket-back-title-wrap">
              <span className="ticket-back-subtitle">PROJECT DETAILS</span>
              <h3 className="ticket-back-title">{project.title}</h3>
            </div>
            <div className="ticket-back-stat-row">
              <div className="ticket-back-stat-box">
                <span className="tbs-label">DURATION</span>
                <span className="tbs-value">{project.duration}</span>
              </div>
              <div className="ticket-back-stat-box">
                <span className="tbs-label">YEAR</span>
                <span className="tbs-value">{project.year}</span>
              </div>
            </div>
            <div className="ticket-back-deliverables">
              {project.deliverables.map(d => (
                <div key={d} className="tbd-row">
                  <span className="tbd-dot" />
                  <span className="tbd-text">{d}</span>
                </div>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ticket-back-cta"
              onClick={e => e.stopPropagation()}
            >
              View Case Study →
            </a>
          </div>
          <div className="ticket-barcode-zone">
            <Barcode code={project.code + 'BACK'} />
            <span className="ticket-barcode-label">{project.code} · {project.year}</span>
          </div>
          <WavyEdge flip />
        </div>

      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────── */
export default function WorksSection() {
  const marqueeText = [
    'ILLUSTRATION.', 'WEB DESIGN.', 'PACKAGING DESIGN.', 'BRANDING.', 'MOTION.', 'ART DIRECTION.'
  ];

  return (
    <section id="works" className="works-typographic-section">

      {/* Ghost heading */}
      <div className="works-editorial-heading" aria-hidden="true">
        <h2>(WORKS)</h2>
      </div>

      {/* Diagonal marquee ribbon */}
      <div className="diagonal-marquee-ribbon" aria-hidden="true">
        <div className="marquee-track">
          {Array(4).fill(marqueeText).flat().map((item, idx) => (
            <span key={idx} className="marquee-item">
              <span className="marquee-word">{item}</span>
              <span className="marquee-star">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Section label */}
      <div className="works-section-label">
        <span>Selected Work</span>
      </div>

      {/* Ticket row */}
      <div className="ticket-carousel-row">
        {PROJECTS.map((proj, i) => (
          <TicketCard key={proj.id} project={proj} index={i} />
        ))}
      </div>

      {/* Hint */}
      <p className="ticket-hint">hover or tap a ticket to inspect</p>
    </section>
  );
}
