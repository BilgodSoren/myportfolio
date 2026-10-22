import React from 'react';
import { X, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, WORK_EXPERIENCE, PROJECTS, EDUCATION_LIST } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div 
            className="resume-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Action Bar */}
            <div className="resume-modal-topbar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>Bilgod Soren — Resume</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="btn-secondary"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                >
                  <Printer size={14} />
                  <span>Print / PDF</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="modal-close-btn"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Printable CV Content */}
            <div className="resume-content-body">
              {/* Header with Photo */}
              <div className="resume-header-section">
                <div className="resume-header-info">
                  <h1 className="resume-candidate-name">
                    {PERSONAL_INFO.name}
                  </h1>
                  <div className="resume-candidate-role">
                    {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
                  </div>
                  <div className="resume-contact-meta">
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="resume-meta-link">
                      📞 {PERSONAL_INFO.phone}
                    </a>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="resume-meta-link">
                      ✉️ {PERSONAL_INFO.email}
                    </a>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="resume-meta-link highlight">
                      🔗 linkedin.com/in/bilgodsoren
                    </a>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="resume-meta-link highlight">
                      🐙 github.com/bilgodsoren
                    </a>
                  </div>
                </div>

                <div className="resume-avatar-frame">
                  <img src="/profile-formal.jpg" alt="Bilgod Soren" className="resume-avatar-img" />
                </div>
              </div>

              {/* Professional Summary */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h2 className="resume-section-heading">
                  Professional Summary
                </h2>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#334155' }}>
                  Frontend Developer specializing in React, Next.js, TypeScript, and MUI with hands-on internship experience at Zedgoo building responsive, component-driven web interfaces. Solid engineering foundations in REST APIs, modern UI state management, and workflow automation using N8N and Meta AI.
                </p>
              </div>

              {/* Technical Skills */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h2 className="resume-section-heading">
                  Technical Skills
                </h2>
                <div className="resume-skills-grid">
                  <strong style={{ color: '#0F172A' }}>Languages:</strong>
                  <span style={{ color: '#334155' }}>JavaScript (ES6+), TypeScript, HTML5, CSS3, C, C++</span>

                  <strong style={{ color: '#0F172A' }}>Frontend:</strong>
                  <span style={{ color: '#334155' }}>React, Next.js, Vite, MUI, Tailwind CSS, Responsive Design</span>

                  <strong style={{ color: '#0F172A' }}>Backend & APIs:</strong>
                  <span style={{ color: '#334155' }}>Node.js, Express.js, REST APIs</span>

                  <strong style={{ color: '#0F172A' }}>Databases:</strong>
                  <span style={{ color: '#334155' }}>MySQL, MSSQL, MongoDB</span>

                  <strong style={{ color: '#0F172A' }}>Tools & Automation:</strong>
                  <span style={{ color: '#334155' }}>Git, GitHub, VS Code, IntelliJ, Jenkins, N8N, Excel</span>
                </div>
              </div>

              {/* Work Experience */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h2 className="resume-section-heading">
                  Work Experience
                </h2>
                {WORK_EXPERIENCE.map((exp, idx) => (
                  <div key={idx} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '4px' }}>
                      <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>{exp.role} | {exp.company}, {exp.location}</strong>
                      <span style={{ fontStyle: 'italic', fontSize: '0.85rem', color: '#64748B' }}>{exp.period}</span>
                    </div>
                    <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', color: '#334155', lineHeight: 1.6 }}>
                      {exp.description.map((pt, pIdx) => (
                        <li key={pIdx} style={{ marginBottom: '0.3rem' }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured Projects */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h2 className="resume-section-heading">
                  Projects
                </h2>
                {PROJECTS.map((proj) => (
                  <div key={proj.id} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem', flexWrap: 'wrap', gap: '4px' }}>
                      <strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>{proj.title}</strong>
                      <span style={{ fontSize: '0.82rem', color: '#4F46E5', fontWeight: 600 }}>{proj.tech.slice(0, 4).join(', ')}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '0.35rem' }}>{proj.description}</p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h2 className="resume-section-heading">
                  Education
                </h2>
                {EDUCATION_LIST.map((edu, idx) => (
                  <div key={idx} style={{ marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                      <strong style={{ fontSize: '0.92rem', color: '#0F172A' }}>{edu.degree} — {edu.institution}</strong>
                      <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{edu.period}</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>{edu.details}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
