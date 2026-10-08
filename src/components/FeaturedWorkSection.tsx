import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import PortfolioGrid from "@/components/shared/PortfolioGrid";
import { getPortfolioSections } from "@/lib/cloudinary-portfolio";

const FEATURED_FOLDERS = [
  "motion-ads",
  "ugc-ads",
  "ai-animation",
  "explainers-and-stories",
];

// Homepage teaser — the newest video from each of the four video folders in
// the Cloudinary portfolio (a folder with no video is skipped). The full body
// of work lives on /portfolio.
// Renders nothing if Cloudinary can't be reached, so the homepage never breaks.
export default async function FeaturedWorkSection() {
  const sections = await getPortfolioSections();
  const videos = FEATURED_FOLDERS.flatMap(
    (slug) =>
      sections
        .find((section) => section.slug === slug)
        ?.assets.find((asset) => asset.type === "video") ?? []
  );

  if (videos.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
      <GridOverlay />

      <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
        <Eyebrow theme="light">{"// Our Work"}</Eyebrow>
        <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
            Work That Speaks Louder Than Pitches.
          </h2>
          <p className="max-w-md text-ds-body text-light-dark">
            Real projects. Real clients. Real results.
          </p>
        </div>

        <div className="mt-space-8">
          <PortfolioGrid assets={videos} />
        </div>

        <div className="mt-space-8 flex justify-center lg:justify-start">
          <Button variant="secondary" href="/portfolio">
            See All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
