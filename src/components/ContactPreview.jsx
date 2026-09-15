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
        {/* Scalloped Postage Stamp Cloud Card on Soft Blue/Lavender Background (Reference 2) */}
        <div className="scallop-cloud-wrapper">
          <div className="scallop-cloud-card">
            <div className="cloud-stamp-top">
              <span className="cloud-stamp-badge">MONTHLY &amp; PROJECT COLLABORATION</span>
            </div>

            <h2 className="cloud-headline">
              Have a project in mind? <br />
              <span className="font-serif italic font-normal">Let's make something</span>{' '}
              <span className="font-script">meaningful</span>.
            </h2>

            <p className="cloud-subtitle">
              Whether you're looking for an editorial web experience, a full design system overhaul,
              or a dedicated product design partner, I'd love to connect.
            </p>

            <div className="cloud-cta-group">
              <Link to="/contact" className="cloud-main-btn">
                <span>Let's Talk</span>
                <span className="btn-arrow">&#8594;</span>
              </Link>

              <button onClick={handleCopy} className="cloud-email-btn">
                <Mail size={16} />
                <span>{email}</span>
                {copied ? <Check size={16} color="#788554" /> : <Copy size={16} opacity={0.6} />}
              </button>
            </div>

            <div className="cloud-socials-row">
              <a href="https://github.com/jmankar8168" target="_blank" rel="noreferrer" className="social-pill-link">
                GitHub &#8599;
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill-link">
                LinkedIn &#8599;
              </a>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="social-pill-link">
                Behance &#8599;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
