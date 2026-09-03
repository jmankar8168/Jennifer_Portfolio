import React, { useState } from 'react';
import { ExternalLink, Sparkles, Eye, X, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Aurora AI Analytics Platform',
      category: 'ai',
      image: '/project-ai.jpg',
      description: 'An AI-powered predictive analytics dashboard rendering real-time business insights, predictive sales charts, and automated anomaly alerts.',
      tags: ['React', 'JavaScript', 'Vite', 'Recharts', 'AI API'],
      liveUrl: 'https://example.com/aurora-ai',
      githubUrl: 'https://github.com/example/aurora-ai',
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
      githubUrl: 'https://github.com/example/synapse-flow',
      featured: true,
      metrics: '1.3s average workflow execution time'
    },
    {
      id: 3,
      title: 'Vanguard Luxury E-Commerce',
      category: 'web',
      image: 'gradient-3',
      description: 'Ultra-fast luxury retail web app featuring 3D product preview, smooth glassmorphism cart drawer, and instant checkout flow.',
      tags: ['React', 'Vite', 'Vanilla CSS', 'Stripe API'],
      liveUrl: 'https://example.com/vanguard-shop',
      githubUrl: 'https://github.com/example/vanguard-shop',
      featured: false,
      metrics: '100/100 Lighthouse Performance Score'
    },
    {
      id: 4,
      title: 'CyberPulse Real-Time Monitoring',
      category: 'saas',
      image: 'gradient-4',
      description: 'Low-latency server telemetry and security audit suite displaying live websocket metric logs and interactive threat heatmaps.',
      tags: ['Node.js', 'Express', 'JavaScript', 'Tailwind/CSS'],
      liveUrl: 'https://example.com/cyberpulse',
      githubUrl: 'https://github.com/example/cyberpulse',
      featured: false,
      metrics: 'Processes 50,000+ events/sec'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> RECENT WORK
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Products</span>
          </h2>
          <p className="section-subtitle">
            Explore a selection of web applications, AI platforms, and SaaS products I have designed and engineered.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-tabs">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI & Analytics
          </button>
          <button 
            className={`filter-btn ${filter === 'saas' ? 'active' : ''}`}
            onClick={() => setFilter('saas')}
          >
            SaaS Platforms
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Applications
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-img-wrapper">
                {project.image.startsWith('/') ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <div className={`project-img-placeholder ${project.image}`}>
                    <Layers size={48} className="placeholder-icon" />
                  </div>
                )}
                <div className="project-overlay">
                  <button 
                    className="overlay-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={18} /> Quick View
                  </button>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="project-metrics">{project.metrics}</span>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="icon-link" title="Code">
                      <GithubIcon size={18} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="icon-link" title="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <X size={20} />
              </button>

              <div className="modal-body">
                {selectedProject.image.startsWith('/') ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
                ) : (
                  <div className={`modal-img-placeholder ${selectedProject.image}`}>
                    <Layers size={64} />
                  </div>
                )}

                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-desc">{selectedProject.description}</p>

                <div className="modal-tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Launch Live Demo <ExternalLink size={16} />
                  </a>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    Source Code <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
