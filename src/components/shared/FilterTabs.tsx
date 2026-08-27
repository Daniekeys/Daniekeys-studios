"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
  theme?: "light" | "dark";
  className?: string;
}

export default function FilterTabs({
  tabs,
  active,
  onChange,
  theme = "light",
  className,
}: FilterTabsProps) {
  const inactiveText = "text-light-dark";
  const activeText = theme === "dark" ? "text-primary-white" : "text-primary";
  const layoutId = useId();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="tablist"
      className={cn("flex flex-wrap items-center gap-space-6", className)}
    >
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={cn(
              "relative pb-space-2 text-ds-small font-semibold transition-colors duration-200",
              isActive ? activeText : inactiveText
            )}
          >
            {tab}
            {isActive && (
              <motion.span
                layoutId={`filter-tab-underline-${layoutId}`}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                className="absolute inset-x-0 bottom-0 h-0.5 bg-dk-blue-1"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
