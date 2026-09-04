import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="footer-brand-title">
            Jenni<span style={{ color: '#ffe033' }}>.</span>
          </Link>

          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/work" className="footer-link">Work</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <a href="https://github.com/jmankar8168" target="_blank" rel="noreferrer" className="footer-link">
              GitHub ↗
            </a>
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top">
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jennifer. Built with React & Vite. Made with <Heart size={14} style={{ display: 'inline', color: '#ff2d78', verticalAlign: 'middle' }} />.</p>
        </div>
      </div>
    </footer>
  );
}
