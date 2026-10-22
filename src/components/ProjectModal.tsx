import React from 'react';
import { X, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
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
            className="project-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#4F46E5',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}>
                  {project.category} Architecture
                </span>
                <h2 className="project-modal-title">
                  {project.title}
                </h2>
                <p style={{ color: '#64748B', fontSize: '0.92rem' }}>{project.subtitle}</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Project Description */}
            <div style={{ marginBottom: '1.5rem', background: '#F8FAFC', padding: '1.15rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={15} style={{ color: '#4F46E5' }} /> Engineering Overview
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6 }}>
                {project.description}
              </p>
            </div>

            {/* Key Engineering Deliverables */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>
                Key Deliverables
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {project.keyPoints.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>
                    <CheckCircle2 size={16} style={{ color: '#10B981', marginTop: '3px', flexShrink: 0 }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Metric */}
            {project.metrics && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1.15rem',
                background: '#ECFDF5',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '12px',
                color: '#064E3B',
                fontSize: '0.88rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}>
                <TrendingUp size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                <span><strong>Outcome:</strong> {project.metrics}</span>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.65rem' }}>
                Technologies Applied
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge" style={{ background: '#EEF2FF', color: '#4338CA', padding: '0.35rem 0.75rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="project-modal-actions">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary"
                style={{ padding: '0.65rem 1.25rem', justifyContent: 'center' }}
              >
                Close
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ padding: '0.65rem 1.35rem', justifyContent: 'center' }}
              >
                <GithubIcon size={16} />
                <span>View on GitHub</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
