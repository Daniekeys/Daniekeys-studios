"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface ModeToggleProps {
  options: [string, string];
  value: string;
  onChange: (value: string) => void;
  theme?: "light" | "dark";
  className?: string;
}

export default function ModeToggle({
  options,
  value,
  onChange,
  theme = "light",
  className,
}: ModeToggleProps) {
  const track =
    theme === "dark" ? "bg-white/[0.08]" : "bg-primary/[0.06]";
  const inactiveText = "text-light-dark";
  const activeText = "text-white";
  const layoutId = useId();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="tablist"
      className={cn(
        "relative inline-flex rounded-radius-full p-space-1",
        track,
        className
      )}
    >
      {options.map((option) => {
        const isActive = option === value;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option)}
            className={cn(
              "relative z-10 rounded-radius-full px-space-5 py-space-2 text-ds-small font-semibold transition-colors duration-200",
              isActive ? activeText : inactiveText
            )}
          >
            {isActive && (
              <motion.span
                layoutId={`mode-toggle-active-${layoutId}`}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.25, ease: "easeInOut" }
                }
                className="absolute inset-0 -z-10 rounded-radius-full bg-dk-blue-1"
              />
            )}
            {option}
          </button>
        );
      })}
    </div>
  );
}
