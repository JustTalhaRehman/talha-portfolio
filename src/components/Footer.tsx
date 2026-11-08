import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TALHA_CONFIG } from '@/lib/constants';

export const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="page-wrap">
        <Image
          src="/talha-portfolio-logo.png"
          alt="Talha"
          width={58}
          height={22}
          className="footer-logo"
        />
        <Link href="/writing">Engineering notes ↗</Link>
        <p>
          &copy; {new Date().getFullYear()} {TALHA_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
