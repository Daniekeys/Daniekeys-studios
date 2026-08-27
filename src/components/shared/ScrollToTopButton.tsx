"use client";

import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

interface ScrollToTopButtonProps {
  className?: string;
}

export default function ScrollToTopButton({ className }: ScrollToTopButtonProps) {
  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={cn(
        "flex h-11 w-11 flex-none items-center justify-center rounded-radius-md bg-dk-blue-1 transition-colors duration-200 hover:bg-dk-blue-2",
        className
      )}
    >
      <ChevronUp className="h-5 w-5 text-black" />
    </button>
  );
}
