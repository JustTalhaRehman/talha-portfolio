'use client';

import React, { useEffect, useRef, useState } from 'react';
import { METRICS } from '@/lib/constants';

interface ParsedMetric {
  targetNum: number;
  suffix: string;
  decimals: number;
}

function parseMetric(val: string): ParsedMetric {
  const match = val.match(/^([\d.]+)(.*)$/);
  if (!match) return { targetNum: 0, suffix: val, decimals: 0 };
  const num = parseFloat(match[1]);
  const suffix = match[2] || '';
  const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0;
  return { targetNum: num, suffix, decimals };
}

const AnimatedMetric = ({
  value,
  label,
  isVisible,
  mounted,
}: {
  value: string;
  label: string;
  isVisible: boolean;
  mounted: boolean;
}) => {
  const { targetNum, suffix, decimals } = parseMetric(value);
  const [currentVal, setCurrentVal] = useState<number>(0);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    if (!isVisible || !mounted) return;

    setHasStartedAnimation(true);
    let startTime: number | null = null;
    const duration = 1800; // ms
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo: energetic rapid ascent, decelerates smoothly into place
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const nextVal = easeProgress * targetNum;

      setCurrentVal(nextVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrentVal(targetNum);
        setHasCompleted(true);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, mounted, targetNum]);

  // Determine displayed text
  let displayValue = value;
  if (mounted) {
    if (hasCompleted) {
      displayValue = value; // Permanently lock into original value once completed
    } else if (hasStartedAnimation) {
      displayValue = `${decimals > 0 ? currentVal.toFixed(decimals) : Math.round(currentVal)}${suffix}`;
    } else {
      displayValue = `0${decimals > 0 ? '.' + '0'.repeat(decimals) : ''}${suffix}`;
    }
  }

  return (
    <div className="trust-card">
      <div className="trust-value">
        <span className="trust-number">{displayValue}</span>
      </div>
      <span className="trust-label">{label}</span>
    </div>
  );
};

export const Trust = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [mounted]);

  return (
    <section ref={sectionRef} id="trust" className="trust-section diffuse-reveal">
      <div className="trust-grid">
        {METRICS.map((metric, idx) => (
          <AnimatedMetric
            key={idx}
            value={metric.value}
            label={metric.label}
            isVisible={hasStarted}
            mounted={mounted}
          />
        ))}
      </div>
    </section>
  );
};
