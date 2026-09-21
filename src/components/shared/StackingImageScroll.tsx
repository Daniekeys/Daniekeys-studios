"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

import { getImageUrl } from "@/lib/cloudinary";

export interface StackingImageScrollItem {
  title: string;
  description: string;
  /** Cloudinary public ID (no extension). Required — every item in this
   * effect needs its own image; there is no text-only state. */
  image: string;
  imageAlt?: string;
}

interface StackingImageScrollProps {
  items: StackingImageScrollItem[];
}

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

/**
 * EFFECT 2 — STICKY / STACKING IMAGE SCROLL.
 *
 * Image 01 holds in a sticky frame while 02, 03… progressively join the
 * composition (a cascading card stack, each new join layered on top with a
 * small diagonal offset) as the user scrolls down through the section.
 * Scrolling up removes joins in reverse. The active step's title/description
 * updates in sync with the most recently joined image.
 *
 * Desktop only — see StackingImageScrollMobile below for the simplified,
 * non-sticky mobile fallback (same data, same order, no scroll-linking).
 */
export default function StackingImageScroll({ items }: StackingImageScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [joinedCount, setJoinedCount] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(items.length, Math.max(1, Math.ceil(value * items.length)));
    setJoinedCount((current) => (current === next ? current : next));
  });

  const activeIndex = joinedCount - 1;
  const activeItem = items[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:block"
      style={{ height: `${items.length * 70}vh` }}
    >
      <div className="sticky top-24 grid h-[calc(100vh-8rem)] max-h-[640px] grid-cols-[1fr_420px] items-center gap-space-8">
        <div>
          <span className="text-ds-h4 tabular-nums text-dk-blue-1">
            {`// ${pad(activeIndex)}`}
          </span>
          <h3 className="mt-space-3 text-ds-h3 text-primary">{activeItem.title}</h3>
          <p className="mt-space-3 max-w-md text-ds-body-lg text-light-dark">
            {activeItem.description}
          </p>
        </div>

        <div className="relative h-[420px] w-full">
          {items.map((item, index) => {
            const isJoined = index < joinedCount;
            const offset = index * 22;
            const restingScale = 1 - index * 0.035;

            return (
              <motion.div
                key={item.title}
                className="absolute inset-0 overflow-hidden rounded-radius-lg shadow-lg"
                style={{ zIndex: index + 1 }}
                initial={false}
                animate={
                  prefersReducedMotion
                    ? { opacity: index === 0 ? 1 : 0 }
                    : {
                        opacity: isJoined ? 1 : 0,
                        x: isJoined ? offset : offset - 16,
                        y: isJoined ? offset : offset - 16,
                        scale: isJoined ? restingScale : restingScale - 0.04,
                      }
                }
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={getImageUrl(item.image)}
                  alt={item.imageAlt ?? item.title}
                  fill
                  sizes="420px"
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile/tablet fallback for StackingImageScroll — no sticky/scroll-linked
 * behaviour (per the brief's "avoid problematic sticky behaviour" rule for
 * small screens). Same items, same order, each just stacked as a plain
 * fade-up card with its own image.
 */
export function StackingImageScrollMobile({ items }: StackingImageScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-space-2 flex flex-col gap-space-7 lg:hidden">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }
          }
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-radius-lg">
            <Image
              src={getImageUrl(item.image)}
              alt={item.imageAlt ?? item.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <span className="mt-space-4 block text-ds-h4 tabular-nums text-dk-blue-1">
            {`// ${pad(index)}`}
          </span>
          <h3 className="mt-space-2 text-ds-h3 text-primary">{item.title}</h3>
          <p className="mt-space-2 text-ds-body text-light-dark">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
