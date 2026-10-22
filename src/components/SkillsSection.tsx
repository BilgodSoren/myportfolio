import React, { useState } from 'react';
import {
  Layout,
  Code,
  Server,
  Database,
  Cpu,
  Sparkles,
  CheckCircle,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { key: 'all', label: 'All Technologies' },
    { key: 'frontend', label: 'Frontend & UI' },
    { key: 'languages', label: 'Languages' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'databases', label: 'Databases' },
    { key: 'tools', label: 'Automation & Tools' },
  ];

  const filteredCategories = selectedFilter === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.categoryKey === selectedFilter);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout size={20} />;
      case 'Code': return <Code size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      default: return <Layers size={20} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="section-title">
            Skills & Modern Tooling
          </h2>
          <p className="section-subtitle">
            Core frontend technologies, programming languages, backend fundamentals, and modern developer tools.
          </p>
        </motion.div>

        {/* Filter Pills with motion */}
        <motion.div 
          className="skills-filter-bar"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filterTabs.map(tab => (
            <motion.button
              key={tab.key}
              type="button"
              className={`filter-btn ${selectedFilter === tab.key ? 'active' : ''}`}
              onClick={() => setSelectedFilter(tab.key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Cards Grid with AnimatePresence */}
        <motion.div 
          layout 
          className="skills-cards-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.categoryKey}
                layout
                className="skill-category-card"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 10 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="category-card-header">
                  <div className="cat-icon-box">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="cat-title">{category.title}</h3>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                      {category.skills.length} core proficiencies
                    </span>
                  </div>
                </div>

                <div className="skill-tags-wrapper">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      className={`skill-tag ${skill.highlighted ? 'highlighted' : ''}`}
                      title={`Proficiency: ${skill.level}`}
                      whileHover={{ scale: 1.04, y: -1 }}
                    >
                      {skill.highlighted && (
                        <CheckCircle size={13} style={{ color: '#4F46E5', flexShrink: 0 }} />
                      )}
                      <span>{skill.name}</span>
                      <span className="skill-level-badge">{skill.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
