import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="w-full">
      {/* 1. Olive Green Top Bar */}
      <div style={{
        backgroundColor: '#788554',
        color: '#ffffff',
        textAlign: 'center',
        padding: '7px 16px',
        fontSize: '0.85rem',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontStyle: 'italic',
        letterSpacing: '0.04em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}>
        <span>Accepting Selected Projects & Collaborations for 2026</span>
        <span style={{ fontSize: '0.7rem' }}>✦</span>
        <span>Open for Full-time & Studio Inquiries</span>
      </div>

      {/* 2. Main Navigation Bar */}
      <header style={{
        backgroundColor: '#faedf2',
        borderBottom: '1px solid rgba(52, 33, 26, 0.1)',
        padding: '14px 28px',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          {/* Left Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.15rem'
          }}>
            <Link
              to="/work"
              style={{
                color: pathname === '/work' ? '#788554' : '#34211a',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.2s'
              }}
            >
              Our Work
            </Link>
            <Link
              to="/about"
              style={{
                color: pathname === '/about' ? '#788554' : '#34211a',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.2s'
              }}
            >
              For Creators
            </Link>
            <a
              href="#skills"
              style={{
                color: '#34211a',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.2s'
              }}
            >
              For Brands
            </a>
          </nav>

          {/* Center Brand Logo */}
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
              letterSpacing: '-0.02em'
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
          </Link>

          {/* Right Links & Inquire Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.15rem'
          }}>
            <Link
              to="/about"
              style={{
                color: pathname === '/about' ? '#788554' : '#34211a',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              About
            </Link>
            <a
              href="#lab"
              style={{
                color: '#34211a',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Academy
            </a>
            <Link
              to="/contact"
              className="dashed-pill-btn"
              style={{
                padding: '4px 18px',
                fontSize: '1.05rem'
              }}
            >
              Inquire
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
