import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Terminal, Play, PartyPopper } from 'lucide-react';

export default function InteractiveLab() {
  const [promptInput, setPromptInput] = useState('Build a Vite + React portfolio website with Jenni aesthetic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [outputResult, setOutputResult] = useState(
    '// Ready to generate code snippet...\n// Click "Generate Code" above.'
  );

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
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

export default function JenniPortfolio() {
  return (
    <div className="portfolio-hero" style={{ background: '#ff2d78', padding: '40px' }}>
      <h1 style={{ fontFamily: 'Pacifico, cursive', color: '#1a36fa' }}>What the F*lio?</h1>
      <p style={{ color: '#ffffff' }}>Loaded instantly in sub-seconds with zero bundle bloat!</p>
    </div>
  );
}`
      );
      setIsGenerating(false);
      handleConfetti();
    }, 900);
  };

  return (
    <section id="lab" className="section-padding">
      <div className="container">
        <div className="section-wrapper">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} /> PLAYGROUND
            </span>
            <h2 className="section-title">
              Interactive <span className="gradient-text">Dev Sandbox</span>
            </h2>
            <p className="section-subtitle">
              Try out live code synthesis and confetti triggers in this interactive browser sandbox.
            </p>
          </div>

          <div className="lab-grid">
            <div className="lab-card">
              <h3 className="lab-title">
                <Terminal size={20} color="#1a36fa" /> Code Synthesis Engine
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Type an idea below to simulate AI code generation:
              </p>
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="lab-input"
                placeholder="Describe a component..."
              />
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={handleGenerate} disabled={isGenerating} className="lab-btn">
                  <Play size={16} /> {isGenerating ? 'Generating...' : 'Generate Code'}
                </button>
                <button
                  onClick={handleConfetti}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.6rem',
                    background: '#ffe033',
                    color: '#111111',
                    border: '2.5px solid #111111',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '4px 4px 0px #111111',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <PartyPopper size={16} /> Celebrate! 🎉
                </button>
              </div>
            </div>

            <div className="terminal-box">
              {outputResult}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
