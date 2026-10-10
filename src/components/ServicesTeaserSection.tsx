"use client";

import { motion, useReducedMotion } from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import { cn } from "@/lib/utils";

interface ServiceTeaser {
  title: string;
  description: string;
  tags?: string[];
  badge?: "Popular" | "New";
}

const services: ServiceTeaser[] = [
  {
    title: "Motion Graphics & Animated Ads",
    description:
      "Animated ads, product launch videos and app promos built to stop the scroll and make people remember your brand.",
    tags: ["Motion Ads", "Product Launch", "App Promo"],
    badge: "Popular",
  },
  {
    title: "AI Video: UGC Ads & Animation",
    description:
      "AI-generated UGC ads and animated characters that look like a full production shoot, at a fraction of the cost and time.",
    tags: ["UGC Ads", "AI Animation", "Characters"],
    badge: "New",
  },
  {
    title: "Story & Explainer Videos",
    description:
      "Brand stories, founder stories, impact films and explainers that make people understand you and trust you fast.",
    tags: ["Brand Story", "Explainers", "Impact Films"],
    badge: "New",
  },
  {
    title: "Website & App Development",
    description:
      "Fast, beautiful, mobile-first websites and apps that don't just look impressive. They turn visitors into paying customers.",
    tags: ["Web Design", "E-Commerce", "UI/UX", "App Dev"],
  },
  {
    title: "Brand Identity & Graphics",
    description:
      "Logos, brand kits, flyers, carousels and social graphics that make your business look like it belongs at the top.",
    tags: ["Logo Design", "Brand Kit", "Social Graphics"],
  },
  {
    title: "Social Media & Content Management",
    description:
      "We plan, create and post video-first content every month, so your channels never go quiet between big moments.",
    tags: ["Content Calendar", "Posting", "Storytelling"],
  },
];

// Landing teaser deliberately uses a card grid, not the numbered accordion —
// the full accordion (deliverables, pricing, CTA per row) is reserved for
// /services in Batch 9. See 12-LANDING-services-work-ai.md.
export default function ServicesTeaserSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
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
        <Eyebrow theme="dark">{"// What We Do"}</Eyebrow>
        <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-ds-h2 font-heading text-primary-white">
            Six Ways We Help Your Business Win Online.
          </h2>
          <p className="max-w-md text-ds-body text-light-dark">
            From videos that stop the scroll to websites that actually convert,
            everything we do is meant to pay you back.
          </p>
        </div>

        <div className="mt-space-8 grid gap-space-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-radius-lg border border-white/[0.08] p-space-6"
            >
              <div className="flex h-space-6 items-center">
                {service.badge && (
                  <span className="rounded-radius-full bg-dk-blue-1 px-space-3 py-space-1 text-ds-micro uppercase tracking-wide text-white">
                    {service.badge}
                  </span>
                )}
              </div>

              <h3 className="text-ds-h3 text-primary-white">{service.title}</h3>
              <p className="mt-space-3 flex-1 text-ds-body text-light-dark">
                {service.description}
              </p>

              {service.tags && (
                <div className="mt-space-5 flex flex-wrap gap-space-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-radius-sm bg-white/[0.08] px-space-3 py-space-1 text-ds-micro uppercase tracking-wide text-primary-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Button
                variant="text-link"
                href="/services"
                className={cn("text-primary-white", service.tags ? "mt-space-5" : "mt-space-6")}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-space-8 flex justify-center lg:justify-start">
          <Button variant="secondary" href="/services">
            Explore All Services
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
