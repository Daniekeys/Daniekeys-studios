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
  isNew?: boolean;
}

const services: ServiceTeaser[] = [
  {
    title: "AI Digital Strategy",
    description:
      "We use AI to audit, plan, and execute digital strategies that give your business an unfair advantage over competitors still doing things manually.",
    isNew: true,
  },
  {
    title: "Brand Identity & Design",
    description:
      "Logos, visual systems, colour palettes, and brand guidelines that make your business look like it belongs at the top.",
    tags: ["Logo Design", "Visual Identity", "Brand Guidelines"],
  },
  {
    title: "Website & App Development",
    description:
      "Fast, beautiful, mobile-first websites and apps that don't just look impressive — they convert visitors into paying customers.",
    tags: ["Web Design", "E-Commerce", "UI/UX", "App Dev"],
  },
  {
    title: "Motion Graphics & Video",
    description:
      "Animated ads, brand videos, explainer reels, and motion graphics that stop the scroll and build instant brand recall.",
    tags: ["Brand Video", "Animated Ads", "Explainer Videos"],
  },
  {
    title: "AI Chatbots & Automation",
    description:
      "Deploy AI agents on your website, WhatsApp, and Instagram that handle enquiries, qualify leads, and book appointments — 24/7 without extra headcount.",
    isNew: true,
  },
  {
    title: "Digital Marketing & Social Media",
    description:
      "AI-enhanced content strategies, social media management, SEO, and ad campaigns that build audiences and drive consistent revenue.",
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
            From brand identity to AI automation — every service is built to
            deliver a measurable return on your investment.
          </p>
        </div>

        <div className="mt-space-8 grid gap-space-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-radius-lg border border-white/[0.08] p-space-6"
            >
              <div className="flex h-space-6 items-center">
                {service.isNew && (
                  <span className="rounded-radius-full bg-dk-blue-1 px-space-3 py-space-1 text-ds-micro uppercase tracking-wide text-white">
                    New
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
