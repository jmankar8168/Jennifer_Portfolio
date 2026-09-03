import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Terminal, Play, RotateCcw, PartyPopper, Sliders } from 'lucide-react';

export default function InteractiveLab() {
  const [promptInput, setPromptInput] = useState('Build a Vite + React portfolio website with dark mode');
  const [isGenerating, setIsGenerating] = useState(false);
  const [outputResult, setOutputResult] = useState(
    '// Ready to generate code snippet...\n// Click "Generate Code" above.'
  );

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setOutputResult('// Synthesizing architecture...\n// Initializing Vite + React components...');

    setTimeout(() => {
      setOutputResult(
`// Output generated for prompt: "${promptInput}"
import React from 'react';

export default function CustomPortfolio() {
  return (
    <div className="portfolio-hero">
      <h1>Built with Vite + React + JavaScript</h1>
      <p>Loaded instantly in sub-seconds with 0 bundle bloat!</p>
    </div>
  );
}`
      );
      setIsGenerating(false);
      handleConfetti();
    }, 1200);
  };

  return (
    <section id="lab" className="section-padding bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> LIVE EXPERIMENTS
          </span>
          <h2 className="section-title">
            Interactive <span className="gradient-text">Developer Sandbox</span>
          </h2>
          <p className="section-subtitle">
            Try out live interactive widgets embedded right inside this portfolio!
          </p>
        </div>

        <div className="lab-grid">
          {/* AI Sandbox Card */}
          <div className="lab-card glass-card">
            <div className="lab-card-header">
              <Terminal size={20} className="lab-icon" />
              <h3>AI Code Generator Simulator</h3>
            </div>

            <div className="lab-input-group">
              <label className="lab-label">Prompt Input:</label>
              <input 
                type="text" 
                value={promptInput} 
                onChange={(e) => setPromptInput(e.target.value)}
                className="lab-input"
                placeholder="Type a feature prompt..."
              />
            </div>

            <button 
              onClick={handleGenerate} 
              disabled={isGenerating}
              className="btn btn-primary lab-btn"
            >
              {isGenerating ? (
                <>Generating Code...</>
              ) : (
                <>
                  <Play size={16} /> Generate Code Snippet
                </>
              )}
            </button>

            <div className="lab-output-box">
              <pre className="lab-output-text">{outputResult}</pre>
            </div>
          </div>

          {/* Celebration & Micro-Interactions Card */}
          <div className="lab-card glass-card">
            <div className="lab-card-header">
              <PartyPopper size={20} className="lab-icon pink" />
              <h3>Interactive Celebrations & Controls</h3>
            </div>

            <p className="lab-desc">
              Test dynamic canvas animations and celebrate launching this Vite + React portfolio!
            </p>

            <div className="lab-action-boxes">
              <button onClick={handleConfetti} className="btn btn-secondary conf-btn">
                <PartyPopper size={18} /> Trigger Confetti Explosion 🎉
              </button>
            </div>

            <div className="lab-metrics-preview glass-card">
              <span className="lab-metric-title">Live Server Response</span>
              <div className="lab-status-indicator">
                <span className="dot-active"></span>
                <span>200 OK — 14ms Latency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
