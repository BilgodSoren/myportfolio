import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div>
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">
            Internship & Hands-on Exposure
          </h2>
          <p className="section-subtitle">
            Frontend developer internship at Zedgoo, engineering reusable UI components, collaborating with cross-functional teams, and optimizing web navigation flows.
          </p>
        </div>

        <div className="timeline-wrapper">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <h3 className="role-title">{exp.role}</h3>
                  <div className="company-meta">
                    <span>{exp.company}</span>
                    <span style={{ color: '#94A3B8' }}>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#64748B', fontWeight: 500, fontSize: '0.88rem' }}>
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="timeline-date-badge">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={13} /> {exp.period}
                  </span>
                </div>
              </div>

              <ul className="timeline-bullet-list">
                {exp.description.map((point, pIdx) => (
                  <li key={pIdx} className="timeline-bullet-item">
                    <CheckCircle2 size={16} style={{ color: '#4F46E5', marginTop: '3px', flexShrink: 0 }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid #F1F5F9'
              }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Technologies Applied:
                </span>
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-badge" style={{ background: '#EEF2FF', color: '#4338CA' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
