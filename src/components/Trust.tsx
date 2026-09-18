import React from 'react';
import { METRICS } from '@/lib/constants';

export const Trust = () => {
  return (
    <section id="trust" className="trust-section">
      <div className="trust-grid">
        {METRICS.map((metric, idx) => (
          <div key={idx} className="trust-card">
            <div className="trust-value">{metric.value}</div>
            <span className="trust-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
