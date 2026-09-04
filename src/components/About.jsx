import React from 'react';
import { Cpu, Zap, Layout, Layers, ShieldCheck, Code, Globe, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Zap className="pillar-icon cyan" size={28} />,
      title: 'Performance First',
      description: 'Optimized rendering, zero bloat, and sub-second load times engineered for maximum conversion.'
    },
    {
      icon: <Layout className="pillar-icon purple" size={28} />,
      title: 'Playful Modern Aesthetics',
      description: 'Tactile micro-animations, expressive typography, sticker badges, and memorable visual flair.'
    },
    {
      icon: <Layers className="pillar-icon emerald" size={28} />,
      title: 'Modular Architecture',
      description: 'Clean, scalable JavaScript & React component hierarchies built for maintainability and speed.'
    },
    {
      icon: <Cpu className="pillar-icon amber" size={28} />,
      title: 'AI & Modern APIs',
      description: 'Integrating smart AI APIs, real-time data flows, and interactive canvas components.'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> ABOUT JENNIFER
            </span>
            <h2 className="section-title">
              Crafting Bold & <span className="gradient-text">Delightful Web Magic</span>
            </h2>
            <p className="section-subtitle">
              Combining design obsession with rigorous frontend engineering to create websites that stand out.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-bio-card glass-card">
              <h3 className="bio-title">My Craft & Philosophy</h3>
              <p className="bio-text">
                I build digital experiences that refuse to look like generic templates. With a deep passion for playful aesthetics and rock-solid frontend architecture, I transform ideas into intuitive, fast-loading products.
              </p>
              <p className="bio-text">
                Whether creating custom design systems in React, crafting high-performance dashboards with Vite, or experimenting with generative AI and canvas interactions, my work focuses on user joy and technical excellence.
              </p>
              <div className="about-badges-row">
                <span className="tech-badge"><Code size={14} /> Modern JavaScript</span>
                <span className="tech-badge"><Globe size={14} /> React & Vite</span>
                <span className="tech-badge"><ShieldCheck size={14} /> Clean Architecture</span>
              </div>
            </div>

            <div className="pillars-grid">
              {pillars.map((pillar, index) => (
                <div key={index} className="pillar-card glass-card">
                  <div className="pillar-icon-wrapper">
                    {pillar.icon}
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
