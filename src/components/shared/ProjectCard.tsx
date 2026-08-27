"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import Button from "./Button";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  href: string;
  theme?: "light" | "dark";
  delay?: number;
  className?: string;
}

export default function ProjectCard({
  image,
  category,
  title,
  href,
  theme = "light",
  delay = 0,
  className,
}: ProjectCardProps) {
  const heading = theme === "dark" ? "text-primary-white" : "text-primary";
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }
      }
      className={cn("space-y-space-4", className)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-lg">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-space-2">
        <p className="text-ds-micro uppercase tracking-wide text-dk-blue-1">
          {category}
        </p>
        <h4 className={cn("text-ds-h4", heading)}>{title}</h4>
        <Button variant="text-link" href={href}>
          View Project
        </Button>
      </div>
    </motion.div>
  );
}
