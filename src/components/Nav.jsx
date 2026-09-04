import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const announcements = [
    "Accepting Selected Projects & Collaborations for 2026",
    "Open for Full-time, Contract & Studio Inquiries",
    "New Case Studies & Interactive Labs Live in Portfolio"
  ];

  const nextAnnouncement = () => {
    setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setAnnouncementIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="editorial-nav-container" style={{
      width: '100%',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: '#faedf2',
      boxShadow: '0 2px 12px rgba(52, 33, 26, 0.05)'
    }}>
      {/* 1. Olive Moss Green Top Announcement Bar with < Announcement > controls */}
      <div style={{
        backgroundColor: '#788554',
        borderBottom: '1px solid #5e6b3e',
        color: '#ffffff',
        padding: '6px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        fontSize: '0.85rem',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontStyle: 'italic',
        letterSpacing: '0.04em'
      }}>
        <button
          onClick={prevAnnouncement}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '1rem',
            padding: '0 6px',
            opacity: 0.8,
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 0.2s',
            fontFamily: 'serif'
          }}
          aria-label="Previous announcement"
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
        >
          ‹
        </button>

        <span style={{ textAlign: 'center', userSelect: 'none' }}>
          {announcements[announcementIndex]}
        </span>

        <button
          onClick={nextAnnouncement}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '1rem',
            padding: '0 6px',
            opacity: 0.8,
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 0.2s',
            fontFamily: 'serif'
          }}
          aria-label="Next announcement"
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
        >
          ›
        </button>
      </div>

      {/* 2. Main Soft Blush Pink & Chocolate Navigation Bar */}
      <nav style={{
        backgroundColor: '#faedf2',
        borderBottom: '1px solid rgba(52, 33, 26, 0.12)',
        padding: '12px 32px',
        maxWidth: '1360px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        {/* Left: Editorial Brand Logo in Rich Chocolate Brown */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#34211a',
            display: 'flex',
            alignItems: 'baseline',
            gap: '6px'
          }}
        >
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#34211a'
          }}>
            jennifer
          </span>
          <span style={{
            fontFamily: "'Pinyon Script', cursive",
            fontSize: '2.5rem',
            color: '#34211a',
            transform: 'translateY(2px)'
          }}>
            social
          </span>
          <span style={{
            fontSize: '0.8rem',
            color: '#788554',
            transform: 'translateY(-12px)'
          }}>
            ✦
          </span>
        </Link>

        {/* Center: 4 NavLinks (Home, Work, About, Contact) in Chocolate & Olive */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px'
        }}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `editorial-nav-link ${isActive ? 'active' : ''}`}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.25rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#788554' : '#34211a',
                padding: '4px 2px',
                position: 'relative',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              })}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0',
                      right: '0',
                      height: '2px',
                      backgroundColor: '#788554',
                      borderRadius: '9999px'
                    }} />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right: Olive Moss Green Pill Button & Inquire Option */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            to="/contact"
            className="dashed-pill-btn"
            style={{
              padding: '5px 18px',
              fontSize: '1.05rem',
              color: '#34211a',
              borderColor: '#34211a'
            }}
          >
            Inquire
          </Link>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#788554',
              color: '#ffffff',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.15rem',
              fontStyle: 'italic',
              fontWeight: 600,
              padding: '7px 22px',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 3px 10px rgba(120, 133, 84, 0.25)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#5e6b3e';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#788554';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Work with Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
