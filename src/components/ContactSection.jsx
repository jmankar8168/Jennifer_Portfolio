import React, { useState } from 'react';
import { Mail, Check, Copy } from 'lucide-react';

export default function ContactSection({ onOpenCV }) {
  const [copied, setCopied] = useState(false);
  const email = 'jmankar8168@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="jenni-contact-section">
      <div className="contact-container-grid">
        {/* Left: Giant Callout & CV Button */}
        <div className="contact-left-col">
          <div className="email-chip-pill" onClick={handleCopyEmail}>
            <span className="email-icon-box">&#9993;</span>
            <span className="email-address-text">{email}</span>
            <span className="copy-hint">{copied ? 'Copied! ✓' : 'Copy'}</span>
          </div>

          <h2 className="contact-giant-headline">
            LET'S BUILD<br />
            SOMETHING<br />
            MEMORABLE
          </h2>

          <div className="contact-actions-row">
            <button onClick={onOpenCV} className="contact-cv-pill-btn">
              CV
            </button>
          </div>
        </div>

        {/* Right: Pinned Postcard with Crab-Headband Character */}
        <div className="contact-right-col">
          <div className="pinned-postcard-frame">
            {/* Red Pushpin */}
            <div className="postcard-pushpin">
              <div className="pushpin-head"></div>
              <div className="pushpin-shadow"></div>
            </div>

            {/* Character with Crab/Lobster Headband */}
            <div className="postcard-character-box">
              <svg viewBox="0 0 160 140" width="130" height="114">
                {/* Red Crab Headband */}
                <path d="M40 50 Q80 20 120 50" stroke="#ef4444" strokeWidth="6" fill="none" />
                {/* Crab Claws */}
                <circle cx="36" cy="30" r="10" fill="#ef4444" />
                <path d="M28 26 Q36 18 44 26" stroke="#111" strokeWidth="2" fill="none" />
                <circle cx="124" cy="30" r="10" fill="#ef4444" />
                <path d="M116 26 Q124 18 132 26" stroke="#111" strokeWidth="2" fill="none" />

                {/* Head & Hair */}
                <path d="M45 50 Q80 15 115 50 L120 120 L40 120 Z" fill="#111827" />
                <circle cx="80" cy="75" r="28" fill="#fde047" stroke="#111" strokeWidth="3" />
                {/* Face details */}
                <circle cx="72" cy="75" r="2.5" fill="#111" />
                <circle cx="88" cy="75" r="2.5" fill="#111" />
                <path d="M76 85 Q80 88 84 85" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Cheeks */}
                <circle cx="68" cy="80" r="4" fill="#fca5a5" />
                <circle cx="92" cy="80" r="4" fill="#fca5a5" />
              </svg>
            </div>

            {/* Postcard Message */}
            <div className="postcard-message-box">
              <span className="postcard-greeting">Hey!</span>
              <p className="postcard-body">
                This page exists to say hi, show projects, and not talk about yourself. Thoughtful digital interactions bring people together.
              </p>
              <p className="postcard-ps">
                P.S. Designing more rooms while you read this in background. &mdash; Jenni
              </p>
            </div>
          </div>

          <div className="contact-slogan-box">
            <span className="slogan-text">Have an idea? Let's turn into a sharp digital experience.</span>
            <div className="slogan-eyes">&#128064;</div>
          </div>
        </div>
      </div>
    </section>
  );
}
