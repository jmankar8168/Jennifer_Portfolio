import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function WorksSection() {
  const projects = [
    {
      id: 1,
      title: 'Re-imagining TPGs',
      category: 'UX Architecture • Mobile App',
      year: '2026',
      image: '/project-ai.jpg',
      tag: 'Featured Case Study',
      rotate: '-2.5deg',
      link: 'https://storybook-static-mauve-pi.vercel.app'
    },
    {
      id: 2,
      title: 'Circle',
      category: 'Brand Strategy • Web Experience',
      year: '2026',
      image: '/project-saas.jpg',
      tag: 'Art Direction',
      rotate: '2deg',
      link: 'https://jmankar8168.github.io/Jennifer_Portfolio/'
    },
    {
      id: 3,
      title: 'Pulse App',
      category: 'Product Design • iOS Widgets',
      year: '2025',
      image: '/project-ai.jpg',
      tag: 'Design System',
      rotate: '-1deg',
      link: 'https://github.com/jmankar8168/Jennifer_Portfolio'
    }
  ];

  return (
    <section id="works" className="namrata-works-section">
      <div className="section-title-wrap">
        <h2 className="section-heading-blue">
          PROJECTS THAT TELL STORIES <span className="eyes-emoji">&#128064;</span>
        </h2>
      </div>

      <div className="pinned-projects-deck">
        {/* Pinned Card 1: Re-imagining TPGs */}
        <div className="pinned-project-card card-tp-gs">
          <div className="card-top-tape-strip"></div>
          <div className="browser-window-header">
            <span className="window-dot dot-red"></span>
            <span className="window-dot dot-yellow"></span>
            <span className="window-dot dot-green"></span>
            <span className="window-title-tag">tpg-case-study.fig</span>
          </div>
          <div className="project-media-box">
            <img src="/project-ai.jpg" alt="Re-imagining TPGs" className="project-thumbnail-img" />
          </div>
          <div className="project-caption-footer">
            <span className="project-title-bold">Re-imagining TPGs</span>
            <span className="project-meta-light">UX System • 2026</span>
          </div>
        </div>

        {/* Pinned Card 2: Circle */}
        <div className="pinned-project-card card-circle">
          <div className="paperclip-graphic-accent">
            <svg viewBox="0 0 30 50" width="24" height="40">
              <path d="M10 15 L10 38 Q10 44 16 44 Q22 44 22 38 L22 10 Q22 4 14 4 Q6 4 6 12 L6 34" stroke="#ef4444" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div className="browser-window-header">
            <span className="window-dot dot-red"></span>
            <span className="window-dot dot-yellow"></span>
            <span className="window-dot dot-green"></span>
            <span className="window-title-tag">circle-brand.live</span>
          </div>
          <div className="project-media-box">
            <img src="/project-saas.jpg" alt="Circle" className="project-thumbnail-img" />
          </div>
          <div className="project-caption-footer">
            <span className="project-title-bold">Circle</span>
            <span className="project-meta-light">Art Direction • 2026</span>
          </div>
        </div>

        {/* Pinned Card 3: Pulse App */}
        <div className="pinned-project-card card-pulse">
          <div className="yellow-tape-accent"></div>
          <div className="browser-window-header">
            <span className="window-dot dot-red"></span>
            <span className="window-dot dot-yellow"></span>
            <span className="window-dot dot-green"></span>
            <span className="window-title-tag">pulse-app.ios</span>
          </div>
          <div className="project-media-box">
            <img src="/project-ai.jpg" alt="Pulse App" className="project-thumbnail-img" />
          </div>
          <div className="project-caption-footer">
            <span className="project-title-bold">Pulse App</span>
            <span className="project-meta-light">iOS Widgets • 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
