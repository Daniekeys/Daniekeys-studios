import type { Metadata } from "next";
import Script from "next/script";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShowreelSection from "@/components/ShowreelSection";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import { graphicSamples, showreelClips } from "@/lib/showreel";

export const metadata: Metadata = {
  title:
    "Showreel — Daniekeys Studios | Motion Graphics, Commercials & Animation Nigeria",
  description:
    "Watch the Daniekeys Studios showreel — animated commercials, product films, character animation, and campaign key art produced for clients across Nigeria and Africa.",
  keywords: [
    "motion graphics showreel Nigeria",
    "animation studio Nigeria",
    "commercial animation Nigeria",
    "video production Nigeria",
    "explainer video Nigeria",
    "brand film Nigeria",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.daniekeysstudios.com/showreel",
  },
  openGraph: {
    title: "Showreel — Daniekeys Studios",
    description:
      "Animated commercials, product films, character animation, and campaign key art from Daniekeys Studios.",
    type: "website",
    url: "https://www.daniekeysstudios.com/showreel",
    siteName: "Daniekeys Studios",
  },
  other: {
    "theme-color": "#111111",
  },
};

const showreelSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Daniekeys Studios Showreel",
  description:
    "Motion graphics, animated commercials, and product films produced by Daniekeys Studios",
  itemListElement: showreelClips.map((clip, index) => ({
    "@type": "VideoObject",
    position: index + 1,
    name: `${clip.title} — Daniekeys Studios`,
    description: `${clip.category} motion work produced by Daniekeys Studios.`,
    thumbnailUrl: clip.poster,
    contentUrl: clip.lightboxSrc,
    uploadDate: "2026-09-01",
  })),
};

export default function ShowreelPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Script
        id="showreel-itemlist-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(showreelSchema) }}
      />
      <Navigation />
      <main>
        {/* Compact page header — same pattern as /portfolio, /about, /services. */}
        <section className="relative overflow-hidden bg-primary pb-space-9 pt-24 lg:pb-space-10 lg:pt-32">
          <GridOverlay />
          <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
            <Eyebrow theme="dark">{"// Showreel"}</Eyebrow>
            <h1 className="mt-space-4 max-w-4xl text-ds-hero font-heading text-primary-white">
              Motion, Frame by Frame.
            </h1>
            <p className="mt-space-5 max-w-xl text-ds-body-lg text-light-dark">
              Commercials, product films, character animation, and key art —
              built for African brands that need to move.
            </p>
          </div>
        </section>

        <ShowreelSection
          eyebrow="// The Reel"
          heading="Press Play."
          intro={
            "Clips autoplay silent. Hit “View video” for the full cut with sound."
          }
          clips={showreelClips}
          graphics={graphicSamples}
        />
      </main>
      <Footer />
    </div>
  );
}
