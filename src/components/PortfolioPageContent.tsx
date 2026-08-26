"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", name: "All" },
  { id: "web", name: "Web" },
  { id: "motion", name: "Motion" },
  { id: "marketing", name: "Marketing" },
  { id: "events", name: "Events" },
  { id: "ai", name: "AI" },
];

const featuredProjects = [
  {
    id: 1,
    title: "Afriment — Website Design & Development",
    client: "Afriment",
    year: "2024",
    tags: ["Web Design", "UI/UX"],
    description:
      "Full website design and development for Afriment's internship platform — clean UI, responsive layouts, and a seamless experience for both students and employers.",
    image: "/images/marquee-pictures/DK_Slide 12.png",
    results: [
      { label: "Design", value: "Custom UI/UX" },
      { label: "Responsive", value: "✓ Mobile-first" },
      { label: "Service", value: "Website Design & Development" },
    ],
    href: "https://www.afriment.com/",
  },
  {
    id: 2,
    title: "Candexa — Website Design",
    client: "Candexa",
    year: "2024",
    tags: ["Web Design", "UI/UX"],
    description:
      "A clean, modern website design for Candexa — structured for enterprise clients with clear messaging, strong visuals, and a seamless user journey.",
    image: "/images/samples/branding-b.png",
    results: [
      { label: "Design", value: "Clean, enterprise-ready UI" },
      { label: "Responsive", value: "✓ Fully responsive" },
      { label: "Service", value: "Website Design" },
    ],
    href: "https://www.candexa.ai/",
  },
  {
    id: 3,
    title: "My Lang Coach — Website Design",
    client: "My Lang Coach",
    year: "2024",
    tags: ["Web Design", "UI/UX"],
    description:
      "Website design for My Lang Coach's language learning platform — intuitive navigation, engaging layouts, and a design that converts visitors into learners.",
    image: "/images/samples/marketing-a.png",
    results: [
      { label: "Design", value: "Conversion-focused UI" },
      { label: "Responsive", value: "✓ Mobile-first" },
      { label: "Service", value: "Website Design" },
    ],
    href: "https://www.mylangcoach.com/",
  },
  {
    id: 4,
    title: "Buymejollof — Website Design",
    client: "Buymejollof",
    year: "2024",
    tags: ["Web Design", "UI/UX"],
    description:
      "Website design for Buymejollof — capturing the platform's energy and warmth through a visually engaging, easy-to-navigate experience.",
    image: "/images/samples/branding.jpg",
    results: [
      { label: "Design", value: "Brand-aligned UI" },
      { label: "Responsive", value: "✓ Fully responsive" },
      { label: "Service", value: "Website Design" },
    ],
    href: "https://buymejollof.com/",
  },
];

const portfolioItems = [
  {
    id: 1,
    title: "Website Design & Development",
    category: "web",
    client: "Afriment",
    year: "2024",
    image: "/images/marquee-pictures/DK_Slide 12.png",
    featured: true,
    tags: ["Web Design", "UI/UX"],
    href: "https://www.afriment.com/",
  },
  {
    id: 2,
    title: "Website Design",
    category: "web",
    client: "Candexa",
    year: "2024",
    image: "/images/samples/branding-b.png",
    featured: true,
    tags: ["Web Design", "UI/UX"],
    href: "https://www.candexa.ai/",
  },
  {
    id: 3,
    title: "Website Design",
    category: "web",
    client: "My Lang Coach",
    year: "2024",
    image: "/images/samples/marketing-a.png",
    featured: true,
    tags: ["Web Design", "UI/UX"],
    href: "https://www.mylangcoach.com/",
  },
  {
    id: 4,
    title: "Website Design",
    category: "web",
    client: "Buymejollof",
    year: "2024",
    image: "/images/samples/marketing-b.png",
    featured: true,
    tags: ["Web Design", "UI/UX"],
    href: "https://buymejollof.com/",
  },
  {
    id: 5,
    title: "Website Design",
    category: "web",
    client: "PhotoMaster Studios",
    year: "2024",
    image: "/images/samples/branding.jpg",
    featured: false,
    tags: ["Web Design", "UI/UX"],
    href: "https://www.photomasterstudios.com/",
  },
  {
    id: 6,
    title: "Website Design & Development",
    category: "web",
    client: "Nexus",
    year: "2024",
    image: "/images/samples/marketing-c.png",
    featured: false,
    tags: ["Web Design", "UI/UX"],
    href: "https://nexus-ihez.vercel.app/",
  },
  {
    id: 7,
    title: "Website Design & Development",
    category: "web",
    client: "Ghost AI",
    year: "2024",
    image: "/images/samples/marketing-d.png",
    featured: false,
    tags: ["Web Design", "UI/UX"],
    href: "https://ghost-ai-henna.vercel.app/",
  },
  {
    id: 8,
    title: "Website Design & Development",
    category: "web",
    client: "Flux AI",
    year: "2024",
    image: "/images/samples/marketing-e.png",
    featured: false,
    tags: ["Web Design", "UI/UX"],
    href: "https://fluxai-eosin.vercel.app/",
  },
  {
    id: 9,
    title: "Website Design",
    category: "web",
    client: "Sqod",
    year: "2024",
    image: "/images/samples/events.png",
    featured: false,
    tags: ["Web Design", "UI/UX"],
    href: "https://sqod-u.vercel.app/",
  },
  {
    id: 10,
    title: "Website Design",
    category: "web",
    client: "Daniekeys Studios",
    year: "2024",
    image: "/images/samples/events-b.jpg",
    featured: false,
    tags: ["Web Design", "UI/UX"],
    href: "https://www.daniekeysstudios.com/",
  },
  {
    id: 11,
    title: "Website Design",
    category: "web",
    client: "Lawploy",
    year: "2024",
    image: "/images/samples/event-c.jpg",
    featured: false,
    tags: ["Web Design", "UI/UX"],
    href: "https://lawploy.com/",
  },
];

const stats = [
  { number: "50+", label: "Projects" },
  { number: "30+", label: "Happy Clients" },
  { number: "4+", label: "Industries" },
  { number: "5", label: "Service Areas" },
];

const clientLogos = [
  { name: "Afriment", image: "/images/logos/AFRIMENT logo.jpg", initial: "A" },
  { name: "Candexa", image: "/images/logos/candexa-logo.png", initial: "C" },
  { name: "My Lang Coach", image: "/images/logos/my-lang-coach-logo.svg", initial: "M" },
  { name: "Buymejollof", image: null, initial: "B" },
];

// Fixed positions to avoid hydration mismatch
const particles = [
  { id: 0, size: 3, left: 5, top: 10 },
  { id: 1, size: 2, left: 12, top: 75 },
  { id: 2, size: 4, left: 20, top: 30 },
  { id: 3, size: 3, left: 28, top: 85 },
  { id: 4, size: 2, left: 35, top: 20 },
  { id: 5, size: 5, left: 42, top: 60 },
  { id: 6, size: 2, left: 50, top: 15 },
  { id: 7, size: 3, left: 58, top: 90 },
  { id: 8, size: 4, left: 65, top: 40 },
  { id: 9, size: 2, left: 72, top: 70 },
  { id: 10, size: 3, left: 80, top: 25 },
  { id: 11, size: 2, left: 88, top: 55 },
  { id: 12, size: 4, left: 95, top: 80 },
  { id: 13, size: 3, left: 8, top: 50 },
  { id: 14, size: 2, left: 17, top: 95 },
  { id: 15, size: 3, left: 45, top: 45 },
  { id: 16, size: 2, left: 62, top: 5 },
  { id: 17, size: 4, left: 75, top: 35 },
  { id: 18, size: 3, left: 90, top: 15 },
  { id: 19, size: 2, left: 32, top: 65 },
];

export default function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-primary text-white">
      {/* ── Section 2: Hero ── */}
      <section className="relative overflow-hidden py-32" style={{ background: "#111111" }}>
        {/* CSS-only particles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full bg-white"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
                opacity: 0.15,
                animation: `fadeIn ${3 + (p.id % 4)}s ease-in-out ${(p.id * 0.15) % 2}s infinite alternate`,
              }}
            />
          ))}
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#818181" }}>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                Portfolio
              </li>
            </ol>
          </nav>

          {/* Badge */}
          <div className="mb-6">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border"
              style={{
                color: "#9DBAFF",
                borderColor: "#2B6BFF",
                background: "rgba(43,107,255,0.08)",
              }}
            >
              Our Work
            </span>
          </div>

          {/* H1 */}
          <motion.h1
            className="font-extrabold leading-none mb-6"
            style={{ fontSize: "clamp(44px, 6vw, 72px)", color: "#F9F9F9" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Work That Speaks
            <br />
            <span style={{ color: "#2B6BFF" }}>Before We Do.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="text-lg mb-16 max-w-xl leading-relaxed"
            style={{ color: "#818181" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Real projects. Real clients. Measurable results. Browse our work
            across branding, web, motion, and AI.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t pt-10"
            style={{ borderColor: "#222" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p
                  className="font-extrabold leading-none mb-2"
                  style={{ fontSize: "48px", color: "#2B6BFF" }}
                >
                  {stat.number}
                </p>
                <p
                  className="font-medium uppercase tracking-wider"
                  style={{ fontSize: "13px", color: "#818181" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Featured Projects ── */}
      <section className="py-24" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="mb-16">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#9DBAFF" }}
            >
              Featured Work
            </p>
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#F9F9F9" }}
            >
              Our Most Impactful Projects
            </h2>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className={`flex flex-col rounded-3xl overflow-hidden ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
                style={{ background: "#111111" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image — 55% */}
                <div className="w-full lg:w-[55%] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} — Daniekeys Studios`}
                    width={800}
                    height={500}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    style={{ minHeight: "360px" }}
                  />
                </div>

                {/* Content — 45% */}
                <div className="w-full lg:w-[45%] p-10 flex flex-col justify-center">
                  {/* Year + tags */}
                  <div className="flex items-center flex-wrap gap-2 mb-6">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{
                        color: "#9DBAFF",
                        borderColor: "#2B6BFF",
                        background: "rgba(43,107,255,0.1)",
                      }}
                    >
                      {project.year}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ background: "#1A1A1A", color: "#9DBAFF" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="font-bold mb-4 leading-tight"
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      color: "#F9F9F9",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-base leading-relaxed mb-8"
                    style={{ color: "#818181" }}
                  >
                    {project.description}
                  </p>

                  {/* Results table */}
                  <div className="mb-8">
                    {project.results.map((result, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-3"
                        style={{
                          borderBottom:
                            i < project.results.length - 1
                              ? "1px solid #222"
                              : "none",
                          fontSize: "13px",
                        }}
                      >
                        <span style={{ color: "#818181" }}>{result.label}</span>
                        <span
                          className="font-medium text-right"
                          style={{ color: "#F9F9F9" }}
                        >
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 flex-wrap">
                    <span className="text-sm" style={{ color: "#818181" }}>
                      Client:{" "}
                      <span style={{ color: "#F9F9F9" }}>{project.client}</span>
                    </span>
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium flex items-center gap-1 hover:underline transition-all"
                      style={{ color: "#2B6BFF" }}
                      aria-label={`Visit ${project.client} website`}
                    >
                      Visit Website <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: All Projects Grid ── */}
      <section id="all-projects" className="py-24" style={{ background: "#F9F9F9" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#111111" }}
            >
              All Projects
            </h2>
          </div>

          {/* Filter tabs — sticky */}
          <div
            className="sticky top-20 z-20 py-4 mb-12"
            style={{ background: "#F9F9F9" }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-label={`Filter by ${cat.name}`}
                  aria-pressed={activeCategory === cat.id}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                  style={
                    activeCategory === cat.id
                      ? {
                          background: "#2B6BFF",
                          color: "#fff",
                          border: "1px solid #2B6BFF",
                        }
                      : {
                          background: "#111",
                          color: "#818181",
                          border: "1px solid #333",
                        }
                  }
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            {filteredItems.length === 0 ? (
              <motion.div
                key="empty"
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p style={{ color: "#818181" }}>
                  No projects in this category yet — check back soon.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                className="columns-1 md:columns-2 lg:columns-3"
                style={{ columnGap: "1.25rem" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {filteredItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-inside-avoid mb-5 block"
                    aria-label={`Visit ${item.client} website`}
                  >
                    <motion.div
                      className="rounded-2xl overflow-hidden group cursor-pointer"
                      style={{ background: "#fff", border: "1px solid #E5E5E5" }}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      {/* Image + hover overlay */}
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={item.image}
                          alt={`${item.title} — ${item.client}`}
                          width={500}
                          height={280}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                          loading="lazy"
                        />
                        {/* Overlay */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-5 gap-1"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(43,107,255,0.85), transparent)",
                          }}
                        >
                          <span className="text-white font-semibold text-sm text-center px-3">
                            {item.title}
                          </span>
                          <span className="text-white/80 text-xs flex items-center gap-1">
                            Visit Website <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                        {/* Featured badge */}
                        {item.featured && (
                          <div className="absolute top-3 right-3">
                            <span
                              className="text-white font-semibold px-2 py-1 rounded-full"
                              style={{ background: "#2B6BFF", fontSize: "10px" }}
                            >
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card text */}
                      <div className="p-5">
                        <p
                          className="uppercase tracking-wider mb-1"
                          style={{ fontSize: "11px", color: "#818181" }}
                        >
                          {item.category} • {item.year}
                        </p>
                        <h3
                          className="font-semibold mb-2"
                          style={{ fontSize: "18px", color: "#111111" }}
                        >
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span style={{ fontSize: "13px", color: "#818181" }}>
                            {item.client}
                          </span>
                          <span
                            className="text-xs font-medium flex items-center gap-1"
                            style={{ color: "#2B6BFF" }}
                            aria-hidden="true"
                          >
                            View <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Section 5: Why Our Work Stands Out ── */}
      <section className="py-24" style={{ background: "#111111" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2
              className="font-bold leading-tight"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#F9F9F9" }}
            >
              Not Just Beautiful.
              <br />
              <span style={{ color: "#2B6BFF" }}>Actually Effective.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Strategy-First */}
            <motion.div
              className="rounded-2xl p-8 border border-[#222] hover:border-accent-blue transition-colors duration-300"
              style={{ background: "#1A1A1A" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="28" width="8" height="8" rx="1" fill="#2B6BFF" />
                  <rect x="16" y="18" width="8" height="18" rx="1" fill="#2B6BFF" opacity="0.7" />
                  <rect x="28" y="8" width="8" height="28" rx="1" fill="#2B6BFF" opacity="0.5" />
                  <path d="M8 28L20 18L32 8" stroke="#2B6BFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3
                className="font-semibold text-xl mb-4"
                style={{ color: "#F9F9F9" }}
              >
                Strategy Before Aesthetics
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#818181" }}>
                We don't start with 'what looks good.' We start with 'what does
                this business need to achieve?' The visual comes last — the
                thinking comes first.
              </p>
            </motion.div>

            {/* Card 2: Results */}
            <motion.div
              className="rounded-2xl p-8 border border-[#222] hover:border-accent-blue transition-colors duration-300"
              style={{ background: "#1A1A1A" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 32L14 20L20 26L28 14L34 22"
                    stroke="#2B6BFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6V34H34"
                    stroke="#2B6BFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="34" cy="22" r="2.5" fill="#2B6BFF" />
                </svg>
              </div>
              <h3
                className="font-semibold text-xl mb-4"
                style={{ color: "#F9F9F9" }}
              >
                Every Brief Has a Business Goal
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#818181" }}>
                We don't deliver work without understanding what success looks
                like for you. Every project has defined outcomes — and we track
                them.
              </p>
            </motion.div>

            {/* Card 3: Original */}
            <motion.div
              className="rounded-2xl p-8 border border-[#222] hover:border-accent-blue transition-colors duration-300"
              style={{ background: "#1A1A1A" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="14" stroke="#2B6BFF" strokeWidth="2.5" />
                  <circle cx="20" cy="20" r="9" stroke="#2B6BFF" strokeWidth="2.5" opacity="0.7" />
                  <circle cx="20" cy="20" r="4" stroke="#2B6BFF" strokeWidth="2.5" opacity="0.5" />
                  <circle cx="20" cy="20" r="1.5" fill="#2B6BFF" />
                </svg>
              </div>
              <h3
                className="font-semibold text-xl mb-4"
                style={{ color: "#F9F9F9" }}
              >
                100% Original, Zero Templates
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#818181" }}>
                Every concept is built from scratch. We don't buy templates and
                swap colours. Your brand is unique — your work should be too.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Client Logos ── */}
      <section className="py-24" style={{ background: "#F9F9F9" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#818181" }}
            >
              Brands We&apos;ve Worked With
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center rounded-xl p-6 transition-all duration-300 group cursor-pointer"
                style={{
                  background: "#fff",
                  border: "1px solid #E5E5E5",
                  minWidth: "140px",
                }}
              >
                {logo.image ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-28 h-12 flex items-center justify-center">
                      <Image
                        src={logo.image}
                        alt={`${logo.name} logo`}
                        width={112}
                        height={48}
                        className="object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>
                    <span
                      className="text-sm font-medium transition-colors duration-300"
                      style={{ color: "#818181" }}
                    >
                      {logo.name}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                      style={{ background: "#111" }}
                      aria-hidden="true"
                    >
                      {logo.initial}
                    </div>
                    <span
                      className="text-sm font-medium transition-colors duration-300"
                      style={{ color: "#818181" }}
                    >
                      {logo.name}
                    </span>
                  </div>
                )}
              </div>
            ))}

            {/* "Your Brand Here" conversion tactic */}
            <div
              className="flex items-center justify-center rounded-xl p-6 transition-all duration-300"
              style={{
                background: "transparent",
                border: "2px dashed #E5E5E5",
                minWidth: "140px",
              }}
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-light"
                  style={{ background: "#F0F0F0", color: "#818181" }}
                  aria-hidden="true"
                >
                  +
                </div>
                <span
                  className="text-sm font-medium text-center"
                  style={{ color: "#818181" }}
                >
                  Your Brand Here
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: CTA ── */}
      <section className="py-24" style={{ background: "#2B6BFF" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-extrabold leading-tight mb-6 text-white"
              style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
            >
              Ready to Be Our
              <br />
              Next Success Story?
            </h2>
            <p
              className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Let&apos;s build something together that you&apos;ll be proud to show — and
              that your customers can&apos;t ignore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#F0F0F0]"
                style={{ color: "#2B6BFF" }}
                aria-label="Start a project with Daniekeys Studios"
              >
                Start a Project →
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-300"
                style={{}}
                aria-label="See our services"
              >
                See Our Services →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
