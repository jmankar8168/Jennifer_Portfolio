import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function SelectedWorkPreview() {
  const selectedProjects = [
    {
      id: 1,
      title: 'VisionSync Design System & Component Library',
      role: 'Design Systems · React 18 · Figma Tokens',
      year: '2026',
      description: 'Comprehensive, accessible enterprise design system featuring 60+ interactive components, foundational design tokens, and live Storybook integration.',
      image: '/project-ai.jpg',
      link: '/work',
      aspect: 'featured'
    },
    {
      id: 2,
      title: 'Aurora AI Predictive Analytics Suite',
      role: 'UI/UX Design · Full-Stack React',
      year: '2026',
      description: 'Futuristic intelligence platform displaying real-time predictive sales trajectories, automated anomaly warnings, and smart visual telemetry.',
      image: '/project-ai.jpg',
      link: '/work',
      aspect: 'standard'
    },
    {
      id: 3,
      title: 'Synapse Flow Microservice Automation Engine',
      role: 'Interactive UI · Visual Canvas Workflow',
      year: '2025',
      description: 'Visual node graph orchestration tool for cloud architectures with real-time terminal tracing and webhook synchronization.',
      image: '/project-saas.jpg',
      link: '/work',
      aspect: 'standard'
    }
  ];

  return (
    <section className="selected-work-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="editorial-section-header">
          <div className="header-meta-tag">
            <Sparkles size={13} />
            <span>CURATED PORTFOLIO HIGHLIGHTS</span>
          </div>
          <div className="header-flex-row">
            <h2 className="editorial-title">
              Selected <span className="font-script">Projects</span>
            </h2>
            <Link to="/work" className="view-all-desktop-link">
              <span>View All Work</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="editorial-subtitle">
            A selective collection of digital products, design frameworks, and interactive web tools crafted with precision.
          </p>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="editorial-projects-grid">
          {selectedProjects.map((proj, idx) => (
            <Link
              key={proj.id}
              to={proj.link}
              className={`editorial-project-card ${proj.aspect}`}
            >
              <div className="project-card-media-wrapper">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-card-image"
                />
                <div className="project-card-overlay">
                  <span className="view-case-study-badge">
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              <div className="project-card-info">
                <div className="project-meta-top">
                  <span className="project-category-pill">{proj.role}</span>
                  <span className="project-year-pill">{proj.year}</span>
                </div>
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-desc">{proj.description}</p>
                <div className="project-card-cta">
                  <span>Explore Project Details</span>
                  <span className="cta-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Work CTA Button */}
        <div className="view-all-center-row">
          <Link to="/work" className="editorial-large-btn">
            <span>View All Work & Case Studies</span>
            <span className="arrow-icon">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
