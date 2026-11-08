import React from 'react';
import Image from 'next/image';
import { TALHA_CONFIG } from '@/lib/constants';

export const About = () => {
  return (
    <section tabIndex={-1} id="about" className="content-section diffuse-reveal">
      <h2 className="section-label">About</h2>

      <div className="about-layout">
        <div className="about-portrait-card diffuse-reveal">
          <div className="about-portrait-glow" aria-hidden="true" />
          <div className="about-portrait-inner">
            <Image
              src="/talha.webp"
              alt="Talha Rehman - DevOps & Platform Engineer"
              width={543}
              height={724}
              className="about-portrait-photo"
            />
            <div className="about-portrait-glass-footer">
              <div className="portrait-footer-info">
                <span className="portrait-footer-name">Talha Rehman</span>
                <span className="portrait-footer-role">DevOps &amp; Platform Engineer</span>
              </div>
              <span className="portrait-status-badge">
                <span className="status-dot-pulse" />
                <span>Active</span>
              </span>
            </div>
          </div>
        </div>

        <div className="about-content-panel">
          <p className="about-paragraph">
            I work with the engineers responsible for shipping and operating a product. That means understanding the existing system, making changes your team can review and explaining the decisions behind them. My work covers AWS architecture, Kubernetes security, GitOps delivery and production observability, with controls aligned to your regulatory requirements.
          </p>

          <p className="about-paragraph">I also founded <a href={TALHA_CONFIG.devistioUrl}>Devistio</a>, where I bring the same approach to cloud and platform consulting engagements.</p>

          <div className="about-pillars-grid">
            <div className="about-col diffuse-reveal">
              <span className="about-col-label">Operating Model</span>
              <p className="about-col-value">Remote &amp; Relocation</p>
              <p className="about-col-sub">Open to UAE, Europe (Germany, France, Netherlands, Poland), New Zealand &amp; Worldwide</p>
            </div>

            <div className="about-col diffuse-reveal">
              <span className="about-col-label">Credentials</span>
              <p className="about-col-value">AWS Solutions Architect &amp; DevOps</p>
              <p className="about-col-sub">BS Software Engineering (UMT)</p>
            </div>

            <div className="about-col diffuse-reveal">
              <span className="about-col-label">Platform Core</span>
              <p className="about-col-value">Multi-Cloud, AWS &amp; Amazon EKS</p>
              <p className="about-col-sub">Zero-Trust Security &amp; GitOps Delivery</p>
            </div>

            <div className="about-col diffuse-reveal">
              <span className="about-col-label">Execution Standard</span>
              <p className="about-col-value">
                Understand existing environments, design practical solutions, automate via IaC, and validate in staging before production.
              </p>
            </div>

            <div className="about-col diffuse-reveal">
              <span className="about-col-label">Security Mindset</span>
              <p className="about-col-value">
                Separation of Duties, IAM least-privilege, Kyverno admission policies, default-deny networking, and continuous compliance checks with audit-ready logs.
              </p>
            </div>

            <div className="about-col diffuse-reveal">
              <span className="about-col-label">Reliability Standard</span>
              <p className="about-col-value">
                Correlated telemetry across logs, metrics, and traces with automated GitOps rollback workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

