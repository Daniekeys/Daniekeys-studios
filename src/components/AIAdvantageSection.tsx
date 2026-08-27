"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";

const bullets = [
  { title: "AI Chatbots", copy: "deployed on WhatsApp, website & Instagram" },
  { title: "AI Content Pipelines", copy: "30 days of content, 48-hour turnaround" },
  { title: "AI Brand Analytics", copy: "real-time insights, not monthly PDFs" },
];

// Unique to Daniekeys — no Clonix mockup equivalent for this section, per
// 12-LANDING-services-work-ai.md. Supporting visual is a placeholder abstract
// stock image per 03-IMAGE-SOURCING-GUIDE.md ("AI technology abstract").
export default function AIAdvantageSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
      <GridOverlay />

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1280px] gap-space-8 px-space-4 md:px-space-6 lg:grid-cols-[55fr_40fr] lg:items-center lg:gap-space-9"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <Eyebrow theme="dark">{"// AI-Powered Agency"}</Eyebrow>
          <h2 className="mt-space-3 text-ds-h2 font-heading text-primary-white">
            Your Competitors Are Still Doing This Manually. You Don&apos;t Have To.
          </h2>
          <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
            Our founder is an AI engineer. That means we don&apos;t just talk
            about using AI — we actually build it into your brand systems.
            From AI chatbots that handle your DMs, to content pipelines that
            produce 30 days of material in 48 hours, to strategy tools that
            predict what your audience wants next — we give your brand AI
            superpowers.
          </p>

          <ul className="mt-space-6 space-y-space-4">
            {bullets.map((bullet) => (
              <li key={bullet.title} className="flex items-start gap-space-3">
                <Check className="mt-1 h-5 w-5 flex-none text-dk-blue-1" />
                <span className="text-ds-body text-primary-white">
                  <strong className="font-semibold">{bullet.title}</strong> —{" "}
                  {bullet.copy}
                </span>
              </li>
            ))}
          </ul>

          <Button variant="primary" href="/services#ai" className="mt-space-7">
            Explore AI Services
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-radius-xl bg-dk-blue-1/25 blur-3xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-radius-xl lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80"
              alt="Abstract visualization representing AI-driven automation"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
