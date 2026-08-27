"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import AvatarGroup from "@/components/shared/AvatarGroup";
import AwardBadges from "@/components/shared/AwardBadges";
import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import FeaturedWorkCard from "@/components/shared/FeaturedWorkCard";
import GridOverlay from "@/components/shared/GridOverlay";
import TrustBar from "@/components/TrustBar";

const proofPoints = ["3× Brand Lift", "+64% Lead Flow", "24/7 Automation"];

// Placeholder headshots — no real founder photos supplied yet. Swap once
// Daniel confirms the founder name/photos (see the "Founded by" note below).
const founderAvatars = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    alt: "Placeholder founder headshot",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    alt: "Placeholder founder headshot",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    alt: "Placeholder founder headshot",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary pb-space-9 pt-24 lg:pt-32">
      <GridOverlay />
      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-space-8 px-space-4 md:px-space-6 lg:grid-cols-[60fr_35fr] lg:items-start lg:gap-space-9">
        <div>
          <Eyebrow theme="dark">{"// Meet Daniekeys Studios"}</Eyebrow>
          <h1 className="mt-space-4 text-ds-hero font-heading text-primary-white">
            Africa&apos;s Most Ambitious Brands Don&apos;t Just Look Good.
            <br />
            They Grow.
          </h1>
          <p className="mt-space-5 max-w-xl text-ds-body-lg text-light-dark">
            Daniekeys Studios combines AI engineering, world-class creative design,
            and strategic marketing to help businesses across Africa build brands
            that convert, scale, and dominate their market.
          </p>

          <div className="mt-space-6 flex flex-col gap-space-4 sm:flex-row sm:items-center">
            <Button variant="primary" href="/contact" className="w-full justify-between sm:w-auto">
              Start a Project
            </Button>
            <Button
              variant="text-link"
              href="/portfolio"
              icon={ArrowUpRight}
              className="justify-center text-primary-white sm:justify-start"
            >
              View Our Work
            </Button>
          </div>

          <div className="mt-space-6 flex flex-wrap gap-space-3">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-radius-full border border-dk-blue-3/40 bg-dk-blue-1/10 px-space-4 py-space-2 text-ds-small font-medium text-primary-white"
              >
                {point}
              </span>
            ))}
          </div>

          <AwardBadges className="mt-space-6 justify-center lg:hidden" />

          {/* Founder name + photos unconfirmed — see 00-OVERVIEW.md open
              items. Do not ship real names/photos here until Daniel confirms. */}
          <div className="mt-space-6">
            <AvatarGroup
              avatars={founderAvatars}
              caption="Founded by [Founder Name — TBD]"
              theme="dark"
            />
          </div>

          <TrustBar className="mt-space-6" />
        </div>

        <div className="flex flex-col gap-space-6">
          <AwardBadges className="hidden lg:flex lg:justify-end" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <FeaturedWorkCard
              imageSrc="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
              imageAlt="Daniekeys Studios team member reviewing an AI-powered brand dashboard in a modern office"
              caption="Afriment — Brand Identity System"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
