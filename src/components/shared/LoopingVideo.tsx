"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface LoopingVideoProps {
  src: string;
  poster?: string;
  label: string;
  className?: string;
}

// A muted, looping clip that only downloads as it is about to scroll into
// view and pauses once it is well out of it (same approach as VideoCard), so it can sit in the
// footer of every page without costing anything up front. Under
// prefers-reduced-motion it never plays — the poster frame stands in.
export default function LoopingVideo({
  src,
  poster,
  label,
  className,
}: LoopingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = videoRef.current;
    if (!el || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!el.src) el.src = src;
          el.play().catch(() => {});
        } else if (!el.paused) {
          el.pause();
        }
      },
      // Starts a full screen-height before the frame scrolls in, so it is
      // already playing when the visitor lands on the block (on mobile the
      // frame sits below the block's heading and buttons).
      { rootMargin: "100% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src, prefersReducedMotion]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`${label}, silent preview`}
      className={className}
    />
  );
}
