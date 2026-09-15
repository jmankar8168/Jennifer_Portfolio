import React, { useState } from 'react';
import Nav from '../components/Nav';
import MarqueeTicker from '../components/MarqueeTicker';
import GiantFooter from '../components/GiantFooter';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const allProjects = [
    {
      id: 1,
      title: 'VisionSync Design System & Component Showcase',
      category: 'Design Systems',
      role: 'Design System Architect & Frontend Lead',
      year: '2026',
      description: 'An enterprise-grade, accessible UI component kit engineered from custom Figma design tokens. Features 60+ interactive components, theme switching, and live Storybook documentation.',
      tags: ['React 18', 'Storybook', 'Figma Tokens', 'TypeScript', 'Accessibility'],
      image: '/project-ai.jpg',
      liveUrl: 'https://storybook-static-mauve-pi.vercel.app',
      githubUrl: 'https://github.com/jmankar8168/Jennifer_UEDP2',
      metrics: '60+ Production UI Components'
    },
    {
      id: 2,
      title: 'Aurora AI Predictive Analytics Suite',
      category: 'AI & Analytics',
      role: 'UI/UX Designer & Lead Engineer',
      year: '2026',
      description: 'An AI-powered predictive intelligence platform that translates complex enterprise dataset telemetry into intuitive real-time trend charts and anomaly alerts.',
      tags: ['React', 'JavaScript', 'Vite', 'Recharts', 'AI Engine'],
      image: '/project-ai.jpg',
      liveUrl: 'https://jmankar8168.github.io/Jennifer_Portfolio/',
      githubUrl: 'https://github.com/jmankar8168/aurora-ai',
      metrics: '12,000+ Active Daily Users'
    },
    {
      id: 3,
      title: 'Synapse Flow Microservice Automation Engine',
      category: 'SaaS Systems',
      role: 'Interaction Designer & Frontend Engineer',
      year: '2025',
      description: 'Visual workflow canvas for modern cloud pipelines. Allows engineers to configure complex event triggers, live node graphs, and webhook sync without touching backend config.',
      tags: ['JavaScript', 'React', 'Canvas API', 'Node.js', 'WebSockets'],
      image: '/project-saas.jpg',
      liveUrl: 'https://jmankar8168.github.io/Jennifer_Portfolio/',
      githubUrl: 'https://github.com/jmankar8168/synapse-flow',
      metrics: '40% Accelerated Deployment Cycles'
    },
    {
      id: 4,
      title: 'JoyBabe Studio Creative Editorial Platform',
      category: 'Brand & Web',
      role: 'Art Director & Frontend Developer',
      year: '2025',
      description: 'A whimsical, high-converting digital boutique combining retro scrapbook layout elements, tactile micro-animations, and smooth responsive ecommerce flows.',
      tags: ['React Router', 'Tailwind', 'Motion UI', 'Design Systems'],
      image: '/project-saas.jpg',
      liveUrl: 'https://jmankar8168.github.io/Jennifer_Portfolio/',
      githubUrl: 'https://github.com/jmankar8168/Jennifer_Portfolio',
      metrics: 'Award-winning Editorial Aesthetic'
    }
  ];

  const categories = ['All', 'Design Systems', 'AI & Analytics', 'SaaS Systems', 'Brand & Web'];

  const filtered = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="editorial-page-shell">
      <Nav />

      {/* Page Header */}
      <div className="page-editorial-banner">
        <div className="header-meta-tag">
          <Sparkles size={13} />
          <span>ARCHIVE OF SELECTED WORKS</span>
        </div>
        <h1 className="page-main-headline">
          Selected <span className="font-script">Work</span>
        </h1>
        <p className="page-banner-subtext">
          A curated portfolio of high-impact digital applications, design systems, and creative experiments built with modern frontend architecture and thoughtful UX.
        </p>

        {/* Filter Pills */}
        <div className="editorial-category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`editorial-filter-pill ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <MarqueeTicker />

      {/* Projects Showcase with Varying Asymmetrical Compositions */}
      <main className="work-archive-container">
        <div className="work-archive-grid">
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className={`work-archive-card ${index % 3 === 0 ? 'card-wide' : 'card-compact'}`}
            >
              <div className="work-card-media-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="work-card-image"
                />
                <div className="work-card-hover-badge">
                  <span>Explore Case Study ↗</span>
                </div>
              </div>

              <div className="work-card-details">
                <div className="work-card-top-row">
                  <span className="work-card-cat">{project.category}</span>
                  <span className="work-card-year">{project.year}</span>
                </div>

                <h2 className="work-card-title">{project.title}</h2>
                <p className="work-card-role">Role: {project.role}</p>
                <p className="work-card-desc">{project.description}</p>

                <div className="work-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="work-tag-item">{tag}</span>
                  ))}
                </div>

                <div className="work-card-links-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="work-link-btn live"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="work-link-btn github"
                  >
                    <span>GitHub Code</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <GiantFooter />
    </div>
  );
}
