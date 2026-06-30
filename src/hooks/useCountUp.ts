"use client";

import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

/**
 * Animate a number from 0 to `target` once `active` becomes true, using a
 * requestAnimationFrame loop with an ease-out curve. Honors
 * `prefers-reduced-motion` by snapping straight to the final value.
 */
export function useCountUp(target: number, active: boolean, duration = 1600): number {
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion → duration 0, so the loop snaps to the target on the first
    // frame. All setState happens inside the rAF callback (never synchronously
    // in the effect body), which keeps a single, paint-friendly update path.
    const effectiveDuration = prefersReduced ? 0 : duration;

    const step = (now: number) => {
      if (startTime.current === null) startTime.current = now;
      const elapsed = now - startTime.current;
      const progress = effectiveDuration <= 0 ? 1 : Math.min(elapsed / effectiveDuration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(step);
      }
    };

    frame.current = requestAnimationFrame(step);

    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      startTime.current = null;
    };
  }, [active, target, duration]);

  return value;
}
