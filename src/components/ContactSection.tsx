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
import { motion } from 'motion/react';
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
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Connect
          </h2>
          <p className="section-subtitle">
            Feel free to reach out for frontend opportunities, collaborations, or questions.
          </p>
        </motion.div>

        <motion.div 
          className="contact-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column: Direct Info */}
          <div className="contact-info-left">
            <h2>Let's talk about opportunities.</h2>
            <p>
              Available for full-time frontend developer roles and remote opportunities. Let's build clean, high-performance web applications together.
            </p>

            <div className="contact-direct-items">
              {/* Email Button */}
              <motion.button
                type="button"
                className="contact-item-btn"
                onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
              </motion.button>

              {/* Phone Button */}
              <motion.button
                type="button"
                className="contact-item-btn"
                onClick={() => onCopyText(PERSONAL_INFO.phone, 'Phone number')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
              </motion.button>

              {/* Location Badge */}
              <div className="contact-item-btn" style={{ cursor: 'default' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#F1F5F9',
                    color: '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact-item-label">Current Base</div>
                    <div className="contact-item-val">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>
                  Open to Relocation
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
                Connect on Social Networks
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <motion.a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GithubIcon size={18} />
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LinkedinIcon size={18} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-right">
            {submitted ? (
              <motion.div 
                className="form-success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#ECFDF5',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3>Message Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. I've received your note and will get back to you shortly at <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ marginTop: '1.25rem', padding: '0.55rem 1.25rem' }}
                >
                  Send Another Note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Alex Morgan"
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
                  <label className="form-label" htmlFor="subject">Subject / Role</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Frontend Developer Role / Opportunity"
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

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={16} />
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
