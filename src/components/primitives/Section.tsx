import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionVariant = "cream" | "ink";

type SectionProps = {
  id?: string;
  variant?: SectionVariant;
  /** Classes for the outer full-bleed band. */
  className?: string;
  /** Classes for the centered inner container (override padding/width here). */
  containerClassName?: string;
  children: ReactNode;
  as?: "section" | "footer" | "div";
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/**
 * Full-bleed alternating band (cream or ink) with a centered max-width
 * container. Color transitions between sections are solid blocks — never
 * gradients — which is the core of the flat aesthetic.
 */
export function Section({
  id,
  variant = "cream",
  className,
  containerClassName,
  children,
  as: Tag = "section",
  ...aria
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative w-full",
        variant === "ink" ? "bg-ink text-cream-text" : "bg-cream text-ink",
        className,
      )}
      {...aria}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 md:py-18 lg:py-24",
          containerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
