"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { getImageUrl } from "@/lib/cloudinary";

export interface ImageAccordionItem {
  title: string;
  description: string;
  /** Optional right-aligned meta badge, e.g. "30+ reviews" or "3×". */
  metaRight?: string;
  /**
   * Cloudinary public ID (no extension), e.g. "trust/rating-5-0". Omit to
   * leave this item without an image rather than reusing another item's —
   * the accordion renders fine with a text-only expanded panel.
   */
  image?: string;
  imageAlt?: string;
}

interface ImageAccordionProps {
  items: ImageAccordionItem[];
  theme?: "light" | "dark";
  /** Index open on mount. Pass -1 to start fully collapsed. Default: 0. */
  defaultOpenIndex?: number;
  className?: string;
}

const EXPAND_TRANSITION = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

/**
 * EFFECT 1 — CLICK-TO-EXPAND IMAGE ACCORDION.
 *
 * Data-driven and reusable across pages/sections: pass `items` and it
 * renders a premium FAQ-style accordion where the corresponding image
 * appears INSIDE the expanded item only (never as a background/thumbnail
 * elsewhere). One item open at a time. Closed items show title only — no
 * image occupies the collapsed row.
 */
export default function ImageAccordion({
  items,
  theme = "light",
  defaultOpenIndex = 0,
  className,
}: ImageAccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const prefersReducedMotion = useReducedMotion();

  const hairline = theme === "dark" ? "border-white/[0.08]" : "border-primary/[0.08]";
  const dimmedText = "text-light-dark";
  const fullContrastText = theme === "dark" ? "text-primary-white" : "text-primary";

  const expandAnimation = {
    initial: prefersReducedMotion ? false : { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: prefersReducedMotion ? { duration: 0 } : EXPAND_TRANSITION,
  };

  return (
    <div className={cn("divide-y", hairline, className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.title} className={cn("border-t first:border-t-0", hairline)}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`image-accordion-panel-${index}`}
              className="flex w-full items-center justify-between gap-space-4 py-space-5 text-left"
            >
              <span className="flex items-center gap-space-4">
                <span
                  className={cn(
                    "text-ds-h4 tabular-nums",
                    isOpen ? "text-dk-blue-1" : dimmedText
                  )}
                >
                  {`// ${pad(index)}`}
                </span>
                <span className={cn("text-ds-h3", isOpen ? fullContrastText : dimmedText)}>
                  {item.title}
                </span>
              </span>

              <span className="flex items-center gap-space-4">
                {item.metaRight && (
                  <span className={cn("hidden text-ds-small md:block", dimmedText)}>
                    {item.metaRight}
                  </span>
                )}
                <Plus
                  className={cn(
                    "h-5 w-5 flex-none transition-transform duration-300",
                    isOpen ? "rotate-45 text-dk-blue-1" : dimmedText
                  )}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`image-accordion-panel-${index}`}
                  role="region"
                  {...expandAnimation}
                  className="overflow-hidden"
                >
                  <div className="pb-space-6">
                    {item.image && (
                      <motion.div
                        className="relative mb-space-5 aspect-[16/9] w-full max-w-xl overflow-hidden rounded-radius-lg"
                        initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }
                        }
                      >
                        <Image
                          src={getImageUrl(item.image)}
                          alt={item.imageAlt ?? item.title}
                          fill
                          sizes="(min-width: 768px) 576px, 100vw"
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                    <p className={cn("max-w-2xl text-ds-body", fullContrastText)}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
