"use client";

import { motion } from "framer-motion";
import { Check, Star, Sparkles, Crown, ArrowRight } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    id: "basic",
    name: "Basic Package",
    icon: Star,
    price: "₦95,000 - ₦180,000",
    description: "Perfect for getting started with digital presence",
    features: [
      "6 Social Media Posts",
      "1 Motion Graphics Video",
      "Brand Touch-up",
      "Basic Page Optimization",
      "Caption Writing",
      "Light Content Strategy",
      "Landing Page Consultation Only (No Website)",
    ],
    popular: false,
    gradient: "from-accent-blue-lighter to-accent-blue",
    buttonColor: "bg-accent-blue hover:bg-accent-blue-light",
  },
  {
    id: "business",
    name: "Business Package",
    icon: Sparkles,
    price: "₦250,000 - ₦650,000",
    description: "Complete digital package with landing page website",
    features: [
      "Landing Page Website",
      "10-15 Social Media Posts",
      "3-5 Motion Graphics Videos",
      "Starter Brand Kit",
      "Optimization on All Platforms",
      "30-day Content Calendar",
      "Hashtag Research",
    ],
    popular: true,
    gradient: "from-accent-blue to-accent-blue-light",
    buttonColor: "bg-white text-accent-blue hover:bg-off-white",
  },
  {
    id: "premium",
    name: "Premium Package",
    icon: Crown,
    price: "₦700,000 - ₦3,000,000",
    description: "Full-scale digital transformation with complete branding",
    features: [
      "Full Website (5-7 Pages)",
      "E-commerce Website",
      "Full Brand Identity System",
      "20-30 Social Media Posts",
      "6 Motion Graphics Videos",
      "Marketing Strategy",
      "SEO (Basic)",
      "Website Copy-writing",
      "UI/UX System",
    ],
    popular: false,
    gradient: "from-primary to-secondary",
    buttonColor: "bg-accent-blue hover:bg-accent-blue-light",
  },
];

const standaloneServices = [
  {
    category: "Creative Production",
    headers: ["Service", "Starter", "Standard", "Premium"],
    services: [
      {
        name: "Logo Design (concept + files)",
        tiers: ["₦60,000", "₦120,000", "₦250,000+"],
      },
      {
        name: "Full Brand Identity Kit",
        tiers: ["₦120,000", "₦250,000", "₦500,000+"],
      },
      {
        name: "Rebranding Package (audit + redesign)",
        tiers: ["₦200,000", "₦400,000", "₦800,000+"],
      },
      {
        name: "Motion Graphics Video (30–60 seconds)",
        tiers: ["₦50,000", "₦120,000", "₦250,000+"],
      },
      {
        name: "Animated Ad / Promo (social media format)",
        tiers: ["₦40,000", "₦90,000", "₦180,000+"],
      },
      {
        name: "Brand Intro / Outro (10–15 seconds)",
        tiers: ["₦30,000", "₦60,000", "₦120,000+"],
      },
      {
        name: "Video Editing (per video, supplied footage)",
        tiers: ["₦25,000", "₦60,000", "₦150,000+"],
      },
      {
        name: "Reels Creation (concept to final edit)",
        tiers: ["₦35,000", "₦80,000", "₦160,000+"],
      },
    ],
  },
  {
    category: "Digital Marketing & Social Media",
    headers: ["Service", "Basic", "Standard", "Premium"],
    services: [
      {
        name: "Social Media Management (per month, 2 platforms)",
        tiers: ["₦150,000", "₦280,000", "₦500,000+"],
      },
      {
        name: "Social Media Management (per month, 3+ platforms)",
        tiers: ["₦250,000", "₦400,000", "₦700,000+"],
      },
      {
        name: "Ad Creative Production (4 ad graphics/videos)",
        tiers: ["₦60,000", "₦120,000", "₦250,000+"],
      },
      {
        name: "Social Media Kit (profile, cover, 5 templates)",
        tiers: ["₦50,000", "₦100,000", "₦200,000+"],
      },
      {
        name: "30-Day Content Calendar (strategy document)",
        tiers: ["₦40,000", "₦80,000", "₦150,000+"],
      },
      {
        name: "Community & Campaign Video (awareness/NGO)",
        tiers: ["₦100,000", "₦250,000", "₦500,000+"],
      },
      {
        name: "Event Highlight Video (editing + motion)",
        tiers: ["₦80,000", "₦180,000", "₦350,000+"],
      },
    ],
  },
  {
    category: "Website & App Development",
    headers: ["Service", "Starting From", "Typical Range", "Timeline"],
    services: [
      {
        name: "Landing Page (1 page, mobile optimised)",
        tiers: ["₦120,000", "₦120,000 – ₦350,000", "5–7 days"],
      },
      {
        name: "Business Website (3–5 pages)",
        tiers: ["₦300,000", "₦300,000 – ₦800,000", "2–3 weeks"],
      },
      {
        name: "Full Website (5–7 pages + blog/SEO)",
        tiers: ["₦500,000", "₦500,000 – ₦1,500,000", "3–4 weeks"],
      },
      {
        name: "E-commerce Website (product + payments)",
        tiers: ["₦600,000", "₦600,000 – ₦2,500,000", "4–6 weeks"],
      },
      {
        name: "Website Maintenance (monthly)",
        tiers: ["₦50,000", "₦50,000 – ₦150,000/mo", "Ongoing"],
      },
      {
        name: "Mobile App (Android or iOS)",
        tiers: ["₦800,000", "₦800,000 – ₦3,000,000", "6–12 weeks"],
      },
    ],
  },
  {
    category: "Training & Skills Development",
    headers: ["Training Programme", "Duration", "Format", "Investment"],
    services: [
      {
        name: "Motion Graphics Fundamentals",
        tiers: ["4 weeks", "Online/Physical", "₦45,000 per student"],
      },
      {
        name: "Graphic Design for Beginners",
        tiers: ["4 weeks", "Online/Physical", "₦40,000 per student"],
      },
      {
        name: "Social Media Management Masterclass",
        tiers: ["3 weeks", "Online", "₦35,000 per student"],
      },
      {
        name: "Digital Marketing Strategy Workshop",
        tiers: ["2 days", "Physical", "₦50,000 per student"],
      },
      {
        name: "Private 1-on-1 Coaching (per session)",
        tiers: ["2 hours", "Online/Physical", "₦25,000 per session"],
      },
      {
        name: "Corporate Team Training (group of 5+)",
        tiers: ["Custom", "Physical", "From ₦150,000/group"],
      },
    ],
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <section id="pricing" className="py-24 bg-primary text-white">
      <div className="container-padding">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-title-sm lg:text-section-title font-bold mb-6">
            Transparent <span className="text-accent-blue">Pricing</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            Choose the perfect package for your business needs. All prices are
            transparent with no hidden fees.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-secondary/10 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("packages")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === "packages"
                  ? "bg-accent-blue text-white"
                  : "text-secondary hover:text-white"
              }`}
            >
              Complete Packages
            </button>
            <button
              onClick={() => setActiveTab("standalone")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === "standalone"
                  ? "bg-accent-blue text-white"
                  : "text-secondary hover:text-white"
              }`}
            >
              Individual Services
            </button>
          </div>
        </motion.div>

        {/* Package Cards */}
        {activeTab === "packages" && (
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  className={`relative bg-secondary/5 rounded-2xl p-8 border border-secondary/20 ${
                    pkg.popular ? "ring-2 ring-accent-blue" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent-blue text-white px-4 py-2 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${pkg.gradient} flex items-center justify-center`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-secondary text-sm mb-4">
                      {pkg.description}
                    </p>
                    <div className="text-3xl font-bold text-accent-blue">
                      {pkg.price}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                        <span className="text-secondary text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${pkg.buttonColor} flex items-center justify-center gap-2 group`}
                    onClick={() => {
                      window.open(
                        `mailto:starlordflash2@gmail.com?subject=Interest in ${pkg.name} Package&body=Hi! I'm interested in learning more about the ${pkg.name} package. Please send me more details.`,
                        "_blank"
                      );
                    }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Standalone Services */}
        {activeTab === "standalone" && (
          <div className="space-y-12 mb-16">
            {standaloneServices.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-secondary/5 rounded-2xl overflow-hidden border border-secondary/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6 border-b border-secondary/20 bg-secondary/10">
                  <h3 className="text-xl font-bold text-accent-blue">
                    {category.category}
                  </h3>
                </div>
                
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-secondary/20">
                        {category.headers.map((header) => (
                          <th
                            key={header}
                            className="p-4 text-sm font-bold text-white uppercase tracking-wider border-b border-secondary/20"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {category.services.map((service, serviceIndex) => (
                        <tr
                          key={serviceIndex}
                          className="hover:bg-accent-blue/5 transition-colors group"
                        >
                          <td className="p-4 text-white border-b border-secondary/10 font-medium">
                            {service.name}
                          </td>
                          {service.tiers.map((tier, tierIndex) => (
                            <td
                              key={tierIndex}
                              className="p-4 text-secondary border-b border-secondary/10 group-hover:text-white transition-colors"
                            >
                              {tier}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* FAQ or Additional Info */}
        <motion.div
          className="text-center bg-secondary/5 rounded-2xl p-8 border border-secondary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Need a <span className="text-accent-blue">Custom Solution</span>?
          </h3>
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            Every business is unique. If our standard packages don't quite fit
            your needs, we'd love to create a custom solution tailored
            specifically for you.
          </p>
          <button
            className="bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-blue-light transition-all duration-300 flex items-center gap-2 mx-auto group"
            onClick={() => {
              window.open(
                "mailto:starlordflash2@gmail.com?subject=Custom Solution Request&body=Hi! I need a custom solution for my business. Here are my requirements:%0A%0A[Please describe your needs]",
                "_blank"
              );
            }}
          >
            Get Custom Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
