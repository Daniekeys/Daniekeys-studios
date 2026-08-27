"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "./Button";

export interface PillarItem {
  title: string;
  description: string;
}

export interface ServiceDetailItem {
  title: string;
  hook: string;
  description: string;
  tags: string[];
  deliverables: string[];
  bestFor: string;
  priceFrom: string;
  ctaLabel: string;
  ctaHref: string;
  isNew?: boolean;
  image?: string;
}

export interface TrustTableItem {
  metaLeft: string;
  title: string;
  description: string;
  metaRight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

type NumberedAccordionProps =
  | { variant: "pillars"; theme?: "light" | "dark"; items: PillarItem[] }
  | {
      variant: "service-detail";
      theme?: "light" | "dark";
      items: ServiceDetailItem[];
    }
  | { variant: "trust-table"; theme?: "light" | "dark"; items: TrustTableItem[] }
  | { variant: "faq"; theme?: "light" | "dark"; items: FaqItem[] };

const EXPAND_TRANSITION = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

function useHairline(theme: "light" | "dark") {
  return theme === "dark" ? "border-white/[0.08]" : "border-primary/[0.08]";
}

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function NumberedAccordion(props: NumberedAccordionProps) {
  const { variant, items } = props;
  const theme = props.theme ?? "light";
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const hairline = useHairline(theme);
  const dimmedText = "text-light-dark";
  const fullContrastText = theme === "dark" ? "text-primary-white" : "text-primary";

  const expandAnimation = prefersReducedMotion
    ? { initial: false, animate: {}, exit: {} }
    : {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: EXPAND_TRANSITION,
      };

  return (
    <div className={cn("divide-y", hairline)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const heading = "question" in item ? item.question : item.title;

        const isTrustTable = variant === "trust-table";
        const isServiceDetail = variant === "service-detail";
        const plusClass = cn(
          "h-5 w-5 flex-none transition-transform duration-300",
          isOpen ? "rotate-45 text-dk-blue-1" : dimmedText
        );

        return (
          <div key={heading} className={cn("border-t first:border-t-0", hairline)}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${variant}-${index}`}
              className={cn(
                "flex w-full gap-space-4 py-space-5 text-left",
                // trust-table: compact row on mobile — number/title/metric stack
                // in the left column with the toggle pinned top-right (per
                // 20-PAGE-about.md's mobile note and the mockup's awards row);
                // restores the single-line 3-column row at md+.
                // service-detail: numeral aligns to the heading's first line so
                // the collapsed hook line can sit under the heading (21-PAGE-services.md).
                isTrustTable || isServiceDetail
                  ? "items-start justify-between md:items-center"
                  : "items-center justify-between",
                isServiceDetail && "md:items-start"
              )}
            >
              <span
                className={cn(
                  "flex gap-space-4",
                  isTrustTable
                    ? "min-w-0 flex-col gap-space-2 md:flex-row md:items-center md:gap-space-4"
                    : isServiceDetail
                      ? "items-start"
                      : "items-center"
                )}
              >
                <span
                  className={cn(
                    "text-ds-h4 tabular-nums",
                    isOpen ? "text-dk-blue-1" : dimmedText
                  )}
                >
                  {isTrustTable
                    ? (item as TrustTableItem).metaLeft
                    : `// ${pad(index)}`}
                </span>
                {isServiceDetail ? (
                  <span className="flex min-w-0 flex-col gap-space-1">
                    <span className="flex flex-wrap items-center gap-space-3">
                      <span
                        className={cn(
                          "text-ds-h3",
                          isOpen ? fullContrastText : dimmedText
                        )}
                      >
                        {heading}
                      </span>
                      {(item as ServiceDetailItem).isNew && (
                        <span className="rounded-radius-sm bg-dk-blue-1 px-space-2 py-space-1 text-ds-micro uppercase tracking-wide text-white">
                          New
                        </span>
                      )}
                    </span>
                    <span className={cn("text-ds-small font-normal", dimmedText)}>
                      {(item as ServiceDetailItem).hook}
                    </span>
                  </span>
                ) : (
                  <span
                    className={cn(
                      "text-ds-h3",
                      isOpen ? fullContrastText : dimmedText
                    )}
                  >
                    {heading}
                  </span>
                )}
                {isTrustTable && (
                  <span className={cn("text-ds-small md:hidden", dimmedText)}>
                    {(item as TrustTableItem).metaRight}
                  </span>
                )}
              </span>
              <span
                className={cn(
                  "flex items-center gap-space-4",
                  isTrustTable && "flex-none md:justify-end"
                )}
              >
                {isTrustTable && (
                  <span className={cn("hidden text-ds-small md:block", dimmedText)}>
                    {(item as TrustTableItem).metaRight}
                  </span>
                )}
                <Plus className={plusClass} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${variant}-${index}`}
                  role="region"
                  {...expandAnimation}
                  className="overflow-hidden"
                >
                  <div className="pb-space-6">
                    {variant === "pillars" && (
                      <p className={cn("max-w-2xl text-ds-body", dimmedText)}>
                        {(item as PillarItem).description}
                      </p>
                    )}

                    {variant === "faq" && (
                      <p className={cn("max-w-2xl text-ds-body", dimmedText)}>
                        {(item as FaqItem).answer}
                      </p>
                    )}

                    {variant === "trust-table" && (
                      <p className={cn("max-w-2xl text-ds-body", dimmedText)}>
                        {(item as TrustTableItem).description}
                      </p>
                    )}

                    {variant === "service-detail" &&
                      (() => {
                        const detail = item as ServiceDetailItem;
                        return (
                          <div className="space-y-space-5">
                            <p className={cn("max-w-2xl text-ds-body", dimmedText)}>
                              {detail.description}
                            </p>
                            <div className="grid gap-space-6 md:grid-cols-[1fr_auto] md:items-start">
                              <div className="space-y-space-5">
                                {detail.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-space-2">
                                    {detail.tags.map((tag) => (
                                      <span
                                        key={tag}
                                        className={cn(
                                          "rounded-radius-sm px-space-3 py-space-1 text-ds-micro uppercase tracking-wide",
                                          theme === "dark"
                                            ? "bg-white/[0.08] text-primary-white"
                                            : "bg-primary/[0.06] text-primary"
                                        )}
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {detail.image && (
                                  <div className="relative aspect-video w-full overflow-hidden rounded-radius-lg">
                                    <Image
                                      src={detail.image}
                                      alt={detail.title}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                )}

                                <ul className="space-y-space-2">
                                  {detail.deliverables.map((deliverable) => (
                                    <li
                                      key={deliverable}
                                      className={cn(
                                        "flex items-start gap-space-2 text-ds-body",
                                        fullContrastText
                                      )}
                                    >
                                      <Check className="mt-1 h-3.5 w-3.5 flex-none text-dk-blue-1" />
                                      {deliverable}
                                    </li>
                                  ))}
                                </ul>

                                <p className={cn("text-ds-small", dimmedText)}>
                                  Best for: {detail.bestFor}
                                </p>
                              </div>

                              <div className="space-y-space-4 md:w-56">
                                <p className={cn("text-ds-h4", fullContrastText)}>
                                  Starts from {detail.priceFrom}
                                </p>
                                <Button variant="primary" href={detail.ctaHref}>
                                  {detail.ctaLabel}
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
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
