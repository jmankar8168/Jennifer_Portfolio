import React from 'react';
import { Link } from 'react-router-dom';

export default function GiantFooter() {
  return (
    <footer className="editorial-giant-footer">
      <div className="footer-inner-container">
        {/* Top Navigation Row */}
        <div className="footer-nav-row">
          <div className="footer-nav-links">
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-cta-group">
            <a
              href="https://github.com/jmankar8168"
              target="_blank"
              rel="noreferrer"
              className="footer-github-link"
            >
              GitHub &#8599;
            </a>
            <Link to="/contact" className="footer-inquire-pill">
              Start a Project &#10022;
            </Link>
          </div>
        </div>

        {/* Giant Editorial Brand Typography */}
        <div className="footer-brand-display">
          <h1 className="footer-huge-text">
            <span className="font-serif">jenni</span>
            <span className="font-script footer-star-accent">.</span>
            <span className="footer-sparkle-glyph">&#10022;</span>
          </h1>
          <p className="footer-tagline">
            Creative UI/UX Design &amp; Frontend Engineering &#8226; 2026 Edition
          </p>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="footer-bottom-row">
          <span>&copy; {new Date().getFullYear()} Jennifer Mankar. All rights reserved.</span>
          <span>Designed with care, clarity &amp; joyful precision.</span>
        </div>
      </div>
    </footer>
  );
}
