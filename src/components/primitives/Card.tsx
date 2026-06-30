import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "light" | "ink";

type CardProps = {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
  as?: "div" | "article" | "li";
};

/**
 * Flat card. Depth comes from a thin hairline border plus a single soft
 * downward shadow — never a gradient. The ink variant sits on dark sections.
 */
export function Card({ variant = "light", className, children, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border",
        variant === "ink"
          ? "border-line-ink bg-card-ink"
          : "border-line bg-card shadow-soft",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
