"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Puzzle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const starterFeatures = [
  "Brand touch-up (logo refinement)",
  "6 social media post designs",
  "1 motion graphics video (30s)",
  "Basic page optimisation",
  "Caption writing for posts",
  "Light content strategy guide",
  "Landing page consultation (advisory only)",
];

const businessFeatures = [
  "Landing page website (custom design)",
  "10–15 social media post designs",
  "3–5 motion graphics videos",
  "Starter brand kit (logo, colours, fonts)",
  "Social media optimisation (all platforms)",
  "30-day content calendar",
  "Hashtag & SEO research",
  "2 rounds of revisions",
  "30-day post-delivery support",
];

const premiumFeatures = [
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
];

const contentStarterFeatures = [
  "12 social media posts/month",
  "Caption writing & hashtag strategy",
  "1 short motion graphics video/month",
  "Monthly performance report",
];

const growthPartnerFeatures = [
  "20 social media posts/month",
  "3 short videos / reels/month",
  "Paid ads management (Meta + Google)",
  "SEO monitoring & updates",
  "AI content pipeline setup",
  "Weekly strategy call (30 min)",
  "Monthly analytics & recommendations report",
];

const agencyPartnerFeatures = [
  "Full content production (30 posts/month)",
  "5 videos/month",
  "Multi-platform ad campaigns",
  "AI chatbot maintenance",
  "Full SEO management",
  "Bi-weekly strategy calls",
  "Dedicated account manager",
  "Priority turnaround on all requests",
];

const individualServices = [
  { service: "Logo Design", price: "₦45,000", timeline: "3–5 days" },
  { service: "Full Brand Identity System", price: "₦120,000", timeline: "2–3 weeks" },
  { service: "Website (Landing Page)", price: "₦80,000", timeline: "1–2 weeks" },
  { service: "Website (Full — 5 pages)", price: "₦250,000", timeline: "4–6 weeks" },
  { service: "E-commerce Website", price: "₦350,000", timeline: "5–8 weeks" },
  { service: "Motion Graphics Video (30s)", price: "₦45,000", timeline: "5–7 days" },
  { service: "Motion Graphics Video (60–90s)", price: "₦80,000", timeline: "7–10 days" },
  { service: "Explainer Video", price: "₦100,000", timeline: "1–2 weeks" },
  { service: "Social Media Post Designs (10)", price: "₦40,000", timeline: "3–5 days" },
  { service: "Social Media Management (monthly)", price: "₦120,000/mo", timeline: "Ongoing" },
  { service: "Digital Marketing (monthly)", price: "₦150,000/mo", timeline: "Ongoing" },
  { service: "Rebranding Package", price: "₦250,000+", timeline: "4–6 weeks" },
  { service: "AI Chatbot Setup", price: "₦150,000", timeline: "2–4 weeks" },
  { service: "AI Strategy Consultation", price: "₦50,000/session", timeline: "1 day" },
  { service: "Corporate AI Training", price: "₦200,000+", timeline: "Custom" },
  { service: "App Development (mobile)", price: "₦500,000+", timeline: "8–12 weeks" },
];

const paymentOptions = [
  {
    option: "50/50",
    how: "50% upfront to begin, 50% on final delivery — standard for most projects",
  },
  {
    option: "3-Stage",
    how: "For projects above ₦500,000 — 40% start / 30% midpoint / 30% delivery",
  },
  {
    option: "Retainer",
    how: "Monthly billing, due on the 1st of each month",
  },
];

const faqs = [
  {
    q: "Why is there a price range instead of a fixed price?",
    a: "Because every project is different. A logo for a solo coach and a logo for a 50-person company have very different requirements. Ranges let you know the ballpark — your exact quote is confirmed before we start, with full itemisation.",
  },
  {
    q: "What happens if my project goes over scope?",
    a: "We agree on scope before we begin. If you request additions beyond the agreed brief, we'll send a change request with the cost — no surprises, no invoice shock.",
  },
  {
    q: "Are revisions included?",
    a: "Yes. Starter includes 2 rounds. Business includes 2 rounds. Premium includes 3 rounds. Retainer clients have unlimited minor revisions on monthly deliverables.",
  },
  {
    q: "Can I start with a small package and upgrade later?",
    a: "Absolutely — and many of our best long-term clients started with the Starter Package. All previous work is considered when upgrading so we build on it, not restart.",
  },
  {
    q: "Do you offer discounts for NGOs or nonprofits?",
    a: "Yes — we offer 15% discounts for registered NGOs and community organisations. Mention this when you contact us.",
  },
  {
    q: "What's the minimum project budget you'll take on?",
    a: "Our minimum project value is ₦45,000 (single logo design). For new clients, we recommend the Starter Package at ₦95,000+ to get meaningful results.",
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"packages" | "individual">(
    "packages"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── SECTION 2: PAGE HERO ── */}
      <section className="bg-[#111111] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-[#818181]">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-accent-blue"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#9DBAFF]">Pricing</li>
            </ol>
          </nav>

          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-[#2B6BFF] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#9DBAFF]">
              Transparent Pricing
            </span>
          </div>

          <motion.h1
            className="mb-6 text-[40px] font-extrabold leading-tight text-[#F9F9F9] md:text-[64px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Honest Prices.
            <br />
            No Hidden Fees.
            <br />
            <span className="text-[#2B6BFF]">No Surprises.</span>
          </motion.h1>

          <motion.p
            className="mb-10 max-w-[600px] text-[18px] leading-relaxed text-[#818181]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We publish our prices because we respect your time. Most agencies
            make you jump on a call just to tell you it&apos;s expensive. We
            don&apos;t do that. Here&apos;s exactly what things cost — and what
            you get for every naira.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#818181]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              "No hidden fees",
              "Transparent deliverables",
              "Flexible payment plans",
              "Free first consultation",
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#444]">•</span>}
                <span className="text-[#9DBAFF]">✓</span> {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 & 4: TOGGLE + PACKAGES / INDIVIDUAL ── */}
      <section className="bg-[#F9F9F9] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          {/* Toggle */}
          <div className="mb-16 flex justify-center">
            <div className="flex rounded-full bg-[#E0E0E0] p-1">
              <button
                onClick={() => setActiveTab("packages")}
                aria-pressed={activeTab === "packages"}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === "packages"
                    ? "bg-[#111] text-white shadow"
                    : "bg-transparent text-[#666]"
                }`}
              >
                Complete Packages
              </button>
              <button
                onClick={() => setActiveTab("individual")}
                aria-pressed={activeTab === "individual"}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === "individual"
                    ? "bg-[#111] text-white shadow"
                    : "bg-transparent text-[#666]"
                }`}
              >
                Individual Services
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "packages" ? (
              <motion.div
                key="packages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="sr-only">Complete Packages</h2>

                {/* 3 package cards */}
                <div className="mb-6 grid gap-6 lg:grid-cols-3 lg:items-start">
                  {/* Starter */}
                  <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8">
                    <div className="mb-6">
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#818181]">
                        Starter
                      </p>
                      <h3 className="mb-2 text-[22px] font-semibold text-[#111]">
                        Starter Package
                      </h3>
                      <p className="text-sm text-[#818181]">
                        Best for getting your brand online fast.
                      </p>
                    </div>
                    <div className="mb-6">
                      <div className="text-[36px] font-extrabold leading-none text-[#111]">
                        ₦95,000 – ₦180,000
                      </div>
                      <p className="mt-1 text-[13px] text-[#818181]">
                        One-time · Final price depends on scope
                      </p>
                    </div>
                    <hr className="mb-6 border-[#F0F0F0]" />
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#818181]">
                      What&apos;s included:
                    </p>
                    <ul className="mb-8 space-y-3">
                      {starterFeatures.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm text-[#444]"
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2B6BFF]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <hr className="mb-6 border-[#F0F0F0]" />
                    <p className="mb-1 text-sm text-[#818181]">
                      <span className="font-semibold text-[#111]">
                        Best for:
                      </span>{" "}
                      New businesses, side projects, personal brands starting
                      out.
                    </p>
                    <p className="mb-6 text-sm text-[#818181]">
                      <span className="font-semibold text-[#111]">
                        Timeline:
                      </span>{" "}
                      1–2 weeks
                    </p>
                    <Link
                      href="/contact?package=starter"
                      className="block w-full rounded-lg bg-[#111] py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#2B6BFF]"
                    >
                      Get Started →
                    </Link>
                  </div>

                  {/* Business — Featured */}
                  <div className="relative rounded-2xl border-2 border-[#2B6BFF] bg-[#111] p-8 shadow-2xl lg:scale-[1.03]">
                    <div className="absolute -top-4 right-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2B6BFF] px-4 py-1.5 text-xs font-bold text-white">
                        ⭐ Most Popular
                      </span>
                    </div>
                    <div className="mb-6">
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#9DBAFF]">
                        Business
                      </p>
                      <h3 className="mb-2 text-[22px] font-semibold text-white">
                        Business Package
                      </h3>
                      <p className="text-sm text-[#9DBAFF]">
                        Complete digital package that drives real results.
                      </p>
                    </div>
                    <div className="mb-6">
                      <div className="text-[36px] font-extrabold leading-none text-[#2B6BFF]">
                        ₦250,000 – ₦650,000
                      </div>
                      <p className="mt-1 text-[13px] text-[#9DBAFF]">
                        One-time · Final price depends on scope
                      </p>
                    </div>
                    <hr className="mb-6 border-[#222]" />
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#9DBAFF]">
                      What&apos;s included:
                    </p>
                    <ul className="mb-8 space-y-3">
                      {businessFeatures.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm text-[#9DBAFF]"
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2B6BFF]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <hr className="mb-6 border-[#222]" />
                    <p className="mb-1 text-sm text-[#9DBAFF]">
                      <span className="font-semibold text-white">
                        Best for:
                      </span>{" "}
                      Established small businesses, funded startups, growing
                      brands.
                    </p>
                    <p className="mb-6 text-sm text-[#9DBAFF]">
                      <span className="font-semibold text-white">
                        Timeline:
                      </span>{" "}
                      3–4 weeks
                    </p>
                    <Link
                      href="/contact?package=business"
                      className="block w-full rounded-lg bg-[#2B6BFF] py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#5F8EFB]"
                    >
                      Get Started →
                    </Link>
                  </div>

                  {/* Premium */}
                  <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8">
                    <div className="mb-6">
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#818181]">
                        Premium
                      </p>
                      <h3 className="mb-2 text-[22px] font-semibold text-[#111]">
                        Premium Package
                      </h3>
                      <p className="text-sm text-[#818181]">
                        Full-scale transformation for serious growth.
                      </p>
                    </div>
                    <div className="mb-6">
                      <div className="text-[36px] font-extrabold leading-none text-[#111]">
                        ₦700,000 – ₦3,000,000
                      </div>
                      <p className="mt-1 text-[13px] text-[#818181]">
                        One-time · Final price depends on scope
                      </p>
                    </div>
                    <hr className="mb-6 border-[#F0F0F0]" />
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#818181]">
                      What&apos;s included:
                    </p>
                    <ul className="mb-8 space-y-3">
                      {premiumFeatures.map((f) => (
                        <li
                          key={f}
                          className={`flex items-start gap-3 text-sm ${
                            f.includes("AI chatbot")
                              ? "font-medium text-[#2B6BFF]"
                              : "text-[#444]"
                          }`}
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2B6BFF]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <hr className="mb-6 border-[#F0F0F0]" />
                    <p className="mb-1 text-sm text-[#818181]">
                      <span className="font-semibold text-[#111]">
                        Best for:
                      </span>{" "}
                      Established businesses, corporate rebrands,
                      investor-facing startups.
                    </p>
                    <p className="mb-6 text-sm text-[#818181]">
                      <span className="font-semibold text-[#111]">
                        Timeline:
                      </span>{" "}
                      6–10 weeks
                    </p>
                    <Link
                      href="/contact?package=premium"
                      className="block w-full rounded-lg bg-[#111] py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#2B6BFF]"
                    >
                      Get Started →
                    </Link>
                  </div>
                </div>

                {/* Custom CTA card */}
                <div className="mb-8 rounded-2xl border border-dashed border-[#C0C0C0] bg-[#F0F0F0] p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                        <Puzzle className="h-7 w-7 text-[#2B6BFF]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-[22px] font-semibold text-[#111]">
                        Need Something Bespoke?
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-[#818181]">
                        Every business is different. If none of these fit your
                        goals, we&apos;ll build you a custom scope from scratch.
                        No obligation. No hard sell. Just an honest
                        conversation.
                      </p>
                      <Link
                        href="/contact?type=custom"
                        className="inline-block rounded-lg bg-[#2B6BFF] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#5F8EFB]"
                      >
                        Get Custom Quote →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Pricing note */}
                <div className="rounded-xl border-l-4 border-[#2B6BFF] bg-[#F5F5F5] p-4">
                  <p className="text-[13px] text-[#818181]">
                    💡 Final pricing depends on project complexity, number of
                    revisions, and timeline. Ranges shown represent standard
                    scope. We&apos;ll confirm your exact price before any work
                    begins.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="individual"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="sr-only">Individual Services</h2>

                {/* Desktop table */}
                <div className="mb-6 hidden overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white md:block">
                  <div className="grid grid-cols-3 bg-[#111] px-6 py-4 text-xs font-bold uppercase tracking-widest">
                    <span className="text-white">Service</span>
                    <span className="text-[#9DBAFF]">Starting From</span>
                    <span className="text-[#818181]">Timeline</span>
                  </div>
                  {individualServices.map((row, i) => (
                    <div
                      key={row.service}
                      className={`grid grid-cols-3 border-b border-[#F0F0F0] px-6 py-4 transition-colors last:border-0 hover:bg-[#F5F8FF] ${
                        i % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"
                      }`}
                    >
                      <span className="text-sm font-medium text-[#111]">
                        {row.service}
                      </span>
                      <span className="text-sm font-semibold text-[#2B6BFF]">
                        {row.price}
                      </span>
                      <span className="text-sm italic text-[#818181]">
                        {row.timeline}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mobile card list */}
                <div className="mb-6 space-y-3 md:hidden">
                  {individualServices.map((row) => (
                    <div
                      key={row.service}
                      className="rounded-xl border border-[#E5E5E5] bg-white p-4"
                    >
                      <p className="mb-1 text-sm font-semibold text-[#111]">
                        {row.service}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#2B6BFF]">
                          {row.price}
                        </span>
                        <span className="text-xs italic text-[#818181]">
                          {row.timeline}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[13px] text-[#818181]">
                  All prices are in Nigerian Naira (₦). International clients —
                  we accept USD, GBP, and EUR. Contact us for FX rates and
                  international payment options.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── SECTION 5: MONTHLY RETAINERS ── */}
      <section className="bg-[#111111] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-[#2B6BFF] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#9DBAFF]">
              Monthly Retainers
            </span>
            <h2 className="mb-4 text-[32px] font-bold text-[#F9F9F9] md:text-[48px]">
              Grow Consistently. Pay Monthly.
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-[#818181]">
              For businesses that want reliable, ongoing results without
              managing it themselves.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
            {/* Content Starter */}
            <div className="rounded-2xl border border-[#222] bg-[#1A1A1A] p-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#818181]">
                Content Starter
              </p>
              <div className="mb-6 text-[32px] font-extrabold leading-none text-white">
                ₦120,000{" "}
                <span className="text-base font-normal text-[#818181]">
                  / month
                </span>
              </div>
              <ul className="mb-6 space-y-3">
                {contentStarterFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-[#9DBAFF]"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-[#2B6BFF]">
                      →
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mb-6 text-sm text-[#818181]">
                Best for: Businesses wanting consistent online presence
              </p>
              <Link
                href="/contact?retainer=content-starter"
                className="block w-full rounded-lg border border-[#2B6BFF] py-3 text-center text-sm font-semibold text-[#9DBAFF] transition-colors hover:bg-[#2B6BFF] hover:text-white"
              >
                Get Started →
              </Link>
            </div>

            {/* Growth Partner — Featured */}
            <div className="relative rounded-2xl border-2 border-[#2B6BFF] bg-[#0D0D0D] p-8 shadow-2xl lg:scale-[1.03]">
              <div className="absolute -top-4 right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2B6BFF] px-4 py-1.5 text-xs font-bold text-white">
                  ⭐ Most Popular
                </span>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#9DBAFF]">
                Growth Partner
              </p>
              <div className="mb-6 text-[32px] font-extrabold leading-none text-white">
                ₦250,000{" "}
                <span className="text-base font-normal text-[#9DBAFF]">
                  / month
                </span>
              </div>
              <ul className="mb-6 space-y-3">
                {growthPartnerFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-[#9DBAFF]"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-[#2B6BFF]">
                      →
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mb-6 text-sm text-[#9DBAFF]">
                Best for: Growing businesses ready to scale their online
                presence
              </p>
              <Link
                href="/contact?retainer=growth-partner"
                className="block w-full rounded-lg bg-[#2B6BFF] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#5F8EFB]"
              >
                Get Started →
              </Link>
            </div>

            {/* Agency Partner */}
            <div className="rounded-2xl border border-[#222] bg-[#1A1A1A] p-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#818181]">
                Agency Partner
              </p>
              <div className="mb-6 text-[32px] font-extrabold leading-none text-white">
                ₦500,000{" "}
                <span className="text-base font-normal text-[#818181]">
                  / month
                </span>
              </div>
              <ul className="mb-6 space-y-3">
                {agencyPartnerFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-[#9DBAFF]"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-[#2B6BFF]">
                      →
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mb-6 text-sm text-[#818181]">
                Best for: Established businesses, funded startups, companies
                preparing for scale
              </p>
              <Link
                href="/contact?retainer=agency-partner"
                className="block w-full rounded-lg border border-[#2B6BFF] py-3 text-center text-sm font-semibold text-[#9DBAFF] transition-colors hover:bg-[#2B6BFF] hover:text-white"
              >
                Get Started →
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-[13px] text-[#818181]">
            All retainer packages are billed monthly, cancel anytime after 3
            months. Minimum initial term: 3 months.
          </p>
        </div>
      </section>

      {/* ── SECTION 6: PAYMENT PLANS ── */}
      <section className="bg-[#F9F9F9] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 text-center">
            <h2 className="text-[32px] font-bold text-[#111] md:text-[48px]">
              Flexible Payment — So Cash Flow Never Slows Your Growth
            </h2>
          </div>

          <div className="mb-8 overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white">
            <div className="grid grid-cols-2 bg-[#111] px-6 py-4 text-xs font-bold uppercase tracking-widest">
              <span className="text-white">Option</span>
              <span className="text-[#9DBAFF]">How it works</span>
            </div>
            {paymentOptions.map((row, i) => (
              <div
                key={row.option}
                className={`grid grid-cols-2 border-b border-[#E5E5E5] px-6 py-5 last:border-0 ${
                  i % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"
                }`}
              >
                <span className="text-sm font-semibold text-[#111]">
                  {row.option}
                </span>
                <span className="text-sm text-[#818181]">{row.how}</span>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-[#E5E5E5] bg-white p-5">
            <span className="flex-shrink-0 text-xl">🌍</span>
            <p className="text-[13px] text-[#818181]">
              <span className="font-semibold text-[#111]">
                International clients:
              </span>{" "}
              We accept payment via Wise (TransferWise), PayPal, and direct
              bank transfer in USD, GBP, EUR, and NGN.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ ── */}
      <section className="border-t border-[#E5E5E5] bg-[#F9F9F9] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-12 text-center text-[32px] font-bold text-[#111] md:text-[48px]">
            Questions About Pricing
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-[#E5E5E5] bg-white"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="pr-4 text-sm font-semibold text-[#111]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[#818181] transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-[#818181]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CTA ── */}
      <section className="bg-[#2B6BFF] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="mb-6 text-[32px] font-extrabold text-white md:text-[48px]">
            Not Sure Which Package Is Right?
            <br />
            Let&apos;s Talk — It&apos;s Free.
          </h2>
          <p className="mx-auto mb-10 max-w-[560px] text-lg text-white/80">
            Book a 30-minute discovery call. We&apos;ll understand your goals,
            recommend the right solution, and give you an exact quote — no
            obligation, no pressure.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 text-sm font-semibold text-[#2B6BFF] transition-colors hover:bg-[#F9F9F9]"
            >
              Book Free Call →
            </Link>
            <a
              href="https://wa.me/2349030909624?text=Hello!%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="inline-block rounded-lg border-2 border-white/60 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              WhatsApp Us →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
