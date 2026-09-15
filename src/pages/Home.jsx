import React, { useState, useEffect } from 'react';
import JenniHeroSection from '../components/JenniHeroSection';
import Header from '../components/Header';
import HeroScene from '../components/HeroScene';
import AboutSection from '../components/AboutSection';
import WorksSection from '../components/WorksSection';
import ProcessSection from '../components/ProcessSection';
import PlaygroundCanvas from '../components/PlaygroundCanvas';
import ContactSection from '../components/ContactSection';
import FooterBanner from '../components/FooterBanner';
import CVModal from '../components/CVModal';

export default function Home() {
  const [navState, setNavState] = useState('hero'); // 'hero' | 'site'
  const [isCVOpen, setIsCVOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      if (window.scrollY > heroHeight * 0.6) {
        setNavState('site');
      } else {
        setNavState('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="jenni-universe">
      {/* ── Single Persistent Unified Header (Fixed Top) ── */}
      <Header
        introPhase={navState === 'hero' ? 'enter' : 'done'}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenContact={scrollToContact}
      />

      <main className="jenni-main-flow">
        {/* ── SECTION 1: JENNI HERO SECTION (100vh, #0038ff bg) ── */}
        <JenniHeroSection />

        {/* ── SECTION 2: HERO SCENE / ROOM ── */}
        <HeroScene />

        {/* ── SECTION 3: ABOUT ── */}
        <AboutSection />

        {/* ── SECTION 4: WORKS (Interactive Typographic Index) ── */}
        <WorksSection />

        {/* ── SECTION 5: PROCESS ── */}
        <ProcessSection />

        {/* ── SECTION 6: PLAYGROUND ── */}
        <PlaygroundCanvas />

        {/* ── SECTION 7: CONTACT ── */}
        <ContactSection onOpenCV={() => setIsCVOpen(true)} />
      </main>

      <FooterBanner />

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
