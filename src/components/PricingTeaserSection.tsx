"use client";

import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import { cn } from "@/lib/utils";

// Teaser only — name + starting price, no toggle, no feature lists. The full
// Packages/Retainers grid (PackageCard, ModeToggle) is Batch 11's /pricing.
const plans = [
  { name: "Starter", from: "₦95,000" },
  { name: "Business", from: "₦250,000", isRecommended: true },
  { name: "Premium", from: "₦700,000" },
];

export default function PricingTeaserSection() {
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
        <Eyebrow theme="light">{"// Investment"}</Eyebrow>
        <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
            Transparent Pricing. No Hidden Fees. No Surprises.
          </h2>
          <p className="max-w-md text-ds-body text-light-dark">
            We publish our prices because we respect your time. See exactly
            what things cost — and what you get for every naira.
          </p>
        </div>

        <div className="mt-space-8 grid gap-space-5 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col gap-space-2 rounded-radius-lg border p-space-6",
                plan.isRecommended ? "border-dk-blue-1" : "border-primary/[0.08]"
              )}
            >
              {plan.isRecommended && (
                <span className="absolute right-space-5 top-0 flex -translate-y-1/2 items-center gap-space-1 rounded-radius-sm bg-dk-blue-1 px-space-3 py-space-1 text-ds-micro uppercase tracking-wide text-white">
                  <Star className="h-3 w-3 fill-current" />
                  Most Popular
                </span>
              )}
              <h3 className="text-ds-h4 text-primary">{plan.name}</h3>
              <p className="text-ds-body text-light-dark">
                From <span className="font-semibold text-primary">{plan.from}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-space-8 flex justify-center lg:justify-start">
          <Button variant="primary" href="/pricing">
            See Full Pricing
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
