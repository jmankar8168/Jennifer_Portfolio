import React from 'react';
import Nav from '../components/Nav';
import MarqueeTicker from '../components/MarqueeTicker';
import Contact from '../components/Contact';
import GiantFooter from '../components/GiantFooter';

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faedf2' }}>
      <Nav />
      <div className="polka-dot-bg" style={{
        padding: '70px 24px 50px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(52, 33, 26, 0.12)'
      }}>
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '1.6rem',
          color: '#52382f',
          marginBottom: '4px'
        }}>
          get in touch with me
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.8rem, 5vw, 4.4rem)',
          fontWeight: 400,
          color: '#34211a',
          margin: 0
        }}>
          Let's <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.3em' }}>Connect</span>
        </h1>
      </div>
      <MarqueeTicker />
      <main>
        <Contact />
      </main>
      <GiantFooter />
    </div>
  );
}
