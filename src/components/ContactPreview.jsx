import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Copy, Check, Sparkles } from 'lucide-react';

export default function ContactPreview() {
  const [copied, setCopied] = useState(false);
  const email = 'jmankar8168@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact-preview-section">
      <div className="section-container">
        <div className="contact-card-frame">
          <div className="contact-card-tape"></div>

          <div className="contact-card-inner">
            <div className="contact-availability-badge">
              <span className="status-indicator-dot"></span>
              <span>Available for Select Projects & Collaborations (2026)</span>
            </div>

            <h2 className="contact-card-headline">
              Have a project in mind? <br />
              <span className="font-serif italic font-normal">Let's make something</span>{' '}
              <span className="font-script">meaningful</span>.
            </h2>

            <p className="contact-card-subtitle">
              Whether you're looking for an editorial web experience, a full design system overhaul,
              or a dedicated product design partner, I'd love to connect.
            </p>

            <div className="contact-cta-buttons-row">
              <Link to="/contact" className="contact-cta-main-btn">
                <span>Let's Talk</span>
                <span className="arrow-icon">→</span>
              </Link>

              <button onClick={handleCopy} className="contact-email-copy-pill">
                <Mail size={16} />
                <span>{email}</span>
                {copied ? <Check size={16} color="#788554" /> : <Copy size={16} opacity={0.6} />}
              </button>
            </div>

            <div className="contact-social-links-row">
              <a href="https://github.com/jmankar8168" target="_blank" rel="noreferrer" className="social-pill-link">
                GitHub ↗
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill-link">
                LinkedIn ↗
              </a>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="social-pill-link">
                Behance ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
