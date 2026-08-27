import { Check, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "./Button";

type PriceDisplay =
  | { mode: "recurring"; amount: string; period?: string }
  | { mode: "range"; low: string; high: string };

interface PackageCardProps {
  planName: string;
  // Optional: retainer plans in 23-PAGE-pricing.md have no one-line tagline,
  // only packages do.
  description?: string;
  includedLabel?: string;
  features: string[];
  price: PriceDisplay;
  // Qualifier shown directly under the price (e.g. "One-time · Final price
  // depends on scope") — the price row is a flexible slot, not number-only.
  priceNote?: string;
  bestFor: string;
  timeline?: string;
  ctaLabel: string;
  ctaHref: string;
  finePrint?: string;
  isRecommended?: boolean;
  className?: string;
}

function PriceRow({ price }: { price: PriceDisplay }) {
  if (price.mode === "range") {
    return (
      <p className="text-ds-h3 text-primary-white">
        {price.low} <span className="text-light-dark">–</span> {price.high}
      </p>
    );
  }

  return (
    <p className="flex flex-wrap items-baseline gap-space-1 text-ds-h2 font-heading text-primary-white">
      {price.amount}
      {price.period && (
        <span className="text-ds-body text-light-dark">{price.period}</span>
      )}
    </p>
  );
}

export default function PackageCard({
  planName,
  description,
  includedLabel = "What's Included?",
  features,
  price,
  priceNote,
  bestFor,
  timeline,
  ctaLabel,
  ctaHref,
  finePrint,
  isRecommended = false,
  className,
}: PackageCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-space-6 overflow-hidden rounded-radius-xl bg-primary p-space-6",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 -top-1/4 h-72 w-72 rounded-full bg-dk-blue-1 opacity-35 blur-[60px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-72 w-72 rounded-full bg-dk-blue-2 opacity-25 blur-[60px]"
      />

      {isRecommended && (
        <span className="absolute right-space-5 top-0 flex items-center gap-space-1 rounded-b-radius-sm bg-dk-blue-1 px-space-3 py-space-2 text-ds-micro uppercase tracking-wide text-white">
          <Star className="h-3 w-3 fill-current" />
          Most Popular
        </span>
      )}

      <div className="relative space-y-space-2">
        <h3 className="text-ds-h3 text-primary-white">{planName}</h3>
        {description && (
          <p className="text-ds-body text-light-dark">{description}</p>
        )}
      </div>

      <div className="relative space-y-space-3">
        <p className="text-ds-small text-light-dark">{includedLabel}</p>
        <ul className="space-y-space-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-space-2 text-ds-body text-primary-white"
            >
              <Check className="mt-1 h-3.5 w-3.5 flex-none text-dk-blue-1" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-auto space-y-space-1">
        <PriceRow price={price} />
        {priceNote && (
          <p className="text-ds-small text-light-dark">{priceNote}</p>
        )}
        <p className="text-ds-small text-light-dark">Best for: {bestFor}</p>
        {timeline && (
          <p className="text-ds-small text-light-dark">Timeline: {timeline}</p>
        )}
      </div>

      <div className="relative space-y-space-3">
        <Button variant="primary" href={ctaHref} className="w-full justify-between">
          {ctaLabel}
        </Button>
        {finePrint && (
          <p className="text-ds-micro text-light-dark">{finePrint}</p>
        )}
      </div>
    </div>
  );
}
