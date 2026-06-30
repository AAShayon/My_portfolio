"use client";

import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Source = { src: string; type: string };

type ScrollVideoProps = {
  sources: Source[];
  poster: string | null;
  /** CSS aspect-ratio string, e.g. "16/10". */
  aspect: string;
  /** Accessible label describing the recording. */
  label: string;
};

/**
 * A muted, looping scrolled-webpage recording. Autoplays only while ≥50% in
 * view (IntersectionObserver) and pauses offscreen to save bandwidth/battery.
 * Under reduced-motion it never autoplays — it shows the poster and an explicit
 * play button. A small play/pause affordance is always available.
 */
export function ScrollVideo({ sources, poster, aspect, label }: ScrollVideoProps) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // In-view autoplay (skipped entirely under reduced motion).
  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video || reduce) return;
    if (typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          void video.play().catch(() => {
            /* autoplay can be rejected — ignore, user can press play */
          });
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.5, 1] },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  // Reflect actual play state in the affordance.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // don't trigger the card's lightbox
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  };

  return (
    <div ref={containerRef} className="relative w-full" style={{ aspectRatio: aspect }}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster ?? undefined}
        aria-label={label}
        tabIndex={-1}
        className="size-full bg-cream object-cover object-top"
      >
        {sources.map((s) => (
          <source key={s.type} src={s.src} type={s.type} />
        ))}
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause preview" : "Play preview"}
        className="absolute bottom-3 right-3 inline-flex size-9 items-center justify-center rounded-full border border-line bg-card/90 text-ink transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {playing ? (
          <Pause className="size-4" aria-hidden="true" />
        ) : (
          <Play className="size-4" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
