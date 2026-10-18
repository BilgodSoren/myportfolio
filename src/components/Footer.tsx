import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <span className="brand-badge" style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}>BS</span>
              <strong style={{ fontSize: '1.05rem', color: '#0F172A' }}>{PERSONAL_INFO.name}</strong>
            </div>
            <p>
              React & Next.js Frontend Developer • Building clean, scalable user interfaces.
            </p>
          </div>

          <div className="footer-links">
            <button 
              type="button" 
              onClick={onOpenResume} 
              style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 600, cursor: 'pointer' }}
            >
              Resume
            </button>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 600 }}>
              GitHub
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 600 }}>
              LinkedIn
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 600 }}>
              Email
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="back-to-top"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#94A3B8'
        }}>
          <div>
            © {new Date().getFullYear()} Bilgod Soren. All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript & Modern CSS • Clean Light Design
          </div>
        </div>
      </div>
    </footer>
  );
};
