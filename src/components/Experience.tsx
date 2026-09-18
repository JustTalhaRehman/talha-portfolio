import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '@/lib/constants';

export const Experience = () => {
  return (
    <section id="experience" className="content-section">
      <div className="section-label">01 // Experience</div>

      <div className="experience-list">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="experience-meta">
              {exp.isCurrent && (
                <span className="status-dot">
                  <span className="status-dot-ping" />
                  <span className="status-dot-core" />
                </span>
              )}
              <span>{exp.period}</span>
              <span>—</span>
              <span>{exp.role}</span>
            </div>

            {exp.link ? (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="company-title"
              >
                <span>{exp.company}</span>
                <ArrowUpRight className="arrow-icon" />
              </a>
            ) : (
              <div className="company-title">
                <span>{exp.company}</span>
              </div>
            )}

            <p className="experience-desc">{exp.description}</p>

            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="experience-bullets">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
