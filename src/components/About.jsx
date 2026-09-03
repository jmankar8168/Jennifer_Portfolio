import React from 'react';
import { Cpu, Zap, Layout, Layers, ShieldCheck, Code, Globe, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Zap className="pillar-icon cyan" size={28} />,
      title: 'Performance First',
      description: 'Optimized rendering, zero bloat, and sub-second load times engineered for maximum user conversion.'
    },
    {
      icon: <Layout className="pillar-icon purple" size={28} />,
      title: 'Modern Aesthetic Design',
      description: 'Fluid micro-animations, glassmorphism, dark themes, and accessible typography crafted with precision.'
    },
    {
      icon: <Layers className="pillar-icon emerald" size={28} />,
      title: 'Modular Architecture',
      description: 'Clean, scalable JavaScript & React component hierarchies built for maintainability and longevity.'
    },
    {
      icon: <Cpu className="pillar-icon amber" size={28} />,
      title: 'AI & Cloud Ready',
      description: 'Integrating intelligent AI APIs, real-time data streams, and robust serverless microservices.'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> ABOUT ME
          </span>
          <h2 className="section-title">
            Passionate About Crafting <span className="gradient-text">Exceptional Web Experiences</span>
          </h2>
          <p className="section-subtitle">
            Combining engineering precision with eye-catching design to build digital products people love to use.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio-card glass-card">
            <h3 className="bio-title">My Journey & Craft</h3>
            <p className="bio-text">
              Over the past 5+ years, I have spearheaded frontend and full-stack development for fast-growing startups and digital agencies. I specialize in turning complex requirements into intuitive, blazing-fast web applications.
            </p>
            <p className="bio-text">
              Whether building custom Vite + React design systems, high-traffic SaaS dashboards, or integrating generative AI pipelines into production apps, I focus on delivering clean code, seamless interactions, and measurable business impact.
            </p>
            <div className="about-badges-row">
              <span className="tech-badge"><Code size={14} /> Vanilla JavaScript</span>
              <span className="tech-badge"><Globe size={14} /> React / Vite</span>
              <span className="tech-badge"><ShieldCheck size={14} /> REST & GraphQL</span>
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
    </section>
  );
}
