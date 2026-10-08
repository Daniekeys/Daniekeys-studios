import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import PortfolioGrid from "@/components/shared/PortfolioGrid";
import { getPortfolioSections } from "@/lib/cloudinary-portfolio";

// Homepage teaser — the six newest videos in the Cloudinary portfolio (already
// deduplicated by the data layer). The full body of work lives on /portfolio.
// Renders nothing if Cloudinary can't be reached, so the homepage never breaks.
export default async function FeaturedWorkSection() {
  const sections = await getPortfolioSections();
  const videos = sections
    .flatMap((section) => section.assets)
    .filter((asset) => asset.type === "video")
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 6);

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
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
}
