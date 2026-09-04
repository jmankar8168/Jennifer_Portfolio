import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import MarqueeTicker from '../components/MarqueeTicker';
import EspressoSection from '../components/EspressoSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import InteractiveLab from '../components/InteractiveLab';
import Contact from '../components/Contact';
import GiantFooter from '../components/GiantFooter';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faedf2' }}>
      <Nav />
      <main>
        <Hero />
        <MarqueeTicker />
        <EspressoSection />
        <About />
        <Skills />
        <Projects />
        <InteractiveLab />
        <Contact />
      </main>
      <GiantFooter />
    </div>
  );
}
