"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectCard } from "@/components/gallery/ProjectCard";
import { ProjectLightbox } from "@/components/gallery/ProjectLightbox";
import type { Project } from "@/lib/portfolio";
import { cn } from "@/lib/cn";

type Filter = "all" | "web" | "mobile";

type WorkGalleryGridProps = {
  projects: Project[];
  /** Available type filters (both present → show the All/Web/Mobile tabs). */
  filters: ("web" | "mobile")[];
};

const FILTER_LABELS: Record<Filter, string> = {
  all: "All",
  web: "Web",
  mobile: "Mobile",
};

function matches(project: Project, filter: Filter): boolean {
  if (filter === "all") return true;
  if (filter === "web") return project.type === "web" || project.type === "both";
  return project.type === "mobile" || project.type === "both";
}

export function WorkGalleryGrid({ projects, filters }: WorkGalleryGridProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const showTabs = filters.length === 2;
  const tabs: Filter[] = ["all", "web", "mobile"];

  const open = useCallback((project: Project, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setActive(project);
  }, []);

  const close = useCallback(() => setActive(null), []);

  // Return focus to the triggering card once the lightbox has closed.
  useEffect(() => {
    if (active === null && triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [active]);

  const visible = projects.filter((p) => matches(p, filter));

  return (
    <div className="mt-10">
      {showTabs ? (
        <div role="group" aria-label="Filter projects by type" className="mb-8 flex flex-wrap gap-2">
          {tabs.map((t) => {
            const selected = filter === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setFilter(t)}
                aria-pressed={selected}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  selected
                    ? "border-accent bg-accent text-cream-text"
                    : "border-line-ink bg-card-ink text-muted-ink hover:text-cream-text",
                )}
              >
                {FILTER_LABELS[t]}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard
            key={project.folder}
            project={project}
            onOpen={open}
            className={project.featured ? "sm:col-span-2" : undefined}
          />
        ))}
      </div>

      {active ? <ProjectLightbox project={active} onClose={close} /> : null}
    </div>
  );
}
