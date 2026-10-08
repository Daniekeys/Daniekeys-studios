"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";

import type { PortfolioAsset } from "@/lib/cloudinary-portfolio";

const bullets = [
  {
    title: "AI UGC Ads",
    copy: "real-looking creator ads for TikTok, Instagram and Meta campaigns",
  },
  {
    title: "AI Animation",
    copy: "original characters and short animated series for your brand",
  },
  {
    title: "Fast Turnaround",
    copy: "your first video within 7 working days of a confirmed brief",
  },
];

interface AIAdvantageSectionProps {
  // A featured clip from the Cloudinary portfolio. The stock image only stands
  // in when Cloudinary can't be reached.
  video?: PortfolioAsset;
}

// Unique to Daniekeys — no Clonix mockup equivalent for this section, per
// 12-LANDING-services-work-ai.md.
export default function AIAdvantageSection({ video }: AIAdvantageSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
      <GridOverlay />

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1280px] gap-space-8 px-space-4 md:px-space-6 lg:grid-cols-[55fr_40fr] lg:items-center lg:gap-space-9"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <div>
          <Eyebrow theme="dark">{"// AI-Powered Studio"}</Eyebrow>
          <h2 className="mt-space-3 text-ds-h2 font-heading text-primary-white">
            Studio-Quality Video Without the Studio Price Tag.
          </h2>
          <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
            Our founder is an AI engineer and a creative director. That means
            we don&apos;t just talk about AI, we use it inside every
            production. UGC ads without hiring a crowd of creators, animated
            characters without a full animation team, and finished motion ads
            in days instead of weeks. You get the quality of a big studio at
            the speed of a startup.
          </p>

          <ul className="mt-space-6 space-y-space-4">
            {bullets.map((bullet) => (
              <li key={bullet.title} className="flex items-start gap-space-3">
                <Check className="mt-1 h-5 w-5 flex-none text-dk-blue-1" />
                <span className="text-ds-body text-primary-white">
                  <strong className="font-semibold">{bullet.title}</strong>:{" "}
                  {bullet.copy}
                </span>
              </li>
            ))}
          </ul>

          <Button variant="primary" href="/portfolio" className="mt-space-7">
            See Our Video Work
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-radius-xl bg-dk-blue-1/25 blur-3xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-radius-xl lg:aspect-square">
            {video ? (
              <video
                src={video.url}
                poster={video.posterUrl}
                autoPlay={!prefersReducedMotion}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${video.title}, silent preview`}
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80"
                alt="Abstract visualization representing AI-powered video production"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
