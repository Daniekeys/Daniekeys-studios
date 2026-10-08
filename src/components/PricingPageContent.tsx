"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Globe, Puzzle, Smartphone } from "lucide-react";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import ModeToggle from "@/components/shared/ModeToggle";
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

// The three pricing groups. Each hash is an anchor other pages link to
// (e.g. /pricing#monthly-plans), which also selects that tab.
const tabs = [
  { label: "Website & App Packages", hash: "packages" },
  { label: "Monthly Video & Content Plans", hash: "monthly-plans" },
  { label: "One-off Video Projects", hash: "video-projects" },
];

// All figures, deliverables, "Best for" lines and timelines are verbatim from
// src/specs/daniekeys-website-update-services-pricing.md section 6. Naira
// figures are the exact spec numbers — never rounded, never converted to USD.
const packages = [
  {
    planName: "Starter Package",
    description: "Best for getting your brand online fast.",
    price: { mode: "range", low: "₦95,000", high: "₦180,000" } as const,
    priceNote: "One-time · Final price depends on scope",
    features: [
      "Logo refinement",
      "Landing page consultation",
      "6 social media post designs",
      "1 motion graphics video (30s)",
      "Caption writing for posts",
      "Light content strategy guide",
    ],
    bestFor: "New businesses, side projects, personal brands starting out.",
    timeline: "1 to 2 weeks",
    ctaHref: "/contact?package=starter",
  },
  {
    planName: "Business Package",
    description: "A complete online presence that drives real results.",
    price: { mode: "range", low: "₦250,000", high: "₦650,000" } as const,
    priceNote: "One-time · Final price depends on scope",
    isRecommended: true,
    features: [
      "Custom landing page website",
      "Starter brand kit (logo, colours, fonts)",
      "10 to 15 social media post designs",
      "3 to 5 motion graphics videos",
      "Social media profile optimisation",
      "30-day content calendar",
      "Hashtag and SEO research",
      "2 rounds of revisions",
      "30-day post-delivery support",
    ],
    bestFor: "Established small businesses, funded startups, growing brands.",
    timeline: "3 to 4 weeks",
    ctaHref: "/contact?package=business",
  },
  {
    planName: "Premium Package",
    description: "Full-scale transformation for serious growth.",
    price: { mode: "range", low: "₦700,000", high: "₦3,000,000" } as const,
    priceNote: "One-time · Final price depends on scope",
    features: [
      "Full custom website (5 to 7 pages)",
      "E-commerce or booking integration (if needed)",
      "UI/UX design system",
      "Complete brand identity system",
      "Animated brand kit (logo animation, lower thirds)",
      "20 to 30 social media posts",
      "6 motion graphics videos",
      "Website copywriting",
      "SEO setup (on-page + technical)",
      "Marketing strategy document",
      "60-day post-delivery support",
      "3 rounds of revisions",
    ],
    bestFor:
      "Established businesses, corporate rebrands, investor-facing startups.",
    timeline: "6 to 10 weeks",
    ctaHref: "/contact?package=premium",
  },
];

// Dashed callouts under the package cards. text-link CTAs (not filled
// buttons) since filled --black secondary buttons disappear on the --black
// section — same choice as the /services dark sections.
const callouts = [
  {
    icon: Smartphone,
    title: "Building a Web App or Mobile App?",
    copy: "Platforms, marketplaces, booking systems and mobile apps are scoped individually. Book a free scoping call and we'll send a clear quote and timeline.",
    ctaLabel: "Book a Scoping Call",
    ctaHref: "/contact?service=web-app",
  },
  {
    icon: Puzzle,
    title: "Need Something Bespoke?",
    copy: "Every business is different. If none of these fit your goals, we'll build you a custom scope from scratch. No obligation. No hard sell.",
    ctaLabel: "Get Custom Quote",
    ctaHref: "/contact?type=custom",
  },
];

const monthlyPlans = [
  {
    planName: "Lite",
    price: { mode: "recurring", amount: "₦500,000", period: "/month" } as const,
    features: [
      "4 videos a month",
      "Story-led videos from your photos and footage",
      "Every video in 9:16 and 16:9",
      "Captions, music and sound design",
    ],
    bestFor: "Businesses that want a steady video presence.",
    ctaHref: "/contact?plan=lite",
  },
  {
    planName: "Pro",
    price: { mode: "recurring", amount: "₦800,000", period: "/month" } as const,
    compareAtPrice: "₦1,000,000",
    priceNote: "Introductory rate for your first 3 months",
    isRecommended: true,
    features: [
      "8 videos a month: 1 signature storyline film, 3 event or update recaps, 2 quote videos, 2 stats or teaser videos",
      "Monthly content calendar",
      "72-hour turnaround after events",
      "Monthly performance report",
    ],
    bestFor: "Brands with regular events, launches or news to share.",
    ctaHref: "/contact?plan=pro",
  },
  {
    planName: "Premium",
    price: {
      mode: "recurring",
      amount: "₦1,200,000",
      period: "/month",
    } as const,
    features: [
      "20 pieces of content a month: the full Pro video mix plus 12 graphics (flyers, carousels, speaker cards, quote cards)",
      "We schedule and post for you",
      "Monthly strategy call",
      "Free animated brand kit (logo animation, lower thirds) in month one",
    ],
    bestFor: "Companies that want their social media fully handled.",
    ctaHref: "/contact?plan=premium",
  },
];

const videoProjects = [
  {
    project:
      "Single video (motion ad, UGC ad, explainer, story video or event reel)",
    price: "from ₦150,000",
  },
  {
    project:
      "Animated brand kit (logo animation, lower thirds, brand motion elements)",
    price: "₦400,000",
  },
  {
    project:
      "Signature story or impact film (60 to 90 seconds, fully scripted and voiced)",
    price: "₦950,000",
  },
];

const paymentOptions = [
  {
    option: "50/50",
    how: "50% upfront to begin, 50% on final delivery, standard for most projects.",
  },
  {
    option: "3-Stage",
    how: "For projects above ₦500,000, 40% at start, 30% at midpoint, 30% on delivery.",
  },
  {
    option: "Monthly Plans",
    how: "Billed monthly in advance, 3-month minimum term.",
  },
];

// DRAFT answers, straight from 23-PAGE-pricing.md, with the NGO, minimum
// budget and plan-switching answers from the October 2026 update brief. The
// real site's FAQ answers were not captured — the rest are placeholders
// pending Daniel's actual wording (see 00-OVERVIEW.md open items, "FAQ answer
// copy on the Services and Pricing pages"). The FAQPage JSON-LD in
// app/pricing/page.tsx mirrors these.
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
      "Yes. We have dedicated NGO rates for monthly content and storytelling. Reach out and we'll share them.",
  },
  {
    question: "What's the minimum project budget you'll take on?",
    answer:
      "Our Starter Package begins at ₦95,000 and single videos start at ₦150,000. For anything smaller, let's talk.",
  },
  {
    question: "Can I switch between monthly plans?",
    answer:
      "Yes. You can move up or down a plan at the end of any month after your first 3 months.",
  },
];

export default function PricingPageContent() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const tabRowRef = useRef<HTMLDivElement>(null);

  // A URL hash matching a tab's anchor selects that tab. The anchors themselves
  // sit just above the tab row, so the browser handles the scrolling.
  useEffect(() => {
    const selectFromHash = () => {
      const match = tabs.find((tab) => tab.hash === window.location.hash.slice(1));
      if (match) setActiveTab(match.label);
    };

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  // On narrow screens the tab row scrolls sideways; bring the selected tab
  // into view (it can start off-screen when a hash selects it).
  useEffect(() => {
    const row = tabRowRef.current;
    const selected = row?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (row && selected) row.scrollLeft = selected.offsetLeft;
  }, [activeTab]);

  // Keeps the URL shareable without the page jumping on every tab click.
  const selectTab = (label: string) => {
    setActiveTab(label);
    const hash = tabs.find((tab) => tab.label === label)?.hash;
    window.history.replaceState(null, "", `#${hash}`);
  };

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

      {/* The three pricing groups behind one tab row: Website & App Packages
          (default), Monthly Video & Content Plans, One-off Video Projects.
          On --black, matching the mockup's dark pricing block. */}
      <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...reveal()}
        >
          {tabs.map((tab) => (
            <span key={tab.hash} id={tab.hash} className="block scroll-mt-28" />
          ))}

          {/* Scrolls sideways on narrow screens, where the three labels don't
              fit on one row. */}
          <div
            ref={tabRowRef}
            className="-mx-space-4 overflow-x-auto px-space-4 md:mx-0 md:overflow-visible md:px-0"
          >
            <ModeToggle
              theme="dark"
              options={tabs.map((tab) => tab.label)}
              value={activeTab}
              onChange={selectTab}
            />
          </div>

          {activeTab === tabs[0].label && (
            <div role="tabpanel" className="mt-space-7">
              <Eyebrow theme="dark">{"// Complete Packages"}</Eyebrow>
              <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary-white">
                Three Packages. One Honest Price Range Each.
              </h2>

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

              {callouts.map((callout) => (
                <div
                  key={callout.title}
                  className="mt-space-6 flex flex-col gap-space-5 rounded-radius-lg border border-dashed border-white/[0.18] p-space-6 md:flex-row md:items-center"
                >
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-radius-lg bg-white/[0.06]">
                    <callout.icon className="h-6 w-6 text-dk-blue-1" />
                  </div>
                  <div className="flex-1 space-y-space-3">
                    <h3 className="text-ds-h4 text-primary-white">
                      {callout.title}
                    </h3>
                    <p className="text-ds-body text-light-dark">
                      {callout.copy}
                    </p>
                    <Button
                      variant="text-link"
                      href={callout.ctaHref}
                      className="text-dk-blue-1"
                    >
                      {callout.ctaLabel}
                    </Button>
                  </div>
                </div>
              ))}

              <p className="mt-space-5 max-w-3xl text-ds-micro text-light-dark">
                Final pricing depends on project complexity, number of revisions,
                and timeline. Ranges shown represent standard scope. We&apos;ll
                confirm your exact price before any work begins.
              </p>
            </div>
          )}

          {activeTab === tabs[1].label && (
            <div role="tabpanel" className="mt-space-7">
              <Eyebrow theme="dark">{"// Monthly Plans"}</Eyebrow>
              <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
                <h2 className="max-w-2xl text-ds-h2 font-heading text-primary-white">
                  Show Up Every Week. Pay Monthly.
                </h2>
                <p className="max-w-md text-ds-body text-light-dark">
                  You send us your photos, footage and updates. We send a script
                  within 48 hours, then ready-to-post videos and graphics, so
                  your audience sees your work every week.
                </p>
              </div>

              <div className="mt-space-8 grid gap-space-6 lg:grid-cols-3">
                {monthlyPlans.map((plan, index) => (
                  <motion.div
                    key={plan.planName}
                    className="h-full"
                    {...reveal(index * 0.08)}
                  >
                    <PackageCard
                      planName={plan.planName}
                      features={plan.features}
                      price={plan.price}
                      compareAtPrice={plan.compareAtPrice}
                      priceNote={plan.priceNote}
                      bestFor={plan.bestFor}
                      ctaLabel="Get Started"
                      ctaHref={plan.ctaHref}
                      isRecommended={plan.isRecommended}
                      className="h-full"
                    />
                  </motion.div>
                ))}
              </div>

              <p className="mt-space-6 text-ds-small text-light-dark">
                Plans are billed monthly with a 3-month minimum term. NGOs and
                nonprofits can ask about our NGO rates.
              </p>
            </div>
          )}

          {activeTab === tabs[2].label && (
            <div role="tabpanel" className="mt-space-7">
              <Eyebrow theme="dark">{"// Video Projects"}</Eyebrow>
              <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary-white">
                One-off Video Projects
              </h2>

              <dl className="mt-space-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {videoProjects.map((row) => (
                  <div
                    key={row.project}
                    className="grid gap-space-1 py-space-5 md:grid-cols-[1fr_200px] md:items-center md:gap-space-6"
                  >
                    <dt className="text-ds-body text-primary-white">
                      {row.project}
                    </dt>
                    <dd className="text-ds-h4 text-primary-white md:text-right">
                      {row.price}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-space-6 max-w-2xl text-ds-small text-light-dark">
                Every video is delivered in 9:16 and 16:9. Your first video is
                usually ready within 7 working days of a confirmed brief.
              </p>

              <Button
                variant="primary"
                href="/contact?service=video-project"
                className="mt-space-6"
              >
                Start a Video Project
              </Button>
            </div>
          )}
        </motion.div>
      </section>

      {/* Payment Flexibility — a simple label/value list, not a card grid
          (23-PAGE-pricing.md). Collapses to stacked label-over-value on mobile.
          On --off-white to break up the dark pricing block above. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...reveal()}
        >
          <Eyebrow theme="light">{"// Payment Flexibility"}</Eyebrow>
          <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary">
            Flexible Payment — So Cash Flow Never Slows Your Growth.
          </h2>

          <dl className="mt-space-8 divide-y divide-primary/[0.08] border-y border-primary/[0.08]">
            {paymentOptions.map((row) => (
              <div
                key={row.option}
                className="grid gap-space-1 py-space-5 md:grid-cols-[200px_1fr] md:gap-space-6"
              >
                <dt className="text-ds-h4 text-primary">{row.option}</dt>
                <dd className="text-ds-body text-light-dark">{row.how}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-space-6 flex items-start gap-space-3">
            <Globe className="mt-1 h-4 w-4 flex-none text-dk-blue-1" />
            <p className="max-w-2xl text-ds-small text-light-dark">
              <span className="font-semibold text-primary">
                International clients:
              </span>{" "}
              We accept payment via Wise, PayPal and direct bank transfer in
              USD, GBP, EUR and NGN.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Pricing FAQ — shared Numbered Accordion, variant="faq". Sticky left
          headline column + right accordion, same layout (and --black
          background) as the /services FAQ. Answers are DRAFTS pending Daniel's
          confirmation. */}
      <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto grid max-w-[1280px] gap-space-8 px-space-4 md:px-space-6 lg:grid-cols-[360px_1fr]"
          {...reveal()}
        >
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow theme="dark">{"// Pricing FAQ"}</Eyebrow>
            <h2 className="mt-space-3 text-ds-h2 font-heading text-primary-white">
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

          <NumberedAccordion variant="faq" theme="dark" items={faqs} />
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
