/**
 * Canonical image manifest for the static section art in /public/images. Each
 * entry carries intrinsic dimensions (so next/image reserves space — no layout
 * shift) plus a default alt string.
 *
 * Project/work imagery is NOT here — it is discovered from /public/portfolio at
 * build time (see src/lib/portfolio.ts). Placeholder art can be regenerated from
 * higgsfield-image-prompts.md.
 */
export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const images = {
  heroTexture: {
    src: "/images/hero-texture.png",
    width: 2400,
    height: 1000,
    alt: "",
  },
  capMobile: {
    src: "/images/cap-mobile.png",
    width: 1000,
    height: 750,
    alt: "Mobile app development",
  },
  capWeb: {
    src: "/images/cap-web.png",
    width: 1000,
    height: 750,
    alt: "Full-stack web development",
  },
  ogImage: {
    src: "/images/og-image.png",
    width: 1200,
    height: 630,
    alt: "",
  },
} satisfies Record<string, ImageAsset>;
