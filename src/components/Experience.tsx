import React from 'react';
import { Globe, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '@/lib/constants';

export const Experience = () => {
  return (
    <section id="experience" className="content-section">
      <div className="section-label">01 // Experience &amp; Engineering Work</div>

      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: '600', letterSpacing: '-0.025em', color: 'var(--text-primary)', lineHeight: 1.45 }}>
          Hands-on cloud architecture and platform engineering across multi-account AWS environments, production Kubernetes, and zero-trust security.
        </p>
      </div>

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
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{exp.role}</span>
              {exp.location && (
                <>
                  <span>—</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Globe size={11} /> {exp.location}
                  </span>
                </>
              )}
            </div>

            <h3 className="experience-title-clean">
              {exp.company}
            </h3>

            <p className="experience-desc">{exp.description}</p>

            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="experience-bullets-clean">
                {exp.highlights.map((h, hIdx) => {
                  const parts = h.split(': ');
                  const hasCategory = parts.length > 1;
                  return (
                    <li key={hIdx} className="experience-bullet-row">
                      <CheckCircle2 size={14} className="bullet-icon" />
                      <div>
                        {hasCategory ? (
                          <>
                            <strong className="bullet-lead">{parts[0]}: </strong>
                            <span>{parts.slice(1).join(': ')}</span>
                          </>
                        ) : (
                          <span>{h}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
