import React from 'react';
import { X, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(8px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: '#FFFFFF',
          width: '100%',
          maxWidth: '720px',
          maxHeight: '88vh',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflowY: 'auto',
          border: '1px solid #E2E8F0',
          padding: '2.25rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
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
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginTop: '0.25rem' }}>
              {project.title}
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748B',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Project Description */}
        <div style={{ marginBottom: '1.75rem', background: '#F8FAFC', padding: '1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={15} style={{ color: '#4F46E5' }} /> Engineering Overview
          </h4>
          <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6 }}>
            {project.description}
          </p>
        </div>

        {/* Key Engineering Deliverables */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>
            Key Deliverables & Responsibilities
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.keyPoints.map((point, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', color: '#475569', lineHeight: 1.55 }}>
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
            padding: '0.85rem 1.25rem',
            background: '#ECFDF5',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '12px',
            color: '#064E3B',
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '1.75rem'
          }}>
            <TrendingUp size={18} style={{ color: '#10B981', flexShrink: 0 }} />
            <span><strong>Measured Outcome:</strong> {project.metrics}</span>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.65rem' }}>
            Technologies & Tools
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-badge" style={{ background: '#EEF2FF', color: '#4338CA', padding: '0.4rem 0.8rem' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid #E2E8F0' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '0.65rem 1.25rem' }}
          >
            Close
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: '0.65rem 1.5rem' }}
          >
            <GithubIcon size={16} />
            <span>View Source on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};
