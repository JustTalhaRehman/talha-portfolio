import React from 'react';
import { TALHA_CONFIG } from '@/lib/constants';

export const About = () => {
  return (
    <section id="about" className="content-section">
      <div className="section-label">05 // About</div>

      <p className="about-paragraph">
        I care about making infrastructure feel calm, automated, and invisible. My favorite work sits at the foundation: designing reliable platforms, eliminating operational toil, and leaving systems resilient against failure.
      </p>

      <div className="about-grid">
        <div className="about-col">
          <span className="about-col-label">Location</span>
          <p className="about-col-value">{TALHA_CONFIG.location}</p>
          <p className="about-col-sub">Available worldwide remotely</p>
        </div>

        <div className="about-col">
          <span className="about-col-label">Credentials</span>
          <p className="about-col-value">AWS Certified DevOps Engineer</p>
          <p className="about-col-sub">BS Computer Science</p>
        </div>

        <div className="about-col">
          <span className="about-col-label">Focus</span>
          <p className="about-col-value">Multi-Account AWS &amp; EKS</p>
          <p className="about-col-sub">GitOps, SRE, and Zero-Trust Security</p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-col">
          <span className="about-col-label">Taste</span>
          <p className="about-col-value">
            Clean architectures, least-privilege security, and reproducible code.
          </p>
        </div>

        <div className="about-col">
          <span className="about-col-label">Building</span>
          <p className="about-col-value">
            Self-healing clusters, automated pipelines, and unified telemetry.
          </p>
        </div>

        <div className="about-col">
          <span className="about-col-label">Style</span>
          <p className="about-col-value">
            Measure twice, automate once, test in staging, ship with zero downtime.
          </p>
        </div>
      </div>
    </section>
  );
};
