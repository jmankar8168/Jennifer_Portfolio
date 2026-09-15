import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import MarqueeTicker from '../components/MarqueeTicker';
import SelectedWorkPreview from '../components/SelectedWorkPreview';
import AboutPreview from '../components/AboutPreview';
import CapabilitiesSection from '../components/CapabilitiesSection';
import ContactPreview from '../components/ContactPreview';
import GiantFooter from '../components/GiantFooter';

export default function Home() {
  return (
    <div className="editorial-page-shell">
      <Nav />
      <main>
        <Hero />
        <MarqueeTicker />
        <SelectedWorkPreview />
        <AboutPreview />
        <CapabilitiesSection />
        <ContactPreview />
      </main>
      <GiantFooter />
    </div>
  );
}
