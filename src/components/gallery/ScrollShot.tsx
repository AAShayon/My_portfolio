"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

type ScrollShotProps = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  /** Frame viewport aspect-ratio, e.g. "16/10". */
  aspect?: string;
  sizes?: string;
};

/**
 * A tall full-page screenshot clipped to the frame that slowly auto-scrolls
 * top→bottom→top (the fallback when there's no web video). Animation runs only
 * while in view or hovered, and is disabled under reduced-motion (static, top-
 * aligned). The scroll distance is computed in pure CSS via container units —
 * see the `scroll-shot` keyframe in globals.css.
 */
export function ScrollShot({
  src,
  width,
  height,
  alt = "",
  aspect = "16/10",
  sizes = "(min-width:1024px) 50vw, 100vw",
}: ScrollShotProps) {
  const reduce = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ once: false, threshold: 0.4 });
  const [hovered, setHovered] = useState(false);

  const active = !reduce && (inView || hovered);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full overflow-hidden bg-cream [container-type:size]"
      style={{ aspectRatio: aspect }}
    >
      <div className={cn("absolute inset-x-0 top-0", active && "scroll-shot-animate")}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes={sizes}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
