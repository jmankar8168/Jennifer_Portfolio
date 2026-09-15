import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CapabilitiesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const metricBadges = [
    { value: '60+', label: 'UI Tokens & Components', shape: 'flower-1' },
    { value: '100%', label: 'Custom Architecture', shape: 'flower-2' },
    { value: '99%', label: 'Lighthouse Performance', shape: 'flower-3' }
  ];

  const capabilities = [
    {
      num: '01',
      title: 'UI/UX Design',
      tagline: 'End-to-end interface architectures crafted for human clarity.',
      details: 'Information architecture, wireframing, high-fidelity mockups, and friction-free user flows tailored to your brand identity.'
    },
    {
      num: '02',
      title: 'Interaction Design',
      tagline: 'Delightful micro-interactions, responsive states, and fluid motion.',
      details: 'Elevating static layouts into tactile digital environments with purposeful transitions and kinetic responsiveness.'
    },
    {
      num: '03',
      title: 'Design Systems',
      tagline: 'Scalable component libraries built with Figma tokens and React.',
      details: 'Single-source-of-truth token hierarchies, accessible color palettes, typography scales, and modular Storybook repositories.'
    },
    {
      num: '04',
      title: 'User Research',
      tagline: 'Qualitative insights and usability audits that drive conversions.',
      details: 'Competitor benchmarking, persona development, user testing interviews, and heuristic evaluations.'
    },
    {
      num: '05',
      title: 'Prototyping',
      tagline: 'Clickable, interactive models for rapid testing and stakeholder buy-in.',
      details: 'From low-fi conceptual sandboxes to fully functional, stateful React prototypes ready for real user observation.'
    },
    {
      num: '06',
      title: 'Visual Design',
      tagline: 'Signature editorial aesthetics, art direction, and typography.',
      details: 'Curated color palettes, expressive editorial typography, custom vector elements, and standout graphic treatments.'
    },
    {
      num: '07',
      title: 'Frontend Development',
      tagline: 'Pixel-perfect, performance-optimized code engineered with Vite.',
      details: 'Clean React components, semantic HTML5, zero-bloat CSS, and automated CI/CD deployments.'
    }
  ];

  return (
    <section className="capabilities-editorial-section">
      {/* Pinstripe Background Container inspired by Section 3 of Reference 2 */}
      <div className="pinstripe-banner-bg"></div>

      <div className="section-container relative-content">
        <div className="editorial-section-header">
          <div className="header-meta-tag">
            <Sparkles size={13} />
            <span>DISCIPLINES &amp; EXPERTISE</span>
          </div>
          <h2 className="editorial-title">
            Design Approach &amp; <span className="font-script">Capabilities</span>
          </h2>
          <p className="editorial-subtitle">
            A balanced synergy of strategic design thinking, playful details, and modern frontend execution.
          </p>
        </div>

        {/* Flower / Scalloped Petal Badges inspired by Section 3 of Reference 2 ($399, $8, $99 badges) */}
        <div className="petal-badges-row">
          {metricBadges.map((badge, i) => (
            <div key={i} className={`petal-badge-item ${badge.shape}`}>
              <div className="petal-badge-inner">
                <span className="petal-badge-val">{badge.value}</span>
                <span className="petal-badge-lbl">{badge.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities List with clean hover states */}
        <div className="capabilities-list">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.num}
              className={`capability-row ${hoveredIdx === idx ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIdx(idx)}
            >
              <div className="cap-num-col">{cap.num}</div>
              <div className="cap-main-col">
                <h3 className="cap-title">{cap.title}</h3>
                <p className="cap-tagline">{cap.tagline}</p>
                <div className="cap-details-expand">
                  <p>{cap.details}</p>
                </div>
              </div>
              <div className="cap-arrow-col">
                <span className="cap-arrow-badge">&#8594;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
