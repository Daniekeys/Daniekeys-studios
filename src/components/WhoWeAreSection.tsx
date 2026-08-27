"use client";

import { motion, useReducedMotion } from "framer-motion";

import AvatarGroup from "@/components/shared/AvatarGroup";
import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import NumberedAccordion, { type PillarItem } from "@/components/shared/NumberedAccordion";
import WatermarkGlyph from "@/components/shared/WatermarkGlyph";

// Placeholder headshots — no real client photos supplied yet, per
// 03-IMAGE-SOURCING-GUIDE.md's testimonial-avatar guidance. Swap for real
// client photos when available; the "5.0 / 30+ clients" figures are real.
const clientAvatars = [
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
    alt: "Placeholder client headshot",
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80",
    alt: "Placeholder client headshot",
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80",
    alt: "Placeholder client headshot",
  },
];

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

// Compact landing teaser of the full "Who We Are" story on /about. Mirrors
// /reference's "Why Choose Clonix?" section proportions — a narrow label
// column (eyebrow) beside a wider content column (H2/body/CTA/accordion) —
// via a fixed-width label column sized to the ~17.5%-of-container band the
// mockup's grid lines mark out, rather than a fluid fraction.
export default function WhoWeAreSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-off-white pt-space-8 pb-space-6 lg:pt-space-10 lg:pb-space-7">
      <GridOverlay />
      <WatermarkGlyph className="pointer-events-none absolute -right-24 bottom-0 hidden lg:block" size={420} />

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1280px] gap-space-6 px-space-4 md:px-space-6 lg:grid-cols-[220px_1fr] lg:gap-space-8"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <Eyebrow theme="light">{"// Who We Are"}</Eyebrow>

        <div>
          <h2 className="text-ds-h2 font-heading text-primary">
            We Don&apos;t Just Make Things Look Good. We Make Your Business Grow.
          </h2>
          <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
            We bring together three things most agencies separate: creative excellence,
            AI engineering, and growth strategy. Whether you&apos;re a startup finding
            your identity or an established business ready to scale, we become your
            creative and technology partner from day one.
          </p>

          <div className="mt-space-6 flex flex-col gap-space-4 sm:flex-row-reverse sm:items-center sm:justify-between">
            <Button
              variant="secondary"
              href="/about"
              className="w-full justify-between sm:w-auto"
            >
              Learn More About Us
            </Button>

            <AvatarGroup
              avatars={clientAvatars}
              caption="Rated 5.0 by 30+ clients on Google"
              theme="light"
            />
          </div>

          <div className="mt-space-8">
            <NumberedAccordion variant="pillars" theme="light" items={pillars} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
