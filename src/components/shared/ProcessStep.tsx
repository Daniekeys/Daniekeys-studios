"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import Button from "./Button";

interface ProcessStepProps {
  number: number;
  image: string;
  heading: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  isLast?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export default function ProcessStep({
  number,
  image,
  heading,
  description,
  ctaLabel,
  ctaHref,
  isLast = false,
  theme = "light",
  className,
}: ProcessStepProps) {
  const headingColor = theme === "dark" ? "text-primary-white" : "text-primary";
  const rule = theme === "dark" ? "bg-white/[0.08]" : "bg-primary/[0.08]";
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
      }
      className={cn("relative grid grid-cols-[auto_1fr] gap-space-5", className)}
    >
      <div className="relative flex flex-col items-center">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-radius-full bg-dk-blue-1 text-ds-small font-semibold text-white">
          {String(number).padStart(2, "0")}
        </span>
        {!isLast && (
          <span aria-hidden className={cn("mt-space-2 w-px flex-1", rule)} />
        )}
      </div>

      <div className="grid gap-space-5 pb-space-8 md:grid-cols-[160px_1fr] md:items-center">
        <div className="relative aspect-square w-full overflow-hidden rounded-radius-lg md:w-40">
          <Image src={image} alt={heading} fill className="object-cover" />
        </div>
        <div className="space-y-space-2">
          <h4 className={cn("text-ds-h4", headingColor)}>{heading}</h4>
          <p className="max-w-md text-ds-body text-light-dark">{description}</p>
          {ctaLabel && ctaHref && (
            <Button variant="text-link" href={ctaHref}>
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
