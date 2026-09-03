import React, { useState, useEffect } from 'react';
import { Code2, Sun, Moon, Sparkles, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentTheme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const themes = ['default', 'cyberpunk', 'emerald'];
    const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interactive Lab', href: '#lab' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <div className="logo-icon">
            <Code2 size={22} className="logo-svg" />
          </div>
          <span className="logo-text">
            Alex<span className="gradient-text">Rivera</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="nav-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            title={`Current Theme: ${currentTheme}. Click to change.`}
          >
            <Sparkles size={18} />
            <span className="theme-name desktop-only">{currentTheme.toUpperCase()}</span>
          </button>

          <a href="#contact" className="btn btn-primary btn-sm desktop-only">
            Hire Me <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle-btn mobile-only" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hire Me <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}
