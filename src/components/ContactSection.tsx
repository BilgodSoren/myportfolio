import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Send, 
  CheckCircle2, 
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyText: (text: string, label: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyText }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // Safe fallback if canvas not available
      }
    }, 600);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div>
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something Exceptional
          </h2>
          <p className="section-subtitle">
            Whether you have an open Frontend / React developer role, a freelance inquiry, or just want to discuss web engineering — my inbox is always open.
          </p>
        </div>

        <div className="contact-box">
          {/* Left Column: Direct Info */}
          <div className="contact-info-left">
            <h2>Let's talk about your next project.</h2>
            <p>
              Available for full-time frontend engineering roles and global remote contracts. Let's connect and create intuitive, high-performance web products together.
            </p>

            <div className="contact-direct-items">
              {/* Email Button */}
              <button
                type="button"
                className="contact-item-btn"
                onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#EEF2FF',
                    color: '#4F46E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact-item-label">Direct Email</div>
                    <div className="contact-item-val">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <span className="contact-copy-badge">
                  <Copy size={12} style={{ marginRight: '4px' }} /> Copy
                </span>
              </button>

              {/* Phone Button */}
              <button
                type="button"
                className="contact-item-btn"
                onClick={() => onCopyText(PERSONAL_INFO.phone, 'Phone number')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#ECFDF5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="contact-item-label">Phone / WhatsApp</div>
                    <div className="contact-item-val">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <span className="contact-copy-badge">
                  <Copy size={12} style={{ marginRight: '4px' }} /> Copy
                </span>
              </button>

              {/* Location Card */}
              <div className="contact-item-btn" style={{ cursor: 'default' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#F0F9FF',
                    color: '#0284C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-val">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: 700 }}>
                  Remote Ready
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.88rem', padding: '0.6rem 1.2rem' }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.88rem', padding: '0.6rem 1.2rem' }}
              >
                <LinkedinIcon size={16} style={{ color: '#0A66C2' }} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            {submitted ? (
              <div style={{
                background: '#ECFDF5',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '16px',
                padding: '2.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: '#10B981',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#064E3B' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: '#065F46', fontSize: '0.95rem', maxWidth: '380px' }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>. I will review your note and respond back to <strong>{formData.email}</strong> promptly!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ marginTop: '0.5rem', background: '#FFFFFF' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject / Project Type</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Frontend Developer Role / Web Project"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Tell me about your team, tech stack, or project goals..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="submit-btn"
                >
                  <Send size={16} />
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
