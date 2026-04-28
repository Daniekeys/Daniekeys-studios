"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
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

      <div className="relative z-10 container-padding w-full">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Main Headline */}
          <motion.h2
            className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Make Your Brand
            <span className="text-accent-blue block">Unforgettable?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="body-large text-primary-white mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's create something world-class together. Transform your business
            with premium design that builds trust and drives results.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="group bg-accent-blue text-white px-12 py-6 text-lg font-medium hover:bg-accent-blue-light transition-all duration-300 hover-lift flex items-center gap-4 mx-auto rounded-full">
              Start a Project
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-16 pt-16 border-t border-secondary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-2">
                  Email Us
                </h4>
                <p className="text-primary-white">starlordflash2@gmail.com</p>
              </div>

              <div>
                <h4 className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-2">
                  Call Us
                </h4>
                <p className="text-primary-white">+234 (0) 123 456 7890</p>
              </div>

              <div>
                <h4 className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-2">
                  Visit Studio
                </h4>
                <p className="text-primary-white">
                  Ilorin, Kwara state, Nigeria
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
