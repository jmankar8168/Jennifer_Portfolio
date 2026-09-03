import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Full-Stack Architect',
      company: 'InnovateX AI Labs',
      location: 'San Francisco, CA',
      period: '2023 — Present',
      description: 'Lead engineering team building real-time AI dashboards and high-throughput data processing pipelines with React, Node.js, and Cloud native services.',
      achievements: [
        'Reduced web bundle load times by 45% through Vite build optimization and code splitting.',
        'Architected AI prompt management middleware handling 2M+ requests per month.',
        'Mentored 6 junior/mid-level engineers in modern JavaScript standards.'
      ]
    },
    {
      role: 'Lead Frontend Engineer',
      company: 'Apex Digital Studio',
      location: 'Remote',
      period: '2021 — 2023',
      description: 'Spearheaded frontend architecture for enterprise SaaS clients using React, state management, and high-performance WebGL canvas components.',
      achievements: [
        'Built custom design system component library adopted across 12 client products.',
        'Improved Google Core Web Vitals LCP score from 3.8s to 0.9s across flagship apps.'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'CloudSphere Solutions',
      location: 'New York, NY',
      period: '2019 — 2021',
      description: 'Developed RESTful microservices and single-page web applications for fintech & e-commerce clients.',
      achievements: [
        'Engineered secure OAuth2 authentication flow for over 150,000 active accounts.',
        'Automated CI/CD deployment pipelines using GitHub Actions.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">CAREER PATH</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A track record of leading web application initiatives and delivering engineering excellence.
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item glass-card">
              <div className="timeline-badge">
                <Briefcase size={18} />
              </div>

              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span className="timeline-location">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              <div className="timeline-achievements">
                <span className="achieve-title"><Award size={14} /> Key Highlights:</span>
                <ul>
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
