"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import type { ShowreelClip } from "@/lib/showreel";

interface VideoCardProps {
  clip: ShowreelClip;
  onOpen: (clip: ShowreelClip) => void;
  delay?: number;
}

// Inline preview: muted, looped, plays only while in view (IntersectionObserver
// attaches the source on first intersection so a grid of clips doesn't all
// download at once). Under prefers-reduced-motion it never autoplays — the
// poster frame stands in and the play affordance is the way in.
// The "View video" button opens the fullscreen MediaLightbox with full audio.
export default function VideoCard({ clip, onOpen, delay = 0 }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!el.src) el.src = clip.src;
          if (!prefersReducedMotion) el.play().catch(() => {});
        } else if (!el.paused) {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [clip.src, prefersReducedMotion]);

  const handleOpen = () => {
    videoRef.current?.pause();
    onOpen(clip);
  };

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
      className="space-y-space-4"
    >
      <div
        className={cn(
          "group relative w-full overflow-hidden rounded-radius-lg bg-primary",
          clip.orientation === "portrait"
            ? "mx-auto aspect-[9/16] max-w-[300px]"
            : "aspect-video"
        )}
      >
        <video
          ref={videoRef}
          poster={clip.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={`${clip.title} — silent preview`}
          className="h-full w-full object-cover"
        />

        {/* Bottom gradient + label */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-space-4">
          <p className="text-ds-micro uppercase tracking-wide text-dk-blue-3">
            {clip.category}
          </p>
          <h3 className="mt-space-1 text-ds-h4 text-primary-white">
            {clip.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={handleOpen}
          aria-label={`Play ${clip.title} with sound`}
          className="absolute right-space-4 top-space-4 inline-flex items-center gap-space-2 rounded-radius-full bg-primary-white/95 px-space-4 py-space-2 text-ds-micro font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-dk-blue-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dk-blue-1"
        >
          <Play className="h-3.5 w-3.5 fill-current" />
          View video
        </button>
      </div>
    </motion.div>
  );
}
