import React from 'react';
import Nav from '../components/Nav';
import MarqueeTicker from '../components/MarqueeTicker';
import Projects from '../components/Projects';
import InteractiveLab from '../components/InteractiveLab';
import GiantFooter from '../components/GiantFooter';

export default function Work() {
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
          curated case studies & interactive works
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.8rem, 5vw, 4.4rem)',
          fontWeight: 400,
          color: '#34211a',
          margin: 0
        }}>
          Selected <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.3em' }}>Projects</span>
        </h1>
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: '#6e554b',
          fontSize: '1.2rem',
          maxWidth: '540px',
          margin: '12px auto 0'
        }}>
          A curated gallery of responsive web applications, design systems, and creative digital experiments.
        </p>
      </div>
      <MarqueeTicker />
      <main>
        <Projects />
        <InteractiveLab />
      </main>
      <GiantFooter />
    </div>
  );
}
