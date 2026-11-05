'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Moon, FileDown } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { TALHA_CONFIG } from '@/lib/constants';

const sections = [
  ['work', 'Projects'],
  ['capabilities', 'Capabilities'],
  ['skills', 'Stack'],
  ['about', 'About'],
  ['contact', 'Contact'],
] as const;

function SectionLinks({ onClick }: { onClick?: React.MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <ul className="nav-links">
      {sections.map(([id, label]) => (
        <li key={id}><a href={`#${id}`} className="nav-link" onClick={onClick}>{label}</a></li>
      ))}
    </ul>
  );
}

export const Navbar = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="#hero" className="nav-brand" aria-label="Talha Rehman">
          <Image
            src="/talha-portfolio-logo.png"
            alt="Talha"
            width={72}
            height={26}
            priority
            className="nav-brand-logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <SectionLinks />
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Main navigation">
            <SectionLinks onClick={(event) => {
              event.currentTarget.closest('details')?.removeAttribute('open');
              if (event.currentTarget.hash) {
                document.getElementById(event.currentTarget.hash.slice(1))?.focus();
              }
            }} />
          </nav>
        </details>

        <div className="nav-actions">
          <a
            href={TALHA_CONFIG.resumeUrl}
            className="resume-pill-btn"
            data-email-dialog="cv"
            title="Request CV"
          >
            <FileDown size={14} className="resume-icon" />
            <span>Request CV</span>
          </a>

          <button
            id="theme-toggle"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={mounted ? `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode` : 'Toggle Theme'}
            title={mounted ? `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode` : 'Toggle Theme'}
            type="button"
          >
            {mounted ? (
              theme === 'dark' ? (
                <Moon className="moon-icon" size={16} aria-hidden="true" />
              ) : (
                <Sun className="sun-icon" size={16} aria-hidden="true" />
              )
            ) : (
              <>
                <Sun className="sun-icon" size={16} aria-hidden="true" />
                <Moon className="moon-icon" size={16} aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
