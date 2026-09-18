import React from 'react';
import { SERVICES } from '@/lib/constants';

export const Services = () => {
  return (
    <section id="services" className="content-section">
      <div className="section-label">03 // What I build</div>

      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: '600', letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>
          I like designing simple, resilient versions of infrastructure and automating them end-to-end.
        </p>
      </div>

      <div className="services-list">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="service-item">
            <div className="service-header">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>

            <div className="service-tags">
              {service.tags.map((tag, tIdx) => (
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
