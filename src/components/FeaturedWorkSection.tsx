import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import PortfolioGrid from "@/components/shared/PortfolioGrid";
import { getPortfolioSections } from "@/lib/cloudinary-portfolio";

// The videos Daniel picked for the homepage, in his order, by Cloudinary file
// name (the last segment of the public_id, so moving one between folders
// doesn't drop it). Edit this list to change what is featured.
const FEATURED_VIDEOS = [
  "afriment_welcome_motion_reel_video_b39krc",
  "DigitalNinja_MotionAd_45s_idbqtr",
  "Pastel_teen_assassin_anime_sequence_202609010007_uucaex",
  "AI_CREATIVE_MOTION_VIDEO_ADS_tljyla",
  "CHOWDECK-ADS_ve2n1a",
  "NIVEA_MOTION_COMMERCIAL_ADS_cugnlo",
];

// Homepage teaser — a hand-picked set of videos from the Cloudinary portfolio
// (one that has been deleted from Cloudinary is skipped). The full body of
// work lives on /portfolio.
// Renders nothing if Cloudinary can't be reached, so the homepage never breaks.
export default async function FeaturedWorkSection() {
  const sections = await getPortfolioSections();
  const assets = sections.flatMap((section) => section.assets);
  const videos = FEATURED_VIDEOS.flatMap(
    (name) => assets.find((asset) => asset.publicId.endsWith(`/${name}`)) ?? []
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
