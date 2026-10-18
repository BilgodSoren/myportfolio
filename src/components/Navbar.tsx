import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="navbar-brand">
          <span className="brand-badge">BS</span>
          <span>Bilgod Soren</span>
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

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <button 
            type="button" 
            onClick={onOpenResume} 
            className="btn-secondary" 
            style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
            title="View full resume"
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>
          
          <a href="#contact" className="nav-cta-btn">
            <span>Connect</span>
            <ArrowUpRight size={15} />
          </a>

          <button 
            type="button" 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '4.5rem',
          left: '1rem',
          right: '1rem',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          padding: '1.25rem',
          boxShadow: '0 20px 30px -10px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: '#0F172A' }}>About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: '#0F172A' }}>Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: '#0F172A' }}>Projects</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: '#0F172A' }}>Experience</a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: '#0F172A' }}>Education</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, color: '#0F172A' }}>Contact</a>
        </div>
      )}
    </header>
  );
};
