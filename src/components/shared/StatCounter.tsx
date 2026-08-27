"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  caption: string;
  theme?: "light" | "dark";
  duration?: number;
  delay?: number;
  className?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  caption,
  theme = "dark",
  duration = 1.8,
  delay = 0,
  className,
}: StatCounterProps) {
  const numeralRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, {
      duration,
      delay,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isInView, prefersReducedMotion, value, duration, delay, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (numeralRef.current) {
        numeralRef.current.textContent = latest.toLocaleString();
      }
    });
    return unsubscribe;
  }, [rounded]);

  const numeralColor = theme === "dark" ? "text-primary-white" : "text-primary";

  return (
    <div ref={wrapperRef} className={cn("space-y-space-2", className)}>
      <p className={cn("text-ds-hero font-heading", numeralColor)}>
        <span ref={numeralRef}>0</span>
        {suffix && <span className="text-dk-blue-1">{suffix}</span>}
      </p>
      <p className="max-w-xs text-ds-body text-light-dark">{caption}</p>
    </div>
  );
}
