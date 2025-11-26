"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Play,
  Palette, Share2, Users,
  Building2, ExternalLink,
  ArrowRight,
  Star,
  Eye,
  Award,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Projects", icon: Star },
  { id: "motion", name: "Motion Graphics", icon: Play },
  { id: "branding", name: "Branding", icon: Palette },
  { id: "marketing", name: "Marketing", icon: Share2 },
  { id: "events", name: "Events", icon: Building2 },
];

const portfolioItems = [
  {
    id: 1,
    title: "Premium Brand Identity System",
    category: "branding",
    description:
      "Complete brand identity system for enterprise business including logo, color palette, and comprehensive brand guidelines.",
    image: "/images/samples/branding.jpg",
    client: "Enterprise Solutions Ltd",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Brand Guidelines"],
    results: [
      "400% increase in brand recognition",
      "60% improvement in client trust",
    ],
    testimonial:
      "Daniekeys Studios delivered a brand identity that perfectly captures our professional essence.",
    featured: true,
    tags: ["Corporate", "Enterprise", "B2B"],
  },
  {
    id: 2,
    title: "Modern Brand Redesign",
    category: "branding",
    description:
      "Contemporary brand redesign featuring clean aesthetics and modern typography for tech startup.",
    image: "/images/samples/branding-b.png",
    client: "Innovation Hub Nigeria",
    year: "2024",
    services: ["Brand Redesign", "Visual Identity", "Typography"],
    results: [
      "250% brand recognition improvement",
      "45% increase in investor interest",
    ],
    testimonial:
      "The new brand identity elevated our startup to compete with established players.",
    featured: true,
    tags: ["Startup", "Technology", "Modern"],
  },
  {
    id: 3,
    title: "Promotional Video Campaign",
    category: "motion",
    description:
      "High-impact promotional video campaign designed to increase brand awareness and drive engagement.",
    image: "/images/samples/marketing-a.png",
    video: "/videos/Ads-video.mp4",
    client: "Digital Marketing Pro",
    year: "2024",
    services: ["Motion Graphics", "Video Production", "Campaign Strategy"],
    results: ["3M+ views across platforms", "200% increase in lead generation"],
    testimonial:
      "The promotional videos exceeded our expectations and delivered exceptional results.",
    featured: true,
    tags: ["Advertising", "Promotion", "Digital"],
  },
  {
    id: 4,
    title: "Hero Video Production",
    category: "motion",
    description:
      "Professional hero video production showcasing company values and core services for corporate website.",
    image: "/images/samples/marketing-b.png",
    video: "/videos/new-hero.mp4",
    client: "Corporate Solutions Group",
    year: "2024",
    services: [
      "Hero Video",
      "Corporate Storytelling",
      "Professional Production",
    ],
    results: [
      "150% website engagement increase",
      "80% improvement in conversion rate",
    ],
    testimonial:
      "The hero video perfectly communicates our brand story and mission.",
    featured: false,
    tags: ["Corporate", "Hero Video", "Website"],
  },
  {
    id: 5,
    title: "Brand Video Production",
    category: "motion",
    description:
      "Dynamic brand video production showcasing company identity and core values through engaging storytelling.",
    image: "/images/samples/branding.jpg",
    video: "/videos/brand-vid.mp4",
    client: "Creative Studio Pro",
    year: "2024",
    services: ["Brand Video", "Creative Direction", "Video Storytelling"],
    results: ["250% brand awareness increase", "90% viewer engagement rate"],
    testimonial:
      "The brand video perfectly captured our essence and elevated our market presence.",
    featured: false,
    tags: ["Branding", "Video", "Creative"],
  },
  {
    id: 6,
    title: "Marketing Campaign Design",
    category: "marketing",
    description:
      "Comprehensive marketing campaign including social media assets, print materials, and digital advertisements.",
    image: "/images/samples/marketing-c.png",
    client: "Retail Excellence",
    year: "2024",
    services: ["Campaign Design", "Social Media", "Digital Marketing"],
    results: ["300% social media engagement", "120% sales increase"],
    testimonial:
      "Their marketing campaign design drove unprecedented growth for our business.",
    featured: false,
    tags: ["Retail", "Campaign", "Social Media"],
  },
  {
    id: 7,
    title: "Digital Marketing Suite",
    category: "marketing",
    description:
      "Complete digital marketing package including website banners, social media templates, and email campaigns.",
    image: "/images/samples/marketing-d.png",
    client: "E-commerce Plus",
    year: "2024",
    services: ["Digital Marketing", "Template Design", "Email Campaigns"],
    results: ["250% email open rates", "180% click-through improvement"],
    testimonial:
      "The digital marketing suite transformed our online presence completely.",
    featured: false,
    tags: ["E-commerce", "Digital", "Templates"],
  },
  {
    id: 8,
    title: "Social Media Strategy",
    category: "marketing",
    description:
      "Strategic social media content design and planning for lifestyle brand targeting young professionals.",
    image: "/images/samples/marketing-e.png",
    client: "Lifestyle Brand Co",
    year: "2024",
    services: ["Social Strategy", "Content Design", "Brand Positioning"],
    results: ["400% follower growth", "350% engagement increase"],
    testimonial:
      "Their social media strategy helped us connect with our target audience authentically.",
    featured: false,
    tags: ["Lifestyle", "Social Media", "Content"],
  },
  {
    id: 9,
    title: "Corporate Event Branding",
    category: "events",
    description:
      "Complete event branding package for major business conference including signage, materials, and digital assets.",
    image: "/images/samples/events.png",
    client: "Business Summit 2024",
    year: "2024",
    services: ["Event Branding", "Signage Design", "Conference Materials"],
    results: ["500+ attendee satisfaction", "95% brand recall rate"],
    testimonial:
      "The event branding created a memorable and professional conference experience.",
    featured: true,
    tags: ["Corporate", "Conference", "Event"],
  },
  {
    id: 10,
    title: "Cultural Event Promotion",
    category: "events",
    description:
      "Vibrant promotional materials and branding for cultural festival celebrating Nigerian heritage and arts.",
    image: "/images/samples/events-b.jpg",
    client: "Heritage Cultural Festival",
    year: "2024",
    services: ["Event Promotion", "Cultural Branding", "Festival Marketing"],
    results: ["10,000+ festival attendance", "80% ticket sales increase"],
    testimonial:
      "The promotional materials perfectly captured our cultural celebration spirit.",
    featured: false,
    tags: ["Cultural", "Festival", "Heritage"],
  },
  {
    id: 11,
    title: "Premium Launch Event",
    category: "events",
    description:
      "Luxury event branding and promotional materials for high-end product launch targeting premium market segment.",
    image: "/images/samples/event-c.jpg",
    client: "Luxury Brands Ltd",
    year: "2024",
    services: ["Launch Event", "Luxury Branding", "Premium Marketing"],
    results: ["200+ VIP attendance", "150% media coverage"],
    testimonial:
      "The event branding elevated our product launch to luxury standards.",
    featured: false,
    tags: ["Luxury", "Product Launch", "Premium"],
  },
];

const stats = [
  { number: "50+", label: "Projects Completed", icon: Award },
  { number: "30+", label: "Happy Clients", icon: Star },
  { number: "2M+", label: "Video Views Generated", icon: Eye },
  { number: "300%", label: "Average Growth Rate", icon: TrendingUp },
];

export default function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [, setSelectedItem] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const featuredItems = portfolioItems.filter((item) => item.featured);

  return (
    <div className="bg-primary text-white">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="hero-video opacity-20"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-blue-light/10"></div>
          </video>

          {/* Subtle atmospheric overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/80"></div>
        </div>

        <div className="container-padding relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero-sm lg:text-hero font-bold mb-6">
              Our <span className="text-accent-blue">Creative Portfolio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-secondary leading-relaxed mb-8">
              Discover how we've helped brands across Nigeria and Africa
              transform their digital presence. Every project tells a story of
              creativity, strategy, and measurable results.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-accent-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary text-sm">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title-sm lg:text-section-title font-bold mb-4">
              Featured <span className="text-accent-blue">Projects</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Our most impactful work showcasing creativity, strategy, and
              measurable results
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-cols-2" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative bg-secondary/10 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                    {/* Show video for Motion category, image for others */}
                    {item.category === "motion" && item.video ? (
                      <video
                        className="w-full h-80 object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={320}
                        className="w-full h-80 object-cover"
                      />
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-secondary/20 text-accent-blue px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {item.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2 text-accent-blue">
                        Services Provided:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.services.map((service) => (
                          <span
                            key={service}
                            className="bg-accent-blue/20 text-white px-3 py-1 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-accent-blue">
                        Key Results:
                      </h4>
                      <ul className="space-y-1">
                        {item.results.map((result, i) => (
                          <li
                            key={i}
                            className="text-secondary text-sm flex items-start gap-2"
                          >
                            <Star className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="bg-secondary/10 p-4 rounded-lg border-l-4 border-accent-blue">
                      <p className="text-white italic text-sm">
                        "{item.testimonial}"
                      </p>
                      <cite className="text-secondary text-xs mt-2 block">
                        - {item.client}
                      </cite>
                    </blockquote>

                    <button
                      className="bg-accent-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-blue-light transition-all duration-300 flex items-center gap-2 group"
                      onClick={() => setSelectedItem(item.id)}
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-secondary/5">
        <div className="container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title-sm lg:text-section-title font-bold mb-4">
              All <span className="text-accent-blue">Projects</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Explore our complete portfolio across different service categories
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-accent-blue text-white"
                      : "bg-secondary/10 text-secondary hover:text-white hover:bg-secondary/20"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-primary/50 rounded-2xl overflow-hidden border border-secondary/20 hover:border-accent-blue/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  {/* Show video for Motion category, image for others */}
                  {item.category === "motion" && item.video ? (
                    <video
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  {item.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-blue text-white px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/60 text-white px-2 py-1 rounded text-xs">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary/20 text-accent-blue px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-secondary text-xs">
                      {item.client}
                    </span>
                    <button
                      className="text-accent-blue hover:text-accent-blue-light transition-colors flex items-center gap-1 group/btn"
                      onClick={() => setSelectedItem(item.id)}
                    >
                      <span className="text-sm font-medium">View</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title-sm lg:text-section-title font-bold mb-6">
              Why Our <span className="text-accent-blue">Portfolio</span> Stands
              Out
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Original</h3>
                <p className="text-secondary text-sm">
                  Every project is crafted from scratch with original creative
                  concepts tailored to each client's unique vision.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Measurable Results</h3>
                <p className="text-secondary text-sm">
                  We track and deliver quantifiable outcomes that demonstrate
                  real business impact and growth.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-blue-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Collaborative Process
                </h3>
                <p className="text-secondary text-sm">
                  Transparent communication and collaborative approach ensuring
                  clients are involved throughout the journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-padding">
          <motion.div
            className="bg-gradient-to-r from-accent-blue to-accent-blue-light rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title-sm lg:text-section-title font-bold mb-6 text-white">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join our growing portfolio of satisfied clients. Let's create
              something extraordinary together that drives real results for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-accent-blue px-8 py-4 rounded-lg font-semibold hover:bg-off-white transition-all duration-300"
                onClick={() => (window.location.href = "/contact")}
              >
                Start Your Project
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent-blue transition-all duration-300"
                onClick={() => (window.location.href = "/services")}
              >
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
