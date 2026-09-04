import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Aurora AI Analytics Platform',
      category: 'ai',
      image: '/project-ai.jpg',
      description: 'An AI-powered predictive analytics dashboard rendering real-time business insights, predictive sales charts, and automated anomaly alerts.',
      tags: ['React', 'JavaScript', 'Vite', 'Recharts', 'AI API'],
      liveUrl: 'https://example.com/aurora-ai',
      githubUrl: 'https://github.com/jmankar8168/aurora-ai',
      featured: true,
      metrics: 'Over 12,000+ active users daily'
    },
    {
      id: 2,
      title: 'Synapse Flow Developer Engine',
      category: 'saas',
      image: '/project-saas.jpg',
      description: 'Futuristic visual workflow automation editor for cloud microservices, complete with code terminal execution, live node graphs, and WebHook integrations.',
      tags: ['JavaScript', 'React', 'Node.js', 'WebSockets', 'Canvas'],
      liveUrl: 'https://example.com/synapse-flow',
      githubUrl: 'https://github.com/jmankar8168/synapse-flow',
      featured: true,
      metrics: '40% reduction in workflow deployment times'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> FEATURED CREATIONS
            </span>
            <h2 className="section-title">
              Selected <span className="gradient-text">Work & Products</span>
            </h2>
            <p className="section-subtitle">
              High-impact web applications built with modern frontend architecture, intuitive UX, and clean code.
            </p>
          </div>

          <div className="project-filters">
            {['all', 'ai', 'saas'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
              >
                {f === 'all' ? 'All Work' : f === 'ai' ? 'AI & Analytics' : 'SaaS Systems'}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map(proj => (
              <div key={proj.id} className="project-card">
                <div className="project-img-wrapper">
                  <img src={proj.image} alt={proj.title} className="project-img" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.description}</p>
                  <div className="project-tags">
                    {proj.tags.map((t, idx) => (
                      <span key={idx} className="project-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn live"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn github"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
