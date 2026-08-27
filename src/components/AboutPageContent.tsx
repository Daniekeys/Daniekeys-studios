"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import NumberedAccordion, {
  type PillarItem,
  type TrustTableItem,
} from "@/components/shared/NumberedAccordion";
import StatCounter from "@/components/shared/StatCounter";
import TimelineEntry from "@/components/shared/TimelineEntry";
import WatermarkGlyph from "@/components/shared/WatermarkGlyph";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

// Same four pillars as the landing WhoWeAreSection — 20-PAGE-about.md says to
// reuse them verbatim, no expanded copy is available from source content.
const pillars: PillarItem[] = [
  {
    title: "Creative Excellence",
    description: "World-class design rooted in strategy and storytelling.",
  },
  {
    title: "AI-Powered",
    description: "We use AI to deliver faster, smarter, and more scalable results.",
  },
  {
    title: "Growth-Focused",
    description: "Every deliverable is tied to a business outcome.",
  },
  {
    title: "Pan-African",
    description: "Built in Africa, built for Africa — and the world.",
  },
];

const stats = [
  { value: 50, suffix: "+", caption: "Projects Delivered" },
  { value: 5, suffix: "+", caption: "Years in Business" },
  { value: 3, suffix: "×", caption: "Average Client Revenue Growth" },
  { value: 100, suffix: "%", caption: "On-Time Delivery Rate" },
];

// Years are placeholders — no published year-by-year company story exists, only
// "5+ years in business" is confirmed (see 00-OVERVIEW.md open items). Each
// eyebrow reads "// [YEAR — confirm]" so nothing here presents as fact.
const historyEntries = [
  {
    year: "[YEAR — confirm]",
    title: "The Beginning",
    description:
      "Daniekeys Studios started as a one-person creative operation, taking on brand identity and design projects for early clients.",
  },
  {
    year: "[YEAR — confirm]",
    title: "Going Full-Service",
    description:
      "Expanded from design-only into web development and motion graphics, becoming a full-service creative partner.",
  },
  {
    year: "[YEAR — confirm]",
    title: "The AI Shift",
    description:
      "Began integrating AI engineering into client work — chatbots, automation, and AI-powered content pipelines — well ahead of the market.",
  },
  {
    year: "[YEAR — confirm]",
    title: "50+ Projects, Pan-African Reach",
    description:
      "Now serving clients across Nigeria and the wider African market, with a 100% on-time delivery track record and a 5.0 Google rating.",
  },
];

// Real proof points, not invented awards — the mockup's "awards table" pattern
// repurposed to trust metrics per 20-PAGE-about.md.
const trustRows: TrustTableItem[] = [
  {
    metaLeft: "// 01",
    title: "5.0 Rating on Google",
    description:
      "Rated by 30+ verified clients — see for yourself, we don't hide our reviews.",
    metaRight: "30+ reviews",
  },
  {
    metaLeft: "// 02",
    title: "100% On-Time Delivery",
    description: "Every project, every deadline, no exceptions.",
    metaRight: "100%",
  },
  {
    metaLeft: "// 03",
    title: "50+ Projects Delivered",
    description:
      "From startups finding their identity to established businesses scaling across Africa.",
    metaRight: "50+",
  },
  {
    metaLeft: "// 04",
    title: "3× Average Revenue Growth",
    description:
      "Our clients don't just get better design — they get better business results.",
    metaRight: "3×",
  },
];

export default function AboutPageContent() {
  return (
    <>
      {/* Page header — compact (eyebrow + H1 + one-liner), not a full hero, per
          02-SITEMAP-AND-PAGE-PLAN.md. Kept on --black so the transparent
          nav-over-header stays legible, matching the landing Hero. */}
      <section className="relative overflow-hidden bg-primary pb-space-9 pt-24 lg:pb-space-10 lg:pt-32">
        <GridOverlay />
        <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
          <Eyebrow theme="dark">{"// About Daniekeys Studios"}</Eyebrow>
          <h1 className="mt-space-4 max-w-4xl text-ds-hero font-heading text-primary-white">
            Built Different. On Purpose.
          </h1>
          <p className="mt-space-5 max-w-xl text-ds-body-lg text-light-dark">
            Daniekeys Studios exists because average creative work is everywhere in
            this market — and we&apos;re not interested in average.
          </p>
        </div>
      </section>

      {/* Who We Are — full version. Narrow eyebrow gutter + wide content column,
          same layout as the landing WhoWeAreSection and the mockup reference. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />
        <WatermarkGlyph
          size={420}
          className="pointer-events-none absolute -right-24 top-0 hidden lg:block"
        />

        <motion.div
          className="relative z-10 mx-auto grid max-w-[1280px] gap-space-6 px-space-4 md:px-space-6 lg:grid-cols-[220px_1fr] lg:gap-space-8"
          {...fadeUp}
        >
          <Eyebrow theme="light">{"// Who We Are"}</Eyebrow>

          <div>
            <h2 className="text-ds-h2 font-heading text-primary">
              We Don&apos;t Just Make Things Look Good. We Make Your Business Grow.
            </h2>
            <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
              Daniekeys Studios is a full-service AI-powered digital agency based in
              Nigeria, built for businesses that are ready to compete — locally and
              globally. We bring together three things that most agencies separate:
              creative excellence, AI engineering, and growth strategy. The result?
              Brands that don&apos;t just look premium — they perform. Whether
              you&apos;re a startup finding your identity or an established business
              ready to scale, we become your creative and technology partner from
              day one.
            </p>

            <div className="relative mt-space-7 aspect-[16/9] w-full overflow-hidden rounded-radius-lg">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
                alt="Daniekeys Studios team in a working session around a table in a creative agency office"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-space-8">
              <NumberedAccordion variant="pillars" theme="light" items={pillars} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats row — dedicated-page treatment, on --black so the four numbers
          read as a distinct proof band (louder than the landing version). */}
      <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...fadeUp}
        >
          <Eyebrow theme="dark">{"// The Numbers"}</Eyebrow>
          <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary-white">
            The Track Record, in Four Numbers.
          </h2>

          <div className="mt-space-8 grid grid-cols-2 gap-x-space-5 gap-y-space-7 lg:grid-cols-4 lg:gap-x-space-8 lg:gap-y-0">
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.caption}
                value={stat.value}
                suffix={stat.suffix}
                caption={stat.caption}
                theme="dark"
                delay={index * 0.1}
                className={cn(
                  "text-center lg:pl-space-8 lg:text-left",
                  index === 0 && "lg:pl-0",
                  index > 0 && "lg:border-l lg:border-white/[0.08]"
                )}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Founder's Words — portrait left (~40%) + pull-quote right (~55%),
          matching the mockup's Founder's Words pattern. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto grid max-w-[1280px] gap-space-6 px-space-4 md:px-space-6 lg:grid-cols-[220px_1fr] lg:gap-space-8"
          {...fadeUp}
        >
          <Eyebrow theme="light">{"// Founder's Words"}</Eyebrow>

          <div className="grid gap-space-6 md:grid-cols-[40fr_55fr] md:items-center md:gap-space-8">
            {/* Placeholder portrait — the real founder photo is NOT in the repo.
                Do not ship as final: swap for the founder's actual photo (and
                confirm the byline name) before launch. See 20-PAGE-about.md. */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-radius-lg">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Placeholder portrait — pending the real Daniekeys Studios founder photo"
                fill
                sizes="(min-width: 768px) 360px, 100vw"
                className="object-cover"
              />
            </div>

            <figure className="space-y-space-5">
              <Quote aria-hidden className="h-10 w-10 text-dk-blue-1" />
              <blockquote className="max-w-2xl text-ds-h3 text-primary">
                We started Daniekeys Studios because we were tired of seeing
                ambitious African brands settle for generic, cookie-cutter creative
                work. Every project we take on is a chance to prove that AI
                engineering, sharp design, and relentless execution can change the
                trajectory of a business.
              </blockquote>
              <figcaption className="text-ds-small text-light-dark">
                <span className="font-semibold text-primary">
                  [FOUNDER NAME — confirm]
                </span>
                , Founder @ Daniekeys Studios
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </section>

      {/* Our History — zigzag timeline (single left column on mobile). Years are
          placeholders pending confirmation (see 00-OVERVIEW.md open items). */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...fadeUp}
        >
          <Eyebrow theme="light">{"// Our History"}</Eyebrow>
          <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary">
            The Story So Far.
          </h2>
          <p className="mt-space-4 max-w-xl text-ds-body text-light-dark">
            The milestones below are placeholders — exact years and details are
            being finalised before launch.
          </p>

          <div className="mt-space-9">
            {historyEntries.map((entry, index) => (
              <TimelineEntry
                key={entry.title}
                year={entry.year}
                title={entry.title}
                description={entry.description}
                align={index % 2 === 0 ? "left" : "right"}
                isLast={index === historyEntries.length - 1}
                theme="light"
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recognition & Trust — the mockup's 3-column awards table, repurposed to
          real trust metrics (No / signal + description / proof). */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...fadeUp}
        >
          <Eyebrow theme="light">{"// Recognition & Trust"}</Eyebrow>
          <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
              Why Businesses Trust Daniekeys Studios
            </h2>
            <p className="max-w-md text-ds-body text-light-dark">
              We don&apos;t have a trophy case yet — we have something better: a
              track record.
            </p>
          </div>

          <div className="mt-space-8">
            <div className="hidden items-center justify-between border-b border-primary/[0.08] pb-space-3 text-ds-micro uppercase tracking-wide text-light-dark md:flex">
              <span>No. — Trust Signal</span>
              <span>Proof</span>
            </div>
            <NumberedAccordion variant="trust-table" theme="light" items={trustRows} />
          </div>
        </motion.div>
      </section>

      {/* Page CTA band — compact sign-off routing to /contact. The large
          recurring CTA lives in the global Footer directly below this. */}
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
            Ready to work with us?
          </h2>
          <Button variant="primary" href="/contact">
            Book a Free Discovery Call
          </Button>
        </motion.div>
      </section>
    </>
  );
}
