import { BrowserFrame } from "@/components/gallery/BrowserFrame";
import { ScrollShot } from "@/components/gallery/ScrollShot";
import { ScrollVideo } from "@/components/gallery/ScrollVideo";
import type { WebAsset } from "@/lib/portfolio";

type WebMediaProps = {
  web: NonNullable<WebAsset>;
  url: string | null;
  title: string;
  className?: string;
};

/** A web project's media inside the flat browser frame: video or scrolling shot. */
export function WebMedia({ web, url, title, className }: WebMediaProps) {
  return (
    <BrowserFrame url={url} className={className}>
      {web.kind === "video" ? (
        <ScrollVideo
          sources={web.sources}
          poster={web.poster}
          aspect={web.aspect}
          label={`${title} — scrolled web recording`}
        />
      ) : (
        <ScrollShot
          src={web.image.src}
          width={web.image.width}
          height={web.image.height}
          alt={`${title} — full-page screenshot`}
          aspect="16/10"
        />
      )}
    </BrowserFrame>
  );
}
