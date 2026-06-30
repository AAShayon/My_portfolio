import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  withArrow?: boolean;
  /** When set the button renders as an anchor. http(s) links open in a new tab. */
  href?: string;
  /** When set (and no href) it renders a <button>. */
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
};

const VARIANTS: Record<ButtonVariant, string> = {
  // Solid coral → deep-coral hover (a color SWAP, never a gradient).
  primary: "bg-accent text-cream-text hover:bg-accent-deep",
  secondary: "border border-line bg-card text-ink hover:border-ink",
  ghost: "text-current hover:text-accent",
};

/**
 * Shared pill button. Renders an <a> when `href` is present (auto-adding
 * target/rel for external links) or a <button> otherwise. The optional arrow
 * nudges up-and-right on hover via the `group` utility.
 */
export function Button({
  children,
  variant = "primary",
  className,
  withArrow = false,
  href,
  onClick,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-colors duration-200",
    VARIANTS[variant],
    className,
  );

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
