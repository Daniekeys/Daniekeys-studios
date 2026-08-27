"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Globe, Puzzle } from "lucide-react";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import NumberedAccordion, {
  type FaqItem,
} from "@/components/shared/NumberedAccordion";
import PackageCard from "@/components/shared/PackageCard";
import WatermarkGlyph from "@/components/shared/WatermarkGlyph";

const trustChips = [
  "No hidden fees",
  "Transparent deliverables",
  "Flexible payment plans",
  "Free first consultation",
];

// All figures, deliverables, "Best for" lines and timelines are verbatim from
// 23-PAGE-pricing.md. Naira ranges are the exact spec numbers — never rounded,
// never converted to USD.
const packages = [
  {
    planName: "Starter Package",
    description: "Best for getting your brand online fast.",
    price: { mode: "range", low: "₦95,000", high: "₦180,000" } as const,
    priceNote: "One-time · Final price depends on scope",
    features: [
      "Brand touch-up (logo refinement)",
      "6 social media post designs",
      "1 motion graphics video (30s)",
      "Basic page optimisation",
      "Caption writing for posts",
      "Light content strategy guide",
      "Landing page consultation (advisory only)",
    ],
    bestFor: "New businesses, side projects, personal brands starting out.",
    timeline: "1–2 weeks",
    ctaHref: "/contact?package=starter",
  },
  {
    planName: "Business Package",
    description: "Complete digital package that drives real results.",
    price: { mode: "range", low: "₦250,000", high: "₦650,000" } as const,
    priceNote: "One-time · Final price depends on scope",
    isRecommended: true,
    features: [
      "Landing page website (custom design)",
      "10–15 social media post designs",
      "3–5 motion graphics videos",
      "Starter brand kit (logo, colours, fonts)",
      "Social media optimisation (all platforms)",
      "30-day content calendar",
      "Hashtag & SEO research",
      "2 rounds of revisions",
      "30-day post-delivery support",
    ],
    bestFor: "Established small businesses, funded startups, growing brands.",
    timeline: "3–4 weeks",
    ctaHref: "/contact?package=business",
  },
  {
    planName: "Premium Package",
    description: "Full-scale transformation for serious growth.",
    price: { mode: "range", low: "₦700,000", high: "₦3,000,000" } as const,
    priceNote: "One-time · Final price depends on scope",
    features: [
      "Full website (5–7 pages, custom)",
      "E-commerce integration (if needed)",
      "Complete brand identity system",
      "20–30 social media posts",
      "6 motion graphics videos",
      "Marketing strategy document",
      "SEO setup (on-page + technical)",
      "Website copywriting",
      "UI/UX design system",
      "AI chatbot setup (WhatsApp / Website)",
      "60-day post-delivery support",
      "3 rounds of revisions",
    ],
    bestFor:
      "Established businesses, corporate rebrands, investor-facing startups.",
    timeline: "6–10 weeks",
    ctaHref: "/contact?package=premium",
  },
];

const retainers = [
  {
    planName: "Content Starter",
    price: { mode: "recurring", amount: "₦120,000", period: "/month" } as const,
    features: [
      "12 social media posts/month",
      "Caption writing & hashtag strategy",
      "1 short motion graphics video/month",
      "Monthly performance report",
    ],
    bestFor: "Businesses wanting consistent online presence.",
    ctaHref: "/contact?retainer=content-starter",
  },
  {
    planName: "Growth Partner",
    price: { mode: "recurring", amount: "₦250,000", period: "/month" } as const,
    isRecommended: true,
    features: [
      "20 social media posts/month",
      "3 short videos/reels/month",
      "Paid ads management (Meta + Google)",
      "SEO monitoring & updates",
      "AI content pipeline setup",
      "Weekly strategy call (30 min)",
      "Monthly analytics & recommendations report",
    ],
    bestFor: "Growing businesses ready to scale their online presence.",
    ctaHref: "/contact?retainer=growth-partner",
  },
  {
    planName: "Agency Partner",
    price: { mode: "recurring", amount: "₦500,000", period: "/month" } as const,
    features: [
      "Full content production (30 posts/month)",
      "5 videos/month",
      "Multi-platform ad campaigns",
      "AI chatbot maintenance",
      "Full SEO management",
      "Bi-weekly strategy calls",
      "Dedicated account manager",
      "Priority turnaround on all requests",
    ],
    bestFor:
      "Established businesses, funded startups, companies preparing for scale.",
    ctaHref: "/contact?retainer=agency-partner",
  },
];

const paymentOptions = [
  {
    option: "50/50",
    how: "50% upfront to begin, 50% on final delivery — standard for most projects.",
  },
  {
    option: "3-Stage",
    how: "For projects above ₦500,000: 40% start / 30% midpoint / 30% delivery.",
  },
  {
    option: "Retainer",
    how: "Monthly billing, due on the 1st of each month.",
  },
];

// DRAFT answers, straight from 23-PAGE-pricing.md. The real site's FAQ answers
// were not captured — these are placeholders pending Daniel's actual wording
// (see 00-OVERVIEW.md open items, "FAQ answer copy on the Services and Pricing
// pages"). The FAQPage JSON-LD in app/pricing/page.tsx mirrors these.
const faqs: FaqItem[] = [
  {
    question: "Why is there a price range instead of a fixed price?",
    answer:
      "Every project's final cost depends on complexity, number of pages/deliverables, and revision rounds — the range reflects standard scope so you can budget accurately before we confirm an exact number.",
  },
  {
    question: "What happens if my project goes over scope?",
    answer:
      "We'll flag it before doing any extra work and agree on a fair additional cost together — no surprise invoices.",
  },
  {
    question: "Are revisions included?",
    answer:
      "Yes — every package includes 2–3 rounds of revisions depending on the tier, detailed above.",
  },
  {
    question: "Can I start with a small package and upgrade later?",
    answer:
      "Absolutely — many clients start with Starter and move to Business or a retainer as they grow.",
  },
  {
    question: "Do you offer discounts for NGOs or nonprofits?",
    answer:
      "Yes — reach out and we'll discuss a scope that fits your budget.",
  },
  {
    question: "What's the minimum project budget you'll take on?",
    answer:
      "Our Starter Package begins at ₦95,000 — for anything smaller, let's talk and we'll see what's possible.",
  },
];

export default function PricingPageContent() {
  const prefersReducedMotion = useReducedMotion();

  // Same scroll-reveal as the other sub-pages (05-ANIMATIONS-AND-INTERACTIONS.md
  // global pattern). Reduced-motion: render final state immediately, no
  // translate, no delay — matching the ProcessStep / ProjectCard / ProcessSection
  // fixes so nothing can freeze at opacity:0.
  const reveal = (delay = 0) =>
    prefersReducedMotion
      ? {
          initial: false as const,
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
            delay,
          },
        };

  return (
    <>
      {/* Page header — compact (eyebrow + H1 + intro + trust chips), not a full
          hero. On --black so the transparent nav-over-header stays legible,
          matching /about, /services and /portfolio. */}
      <section className="relative overflow-hidden bg-primary pb-space-9 pt-24 lg:pb-space-10 lg:pt-32">
        <GridOverlay />
        <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
          <Eyebrow theme="dark">{"// Transparent Pricing"}</Eyebrow>
          <h1 className="mt-space-4 max-w-4xl text-ds-hero font-heading text-primary-white">
            Honest Prices. No Hidden Fees. No Surprises.
          </h1>
          <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
            We publish our prices because we respect your time. Most agencies
            make you jump on a call just to tell you it&apos;s expensive. We
            don&apos;t do that. Here&apos;s exactly what things cost — and what
            you get for every naira.
          </p>
          <ul className="mt-space-6 flex flex-wrap items-center gap-x-space-5 gap-y-space-2">
            {trustChips.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-space-2 text-ds-small text-light-dark"
              >
                <Check className="h-4 w-4 flex-none text-dk-blue-1" />
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Complete Packages — tab pair + 3 cards + bespoke callout + fine print.
          On --black, matching the mockup's dark pricing block. */}
      <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...reveal()}
        >
          <Eyebrow theme="dark">{"// Complete Packages"}</Eyebrow>
          <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary-white">
            Three Packages. One Honest Price Range Each.
          </h2>

          {/* Tab pair — deliberately NOT the shared ModeToggle. ModeToggle
              swaps two in-place content panels via value/onChange; here the
              second tab is a cross-page link to /services (23-PAGE-pricing.md:
              the pricing page focuses on packages/retainers, not a third copy
              of the per-service price list, which /services already owns).
              Force-fitting ModeToggle would mean firing navigation from
              onChange and an "active" state that never lands on the second
              option — different interaction semantics. This keeps ModeToggle's
              pill shape without bending its contract. */}
          <div className="mt-space-6 -mx-space-4 overflow-x-auto px-space-4 md:mx-0 md:overflow-visible md:px-0">
            <div className="inline-flex rounded-radius-full bg-white/[0.08] p-space-1 text-ds-small font-semibold">
              <span
                aria-current="page"
                className="whitespace-nowrap rounded-radius-full bg-dk-blue-1 px-space-4 py-space-2 text-white md:px-space-5"
              >
                Complete Packages
              </span>
              <Link
                href="/services"
                className="group inline-flex items-center gap-space-2 whitespace-nowrap rounded-radius-full px-space-4 py-space-2 text-light-dark transition-colors duration-200 hover:text-primary-white md:px-space-5"
              >
                Individual Services
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="mt-space-8 grid gap-space-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.planName}
                className="h-full"
                {...reveal(index * 0.08)}
              >
                <PackageCard
                  planName={pkg.planName}
                  description={pkg.description}
                  features={pkg.features}
                  price={pkg.price}
                  priceNote={pkg.priceNote}
                  bestFor={pkg.bestFor}
                  timeline={pkg.timeline}
                  ctaLabel="Get Started"
                  ctaHref={pkg.ctaHref}
                  isRecommended={pkg.isRecommended}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* "Need Something Bespoke?" callout. text-link CTA (not a filled
              button) since filled --black secondary buttons disappear on the
              --black section — same choice as the /services dark sections. */}
          <div className="mt-space-6 flex flex-col gap-space-5 rounded-radius-lg border border-dashed border-white/[0.18] p-space-6 md:flex-row md:items-center">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-radius-lg bg-white/[0.06]">
              <Puzzle className="h-6 w-6 text-dk-blue-1" />
            </div>
            <div className="flex-1 space-y-space-3">
              <h3 className="text-ds-h4 text-primary-white">
                Need Something Bespoke?
              </h3>
              <p className="text-ds-body text-light-dark">
                Every business is different. If none of these fit your goals,
                we&apos;ll build you a custom scope from scratch. No obligation.
                No hard sell.
              </p>
              <Button
                variant="text-link"
                href="/contact?type=custom"
                className="text-dk-blue-1"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>

          <p className="mt-space-5 max-w-3xl text-ds-micro text-light-dark">
            Final pricing depends on project complexity, number of revisions, and
            timeline. Ranges shown represent standard scope. We&apos;ll confirm
            your exact price before any work begins.
          </p>
        </motion.div>
      </section>

      {/* Monthly Retainers — its own clearly-labelled section, not behind the
          tab pair (23-PAGE-pricing.md). On --off-white to separate it from the
          packages block; the dark PackageCards get the soft lift shadow that
          01-DESIGN-SYSTEM.md specifies for pricing cards on an off-white bg. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...reveal()}
        >
          <Eyebrow theme="light">{"// Monthly Retainers"}</Eyebrow>
          <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
              Grow Consistently. Pay Monthly.
            </h2>
            <p className="max-w-md text-ds-body text-light-dark">
              For businesses that want reliable, ongoing results without managing
              it themselves.
            </p>
          </div>

          <div className="mt-space-8 grid gap-space-6 lg:grid-cols-3">
            {retainers.map((retainer, index) => (
              <motion.div
                key={retainer.planName}
                className="h-full"
                {...reveal(index * 0.08)}
              >
                <PackageCard
                  planName={retainer.planName}
                  features={retainer.features}
                  price={retainer.price}
                  bestFor={retainer.bestFor}
                  ctaLabel="Get Started"
                  ctaHref={retainer.ctaHref}
                  isRecommended={retainer.isRecommended}
                  className="h-full shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                />
              </motion.div>
            ))}
          </div>

          <p className="mt-space-6 text-ds-small text-light-dark">
            All retainer packages are billed monthly, cancel anytime after 3
            months. Minimum initial term: 3 months.
          </p>
        </motion.div>
      </section>

      {/* Payment Flexibility — a simple label/value list, not a card grid
          (23-PAGE-pricing.md). Collapses to stacked label-over-value on mobile. */}
      <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...reveal()}
        >
          <Eyebrow theme="dark">{"// Payment Flexibility"}</Eyebrow>
          <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary-white">
            Flexible Payment — So Cash Flow Never Slows Your Growth.
          </h2>

          <dl className="mt-space-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {paymentOptions.map((row) => (
              <div
                key={row.option}
                className="grid gap-space-1 py-space-5 md:grid-cols-[200px_1fr] md:gap-space-6"
              >
                <dt className="text-ds-h4 text-primary-white">{row.option}</dt>
                <dd className="text-ds-body text-light-dark">{row.how}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-space-6 flex items-start gap-space-3">
            <Globe className="mt-1 h-4 w-4 flex-none text-dk-blue-1" />
            <p className="max-w-2xl text-ds-small text-light-dark">
              <span className="font-semibold text-primary-white">
                International clients:
              </span>{" "}
              We accept payment via Wise (TransferWise), PayPal, and direct bank
              transfer in USD, GBP, EUR, and NGN.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Pricing FAQ — shared Numbered Accordion, variant="faq". Sticky left
          headline column + right accordion, same layout as the /services FAQ.
          Answers are DRAFTS pending Daniel's confirmation. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto grid max-w-[1280px] gap-space-8 px-space-4 md:px-space-6 lg:grid-cols-[360px_1fr]"
          {...reveal()}
        >
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow theme="light">{"// Pricing FAQ"}</Eyebrow>
            <h2 className="mt-space-3 text-ds-h2 font-heading text-primary">
              Questions About Pricing
            </h2>
            <p className="mt-space-4 max-w-sm text-ds-body text-light-dark">
              The answers below are drafts — final wording is being confirmed
              before launch.
            </p>
            <div className="mt-space-5">
              <Button
                variant="text-link"
                href="/contact"
                className="text-dk-blue-1"
              >
                Have a different question?
              </Button>
            </div>
          </div>

          <NumberedAccordion variant="faq" theme="light" items={faqs} />
        </motion.div>
      </section>

      {/* CTA band — compact sign-off. Same pattern as the /about, /services and
          /portfolio CTA bands; the large recurring CTA lives in the global
          Footer directly below. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-9">
        <GridOverlay />
        <WatermarkGlyph
          size={380}
          className="pointer-events-none absolute -left-24 bottom-0 hidden lg:block"
        />

        <motion.div
          className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-start gap-space-5 px-space-4 md:px-space-6"
          {...reveal()}
        >
          <Eyebrow theme="light">{"// Let's Talk"}</Eyebrow>
          <h2 className="max-w-2xl text-ds-h3 font-heading text-primary">
            Not Sure Which Package Is Right? Let&apos;s Talk — It&apos;s Free.
          </h2>
          <p className="max-w-xl text-ds-body text-light-dark">
            Book a 30-minute discovery call. We&apos;ll understand your goals,
            recommend the right solution, and give you an exact quote — no
            obligation, no pressure.
          </p>
          <div className="flex flex-col gap-space-4 sm:flex-row">
            <Button variant="primary" href="/contact">
              Book Free Call
            </Button>
            <Button
              variant="secondary"
              href="https://wa.me/2349030909624?text=Hello!%20I%27d%20like%20to%20discuss%20a%20project."
            >
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
