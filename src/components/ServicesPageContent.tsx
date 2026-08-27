"use client";

import { motion, useReducedMotion } from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import NumberedAccordion, {
  type FaqItem,
  type ServiceDetailItem,
} from "@/components/shared/NumberedAccordion";
import ProcessStep from "@/components/shared/ProcessStep";
import WatermarkGlyph from "@/components/shared/WatermarkGlyph";

// Scroll-reveal config. Under prefers-reduced-motion the reveal target stays
// (content must never be stranded — see the TestimonialCard defect in
// 00-OVERVIEW.md); only the entrance offset and duration are dropped so the
// content snaps straight to its final state. 05-ANIMATIONS-AND-INTERACTIONS.md §Reduced Motion.
const buildFadeUp = (reduced: boolean | null) => ({
  initial: reduced ? false : { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: reduced
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
});

// All 8 services, verbatim from 21-PAGE-services.md — deliverables, tags,
// "Best for" lines, and "Starts from" prices (Naira, exact spec figures, not
// rounded). NEW badge only on AI Digital Strategy (1) and AI Chatbots &
// Automation (5). First row opens by default (NumberedAccordion default).
const services: ServiceDetailItem[] = [
  {
    title: "AI Digital Strategy & Consulting",
    isNew: true,
    hook: "Your competitors are already adopting AI. We help you do it right.",
    description:
      "We help you do it right — with a clear roadmap, the right tools, and an implementation partner who actually understands your business.",
    tags: [],
    deliverables: [
      "AI readiness audit for your business",
      "Custom AI roadmap (3-month implementation plan)",
      "Tool recommendation & setup (chatbots, automation, content AI)",
      "Staff training on AI tools",
      "Monthly strategy review calls",
    ],
    bestFor: "SMEs, startups, and growing businesses ready to work smarter.",
    priceFrom: "₦350,000",
    ctaLabel: "Book a Strategy Session",
    ctaHref: "/contact?service=ai-strategy",
  },
  {
    title: "Brand Identity & Design",
    hook: "Your brand is the first thing people judge you by.",
    description:
      "We make sure that judgement works in your favour — every single time.",
    tags: ["New Business", "Rebranding", "Startup"],
    deliverables: [
      "Logo design (primary + variations)",
      "Brand colour palette & typography system",
      "Brand guidelines document (20+ pages)",
      "Social media kit (templates for 5 platforms)",
      "Business card & stationery design",
      "Flyer and poster design templates",
    ],
    bestFor: "New businesses, rebranding companies, startups seeking investment.",
    priceFrom: "₦120,000",
    ctaLabel: "Learn More & Get a Quote",
    ctaHref: "/contact?service=brand-identity",
  },
  {
    title: "Website & App Development",
    hook: "We build websites that look like they cost 10× more than they do.",
    description: "And perform like revenue machines from day one.",
    tags: ["Web Dev", "E-Commerce", "Mobile App"],
    deliverables: [
      "Custom business / portfolio / e-commerce website",
      "Mobile-first, speed-optimised development",
      "SEO foundations baked in from build",
      "CMS setup so you can update content yourself",
      "Contact forms, booking systems, payment integration",
      "30-day post-launch support",
    ],
    bestFor:
      "Businesses without a website, those with outdated sites, startups launching.",
    priceFrom: "₦180,000",
    ctaLabel: "Learn More & Get a Quote",
    ctaHref: "/contact?service=web-app",
  },
  {
    title: "Motion Graphics & Video Production",
    hook: "In a world of infinite scroll, motion is the only language that makes people stop.",
    description: "We create video content that earns views and drives action.",
    tags: ["Motion", "Video", "Reels", "Events"],
    deliverables: [
      "Brand intro / logo reveal animations",
      "Promotional and ad videos",
      "Explainer videos for products/services",
      "Social media reels (30s, 60s, 90s)",
      "Event highlight videos",
      "Community and NGO awareness films",
    ],
    bestFor:
      "Businesses launching products, brands building social presence, events.",
    priceFrom: "₦80,000 per video",
    ctaLabel: "Learn More & Get a Quote",
    ctaHref: "/contact?service=motion-video",
  },
  {
    title: "AI Chatbots & Business Automation",
    isNew: true,
    hook: "Imagine a team member who works 24/7 and never asks for a salary.",
    description: "That's what we build for you.",
    tags: ["E-Commerce", "Clinics", "Real Estate", "Restaurants"],
    deliverables: [
      "Website AI chat assistant (answers FAQs, qualifies leads)",
      "WhatsApp Business AI bot (handles enquiries, sends quotes)",
      "Instagram DM automation (auto-replies, story responses)",
      "Lead capture and CRM integration",
      "AI-powered email response systems",
    ],
    bestFor:
      "E-commerce, service businesses, clinics, restaurants, real estate.",
    priceFrom: "₦150,000 + ₦50,000/month maintenance",
    ctaLabel: "Learn More & Get a Quote",
    ctaHref: "/contact?service=ai-automation",
  },
  {
    title: "Digital Marketing & Social Media Management",
    hook: "Being online isn't enough. Being found is.",
    description:
      "By the right people, at the right time, saying the right thing — that's what drives growth.",
    tags: ["Meta Ads", "SEO", "Email", "Analytics"],
    deliverables: [
      "Social media content creation & scheduling",
      "Community management & engagement",
      "Paid social advertising (Meta, TikTok, LinkedIn)",
      "Google Ads management",
      "SEO (on-page, technical, content)",
      "Email marketing campaigns",
      "Monthly performance analytics report",
    ],
    bestFor:
      "Businesses wanting consistent online growth without doing it themselves.",
    priceFrom: "₦120,000/month (retainer)",
    ctaLabel: "Learn More & Get a Quote",
    ctaHref: "/contact?service=digital-marketing",
  },
  {
    title: "Rebranding",
    hook: "Your brand built you this far. Now it needs to take you further.",
    description: "Rebranding isn't admitting failure — it's strategic evolution.",
    tags: ["Brand Audit", "Identity", "Strategy", "Launch"],
    deliverables: [
      "Brand audit (current perception vs. desired positioning)",
      "Competitive landscape analysis",
      "New visual identity system",
      "Brand voice & messaging refresh",
      "Launch strategy & announcement assets",
      "Updated motion intro + social templates",
    ],
    bestFor: "Businesses that have grown but whose brand hasn't kept up.",
    priceFrom: "₦250,000",
    ctaLabel: "Learn More & Get a Quote",
    ctaHref: "/contact?service=rebranding",
  },
  {
    title: "Training & AI Upskilling",
    hook: "The biggest barrier to AI adoption isn't tools — it's knowledge.",
    description: "We fix that.",
    tags: ["Workshops", "Online", "Corporate", "AI"],
    deliverables: [
      "AI Tools for Business Owners (1-day workshop)",
      "Social Media Marketing Masterclass (2-day)",
      "Canva & Graphic Design for Non-Designers (online)",
      "Motion Graphics Fundamentals (4-week course)",
      "Corporate AI Upskilling (custom, for teams of 5+)",
    ],
    bestFor: "Entrepreneurs, marketing teams, young professionals, NGO staff.",
    priceFrom: "₦45,000 per person",
    ctaLabel: "Learn More & Get a Quote",
    ctaHref: "/contact?service=training",
  },
];

// Two-column feature, NOT part of the accordion (21-PAGE-services.md).
const spotlight = [
  {
    title: "Websites That Convert",
    copy: "Every website we build is mobile-first, SEO-optimised, and designed around one goal: turning visitors into customers.",
    tags: [
      "Custom Design",
      "Fast Loading",
      "SEO Ready",
      "CMS Integration",
      "E-Commerce",
    ],
    ctaLabel: "See Website Projects",
    ctaHref: "/portfolio?filter=web",
  },
  {
    title: "Apps That Perform",
    copy: "Mobile apps that bring your brand closer to your customers — built for Android and iOS, designed for real users.",
    tags: ["Android & iOS", "UI/UX Design", "ASO", "Cross-Platform"],
    ctaLabel: "Discuss Your App",
    ctaHref: "/contact",
  },
];

const addOns = [
  "Voice-over Integration",
  "Presentation Slides (Animated)",
  "Digital Flyers & Ad Banners",
  "SEO Content Writing",
  "E-Commerce Integration",
  "Landing Page Design",
  "WhatsApp Business Setup",
  "AI Content Calendar",
  "Photography Direction",
];

// Full 5-step process with per-step imagery (unlike the landing's condensed,
// image-less version). Descriptions use the fuller Services-page copy variants
// per 21-PAGE-services.md. Images are hot-linked Unsplash placeholders reused
// from IDs already validated in earlier batches — flagged for fresh per-step
// sourcing + localization before launch (see 00-OVERVIEW.md open items).
const processSteps = [
  {
    heading: "Free Discovery Call",
    description:
      "30 minutes. No pitch. Just listening. We learn exactly what your business needs.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  },
  {
    heading: "Proposal & Strategy",
    description:
      "A tailored scope, timeline, and pricing document — delivered within 48 hours of your call.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
  },
  {
    heading: "Creative Production",
    description:
      "Design, development, and content creation. Progress updates every 3 days.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
  },
  {
    heading: "Revisions & Refinement",
    description:
      "Two full rounds of revisions included. We don't submit final work until you love it.",
    image:
      "https://images.unsplash.com/photo-1717994818194-5760d533cab6?auto=format&fit=crop&w=600&q=80",
  },
  {
    heading: "Launch & 30-Day Support",
    description:
      "Go live with confidence. We monitor, support, and optimise for 30 days post-delivery.",
    image:
      "https://images.unsplash.com/photo-1635360381874-edd74cbd57f3?auto=format&fit=crop&w=600&q=80",
  },
];

// DRAFT answers, straight from 21-PAGE-services.md. The real site's FAQ answers
// were not captured — these are placeholders pending Daniel's actual wording
// (see 00-OVERVIEW.md open items). Same treatment as the About founder-content
// placeholders. The FAQPage JSON-LD in app/services/page.tsx mirrors these.
const faqs: FaqItem[] = [
  {
    question: "Do you work with businesses outside Nigeria?",
    answer:
      "Yes — we work with clients across Africa and internationally. We accept payment via Wise, PayPal, and direct bank transfer in USD, GBP, EUR, and NGN.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take 1–10 weeks depending on scope — a Starter package is 1–2 weeks, a full Premium transformation is 6–10 weeks.",
  },
  {
    question: "What if I don't like the first design concepts?",
    answer:
      "Every project includes two full rounds of revisions. We don't submit final work until you're happy with it.",
  },
  {
    question: "Can I pay in instalments?",
    answer:
      "Yes — most projects use a 50% upfront / 50% on delivery split. Larger projects above ₦500,000 can use a 3-stage payment plan.",
  },
  {
    question: "Do you offer monthly retainers?",
    answer:
      "Yes — see our Retainer plans on the Pricing page for ongoing content, marketing, and AI automation support.",
  },
  {
    question: "What is an AI-powered agency?",
    answer:
      "It means AI isn't a buzzword we mention — it's built into how we deliver: from AI content pipelines to chatbot automation, we use AI to work faster and smarter for you.",
  },
];

export default function ServicesPageContent() {
  const fadeUp = buildFadeUp(useReducedMotion());

  return (
    <>
      {/* Page header — compact (eyebrow + H1 + one-liner + stat strip), not a
          full hero. On --black so the transparent nav-over-header stays
          legible, matching the landing Hero and the /about header. */}
      <section className="relative overflow-hidden bg-primary pb-space-9 pt-24 lg:pb-space-10 lg:pt-32">
        <GridOverlay />
        <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
          <Eyebrow theme="dark">{"// What We Offer"}</Eyebrow>
          <h1 className="mt-space-4 max-w-4xl text-ds-hero font-heading text-primary-white">
            Every Service We Offer Is Designed to Grow Your Business.
          </h1>
          <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
            We don&apos;t sell services. We solve problems. Whether you need a
            brand that commands attention, a website that converts, or AI systems
            that run while you sleep — we have the team, the tools, and the track
            record to deliver.
          </p>
          <p className="mt-space-6 text-ds-small text-light-dark">
            50+ Projects · 8 Service Areas · AI-Powered · Pan-African Reach
          </p>
        </div>
      </section>

      {/* Core Services — all 8 rows in the shared Numbered Accordion,
          variant="service-detail". First row open by default. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...fadeUp}
        >
          <Eyebrow theme="light">{"// Core Services"}</Eyebrow>
          <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary">
            Eight Service Areas. One Standard: Work That Grows Your Business.
          </h2>

          <div className="mt-space-8">
            <NumberedAccordion
              variant="service-detail"
              theme="light"
              items={services}
            />
          </div>
        </motion.div>
      </section>

      {/* Digital Development Spotlight — two-column feature, not an accordion.
          On --black to break the run of light sections. */}
      <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...fadeUp}
        >
          <Eyebrow theme="dark">{"// Digital Development"}</Eyebrow>
          <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary-white">
            Your Business Deserves a Website That Actually Works.
          </h2>

          <div className="mt-space-8 grid gap-space-5 lg:grid-cols-2">
            {spotlight.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-space-5 rounded-radius-lg border border-white/[0.08] p-space-6"
              >
                <h3 className="text-ds-h3 font-heading text-primary-white">
                  {item.title}
                </h3>
                <p className="text-ds-body text-light-dark">{item.copy}</p>
                <div className="flex flex-wrap gap-space-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-radius-sm bg-white/[0.08] px-space-3 py-space-1 text-ds-micro uppercase tracking-wide text-primary-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button
                    variant="text-link"
                    href={item.ctaHref}
                    className="text-dk-blue-1"
                  >
                    {item.ctaLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Optional Add-Ons — simple chip list, no accordion. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...fadeUp}
        >
          <Eyebrow theme="light">{"// Optional Add-Ons"}</Eyebrow>
          <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary">
            Need Something Extra? We&apos;ve Got You.
          </h2>

          <div className="mt-space-7 flex flex-wrap gap-space-3">
            {addOns.map((addon) => (
              <span
                key={addon}
                className="rounded-radius-full border border-primary/[0.12] px-space-5 py-space-3 text-ds-small text-primary"
              >
                {addon}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process — full 5-step treatment with per-step imagery (shared
          ProcessStep component), unlike the landing's condensed version.
          id="process" is the target of the Footer's "Process" nav link. */}
      <section
        id="process"
        className="relative scroll-mt-24 overflow-hidden bg-off-white py-space-8 lg:py-space-10"
      >
        <GridOverlay />

        <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
          <motion.div {...fadeUp}>
            <Eyebrow theme="light">{"// How We Work"}</Eyebrow>
            <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
                From First Hello to Final Launch — Here&apos;s Exactly How We
                Work
              </h2>
              <p className="max-w-md text-ds-body text-light-dark">
                Five steps. No jargon. No radio silence.
              </p>
            </div>
          </motion.div>

          <div className="mt-space-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.heading}
                number={index + 1}
                image={step.image}
                heading={step.heading}
                description={step.description}
                isLast={index === processSteps.length - 1}
                theme="light"
              />
            ))}
          </div>

          <motion.div className="mt-space-6" {...fadeUp}>
            <Button variant="primary" href="/contact">
              Book a Free Discovery Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ — shared Numbered Accordion, variant="faq". Left headline column
          (sticky on desktop) + right accordion, matching the mockup's FAQ
          pattern. Answers are DRAFTS pending confirmation. */}
      <section className="relative overflow-hidden bg-primary py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto grid max-w-[1280px] gap-space-8 px-space-4 md:px-space-6 lg:grid-cols-[360px_1fr]"
          {...fadeUp}
        >
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow theme="dark">{"// FAQ"}</Eyebrow>
            <h2 className="mt-space-3 text-ds-h2 font-heading text-primary-white">
              Common Questions, Honest Answers.
            </h2>
            <p className="mt-space-4 max-w-sm text-ds-body text-light-dark">
              Everything you need to know before we get started. Answers below
              are drafts — final wording is being confirmed before launch.
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

      {/* CTA band — compact sign-off routing to both /contact and /pricing.
          The large recurring CTA lives in the global Footer directly below. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-9">
        <GridOverlay />
        <WatermarkGlyph
          size={380}
          className="pointer-events-none absolute -left-24 bottom-0 hidden lg:block"
        />

        <motion.div
          className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-start gap-space-5 px-space-4 md:px-space-6"
          {...fadeUp}
        >
          <Eyebrow theme="light">{"// Let's Talk"}</Eyebrow>
          <h2 className="max-w-2xl text-ds-h3 font-heading text-primary">
            Not Sure Which Service You Need? Let&apos;s Figure It Out Together.
          </h2>
          <p className="max-w-xl text-ds-body text-light-dark">
            Book a free 30-minute discovery call. We&apos;ll ask the right
            questions, understand your business, and tell you honestly what will
            move the needle.
          </p>
          <div className="flex flex-col gap-space-4 sm:flex-row">
            <Button variant="primary" href="/contact">
              Book Free Discovery Call
            </Button>
            <Button variant="secondary" href="/pricing">
              See Pricing
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
