import React from 'react';
import { KEY_ACHIEVEMENTS } from '@/lib/constants';

export const Achievements = () => {
  return (
    <section id="achievements" className="content-section diffuse-reveal">
      <div className="section-label">02 // Key Architectural Achievements</div>

      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: '600', letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>
          Measurable production impact across cloud scale, velocity, reliability, and zero-trust security.
        </p>
      </div>

      <div className="achievements-grid">
        {KEY_ACHIEVEMENTS.map((item, idx) => (
          <div key={idx} className="achievement-card diffuse-reveal">
            <div className="achievement-metric">{item.metric}</div>
            <h4 className="achievement-title">{item.title}</h4>
            <p className="achievement-detail">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
