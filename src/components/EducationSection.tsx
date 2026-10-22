import React from 'react';
import { GraduationCap, Award, Music, Users } from 'lucide-react';
import { motion } from 'motion/react';
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
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & Qualifications
          </h2>
          <p className="section-subtitle">
            Academic qualifications in Information Technology and Computer Science.
          </p>
        </motion.div>

        {/* Education Cards with motion */}
        <div className="edu-grid">
          {EDUCATION_LIST.map((edu, idx) => (
            <motion.div 
              key={idx} 
              className="edu-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div>
                {edu.badge && (
                  <span className="edu-badge-tag">{edu.badge}</span>
                )}
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">{edu.institution} • {edu.location}</div>
                <div className="edu-period">{edu.period}</div>
              </div>
              <p className="edu-details">{edu.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Extracurriculars / Beyond Code Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-badge" style={{ background: '#ECFDF5', color: '#047857', borderColor: 'rgba(16, 185, 129, 0.25)' }}>
            <Award size={14} />
            <span>Leadership & Passions</span>
          </div>
          <h2 className="section-title">
            Beyond The Code
          </h2>
          <p className="section-subtitle">
            Interests and extracurricular activities outside programming.
          </p>
        </motion.div>

        {/* Activities Cards with motion */}
        <div className="activities-grid">
          {ACTIVITIES.map((act, idx) => (
            <motion.div 
              key={idx} 
              className="activity-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="activity-icon-box">
                {getActivityIcon(act.icon)}
              </div>
              <h3 className="activity-title">{act.title}</h3>
              <div className="activity-org">{act.organization}</div>
              <p className="activity-desc">{act.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
