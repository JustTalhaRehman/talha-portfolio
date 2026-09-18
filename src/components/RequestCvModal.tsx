'use client';

import React, { useState, useEffect } from 'react';
import { X, Mail, ExternalLink, Copy, Check, FileDown } from 'lucide-react';
import { TALHA_CONFIG } from '@/lib/constants';

export const RequestCvModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-request-cv', handleOpen);
    return () => window.removeEventListener('open-request-cv', handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const subject = encodeURIComponent('Request for CV — Talha Rehman');
  const body = encodeURIComponent(
    'Hi Talha,\n\nI came across your portfolio (talha.devistio.com) and would like to request an updated copy of your CV / Resume for platform and DevOps engineering opportunities.\n\nLooking forward to hearing from you.\n\nBest regards,'
  );

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${TALHA_CONFIG.email}&su=${subject}&body=${body}`;
  const defaultMailtoUrl = `mailto:${TALHA_CONFIG.email}?subject=${subject}&body=${body}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(TALHA_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <FileDown size={18} />
            </div>
            <div>
              <h3 id="modal-title" className="modal-title">Request CV</h3>
              <p className="modal-subtitle">Send to {TALHA_CONFIG.email}</p>
            </div>
          </div>
          <button
            className="modal-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close dialog"
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        <p className="modal-desc">
          Choose your preferred way to send the request. The email recipient, subject, and message are prefilled for you.
        </p>

        <div className="modal-actions-list">
          {/* Gmail Web Option */}
          <a
            href={gmailWebUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-action-primary"
            onClick={() => setIsOpen(false)}
          >
            <div className="action-icon-wrap">
              <ExternalLink size={16} />
            </div>
            <div className="action-text">
              <span className="action-label">Open in Gmail (Web)</span>
              <span className="action-hint">Prefilled composer in your browser</span>
            </div>
          </a>

          {/* Default Mail App */}
          <a
            href={defaultMailtoUrl}
            className="modal-action-secondary"
            onClick={() => setIsOpen(false)}
          >
            <div className="action-icon-wrap">
              <Mail size={16} />
            </div>
            <div className="action-text">
              <span className="action-label">Default Mail Client</span>
              <span className="action-hint">Apple Mail, Outlook, Thunderbird</span>
            </div>
          </a>

          {/* Copy Email */}
          <button
            type="button"
            className="modal-action-secondary copy-btn"
            onClick={handleCopy}
          >
            <div className="action-icon-wrap">
              {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
            </div>
            <div className="action-text">
              <span className="action-label">
                {copied ? 'Copied to Clipboard!' : `Copy ${TALHA_CONFIG.email}`}
              </span>
              <span className="action-hint">
                {copied ? 'Ready to paste in your email' : 'Copy address to paste manually'}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
