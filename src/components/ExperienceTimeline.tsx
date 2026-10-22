import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">
            Internship & Practical Experience
          </h2>
          <p className="section-subtitle">
            Frontend developer internship at Zedgoo, engineering reusable UI components and collaborating in Git team workflows.
          </p>
        </motion.div>

        <div className="timeline-wrapper">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
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
                  <motion.li 
                    key={pIdx} 
                    className="timeline-bullet-item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + pIdx * 0.08 }}
                  >
                    <CheckCircle2 size={16} style={{ color: '#4F46E5', marginTop: '3px', flexShrink: 0 }} />
                    <span>{point}</span>
                  </motion.li>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
