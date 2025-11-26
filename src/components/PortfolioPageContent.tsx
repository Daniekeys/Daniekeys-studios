"use client";

import { motion } from "framer-motion";
import {
  Play,
  Palette,
  Globe,
  Share2,
  RefreshCw,
  Users,
  Building2,
  Film,
  ExternalLink,
  ArrowRight,
  Star,
  Eye,
  Award,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Projects", icon: Star },
  { id: "motion-graphics", name: "Motion Graphics", icon: Play },
  { id: "branding", name: "Branding", icon: Palette },
  { id: "web-development", name: "Web Development", icon: Globe },
  { id: "social-media", name: "Social Media", icon: Share2 },
  { id: "rebranding", name: "Rebranding", icon: RefreshCw },
];

const portfolioItems = [
  {
    id: 1,
    title: "TechCorp Brand Identity",
    category: "branding",
    description:
      "Complete brand identity system for a growing tech startup including logo, color palette, and brand guidelines.",
    image: "/images/portfolio/techcorp-branding.jpg",
    video: "/videos/portfolio/techcorp-brand-reveal.mp4",
    client: "TechCorp Solutions",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Brand Guidelines"],
    results: [
      "300% increase in brand recognition",
      "50% improvement in client engagement",
    ],
    testimonial:
      "Daniekeys Studios completely transformed our brand. The new identity perfectly captures our vision and values.",
    featured: true,
    tags: ["Startup", "Technology", "B2B"],
  },
  {
    id: 2,
    title: "EcoFarms Motion Graphics Campaign",
    category: "motion-graphics",
    description:
      "Animated explainer video series showcasing sustainable farming practices and environmental impact.",
    image: "/images/portfolio/ecofarms-motion.jpg",
    video: "/videos/portfolio/ecofarms-explainer.mp4",
    client: "EcoFarms Nigeria",
    year: "2024",
    services: ["Motion Graphics", "Explainer Videos", "Animation"],
    results: [
      "2M+ views across platforms",
      "40% increase in awareness campaigns",
    ],
    testimonial:
      "The animation brought our sustainability message to life in ways we never imagined.",
    featured: true,
    tags: ["Agriculture", "Sustainability", "NGO"],
  },
  {
    id: 3,
    title: "FashionForward E-commerce Platform",
    category: "web-development",
    description:
      "Full-stack e-commerce website with custom UI/UX design and integrated payment systems.",
    image: "/images/portfolio/fashion-ecommerce.jpg",
    video: "/videos/portfolio/fashion-website-demo.mp4",
    client: "FashionForward Lagos",
    year: "2024",
    services: ["Web Development", "E-commerce", "UI/UX Design"],
    results: [
      "200% increase in online sales",
      "70% improvement in user experience",
    ],
    testimonial:
      "Our new website has revolutionized how customers interact with our brand online.",
    featured: false,
    tags: ["Fashion", "E-commerce", "B2C"],
  },
  {
    id: 4,
    title: "HealthPlus Social Media Strategy",
    category: "social-media",
    description:
      "Comprehensive social media management and content strategy for healthcare provider.",
    image: "/images/portfolio/healthplus-social.jpg",
    video: "/videos/portfolio/healthplus-social-reel.mp4",
    client: "HealthPlus Medical",
    year: "2024",
    services: [
      "Social Media Marketing",
      "Content Strategy",
      "Community Management",
    ],
    results: ["150% follower growth", "300% engagement rate increase"],
    testimonial:
      "Their strategic approach to social media has significantly boosted our patient engagement.",
    featured: false,
    tags: ["Healthcare", "Medical", "B2C"],
  },
  {
    id: 5,
    title: "RetailMax Complete Rebranding",
    category: "rebranding",
    description:
      "End-to-end rebranding project including new identity, website redesign, and marketing materials.",
    image: "/images/portfolio/retailmax-rebrand.jpg",
    video: "/videos/portfolio/retailmax-rebrand-reveal.mp4",
    client: "RetailMax Stores",
    year: "2023",
    services: ["Rebranding", "Web Design", "Marketing Materials"],
    results: [
      "400% brand recognition improvement",
      "85% customer retention increase",
    ],
    testimonial:
      "The rebrand positioned us as a modern, customer-focused retail brand.",
    featured: true,
    tags: ["Retail", "Rebranding", "B2C"],
  },
  {
    id: 6,
    title: "YouthEmpower Campaign Videos",
    category: "motion-graphics",
    description:
      "Community awareness video series promoting youth empowerment and skill development.",
    image: "/images/portfolio/youth-empower.jpg",
    video: "/videos/portfolio/youth-campaign.mp4",
    client: "Youth Development Foundation",
    year: "2024",
    services: ["Campaign Videos", "Motion Graphics", "Social Impact"],
    results: ["5M+ reach across Nigeria", "500+ youth program enrollments"],
    testimonial:
      "These videos have been instrumental in spreading our youth empowerment message.",
    featured: false,
    tags: ["NGO", "Youth", "Social Impact"],
  },
  {
    id: 7,
    title: "StartupHub Website Platform",
    category: "web-development",
    description:
      "Custom website platform for startup incubator with member portal and event management.",
    image: "/images/portfolio/startuphub-website.jpg",
    video: "/videos/portfolio/startuphub-demo.mp4",
    client: "Lagos StartupHub",
    year: "2024",
    services: ["Web Development", "Portal Design", "Event Management"],
    results: ["300+ startup applications", "50% improved user engagement"],
    testimonial:
      "The platform has streamlined our operations and improved startup experience.",
    featured: false,
    tags: ["Startup", "Technology", "Platform"],
  },
  {
    id: 8,
    title: "FoodieNaija Social Content",
    category: "social-media",
    description:
      "Food photography, video content creation, and social media strategy for restaurant chain.",
    image: "/images/portfolio/foodie-social.jpg",
    video: "/videos/portfolio/foodie-content-reel.mp4",
    client: "FoodieNaija Restaurants",
    year: "2024",
    services: ["Food Photography", "Video Content", "Social Strategy"],
    results: ["250% social media growth", "40% increase in foot traffic"],
    testimonial:
      "Their content strategy has made our food look irresistible and drove real results.",
    featured: false,
    tags: ["Food", "Restaurant", "B2C"],
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
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const featuredItems = portfolioItems.filter((item) => item.featured);

  return (
    <div className="bg-primary text-white">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-padding">
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

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue-light/5 rounded-full blur-3xl"></div>
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
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white" />
                    </div>
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
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
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
