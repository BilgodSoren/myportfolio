import { GraduationCap, Award, Music, Users } from 'lucide-react';
import { EDUCATION_LIST, ACTIVITIES } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users size={22} />;
      case 'Award': return <Award size={22} />;
      case 'Music': return <Music size={22} />;
      default: return <Award size={22} />;
    }
  };

  return (
    <section id="education" className="education-section">
      <div className="container">
        {/* Education Header */}
        <div>
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & Qualifications
          </h2>
          <p className="section-subtitle">
            Formal technical foundation spanning engineering degrees, computer science fundamentals, and academic distinctions.
          </p>
        </div>

        {/* Education Cards */}
        <div className="edu-grid">
          {EDUCATION_LIST.map((edu, idx) => (
            <div key={idx} className="edu-card">
              <div>
                {edu.badge && (
                  <span className="edu-badge-tag">{edu.badge}</span>
                )}
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">{edu.institution} • {edu.location}</div>
                <div className="edu-period">{edu.period}</div>
              </div>
              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>

        {/* Extracurriculars / Beyond Code Header */}
        <div>
          <div className="section-badge" style={{ background: '#ECFDF5', color: '#047857', borderColor: 'rgba(16, 185, 129, 0.25)' }}>
            <Award size={14} />
            <span>Leadership & Passions</span>
          </div>
          <h2 className="section-title">
            Beyond The Code
          </h2>
          <p className="section-subtitle">
            Activities, community leadership, and creative discipline that fuel problem-solving and collaboration.
          </p>
        </div>

        {/* Activities Cards */}
        <div className="activities-grid">
          {ACTIVITIES.map((act, idx) => (
            <div key={idx} className="activity-card">
              <div className="activity-icon-box">
                {getActivityIcon(act.icon)}
              </div>
              <h3 className="activity-title">{act.title}</h3>
              <div className="activity-org">{act.organization}</div>
              <p className="activity-desc">{act.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
