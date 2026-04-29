"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    name: string;
    logo?: string;
    isTextLogo?: boolean;
    width: number;
    height: number;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  videoSrc?: string;
  videoCaption?: string;
}

const defaultCompanies = [
  {
    name: "AFRIMENT",
    logo: "/images/logos/AFRIMENT logo.jpg",
    width: 150,
    height: 75,
  },
  {
    name: "Candexa",
    logo: "/images/logos/candexa-logo.png",
    width: 170,
    height: 65,
  },
  {
    name: "Daniekeys Studio",
    logo: "/images/logos/daniekeys-logo.png",
    width: 160,
    height: 70,
  },
  {
    name: "My Lang Coach",
    logo: "/images/logos/my-lang-coach-logo.svg",
    width: 135,
    height: 50,
  },
  {
    name: "buymejollof",
    isTextLogo: true,
    width: 140,
    height: 50,
  },
];

const defaultAchievements = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Years Experience", value: "10" },
  { label: "Team Members", value: "25+" },
  { label: "Happy Clients", value: "99%" },
];

export const About3 = ({
  title = "We Don't Just Design. We Transform Brands.",
  description = "Daniekeys Studio is not just a design agency — we are your creative partner, combining technology, storytelling, and world-class visuals to help your business grow.",
  // mainImage = {
  //   src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
  //   alt: "Creative team working together",
  // },
  secondaryImage = {
    src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=300&fit=crop&crop=center",
    alt: "Design workspace",
  },
  breakout = {
    src: "/images/logos/daniekeys-logo-light.png",
    alt: "Daniekeys Studio Logo",
    title: "A Creative Technology Studio for Ambitious Brands",
    description:
      "We guide you from confusion to clarity with clean, modern branding, high-converting websites, motion graphics that capture attention, and digital content that drives results.",
    buttonText: "View Our Work",
    buttonUrl: "/portfolio",
  },
  companiesTitle = "Trusted by brands, businesses & organizations across Nigeria and beyond.",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Creativity should build credibility. Design should inspire action. And your brand should feel unforgettable.",
  achievements = defaultAchievements,
  videoSrc = "/videos/motion-vids5.mp4",
  // videoCaption = "Behind the scenes at our Lagos studio, where creativity and technology converge to create extraordinary experiences.",
}: About3Props = {}) => {
  return (
    <section className="py-32 bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="mb-14 grid gap-8 text-center md:grid-cols-2 md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              A Creative Technology Studio for Ambitious Brands
            </span>
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              {title.split("We Transform Brands.")[0]}
              <span className="text-accent-blue">We Transform Brands.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-secondary text-lg leading-relaxed">
              {description}
            </p>

            {/* Service Points */}
            <div className="mt-6 space-y-3">
              <p className="text-secondary text-base">
                We guide you from confusion to clarity with:
              </p>
              <ul className="space-y-2">
                {[
                  "clean, modern branding",
                  "high-converting websites",
                  "motion graphics that capture attention",
                  "digital content that drives results",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span className="text-base font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-7 lg:grid-cols-3 mb-16">
          {/* Main Image */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video
              src="/videos/motion-vids4.mp4"
              className="size-full max-h-[620px] rounded-xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-7 md:flex-row lg:flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Breakout Card */}
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-secondary/10 p-7 md:w-1/2 lg:w-auto border border-secondary/20">
              {breakout.src && (
                <Image
                  src={breakout.src}
                  alt={breakout.alt}
                  width={140}
                  height={40}
                  className="mr-auto h-auto w-auto object-contain"
                />
              )}
              <div>
                <p className="mb-2 text-lg font-semibold text-white">
                  {breakout.title}
                </p>
                <p className="text-secondary text-sm leading-relaxed">
                  {breakout.description}
                </p>
              </div>
              <Button
                variant="outline"
                className="mr-auto border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white"
                asChild
              >
                <a href={breakout.buttonUrl}>{breakout.buttonText}</a>
              </Button>
            </div>

            {/* Video Section */}
            <div className="grow basis-0 rounded-xl overflow-hidden md:w-1/2 lg:min-h-0 lg:w-auto relative">
              {videoSrc ? (
                <div className="aspect-video relative">
                  <video
                    className="w-full h-full object-cover rounded-xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>

                  {/* Video overlay and caption */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="text-white text-xs font-light leading-tight">
                      {videoCaption}
                    </p>
                  </div> */}
                </div>
              ) : (
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  className="w-full h-full rounded-xl object-cover"
                  width={400}
                  height={300}
                  loading="lazy"
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Trust Bar Section */}
        <motion.div
          className="py-16 border-t border-b border-secondary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-secondary text-lg font-light mb-12">
            {companiesTitle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className="relative flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {company.isTextLogo ? (
                  <div
                    className="text-white font-bold text-lg bg-black px-4 py-3 rounded-lg"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      maxWidth: "140px",
                    }}
                  >
                    <span className="text-orange-400">buyme</span>
                    <span style={{ color: "#efa92f" }}>jollof</span>
                  </div>
                ) : (
                  <Image
                    src={company.logo!}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className="object-contain transition-all duration-300 max-h-16 filter brightness-0 invert opacity-70 hover:opacity-100"
                    style={{
                      maxWidth: "140px",
                      height: "auto",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="relative overflow-hidden rounded-xl bg-secondary/10 p-10 md:p-16 mt-16 border border-secondary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-white">
              {achievementsTitle}
            </h2>
            <p className="max-w-screen-sm text-secondary leading-relaxed">
              {achievementsDescription}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((item, idx) => (
              <motion.div
                className="flex flex-col gap-3"
                key={item.label + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-blue">
                  {item.value}
                </span>
                <p className="text-sm text-secondary uppercase tracking-wider font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative grid pattern */}
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--secondary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--secondary))_1px,transparent_1px)] bg-[size:80px_80px] opacity-10 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </motion.div>
      </div>
    </section>
  );
};
