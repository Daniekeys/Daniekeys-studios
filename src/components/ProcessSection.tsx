"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import { cn } from "@/lib/utils";

import type { PortfolioAsset } from "@/lib/cloudinary-portfolio";

// Copy is unchanged from 13-LANDING-process-testimonials-cta.md.
const processSteps = [
  {
    title: "Discovery Call (Free)",
    copy: "A 30 minute chat so we can understand your business, your goals and what a win looks like for you. No jargon and no hard sell.",
  },
  {
    title: "Strategy & Proposal",
    copy: "We map out the creative and technical plan, then send you a clear proposal with what you're getting and when.",
  },
  {
    title: "Create & Build",
    copy: "Our team gets to work and you get a progress update every 3 days, so you're never left guessing.",
  },
  {
    title: "Review & Refine",
    copy: "Two rounds of revisions are included, and we keep going until the work feels right.",
  },
  {
    title: "Launch & Support",
    copy: "We go live together, then we stick around for 30 days after launch to monitor, support and tweak things.",
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

interface ProcessSectionProps {
  // The reel from the Cloudinary portfolio that plays beside the steps. If
  // Cloudinary can't be reached the steps render on their own.
  video?: PortfolioAsset;
}

// One finished piece of work plays in a pinned frame while the five steps
// that produce it light up, one by one, as a timeline scrolled past it: the
// rule fills in blue and the frame's chip names the step you are on. No
// per-step imagery. The section is as tall as its content (no artificial
// scroll track), and on mobile the frame simply sits above the timeline.
export default function ProcessSection({ video }: ProcessSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 0 when the top of the list reaches 65% down the viewport, 1 when its
  // bottom does.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.65", "end 0.65"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      processSteps.length - 1,
      Math.max(0, Math.floor(value * processSteps.length))
    );
    setActiveIndex((current) => (current === next ? current : next));
  });

  return (
    // overflow-clip, not overflow-hidden: hidden makes the section a scroll
    // container and the sticky video frame never pins.
    <section className="relative overflow-clip bg-primary py-space-8 lg:py-space-10">
      <GridOverlay />

      <motion.div
        className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <Eyebrow theme="dark">{"// How We Work"}</Eyebrow>
        <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-ds-h2 font-heading text-primary-white">
            From First Call to Final Delivery, Here&apos;s How We Work
          </h2>
          <p className="max-w-md text-ds-body text-light-dark">
            No jargon, no hard sell. Just a clear path from hello to launch.
          </p>
        </div>

        <div
          className={cn(
            "mt-space-8 grid gap-space-8 lg:gap-space-9",
            video && "lg:grid-cols-[1.25fr_1fr]"
          )}
        >
          {video && (
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-radius-xl bg-dk-blue-1/25 blur-3xl" />
                <div className="relative aspect-video w-full overflow-hidden rounded-radius-xl border border-white/10">
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
                  {/* Only meaningful while the frame is pinned beside the
                      timeline, so desktop only. */}
                  {!prefersReducedMotion && (
                    <div
                      className="absolute bottom-space-4 left-space-4 hidden items-center gap-space-3 rounded-radius-full bg-primary/80 py-space-2 pl-space-2 pr-space-4 backdrop-blur lg:flex"
                      aria-hidden="true"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-radius-full bg-dk-blue-1 text-ds-micro text-white">
                        {pad(activeIndex)}
                      </span>
                      <span className="text-ds-small text-primary-white">
                        {processSteps[activeIndex].title}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <p className="mt-space-4 text-ds-small text-light-dark">
                Every project we ship follows these five steps, this one
                too.
              </p>
            </div>
          )}

          <ol ref={listRef} className="relative max-w-2xl">
            <span
              className="absolute bottom-0 left-5 top-5 w-px -translate-x-1/2 bg-white/10"
              aria-hidden="true"
            />
            <motion.span
              className="absolute bottom-0 left-5 top-5 w-px -translate-x-1/2 origin-top bg-dk-blue-1"
              style={{ scaleY: prefersReducedMotion ? 1 : scrollYProgress }}
              aria-hidden="true"
            />

            {processSteps.map((step, index) => {
              const reached = prefersReducedMotion || index <= activeIndex;

              return (
                <li
                  key={step.title}
                  className="relative flex gap-space-5 pb-space-7 last:pb-0 lg:pb-space-8"
                >
                  <span
                    className={cn(
                      "relative flex h-10 w-10 flex-none items-center justify-center rounded-radius-full text-ds-small font-semibold transition-colors duration-300",
                      reached
                        ? "bg-dk-blue-1 text-white"
                        : "border border-white/20 bg-primary text-light-dark"
                    )}
                  >
                    {pad(index)}
                  </span>
                  <div
                    className={cn(
                      "pt-1 transition-opacity duration-300",
                      reached ? "opacity-100" : "opacity-40"
                    )}
                  >
                    <h3 className="text-ds-h3 text-primary-white">{step.title}</h3>
                    <p className="mt-space-3 text-ds-body text-light-dark">{step.copy}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-space-8 flex justify-center lg:justify-start">
          <Button variant="primary" href="/contact">
            Book a Free Discovery Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
