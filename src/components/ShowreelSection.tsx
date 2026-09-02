"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import MediaLightbox, {
  type LightboxMedia,
} from "@/components/shared/MediaLightbox";
import VideoCard from "@/components/shared/VideoCard";
import {
  type GraphicSample,
  type ShowreelClip,
} from "@/lib/showreel";

interface ShowreelSectionProps {
  id?: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  clips: ShowreelClip[];
  graphics?: GraphicSample[];
  graphicsHeading?: string;
  cta?: { label: string; href: string };
}

// Shared section for the homepage FeaturedWorkSection, the /portfolio Motion
// Reel, and the /showreel page. Owns the single lightbox instance for both its
// clips and its graphics.
export default function ShowreelSection({
  id,
  eyebrow,
  heading,
  intro,
  clips,
  graphics,
  graphicsHeading = "Graphics & Key Art",
  cta,
}: ShowreelSectionProps) {
  const [activeMedia, setActiveMedia] = useState<LightboxMedia | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10"
    >
      <GridOverlay />

      <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
        <motion.div {...fadeUp}>
          <Eyebrow theme="light">{eyebrow}</Eyebrow>
          <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
              {heading}
            </h2>
            {intro && (
              <p className="max-w-md text-ds-body text-light-dark">{intro}</p>
            )}
          </div>
        </motion.div>

        <div className="mt-space-8 grid gap-space-6 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip, index) => (
            <VideoCard
              key={clip.id}
              clip={clip}
              delay={index * 0.08}
              onOpen={(c) =>
                setActiveMedia({
                  type: "video",
                  src: c.lightboxSrc,
                  poster: c.poster,
                  title: c.title,
                  orientation: c.orientation,
                })
              }
            />
          ))}
        </div>

        {graphics && graphics.length > 0 && (
          <div className="mt-space-10">
            <motion.h3
              className="text-ds-h3 font-heading text-primary"
              {...fadeUp}
            >
              {graphicsHeading}
            </motion.h3>

            <div className="mt-space-6 grid gap-space-6 sm:grid-cols-2 lg:grid-cols-4">
              {graphics.map((graphic, index) => (
                <motion.button
                  key={graphic.id}
                  type="button"
                  onClick={() =>
                    setActiveMedia({
                      type: "image",
                      src: graphic.lightboxSrc,
                      title: graphic.title,
                      orientation: "portrait",
                    })
                  }
                  aria-label={`Enlarge ${graphic.title}`}
                  className="group relative aspect-[3/4] w-full overflow-hidden rounded-radius-lg bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dk-blue-1"
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 28 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.55,
                          ease: [0.16, 1, 0.3, 1],
                          delay: index * 0.08,
                        }
                  }
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={graphic.src}
                    alt={graphic.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {cta && (
          <div className="mt-space-8 flex justify-center lg:justify-start">
            <Button variant="secondary" href={cta.href}>
              {cta.label}
            </Button>
          </div>
        )}
      </div>

      <MediaLightbox
        media={activeMedia}
        onClose={() => setActiveMedia(null)}
      />
    </section>
  );
}
