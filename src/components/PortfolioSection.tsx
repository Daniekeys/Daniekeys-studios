"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Brand Identity Design",
    client: "Premium Business Solutions",
    category: "Branding",
    year: "2024",
    image: "/images/samples/branding.jpg",
    description: "Complete visual identity for modern business enterprise",
    height: "h-96",
  },
  {
    id: 2,
    title: "Creative Brand System",
    client: "Innovation Hub",
    category: "Branding",
    year: "2024",
    image: "/images/samples/branding-b.png",
    description: "Comprehensive branding solution for tech startup",
    height: "h-80",
  },
  {
    id: 3,
    title: "Motion Graphics Campaign",
    client: "Digital Marketing Agency",
    category: "Motion",
    year: "2024",
    image: "/images/samples/marketing-a.png",
    video: "/videos/motion-vids1.mp4",
    description: "Engaging animated advertisements for brand awareness",
    height: "h-88",
  },
  {
    id: 4,
    title: "Hero Video Production",
    client: "Corporate Solutions",
    category: "Motion",
    year: "2024",
    image: "/images/samples/marketing-b.png",
    video: "/videos/motion-vids2.mp4",
    description: "Professional hero video for company website",
    height: "h-72",
  },
  {
    id: 5,
    title: "Brand Video Production",
    client: "Creative Studio",
    category: "Motion",
    year: "2024",
    image: "/images/samples/branding.jpg",
    video: "/videos/motion-vids3.mp4",
    description: "Dynamic brand video showcasing company identity",
    height: "h-84",
  },
  {
    id: 12,
    title: "Product Animation",
    client: "Tech Startup",
    category: "Motion",
    year: "2024",
    image: "/images/samples/marketing-a.png",
    video: "/videos/motion-vids4.mp4",
    description: "Captivating product showcase animation",
    height: "h-86",
  },
  {
    id: 13,
    title: "Explainer Video",
    client: "SaaS Company",
    category: "Motion",
    year: "2024",
    image: "/images/samples/marketing-b.png",
    video: "/videos/motion-vids5.mp4",
    description: "Engaging explainer video for complex services",
    height: "h-82",
  },
  {
    id: 6,
    title: "Marketing Campaign Design",
    client: "E-commerce Platform",
    category: "Marketing",
    year: "2024",
    image: "/images/samples/marketing-c.png",
    description: "Comprehensive marketing materials for product launch",
    height: "h-96",
  },
  {
    id: 7,
    title: "Digital Marketing Suite",
    client: "Retail Brand",
    category: "Marketing",
    year: "2024",
    image: "/images/samples/marketing-d.png",
    description: "Complete digital marketing package for online presence",
    height: "h-80",
  },
  {
    id: 8,
    title: "Social Media Campaign",
    client: "Lifestyle Brand",
    category: "Marketing",
    year: "2024",
    image: "/images/samples/marketing-e.png",
    description: "Engaging social media content and strategy",
    height: "h-84",
  },
  {
    id: 9,
    title: "Corporate Event Branding",
    client: "Business Conference",
    category: "Events",
    year: "2024",
    image: "/images/samples/events.png",
    description: "Complete visual identity for major business conference",
    height: "h-90",
  },
  {
    id: 10,
    title: "Event Marketing Materials",
    client: "Cultural Festival",
    category: "Events",
    year: "2024",
    image: "/images/samples/events-b.jpg",
    description: "Comprehensive event promotion and branding package",
    height: "h-88",
  },
  {
    id: 11,
    title: "Premium Event Experience",
    client: "Luxury Launch Event",
    category: "Events",
    year: "2024",
    image: "/images/samples/event-c.jpg",
    description: "High-end event branding and promotional materials",
    height: "h-92",
  },
];

const categories = ["All", "Branding", "Motion", "Marketing", "Events"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="section-padding bg-primary">
      <div className="container-padding">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="display-2 text-white mb-8">
            Projects That
            <span className="text-accent-blue"> Define Excellence</span>
          </h2>
          <p className="body-large text-secondary max-w-3xl mx-auto">
            Each project is a unique journey of discovery, creativity, and
            execution. Explore how we've helped brands tell their stories and
            achieve their goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-full ${
                activeCategory === category
                  ? "bg-accent-blue text-white"
                  : "bg-transparent text-secondary hover:text-accent-blue border hover:border-accent-blue border-secondary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-white hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`relative ${item.height} overflow-hidden`}>
                {/* Show video for Motion category, image for others */}
                {item.category === "Motion" && item.video ? (
                  <video
                    className="w-full h-full object-cover"
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
                    alt={`${item.title} - ${item.category}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-accent-blue text-sm font-medium tracking-wide uppercase mb-2">
                          {item.category} • {item.year}
                        </p>
                        <h3 className="text-white text-xl font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary-white text-sm">
                          {item.client}
                        </p>
                      </div>
                      <ExternalLink
                        size={20}
                        className="text-white group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="/portfolio">
            <button className="bg-accent-blue text-white px-8 py-4 font-medium hover:bg-accent-blue-light transition-colors duration-300 hover-lift rounded-full">
              View All Projects
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
