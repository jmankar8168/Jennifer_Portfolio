import React, { useState } from 'react';
import { Code2, Server, Wrench, Brain, CheckCircle2 } from 'lucide-react';

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
    { name: 'Vite / Webpack', level: 90, category: 'frontend' },
    { name: 'HTML5 & Modern CSS3', level: 96, category: 'frontend' },
    { name: 'Node.js & Express', level: 88, category: 'backend', highlight: true },
    { name: 'REST & GraphQL APIs', level: 85, category: 'backend' },
    { name: 'PostgreSQL & MongoDB', level: 82, category: 'backend' },
    { name: 'AI LLM API Integration', level: 88, category: 'ai', highlight: true },
    { name: 'Git & GitHub Workflows', level: 92, category: 'ai' },
    { name: 'Web Performance & CWV', level: 90, category: 'frontend' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">MY EXPERTISE</span>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Mastered Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical stack and proficiency levels across modern web development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Progress Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className={`skill-card glass-card ${skill.highlight ? 'featured' : ''}`}>
              <div className="skill-info">
                <span className="skill-name">
                  <CheckCircle2 size={16} className="skill-check" />
                  {skill.name}
                </span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
