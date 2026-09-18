'use client';

import React from 'react';
import Link from 'next/link';
import { Sun, Moon, FileDown } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { TALHA_CONFIG } from '@/lib/constants';

export const Navbar = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="#hero" className="nav-brand" aria-label="Talha Rehman">
          {TALHA_CONFIG.brandName}
        </Link>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#work" className="nav-link">Projects</a></li>
            <li><a href="#capabilities" className="nav-link">Capabilities</a></li>
            <li><a href="#skills" className="nav-link">Stack</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href={TALHA_CONFIG.resumeUrl}
            className="resume-pill-btn"
            title="Request CV"
          >
            <FileDown size={13} />
            <span>CV</span>
          </a>

          <div className="status-pill" title="Current Status">
            <span className="status-dot">
              <span className="status-dot-ping" />
              <span className="status-dot-core" />
            </span>
            <span>Available</span>
          </div>

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
