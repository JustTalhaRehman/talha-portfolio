'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const root = document.documentElement;
    let visible = true;
    let disposed = false;

    function syncPlayback() {
      if (!video || disposed) return;
      video.playbackRate = 0.9;
      const shouldPlay = visible && !document.hidden &&
        !motion.matches && !pausedByUser;
      if (shouldPlay) {
        void video.play().then(() => {
          if (disposed || document.hidden || !visible || motion.matches) video.pause();
        }).catch(() => {
          // The poster remains visible if autoplay is blocked.
        });
      } else {
        video.pause();
      }
    }

    function syncTheme() {
      if (!video) return;
      const theme = root.dataset.theme === 'light' ? 'light' : 'dark';
      const source = `/videos/hero-${theme}.mp4`;
      if (video.getAttribute('src') !== source) {
        video.poster = `/videos/hero-${theme}-poster.webp`;
        video.src = source;
      }
      syncPlayback();
    }

    const themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    video.addEventListener('loadeddata', syncPlayback);
    syncTheme();

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(video);
    motion.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);
    syncPlayback();

    return () => {
      disposed = true;
      observer.disconnect();
      themeObserver.disconnect();
      video.removeEventListener('loadeddata', syncPlayback);
      motion.removeEventListener('change', syncPlayback);
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
    };
  }, [pausedByUser]);

  return (
    <>
      <div className="hero-backdrop" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-background-video"
          poster="/videos/hero-dark-poster.webp"
          preload="metadata"
          muted
          loop
          playsInline
          tabIndex={-1}
          onPlaying={() => {
            setPlaying(true);
            setHasStarted(true);
          }}
          onPause={() => setPlaying(false)}
        />
        <div className="hero-backdrop-overlay" />
      </div>
      {hasStarted && (
        <button
          type="button"
          className="hero-motion-toggle"
          aria-label={playing ? 'Pause background animation' : 'Play background animation'}
          onClick={() => setPausedByUser(!pausedByUser)}
        >
          {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        </button>
      )}
    </>
  );
}
