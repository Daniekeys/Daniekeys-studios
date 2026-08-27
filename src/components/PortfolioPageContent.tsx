"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import FilterTabs from "@/components/shared/FilterTabs";
import GridOverlay from "@/components/shared/GridOverlay";
import ProjectCard from "@/components/shared/ProjectCard";
import WatermarkGlyph from "@/components/shared/WatermarkGlyph";
import {
  PORTFOLIO_CATEGORIES,
  portfolioProjects,
} from "@/lib/portfolio-projects";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

export default function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return portfolioProjects;
    return portfolioProjects.filter((project) =>
      project.categories.includes(activeCategory)
    );
  }, [activeCategory]);

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

      {/* Filter tabs + project grid. Client-side filter, no page reload — the
          FilterTabs component (Batch 3) drives local state. Grid is 3-up on
          desktop, 1-up on mobile, matching the mockup's work-section card
          proportions (landscape image, radius-lg, tag + title + text-link). */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
          <motion.div {...fadeUp}>
            <Eyebrow theme="light">{"// The Portfolio"}</Eyebrow>
            <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
                Six Projects. One Standard.
              </h2>
              <p className="max-w-md text-ds-body text-light-dark">
                Filter by discipline — branding, motion, web, and marketing.
              </p>
            </div>

            {/* Horizontal-scroll row on mobile if the 5 tabs don't fit; wraps
                otherwise (FilterTabs uses flex-wrap). */}
            <div className="mt-space-7 -mx-space-4 overflow-x-auto px-space-4 md:mx-0 md:px-0">
              <FilterTabs
                tabs={[...PORTFOLIO_CATEGORIES]}
                active={activeCategory}
                onChange={setActiveCategory}
                theme="light"
                className="flex-nowrap md:flex-wrap"
              />
            </div>
          </motion.div>

          {/* Plain grid — filtering just re-renders the list (no page reload),
              same approach as the landing FeaturedWorkSection. ProjectCard owns
              its own mount animation and prefers-reduced-motion handling. */}
          <div className="mt-space-8 grid gap-x-space-6 gap-y-space-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                data-project-card
                data-title={project.title}
                data-category={project.categories.join(",")}
              >
                <ProjectCard
                  image={project.image}
                  category={project.categories[0]}
                  title={project.title}
                  href={`/portfolio/${project.slug}`}
                  delay={index * 0.08}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="mt-space-8 text-ds-body text-light-dark">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

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
