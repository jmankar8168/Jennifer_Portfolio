import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-icon">
              <Code2 size={20} />
            </div>
            <span className="logo-text">
              Alex<span className="gradient-text">Rivera</span>
            </span>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#lab">Interactive Lab</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" title="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Alex Rivera. Engineered with Vite + React & Vanilla CSS.</p>
          <p className="built-with">
            Designed for high performance & sleek user experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
