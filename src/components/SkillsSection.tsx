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
        <div>
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="section-title">
            Skills & Modern Tooling
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my frontend specializations, backend fundamentals, database systems, and AI-assisted workflow automations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-bar">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              type="button"
              className={`filter-btn ${selectedFilter === tab.key ? 'active' : ''}`}
              onClick={() => setSelectedFilter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid">
          {filteredCategories.map((category) => (
            <div key={category.categoryKey} className="skill-category-card">
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
                  <div 
                    key={sIdx} 
                    className={`skill-tag ${skill.highlighted ? 'highlighted' : ''}`}
                    title={`Proficiency: ${skill.level}`}
                  >
                    {skill.highlighted && (
                      <CheckCircle size={13} style={{ color: '#4F46E5', flexShrink: 0 }} />
                    )}
                    <span>{skill.name}</span>
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
