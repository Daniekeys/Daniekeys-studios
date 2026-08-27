"use client";

import { motion, useReducedMotion } from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    title: "Discovery Call (Free)",
    copy: "30 minutes to understand your business, your goals, and what success looks like for you. No jargon. No hard sell.",
  },
  {
    title: "Strategy & Proposal",
    copy: "We map out a precise creative and technical strategy, and send you a transparent proposal with clear deliverables and timelines.",
  },
  {
    title: "Create & Build",
    copy: "Our team gets to work. You get progress updates every 3 days — not radio silence.",
  },
  {
    title: "Review & Refine",
    copy: "Two rounds of revisions are included. We don't stop until the work is right.",
  },
  {
    title: "Launch & Support",
    copy: "We go live together. Then we stay close — monitoring, supporting, and optimising for 30 days post-launch.",
  },
];

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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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

        <div className="mt-space-8 space-y-space-6">
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
              className="grid grid-cols-[auto_1fr] gap-space-5"
            >
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-radius-full bg-dk-blue-1 text-ds-small font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < processSteps.length - 1 && (
                  <span aria-hidden className="mt-space-2 w-px flex-1 bg-primary/[0.08]" />
                )}
              </div>
              <div className={cn("space-y-space-2", index < processSteps.length - 1 && "pb-space-6")}>
                <h3 className="text-ds-h4 text-primary">{step.title}</h3>
                <p className="max-w-2xl text-ds-body text-light-dark">{step.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-space-6 flex justify-center lg:justify-start">
          <Button variant="primary" href="/contact">
            Book a Free Discovery Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
