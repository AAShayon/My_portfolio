import Image from "next/image";
import type { ImageAsset } from "@/config/images";
import { cn } from "@/lib/cn";

type MediaFrameProps = {
  asset: ImageAsset;
  /** Override the manifest alt (e.g. for context-specific phrasing). */
  alt?: string;
  /** Responsive sizes hint — pass the real rendered width breakpoints. */
  sizes?: string;
  /** Eager-load above-the-fold images; everything else lazy-loads by default. */
  priority?: boolean;
  /** Outer frame classes (borders, rounding, ring, etc.). */
  className?: string;
  imgClassName?: string;
  /** Force a specific aspect ratio (defaults to the asset's intrinsic ratio). */
  aspectRatio?: string;
  framed?: boolean;
};

/**
 * next/image wrapper that reserves space via an aspect-ratio box (no CLS) and
 * applies the flat framed look. Uses `fill` + object-cover so any frame ratio
 * crops cleanly. Decorative images should pass `alt=""`.
 */
export function MediaFrame({
  asset,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className,
  imgClassName,
  aspectRatio,
  framed = true,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-card-ink",
        framed && "rounded-2xl border border-line",
        className,
      )}
      style={{ aspectRatio: aspectRatio ?? `${asset.width} / ${asset.height}` }}
    >
      <Image
        src={asset.src}
        alt={alt ?? asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
