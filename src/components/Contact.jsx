import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MapPin, Calendar, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "alex.rivera.dev@example.com";

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
    <section id="contact" className="section-padding bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> GET IN TOUCH
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, a job opportunity, or just want to connect? Send a message below!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card glass-card">
            <h3>Contact Information</h3>
            <p className="contact-info-sub">
              I am currently open to full-time roles, freelance projects, and tech consulting.
            </p>

            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon"><Mail size={20} /></div>
                <div>
                  <span className="method-label">Direct Email</span>
                  <div className="email-copy-wrapper">
                    <span className="method-val">{email}</span>
                    <button onClick={handleCopyEmail} className="copy-btn" title="Copy email">
                      {copiedEmail ? <Check size={14} className="green" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon"><MapPin size={20} /></div>
                <div>
                  <span className="method-label">Location</span>
                  <span className="method-val">San Francisco, CA (Remote Worldwide)</span>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon"><Calendar size={20} /></div>
                <div>
                  <span className="method-label">Response Time</span>
                  <span className="method-val">Within 24 Hours</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <span className="social-heading">Follow & Connect:</span>
              <div className="social-btn-group">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                  <GithubIcon size={16} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card glass-card">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon"><Check size={32} /></div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll review your inquiry and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Hiring"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="form-input textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
