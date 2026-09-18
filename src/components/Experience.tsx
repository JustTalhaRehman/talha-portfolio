'use client';

import React, { useState } from 'react';
import { Globe, CheckCircle2, ChevronDown } from 'lucide-react';
import { EXPERIENCES } from '@/lib/constants';

const EXP_PILLARS: Record<number, string[]> = {
  0: [
    'Multi-Cloud (AWS + Azure)',
    '37+ AWS Accounts',
    'Amazon EKS & Microservices',
    'Kyverno Policy Hardening',
    'Istio Egress Controls',
    'KMS Separation of Duties',
    'CI/CD 4m Runtime',
    'Grafana LGTM Telemetry',
  ],
  1: [
    'Modular Terraform IaC',
    'GitHub Actions & Jenkins',
    'Docker & Kubernetes',
    'Prometheus & CloudWatch',
    'Python & Bash Tooling',
  ],
};

export const Experience = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="experience" className="content-section diffuse-reveal">
      <div className="section-label">01 // Experience &amp; Engineering Work</div>

      <div style={{ marginBottom: '36px' }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: '600', letterSpacing: '-0.025em', color: 'var(--text-primary)', lineHeight: 1.45 }}>
          Hands-on multi-cloud architecture and platform engineering across multi-account AWS &amp; hybrid cloud environments, production Kubernetes, and zero-trust security.
        </p>
      </div>

      <div className="experience-list">
        {EXPERIENCES.map((exp, idx) => {
          const isOpen = !!expanded[idx];
          const pillars = EXP_PILLARS[idx] || [];

          return (
            <div key={idx} className="experience-item diffuse-reveal">
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

              {pillars.length > 0 && (
                <div className="experience-pillars-row">
                  {pillars.map((pill, pIdx) => (
                    <span key={pIdx} className="experience-pillar-tag">
                      {pill}
                    </span>
                  ))}
                </div>
              )}

              {exp.highlights && exp.highlights.length > 0 && (
                <>
                  <button
                    type="button"
                    onClick={() => toggleExpand(idx)}
                    className={`experience-expand-btn ${isOpen ? 'active' : ''}`}
                    aria-expanded={isOpen}
                  >
                    <span>
                      {isOpen
                        ? 'Hide Detailed Architecture Breakdown'
                        : `View Detailed Architecture Breakdown (${exp.highlights.length} Areas)`}
                    </span>
                    <ChevronDown
                      size={15}
                      className={`chevron-icon ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div className={`experience-accordion ${isOpen ? 'expanded' : ''}`}>
                    <div className="experience-accordion-inner">
                      <div className="experience-accordion-content">
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
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
