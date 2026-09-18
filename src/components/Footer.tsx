import React from 'react';
import { TALHA_CONFIG } from '@/lib/constants';

export const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="page-wrap">
        <p>
          &copy; {new Date().getFullYear()} {TALHA_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
