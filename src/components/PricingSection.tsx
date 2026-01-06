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
    category: "Branding & Rebranding",
    services: [{ name: "Brand Rebranding", price: "₦150,000 - ₦350,000" }],
  },
  {
    category: "Web Development",
    services: [
      { name: "Landing Page Website", price: "₦150,000 - ₦250,000" },
      { name: "Full Website (5-7 pages)", price: "₦250,000 - ₦1,000,000" },
      { name: "E-Commerce Website", price: "₦700,000 - ₦2,000,000" },
    ],
  },
  {
    category: "Motion Graphics",
    services: [
      { name: "15-second Video", price: "₦25,000 - ₦60,000" },
      { name: "30-second Video", price: "₦60,000 - ₦150,000" },
      { name: "Explainer Video (60s+)", price: "₦120,000 - ₦300,000" },
    ],
  },
  {
    category: "Social Media Packages",
    services: [
      { name: "Basic Package", price: "₦45,000 - ₦85,000" },
      { name: "Standard Package", price: "₦90,000 - ₦180,000" },
      { name: "Premium Package", price: "₦200,000 - ₦450,000" },
    ],
  },
  {
    category: "GMB Services",
    services: [
      { name: "Setup", price: "₦20,000 - ₦45,000" },
      { name: "Optimization", price: "₦60,000 - ₦150,000" },
    ],
  },
  {
    category: "Training & Development",
    services: [
      { name: "Motion Graphics Training", price: "₦80,000 - ₦150,000" },
      { name: "Graphics Design Training", price: "₦70,000 - ₦120,000" },
      { name: "Social Media Management", price: "₦60,000 - ₦100,000" },
      { name: "Digital Marketing Workshop", price: "₦90,000 - ₦180,000" },
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
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {standaloneServices.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-secondary/5 rounded-2xl p-8 border border-secondary/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6 text-accent-blue">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg border border-secondary/10"
                    >
                      <span className="text-white">{service.name}</span>
                      <span className="text-accent-blue font-semibold">
                        {service.price}
                      </span>
                    </div>
                  ))}
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
