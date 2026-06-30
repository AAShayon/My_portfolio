"use client";

import { ArrowUpRight, Maximize2 } from "lucide-react";
import { PhoneFrame } from "@/components/gallery/PhoneFrame";
import { WebMedia } from "@/components/gallery/WebMedia";
import type { Project } from "@/lib/portfolio";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project, trigger: HTMLElement) => void;
  /** Featured projects span wider in the grid. */
  className?: string;
};

export function ProjectCard({ project, onOpen, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-soft",
        className,
      )}
    >
      {/* Media — relative z-10 so its own controls sit above the stretched link. */}
      <div className="relative z-10 overflow-hidden rounded-xl p-4">
        <div className="transition-transform duration-500 group-hover:scale-105">
          {project.web ? (
            <WebMedia web={project.web} url={project.url} title={project.title} />
          ) : project.mobile ? (
            <PhoneFrame mobile={project.mobile} label={project.title} />
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-line bg-cream text-sm text-muted">
              Preview coming soon
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5">
        {project.role ? (
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
            {project.role}
          </p>
        ) : null}

        <h3 className="mt-1.5">
          <button
            type="button"
            onClick={(e) => onOpen(project, e.currentTarget)}
            aria-haspopup="dialog"
            className="text-left font-display text-xl font-semibold tracking-tight text-ink outline-none after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {project.title}
          </button>
        </h3>

        {project.tags.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line bg-cream px-2 py-0.5 font-mono text-[0.6rem] text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4 flex items-center justify-between gap-3 pt-1">
          <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-ink">
            <Maximize2 className="size-3.5" aria-hidden="true" />
            View details
          </span>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Visit ${project.title} live site`}
              className="relative z-10 inline-flex items-center gap-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent-deep hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Live
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
