import React, { useState } from 'react';
import Preloader from '../components/Preloader';
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
  const [loading, setLoading] = useState(true);
  const [isCVOpen, setIsCVOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="jenni-universe">
      {/* 1. Initial Page-Load Preloader Animation */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. Top Header Navigation with Search & Action Pills */}
      <Header
        onOpenCV={() => setIsCVOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* 3. Floating Profile Badge (Left Column) */}
      <FloatingProfile onMessageClick={scrollToContact} />

      {/* 4. Main Single-Page Narrative Scroll Flow */}
      <main className="jenni-main-flow">
        <HeroScene />
        <AboutSection />
        <WorksSection />
        <ProcessSection />
        <PlaygroundCanvas />
        <ContactSection onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* 5. Giant Blue Footer Band */}
      <FooterBanner />

      {/* 6. Interactive CV Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
