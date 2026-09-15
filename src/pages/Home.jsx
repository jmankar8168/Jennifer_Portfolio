import React, { useState } from 'react';
import HeroIntro from '../components/HeroIntro';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import WorksSection from '../components/WorksSection';
import ProcessSection from '../components/ProcessSection';
import PlaygroundCanvas from '../components/PlaygroundCanvas';
import ContactSection from '../components/ContactSection';
import FooterBanner from '../components/FooterBanner';
import CVModal from '../components/CVModal';

export default function Home() {
  const [introPhase, setIntroPhase] = useState('enter');
  const [isCVOpen, setIsCVOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="jenni-universe">
      {/* ── Single Persistent Unified Header (Fixed Top) ── */}
      <Header
        introPhase={introPhase}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* ── 100% Scroll-Driven Poster Overlay ── */}
      <HeroIntro
        onPhaseChange={(phase) => setIntroPhase(phase)}
      />

      {/* ── Original Website Content (Mounted underneath) ── */}
      <main className="jenni-main-flow">
        <section id="hero-spacer" style={{ minHeight: "100vh" }} />
        <AboutSection />
        <WorksSection />
        <ProcessSection />
        <PlaygroundCanvas />
        <ContactSection onOpenCV={() => setIsCVOpen(true)} />
      </main>

      <FooterBanner />

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
