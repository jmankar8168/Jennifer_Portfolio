import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const announcements = [
    "Accepting Selected Projects & Collaborations for 2026",
    "Open for Full-time, Freelance & Contract Inquiries",
    "New Case Studies & Interactive Labs Live in Portfolio"
  ];

  const nextAnnouncement = () => {
    setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="editorial-nav-container">
      {/* Top Olive Announcement Bar */}
      <div className="announcement-bar">
        <button
          onClick={prevAnnouncement}
          className="announcement-arrow-btn"
          aria-label="Previous announcement"
        >
          ‹
        </button>
        <span className="announcement-text">
          <span className="announcement-sparkle">✧</span> {announcements[announcementIndex]} <span className="announcement-sparkle">✧</span>
        </span>
        <button
          onClick={nextAnnouncement}
          className="announcement-arrow-btn"
          aria-label="Next announcement"
        >
          ›
        </button>
      </div>

      {/* Main Nav Bar */}
      <nav className="main-navbar">
        {/* Logo: jenni + olive star */}
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="brand-logo-text">jenni</span>
          <span className="brand-star">✧</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="desktop-nav-links">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'nav-link-item active' : 'nav-link-item'
              }
            >
              {({ isActive }) => (
                <>
                  <span className="nav-link-title">{item.name}</span>
                  {isActive && <span className="nav-active-dot">•</span>}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Dual CTAs on Right */}
        <div className="desktop-nav-ctas">
          <Link to="/contact" className="secondary-cta-btn">
            Inquire
          </Link>
          <Link to="/contact" className="primary-cta-btn">
            <span>Work with Me</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-links-wrapper">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? 'mobile-nav-item active' : 'mobile-nav-item'
                }
              >
                <span>{item.name}</span>
                <ArrowUpRight size={18} opacity={0.6} />
              </NavLink>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-primary-btn"
            >
              Work with Me ↗
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-secondary-btn"
            >
              Inquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
