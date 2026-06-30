"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectLightbox } from "@/components/gallery/ProjectLightbox";
import type { Project } from "@/lib/portfolio";

export type HeroSlide = {
  src: string;
  title: string;
};

export function HeroSlideshow({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const slides: HeroSlide[] = projects.flatMap((p) => {
    if (p.web?.kind === "video" && p.web.poster) {
      return { src: p.web.poster, title: p.title };
    }
    if (p.mobile?.images?.[0]) {
      return { src: p.mobile.images[0].src, title: p.title };
    }
    return [];
  });

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [paused, slides.length, next]);

  const handleSlideClick = useCallback(() => {
    const project = projects[current];
    if (!project) return;
    setActiveProject(project);
  }, [projects, current]);

  useEffect(() => {
    if (activeProject === null && triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [activeProject]);

  if (slides.length === 0) return null;

  const slide = slides[current];

  return (
    <>
      <div
        className="relative mt-12 h-[38vh] min-h-[240px] overflow-hidden rounded-3xl border border-line sm:mt-16 md:h-[52vh]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <button
              type="button"
              onClick={handleSlideClick}
              className="group absolute inset-0 w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
              aria-label={`View details for ${slide.title}`}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16">
                <p className="text-xs font-medium tracking-widest uppercase text-white/70">
                  Featured Project
                </p>
                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  {slide.title}
                </h3>
              </div>
            </button>
          </motion.div>
        </AnimatePresence>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition-colors hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition-colors hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </>
        )}

        {slides.length > 1 && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        )}
      </div>

      {activeProject ? (
        <ProjectLightbox project={activeProject} onClose={() => setActiveProject(null)} />
      ) : null}
    </>
  );
}
