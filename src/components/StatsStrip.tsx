import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const StatsStrip: React.FC = () => {
  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
