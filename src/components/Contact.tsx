import React from 'react';
import { TALHA_CONFIG } from '@/lib/constants';

export const Contact = () => {
  return (
    <section tabIndex={-1} id="contact" className="contact-section diffuse-reveal">
      <div className="section-label">Contact</div>

      <h2 className="contact-headline">
        What is getting in your team’s way?
      </h2>

      <p className="contact-sub">
        Tell me about the release process, AWS environment or reliability problem you want to improve. Share what your team needs and what you have already tried. I am open to remote roles and project work across the United States, Canada, Europe, the Gulf, Australia, New Zealand, Singapore and worldwide.
      </p>

      <a
        href={`mailto:${TALHA_CONFIG.email}`}
        className="contact-email-link"
        data-email-dialog="contact"
      >
        {TALHA_CONFIG.email}
      </a>

      <p className="contact-location">
        {TALHA_CONFIG.location} · {TALHA_CONFIG.phone}
      </p>

      <div className="contact-channels-bar">
        <a
          href={TALHA_CONFIG.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-item"
        >
          GitHub
        </a>
        <span className="contact-channel-separator" />
        <a
          href={TALHA_CONFIG.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-item"
        >
          LinkedIn
        </a>
        <span className="contact-channel-separator" />
        <a
          href={TALHA_CONFIG.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-item"
        >
          Medium
        </a>
        <span className="contact-channel-separator" />
        <a
          href={TALHA_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-item"
        >
          WhatsApp
        </a>
        <span className="contact-channel-separator" />
        <a
          href={TALHA_CONFIG.resumeUrl}
          className="contact-channel-item"
          data-email-dialog="cv"
        >
          Request CV
        </a>
      </div>
    </section>
  );
};
