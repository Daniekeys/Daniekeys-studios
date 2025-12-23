"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Palette, Megaphone, Sparkles } from "lucide-react";

const services = [
  {
    number: "1",
    title: "Website Design & Development",
    description:
      "Modern, fast, mobile-first websites that elevate your brand and convert visitors into customers.",
    icon: Globe,
    features: [
      "Custom Development",
      "E-commerce Solutions",
      "UI/UX Design",
      "Performance Optimization",
    ],
  },
  {
    number: "2",
    title: "Motion Graphics & Animation",
    description:
      "Eye-catching visuals, logo reveals, explainer videos & high-impact motion graphics that stop the scroll.",
    icon: Sparkles,
    features: [
      "Brand Animations",
      "Explainer Videos",
      "Logo Reveals",
      "Social Media Content",
    ],
  },
  {
    number: "3",
    title: "Branding & Rebranding",
    description:
      "From logos to full identity systems — we craft visual brands that stand out, stay memorable & sell.",
    icon: Palette,
    features: [
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Rebranding Strategy",
    ],
  },
  {
    number: "4",
    title: "Digital Marketing & Social Media",
    description:
      "Content that builds relationships, grows your community & strengthens your online presence.",
    icon: Megaphone,
    features: [
      "Social Media Creative",
      "Digital Campaigns",
      "Content Strategy",
      "Performance Marketing",
    ],
  },
];

export default function OurServices() {
  return (
    <section className="min-h-screen bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-black to-primary opacity-90"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16 min-w-max flex flex-col "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-left">
            Explore Our <br />
            <span className="text-accent-blue">Creative Services</span>
            </h2>
          <p className="text-xl text-secondary text-left  ">
            Four ways to elevate your brand and drive real results
          </p>
        </motion.div>

        {/* Services Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Left Column - All Four Cards */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <ServiceCard service={services[0]} delay={0} />
              <ServiceCard service={services[2]} delay={0.4} />
            </div>
            <div className="space-y-6 md:mt-8">
              <ServiceCard service={services[1]} delay={0.2} />
              <ServiceCard service={services[3]} delay={0.6} />
            </div>
          </div>

          {/* Right Column - Description Section */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <service.icon size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">
                    {service.title}
                  </h4>
                  <p className="text-secondary text-base leading-relaxed">
                    {index === 0 &&
                      "Be part of a growing network of experts and creative professionals shaping the future of digital experiences. Share ideas, insights, and collaborate directly with innovative teams."}
                    {index === 1 &&
                      "Discover cutting-edge animation projects across entertainment, marketing, and brand storytelling sectors. See real creativity, real impact, and signal your interest through our portfolio."}
                    {index === 2 &&
                      "Get transparent brand analysis, visual identity scores, and design insights that simplify complex branding information into actionable clarity for your business growth."}
                    {index === 3 &&
                      "Follow campaign progress, engage in creative discussions, and build your marketing knowledge while sharing insights and contributing your unique perspective."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const IconComponent = service.icon;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.0, 0.0, 0.2, 1.0] }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Main Card */}
      <div className="bg-accent-blue rounded-2xl p-8 min-h-[400px] relative overflow-hidden">
        {/* Background Number */}
        <div className="absolute top-8 right-8 text-[120px] font-bold opacity-30 text-white leading-none">
          {service.number}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <IconComponent size={24} className="text-white" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-white/90 text-base leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, featureIndex) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 text-white/90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + featureIndex * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="group/btn flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors duration-300 mt-auto"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span>Learn More</span>
            <ArrowRight
              size={18}
              className="group-hover/btn:translate-x-1 transition-transform duration-300"
            />
          </motion.button>
        </div>

        {/* Hover Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-blue-light/90 to-accent-blue-lighter/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          initial={false}
        />
      </div>
    </motion.div>
  );
}
