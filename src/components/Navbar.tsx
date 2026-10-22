import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1080) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="navbar-brand">
          <div className="brand-avatar-box">
            <img src="/profile.jpg" alt="Bilgod Soren" className="brand-avatar-img" style={{ objectPosition: 'center 72%' }} />
          </div>
          <span className="brand-name-text">
            <span className="brand-first-name">Bilgod</span>
            <span className="brand-last-name"> Soren</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li>
            <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
              Experience
            </a>
          </li>
          <li>
            <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
              Contact
            </a>
          </li>
        </ul>

        {/* Action Group: Linked Social Accounts + CTA Buttons */}
        <div className="navbar-actions-group">
          {/* Quick Linked Accounts in Top Bar */}
          <div className="navbar-social-links" aria-label="Social & Professional Profiles">
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="navbar-social-btn github"
              title="GitHub Profile (@bilgodsoren)"
              aria-label="GitHub Profile"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.94 }}
            >
              <GithubIcon size={16} />
            </motion.a>

            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="navbar-social-btn linkedin"
              title="LinkedIn Profile (Bilgod Soren)"
              aria-label="LinkedIn Profile"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.94 }}
            >
              <LinkedinIcon size={16} />
            </motion.a>

            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="navbar-social-btn email"
              title={`Send Email (${PERSONAL_INFO.email})`}
              aria-label="Send Email"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.94 }}
            >
              <Mail size={15} />
            </motion.a>
          </div>

          <div className="navbar-v-divider" aria-hidden="true" />

          {/* Resume Modal Trigger */}
          <motion.button
            type="button"
            onClick={onOpenResume}
            className="btn-secondary nav-resume-btn"
            title="View Full Professional Resume"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FileText size={14} />
            <span className="btn-label-text">Resume</span>
          </motion.button>

          {/* Contact CTA */}
          <motion.a
            href="#contact"
            className="nav-cta-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Connect</span>
            <ArrowUpRight size={15} />
          </motion.a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown with Smooth Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-dropdown-menu"
          >
            <div className="mobile-nav-links-list">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">About</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Skills</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Projects</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Experience</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Education</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Contact</a>
            </div>

            <div className="mobile-socials-section">
              <div className="mobile-socials-title">Linked Accounts & Profiles</div>
              <div className="mobile-socials-grid">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-link-card github"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="mobile-social-icon-box github">
                    <GithubIcon size={16} />
                  </div>
                  <div className="mobile-social-text">
                    <span className="mobile-social-name">GitHub</span>
                    <span className="mobile-social-handle">github.com/bilgodsoren</span>
                  </div>
                  <ArrowUpRight size={15} className="mobile-social-arrow" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-social-link-card linkedin"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="mobile-social-icon-box linkedin">
                    <LinkedinIcon size={16} />
                  </div>
                  <div className="mobile-social-text">
                    <span className="mobile-social-name">LinkedIn</span>
                    <span className="mobile-social-handle">linkedin.com/in/bilgodsoren</span>
                  </div>
                  <ArrowUpRight size={15} className="mobile-social-arrow" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="mobile-social-link-card email"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="mobile-social-icon-box email">
                    <Mail size={15} />
                  </div>
                  <div className="mobile-social-text">
                    <span className="mobile-social-name">Email</span>
                    <span className="mobile-social-handle">{PERSONAL_INFO.email}</span>
                  </div>
                  <ArrowUpRight size={15} className="mobile-social-arrow" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
