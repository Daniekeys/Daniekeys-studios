import ShowreelSection from "@/components/ShowreelSection";
import { showreelClips } from "@/lib/showreel";

// Homepage teaser — the four strongest client motion clips. Full reel +
// graphics live on /showreel and /portfolio (single source: lib/showreel.ts).
const featuredClips = showreelClips
  .filter((clip) => clip.orientation === "landscape")
  .slice(0, 4);

export default function FeaturedWorkSection() {
  return (
    <ShowreelSection
      eyebrow="// Our Work"
      heading="Work That Speaks Louder Than Pitches."
      intro="Real projects. Real clients. Real results."
      clips={featuredClips}
      cta={{ label: "See the Full Showreel", href: "/showreel" }}
    />
  );
}
