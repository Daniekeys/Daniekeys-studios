"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  copy: string;
  image: string;
}

// Copy is unchanged from the original processSteps list. Each step now
// carries an image for the sequential scroll story.
const processSteps: Step[] = [
  {
    title: "Discovery Call (Free)",
    copy: "30 minutes to understand your business, your goals, and what success looks like for you. No jargon. No hard sell.",
    image: "/images/how-we-work/discovery-call.png",
  },
  {
    title: "Strategy & Proposal",
    copy: "We map out a precise creative and technical strategy, and send you a transparent proposal with clear deliverables and timelines.",
    image: "/images/how-we-work/strategy-proposal.png",
  },
  {
    title: "Create & Build",
    copy: "Our team gets to work. You get progress updates every 3 days — not radio silence.",
    image: "/images/how-we-work/create-build.png",
  },
  {
    title: "Review & Refine",
    copy: "Two rounds of revisions are included. We don't stop until the work is right.",
    image: "/images/how-we-work/review-refine.png",
  },
  {
    title: "Launch & Support",
    copy: "We go live together. Then we stay close — monitoring, supporting, and optimising for 30 days post-launch.",
    image: "/images/how-we-work/launch-support.jpg",
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

// Cronix-style SEQUENTIAL PROCESS interaction — deliberately different from
// WhoWeAreSection's text/image alignment: here the image and its text
// change together as one "chapter", pinned in a single sticky frame, rather
// than an independently-scrolling text list beside a static visual. Desktop
// only; mobile falls back to a plain stacked list (see ProcessMobileStack).
function ProcessScrollStory({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      processSteps.length - 1,
      Math.max(0, Math.floor(value * processSteps.length))
    );
    setActiveIndex((current) => (current === next ? current : next));
  });

  const activeStep = processSteps[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:block"
      style={{ height: `${processSteps.length * 90}vh` }}
    >
      <div className="sticky top-24 flex h-[calc(100vh-8rem)] max-h-[680px] flex-col justify-center">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-radius-lg">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={prefersReducedMotion ? "static-image" : activeStep.image}
              className="absolute inset-0"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={activeStep.image}
                alt={activeStep.title}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/[0.9] via-primary/[0.35] to-transparent p-space-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={prefersReducedMotion ? "static-text" : activeStep.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-space-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-radius-full bg-dk-blue-1 text-ds-small font-semibold text-white">
                    {pad(activeIndex)}
                  </span>
                  <h3 className="text-ds-h3 text-primary-white">{activeStep.title}</h3>
                </div>
                <p className="mt-space-3 max-w-lg text-ds-body text-light-dark">
                  {activeStep.copy}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-space-5 flex gap-space-2">
          {processSteps.map((step, index) => (
            <span
              key={step.title}
              className={cn(
                "h-1 flex-1 rounded-radius-full transition-colors duration-300",
                index === activeIndex ? "bg-dk-blue-1" : "bg-primary/[0.08]"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessMobileStack({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean | null;
}) {
  return (
    <div className="mt-space-8 flex flex-col gap-space-7 lg:hidden">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }
          }
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-radius-lg">
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-space-4 flex items-center gap-space-4">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-radius-full bg-dk-blue-1 text-ds-small font-semibold text-white">
              {pad(index)}
            </span>
            <h3 className="text-ds-h4 text-primary">{step.title}</h3>
          </div>
          <p className="mt-space-3 max-w-2xl text-ds-body text-light-dark">{step.copy}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Landing version is the condensed take: numbered text rows + connecting
// rule only, no per-step imagery or per-step CTA (that fuller treatment,
// via the shared ProcessStep component, is reserved for /services in
// Batch 9). See 13-LANDING-process-testimonials-cta.md.
export default function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
      <GridOverlay />

      <motion.div
        className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <Eyebrow theme="light">{"// How We Work"}</Eyebrow>
        <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
            From First Call to Final Delivery — Here&apos;s Exactly How We Work
          </h2>
          <p className="max-w-md text-ds-body text-light-dark">
            No jargon. No hard sell. Just a clear path from hello to launch.
          </p>
        </div>

        <ProcessScrollStory prefersReducedMotion={prefersReducedMotion} />
        <ProcessMobileStack prefersReducedMotion={prefersReducedMotion} />

        <div className="mt-space-6 flex justify-center lg:justify-start">
          <Button variant="primary" href="/contact">
            Book a Free Discovery Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
