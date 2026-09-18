import React from 'react';
import { TALHA_CONFIG } from '@/lib/constants';

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-label">06 // Contact</div>

      <h2 className="contact-headline">
        Have infrastructure worth automating or scaling?
      </h2>

      <p className="contact-sub">
        Send the architecture, requirements, or repo. I&apos;m based in Gujranwala and reply with practical engineering next steps.
      </p>

      <a href={`mailto:${TALHA_CONFIG.email}`} className="contact-email-link">
        {TALHA_CONFIG.email}
      </a>

      <p className="contact-location">
        {TALHA_CONFIG.location}
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
          href={TALHA_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-item"
        >
          WhatsApp ({TALHA_CONFIG.phone})
        </a>
        <span className="contact-channel-separator" />
        <a
          href={TALHA_CONFIG.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-item"
        >
          Resume
        </a>
      </div>
    </section>
  );
};
