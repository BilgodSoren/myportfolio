import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  FileDown, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  Terminal,
  CheckCircle2,
  Copy
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onCopyText }) => {
  const [activeTab, setActiveTab] = useState<'stack' | 'summary'>('stack');

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introductions & CTA */}
          <div>
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            <h1 className="hero-headline">
              Frontend Engineer <br />
              <span className="gradient-text">Designing Scalable Web Experiences.</span>
            </h1>

            <p className="hero-bio">
              Hi, I'm <strong style={{ color: '#0F172A' }}>{PERSONAL_INFO.name}</strong> — an innovative frontend developer and passionate fresher with hands-on internship experience building responsive, component-driven web interfaces, modern dashboards, and intelligent AI workflow pipelines.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <button 
                type="button" 
                onClick={onOpenResume} 
                className="btn-secondary"
              >
                <FileDown size={16} style={{ color: '#4F46E5' }} />
                <span>Resume / CV</span>
              </button>

              <a href="#contact" className="btn-secondary">
                <span>Let's Talk</span>
              </a>
            </div>

            <div className="hero-socials">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <button 
                type="button" 
                onClick={() => onCopyText(PERSONAL_INFO.email, 'Email')} 
                className="social-icon-btn"
                title="Copy Email (bilgodsoren12@gmail.com)"
                aria-label="Copy Email"
              >
                <Mail size={18} />
              </button>

              <button
                type="button"
                onClick={() => onCopyText(PERSONAL_INFO.phone, 'Phone number')}
                className="social-icon-btn"
                title="Copy Phone (+91 9304231971)"
                style={{ fontSize: '0.8rem', fontWeight: 700 }}
              >
                +91
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Developer Card */}
          <div className="hero-visual-card">
            <div className="card-top-bar">
              <div className="window-dots">
                <span className="window-dot dot-red"></span>
                <span className="window-dot dot-yellow"></span>
                <span className="window-dot dot-green"></span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setActiveTab('stack')}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    background: activeTab === 'stack' ? '#4F46E5' : 'transparent',
                    color: activeTab === 'stack' ? '#FFFFFF' : '#64748B',
                    transition: 'all 0.2s'
                  }}
                >
                  Core Stack
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('summary')}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    background: activeTab === 'summary' ? '#4F46E5' : 'transparent',
                    color: activeTab === 'summary' ? '#FFFFFF' : '#64748B',
                    transition: 'all 0.2s'
                  }}
                >
                  Overview
                </button>
              </div>
              <span className="tech-code-badge">developer.tsx</span>
            </div>

            <div className="interactive-profile-snippet">
              <div className="avatar-container">
                BS
              </div>
              <div className="snippet-info">
                <h3>{PERSONAL_INFO.name}</h3>
                <p>{PERSONAL_INFO.role}</p>
                <span style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '4px', 
                  fontSize: '0.78rem', 
                  color: '#10B981', 
                  fontWeight: 600, 
                  marginTop: '0.2rem' 
                }}>
                  <CheckCircle2 size={13} /> Zedgoo Frontend Intern Alum
                </span>
              </div>
            </div>

            {activeTab === 'stack' ? (
              <div className="floating-chips-grid">
                <div className="chip-item">
                  <div className="chip-icon"><Code2 size={16} /></div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>React & Next.js</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Component Architecture</div>
                  </div>
                </div>

                <div className="chip-item">
                  <div className="chip-icon"><Layers size={16} /></div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>TypeScript & MUI</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Design Systems & UIs</div>
                  </div>
                </div>

                <div className="chip-item">
                  <div className="chip-icon"><Cpu size={16} /></div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>N8N & Meta AI</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Workflow Automation</div>
                  </div>
                </div>

                <div className="chip-item">
                  <div className="chip-icon"><Terminal size={16} /></div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Node & Express</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>REST APIs & DBs</div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '1rem',
                fontSize: '0.85rem',
                color: '#334155',
                lineHeight: 1.6
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#4F46E5', fontWeight: 700 }}>
                  <Sparkles size={15} /> Professional Focus
                </div>
                An innovative frontend developer & ambitious fresher with hands-on internship experience at Zedgoo. Passionate about building scalable, component-based UIs with React, Next.js, and MUI, and exploring smart AI automation workflows.
              </div>
            )}

            <div style={{ 
              marginTop: '1.25rem', 
              paddingTop: '1rem', 
              borderTop: '1px solid #F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              color: '#64748B'
            }}>
              <span>📍 {PERSONAL_INFO.location}</span>
              <button 
                type="button"
                onClick={() => onCopyText(PERSONAL_INFO.email, 'Email')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#4F46E5',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <Copy size={12} /> Copy email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
