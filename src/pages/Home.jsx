import React, { useState } from 'react';
import HeroIntro from '../components/HeroIntro';
import Header from '../components/Header';
import FloatingProfile from '../components/FloatingProfile';
import HeroScene from '../components/HeroScene';
import AboutSection from '../components/AboutSection';
import WorksSection from '../components/WorksSection';
import ProcessSection from '../components/ProcessSection';
import PlaygroundCanvas from '../components/PlaygroundCanvas';
import ContactSection from '../components/ContactSection';
import FooterBanner from '../components/FooterBanner';
import CVModal from '../components/CVModal';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="jenni-universe">
      {/* ── Cinematic intro overlay — sits on top, animates away ── */}
      {!introComplete && (
        <HeroIntro onComplete={() => setIntroComplete(true)} />
      )}

      {/* ── Existing site — always mounted underneath ── */}
      <Header
        onOpenCV={() => setIsCVOpen(true)}
        onOpenContact={scrollToContact}
      />

      <FloatingProfile onMessageClick={scrollToContact} />

      <main className="jenni-main-flow">
        <HeroScene />
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
