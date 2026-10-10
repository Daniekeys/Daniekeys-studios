"use client";

import { motion, useReducedMotion } from "framer-motion";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";
import NumberedAccordion, {
  type FaqItem,
  type ServiceDetailItem,
} from "@/components/shared/NumberedAccordion";
import StackingImageScroll, {
  StackingImageScrollMobile,
  type StackingImageScrollItem,
} from "@/components/shared/StackingImageScroll";
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

// All 7 services, verbatim from
// src/specs/daniekeys-website-update-services-pricing.md section 5: deliverables,
// tags, "Best for" lines, and "Starts from" prices (Naira, exact spec figures,
// not rounded). First row opens by default (NumberedAccordion default). Each id
// is the row's anchor, used by the jump nav below and the footer.
const services: ServiceDetailItem[] = [
  {
    id: "motion-ads",
    title: "Motion Graphics & Animated Ads",
    badge: "Popular",
    hook: "With endless scrolling everywhere, motion is what makes people actually stop.",
    description:
      "We design animated ads and launch videos that grab attention and get people to act. They're built for both vertical and widescreen from day one.",
    tags: [],
    deliverables: [
      "Animated ads for Meta, TikTok and YouTube",
      "Product and app launch videos",
      "App promo videos built from your real UI",
      "Logo reveal and brand intro animations",
      "Event teasers and highlight reels",
      "Every video delivered in 9:16 and 16:9",
    ],
    bestFor:
      "Startups launching an app or product, brands running paid ads, businesses with events.",
    priceFrom: "₦150,000 per video",
    ctaLabel: "Get a Quote",
    ctaHref: "/contact?service=motion-ads",
  },
  {
    id: "ai-video",
    title: "AI Video: UGC Ads & Animation",
    badge: "New",
    hook: "Creator-style ads and animated characters that look real, without the shoot.",
    description:
      "We use AI to make UGC-style ads and original animated content that would normally need actors, a set and a whole animation team.",
    tags: [],
    deliverables: [
      "AI-generated UGC video ads for paid campaigns",
      "Product demo and testimonial-style ads",
      "Original animated brand characters",
      "Short animated series and episodes for social",
      "AI voiceover or your own recorded voice, cleaned and mixed",
      "Captions, music and sound design",
    ],
    bestFor:
      "E-commerce and consumer brands, fintech and crypto apps, distributors and FMCG brands running TikTok and Meta ads.",
    priceFrom: "₦150,000 per video",
    ctaLabel: "Get a Quote",
    ctaHref: "/contact?service=ai-video",
  },
  {
    id: "story-video",
    title: "Story & Explainer Videos",
    badge: "New",
    hook: "People forget features, but they remember stories.",
    description:
      "We turn your photos, footage and milestones into story-led videos, so people get what you do and why it matters.",
    tags: [],
    deliverables: [
      "Brand story films",
      "Founder and personal story videos",
      "Impact and year-in-review films (for companies and NGOs)",
      "Product and service explainers",
      "Event recap stories built from your photos",
      "Speaker quote and stats videos",
    ],
    bestFor:
      "Founders building a personal brand, NGOs speaking to funders, companies with events and milestones to show off.",
    priceFrom: "₦150,000 per video",
    priceNote: "Signature story films from ₦950,000",
    ctaLabel: "Get a Quote",
    ctaHref: "/contact?service=story-video",
  },
  {
    id: "web-app",
    title: "Website & App Development",
    hook: "We build websites that look like they cost 10× more than they do.",
    description: "And they work hard for your revenue from day one.",
    tags: ["Web Dev", "E-Commerce", "Web Apps", "Mobile Apps"],
    deliverables: [
      "Custom business, portfolio and e-commerce websites",
      "Web apps and platforms (booking, marketplaces, dashboards)",
      "Mobile apps for Android and iOS",
      "Mobile-first, speed-optimised builds",
      "SEO foundations baked in",
      "CMS setup so you can update content yourself",
      "Payment, booking and form integrations",
      "30-day post-launch support",
    ],
    bestFor:
      "Businesses without a website, companies with outdated sites, startups launching a product.",
    priceFrom: "₦500,000 for websites",
    priceNote:
      "Web apps and mobile apps are custom quoted after a free scoping call.",
    ctaLabel: "Get a Quote",
    ctaHref: "/contact?service=web-app",
  },
  {
    id: "brand-graphics",
    title: "Brand Identity & Graphics",
    hook: "Your brand is the first thing people judge you by.",
    description:
      "We make sure that judgement goes your way, every time.",
    tags: ["New Business", "Rebranding", "Graphics"],
    deliverables: [
      "Logo design (primary + variations)",
      "Colour palette and typography system",
      "Brand guidelines document",
      "Animated brand kit (logo animation, lower thirds)",
      "Social media templates",
      "Flyers, carousels, speaker cards and quote cards",
      "Rebrands for businesses that have outgrown their look",
    ],
    bestFor:
      "New businesses, growing brands that need a refresh, startups preparing to raise.",
    priceFrom: "₦120,000",
    priceNote: "Rebrands from ₦250,000, animated brand kit ₦400,000",
    ctaLabel: "Get a Quote",
    ctaHref: "/contact?service=brand-graphics",
  },
  {
    id: "social-media",
    title: "Social Media & Content Management",
    hook: "Being online isn't enough. You need to be seen every week.",
    description:
      "You send us your photos and updates. We turn them into a steady flow of videos and graphics, and we can post them for you too.",
    tags: [],
    deliverables: [
      "Monthly content calendar",
      "Story-led videos and graphics every month",
      "Scheduling and posting",
      "Monthly performance report",
      "Monthly strategy call (on higher plans)",
    ],
    bestFor:
      "Busy businesses and NGOs whose channels go quiet between events and launches.",
    priceFrom: "₦500,000/month",
    priceNote: "See Monthly Plans on the Pricing page. NGO rates available.",
    ctaLabel: "See Monthly Plans",
    ctaHref: "/pricing#monthly-plans",
  },
  {
    id: "training",
    title: "AI Creative Training",
    hook: "The tools aren't what stops people from using AI well. Not knowing how is.",
    description:
      "We train founders, executives and teams to create content with AI themselves.",
    tags: ["Workshops", "Corporate", "1-on-1", "AI Video"],
    deliverables: [
      "AI video creation for founders and executives (1-on-1 or small group)",
      "Corporate AI upskilling for teams of 5+",
      "Motion graphics and AI video fundamentals",
      "Custom workshops for organisations",
    ],
    bestFor:
      "Founders and C-suite who want to show up on video, marketing teams, organisations adopting AI.",
    priceFrom: "₦45,000 per person",
    priceNote: "Corporate and 1-on-1 sessions custom quoted",
    ctaLabel: "Get a Quote",
    ctaHref: "/contact?service=training",
  },
];

// In-page jump nav: each tab scrolls to (and opens) its accordion row.
const jumpNav = [
  { label: "Motion & Ads", id: "motion-ads" },
  { label: "AI Video", id: "ai-video" },
  { label: "Story & Explainers", id: "story-video" },
  { label: "Web & App Dev", id: "web-app" },
  { label: "Brand & Graphics", id: "brand-graphics" },
  { label: "Social Media", id: "social-media" },
  { label: "Training", id: "training" },
];

// Two-column feature, NOT part of the accordion (21-PAGE-services.md).
const spotlight = [
  {
    title: "Websites That Convert",
    copy: "Every website we build is mobile-first, SEO-optimised and designed around one goal, turning visitors into customers.",
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
    copy: "Mobile apps that bring your brand closer to your customers. We build for Android and iOS, with real users in mind.",
    tags: ["Android & iOS", "UI/UX Design", "ASO", "Cross-Platform"],
    ctaLabel: "Discuss Your App",
    ctaHref: "/contact",
  },
];

const addOns = [
  "Rush delivery (48 to 72 hours)",
  "Extra aspect ratio or cut-down versions",
  "Human voice-over artist",
  "Second language version (e.g. French, Yoruba, Hausa)",
  "Animated presentation slides",
  "Digital flyers and ad banners",
  "SEO content writing",
  "Landing page design",
  "Photography direction",
];

// Full 5-step process with per-step imagery (unlike the landing's condensed,
// image-less version). Descriptions use the fuller Services-page copy variants
// per 21-PAGE-services.md. Images are hot-linked Unsplash placeholders reused
// from IDs already validated in earlier batches — flagged for fresh per-step
// sourcing + localization before launch (see 00-OVERVIEW.md open items).
const processSteps: StackingImageScrollItem[] = [
  {
    title: "Free Discovery Call",
    description:
      "30 minutes, no pitch. We just listen and work out what your business really needs.",
    image: "process/discovery-call",
  },
  {
    title: "Proposal & Strategy",
    description:
      "A tailored scope, timeline and price, sent within 48 hours of your call.",
    image: "process/proposal-strategy",
  },
  {
    title: "Creative Production",
    description:
      "Design, development and content creation, with a progress update every 3 days.",
    image: "process/creative-production",
  },
  {
    title: "Revisions & Refinement",
    description:
      "Two full rounds of revisions are included, and we won't send final work until you love it.",
    image: "process/revisions-refinement",
  },
  {
    title: "Launch & 30-Day Support",
    description:
      "Go live with confidence. We monitor, support and tweak things for 30 days after delivery.",
    image: "process/launch-support",
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
      "Yes, we work with clients across Africa and internationally. You can pay through Wise, PayPal or direct bank transfer in USD, GBP, EUR or NGN.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take 1 to 10 weeks depending on scope. A Starter package is about 1 to 2 weeks, and a full Premium transformation is 6 to 10 weeks.",
  },
  {
    question: "What if I don't like the first design concepts?",
    answer:
      "Every project includes two full rounds of revisions, and we won't hand over final work until you're happy with it.",
  },
  {
    question: "Can I pay in instalments?",
    answer:
      "Yes. Most projects are split 50% upfront and 50% on delivery. For bigger projects above ₦500,000 we can do a 3-stage payment plan.",
  },
  {
    question: "Do you offer monthly retainers?",
    answer:
      "Yes. Our Monthly Video & Content Plans give you a set number of videos and graphics every month. Have a look at the Pricing page.",
  },
  {
    question: "What is an AI-powered studio?",
    answer:
      "It means AI is part of how we produce. We use it to make UGC ads, animation and motion content faster and cheaper than a traditional studio, while our team takes care of the story, the design and the final quality.",
  },
  {
    question: "How fast can you deliver a video?",
    answer:
      "Your first video is usually ready within 7 working days of a confirmed brief. If you need it sooner, rush delivery is available as an add-on.",
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
            Everything We Offer Is Built to Grow Your Business
          </h1>
          <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
            We don&apos;t just sell services, we solve problems. Whether you need a
            video that stops the scroll, a brand that gets noticed or a website
            that converts, we&apos;ve got the team, the tools and the track
            record to get it done.
          </p>
          <p className="mt-space-6 text-ds-small text-light-dark">
            50+ Projects · 7 Service Areas · AI-Powered · Pan-African Reach
          </p>
          <nav
            aria-label="Jump to a service"
            className="mt-space-6 flex flex-wrap gap-space-3"
          >
            {jumpNav.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="rounded-radius-full border border-dk-blue-3/40 bg-dk-blue-1/10 px-space-4 py-space-2 text-ds-small font-medium text-primary-white transition-colors duration-200 hover:bg-dk-blue-1/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dk-blue-1"
              >
                {tab.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Core Services — all 7 rows in the shared Numbered Accordion,
          variant="service-detail". First row open by default. */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6"
          {...fadeUp}
        >
          <Eyebrow theme="light">{"// Core Services"}</Eyebrow>
          <h2 className="mt-space-3 max-w-2xl text-ds-h2 font-heading text-primary">
            Seven Service Areas, One Standard: Work That Grows Your Business
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
            Your Business Deserves a Website That Actually Works
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
            Need Something Extra? We&apos;ve Got You
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

      {/* Process — Stacking Image Scroll (EFFECT 2): image 01 holds while
          02-05 progressively join as the user scrolls, unlike the landing's
          condensed version. id="process" is the target of the Footer's
          "Process" nav link. overflow-clip (not hidden) so the sticky frame
          inside StackingImageScroll can pin. */}
      <section
        id="process"
        className="relative scroll-mt-24 overflow-clip bg-off-white py-space-8 lg:py-space-10"
      >
        <GridOverlay />

        <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
          <motion.div {...fadeUp}>
            <Eyebrow theme="light">{"// How We Work"}</Eyebrow>
            <div className="mt-space-3 flex flex-col gap-space-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-2xl text-ds-h2 font-heading text-primary">
                From First Hello to Final Launch, Here&apos;s How We Work
              </h2>
              <p className="max-w-md text-ds-body text-light-dark">
                Five steps, no jargon and no radio silence.
              </p>
            </div>
          </motion.div>

          <StackingImageScroll items={processSteps} />
          <StackingImageScrollMobile items={processSteps} />

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
              Common Questions, Honest Answers
            </h2>
            <p className="mt-space-4 max-w-sm text-ds-body text-light-dark">
              Everything you need to know before we get started. These answers are
              drafts for now, and we&apos;re confirming the final wording before launch.
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
            Not Sure Which Service You Need? Let&apos;s Figure It Out Together
          </h2>
          <p className="max-w-xl text-ds-body text-light-dark">
            Book a free 30 minute discovery call. We&apos;ll ask the right
            questions, get to know your business and tell you honestly what will
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
