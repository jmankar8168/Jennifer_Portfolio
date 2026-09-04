import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "jmankar8168@example.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-wrapper">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">
              <Sparkles size={14} /> GET IN TOUCH
            </span>
            <h2 className="section-title">
              Let's Build Something <span className="gradient-text">Spectacular</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind, an exciting role, or just want to talk design? Send a message!
            </p>
          </div>

          <div className="contact-grid">
            <div>
              <h3 className="contact-info-title">Say Hello! 👋</h3>
              <p className="contact-info-text">
                I'm always excited to collaborate on groundbreaking web products, creative design systems, and delightful digital experiments.
              </p>

              <div className="contact-pill-item" onClick={handleCopyEmail}>
                <Mail size={20} color="#ff2d78" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 700 }}>EMAIL ME</div>
                  <div style={{ fontWeight: 800, color: '#111111', fontSize: '0.95rem' }}>{email}</div>
                </div>
                {copiedEmail ? <Check size={18} color="#059669" /> : <Copy size={18} color="#6b7280" />}
              </div>

              <div className="contact-pill-item">
                <MapPin size={20} color="#1a36fa" />
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 700 }}>LOCATION</div>
                  <div style={{ fontWeight: 800, color: '#111111', fontSize: '0.95rem' }}>Remote / Worldwide</div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jennifer Smith"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jennifer@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey Jennifer, I'd love to chat about..."
                  required
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="submit-btn">
                {submitted ? (
                  <>
                    <Check size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message 🚀
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
