import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Safely derive a bare hostname for the address pill; blank on any failure. */
function hostnameOf(url?: string | null): string {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

type BrowserFrameProps = {
  /** Live URL — only its hostname is shown (subtly). Never a fake URL. */
  url?: string | null;
  children: ReactNode;
  className?: string;
};

/**
 * Flat browser chrome: off-white top bar, three neutral flat dots, a minimal
 * address pill showing the project's domain (or blank), a hairline border and a
 * single soft shadow. No gradients, no fake URLs. Dots are taupe — deliberately
 * not the usual red/yellow/green (no stray green dot).
 */
export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  const domain = hostnameOf(url);
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-card shadow-soft", className)}>
      <div className="flex items-center gap-2 border-b border-line bg-card px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="ml-1 flex-1 truncate rounded-md border border-line bg-cream px-3 py-1 text-center font-mono text-[0.6rem] text-muted">
          {domain}
        </span>
      </div>
      <div className="relative bg-cream">{children}</div>
    </div>
  );
}
