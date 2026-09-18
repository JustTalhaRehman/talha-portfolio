import React from 'react';
import { Globe, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { TALHA_CONFIG } from '@/lib/constants';

export const About = () => {
  return (
    <section id="about" className="content-section diffuse-reveal">
      <div className="section-label">07 // Engineering Philosophy &amp; Approach</div>

      <p className="about-paragraph">
        My experience sits strongly on the engineering side of cloud architecture. I work by first understanding the existing environment and requirements, identifying technical risks and gaps, designing practical solutions, implementing them through Infrastructure as Code and automation, validating changes, and supporting them in production.
      </p>

      <div className="about-grid">
        <div className="about-col diffuse-reveal">
          <span className="about-col-label">Operating Model</span>
          <p className="about-col-value">{TALHA_CONFIG.location}</p>
          <p className="about-col-sub">Distributed cloud collaboration</p>
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
      </div>

      <div className="about-grid">
        <div className="about-col">
          <span className="about-col-label">Execution Lifecycle</span>
          <p className="about-col-value">
            Root cause analysis to solution design, automated IaC implementation, validation, and documentation.
          </p>
        </div>

        <div className="about-col">
          <span className="about-col-label">Security Mindset</span>
          <p className="about-col-value">
            Separation of Duties, IAM least-privilege, Kyverno admission policies, and default-deny networking.
          </p>
        </div>

        <div className="about-col">
          <span className="about-col-label">Reliability Standard</span>
          <p className="about-col-value">
            Correlated LGTM telemetry, blameless troubleshooting, and automated rollback workflows.
          </p>
        </div>
      </div>
    </section>
  );
};
