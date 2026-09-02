"use client";

import { motion, useReducedMotion } from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import ShowreelSection from "@/components/ShowreelSection";
import WatermarkGlyph from "@/components/shared/WatermarkGlyph";
import { graphicSamples, showreelClips } from "@/lib/showreel";

// Scroll-reveal config. Under prefers-reduced-motion the reveal target stays
// (content must never be stranded — see the TestimonialCard defect in
// 00-OVERVIEW.md); only the entrance offset and duration are dropped so the
// content snaps straight to its final state. 05-ANIMATIONS-AND-INTERACTIONS.md §Reduced Motion.
const buildFadeUp = (reduced: boolean | null) => ({
  initial: reduced ? false : { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: reduced
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
});

export default function PortfolioPageContent() {
  const fadeUp = buildFadeUp(useReducedMotion());

  return (
    <>
      {/* Page header — compact (eyebrow + H1 + one-liner), not a full hero, per
          02-SITEMAP-AND-PAGE-PLAN.md. Same pattern as /about and /services: on
          --black so the transparent nav-over-header stays legible. */}
      <section className="relative overflow-hidden bg-primary pb-space-9 pt-24 lg:pb-space-10 lg:pt-32">
        <GridOverlay />
        <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
          <Eyebrow theme="dark">{"// Our Work"}</Eyebrow>
          <h1 className="mt-space-4 max-w-4xl text-ds-hero font-heading text-primary-white">
            Work That Speaks Before We Do.
          </h1>
          <p className="mt-space-5 max-w-xl text-ds-body-lg text-light-dark">
            Real projects. Real clients. Real results.
          </p>
        </div>
      </section>

      {/* Motion reel + graphics — real client work hosted on Cloudinary. Clips
          autoplay muted and looped while in view; "View video" opens the
          fullscreen player with sound. Single source: lib/showreel.ts. */}
      <ShowreelSection
        eyebrow="// Motion Reel"
        heading="Motion That Earns Attention."
        intro={"Every clip plays silent. Hit “View video” for the full cut with sound."}
        clips={showreelClips}
        graphics={graphicSamples}
      />

      {/* CTA band — compact sign-off routing to /contact. Same pattern as the
          /about and /services CTA bands; the large recurring CTA lives in the
          global Footer directly below. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-9">
        <GridOverlay />
        <WatermarkGlyph
          size={380}
          className="pointer-events-none absolute -left-24 bottom-0 hidden lg:block"
        />

        <motion.div
          className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-start gap-space-5 px-space-4 md:px-space-6"
          {...fadeUp}
        >
          <Eyebrow theme="light">{"// Let's Talk"}</Eyebrow>
          <h2 className="max-w-2xl text-ds-h3 font-heading text-primary">
            Like What You See? Let&apos;s Build Something for You.
          </h2>
          <Button variant="primary" href="/contact">
            Book a Free Discovery Call
          </Button>
        </motion.div>
      </section>
    </>
  );
}
