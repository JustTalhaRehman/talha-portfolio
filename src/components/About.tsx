import React from 'react';
import { TALHA_CONFIG } from '@/lib/constants';

export const About = () => {
  return (
    <section id="about" className="content-section diffuse-reveal">
      <div className="section-label">04 // About</div>

      <p className="about-paragraph">
        I build reliable, automated, and self-healing cloud platforms. My work sits at the foundation: designing resilient multi-cloud architectures, eliminating operational toil, and leaving systems resilient against failure.
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
        <div className="about-col diffuse-reveal">
          <span className="about-col-label">Execution Standard</span>
          <p className="about-col-value">
            Understand existing environments, design practical solutions, automate via IaC, and validate in staging before production.
          </p>
        </div>

        <div className="about-col diffuse-reveal">
          <span className="about-col-label">Security Mindset</span>
          <p className="about-col-value">
            Separation of Duties, IAM least-privilege, Kyverno admission policies, and default-deny network controls.
          </p>
        </div>

        <div className="about-col diffuse-reveal">
          <span className="about-col-label">Reliability Standard</span>
          <p className="about-col-value">
            Correlated telemetry across logs, metrics, and traces with automated GitOps rollback workflows.
          </p>
        </div>
      </div>
    </section>
  );
};
