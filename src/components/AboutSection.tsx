"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
                A Creative Technology Studio for Ambitious Brands
              </span>
              <h2 className="display-2 text-white mb-8">
                We Don't Just Design.
                <span className="text-accent-blue"> We Transform Brands.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="body-large text-primary-white leading-relaxed">
                Daniekeys Studio is not just a design agency — we are your{" "}
                <strong>creative partner</strong>, combining technology,
                storytelling, and world-class visuals to help your business
                grow.
              </p>

              <p className="body-regular text-secondary leading-relaxed">
                We guide you from confusion to clarity with:
              </p>

              <ul className="space-y-3 ml-4">
                <li className="flex items-center gap-3 text-secondary">
                  <div className="w-2 h-2 bg-accent-blue"></div>
                  <span className="text-lg font-light">
                    clean, modern branding
                  </span>
                </li>
                <li className="flex items-center gap-3 text-secondary">
                  <div className="w-2 h-2 bg-accent-blue"></div>
                  <span className="text-lg font-light">
                    high-converting websites
                  </span>
                </li>
                <li className="flex items-center gap-3 text-secondary">
                  <div className="w-2 h-2 bg-accent-blue"></div>
                  <span className="text-lg font-light">
                    motion graphics that capture attention
                  </span>
                </li>
                <li className="flex items-center gap-3 text-secondary">
                  <div className="w-2 h-2 bg-accent-blue"></div>
                  <span className="text-lg font-light">
                    digital content that drives results
                  </span>
                </li>
              </ul>

              <div className="bg-secondary/10 p-6 my-8 border-l-4 border-accent-blue">
                <p className="text-primary-white text-lg font-light leading-relaxed">
                  Our approach is simple:
                  <br />
                  <strong>Creativity should build credibility.</strong>
                  <br />
                  <strong>Design should inspire action.</strong>
                  <br />
                  <strong>And your brand should feel unforgettable.</strong>
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-secondary/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-accent-blue mb-2">
                  50+
                </div>
                <div className="text-sm text-secondary uppercase tracking-wide">
                  Projects Delivered
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-accent-blue mb-2">
                  5+
                </div>
                <div className="text-sm text-secondary uppercase tracking-wide">
                  Years in Business
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-accent-blue mb-2">
                  100%
                </div>
                <div className="text-sm text-secondary uppercase tracking-wide">
                  On-Time Delivery Rate
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative video-container bg-secondary/10 rounded-none overflow-hidden hover-lift">
              {/* Aspect ratio container */}
              <div className="aspect-[4/5] relative">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/brand-vid.mp4" type="video/mp4" />
                  <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary">Behind the Scenes</span>
                  </div>
                </video>

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Video caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-primary-white text-sm font-light">
                  Behind the scenes at our Nigeria studio, where creativity and
                  technology converge to create extraordinary experiences.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-accent-blue"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-accent-blue"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
