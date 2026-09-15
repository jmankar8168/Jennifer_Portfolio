import React, { useState } from 'react';

export default function ProcessSection() {
  const [activeNote, setActiveNote] = useState(null);

  const toggleNote = (id) => {
    setActiveNote(prev => (prev === id ? null : id));
  };

  return (
    <section id="process" className="namrata-process-section">
      <div className="section-title-wrap">
        <h2 className="section-heading-blue">
          ANSWER BEFORE WE STARTS <span className="eyes-emoji">&#128064;</span>
        </h2>
      </div>

      {/* Spatial Asymmetrical Board with Conversational Cards */}
      <div className="process-spatial-board">
        {/* Card 1: Gray Dotted - What do you need from me? */}
        <div
          className={`note-card note-gray-dotted ${activeNote === 1 ? 'lifted' : ''}`}
          onClick={() => toggleNote(1)}
        >
          <div className="note-card-top">
            <h4 className="note-question">What do you need from me?</h4>
            <span className="note-close-icon">&#10005;</span>
          </div>
          <p className="note-answer">
            Your goal, brand details, references, content, and what you want users to do. I'll shape the rest.
          </p>
        </div>

        {/* Card 2: Forest Green - Do you build in Framer? */}
        <div
          className={`note-card note-forest-green ${activeNote === 2 ? 'lifted' : ''}`}
          onClick={() => toggleNote(2)}
        >
          <div className="note-card-top">
            <h4 className="note-question">Do you build in Framer?</h4>
            <span className="note-arrow-icon">&#8249;</span>
          </div>
          <p className="note-answer">
            Yes, I design and build clean Framer &amp; React websites that are responsive, smooth, and ready to publish.
          </p>
        </div>

        {/* Card 3: Orange - How fast can we start? */}
        <div
          className={`note-card note-vibrant-orange ${activeNote === 3 ? 'lifted' : ''}`}
          onClick={() => toggleNote(3)}
        >
          <div className="note-card-top">
            <h4 className="note-question">How fast can we start?</h4>
            <span className="note-bullet">&#8226;</span>
          </div>
          <p className="note-answer">
            Usually within 3&ndash;5 business days once our scope and milestones are aligned.
          </p>
        </div>

        {/* Card 4: Soft Lilac Pill - Do you only design visuals? */}
        <div
          className={`note-card note-lilac-pill ${activeNote === 4 ? 'lifted' : ''}`}
          onClick={() => toggleNote(4)}
        >
          <span className="note-question">Do you only design visuals?</span>
          <span className="note-arrow-right">&#8594;</span>
        </div>

        {/* Card 5: Cobalt Blue - What can you design? */}
        <div
          className={`note-card note-cobalt-blue ${activeNote === 5 ? 'lifted' : ''}`}
          onClick={() => toggleNote(5)}
        >
          <div className="note-card-top">
            <h4 className="note-question">What can you design?</h4>
            <span className="note-close-icon">&#10005;</span>
          </div>
          <p className="note-answer">
            Websites, apps, dashboards, landing pages and brand visuals. Basically the digital stuff people judge you by first.
          </p>
        </div>

        {/* Small Illustrated Accents */}
        {/* Sushi Roll */}
        <div className="doodle-item doodle-sushi">
          <svg viewBox="0 0 50 50" width="40" height="40">
            <ellipse cx="25" cy="25" rx="20" ry="16" fill="#111" />
            <ellipse cx="25" cy="25" rx="14" ry="10" fill="#ffffff" />
            <ellipse cx="25" cy="25" rx="7" ry="5" fill="#f97316" />
          </svg>
        </div>

        {/* Green Cash / Dollar Bills */}
        <div className="doodle-item doodle-cash">
          <svg viewBox="0 0 60 50" width="50" height="42">
            <rect x="6" y="8" width="34" height="20" rx="3" fill="#86efac" stroke="#111" strokeWidth="2" transform="rotate(-10 23 18)" />
            <rect x="20" y="16" width="34" height="20" rx="3" fill="#4ade80" stroke="#111" strokeWidth="2" transform="rotate(10 37 26)" />
            <text x="36" y="30" fontSize="12" fontWeight="900" fill="#111" textAnchor="middle">$</text>
          </svg>
        </div>

        {/* Flower in Vase */}
        <div className="doodle-item doodle-flower">
          <svg viewBox="0 0 50 70" width="42" height="60">
            {/* Flower petals */}
            <circle cx="25" cy="18" r="8" fill="#f472b6" stroke="#111" strokeWidth="2" />
            <circle cx="25" cy="18" r="3" fill="#fde047" />
            <line x1="25" y1="26" x2="25" y2="52" stroke="#15803d" strokeWidth="3" />
            <rect x="16" y="46" width="18" height="22" rx="4" fill="#1e293b" />
          </svg>
        </div>
      </div>
    </section>
  );
}
