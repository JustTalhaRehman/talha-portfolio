import React from 'react';
import { CAPABILITIES } from '@/lib/constants';

export const Capabilities = () => {
  return (
    <section id="capabilities" className="content-section diffuse-reveal">
      <div className="section-label">Capabilities</div>

      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: '600', letterSpacing: '-0.025em', color: 'var(--text-primary)', lineHeight: 1.45 }}>
          Designing resilient, automated cloud infrastructure and engineering zero-trust platforms that scale quietly.
        </p>
      </div>

      <div className="services-list">
        {CAPABILITIES.map((item, idx) => (
          <div key={idx} className="service-item diffuse-reveal">
            <div className="service-header">
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
            </div>

            <div className="service-tags">
              {item.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
