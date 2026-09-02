"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import TestimonialCard from "@/components/shared/TestimonialCard";

// The only 3 real client quotes that exist (per 00-OVERVIEW.md) — reused
// across the featured slot and the secondary row rather than inventing more.
// Avatars are neutral professional-headshot stock placeholders (no real
// client photos available yet), per 03-IMAGE-SOURCING-GUIDE.md.
const testimonials = [
  {
    name: "Afriment",
    company: "Verified client",
    quote:
      "The new brand system made us look sharper immediately. More importantly, customers understood what we offered faster.",
    avatarSrc:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Candexa",
    company: "Verified client",
    quote:
      "Daniekeys Studios gave us structure, better visuals, and a launch plan that felt practical from day one.",
    avatarSrc:
      "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Lagos Business Owner",
    company: "Verified client",
    quote:
      "The ROI was visible within 30 days. Not just better design — actually more customers coming through the door.",
    avatarSrc:
      "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=crop&w=200&q=80",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const goPrev = () =>
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setActiveIndex((current) => (current + 1) % testimonials.length);
  const active = testimonials[activeIndex];

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
        <Eyebrow theme="dark">{"// Testimonials"}</Eyebrow>
        <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-ds-h2 font-heading text-primary-white">
            Don&apos;t Take Our Word for It. Take Theirs.
          </h2>
          <div className="flex flex-wrap items-center gap-space-2 text-ds-body text-primary-white">
            <span className="text-dk-blue-1">★★★★★</span>
            <span>Rated 5.0 by 30+ clients on Google</span>
            <a
              href="https://www.google.com/search?q=Daniekeys+Studios+reviews"
              target="_blank"
              rel="noreferrer"
              className="text-dk-blue-1 underline underline-offset-4"
            >
              Read Reviews ↗
            </a>
          </div>
        </div>

        <div className="mt-space-8 rounded-radius-xl border border-white/[0.08] p-space-6 lg:p-space-8">
          <TestimonialCard
            variant="featured"
            theme="dark"
            avatarSrc={active.avatarSrc}
            name={active.name}
            company={active.company}
            quote={active.quote}
            index={activeIndex}
            total={testimonials.length}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>

        <div className="mt-space-6 grid gap-space-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              variant="quote"
              theme="dark"
              avatarSrc={testimonial.avatarSrc}
              name={testimonial.name}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
