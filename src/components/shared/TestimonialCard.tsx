"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface TestimonialQuoteProps {
  variant: "quote";
  avatarSrc: string;
  name: string;
  company: string;
  quote: string;
  rating?: number;
  theme?: "light" | "dark";
  className?: string;
}

interface TestimonialFeaturedProps {
  variant: "featured";
  avatarSrc: string;
  name: string;
  company: string;
  quote: string;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  theme?: "light" | "dark";
  className?: string;
}

type TestimonialCardProps = TestimonialQuoteProps | TestimonialFeaturedProps;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function TestimonialCard(props: TestimonialCardProps) {
  const theme = props.theme ?? "light";
  const heading = theme === "dark" ? "text-primary-white" : "text-primary";
  const hairline = theme === "dark" ? "border-white/[0.08]" : "border-primary/[0.08]";
  const prefersReducedMotion = useReducedMotion();

  if (props.variant === "quote") {
    const { avatarSrc, name, company, quote, rating = 5, className } = props;

    return (
      <div
        className={cn(
          "flex flex-col gap-space-5 rounded-radius-lg border p-space-6",
          hairline,
          className
        )}
      >
        <div className="flex items-center gap-space-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-dk-blue-1 text-dk-blue-1" />
          ))}
        </div>
        <p className={cn("text-ds-body", heading)}>{quote}</p>
        <div className="flex items-center gap-space-3">
          <div className="relative h-10 w-10 flex-none overflow-hidden rounded-radius-full">
            <Image src={avatarSrc} alt={name} fill className="object-cover" />
          </div>
          <div>
            <p className={cn("text-ds-small font-semibold", heading)}>{name}</p>
            <p className="text-ds-micro text-light-dark">{company}</p>
          </div>
        </div>
      </div>
    );
  }

  const { avatarSrc, name, company, quote, index, total, onPrev, onNext, className } =
    props;

  // `animate` must stay pointed at the visible state unconditionally — same
  // fix pattern as ProcessStep / ProjectCard. useReducedMotion() resolves
  // after first paint, so swapping in `animate: {}` when reduced strands the
  // keyed crossfade child at opacity 0 (the blank-featured-quote defect,
  // 00-OVERVIEW.md). Gate only `initial` and the transition duration.
  const crossfade = {
    initial: prefersReducedMotion ? false : { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.4 },
  };

  return (
    <div className={cn("relative grid gap-space-6 md:grid-cols-[auto_1fr]", className)}>
      <span
        aria-hidden
        className="hidden text-ds-micro uppercase tracking-widest text-light-dark [writing-mode:vertical-rl] md:block"
      >
        Featured Review
      </span>

      <div className="space-y-space-5">
        <Quote className="h-10 w-10 text-dk-blue-1" />

        <AnimatePresence mode="wait">
          <motion.div key={index} {...crossfade} className="space-y-space-5">
            <p className={cn("max-w-2xl text-ds-h3", heading)}>{quote}</p>
            <div className="flex items-center gap-space-3">
              <div className="relative h-12 w-12 flex-none overflow-hidden rounded-radius-full">
                <Image src={avatarSrc} alt={name} fill className="object-cover" />
              </div>
              <div>
                <p className={cn("text-ds-small font-semibold", heading)}>{name}</p>
                <p className="text-ds-micro text-light-dark">{company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-space-4">
          <p className="text-ds-small tabular-nums text-light-dark">
            {pad(index + 1)}/{pad(total)}
          </p>
          <div className="flex items-center gap-space-2">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous testimonial"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-radius-full border",
                hairline
              )}
            >
              <ArrowLeft className={cn("h-4 w-4", heading)} />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next testimonial"
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-radius-full border",
                hairline
              )}
            >
              <ArrowRight className={cn("h-4 w-4", heading)} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
