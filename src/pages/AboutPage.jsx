import React from 'react';
import Nav from '../components/Nav';
import MarqueeTicker from '../components/MarqueeTicker';
import GiantFooter from '../components/GiantFooter';
import { Sparkles, Calendar, MapPin, CheckCircle2, Code, Layout, ShieldCheck, Heart } from 'lucide-react';
import characterImg from '../assets/jenni_character.jpg';

export default function AboutPage() {
  const philosophies = [
    {
      title: 'Clarity Over Clutter',
      desc: 'Interfaces should communicate with effortless ease. I strip away gratuitous cognitive overhead while maintaining rich character and warmth.'
    },
    {
      title: 'Playful Precision',
      desc: 'A digital product can be robustly engineered while remaining memorable, friendly, and emotionally resonant.'
    },
    {
      title: 'Systemic Architecture',
      desc: 'Design and code are two sides of one coin. I build scalable design tokens, reusable components, and documentation that empowers teams.'
    }
  ];

  const designSkills = [
    'UI/UX Design', 'User Research', 'Design Systems', 'Interactive Prototyping',
    'Information Architecture', 'Visual Direction', 'Typography', 'Figma Tokens'
  ];

  const engineeringSkills = [
    'React 18', 'JavaScript (ES6+)', 'TypeScript', 'Vite & Build Tooling',
    'HTML5 & Semantic Markup', 'Modern CSS & Tokens', 'Tailwind', 'Git & CI/CD'
  ];

  const tools = [
    'Figma', 'Storybook', 'VS Code', 'GitHub', 'Vercel', 'Postman', 'Chrome DevTools'
  ];

  const careerTimeline = [
    {
      role: 'Senior Product Designer & Frontend Lead',
      company: 'Independent Practice / Studio',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Partnering with brands, creators, and tech startups to design intuitive web applications, design systems, and high-performance digital products.'
    },
    {
      role: 'Lead Frontend Engineer',
      company: 'Apex Digital Studio',
      period: '2021 - 2023',
      location: 'Remote',
      description: 'Spearheaded frontend architecture for enterprise SaaS clients, building reusable design systems and reducing load times significantly.'
    },
    {
      role: 'UI/UX & Frontend Developer',
      company: 'CloudSphere Solutions',
      period: '2019 - 2021',
      location: 'New York, NY',
      description: 'Developed responsive interfaces, single-page web applications, and collaborated directly with product managers to conduct usability studies.'
    }
  ];

  return (
    <div className="editorial-page-shell">
      <Nav />

      {/* Page Header */}
      <div className="page-editorial-banner">
        <div className="header-meta-tag">
          <Sparkles size={13} />
          <span>BIOGRAPHY & DESIGN PHILOSOPHY</span>
        </div>
        <h1 className="page-main-headline">
          About <span className="font-script">Jennifer</span>
        </h1>
        <p className="page-banner-subtext">
          A creative UI/UX designer and frontend engineer dedicated to making the web feel thoughtful, expressive, and human.
        </p>
      </div>

      <MarqueeTicker />

      <main className="about-full-container">
        {/* Bio & Portrait Intro */}
        <section className="about-hero-block">
          <div className="about-portrait-card">
            <div className="card-top-tape"></div>
            <img src={characterImg} alt="Jennifer Portrait" className="about-portrait-img" />
            <div className="portrait-details">
              <span className="portrait-title">Jennifer Mankar</span>
              <span className="portrait-sub">Creative Technologist · Based in NY & Worldwide</span>
            </div>
          </div>

          <div className="about-bio-text-block">
            <h2 className="bio-section-title">
              Crafting Bold & Delightful <span className="font-serif italic font-normal">Web Magic</span>
            </h2>
            <p className="bio-paragraph">
              Hello! I'm Jennifer (often called Jenni). I specialize in designing and engineering digital experiences that refuse to look like generic templates.
            </p>
            <p className="bio-paragraph">
              My background sits right at the intersection of creative visual aesthetics and rigorous frontend engineering.
              I treat every design as a cohesive system — from foundational tokens (color, spacing, typography) to interactive micro-animations and production deployment.
            </p>
            <p className="bio-paragraph">
              When I'm not pushing pixels in Figma or building React components, you'll find me exploring typography archives, enjoying craft coffee, and experimenting with generative visuals.
            </p>

            <div className="bio-quote-box">
              <p className="quote-text">
                "Good design is obvious. Great design is thoughtful, clear, and unforgettable."
              </p>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="philosophy-section">
          <div className="section-title-badge">
            <Sparkles size={14} /> CORE VALUES
          </div>
          <h2 className="section-heading">How I Approach Design</h2>

          <div className="philosophy-grid">
            {philosophies.map((p, idx) => (
              <div key={idx} className="philosophy-card">
                <span className="philosophy-index">0{idx + 1}</span>
                <h3 className="philosophy-card-title">{p.title}</h3>
                <p className="philosophy-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Toolkit Breakdown */}
        <section className="skills-breakdown-section">
          <div className="section-title-badge">
            <Sparkles size={14} /> CAPABILITIES & ARSENAL
          </div>
          <h2 className="section-heading">Skills & Tools</h2>

          <div className="skills-two-col-grid">
            <div className="skill-category-card">
              <h3 className="category-title">🎨 Product & UI/UX Design</h3>
              <div className="skill-chips-row">
                {designSkills.map((s, i) => (
                  <span key={i} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>

            <div className="skill-category-card">
              <h3 className="category-title">⚡ Frontend Engineering</h3>
              <div className="skill-chips-row">
                {engineeringSkills.map((s, i) => (
                  <span key={i} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="tools-card">
            <h4 className="tools-title">Daily Tools & Environments:</h4>
            <div className="tools-chips-row">
              {tools.map((tool, i) => (
                <span key={i} className="tool-chip">✦ {tool}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="career-timeline-section">
          <div className="section-title-badge">
            <Sparkles size={14} /> BACKGROUND
          </div>
          <h2 className="section-heading">Experience & Journey</h2>

          <div className="timeline-items-wrapper">
            {careerTimeline.map((item, index) => (
              <div key={index} className="timeline-row-card">
                <div className="timeline-meta-col">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-loc"><MapPin size={13} /> {item.location}</span>
                </div>
                <div className="timeline-content-col">
                  <h3 className="timeline-role-title">{item.role}</h3>
                  <span className="timeline-company-name">{item.company}</span>
                  <p className="timeline-role-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <GiantFooter />
    </div>
  );
}
