import React from 'react';
import { X, Download, MapPin } from 'lucide-react';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="cv-modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="cv-close-btn" aria-label="Close CV">
          <X size={20} />
        </button>

        <div className="cv-header">
          <div className="cv-title-group">
            <h2 className="cv-name">Jennifer Mankar (Jenni)</h2>
            <span className="cv-role">Product Designer &amp; Creative Developer</span>
            <span className="cv-location"><MapPin size={13} /> Remote / Worldwide</span>
          </div>

          <button
            onClick={() => alert("CV Downloaded! (Sample PDF triggered)")}
            className="cv-download-btn"
          >
            <Download size={15} />
            <span>Download PDF</span>
          </button>
        </div>

        <div className="cv-body-scroll">
          {/* Summary */}
          <section className="cv-section">
            <h4 className="cv-sec-title">Summary</h4>
            <p className="cv-text">
              Product designer &amp; creative technologist with a background in architectural spatial thinking. Specializing in high-impact web apps, design systems, and art-directed digital rooms that captivate audiences.
            </p>
          </section>

          {/* Experience */}
          <section className="cv-section">
            <h4 className="cv-sec-title">Experience</h4>
            <div className="cv-job-item">
              <div className="job-top">
                <span className="job-role">Senior Product Designer &amp; Frontend Lead</span>
                <span className="job-dates">2023 &ndash; Present</span>
              </div>
              <span className="job-company">Studio Jenni &bull; Independent Practice</span>
              <p className="cv-text">
                Partnering with tech startups and venture brands to design end-to-end web products, interactive prototypes, and design systems.
              </p>
            </div>

            <div className="cv-job-item">
              <div className="job-top">
                <span className="job-role">Lead UI/UX &amp; Design Systems Engineer</span>
                <span className="job-dates">2021 &ndash; 2023</span>
              </div>
              <span className="job-company">Apex Digital Studio</span>
              <p className="cv-text">
                Spearheaded design token synchronization between Figma and React codebases, boosting delivery velocity by 35%.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="cv-section">
            <h4 className="cv-sec-title">Expertise</h4>
            <div className="cv-skills-chips">
              <span>UI/UX Design</span>
              <span>Design Systems</span>
              <span>React 18 &amp; Vite</span>
              <span>Motion &amp; Interaction</span>
              <span>Art Direction</span>
              <span>Figma Tokens</span>
              <span>HTML5 Canvas</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
