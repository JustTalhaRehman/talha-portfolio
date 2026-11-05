'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('diffuse-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    const elements = document.querySelectorAll('.diffuse-reveal');
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add('diffuse-pending');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove('diffuse-pending', 'diffuse-in-view'));
    };
  }, []);
}
