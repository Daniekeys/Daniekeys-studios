"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import AwardBadges from "@/components/shared/AwardBadges";
import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import FeaturedWorkCard from "@/components/shared/FeaturedWorkCard";
import GridOverlay from "@/components/shared/GridOverlay";
import TrustBar from "@/components/TrustBar";
import type { PortfolioAsset } from "@/lib/cloudinary-portfolio";

const proofPoints = ["3× Brand Lift", "+64% Lead Flow", "First Video in 7 Days"];

interface HeroSectionProps {
  // The 9:16 portrait reel from the Cloudinary portfolio shown in the Featured
  // Work card. The card renders without a video if Cloudinary can't be reached.
  video?: PortfolioAsset;
}

export default function HeroSection({ video }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-primary pb-space-9 pt-24 lg:pt-32">
      <GridOverlay />
      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-space-8 px-space-4 md:px-space-6 lg:grid-cols-[60fr_35fr] lg:items-start lg:gap-space-9">
        <div>
          <Eyebrow theme="dark">{"// Meet Daniekeys Studios"}</Eyebrow>
          <h1 className="mt-space-4 text-ds-hero font-heading text-primary-white">
            The Most Ambitious Brands in Africa Don&apos;t Just Look Good.
            <br />
            They Grow.
          </h1>
          <p className="mt-space-5 max-w-xl text-ds-body-lg text-light-dark">
            We mix AI, eye-catching motion design and solid engineering to help
            businesses across Africa launch faster, look premium and grow.
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

          <TrustBar className="mt-space-6" />
        </div>

        <div className="flex flex-col gap-space-6">
          <AwardBadges className="hidden lg:flex lg:justify-end" />

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }
          >
            <FeaturedWorkCard
              className="mx-auto w-full max-w-[340px] lg:ml-auto lg:mr-0"
              videoSrc={video?.url}
              posterSrc={video?.posterUrl}
              imageAlt="Daniekeys Studios vertical motion graphics sample"
              caption="BGR 2026: So Far"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
