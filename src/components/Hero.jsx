import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="polka-dot-bg" style={{
      padding: '80px 24px 90px',
      position: 'relative',
      borderBottom: '1px solid rgba(52, 33, 26, 0.15)',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Handwriting Sub-label */}
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '1.65rem',
          color: '#52382f',
          marginBottom: '6px',
          letterSpacing: '0.02em'
        }}>
          for creators + brands
        </p>

        {/* Small uppercase tag */}
        <span style={{
          display: 'inline-block',
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          fontWeight: 700,
          color: '#6e554b',
          textTransform: 'uppercase',
          marginBottom: '22px'
        }}>
          (CREATIVE UI/UX & FRONTEND ENGINEERING STUDIO)
        </span>

        {/* Speech Bubble with Heart Decoration */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '8%',
          backgroundColor: '#fad2e1',
          padding: '6px 10px',
          borderRadius: '12px 12px 12px 2px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(6deg)'
        }}>
          <span style={{ color: '#ffffff', fontSize: '1rem' }}>🤍</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
          lineHeight: 1.15,
          color: '#34211a',
          fontWeight: 500,
          marginBottom: '32px'
        }}>
          For{' '}
          <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.35em', fontWeight: 400 }}>
            Brands
          </span>{' '}
          <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.4em', fontWeight: 400 }}>
            &
          </span>{' '}
          <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.35em', fontWeight: 400 }}>
            Creators
          </span>{' '}
          Who Want Clarity and Content that{' '}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            verticalAlign: 'baseline'
          }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              backgroundColor: '#e0ecf2',
              color: '#365364',
              padding: '4px 14px',
              borderRadius: '9999px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              verticalAlign: 'middle',
              transform: 'translateY(-6px)'
            }}>
              creative-led
            </span>
            <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.35em', fontWeight: 400 }}>
              Performs
            </span>
            <span style={{ color: '#c92a2a', fontSize: '1.8rem', verticalAlign: 'middle' }}>♥</span>
            <span style={{
              fontSize: '1.4rem',
              display: 'inline-block',
              transform: 'rotate(-45deg)',
              color: '#34211a'
            }}>
              ➔
            </span>
          </span>
        </h1>

        {/* Action Button: Dashed Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
          <Link
            to="/contact"
            className="dashed-pill-btn"
            style={{
              padding: '8px 30px',
              fontSize: '1.3rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
            }}
          >
            Work with Us
          </Link>
          <Link
            to="/work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 26px',
              borderRadius: '9999px',
              backgroundColor: '#788554',
              color: '#ffffff',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.2rem',
              fontStyle: 'italic',
              textDecoration: 'none',
              transition: 'background 0.2s'
            }}
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
