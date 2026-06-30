"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "@/components/primitives/Card";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const SWIPE_THRESHOLD = 40;

export function Testimonials() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const items = site.testimonials;
  const count = items.length;

  // Hide the whole section when there are no real testimonials yet.
  if (count === 0) return null;

  function goTo(index: number) {
    setActive(((index % count) + count) % count);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];
    setTouchStartX(touch ? touch.clientX : null);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX === null) return;
    const touch = event.changedTouches[0];
    if (!touch) return;
    const deltaX = touch.clientX - touchStartX;
    if (deltaX > SWIPE_THRESHOLD) goTo(active - 1);
    else if (deltaX < -SWIPE_THRESHOLD) goTo(active + 1);
    setTouchStartX(null);
  }

  const current = items[active];

  return (
    <Section id="testimonials" variant="cream">
      <Reveal>
        <Kicker tone="accent">Testimonials</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          What people say
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="mt-10 rounded-2xl"
        >
          <div aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.3 }}
              >
                {current ? (
                  <Card variant="light" className="p-8 md:p-10">
                    <Quote className="size-8 text-accent" aria-hidden="true" />
                    <blockquote className="mt-5 text-balance text-xl text-ink md:text-2xl">
                      {current.quote}
                    </blockquote>
                    <div className="mt-8">
                      <p className="font-medium text-ink">{current.name}</p>
                      <p className="text-sm text-muted">
                        {current.company ? `${current.role}, ${current.company}` : current.role}
                      </p>
                    </div>
                  </Card>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          {count > 1 ? (
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {items.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === active ? "true" : undefined}
                    className={cn(
                      "size-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      i === active ? "bg-accent" : "bg-line",
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(active - 1)}
                  aria-label="Previous testimonial"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-card text-ink transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(active + 1)}
                  aria-label="Next testimonial"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-card text-ink transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}
