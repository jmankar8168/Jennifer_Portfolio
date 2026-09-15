import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import characterImg from '../assets/jenni_character.jpg';

export default function Hero() {
  return (
    <section className="editorial-hero-section">
      <div className="hero-grid-pattern-bg"></div>

      <div className="hero-content-wrapper">
        {/* Left Column: Oversized Editorial Copy & CTAs */}
        <div className="hero-text-col">
          <div className="hero-tag-pill">
            <span className="hero-tag-text">(CREATIVE UI/UX DESIGNER & FRONTEND ENGINEER)</span>
          </div>

          <h1 className="hero-headline">
            <span className="headline-line-1">
              For <span className="font-serif italic">Brands</span> &{' '}
              <span className="font-script">Creators</span>
            </span>
            <span className="headline-line-2">Who Want Clarity</span>
            <span className="headline-line-3">
              and <span className="font-serif italic font-normal">Content</span> that
            </span>
            <span className="headline-line-4">
              <span className="font-sans font-bold">Performs</span>
              <span className="headline-dot">.</span>
            </span>
          </h1>

          <p className="hero-description">
            Your go-to product designer & frontend architect for high-conversion web apps,
            meticulous design systems, and delightful digital experiences where clarity meets personality.
          </p>

          {/* Dual CTAs */}
          <div className="hero-cta-group">
            <Link to="/contact" className="hero-primary-btn">
              <span>Work with Me</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link to="/work" className="hero-secondary-btn">
              <span>View Portfolio</span>
            </Link>
          </div>

          <div className="hero-meta-row">
            <span className="meta-pill">✦ 100% Custom Architecture</span>
            <span className="meta-pill">✦ React & Figma Tokens</span>
            <span className="meta-pill">✦ Available for 2026</span>
          </div>
        </div>

        {/* Right Column: Editorial Visual Showcase with Character & Stickers */}
        <div className="hero-visual-col">
          <div className="hero-card-frame">
            <div className="card-top-tape"></div>

            <div className="hero-image-container">
              <img
                src={characterImg}
                alt="Jennifer - Creative UI/UX Designer & Frontend Engineer"
                className="hero-character-img"
              />
              <div className="hero-image-gradient-overlay"></div>
            </div>

            {/* Floating Stamp Badges */}
            <div className="floating-badge badge-top-right">
              <span className="badge-script">catch me if</span>
              <span className="badge-script-bold">you can! ✧</span>
            </div>

            <div className="floating-badge badge-bottom-left">
              <span className="badge-tag">UI/UX · 2026</span>
              <span className="badge-title">Interactive Arts</span>
            </div>

            <div className="floating-doodle doodle-star-1">✧</div>
            <div className="floating-doodle doodle-star-2">✦</div>
            <div className="floating-doodle doodle-star-3">✿</div>
          </div>
        </div>
      </div>
    </section>
  );
}
