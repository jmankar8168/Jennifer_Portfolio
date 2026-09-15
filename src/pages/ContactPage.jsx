import React, { useState } from 'react';
import Nav from '../components/Nav';
import MarqueeTicker from '../components/MarqueeTicker';
import GiantFooter from '../components/GiantFooter';
import { Mail, Send, Check, Copy, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'jmankar8168@gmail.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', projectType: 'UI/UX Design', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="editorial-page-shell">
      <Nav />

      {/* Page Header */}
      <div className="page-editorial-banner">
        <div className="header-meta-tag">
          <Sparkles size={13} />
          <span>START A CONVERSATION</span>
        </div>
        <h1 className="page-main-headline">
          Let's create something <br />
          <span className="font-serif italic font-normal">worth</span>{' '}
          <span className="font-script">remembering</span>.
        </h1>
        <p className="page-banner-subtext">
          Available for select collaborations, design system consulting, full product designs, and engineering inquiries.
        </p>
      </div>

      <MarqueeTicker />

      <main className="contact-page-container">
        <div className="contact-editorial-layout">
          {/* Left Column: Direct Info & Availability Status */}
          <div className="contact-info-panel">
            <div className="availability-card">
              <div className="status-row">
                <span className="status-indicator-dot"></span>
                <span className="status-label">CURRENT AVAILABILITY</span>
              </div>
              <h3 className="availability-title">Open for 2026 Inquiries</h3>
              <p className="availability-desc">
                Currently taking on select full-time, contract, and freelance design &amp; frontend opportunities.
              </p>
            </div>

            <div className="direct-reach-box">
              <h4 className="reach-heading">Direct Details</h4>

              <div className="reach-item" onClick={handleCopyEmail}>
                <div className="reach-icon"><Mail size={18} /></div>
                <div className="reach-text">
                  <span className="label">EMAIL ADDRESS</span>
                  <span className="value">{email}</span>
                </div>
                <span className="copy-action">
                  {copiedEmail ? <Check size={16} color="#788554" /> : <Copy size={16} />}
                </span>
              </div>

              <div className="reach-item static">
                <div className="reach-icon"><MapPin size={18} /></div>
                <div className="reach-text">
                  <span className="label">LOCATION</span>
                  <span className="value">Remote / Worldwide</span>
                </div>
              </div>
            </div>

            <div className="social-links-panel">
              <span className="social-label">SOCIAL PROFILES &amp; CODE:</span>
              <div className="social-links-list">
                <a href="https://github.com/jmankar8168" target="_blank" rel="noreferrer" className="social-btn">
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="social-btn">
                  <span>Behance</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Clean Contact Form */}
          <div className="contact-form-panel">
            <div className="form-card-tape"></div>
            <h2 className="form-title">Send an Inquiry</h2>
            <p className="form-subtitle">Fill out the brief form below and I'll get back to you within 24&ndash;48 hours.</p>

            <form onSubmit={handleSubmit} className="minimal-contact-form">
              <div className="form-field-group">
                <label className="field-label">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  required
                  className="editorial-input"
                />
              </div>

              <div className="form-field-group">
                <label className="field-label">Your Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  required
                  className="editorial-input"
                />
              </div>

              <div className="form-field-group">
                <label className="field-label">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="editorial-select"
                >
                  <option value="UI/UX Design">UI/UX &amp; Product Design</option>
                  <option value="Design System">Design System Architecture</option>
                  <option value="Frontend Development">Frontend Development (React/Vite)</option>
                  <option value="Full Project">Full Product Design &amp; Code</option>
                  <option value="Other">Other Collaboration</option>
                </select>
              </div>

              <div className="form-field-group">
                <label className="field-label">Project Details or Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your project, timeline, and goals..."
                  rows={5}
                  required
                  className="editorial-textarea"
                />
              </div>

              <button type="submit" className="editorial-submit-btn">
                {submitted ? (
                  <>
                    <Check size={18} />
                    <span>Inquiry Sent Successfully! &#10022;</span>
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      <GiantFooter />
    </div>
  );
}
