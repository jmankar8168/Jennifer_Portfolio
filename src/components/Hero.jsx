import React from 'react';
import { ArrowRight, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="bg-glow-orb glow-cyan" style={{ top: '-10%', left: '15%', width: '400px', height: '400px' }}></div>
      <div className="bg-glow-orb glow-purple" style={{ top: '20%', right: '10%', width: '450px', height: '450px' }}></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>Available for New Projects & Consulting</span>
          </div>

          <h1 className="hero-title">
            Architecting <span className="gradient-text">Scalable Web Apps</span> & AI Solutions
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Alex Rivera</strong>. A Senior Full-Stack Developer specializing in building modern web applications, high-performance UI systems, and cloud-native backend services with React, JavaScript, and Node.js.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk <Mail size={18} />
            </a>
          </div>

          <div className="social-links-row">
            <span className="social-label">Connect:</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:alex.rivera.dev@example.com" className="social-icon-btn" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-code-card glass-card">
            <div className="code-card-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-title">
                <Terminal size={14} /> DeveloperProfile.js
              </div>
            </div>
            <div className="code-card-body">
              <pre className="code-content">
                <code>
<span className="code-keyword">const</span> developer = &#123;{'\n'}
  <span className="code-property">name</span>: <span className="code-string">'Alex Rivera'</span>,{'\n'}
  <span className="code-property">role</span>: <span className="code-string">'Senior Full-Stack Architect'</span>,{'\n'}
  <span className="code-property">location</span>: <span className="code-string">'San Francisco, CA'</span>,{'\n'}
  <span className="code-property">coreSkills</span>: [<span className="code-string">'React'</span>, <span className="code-string">'JavaScript'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'Vite'</span>, <span className="code-string">'AI Integration'</span>],{'\n'}
  <span className="code-property">passions</span>: [<span className="code-string">'Clean Code'</span>, <span className="code-string">'UI/UX Aesthetics'</span>, <span className="code-string">'Performance'</span>],{'\n'}
  <span className="code-property">availability</span>: <span className="code-boolean">true</span>{'\n'}
&#125;;{'\n'}{'\n'}
<span className="code-keyword">async function</span> <span className="code-func">buildGreatProducts</span>(ideas) &#123;{'\n'}
  <span className="code-keyword">return await</span> developer.<span className="code-func">transformIntoReality</span>(ideas);{'\n'}
&#125;
                </code>
              </pre>
            </div>
          </div>

          <div className="hero-stats-grid">
            <div className="stat-box glass-card">
              <span className="stat-number gradient-text">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-box glass-card">
              <span className="stat-number gradient-text">40+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-box glass-card">
              <span className="stat-number gradient-text">99.9%</span>
              <span className="stat-label">System Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
