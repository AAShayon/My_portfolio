"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/primitives/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const initials = site.profile.wordmark
  .split(" ")
  .map((word) => word[0] ?? "")
  .join("")
  .slice(0, 2)
  .toUpperCase();

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Solid-cream + hairline + shrink once the user scrolls past the hero top.
  // setState lives in the scroll/rAF callback, never synchronously in the body.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    const id = requestAnimationFrame(onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(id);
    };
  }, []);

  // Lock body scroll + wire Escape while the mobile menu is open; restore focus
  // to the toggle on close.
  useEffect(() => {
    if (!menuOpen) return;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      toggle?.focus();
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-line bg-cream/95 backdrop-blur-sm" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        {/* Left: monogram + availability */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="inline-flex size-9 items-center justify-center rounded-lg bg-ink font-display text-sm font-extrabold text-cream-text"
            aria-label={`${site.profile.name} — home`}
          >
            {initials}
          </a>
        </div>

        {/* Center: anchors (desktop) */}
        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CTA (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <Button href={site.cta.href} className="hidden md:inline-flex" withArrow>
            {site.cta.buttonLabel}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-card text-ink md:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen flat menu */}
      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 flex flex-col bg-cream px-5 pb-10 pt-6 md:hidden"
        >
          <ul className="mt-2 flex flex-col gap-1">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-line py-4 font-display text-3xl font-bold text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={site.cta.href}
            className="mt-8 w-full justify-center py-3 text-base"
            withArrow
          >
            {site.cta.buttonLabel}
          </Button>
        </div>
      ) : null}
    </header>
  );
}
