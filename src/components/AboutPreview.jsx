import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import characterImg from '../assets/jenni_character.jpg';

export default function AboutPreview() {
  const highlights = [
    'User-centered interaction architecture & visual storytelling',
    'Pixel-perfect Figma-to-code translation & design tokens',
    'High-performance React & Vite frontend engineering'
  ];

  const skillPills = [
    'UI/UX Design', 'Design Systems', 'Interactive Prototyping',
    'Frontend Architecture', 'User Research', 'React & TypeScript'
  ];

  return (
    <section className="about-preview-section">
      <div className="section-container">
        <div className="about-preview-grid">
          {/* Left Column: Polaroid Style Portrait */}
          <div className="about-preview-media">
            <div className="about-polaroid-frame">
              <div className="polaroid-pin">✧</div>
              <img
                src={characterImg}
                alt="Jenni Portrait"
                className="about-polaroid-img"
              />
              <div className="polaroid-caption">
                <span className="polaroid-name">Jennifer Mankar</span>
                <span className="polaroid-role">Product Designer & Developer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="about-preview-content">
            <div className="header-meta-tag">
              <Sparkles size={13} />
              <span>THE PERSON BEHIND THE CRAFT</span>
            </div>

            <h2 className="about-headline">
              Hi, I'm <span className="font-script">Jenni</span>.
            </h2>

            <p className="about-lead-text">
              I design thoughtful digital experiences where <span className="font-serif italic">clarity</span> meets <span className="font-serif italic">creativity</span>.
            </p>

            <p className="about-body-text">
              Bridging the gap between whimsical, editorial design sensibilities and uncompromising frontend craftsmanship.
              Every layout I construct is built with intention, deep empathy for the user, and an obsession with micro-interactions.
            </p>

            <div className="about-checklist">
              {highlights.map((h, i) => (
                <div key={i} className="about-check-item">
                  <span className="check-icon">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="about-skills-row">
              {skillPills.map((s, idx) => (
                <span key={idx} className="about-pill">{s}</span>
              ))}
            </div>

            <div className="about-cta-row">
              <Link to="/about" className="editorial-text-cta">
                <span>More About Me & Background</span>
                <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
