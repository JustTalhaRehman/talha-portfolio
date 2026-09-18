'use client';

import React from 'react';
import { Github, Linkedin, MessageSquare, Mail, FileText } from 'lucide-react';
import { TALHA_CONFIG } from '@/lib/constants';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <p className="hero-tag">
        {TALHA_CONFIG.role}
      </p>

      <h1 className="hero-title">
        {TALHA_CONFIG.brandName}
      </h1>

      <h2 className="hero-lead">
        <span className="hero-lead-line">Multi-Cloud Infrastructure • Kubernetes</span>
        <span className="hero-lead-line">Production Reliability</span>
      </h2>

      <p className="hero-sub">
        {TALHA_CONFIG.shortBio}
      </p>

      <div className="hero-actions">
        <a href="#contact" className="btn-pill-primary">
          Get in touch
        </a>
        <a href="#work" className="btn-pill-outline">
          Explore projects
        </a>
        <a href="#capabilities" className="btn-pill-outline">
          Capabilities
        </a>
      </div>

      <div className="hero-socials">
        <a
          href={TALHA_CONFIG.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-circle"
          aria-label="GitHub Profile"
          title="GitHub"
        >
          <Github size={16} />
        </a>
        <a
          href={TALHA_CONFIG.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-circle"
          aria-label="LinkedIn Profile"
          title="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <a
          href={TALHA_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-circle"
          aria-label="WhatsApp Contact"
          title="WhatsApp"
        >
          <MessageSquare size={16} />
        </a>
        <a
          href={`mailto:${TALHA_CONFIG.email}`}
          className="social-circle"
          aria-label="Email Contact"
          title="Email"
        >
          <Mail size={16} />
        </a>
        <a
          href={TALHA_CONFIG.resumeUrl}
          className="social-circle"
          aria-label="Request CV"
          title="Request CV"
        >
          <FileText size={16} />
        </a>
      </div>
    </section>
  );
};
