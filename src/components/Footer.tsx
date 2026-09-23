import React from 'react';
import Image from 'next/image';
import { TALHA_CONFIG } from '@/lib/constants';

export const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="page-wrap">
        <div className="footer-brands">
          <Image
            src="/talha-portfolio-logo.png"
            alt="Talha"
            width={58}
            height={22}
            className="footer-logo"
          />
          <span className="footer-brand-sep" />
          <a
            href={TALHA_CONFIG.devistioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-devistio-link"
            aria-label="Devistio"
          >
            <Image
              src="/devistio-logo.png"
              alt="Devistio"
              width={82}
              height={28}
              className="footer-logo footer-devistio-logo"
            />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} {TALHA_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

