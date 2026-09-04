import React from 'react';
import Nav from '../components/Nav';
import MarqueeTicker from '../components/MarqueeTicker';
import EspressoSection from '../components/EspressoSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import GiantFooter from '../components/GiantFooter';

export default function AboutPage() {
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
          the philosophy & story
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.8rem, 5vw, 4.4rem)',
          fontWeight: 400,
          color: '#34211a',
          margin: 0
        }}>
          About <span style={{ fontFamily: "'Pinyon Script', cursive", fontSize: '1.3em' }}>Jennifer</span>
        </h1>
      </div>
      <MarqueeTicker />
      <EspressoSection />
      <main>
        <About />
        <Skills />
        <Experience />
      </main>
      <GiantFooter />
    </div>
  );
}
