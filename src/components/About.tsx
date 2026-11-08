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
            I’m Talha, a DevOps and platform engineer. I work alongside product teams to simplify delivery and keep infrastructure dependable. I start by understanding what already exists, then make changes your team can review and own.
          </p>

          <p className="about-paragraph">I also founded <a href={TALHA_CONFIG.devistioUrl}>Devistio</a>, where I help teams with cloud and platform engineering.</p>

          <div className="about-pillars-grid">
            <div className="about-col diffuse-reveal">
              <span className="about-col-label">Operating Model</span>
              <p className="about-col-value">Remote &amp; Relocation</p>
              <p className="about-col-sub">Available worldwide</p>
            </div>

            <div className="about-col diffuse-reveal">
              <span className="about-col-label">Credentials</span>
              <p className="about-col-value">AWS Solutions Architect &amp; DevOps</p>
              <p className="about-col-sub">BS Software Engineering (UMT)</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

