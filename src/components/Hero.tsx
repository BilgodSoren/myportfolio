import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  FileDown,
  Sparkles,
  CheckCircle2,
  Phone,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onCopyText }) => {
  const [photoType, setPhotoType] = useState<'casual' | 'formal'>('casual');

  const photoSrc = photoType === 'casual' ? '/profile.jpg' : '/profile-formal.jpg';

  const coreSkills = [
    'React',
    'Next.js',
    'TypeScript',
    'Material-UI',
    'Tailwind CSS',
    'N8N Automation',
    'REST APIs'
  ];

  return (
    <section id="hero" className="hero-centered-section">
      <div className="container">
        <div className="hero-centered-content">
          {/* Status Pill */}
          <motion.div
            className="status-pill"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="status-dot"></span>
            <span>Available for Full-Time & Remote Roles</span>
          </motion.div>

          {/* Centered Photo Showcase with Smooth Motion */}
          <motion.div
            className="hero-avatar-wrapper"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -8, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.7, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] },
              scale: { duration: 0.7, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] },
              y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" }
            }}
          >
            <motion.div 
              className="hero-avatar-glow"
              animate={{ scale: [1, 1.14, 1], opacity: [0.6, 0.88, 0.6] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            
            <div className="hero-avatar-frame">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photoType}
                  src={photoSrc}
                  alt={PERSONAL_INFO.name}
                  className="hero-avatar-img"
                  style={{ objectPosition: photoType === 'casual' ? 'center 72%' : 'center 25%' }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <span className="hero-avatar-badge" title="Open to Work">
                <span className="badge-dot"></span>
              </span>
            </div>

            {/* Photo Toggle: Casual / Formal */}
            <motion.div 
              className="photo-toggle-bar"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <motion.button
                type="button"
                onClick={() => setPhotoType('casual')}
                className={`photo-toggle-btn ${photoType === 'casual' ? 'active' : ''}`}
                title="View outdoor smiling portrait"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Casual
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setPhotoType('formal')}
                className={`photo-toggle-btn ${photoType === 'formal' ? 'active' : ''}`}
                title="View formal portrait"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Formal
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Centered Heading */}
          <motion.h1
            className="hero-centered-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </motion.h1>

          {/* Clean Subtitle */}
          <motion.p
            className="hero-centered-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Frontend Engineer specializing in <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>. Building responsive, high-performance web applications and automated AI workflows.
          </motion.p>

          {/* Alum experience badge */}
          <motion.div
            className="hero-experience-badge"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Briefcase size={14} style={{ color: '#4F46E5' }} />
            <span>Zedgoo Frontend Developer Intern Alum</span>
            <span className="badge-divider">•</span>
            <Sparkles size={14} style={{ color: '#10B981' }} />
            <span>87.5% Automation Gain</span>
          </motion.div>

          {/* Tech Stack Chips Centered with staggered entry */}
          <motion.div
            className="hero-tech-pills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {coreSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="hero-tech-pill"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                whileHover={{ y: -2, scale: 1.05 }}
              >
                <CheckCircle2 size={13} className="pill-check" />
                <span>{skill}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons Centered */}
          <motion.div
            className="hero-centered-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </motion.a>

            <motion.button
              type="button"
              onClick={onOpenResume}
              className="btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileDown size={16} style={{ color: '#4F46E5' }} />
              <span>Resume / CV</span>
            </motion.button>

            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Let's Talk</span>
            </motion.a>
          </motion.div>

          {/* Social Icons Centered */}
          <motion.div
            className="hero-centered-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub"
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
              aria-label="LinkedIn"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedinIcon size={18} />
            </motion.a>

            <motion.button
              type="button"
              onClick={() => onCopyText(PERSONAL_INFO.email, 'Email')}
              className="social-icon-btn"
              title="Copy Email (bilgodsoren12@gmail.com)"
              aria-label="Copy Email"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => onCopyText(PERSONAL_INFO.phone, 'Phone number')}
              className="social-icon-btn"
              title="Copy Phone (+91 9304231971)"
              aria-label="Copy Phone"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={17} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
