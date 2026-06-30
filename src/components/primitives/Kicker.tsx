import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type KickerTone = "accent" | "muted" | "muted-ink" | "ink" | "cream";

type KickerProps = {
  children: ReactNode;
  /** Optional index rendered as a dimmed `// 01` suffix (mono eyebrow style). */
  index?: string;
  tone?: KickerTone;
  className?: string;
  as?: "p" | "span" | "div";
};

const TONE: Record<KickerTone, string> = {
  accent: "text-accent",
  muted: "text-muted",
  "muted-ink": "text-muted-ink",
  ink: "text-ink",
  cream: "text-cream-text",
};

/**
 * The monospace uppercase eyebrow that is core to the look: kickers like
 * `CASE STUDY` and tag rows like `FLUTTER APP / WEB PLATFORM   // 01`.
 */
export function Kicker({ children, index, tone = "accent", className, as: Tag = "p" }: KickerProps) {
  return (
    <Tag
      className={cn(
        "font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em]",
        TONE[tone],
        className,
      )}
    >
      {children}
      {index ? <span className="ml-3 opacity-50">{`// ${index}`}</span> : null}
    </Tag>
  );
}
