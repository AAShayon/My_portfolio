"use client";

import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { site } from "@/content/site";

type FooterLink = {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
};

const socialLabels: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  whatsapp: "WhatsApp",
  twitter: "Twitter / X",
  facebook: "Facebook",
};

const connectLinks: FooterLink[] = Object.entries(site.social)
  .filter(([, href]) => href.length > 0)
  .map(([key, href]) => ({
    label: socialLabels[key] ?? key,
    href,
    external: true,
  }));

const columns: { heading: string; links: readonly FooterLink[] }[] = [
  { heading: "Main", links: site.nav },
  { heading: "Connect", links: connectLinks },
].filter((column) => column.links.length > 0);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Section
      as="footer"
      variant="cream"
      aria-label="Site footer"
      containerClassName="pb-0"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
              {column.heading}
            </h3>
            <ul className="mt-4">
              {column.links.map((link) => (
                <li key={`${column.heading}-${link.label}`}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 py-1 text-sm text-ink/80 transition-colors hover:text-accent focus-visible:text-accent"
                    >
                      {link.label}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="inline-block py-1 text-sm text-ink/80 transition-colors hover:text-accent focus-visible:text-accent"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="my-8 border-t border-line" />

      <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 font-mono text-xs text-muted">
        <span>Built by {site.profile.name}</span>
        <span aria-hidden="true">·</span>
        <span>&copy; {year} All rights reserved</span>
      </p>
    </Section>
  );
}