import type { CSSProperties } from "react";

import type { Media } from "@/lib/media";

import Film from "./Film";

// One framed piece of work: image, or a muted looping film.
export default function MediaBox({
  media,
  ratio,
  style,
  priority,
}: {
  media: Media;
  ratio: string;
  style?: CSSProperties;
  priority?: boolean;
}) {
  const isVideo = media.kind === "video";
  return (
    <div className="ph" style={{ aspectRatio: ratio, ...(isVideo ? { background: "#111111" } : {}), ...style }}>
      {isVideo ? (
        <Film stream={media.stream} fallback={media.src} poster={media.poster} label={media.alt} />
      ) : (
        // Cloudinary already resizes and picks the format (f_auto,q_auto).
        // eslint-disable-next-line @next/next/no-img-element
        <img src={media.src} alt={media.alt} loading={priority ? "eager" : "lazy"} decoding="async" />
      )}
    </div>
  );
}
