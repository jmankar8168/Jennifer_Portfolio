import React from 'react';
import jenniChar from '../assets/jenni_character.jpg';

export default function EspressoSection() {
  const polaroids = [
    {
      id: 1,
      image: '/project-ai.jpg',
      caption: 'xoxo, Jennifer',
      rotate: '-4deg',
      bg: '#ffffff',
      title: 'Aurora AI Analytics'
    },
    {
      id: 2,
      image: jenniChar,
      caption: 'xoxo, Jennifer',
      rotate: '1deg',
      bg: '#faf7f2',
      title: 'Studio Moodboard'
    },
    {
      id: 3,
      image: '/project-saas.jpg',
      caption: 'xoxo, Jennifer',
      rotate: '4deg',
      bg: '#faedf2',
      title: 'Synapse Flow Engine'
    }
  ];

  return (
    <section style={{
      backgroundColor: '#34211a',
      color: '#ffffff',
      padding: '90px 24px 110px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Vintage Stamp Sticker in Top Left */}
      <div style={{
        position: 'absolute',
        top: '36px',
        left: '4%',
        backgroundColor: '#ffffff',
        color: '#34211a',
        padding: '6px 14px',
        border: '2px dashed #34211a',
        borderRadius: '4px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        transform: 'rotate(-8deg)',
        textAlign: 'center',
        zIndex: 2
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 700,
          fontSize: '1.2rem',
          letterSpacing: '0.15em',
          border: '1px solid #34211a',
          padding: '2px 8px'
        }}>
          G·M·S
        </div>
      </div>

      {/* Sparkle Stars in Left Area */}
      <div style={{
        position: 'absolute',
        top: '160px',
        left: '6%',
        color: '#faedf2',
        fontSize: '1.6rem',
        opacity: 0.8
      }}>
        ✦ <span style={{ fontSize: '1rem' }}>✦</span>
      </div>

      {/* Cherries Sticker in Right Area */}
      <div style={{
        position: 'absolute',
        top: '60px',
        right: '6%',
        fontSize: '2.5rem',
        transform: 'rotate(12deg)'
      }}>
        🍒
      </div>

      {/* Round Gold Seal Badge */}
      <div style={{
        position: 'absolute',
        bottom: '80px',
        right: '8%',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#f6ebd2',
        color: '#34211a',
        border: '2px dashed #9c7b4f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '0.62rem',
        fontWeight: 700,
        textAlign: 'center',
        padding: '6px',
        transform: 'rotate(-10deg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        zIndex: 10
      }}>
        <span style={{ fontSize: '0.8rem' }}>🤍</span>
        <span style={{ letterSpacing: '0.04em' }}>STRATEGY FIRST</span>
        <span style={{ fontSize: '0.55rem', opacity: 0.8 }}>Creative That Works</span>
      </div>

      {/* Centered Heading */}
      <div style={{ maxWidth: '820px', margin: '0 auto 60px', textAlign: 'center' }}>
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          fontWeight: 700,
          color: 'rgba(255, 255, 255, 0.65)',
          textTransform: 'uppercase',
          marginBottom: '14px'
        }}>
          WHERE CULTURE MEETS PLATFORM STRATEGY
        </p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
          fontWeight: 400,
          lineHeight: 1.15,
          color: '#ffffff',
          marginBottom: '20px'
        }}>
          <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.35em', marginRight: '6px' }}>
            Real Connection,
          </span>{' '}
          Built to{' '}
          <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.35em' }}>
            Scale
          </span>
        </h2>

        <p style={{
          color: 'rgba(255, 255, 255, 0.75)',
          fontSize: '1rem',
          maxWidth: '560px',
          margin: '0 auto',
          lineHeight: 1.65,
          fontFamily: "'Cormorant Garamond', Georgia, serif"
        }}>
          Connecting creative visual storytelling with robust frontend engineering. Designed to captivate audiences and drive measurable digital performance.
        </p>
      </div>

      {/* 3 Polaroid Photo Cards */}
      <div style={{
        maxWidth: '1050px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '32px',
        alignItems: 'center'
      }}>
        {polaroids.map(p => (
          <div
            key={p.id}
            style={{
              backgroundColor: p.bg,
              padding: '14px 14px 28px',
              borderRadius: '4px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
              transform: `rotate(${p.rotate})`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04) rotate(0deg)';
              e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate(${p.rotate})`;
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.35)';
            }}
          >
            <div style={{
              width: '100%',
              height: '270px',
              overflow: 'hidden',
              borderRadius: '2px',
              marginBottom: '16px'
            }}>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.65rem',
                color: '#34211a',
                display: 'block'
              }}>
                {p.caption}
              </span>
              <span style={{
                fontSize: '0.75rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: '#6e554b',
                fontWeight: 600,
                letterSpacing: '0.04em'
              }}>
                {p.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
