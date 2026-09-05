import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import MarqueeTicker from '../components/MarqueeTicker';
import EspressoSection from '../components/EspressoSection';
import PolaroidCollage from '../components/PolaroidCollage';
import ProcessAccordion from '../components/ProcessAccordion';
import StatsSection from '../components/StatsSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
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
        
        {/* New components added from reference inspiration */}
        <PolaroidCollage />
        <ProcessAccordion />
        <StatsSection />
        <TestimonialCarousel />

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
