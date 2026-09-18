'use client';

import React from 'react';
import { Github, Linkedin, MessageSquare, Mail, FileText, ArrowDown } from 'lucide-react';
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
        {TALHA_CONFIG.tagline}
      </h2>

      <p className="hero-sub">
        {TALHA_CONFIG.shortBio}
      </p>

      <div className="hero-actions">
        <a href="#contact" className="btn-pill-primary">
          Get in touch
        </a>
        <a href="#experience" className="btn-pill-outline">
          Explore engineering work
        </a>
        <a
          href={TALHA_CONFIG.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill-outline"
        >
          <FileText size={13} style={{ marginRight: '6px' }} />
          Download Resume
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
          title="WhatsApp (+92 315 6569204)"
        >
          <MessageSquare size={16} />
        </a>
        <a
          href={`mailto:${TALHA_CONFIG.email}`}
          className="social-circle"
          aria-label="Email Contact"
          title="Email (talha32rehman@gmail.com)"
        >
          <Mail size={16} />
        </a>
        <a
          href={TALHA_CONFIG.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-circle"
          aria-label="Download Resume"
          title="Download Resume (PDF)"
        >
          <FileText size={16} />
        </a>
      </div>
    </section>
  );
};
