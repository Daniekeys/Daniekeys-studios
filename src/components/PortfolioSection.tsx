"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Global Tech Rebrand",
    client: "TechCorp International",
    category: "Branding",
    year: "2024",
    image: "/images/work-1.jpg",
    video: "/videos/Ads-video.mp4",
    description:
      "Complete visual identity overhaul for leading technology company",
    height: "h-96",
  },
  {
    id: 2,
    title: "Motion Campaign",
    client: "Creative Agency",
    category: "Motion Graphics",
    year: "2024",
    image: "/images/work-2.jpg",
    video: "/videos/Ads-video.mp4",
    description: "Award-winning animated campaign for luxury brand",
    height: "h-80",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    client: "Retail Innovation",
    category: "Web Development",
    year: "2023",
    image: "/images/work-3.jpg",
    video: "/videos/Ads-video.mp4",
    description: "Custom e-commerce solution driving 300% conversion increase",
    height: "h-88",
  },
  {
    id: 4,
    title: "Brand Identity System",
    client: "Startup Ventures",
    category: "Branding",
    year: "2024",
    image: "/images/work-4.jpg",
    video: "/videos/Ads-video.mp4",
    description: "Comprehensive identity for emerging fintech company",
    height: "h-72",
  },
  {
    id: 5,
    title: "Digital Experience",
    client: "Cultural Institution",
    category: "Web Development",
    year: "2023",
    image: "/images/work-5.jpg",
    video: "/videos/Ads-video.mp4",
    description: "Immersive digital experience for art museum",
    height: "h-96",
  },
  {
    id: 6,
    title: "Product Launch Campaign",
    client: "Consumer Electronics",
    category: "Marketing",
    year: "2024",
    image: "/images/work-6.jpg",
    video: "/videos/Ads-video.mp4",
    description: "Integrated campaign launching revolutionary product",
    height: "h-80",
  },
];

const categories = [
  "All",
  "Branding",
  "Motion Graphics",
  "Web Development",
  "Marketing",
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="section-padding bg-primary-white">
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
            Selected Work
          </span>
          <h2 className="display-2 text-primary mb-8">
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
              className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent-blue text-white"
                  : "bg-transparent text-secondary hover:text-accent-blue border border-secondary/20"
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
              className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-off-white hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative ${item.height} overflow-hidden`}>
                {/* Static Image */}
                <div
                  className={`absolute inset-0 bg-secondary/20 transition-opacity duration-300 ${
                    hoveredItem === item.id ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                    <span className="text-white text-lg font-light">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Video on Hover */}
                {hoveredItem === item.id && (
                  <video
                    className="portfolio-video absolute inset-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                )}

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
          <button className="bg-accent-blue text-white px-8 py-4 font-medium hover:bg-accent-blue-light transition-colors duration-300 hover-lift">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
