import Link from "next/link";

import MediaBox from "./MediaBox";
import type { Media } from "@/lib/media";

export type TileProps = {
  title: string;
  blurb: string;
  media: Media;
  wide: boolean;
  tags: string[];
  concept?: boolean;
  href?: string;
};

// Work card: big frame, then title and line on the left, tags on the right.
export default function WorkTile({ title, blurb, media, wide, tags, concept, href }: TileProps) {
  const body = (
    <>
      <MediaBox media={media} ratio={wide ? "16/9" : "4/5"} />
      <div className="cap">
        <div>
          <b>{title}</b>
          <span className="mut">{blurb}</span>
        </div>
        <div className="tags">
          {concept && <span className="tag concept">Studio concept</span>}
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
  // Brand websites are static pages outside the app, so they get a plain link.
  if (href?.endsWith("/site"))
    return (
      <a href={href} className="work-link" style={{ display: "block" }}>
        {body}
      </a>
    );
  return href ? (
    <Link href={href} className="work-link" style={{ display: "block" }}>
      {body}
    </Link>
  ) : (
    <div className="work-link">{body}</div>
  );
}
