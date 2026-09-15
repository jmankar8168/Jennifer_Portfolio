import React from 'react';

export default function Header() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="jenni-header">
      <div className="header-inner">
        {/* Left: Avatar Mark & Brand Name */}
        <div className="header-left-col">
          <a
            href="#hero"
            className="header-brand-link"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
          >
            <div className="avatar-mark-circle">
              <svg viewBox="0 0 40 40" width="34" height="34">
                <circle cx="20" cy="20" r="18" fill="#0038ff" />
                <circle cx="20" cy="16" r="8" fill="#fde047" />
                <path d="M14 14 Q20 8 26 14" stroke="#111" strokeWidth="3" fill="#111" />
                <circle cx="18" cy="16" r="1.2" fill="#111" />
                <circle cx="22" cy="16" r="1.2" fill="#111" />
                <path d="M13 28 Q20 22 27 28 L27 38 L13 38 Z" fill="#fbbf24" />
              </svg>
            </div>
            <span className="header-brand-name">jenni</span>
          </a>
        </div>

        {/* Right: Clean Navigation Links */}
        <nav className="header-nav-links">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>about</a>
          <a href="#works" onClick={(e) => { e.preventDefault(); scrollTo('works'); }}>works</a>
          <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>process</a>
          <a href="#playground" onClick={(e) => { e.preventDefault(); scrollTo('playground'); }}>playground</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>contact</a>
        </nav>
      </div>
    </header>
  );
}
