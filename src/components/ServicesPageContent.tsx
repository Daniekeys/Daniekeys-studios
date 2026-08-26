"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Palette,
  Globe,
  Film,
  Bot,
  BarChart3,
  RefreshCw,
  GraduationCap,
  Smartphone,
  ArrowRight,
  Plus,
} from "lucide-react";

const categories = [
  { label: "AI Strategy", id: "ai-strategy" },
  { label: "Brand & Identity", id: "brand-identity" },
  { label: "Web & App Dev", id: "web-and-app" },
  { label: "Motion & Video", id: "motion-video" },
  { label: "AI Automation", id: "ai-automation" },
  { label: "Digital Marketing", id: "digital-marketing" },
  { label: "Training", id: "training" },
];

const faqs = [
  {
    q: "Do you work with businesses outside Nigeria?",
    a: "Absolutely. We work with clients across Africa and internationally. Our entire process is remote-ready — strategy, design, revisions, and delivery all happen seamlessly online. We've delivered projects to clients in the UK, US, and across West Africa.",
  },
  {
    q: "How long does a typical project take?",
    a: "Brand identity: 2–3 weeks. Website: 3–5 weeks. Full rebrand + website: 6–8 weeks. Motion graphics: 1–2 weeks per video. AI automation setup: 2–4 weeks. Timelines are always confirmed in your proposal before we start.",
  },
  {
    q: "What if I don't like the first design concepts?",
    a: "Every project includes two rounds of revisions as standard. If we're still not aligned after that, we'll have an honest conversation about why — and find a solution. We've never delivered a project a client wasn't happy with.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Yes. We typically work on a 50% upfront, 50% on completion structure. For larger projects, we can discuss a 3-stage payment plan.",
  },
  {
    q: "Do you offer monthly retainers?",
    a: "Yes — digital marketing, social media management, AI maintenance, and content production are all available as monthly retainers. Most retainer clients start from ₦120,000/month. Contact us to discuss what a retainer looks like for your business.",
  },
  {
    q: "What is an AI-powered agency?",
    a: "An AI-powered agency uses artificial intelligence tools to deliver better, faster, and more scalable results. At Daniekeys Studios, our founder is an AI engineer. That means we use AI for content generation, strategy analysis, chatbot deployment, design assistance, and performance analytics — passing the time and cost savings directly to our clients.",
  },
];

const processSteps = [
  {
    step: "01",
    label: "Free Discovery Call",
    copy: "30 minutes. No pitch. Just listening. We learn exactly what your business needs.",
  },
  {
    step: "02",
    label: "Proposal & Strategy",
    copy: "A tailored scope, timeline, and pricing document — delivered within 48 hours of your call.",
  },
  {
    step: "03",
    label: "Creative Production",
    copy: "Design, development, and content creation. Progress updates every 3 days.",
  },
  {
    step: "04",
    label: "Revisions & Refinement",
    copy: "Two full rounds of revisions included. We don't submit final work until you love it.",
  },
  {
    step: "05",
    label: "Launch & 30-Day Support",
    copy: "Go live with confidence. We monitor, support, and optimise for 30 days post-delivery.",
  },
];

function ServiceDeliverables({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[14px] text-[#555]">
          <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#2B6BFF]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ServiceTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-[#F0F0F0] px-3 py-1 text-[12px] text-[#444]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ServicesPageContent() {
  const [activeCategory, setActiveCategory] = useState("");
  const [showCategoryNav, setShowCategoryNav] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowCategoryNav(heroBottom <= 83);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = categories.map((c) => c.id).concat(["web-and-app"]);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveCategory(id);
          });
        },
        { threshold: 0.25, rootMargin: "-83px 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 83 + 56;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F9F9F9]">

      {/* ── SECTION 3: STICKY CATEGORY NAV ─────────────── */}
      <div
        className={`fixed left-0 right-0 top-[83px] z-40 border-b border-[#2a2a2a] bg-[#1A1A1A] transition-all duration-300 ${
          showCategoryNav
            ? "opacity-100 translate-y-0"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1280px] overflow-x-auto">
          <div className="flex items-center gap-1 whitespace-nowrap px-6 py-3 md:px-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[#2B6BFF] text-white"
                    : "text-[#818181] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 2: PAGE HERO ────────────────────────── */}
      <section ref={heroRef} className="bg-[#111111] py-32 md:px-8">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2" aria-label="Breadcrumb">
            <Link
              href="/"
              className="text-[13px] text-[#818181] transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="text-[13px] text-[#818181]">›</span>
            <span className="text-[13px] text-white">Services</span>
          </nav>

          {/* Tag badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-[#2B6BFF] bg-[rgba(43,107,255,0.08)] px-4 py-1.5">
            <span className="text-[12px] font-medium uppercase tracking-wider text-[#9DBAFF]">
              WHAT WE OFFER
            </span>
          </div>

          {/* H1 */}
          <motion.h1
            className="mb-6 text-[44px] font-extrabold leading-[1.1] text-[#F9F9F9] lg:text-[72px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Every Service We Offer
            <br />
            Is Designed to Grow
            <br />
            <span className="text-[#2B6BFF]">Your Business.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="mb-8 max-w-[620px] text-[18px] leading-[1.7] text-[#818181]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We don&apos;t sell services. We solve problems. Whether you need a brand that
            commands attention, a website that converts, or AI systems that run while
            you sleep — we have the team, the tools, and the track record to deliver.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#818181]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>50+ Projects</span>
            <span className="text-[#444]">|</span>
            <span>8 Service Areas</span>
            <span className="text-[#444]">|</span>
            <span>AI-Powered</span>
            <span className="text-[#444]">|</span>
            <span>Pan-African Reach</span>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: CORE SERVICES GRID ───────────────── */}
      <section className="bg-[#F9F9F9] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          {/* Section label + rule */}
          <div className="mb-5 flex items-center gap-4">
            <h2 className="text-[12px] font-semibold uppercase tracking-widest text-[#818181]">
              CORE SERVICES
            </h2>
            <div className="h-px flex-1 bg-[#E5E5E5]" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* ── SERVICE 1: AI Digital Strategy — featured full-width ── */}
            <motion.div
              id="ai-strategy"
              className="scroll-mt-[140px] md:col-span-2 lg:col-span-3 rounded-2xl border border-[#222] border-l-[3px] border-l-[#2B6BFF] bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                <div className="flex-1">
                  {/* AI-Powered badge */}
                  <div className="mb-5 inline-flex items-center rounded-full border border-[#2B6BFF] bg-[rgba(43,107,255,0.1)] px-3 py-1">
                    <span className="text-[12px] font-semibold text-[#9DBAFF]">
                      AI-Powered
                    </span>
                  </div>

                  <Brain className="mb-5 h-12 w-12 text-[#2B6BFF]" aria-hidden="true" />

                  <h3 className="mb-3 text-[22px] font-bold text-[#F9F9F9]">
                    AI Digital Strategy & Consulting
                  </h3>
                  <div className="mb-5 h-px bg-[#222]" />

                  <p className="mb-6 text-[15px] leading-[1.7] text-[#818181]">
                    Your competitors are already adopting AI. We help you do it right — with a
                    clear roadmap, the right tools, and an implementation partner who actually
                    understands your business.
                  </p>

                  <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-[#818181]">
                    What&apos;s included:
                  </p>
                  <ul className="mb-6 space-y-2">
                    {[
                      "AI readiness audit for your business",
                      "Custom AI roadmap (3-month implementation plan)",
                      "Tool recommendation & setup (chatbots, automation, content AI)",
                      "Staff training on AI tools",
                      "Monthly strategy review calls",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[15px] text-[#818181]"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2B6BFF]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mb-1 text-[13px] text-[#818181]">
                    <span className="text-[#F9F9F9] font-medium">Best for:</span>{" "}
                    SMEs, startups, and growing businesses ready to work smarter.
                  </p>
                  <p className="mb-6 text-[13px] font-semibold text-[#2B6BFF]">
                    Starts from: ₦350,000
                  </p>

                  <Link
                    href="/contact?service=ai-strategy"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#2B6BFF] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#5F8EFB]"
                    aria-label="Book a strategy session for AI Digital Strategy"
                  >
                    Book a Strategy Session <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ── SERVICE 2: Brand Identity ── */}
            <motion.div
              id="brand-identity"
              className="scroll-mt-[140px] rounded-2xl border border-[#E8E8E8] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2B6BFF] hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <Palette className="mb-5 h-12 w-12 text-[#2B6BFF]" aria-hidden="true" />
              <h3 className="mb-3 text-[22px] font-bold text-[#111]">
                Brand Identity & Design
              </h3>
              <div className="mb-4 h-px bg-[#E8E8E8]" />
              <p className="mb-5 text-[15px] leading-[1.7] text-[#555]">
                Your brand is the first thing people judge you by. We make sure that
                judgement works in your favour — every single time.
              </p>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#818181]">
                Deliverables:
              </p>
              <div className="mb-5">
                <ServiceDeliverables
                  items={[
                    "Logo design (primary + variations)",
                    "Brand colour palette & typography system",
                    "Brand guidelines document (20+ pages)",
                    "Social media kit (templates for 5 platforms)",
                    "Business card & stationery design",
                    "Flyer and poster design templates",
                  ]}
                />
              </div>
              <div className="mb-4">
                <ServiceTags tags={["New Business", "Rebranding", "Startup"]} />
              </div>
              <p className="mb-1 text-[12px] text-[#555]">
                <span className="font-medium text-[#111]">Best for:</span>{" "}
                New businesses, rebranding companies, startups seeking investment.
              </p>
              <p className="mb-4 text-[13px] font-semibold text-[#2B6BFF]">
                Starts from: ₦120,000
              </p>
              <Link
                href="/contact?service=brand-identity"
                className="text-[14px] font-medium text-[#2B6BFF] hover:underline"
              >
                Learn More & Get a Quote →
              </Link>
            </motion.div>

            {/* ── SERVICE 3: Website & App Development ── */}
            <motion.div
              className="rounded-2xl border border-[#E8E8E8] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2B6BFF] hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Globe className="mb-5 h-12 w-12 text-[#2B6BFF]" aria-hidden="true" />
              <h3 className="mb-3 text-[22px] font-bold text-[#111]">
                Website & App Development
              </h3>
              <div className="mb-4 h-px bg-[#E8E8E8]" />
              <p className="mb-5 text-[15px] leading-[1.7] text-[#555]">
                We build websites that look like they cost 10× more than they do — and
                perform like revenue machines from day one.
              </p>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#818181]">
                Deliverables:
              </p>
              <div className="mb-5">
                <ServiceDeliverables
                  items={[
                    "Custom business / portfolio / e-commerce website",
                    "Mobile-first, speed-optimised development",
                    "SEO foundations baked in from build",
                    "CMS setup so you can update content yourself",
                    "Contact forms, booking systems, payment integration",
                    "30-day post-launch support",
                  ]}
                />
              </div>
              <div className="mb-4">
                <ServiceTags tags={["Web Dev", "E-Commerce", "Mobile App"]} />
              </div>
              <p className="mb-1 text-[12px] text-[#555]">
                <span className="font-medium text-[#111]">Best for:</span>{" "}
                Businesses without a website, those with outdated sites, startups launching.
              </p>
              <p className="mb-4 text-[13px] font-semibold text-[#2B6BFF]">
                Starts from: ₦180,000
              </p>
              <Link
                href="#web-and-app"
                onClick={(e) => { e.preventDefault(); scrollToSection("web-and-app"); }}
                className="text-[14px] font-medium text-[#2B6BFF] hover:underline"
              >
                Learn More & Get a Quote →
              </Link>
            </motion.div>

            {/* ── SERVICE 4: Motion Graphics & Video ── */}
            <motion.div
              id="motion-video"
              className="scroll-mt-[140px] rounded-2xl border border-[#E8E8E8] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2B6BFF] hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <Film className="mb-5 h-12 w-12 text-[#2B6BFF]" aria-hidden="true" />
              <h3 className="mb-3 text-[22px] font-bold text-[#111]">
                Motion Graphics & Video Production
              </h3>
              <div className="mb-4 h-px bg-[#E8E8E8]" />
              <p className="mb-5 text-[15px] leading-[1.7] text-[#555]">
                In a world of infinite scroll, motion is the only language that makes
                people stop. We create video content that earns views and drives action.
              </p>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#818181]">
                What we produce:
              </p>
              <div className="mb-5">
                <ServiceDeliverables
                  items={[
                    "Brand intro / logo reveal animations",
                    "Promotional and ad videos",
                    "Explainer videos for products / services",
                    "Social media reels (30s, 60s, 90s)",
                    "Event highlight videos",
                    "Community and NGO awareness films",
                  ]}
                />
              </div>
              <div className="mb-4">
                <ServiceTags tags={["Motion", "Video", "Reels", "Events"]} />
              </div>
              <p className="mb-1 text-[12px] text-[#555]">
                <span className="font-medium text-[#111]">Best for:</span>{" "}
                Businesses launching products, brands building social presence, events.
              </p>
              <p className="mb-4 text-[13px] font-semibold text-[#2B6BFF]">
                Starts from: ₦80,000 per video
              </p>
              <Link
                href="/contact?service=motion-video"
                className="text-[14px] font-medium text-[#2B6BFF] hover:underline"
              >
                Learn More & Get a Quote →
              </Link>
            </motion.div>

            {/* ── SERVICE 5: AI Chatbots & Automation — NEW highlight ── */}
            <motion.div
              id="ai-automation"
              className="scroll-mt-[140px] rounded-2xl border border-[#2B6BFF]/30 bg-gradient-to-br from-[#2B6BFF]/5 to-[#2B6BFF]/10 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#2B6BFF]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* NEW badge */}
              <div className="mb-4 inline-flex items-center rounded-full bg-[#2B6BFF] px-3 py-1">
                <span className="text-[11px] font-bold text-white">NEW</span>
              </div>
              <Bot className="mb-5 h-12 w-12 text-[#2B6BFF]" aria-hidden="true" />
              <h3 className="mb-3 text-[22px] font-bold text-[#111]">
                AI Chatbots & Business Automation
              </h3>
              <div className="mb-4 h-px bg-[#2B6BFF]/20" />
              <p className="mb-5 text-[15px] leading-[1.7] text-[#555]">
                Imagine having a team member who works 24/7, never sleeps, answers every
                customer question, and books appointments — without a salary. That&apos;s
                what we build for you.
              </p>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#818181]">
                What we deploy:
              </p>
              <div className="mb-5">
                <ServiceDeliverables
                  items={[
                    "Website AI chat assistant (answers FAQs, qualifies leads)",
                    "WhatsApp Business AI bot (handles enquiries, sends quotes)",
                    "Instagram DM automation (auto-replies, story responses)",
                    "Lead capture and CRM integration",
                    "AI-powered email response systems",
                  ]}
                />
              </div>
              <div className="mb-4">
                <ServiceTags tags={["E-Commerce", "Clinics", "Real Estate", "Restaurants"]} />
              </div>
              <p className="mb-1 text-[12px] text-[#555]">
                <span className="font-medium text-[#111]">Best for:</span>{" "}
                E-commerce, service businesses, clinics, restaurants, real estate.
              </p>
              <p className="mb-4 text-[13px] font-semibold text-[#2B6BFF]">
                Starts from: ₦150,000 + ₦50,000/month maintenance
              </p>
              <Link
                href="/contact?service=ai-automation"
                className="text-[14px] font-medium text-[#2B6BFF] hover:underline"
              >
                Learn More & Get a Quote →
              </Link>
            </motion.div>

            {/* ── SERVICE 6: Digital Marketing ── */}
            <motion.div
              id="digital-marketing"
              className="scroll-mt-[140px] rounded-2xl border border-[#E8E8E8] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2B6BFF] hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <BarChart3 className="mb-5 h-12 w-12 text-[#2B6BFF]" aria-hidden="true" />
              <h3 className="mb-3 text-[22px] font-bold text-[#111]">
                Digital Marketing & Social Media Management
              </h3>
              <div className="mb-4 h-px bg-[#E8E8E8]" />
              <p className="mb-5 text-[15px] leading-[1.7] text-[#555]">
                Being online isn&apos;t enough. Being found — by the right people, at the
                right time, saying the right thing — is what drives growth.
              </p>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#818181]">
                Services:
              </p>
              <div className="mb-5">
                <ServiceDeliverables
                  items={[
                    "Social media content creation & scheduling",
                    "Community management & engagement",
                    "Paid social advertising (Meta, TikTok, LinkedIn)",
                    "Google Ads management",
                    "SEO (on-page, technical, content)",
                    "Email marketing campaigns",
                    "Monthly performance analytics report",
                  ]}
                />
              </div>
              <div className="mb-4">
                <ServiceTags tags={["Meta Ads", "SEO", "Email", "Analytics"]} />
              </div>
              <p className="mb-1 text-[12px] text-[#555]">
                <span className="font-medium text-[#111]">Best for:</span>{" "}
                Businesses wanting consistent online growth without doing it themselves.
              </p>
              <p className="mb-4 text-[13px] font-semibold text-[#2B6BFF]">
                Starts from: ₦120,000/month (retainer)
              </p>
              <Link
                href="/contact?service=digital-marketing"
                className="text-[14px] font-medium text-[#2B6BFF] hover:underline"
              >
                Learn More & Get a Quote →
              </Link>
            </motion.div>

            {/* ── SERVICE 7: Rebranding ── */}
            <motion.div
              className="rounded-2xl border border-[#E8E8E8] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2B6BFF] hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <RefreshCw className="mb-5 h-12 w-12 text-[#2B6BFF]" aria-hidden="true" />
              <h3 className="mb-3 text-[22px] font-bold text-[#111]">Rebranding</h3>
              <div className="mb-4 h-px bg-[#E8E8E8]" />
              <p className="mb-5 text-[15px] leading-[1.7] text-[#555]">
                Your brand built you this far. Now it needs to take you further.
                Rebranding isn&apos;t admitting failure — it&apos;s strategic evolution.
              </p>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#818181]">
                What we do:
              </p>
              <div className="mb-5">
                <ServiceDeliverables
                  items={[
                    "Brand audit (current perception vs. desired positioning)",
                    "Competitive landscape analysis",
                    "New visual identity system",
                    "Brand voice & messaging refresh",
                    "Launch strategy & announcement assets",
                    "Updated motion intro + social templates",
                  ]}
                />
              </div>
              <div className="mb-4">
                <ServiceTags tags={["Brand Audit", "Identity", "Strategy", "Launch"]} />
              </div>
              <p className="mb-1 text-[12px] text-[#555]">
                <span className="font-medium text-[#111]">Best for:</span>{" "}
                Businesses that have grown but whose brand hasn&apos;t kept up.
              </p>
              <p className="mb-4 text-[13px] font-semibold text-[#2B6BFF]">
                Starts from: ₦250,000
              </p>
              <Link
                href="/contact?service=rebranding"
                className="text-[14px] font-medium text-[#2B6BFF] hover:underline"
              >
                Learn More & Get a Quote →
              </Link>
            </motion.div>

            {/* ── SERVICE 8: Training ── */}
            <motion.div
              id="training"
              className="scroll-mt-[140px] rounded-2xl border border-[#E8E8E8] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2B6BFF] hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <GraduationCap className="mb-5 h-12 w-12 text-[#2B6BFF]" aria-hidden="true" />
              <h3 className="mb-3 text-[22px] font-bold text-[#111]">
                Training & AI Upskilling
              </h3>
              <div className="mb-4 h-px bg-[#E8E8E8]" />
              <p className="mb-5 text-[15px] leading-[1.7] text-[#555]">
                The biggest barrier to AI adoption in African businesses isn&apos;t tools —
                it&apos;s knowledge. We fix that.
              </p>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#818181]">
                Programmes:
              </p>
              <div className="mb-5">
                <ServiceDeliverables
                  items={[
                    "AI Tools for Business Owners (1-day workshop)",
                    "Social Media Marketing Masterclass (2-day)",
                    "Canva & Graphic Design for Non-Designers (online)",
                    "Motion Graphics Fundamentals (4-week course)",
                    "Corporate AI Upskilling (custom, for teams of 5+)",
                  ]}
                />
              </div>
              <div className="mb-4">
                <ServiceTags tags={["Workshops", "Online", "Corporate", "AI"]} />
              </div>
              <p className="mb-1 text-[12px] text-[#555]">
                <span className="font-medium text-[#111]">Best for:</span>{" "}
                Entrepreneurs, marketing teams, young professionals, NGO staff.
              </p>
              <p className="mb-4 text-[13px] font-semibold text-[#2B6BFF]">
                Starts from: ₦45,000 per person
              </p>
              <Link
                href="/contact?service=training"
                className="text-[14px] font-medium text-[#2B6BFF] hover:underline"
              >
                Learn More & Get a Quote →
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: WEB & APP DEVELOPMENT ───────────── */}
      <section id="web-and-app" className="scroll-mt-[140px] bg-[#111111] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-5 flex items-center gap-4">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#818181]">
              DIGITAL DEVELOPMENT
            </span>
            <div className="h-px flex-1 bg-[#222]" />
          </div>

          <h2 className="mb-12 text-[32px] font-bold leading-[1.2] text-[#F9F9F9] lg:text-[48px]">
            Your Business Deserves
            <br />
            <span className="text-[#2B6BFF]">a Website That Actually Works.</span>
          </h2>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Card: Website Development */}
            <motion.div
              className="rounded-2xl border border-[#222] bg-[#1A1A1A] p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* CSS laptop frame */}
              <div className="mb-8 flex justify-center">
                <div className="w-full max-w-[260px]">
                  <div className="rounded-lg border-2 border-[#2a2a2a] bg-[#0D0D0D] p-2 shadow-2xl shadow-[#2B6BFF]/10">
                    <div className="mb-2 flex items-center gap-1.5 px-2">
                      <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                      <div className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                      <div className="h-2 w-2 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex h-28 items-center justify-center rounded bg-gradient-to-br from-[#0f1628] to-[#0d1829]">
                      <Globe className="h-10 w-10 text-[#2B6BFF] opacity-50" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mx-auto h-2 w-14 rounded-b bg-[#222]" />
                  <div className="mx-auto h-1 w-20 rounded bg-[#333]" />
                </div>
              </div>

              <h3 className="mb-3 text-[22px] font-bold text-[#F9F9F9]">
                Websites That Convert
              </h3>
              <p className="mb-6 text-[15px] leading-[1.7] text-[#818181]">
                Every website we build is mobile-first, SEO-optimised, and designed
                around one goal: turning visitors into customers.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {["Custom Design", "Fast Loading", "SEO Ready", "CMS Integration", "E-Commerce"].map(
                  (f) => (
                    <span
                      key={f}
                      className="rounded-full border border-[#2a2a2a] bg-[#111] px-3 py-1 text-[12px] text-[#818181]"
                    >
                      {f}
                    </span>
                  )
                )}
              </div>
              <Link
                href="/portfolio?filter=web"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2B6BFF] hover:underline"
              >
                See Website Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Card: App Development */}
            <motion.div
              className="rounded-2xl border border-[#222] bg-[#1A1A1A] p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* CSS phone frame */}
              <div className="mb-8 flex justify-center">
                <div className="w-[96px]">
                  <div className="rounded-[18px] border-2 border-[#2a2a2a] bg-[#0D0D0D] px-2 pb-3 pt-2 shadow-2xl shadow-[#2B6BFF]/10">
                    <div className="mx-auto mb-2 h-1 w-8 rounded bg-[#2a2a2a]" />
                    <div className="flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f1628] to-[#0d1829]">
                      <Smartphone className="h-10 w-10 text-[#2B6BFF] opacity-50" aria-hidden="true" />
                    </div>
                    <div className="mx-auto mt-2 h-3 w-3 rounded-full border border-[#2a2a2a]" />
                  </div>
                </div>
              </div>

              <h3 className="mb-3 text-[22px] font-bold text-[#F9F9F9]">
                Apps That Perform
              </h3>
              <p className="mb-6 text-[15px] leading-[1.7] text-[#818181]">
                Mobile apps that bring your brand closer to your customers — built for
                Android and iOS, designed for real users.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {["Android & iOS", "UI/UX Design", "ASO", "Cross-Platform"].map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-[#2a2a2a] bg-[#111] px-3 py-1 text-[12px] text-[#818181]"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2B6BFF] hover:underline"
              >
                Discuss Your App <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ADD-ON SERVICES ───────────────────── */}
      <section className="bg-[#F9F9F9] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-5 flex items-center gap-4">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#818181]">
              OPTIONAL ADD-ONS
            </span>
            <div className="h-px flex-1 bg-[#E5E5E5]" />
          </div>
          <h2 className="mb-8 text-[32px] font-bold text-[#111111] lg:text-[48px]">
            Need Something Extra?
            <br />
            <span className="text-[#2B6BFF]">We&apos;ve Got You.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Voice-over Integration",
              "Presentation Slides (Animated)",
              "Digital Flyers & Ad Banners",
              "SEO Content Writing",
              "E-Commerce Integration",
              "Landing Page Design",
              "WhatsApp Business Setup",
              "AI Content Calendar",
              "Photography Direction",
            ].map((addon) => (
              <span
                key={addon}
                className="cursor-default rounded-full border border-[#E0E0E0] bg-white px-5 py-2.5 text-[14px] text-[#333] transition-colors hover:border-[#2B6BFF] hover:text-[#2B6BFF]"
              >
                {addon}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PROCESS ───────────────────────────── */}
      <section id="process" className="scroll-mt-20 bg-[#0A0A0A] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16">
            <h2 className="text-[32px] font-bold leading-[1.2] text-[#F9F9F9] lg:text-[48px]">
              How We Work —
              <br />
              <span className="text-[#2B6BFF]">From First Hello to Final Launch</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connector line — desktop only, sits at centre of step dots */}
            <div
              className="absolute left-[calc(10%_-_12px)] right-[calc(10%_-_12px)] hidden border-t border-dashed border-[#333] lg:block"
              style={{ top: "calc(72px + 24px)" }}
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  className="flex flex-col lg:items-center lg:text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Large faded step number */}
                  <span
                    className="select-none text-[72px] font-extrabold leading-none text-[#2B6BFF]"
                    style={{ opacity: 0.18 }}
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>

                  {/* Small step dot — aligns with connector line */}
                  <div className="relative z-10 mt-4 mb-5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2B6BFF] bg-[#0A0A0A] lg:mx-auto">
                    <div className="h-2 w-2 rounded-full bg-[#2B6BFF]" />
                  </div>

                  <h3 className="mb-2 text-[15px] font-bold text-[#F9F9F9]">
                    {step.label}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-[#818181]">{step.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ ───────────────────────────────── */}
      <section className="bg-[#F9F9F9] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[360px_1fr]">
            {/* Left: headline */}
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <div className="mb-4 inline-flex items-center rounded-full border border-[#E5E5E5] bg-white px-3 py-1">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#818181]">
                  FAQ
                </span>
              </div>
              <h2 className="mb-4 text-[32px] font-bold text-[#111111] lg:text-[48px]">
                Common Questions,
                <br />
                <span className="text-[#2B6BFF]">Honest Answers.</span>
              </h2>
              <p className="mb-6 text-[15px] leading-[1.7] text-[#818181]">
                Everything you need to know before we get started.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#2B6BFF] hover:underline"
              >
                Have a different question? Ask us <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Right: accordion */}
            <div className="divide-y divide-[#E5E5E5]">
              {faqs.map((faq, i) => (
                <div key={i} className="py-5">
                  <button
                    className="flex w-full items-start justify-between gap-4 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span
                      className={`text-[16px] font-semibold leading-[1.5] transition-colors ${
                        openFaq === i ? "text-[#2B6BFF]" : "text-[#111]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`mt-0.5 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-5 w-5 text-[#818181]" aria-hidden="true" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-[15px] leading-[1.8] text-[#555]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CTA ───────────────────────────────── */}
      <section className="bg-[#2B6BFF] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-[32px] font-extrabold leading-[1.2] text-white lg:text-[48px]">
              Not Sure Which Service You Need?
              <br />
              Let&apos;s Figure It Out Together.
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[16px] leading-[1.7] text-white/80">
              Book a free 30-minute discovery call. We&apos;ll ask the right questions,
              understand your business, and tell you honestly what will move the needle.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-3.5 text-[15px] font-semibold text-[#2B6BFF] transition-colors hover:bg-[#F0F0F0]"
                aria-label="Book a free discovery call"
              >
                Book Free Discovery Call →
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border-2 border-white px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                aria-label="See our pricing"
              >
                See Pricing →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
