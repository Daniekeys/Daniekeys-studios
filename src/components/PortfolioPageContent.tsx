"use client";

import { motion, useReducedMotion } from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import PortfolioGrid from "@/components/shared/PortfolioGrid";
import WatermarkGlyph from "@/components/shared/WatermarkGlyph";
import type { PortfolioSection } from "@/lib/cloudinary-portfolio";

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

interface PortfolioPageContentProps {
  sections: PortfolioSection[];
}

export default function PortfolioPageContent({
  sections,
}: PortfolioPageContentProps) {
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
            Our Work Speaks Before We Do
          </h1>
          <p className="mt-space-5 max-w-xl text-ds-body-lg text-light-dark">
            Real projects, real clients and real results.
          </p>
        </div>
      </section>

      {/* The work — one section per Cloudinary folder, straight from the
          account (lib/cloudinary-portfolio.ts). Videos preview silently on
          hover; clicking any tile opens the fullscreen player with sound. An
          empty list means Cloudinary couldn't be reached. */}
      <div className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />
        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-space-9 px-space-4 md:px-space-6">
          {sections.length === 0 && (
            <p className="max-w-xl text-ds-body-lg text-light-dark">
              We couldn&apos;t load our work just now. Refresh in a moment, or
              get in touch and we&apos;ll send it over.
            </p>
          )}

          {sections.map((section) => (
            <section key={section.slug} id={section.slug}>
              <motion.div
                className="flex items-end justify-between gap-space-4"
                {...fadeUp}
              >
                <h2 className="text-ds-h2 font-heading text-primary">
                  {section.label}
                </h2>
                <p className="flex-none text-ds-small text-light-dark">
                  {section.assets.length}{" "}
                  {section.assets.length === 1 ? "piece" : "pieces"}
                </p>
              </motion.div>

              <div className="mt-space-6">
                <PortfolioGrid assets={section.assets} />
              </div>
            </section>
          ))}
        </div>
      </div>

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
            Like What You See? Let&apos;s Build Something for You
          </h2>
          <Button variant="primary" href="/contact">
            Book a Free Discovery Call
          </Button>
        </motion.div>
      </section>
    </>
  );
}
