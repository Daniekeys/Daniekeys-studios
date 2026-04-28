"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TransformationSection() {
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
          <h2 className="display-2 text-white mb-8">
            We Don't Just Design.
            <span className="text-accent-blue"> We Transform Brands.</span>
          </h2>
          <p className="body-large text-primary-white max-w-3xl mx-auto leading-relaxed">
            Our work helps SMEs look premium, professional, and trustworthy —
            even in crowded markets. Because design alone isn't enough. You need
            identity. You need emotion. You need a story that moves your
            audience.
          </p>
          <p className="body-large text-accent-blue mt-4 font-medium">
            That's what we create.
          </p>
        </motion.div>

        {/* Before & After Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Before */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden bg-secondary/10 aspect-[4/3] hover-lift">
              {/* Before image */}
              <Image
                src="/images/samples/old-picture.jpg"
                alt="Before transformation - outdated design"
                fill
                className="object-cover"
              />

              {/* Before Label */}
              <div className="absolute top-6 left-6 bg-secondary/80 backdrop-blur px-4 py-2">
                <span className="text-white text-sm font-medium uppercase tracking-wide">
                  Before
                </span>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden bg-accent-blue/10 aspect-[4/3] hover-lift">
              {/* After image */}
              <Image
                src="/images/samples/new-picture.png"
                alt="After transformation - premium professional design"
                fill
                className="object-cover"
              />

              {/* After Label */}
              <div className="absolute top-6 left-6 bg-accent-blue backdrop-blur px-4 py-2">
                <span className="text-white text-sm font-medium uppercase tracking-wide">
                  After
                </span>
              </div>
            </div>

            {/* Transformation Arrow */}
            <motion.div
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center">
                <ArrowRight size={24} className="text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Results Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-secondary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-blue mb-2">300%</div>
            <div className="text-sm text-secondary uppercase tracking-wide">
              Average Brand Recognition Increase
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-accent-blue mb-2">85%</div>
            <div className="text-sm text-secondary uppercase tracking-wide">
              Client Revenue Growth
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-accent-blue mb-2">
              48hrs
            </div>
            <div className="text-sm text-secondary uppercase tracking-wide">
              Average Project Turnaround
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="#about">
            <button className="bg-accent-blue text-white px-8 py-4 font-medium hover:bg-accent-blue-light transition-colors duration-300 hover-lift rounded-full">
              Learn More About Us
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
