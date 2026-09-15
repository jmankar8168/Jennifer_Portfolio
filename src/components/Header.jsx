import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function Header({ onOpenCV, onOpenContact }) {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const placeholders = [
    'Search Companies',
    'Search Roles',
    'Search Designers',
    'Search Projects',
    'Search Skills'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % placeholders.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="jenni-header">
      <div className="header-inner">
        {/* Left: Avatar Mark */}
        <div className="header-left-col">
          <a href="#hero" className="header-avatar-link" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
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
          </a>
        </div>

        {/* Center: Contextual Search Pill */}
        <div className="header-center-col">
          <div className="search-pill-container">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={placeholders[placeholderIndex]}
              className="search-pill-input"
            />
          </div>
        </div>

        {/* Right: CTA Pills */}
        <div className="header-right-col">
          <button onClick={onOpenContact} className="header-primary-pill">
            Submit Portfolio
          </button>
          <button onClick={onOpenCV} className="header-secondary-pill">
            Log Internship
          </button>
        </div>
      </div>

      {/* Subnav links: about, works, process, playground, contact */}
      <nav className="header-subnav">
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>about</a>
        <a href="#works" onClick={(e) => { e.preventDefault(); scrollTo('works'); }}>works</a>
        <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}>process</a>
        <a href="#playground" onClick={(e) => { e.preventDefault(); scrollTo('playground'); }}>playground</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>contact</a>
      </nav>
    </header>
  );
}
