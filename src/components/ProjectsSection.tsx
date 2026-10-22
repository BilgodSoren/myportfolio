import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Check,
  Layers,
  Table2,
  Boxes,
  Workflow,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS, type Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Enterprise', 'Automation'];

  const displayedProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Featured Projects & Engineering Work
          </h2>
          <p className="section-subtitle">
            Applications demonstrating React component architecture, Material UI design systems, and automated workflow pipelines.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          className="skills-filter-bar"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              type="button"
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {cat === 'All' ? 'All Projects (3)' : `${cat}`}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Cards Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, pIndex) => (
              <motion.article 
                key={project.id} 
                layout
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                {/* Left Column: Description & Metadata */}
                <div className="project-card-content">
                  <div>
                    <div className="project-category-tag">
                      {project.category === 'Frontend' && <Layers size={13} />}
                      {project.category === 'Enterprise' && <Boxes size={13} />}
                      {project.category === 'Automation' && <Workflow size={13} />}
                      <span>{project.category} Project</span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-subtitle">{project.subtitle}</div>

                    <p className="project-desc">{project.description}</p>

                    <ul className="project-keypoints">
                      {project.keyPoints.map((point, kIdx) => (
                        <li key={kIdx} className="project-keypoint-item">
                          <Check size={16} className="point-bullet" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {project.metrics && (
                      <div className="project-metric-pill">
                        <TrendingUp size={14} />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    <div className="project-tech-stack">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn-github"
                      title="View Source on GitHub"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <GithubIcon size={16} />
                      <span>View Repository</span>
                    </motion.a>

                    <motion.button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="btn-primary"
                      style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>Inspect Details</span>
                      <ExternalLink size={15} />
                    </motion.button>
                  </div>
                </div>

                {/* Right Column: Visual Mockup Showcase */}
                <div className="project-card-visual">
                  <div className="mockup-window">
                    <div className="mockup-header">
                      <span className="window-dot dot-red"></span>
                      <span className="window-dot dot-yellow"></span>
                      <span className="window-dot dot-green"></span>
                      <span style={{
                        fontSize: '0.72rem',
                        fontFamily: 'monospace',
                        color: '#64748B',
                        marginLeft: '0.5rem'
                      }}>
                        {project.id}.app/preview
                      </span>
                    </div>

                    <div className="mockup-content">
                      {project.id === 'admin-panel' && (
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Table2 size={16} style={{ color: '#4F46E5' }} /> Modular UI & Data Table
                            </span>
                            <span style={{ fontSize: '0.72rem', color: '#4F46E5', fontWeight: 600, background: '#EEF2FF', padding: '2px 8px', borderRadius: '12px' }}>
                              Reusable Modules
                            </span>
                          </div>
                          <div className="mockup-ui-skeleton">
                            {/* Mini Data Table Preview */}
                            <div style={{ border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden', background: '#FFFFFF', fontSize: '0.72rem' }}>
                              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 0.8fr', background: '#F8FAFC', padding: '6px 10px', fontWeight: 700, borderBottom: '1px solid #E2E8F0', color: '#475569' }}>
                                <span>Module Name</span>
                                <span>Route</span>
                                <span>Status</span>
                                <span>Action</span>
                              </div>
                              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 0.8fr', padding: '6px 10px', borderBottom: '1px solid #F1F5F9', alignItems: 'center' }}>
                                <span style={{ fontWeight: 600, color: '#0F172A' }}>User Management</span>
                                <span style={{ color: '#64748B', fontFamily: 'monospace' }}>/users</span>
                                <span style={{ color: '#059669', fontWeight: 600 }}>Active</span>
                                <span style={{ color: '#4F46E5', fontWeight: 600 }}>Edit</span>
                              </div>
                              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 0.8fr', padding: '6px 10px', alignItems: 'center' }}>
                                <span style={{ fontWeight: 600, color: '#0F172A' }}>Dynamic Forms</span>
                                <span style={{ color: '#64748B', fontFamily: 'monospace' }}>/forms</span>
                                <span style={{ color: '#059669', fontWeight: 600 }}>Active</span>
                                <span style={{ color: '#4F46E5', fontWeight: 600 }}>Edit</span>
                              </div>
                            </div>

                            {/* Mini Filter & Action Bar */}
                            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                              <div style={{ flex: 1, height: '26px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: '0.7rem', color: '#94A3B8' }}>
                                🔍 Search & filter records...
                              </div>
                              <div style={{ padding: '0 10px', height: '26px', background: '#4F46E5', color: '#FFFFFF', borderRadius: '6px', display: 'flex', alignItems: 'center', fontSize: '0.72rem', fontWeight: 600 }}>
                                + Add Module
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'axesuite-erp' && (
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Boxes size={16} style={{ color: '#0EA5E9' }} /> ERP Modules & REST API
                            </span>
                            <span style={{ fontSize: '0.72rem', color: '#0EA5E9', fontWeight: 600 }}>v2.4 Connected</span>
                          </div>
                          <div className="mockup-ui-skeleton">
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                              <div style={{ flex: 1, padding: '8px', background: '#F0F9FF', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600, color: '#0369A1' }}>
                                📦 Inventory Sync
                              </div>
                              <div style={{ flex: 1, padding: '8px', background: '#F8FAFC', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600, color: '#334155' }}>
                                💳 Invoicing & Tax
                              </div>
                            </div>
                            <div className="skeleton-bar w-90"></div>
                            <div className="skeleton-bar w-75"></div>
                            <div className="skeleton-bar w-35"></div>
                          </div>
                        </div>
                      )}

                      {project.id === 'ai-content-workflow' && (
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Cpu size={16} style={{ color: '#10B981' }} /> N8N + Meta AI Pipeline
                            </span>
                            <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 600 }}>Active Webhook</span>
                          </div>
                          <div className="mockup-ui-skeleton">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600 }}>
                              <span>Input Trigger</span>
                              <span style={{ color: '#10B981' }}>→ AI Generation →</span>
                              <span>Auto Publish</span>
                            </div>
                            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                              <span style={{ padding: '4px 8px', background: '#ECFDF5', color: '#065F46', fontSize: '0.72rem', borderRadius: '4px', fontWeight: 600 }}>
                                ⚡ 87.5% Time Saved
                              </span>
                              <span style={{ padding: '4px 8px', background: '#F1F5F9', color: '#334155', fontSize: '0.72rem', borderRadius: '4px', fontWeight: 600 }}>
                                0 Manual Steps
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mockup-badge-preview">
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Architecture</span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0F172A' }}>
                          Modular Components
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
