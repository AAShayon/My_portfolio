"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useCallback, useRef, useState } from "react";
import { ScrollShot } from "@/components/gallery/ScrollShot";
import type { MobileAsset } from "@/lib/portfolio";
import { cn } from "@/lib/cn";

const PHONE_ASPECT = "9 / 19.5";

type PhoneFrameProps = {
  mobile: NonNullable<MobileAsset>;
  /** Project title — used for image alt text. */
  label: string;
  className?: string;
};

/**
 * Thin-bezel flat phone. Renders either a swipeable strip of screenshots
 * (snap-scroll + dots + keyboard arrows + native touch swipe) or, for a
 * `mobile-full` asset, a single tall screenshot auto-scrolling inside the phone.
 */
export function PhoneFrame({ mobile, label, className }: PhoneFrameProps) {
  const reduce = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const screens = mobile.images;
  const isFull = mobile.kind === "full";

  const goTo = useCallback(
    (index: number) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const clamped = Math.max(0, Math.min(screens.length - 1, index));
      scroller.scrollTo({
        left: clamped * scroller.clientWidth,
        behavior: reduce ? "auto" : "smooth",
      });
      setActive(clamped);
    },
    [screens.length, reduce],
  );

  const onScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller || scroller.clientWidth === 0) return;
    const index = Math.round(scroller.scrollLeft / scroller.clientWidth);
    setActive((prev) => (prev === index ? prev : index));
  };

  return (
    <div className={cn("mx-auto w-full max-w-[248px]", className)}>
      {/* Phone body */}
      <div className="rounded-[2.25rem] border border-line-ink bg-ink p-2 shadow-soft">
        <div
          className="relative overflow-hidden rounded-[1.75rem] bg-cream"
          style={{ aspectRatio: PHONE_ASPECT }}
        >
          {/* Notch */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-ink/80"
          />

          {isFull && screens[0] ? (
            <ScrollShot
              src={screens[0].src}
              width={screens[0].width}
              height={screens[0].height}
              alt={`${label} mobile screen`}
              aspect={PHONE_ASPECT}
              sizes="248px"
            />
          ) : (
            <div
              ref={scrollerRef}
              onScroll={onScroll}
              className="no-scrollbar flex size-full snap-x snap-mandatory overflow-x-auto"
            >
              {screens.map((img, i) => (
                <div key={img.src} className="relative h-full w-full shrink-0 snap-center">
                  <Image
                    src={img.src}
                    alt={`${label} mobile screen ${i + 1} of ${screens.length}`}
                    fill
                    sizes="248px"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Controls (strip only, more than one screen): Prev · dots · Next */}
      {!isFull && screens.length > 1 ? (
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous screen"
            className="inline-flex size-7 items-center justify-center rounded-full border border-line bg-card text-ink transition-opacity hover:bg-cream disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-1.5">
            {screens.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to screen ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
                className={cn(
                  "size-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  i === active ? "bg-accent" : "bg-line",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === screens.length - 1}
            aria-label="Next screen"
            className="inline-flex size-7 items-center justify-center rounded-full border border-line bg-card text-ink transition-opacity hover:bg-cream disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
