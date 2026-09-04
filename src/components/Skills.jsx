import React, { useState } from 'react';
import { Code2, Server, Brain, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend Tech', icon: <Code2 size={16} /> },
    { id: 'backend', name: 'Backend & Cloud', icon: <Server size={16} /> },
    { id: 'ai', name: 'AI & Tools', icon: <Brain size={16} /> },
  ];

  const skillsData = [
    { name: 'JavaScript (ES6+)', level: 95, category: 'frontend', highlight: true },
    { name: 'React.js', level: 92, category: 'frontend', highlight: true },
    { name: 'Vite / Tooling', level: 90, category: 'frontend' },
    { name: 'Modern CSS3 & Animations', level: 96, category: 'frontend' },
    { name: 'Node.js & Express', level: 88, category: 'backend', highlight: true },
    { name: 'REST & GraphQL APIs', level: 85, category: 'backend' },
    { name: 'PostgreSQL & Database Design', level: 82, category: 'backend' },
    { name: 'Generative AI API Integration', level: 88, category: 'ai', highlight: true },
    { name: 'Git & Collaborative Workflows', level: 92, category: 'ai' },
    { name: 'Web Performance & Core Web Vitals', level: 90, category: 'frontend' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> TECH ARSENAL
            </span>
            <h2 className="section-title">
              Technologies & <span className="gradient-text">Mastered Skills</span>
            </h2>
            <p className="section-subtitle">
              A comprehensive view of my technical skills, frontend mastery, and developer toolkit.
            </p>
          </div>

          <div className="skills-category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`skill-card ${skill.highlight ? 'featured' : ''}`}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-badge">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
