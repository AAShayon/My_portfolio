"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { PhoneFrame } from "@/components/gallery/PhoneFrame";
import { WebMedia } from "@/components/gallery/WebMedia";
import type { Project } from "@/lib/portfolio";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, video[controls], [tabindex]:not([tabindex="-1"])';

type ProjectLightboxProps = {
  project: Project;
  onClose: () => void;
};

/**
 * Accessible project modal. Traps focus, closes on Esc or backdrop click, locks
 * background scroll, and is announced as a dialog. Focus is returned to the
 * triggering card by the gallery once this unmounts. The scrim is a solid flat
 * color with opacity — never a gradient.
 */
export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );
      if (items.length === 0) return;
      const first = items[0]!;
      const last = items[items.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/80 p-4 sm:p-8">
      {/* Backdrop dismiss — a real button so it is keyboard-irrelevant (Esc and
          the close button handle keyboard) yet click-to-close works. It sits
          outside the dialog ref, so it never enters the focus trap. */}
      <button
        type="button"
        aria-label="Close project details"
        tabIndex={-1}
        onClick={onClose}
        className="fixed inset-0 cursor-default"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        className="relative z-10 my-4 w-full max-w-4xl rounded-2xl border border-line bg-card p-5 shadow-soft sm:my-8 sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full border border-line bg-card text-ink transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X className="size-4" aria-hidden="true" />
        </button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Media column */}
          <div className="flex flex-col gap-6">
            {project.web ? (
              <WebMedia web={project.web} url={project.url} title={project.title} />
            ) : null}
            {project.mobile ? (
              <PhoneFrame mobile={project.mobile} label={project.title} />
            ) : null}
            {!project.web && !project.mobile ? (
              <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-line bg-cream text-sm text-muted">
                No preview available yet
              </div>
            ) : null}
          </div>

          {/* Details column */}
          <div className="pr-10 lg:pr-0">
            {project.role ? (
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                {project.role}
              </p>
            ) : null}
            <h2 id="lightbox-title" className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              {project.title}
            </h2>
            {project.year ? (
              <p className="mt-1 font-mono text-xs text-muted">{project.year}</p>
            ) : null}
            {project.summary ? (
              <p className="mt-4 text-pretty text-muted">{project.summary}</p>
            ) : null}

            {project.tags.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line bg-cream px-2.5 py-1 font-mono text-[0.65rem] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}

            {project.challenges.length > 0 ? (
              <div className="mt-7 space-y-6">
                <h3 className="font-display text-lg font-semibold text-ink">Challenges &amp; Solutions</h3>
                {project.challenges.map((c, i) => (
                  <div key={i} className="rounded-xl border border-line bg-cream p-4">
                    <p className="font-mono text-xs uppercase tracking-wide text-accent">Challenge {i + 1}</p>
                    <p className="mt-1.5 text-sm font-medium text-ink">{c.title}</p>
                    <p className="mt-2 text-sm text-muted">
                      <span className="font-medium text-ink">Problem:</span> {c.problem}
                    </p>
                    <p className="mt-1.5 text-sm text-muted">
                      <span className="font-medium text-ink">Solution:</span> {c.solution}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {(project.url || project.playStore || project.appStore) ? (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-cream-text transition-colors hover:bg-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Visit live site
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : null}
                {project.playStore ? (
                  <a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Play Store
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : null}
                {project.appStore ? (
                  <a
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    App Store
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
