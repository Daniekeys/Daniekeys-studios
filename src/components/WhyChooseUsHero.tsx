"use client";

import { motion } from "framer-motion";
import { Palette, Zap, Users, Award } from "lucide-react";

const features = [
  {
    title: "World-Class Aesthetic",
    description: "We create designs that feel premium, modern, and timeless.",
    icon: Palette,
  },
  {
    title: "Strategy Meets Creativity",
    description: "Every project blends branding, psychology & storytelling.",
    icon: Zap,
  },
  {
    title: "Motion & Digital Expertise",
    description:
      "We bring brands to life with motion graphics and interactive experiences.",
    icon: Award,
  },
  {
    title: "Supportive & Professional Team",
    description: "We guide you through every step — from idea to execution.",
    icon: Users,
  },
];

export default function WhyChooseUsHero() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Why Leading Brands Choose{" "}
            <span className="text-accent-blue">Daniekeys</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            We combine strategic thinking, creative excellence, and technical
            expertise to deliver solutions that not only look exceptional but
            drive real results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Feature Card */}
              <div className="relative bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-3xl p-8 h-full hover:border-accent-blue/30 hover:bg-gradient-to-br hover:from-accent-blue/10 hover:to-accent-blue/5 transition-all duration-500 backdrop-blur-sm">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-blue/30 group-hover:scale-110 transition-all duration-300">
                  <feature.icon
                    size={28}
                    className="text-accent-blue group-hover:text-accent-blue-light transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-accent-blue-light transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-secondary text-base leading-relaxed group-hover:text-secondary/90 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
