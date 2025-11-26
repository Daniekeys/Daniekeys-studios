"use client";

import { motion } from "framer-motion";
import { Palette, Zap, Users, Award } from "lucide-react";

const features = [
  {
    number: "01",
    title: "World-Class Aesthetic",
    description: "We create designs that feel premium, modern, and timeless.",
    icon: Palette,
  },
  {
    number: "02",
    title: "Strategy Meets Creativity",
    description: "Every project blends branding, psychology & storytelling.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Motion & Digital Expertise",
    description:
      "We bring brands to life with motion graphics and interactive experiences.",
    icon: Award,
  },
  {
    number: "04",
    title: "Supportive & Professional Team",
    description: "We guide you through every step — from idea to execution.",
    icon: Users,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-off-white">
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
            Why Choose Us
          </span>
          <h2 className="display-2 text-primary mb-8">
            Why Leading Brands Choose
            <span className="text-accent-blue"> Daniekeys</span>
          </h2>
          <p className="body-large text-secondary max-w-3xl mx-auto">
            We combine strategic thinking, creative excellence, and technical
            expertise to deliver solutions that not only look exceptional but
            drive real results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Feature Card */}
              <div className="bg-white p-8 h-full hover-lift group-hover:shadow-xl transition-all duration-300">
                {/* Number */}
                <div className="text-6xl font-bold text-accent-blue/20 mb-6 leading-none">
                  {feature.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:bg-accent-blue group-hover:scale-110 transition-all duration-300">
                  <feature.icon
                    size={24}
                    className="text-accent-blue group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent-blue transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue via-accent-blue-light to-accent-blue-lighter transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-secondary/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-secondary uppercase tracking-wide">
              Projects Delivered
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10</div>
            <div className="text-sm text-secondary uppercase tracking-wide">
              Years Experience
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-secondary uppercase tracking-wide">
              Team Members
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-secondary uppercase tracking-wide">
              Client Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
