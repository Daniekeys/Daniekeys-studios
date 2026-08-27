"use client";

import { motion, useReducedMotion } from "framer-motion";

import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import StatCounter from "@/components/shared/StatCounter";
import { cn } from "@/lib/utils";

const stats = [
  { value: 50, suffix: "+", caption: "Projects Delivered" },
  { value: 5, suffix: "+", caption: "Years in Business" },
  { value: 3, suffix: "×", caption: "Average Client Revenue Growth" },
  { value: 100, suffix: "%", caption: "On-Time Delivery Rate" },
];

// /reference's own "// Our Numbers" block (inside the dark Services section,
// staggered 3-stat layout beside a video still) doesn't match this section's
// brief in 11-LANDING-who-we-are-numbers.md — that spec deliberately pulls
// "Our Numbers" out as its own 4-stat, off-white proof strip directly under
// "Who We Are" instead. Kept on --off-white per the spec's own recommendation
// (thematically one unit with Who We Are; the next dark break is Services).
export default function OurNumbersSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-off-white pt-space-6 pb-space-8 lg:pt-space-7 lg:pb-space-10">
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
        <Eyebrow theme="light">{"// The Numbers"}</Eyebrow>
        <h3 className="mt-space-3 max-w-2xl text-ds-h4 text-primary">
          Real Results, Not Just Promises.
        </h3>

        <div className="mt-space-7 grid grid-cols-2 gap-x-space-5 gap-y-space-7 lg:grid-cols-4 lg:gap-x-space-8 lg:gap-y-0">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.caption}
              value={stat.value}
              suffix={stat.suffix}
              caption={stat.caption}
              theme="light"
              delay={index * 0.1}
              className={cn(
                "text-center lg:pl-space-8 lg:text-left",
                index === 0 && "lg:pl-0",
                index > 0 && "lg:border-l lg:border-primary/[0.08]"
              )}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
