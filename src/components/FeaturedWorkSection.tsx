"use client";

import { motion, useReducedMotion } from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import ProjectCard from "@/components/shared/ProjectCard";

// The 4 real client names per 00-OVERVIEW.md, no invented ones. Imagery is
// neutral case-study/presentation-style stock (fresh Unsplash sources per
// 03-IMAGE-SOURCING-GUIDE.md) rather than real client screenshots — no
// client permission/assets are available for these projects.
const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1717994818194-5760d533cab6?auto=format&fit=crop&w=900&q=80",
    category: "Branding",
    title: "Afriment — Brand Identity System",
    href: "/portfolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1695634281254-e94a29d234c0?auto=format&fit=crop&w=900&q=80",
    category: "Branding",
    title: "Candexa — Visual Identity Rebrand",
    href: "/portfolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1635360381874-edd74cbd57f3?auto=format&fit=crop&w=900&q=80",
    category: "Marketing/Motion",
    title: "My Lang Coach — Promotional Video Series",
    href: "/portfolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    category: "Marketing",
    title: "Buymejollof — Brand Launch Video",
    href: "/portfolio",
  },
];

export default function FeaturedWorkSection() {
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
        <Eyebrow theme="light">{"// Our Work"}</Eyebrow>
        <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
            Work That Speaks Louder Than Pitches.
          </h2>
          <p className="text-ds-body text-light-dark">
            Real projects. Real clients. Real results.
          </p>
        </div>

        <div className="mt-space-8 grid gap-space-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>

        <div className="mt-space-8 flex justify-center lg:justify-start">
          <Button variant="secondary" href="/portfolio">
            See All Projects
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
