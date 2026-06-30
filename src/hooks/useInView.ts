"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  /** 0–1 fraction of the element that must be visible to trigger. */
  threshold?: number;
  /** Margin around the root, e.g. shrink the viewport from the bottom. */
  rootMargin?: string;
  /** When true (default) the element only triggers once and then disconnects. */
  once?: boolean;
};

/**
 * Lightweight IntersectionObserver hook. Returns a ref to attach and a boolean
 * that flips true when the element scrolls into view. Used to gate count-ups,
 * gauges, and other reveal-driven animations without pulling in a library.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // SSR/old-browser guard: if the API is missing, reveal on the next frame so
    // content is never trapped invisible. The update is deferred (not called
    // synchronously in the effect body) to avoid a cascading render.
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
