"use client";

import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "text-link";

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: LucideIcon;
  className?: string;
}

const FILL_CLASSES: Record<"primary" | "secondary", string> = {
  primary: "bg-dk-blue-1 text-white hover:bg-dk-blue-2",
  secondary: "bg-primary text-white hover:bg-primary/90",
};

const CHIP_CLASSES: Record<"primary" | "secondary", string> = {
  primary: "bg-primary text-white",
  secondary: "border border-white/25 text-white",
};

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dk-blue-1";

export default function Button({
  variant,
  children,
  href,
  onClick,
  type = "button",
  disabled,
  icon: Icon = ArrowRight,
  className,
}: ButtonProps) {
  if (variant === "text-link") {
    const content = (
      <span className="inline-flex items-center gap-2">
        <span className="underline-offset-4 group-hover:underline">
          {children}
        </span>
        <Icon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
      </span>
    );
    const linkClasses = cn(
      "group inline-flex items-center rounded-radius-sm",
      FOCUS_RING,
      disabled && "pointer-events-none opacity-50",
      className
    );

    return href ? (
      <Link href={href} className={linkClasses}>
        {content}
      </Link>
    ) : (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={linkClasses}
      >
        {content}
      </button>
    );
  }

  const classes = cn(
    "group inline-flex items-center gap-3 rounded-radius-md py-1 pl-6 pr-1 text-ds-small font-semibold transition-colors duration-200",
    FOCUS_RING,
    FILL_CLASSES[variant],
    disabled && "pointer-events-none cursor-not-allowed opacity-50",
    className
  );

  const chip = (
    <span
      className={cn(
        "flex h-9 w-9 flex-none items-center justify-center rounded-radius-sm",
        CHIP_CLASSES[variant]
      )}
    >
      <Icon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        {chip}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      <span>{children}</span>
      {chip}
    </button>
  );
}
