import React from 'react';
import { Link } from 'react-router-dom';

export default function GiantFooter() {
  return (
    <footer style={{
      backgroundColor: '#faedf2',
      borderTop: '2px solid rgba(52, 33, 26, 0.15)',
      padding: '70px 24px 50px',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        {/* Navigation row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          borderBottom: '1px solid rgba(52, 33, 26, 0.12)',
          paddingBottom: '30px'
        }}>
          <div style={{ display: 'flex', gap: '28px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem' }}>
            <Link to="/" style={{ color: '#34211a', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
            <Link to="/about" style={{ color: '#34211a', textDecoration: 'none', fontWeight: 600 }}>About</Link>
            <Link to="/work" style={{ color: '#34211a', textDecoration: 'none', fontWeight: 600 }}>Work</Link>
            <Link to="/contact" style={{ color: '#34211a', textDecoration: 'none', fontWeight: 600 }}>Contact</Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://github.com/jmankar8168"
              target="_blank"
              rel="noreferrer"
              className="dashed-pill-btn"
              style={{ fontSize: '1rem', padding: '4px 20px' }}
            >
              GitHub ↗
            </a>
            <Link
              to="/contact"
              style={{
                padding: '6px 22px',
                borderRadius: '9999px',
                backgroundColor: '#34211a',
                color: '#ffffff',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.1rem',
                fontStyle: 'italic',
                textDecoration: 'none'
              }}
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* GIANT EDITORIAL BRAND TEXT - Matching the reference */}
        <div style={{
          textAlign: 'center',
          padding: '20px 0 10px'
        }}>
          <h1 style={{
            fontSize: 'clamp(3.8rem, 11vw, 9.5rem)',
            color: '#34211a',
            margin: 0,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '12px'
          }}>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700 }}>
              guide me
            </span>
            <span style={{
              fontFamily: "'Pinyon Script', cursive",
              fontSize: '1.2em',
              fontWeight: 400,
              color: '#34211a',
              textShadow: '2px 2px 0px rgba(52, 33, 26, 0.15)'
            }}>
              social
            </span>
          </h1>
        </div>

        {/* Bottom copyright line */}
        <div style={{
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#6e554b',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
          © {new Date().getFullYear()} Jennifer. Personal portfolio & creative design by Jenni. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
