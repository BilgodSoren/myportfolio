import { X, Printer } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, PROJECTS, EDUCATION_LIST, ACTIVITIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        style={{
          background: '#FFFFFF',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #E2E8F0'
        }}
      >
        {/* Top Action Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.75rem',
          borderBottom: '1px solid #E2E8F0',
          position: 'sticky',
          top: 0,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>Bilgod Soren — Curriculum Vitae</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={handlePrint}
              className="btn-secondary"
              style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
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
        </div>

        {/* Printable CV Content */}
        <div style={{ padding: '2.5rem' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0F172A', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
              {PERSONAL_INFO.name}
            </h1>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#4F46E5', marginBottom: '0.75rem' }}>
              {PERSONAL_INFO.role} • {PERSONAL_INFO.location} (Open to remote)
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.88rem', color: '#475569' }}>
              <span>📞 {PERSONAL_INFO.phone}</span>
              <span>✉️ {PERSONAL_INFO.email}</span>
              <span>🔗 linkedin.com/in/bilgodsoren</span>
              <span>🐙 github.com/bilgodsoren</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '0.93rem', lineHeight: 1.65, color: '#334155' }}>
              Innovative and enthusiastic Frontend Developer & fresher with hands-on internship experience at Zedgoo building responsive, component-based web applications using React, Next.js, TypeScript, and MUI. Quick learner with solid frontend architecture foundations, REST API integration skills, and hands-on experience automating workflows with N8N and AI tools. Looking for an entry-level Frontend / React Developer role where I can bring creative problem-solving and ship clean, scalable user interfaces.
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
              Technical Skills
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '0.5rem 1rem', fontSize: '0.9rem' }}>
              <strong style={{ color: '#0F172A' }}>Languages:</strong>
              <span style={{ color: '#334155' }}>JavaScript (ES6+), TypeScript, HTML5, CSS3, C, C++</span>

              <strong style={{ color: '#0F172A' }}>Frontend:</strong>
              <span style={{ color: '#334155' }}>React, Next.js, Vite, MUI, Tailwind CSS, responsive design, component-based architecture</span>

              <strong style={{ color: '#0F172A' }}>Backend & APIs:</strong>
              <span style={{ color: '#334155' }}>Node.js, Express.js, REST APIs</span>

              <strong style={{ color: '#0F172A' }}>Databases:</strong>
              <span style={{ color: '#334155' }}>MySQL, MSSQL, MongoDB</span>

              <strong style={{ color: '#0F172A' }}>Tools & Automation:</strong>
              <span style={{ color: '#334155' }}>Git, GitHub, VS Code, IntelliJ, Jenkins, N8N, Microsoft Excel</span>
            </div>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
              Work Experience
            </h2>
            {WORK_EXPERIENCE.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                  <strong style={{ fontSize: '1rem', color: '#0F172A' }}>{exp.role} | {exp.company}, {exp.location}</strong>
                  <span style={{ fontStyle: 'italic', fontSize: '0.88rem', color: '#64748B' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                  {exp.description.map((pt, pIdx) => (
                    <li key={pIdx} style={{ marginBottom: '0.3rem' }}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
              Projects
            </h2>
            {PROJECTS.map((proj) => (
              <div key={proj.id} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
                  <strong style={{ fontSize: '0.98rem', color: '#0F172A' }}>
                    {proj.title} <span style={{ fontWeight: 400, color: '#64748B' }}>| {proj.tech.slice(0, 3).join(', ')}</span>
                  </strong>
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: '#4F46E5', fontWeight: 600 }}>
                    [GitHub]
                  </a>
                </div>
                <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#334155', lineHeight: 1.55 }}>
                  {proj.keyPoints.map((pt, ptIdx) => (
                    <li key={ptIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
              Education
            </h2>
            {EDUCATION_LIST.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.65rem', fontSize: '0.9rem' }}>
                <div>
                  <strong style={{ color: '#0F172A' }}>{edu.degree}</strong> | {edu.institution}, {edu.location}
                </div>
                <div style={{ color: '#64748B' }}>
                  {edu.period} {edu.grade ? `| ${edu.grade}` : ''}
                </div>
              </div>
            ))}
          </div>

          {/* Activities */}
          <div>
            <h2 style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
              Activities & Passions
            </h2>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
              {ACTIVITIES.map((act, idx) => (
                <li key={idx}>
                  <strong>{act.title}</strong> — {act.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
