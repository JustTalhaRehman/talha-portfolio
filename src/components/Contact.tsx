'use client';

import React from 'react';
import Image from 'next/image';
import { TALHA_CONFIG } from '@/lib/constants';

export const Contact = () => {
  return (
    <section id="contact" className="contact-section diffuse-reveal">
      <div className="section-label">Contact</div>

      <h2 className="contact-headline">
        Have infrastructure worth automating or scaling?
      </h2>

      <p className="contact-sub">
        Send architectural requirements, platform challenges, or current codebases. I collaborate with engineering teams worldwide and respond with practical next steps.
      </p>

      <a
        href={`mailto:${TALHA_CONFIG.email}`}
        className="contact-email-link"
        onClick={(e) => {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent('open-email-modal', { detail: { mode: 'contact' } }));
        }}
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
          href={TALHA_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-item"
        >
          WhatsApp
        </a>
        <span className="contact-channel-separator" />
        <a
          href={TALHA_CONFIG.devistioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-item contact-devistio-link"
          aria-label="Devistio"
        >
          <Image
            src="/devistio-logo.png"
            alt="Devistio"
            width={72}
            height={24}
            className="contact-devistio-logo"
          />
        </span>
        <span className="contact-channel-separator" />
        <a
          href={TALHA_CONFIG.resumeUrl}
          className="contact-channel-item"
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('open-request-cv'));
          }}
        >
          Request CV
        </a>
      </div>
    </section>
  );
};

