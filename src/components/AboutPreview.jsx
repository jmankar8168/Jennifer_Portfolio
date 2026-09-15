import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import characterImg from '../assets/jenni_character.jpg';

export default function AboutPreview() {
  const weeklyLog = [
    { day: 'MON', tag: 'DESIGN SYSTEMS', note: 'Token hierarchy & Figma synchronization', icon: '&#10022;' },
    { day: 'TUE', tag: 'INTERACTIONS', note: 'Fluid states, micro-motion & feedback', icon: '&#9733;' },
    { day: 'WED', tag: 'FRONTEND ARCH', note: 'Clean React 18, Vite & zero-bloat CSS', icon: '&#9829;' },
    { day: 'THU', tag: 'USER RESEARCH', note: 'Heuristic audits & friction-free flows', icon: '&#10022;' },
    { day: 'FRI', tag: 'CREATIVE LABS', note: 'Tactile experiments & editorial polish', icon: '&#9733;' }
  ];

  return (
    <section className="about-preview-section">
      {/* Spiral Notebook Outer Container on Chocolate Background (Reference 2) */}
      <div className="notebook-outer-container">
        <div className="notebook-binder-card">
          {/* Circular Binder Holes along the top */}
          <div className="binder-holes-row">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="binder-hole"></div>
            ))}
          </div>

          <div className="notebook-content-body">
            {/* Header / Schedule Stamp */}
            <div className="notebook-header-block">
              <span className="notebook-meta-title">WHERE CLARITY MEETS CREATIVITY</span>
              <h2 className="notebook-main-title">THIS WEEK &amp; ALWAYS</h2>
            </div>

            {/* Schedule / Capabilities Grid inspired by Reference 2 */}
            <div className="timetable-grid">
              {weeklyLog.map((slot, idx) => (
                <div key={idx} className="timetable-slot">
                  <div className="slot-day-header">
                    <span className="day-name">{slot.day}</span>
                    <span className="day-stamp">&#10022;</span>
                  </div>
                  <div className="slot-pill-badge">
                    <span className="slot-icon" dangerouslySetInnerHTML={{ __html: slot.icon }}></span>
                    <span className="slot-tag">{slot.tag}</span>
                  </div>
                  <p className="slot-note">{slot.note}</p>
                </div>
              ))}
            </div>

            {/* Split Bio & Portrait Section inside Notebook */}
            <div className="notebook-bio-split">
              <div className="notebook-portrait-col">
                <div className="mini-polaroid-frame">
                  <div className="polaroid-washi-tape"></div>
                  <img
                    src={characterImg}
                    alt="Jenni Mankar"
                    className="mini-polaroid-img"
                  />
                  <div className="mini-polaroid-caption">
                    <span className="name">Jennifer Mankar</span>
                    <span className="title">UI/UX Designer &amp; Engineer</span>
                  </div>
                </div>
              </div>

              <div className="notebook-text-col">
                <h3 className="notebook-greeting">
                  Hi, I'm <span className="font-script">Jenni</span>.
                </h3>
                <p className="notebook-lead">
                  I design thoughtful digital experiences where <span className="font-serif italic font-normal">clarity</span> meets <span className="font-serif italic font-normal">creativity</span>.
                </p>
                <p className="notebook-body">
                  Bridging the space between whimsical, editorial visual aesthetics and rigorous frontend engineering.
                  I believe software should be as delightful to experience as it is reliable to run.
                </p>

                <div className="notebook-cta-row">
                  <Link to="/about" className="notebook-cta-btn">
                    <span>More About Me &amp; Philosophy</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
