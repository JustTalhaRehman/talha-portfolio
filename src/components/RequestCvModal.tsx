'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Mail, ExternalLink, Copy, Check, FileDown } from 'lucide-react';
import { TALHA_CONFIG } from '@/lib/constants';

export const RequestCvModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mode, setMode] = useState<'cv' | 'contact'>('cv');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || typeof dialog.showModal !== 'function') return;
    let opener: HTMLAnchorElement | null = null;

    function openDialog(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 ||
          event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>('a[data-email-dialog]')
        : null;
      if (!link || !dialog || dialog.open) return;
      event.preventDefault();
      opener = link;
      setMode(link.dataset.emailDialog === 'cv' ? 'cv' : 'contact');
      setCopyStatus('idle');
      dialog.showModal();
    }

    function restoreFocus() {
      opener?.focus();
      opener = null;
    }

    document.addEventListener('click', openDialog);
    dialog.addEventListener('close', restoreFocus);
    return () => {
      document.removeEventListener('click', openDialog);
      dialog.removeEventListener('close', restoreFocus);
    };
  }, []);

  const close = () => dialogRef.current?.close();

  const isCv = mode === 'cv';

  const title = isCv ? 'Request CV' : 'Send an Email';
  const subtitle = `Send to ${TALHA_CONFIG.email}`;
  const desc = isCv
    ? 'Choose your preferred way to send the request. The email recipient, subject, and message are prefilled for you.'
    : 'Choose your preferred way to get in touch. The email recipient and a starter note are prefilled for you.';

  const subject = encodeURIComponent(
    isCv
      ? 'Request for CV: Talha Rehman'
      : 'Platform & DevOps Engineering Inquiry: Talha Rehman'
  );
  const body = encodeURIComponent(
    isCv
      ? 'Hi Talha,\n\nI came across your portfolio (talha.devistio.com) and would like to request an updated copy of your CV / Resume for platform and DevOps engineering opportunities.\n\nLooking forward to hearing from you.\n\nBest regards,'
      : 'Hi Talha,\n\nI came across your portfolio (talha.devistio.com) and would like to connect regarding cloud architecture, Kubernetes platforms, or engineering opportunities.\n\nLooking forward to speaking with you.\n\nBest regards,'
  );

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${TALHA_CONFIG.email}&su=${subject}&body=${body}`;
  const defaultMailtoUrl = `mailto:${TALHA_CONFIG.email}?subject=${subject}&body=${body}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(TALHA_CONFIG.email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal-card"
      aria-labelledby="modal-title"
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) close();
      }}
    >
      <div className="modal-header">
        <div className="modal-title-group">
          <div className="modal-icon-badge">
            {isCv ? <FileDown size={18} /> : <Mail size={18} />}
          </div>
          <div>
            <h3 id="modal-title" className="modal-title">{title}</h3>
            <p className="modal-subtitle">{subtitle}</p>
          </div>
        </div>
        <button
          className="modal-close-btn"
          onClick={close}
          aria-label="Close dialog"
          type="button"
        >
          <X size={18} />
        </button>
      </div>

      <p className="modal-desc">{desc}</p>

      <div className="modal-actions-list">
        {/* Gmail Web Option */}
        <a
          href={gmailWebUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-action-primary"
          onClick={close}
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
          onClick={close}
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
            {copyStatus === 'copied' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
          </div>
          <div className="action-text">
            <span className="action-label">
              {copyStatus === 'copied' ? 'Copied to Clipboard!' : `Copy ${TALHA_CONFIG.email}`}
            </span>
            <span className="action-hint">
              {copyStatus === 'failed' ? 'Copy unavailable. Select the address above.' :
                copyStatus === 'copied' ? 'Ready to paste in your email' : 'Copy address to paste manually'}
            </span>
          </div>
        </button>
      </div>
      <span role="status" className="sr-only">
        {copyStatus === 'copied' && 'Email address copied.'}
        {copyStatus === 'failed' && `Could not copy. Select ${TALHA_CONFIG.email} manually.`}
      </span>
    </dialog>
  );
};
