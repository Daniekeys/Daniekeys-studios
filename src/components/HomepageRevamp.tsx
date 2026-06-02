"use client";

import {
  Bot,
  BrainCircuit,
  ChevronDown,
  Code2,
  Globe2,
  LineChart,
  Palette,
  PlayCircle,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const marqueeImages = [
  "/images/marquee-pictures/DK_Slide 7.png",
  "/images/marquee-pictures/DK_Slide 22.png",
  "/images/marquee-pictures/DK_Slide 15.png",
  "/images/marquee-pictures/DK_Slide 12.png",
];

const clientLogos = [
  { name: "Afriment", src: "/images/logos/AFRIMENT logo.jpg" },
  { name: "Candexa", src: "/images/logos/candexa-logo.png" },
  { name: "My Lang Coach", src: "/images/logos/my-lang-coach-logo.svg" },
  { name: "Buymejollof", text: "Buymejollof" },
];

const pillars = [
  {
    icon: Palette,
    title: "Creative Excellence",
    copy: "World-class design rooted in strategy and storytelling",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered",
    copy: "We use AI to deliver faster, smarter, and more scalable results",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    copy: "Every deliverable is tied to a business outcome",
  },
  {
    icon: Globe2,
    title: "Pan-African",
    copy: "Built in Africa, built for Africa - and the world",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "5+", label: "Years in Business" },
  { number: "3×", label: "Average Client Revenue Growth" },
  { number: "100%", label: "On-Time Delivery Rate" },
];

const services = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Digital Strategy",
    copy: "We use AI to audit, plan, and execute digital strategies that give your business an unfair advantage over competitors still doing things manually.",
    tags: [],
    isNew: true,
  },
  {
    icon: Palette,
    title: "Brand Identity & Design",
    copy: "Logos, visual systems, colour palettes, and brand guidelines that make your business look like it belongs at the top.",
    tags: ["Logo Design", "Visual Identity", "Brand Guidelines"],
  },
  {
    icon: Code2,
    title: "Website & App Development",
    copy: "Fast, beautiful, mobile-first websites and apps that don't just look impressive - they convert visitors into paying customers.",
    tags: ["Web Design", "E-Commerce", "UI/UX", "App Dev"],
  },
  {
    icon: PlayCircle,
    title: "Motion Graphics & Video",
    copy: "Animated ads, brand videos, explainer reels, and motion graphics that stop the scroll and build instant brand recall.",
    tags: ["Brand Video", "Animated Ads", "Explainer Videos"],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Automation",
    copy: "Deploy AI agents on your website, WhatsApp, and Instagram that handle enquiries, qualify leads, and book appointments - 24/7 without extra headcount.",
    tags: [],
    isNew: true,
  },
  {
    icon: LineChart,
    title: "Digital Marketing & Social Media",
    copy: "AI-enhanced content strategies, social media management, SEO, and ad campaigns that build audiences and drive consistent revenue.",
    tags: [],
  },
];

const portfolioItems = [
  {
    name: "Afriment - Brand Identity System",
    category: "Branding",
    image: "/images/samples/branding.jpg",
    className: "md:row-span-2",
  },
  {
    name: "Candexa - Visual Identity Rebrand",
    category: "Branding",
    image: "/images/samples/branding-b.png",
    className: "",
  },
  {
    name: "My Lang Coach - Promotional Video Series",
    category: "Motion",
    image: "/images/samples/marketing-a.png",
    className: "",
  },
  {
    name: "Buymejollof - Brand Launch Video",
    category: "Marketing",
    image: "/images/samples/marketing-b.png",
    className: "md:row-span-2",
  },
  {
    name: "Digital Commerce Website",
    category: "Web",
    image: "/images/samples/marketing-c.png",
    className: "",
  },
  {
    name: "Launch Campaign System",
    category: "Marketing",
    image: "/images/samples/events.png",
    className: "",
  },
];

const testimonials = [
  {
    quote:
      "The new brand system made us look sharper immediately. More importantly, customers understood what we offered faster.",
    name: "Afriment",
    initial: "A",
  },
  {
    quote:
      "Daniekeys Studios gave us structure, better visuals, and a launch plan that felt practical from day one.",
    name: "Candexa",
    initial: "C",
  },
  {
    quote:
      "The ROI was visible within 30 days. Not just better design - actually more customers coming through the door.",
    name: "Lagos Business Owner",
    initial: "L",
  },
];

const processSteps = [
  {
    title: "Discovery Call (Free)",
    copy: "30 minutes to understand your business, your goals, and what success looks like for you. No jargon. No hard sell.",
  },
  {
    title: "Strategy & Proposal",
    copy: "We map out a precise creative and technical strategy, and send you a transparent proposal with clear deliverables and timelines.",
  },
  {
    title: "Create & Build",
    copy: "Our team gets to work. You get progress updates every 3 days - not radio silence.",
  },
  {
    title: "Review & Refine",
    copy: "Two rounds of revisions are included. We don't stop until the work is right.",
  },
  {
    title: "Launch & Support",
    copy: "We go live together. Then we stay close - monitoring, supporting, and optimising for 30 days post-launch.",
  },
];

export default function HomepageRevamp() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const filters = ["All", "Branding", "Motion", "Web", "Marketing"];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-primary pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
            alt="Creative agency team working in a dark studio"
            fill
            priority
            sizes="52vw"
            className="object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/75 to-primary/10" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1280px] items-center gap-10 px-6 py-16 md:px-8 lg:grid-cols-[55fr_45fr] lg:py-24">
          <div className="max-w-3xl text-left">
            <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-accent-blue bg-accent-blue/10 px-4 py-2 text-[13px] font-medium text-accent-blue-lighter">
              <Bot size={15} />
              AI-Powered Digital Agency
            </div>
            <h1 className="mt-7 text-[48px] font-bold leading-[1.05] text-primary-white md:text-[64px] lg:text-[80px]">
              <span className="block animate-fade-up">Africa&apos;s Most Ambitious Brands</span>
              <span className="block animate-fade-up [animation-delay:150ms]">
                Don&apos;t Just Look Good.
              </span>
              <span className="block animate-fade-up text-accent-blue [animation-delay:300ms]">
                They Grow.
              </span>
            </h1>
            <p className="mt-7 max-w-xl animate-fade-up text-lg font-normal leading-8 text-secondary [animation-delay:400ms]">
              Daniekeys Studios combines AI engineering, world-class creative design,
              and strategic marketing to help businesses across Africa build brands
              that convert, scale, and dominate their market.
            </p>
            <div className="mt-9 flex animate-fade-up flex-col gap-4 [animation-delay:550ms] sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-accent-blue px-8 py-4 text-center text-[15px] font-semibold text-white transition-colors hover:bg-accent-blue-light"
              >
                Start a Project →
              </Link>
              <Link
                href="/portfolio"
                className="rounded-lg border border-[#333333] px-8 py-4 text-center text-[15px] font-semibold text-primary-white transition-colors hover:border-accent-blue hover:text-accent-blue"
              >
                View Our Work ↗
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[520px] lg:block">
            <div className="absolute right-0 top-1/2 w-full -translate-y-1/2 rounded-2xl border border-white/10 bg-[#1A1A1A]/90 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-xl bg-[#0A0A0A] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-white">
                    Growth Dashboard
                  </span>
                  <span className="rounded-full bg-accent-blue/15 px-3 py-1 text-xs text-accent-blue-lighter">
                    AI Live
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Brand Lift", "Lead Flow", "Automation"].map((label, index) => (
                    <div key={label} className="rounded-lg bg-white/5 p-4">
                      <div className="text-2xl font-bold text-accent-blue">
                        {index === 0 ? "3×" : index === 1 ? "+64%" : "24/7"}
                      </div>
                      <div className="mt-2 text-xs text-secondary">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 h-48 rounded-lg border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(43,107,255,0.45),transparent_28%),linear-gradient(135deg,#111111,#1A1A1A)] p-5">
                  <div className="flex h-full items-end gap-3">
                    {[38, 52, 44, 72, 61, 88, 96].map((height) => (
                      <div
                        key={height}
                        className="flex-1 rounded-t bg-accent-blue"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 z-10 h-7 w-7 -translate-x-1/2 animate-bounce text-secondary" />
      </section>

      <section className="overflow-hidden bg-primary py-16">
        <div className="mx-auto max-w-[1280px] px-6 text-center md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-widest text-secondary">
            TRUSTED BY BRANDS ACROSS NIGERIA AND AFRICA
          </p>
        </div>
        <div className="mt-8 flex gap-5 overflow-hidden">
          <div className="flex min-w-full animate-[marquee_24s_linear_infinite] gap-5">
            {[...marqueeImages, ...marqueeImages].map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative h-56 w-80 flex-none overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A]"
              >
                <Image
                  src={src}
                  alt="Daniekeys Studios real client work preview"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-5 px-6 md:grid-cols-4 md:px-8">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-[#1A1A1A] px-5 grayscale transition hover:grayscale-0"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={150}
                  height={42}
                  className="max-h-9 w-auto object-contain"
                />
              ) : (
                <span className="text-sm font-semibold text-primary-white">
                  {logo.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-primary-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-blue">
              WHO WE ARE
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-tight text-primary lg:text-[48px]">
              We Don&apos;t Just Make Things Look Good.
              <br />
              We Make Your Business Grow.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-[1.8] text-[#444444]">
              <p>
                Daniekeys Studios is a full-service AI-powered digital agency based in
                Nigeria, built for businesses that are ready to compete - locally and
                globally.
              </p>
              <p>
                We bring together three things that most agencies separate: creative
                excellence, AI engineering, and growth strategy. The result? Brands
                that don&apos;t just look premium - they perform.
              </p>
              <p>
                Whether you&apos;re a startup finding your identity or an established
                business ready to scale, we become your creative and technology
                partner from day one.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, copy }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-sm"
                >
                  <Icon className="h-7 w-7 text-accent-blue" />
                  <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="African professionals meeting in a creative agency office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-full border border-accent-blue bg-primary/85 px-5 py-2 text-sm font-semibold text-primary-white backdrop-blur">
              Nigeria&apos;s AI Digital Agency
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="mx-auto flex max-w-[1280px] gap-6 overflow-x-auto px-6 md:px-8 lg:grid lg:grid-cols-4 lg:gap-0 lg:overflow-visible">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`min-w-[220px] py-6 lg:px-8 ${
                index > 0 ? "lg:border-l lg:border-[#222222]" : ""
              }`}
            >
              <div className="text-[56px] font-extrabold leading-none text-accent-blue">
                {stat.number}
              </div>
              <p className="mt-3 text-sm text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-blue">
              WHAT WE DO
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-tight text-primary lg:text-[48px]">
              Six Ways We Help Your Business
              <br />
              Win Online
            </h2>
            <p className="mt-5 text-base leading-7 text-secondary">
              From brand identity to AI automation - every service is built to deliver
              a measurable return on your investment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, copy, tags, isNew }) => (
              <article
                key={title}
                className="group flex min-h-[330px] flex-col rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent-blue hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="h-9 w-9 text-accent-blue" />
                  {isNew ? (
                    <span className="rounded-full bg-accent-blue px-3 py-1 text-xs font-bold text-white">
                      NEW
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-6 text-[22px] font-semibold leading-snug text-primary">
                  {title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-secondary">{copy}</p>
                {tags.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#333333] px-3 py-1 text-xs text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                <Link
                  href="/services"
                  className="mt-6 inline-flex text-sm font-medium text-accent-blue"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-lg border border-accent-blue px-8 py-4 text-[15px] font-semibold text-accent-blue transition-colors hover:bg-accent-blue hover:text-white"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <h2 className="max-w-4xl text-[32px] font-bold leading-tight text-white lg:text-[48px]">
            We Turned This Into That.
            <br />
            Now Imagine What We Can Do For You.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/samples/old-picture.jpg"
                alt="Before brand transformation sample"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-sm text-white">
                Before
              </span>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-accent-blue">
              <Image
                src="/images/samples/new-picture.png"
                alt="After brand transformation sample"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-accent-blue px-4 py-2 text-sm text-white">
                After
              </span>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["3×", "Average Revenue Impact"],
              ["85%", "Clients Report Stronger Brand Trust"],
              ["48hrs", "For First Creative Concepts"],
            ].map(([number, label]) => (
              <div key={label} className="border-l border-[#222222] pl-6">
                <div className="text-4xl font-extrabold text-accent-blue">{number}</div>
                <p className="mt-2 text-sm text-secondary">{label}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 max-w-3xl border-l-[3px] border-accent-blue pl-6 text-lg italic leading-8 text-secondary">
            &quot;The ROI was visible within 30 days. Not just better design - actually
            more customers coming through the door.&quot;
            <span className="mt-3 block text-sm not-italic">- Business Owner, Lagos</span>
          </blockquote>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
            OUR WORK
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-[40px] font-bold leading-tight text-white lg:text-[56px]">
                Work That Speaks
                <br />
                Before We Do.
              </h2>
              <p className="mt-4 text-base text-secondary">
                Real projects. Real clients. Real results.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-label={`Show ${filter} projects`}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2 text-sm transition-colors ${
                    activeFilter === filter
                      ? "bg-accent-blue text-white"
                      : "bg-[#1A1A1A] text-secondary hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid auto-rows-[260px] gap-6 md:grid-cols-3">
            {filteredPortfolio.map((item) => (
              <article
                key={item.name}
                className={`group relative overflow-hidden rounded-2xl bg-[#1A1A1A] ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} portfolio preview`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-accent-blue/0 p-6 opacity-0 transition duration-300 group-hover:bg-accent-blue/85 group-hover:opacity-100">
                  <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                  <span className="mt-3 text-sm font-medium text-white">
                    View Project →
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/portfolio"
              className="inline-flex rounded-lg bg-accent-blue px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-accent-blue-light"
            >
              See All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-primary">
              <span className="text-accent-blue">★★★★★</span>
              <span>Rated 5.0 by 30+ clients on Google</span>
              <a
                href="https://www.google.com/search?q=Daniekeys+Studios+reviews"
                target="_blank"
                rel="noreferrer"
                className="text-accent-blue"
              >
                Read Reviews ↗
              </a>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`rounded-2xl bg-white p-8 shadow-sm transition ${
                  index === activeTestimonial ? "ring-2 ring-accent-blue" : ""
                }`}
              >
                <div className="text-6xl font-bold leading-none text-accent-blue">
                  &quot;
                </div>
                <p className="mt-3 text-base leading-7 text-[#444444]">
                  {testimonial.quote}
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue text-lg font-bold text-white">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-secondary">Verified client</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveTestimonial(index)}
                className={`h-3 w-3 rounded-full ${
                  index === activeTestimonial ? "bg-accent-blue" : "bg-[#D8D8D8]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-gradient-to-br from-[#0D1117] to-[#111827] py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:px-8 lg:grid-cols-[60fr_40fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-blue-lighter">
              AI-POWERED AGENCY
            </p>
            <h2 className="mt-4 text-[32px] font-bold leading-tight text-white lg:text-[48px]">
              Your Competitors Are Still
              <br />
              Doing This Manually.
              <br />
              <span className="text-accent-blue">You Don&apos;t Have To.</span>
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-secondary">
              <p>
                Our founder is an AI engineer. That means we don&apos;t just talk
                about using AI - we actually build it into your brand systems.
              </p>
              <p>
                From AI chatbots that handle your DMs, to content pipelines that
                produce 30 days of material in 48 hours, to strategy tools that
                predict what your audience wants next - we give your brand AI
                superpowers.
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {[
                ["AI Chatbots", "deployed on WhatsApp, website & Instagram"],
                ["AI Content Pipelines", "30 days of content, 48-hour turnaround"],
                ["AI Brand Analytics", "real-time insights, not monthly PDFs"],
              ].map(([title, copy]) => (
                <li key={title} className="flex gap-4 text-primary-white">
                  <Sparkles className="mt-1 h-5 w-5 flex-none text-accent-blue" />
                  <span>
                    <strong>{title}</strong> - {copy}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/services#ai"
              className="mt-9 inline-flex rounded-lg bg-accent-blue px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-accent-blue-light"
            >
              Explore AI Services →
            </Link>
          </div>
          <div className="relative min-h-[420px]">
            <div className="absolute inset-0 rounded-full bg-accent-blue/15 blur-3xl" />
            <div className="ai-graph relative h-[420px] rounded-2xl border border-white/10 bg-[#0A0A0A]/50">
              {[...Array(10)].map((_, index) => (
                <span key={index} className={`ai-node ai-node-${index + 1}`} />
              ))}
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-blue bg-accent-blue/20 text-accent-blue">
                <Zap size={42} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-primary-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <h2 className="max-w-4xl text-[32px] font-bold leading-tight text-primary lg:text-[48px]">
            From First Call to Final Delivery -
            <br />
            Here&apos;s Exactly How We Work
          </h2>
          <div className="relative mt-12 grid gap-6 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-9 hidden border-t border-dashed border-[#E0E0E0] lg:block" />
            {processSteps.map((step, index) => (
              <article key={step.title} className="relative bg-primary-white">
                <div className="text-[64px] font-extrabold leading-none text-accent-blue/20">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-blue py-16 lg:py-24">
        <div className="mx-auto max-w-[980px] px-6 text-center md:px-8">
          <h2 className="text-[38px] font-extrabold leading-tight text-white lg:text-[56px]">
            Ready to Build Something
            <br />
            That Actually Works?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">
            Let&apos;s talk about your brand, your goals, and how Daniekeys Studios
            can help you grow. First call is always free.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-8 py-4 text-[15px] font-semibold text-accent-blue transition-colors hover:bg-primary-white"
            >
              Book a Free Discovery Call →
            </Link>
            <a
              href="https://wa.me/2349030909624"
              className="rounded-lg border border-white px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-accent-blue"
            >
              WhatsApp Us Now →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
