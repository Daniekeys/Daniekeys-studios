"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

const headlines = [
  "Where Creativity Meets Technology.",
  "Building Brands That Move People.",
  "Design. Motion. Strategy. Impact.",
  "We Create Digital Experiences That Sell.",
];

export default function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/new-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-primary/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container-padding w-full">
          <div className="max-w-4xl">
            {/* Rotating Headlines */}
            <motion.h1
              className="display-1 text-white mb-8 text-reveal min-h-[200px] lg:min-h-[240px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                key={currentHeadline}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block"
              >
                {headlines[currentHeadline]}
              </motion.span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="body-large text-primary-white mb-12 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              We help businesses look world-class with branding, websites,
              motion graphics, and digital storytelling that attract customers
              and build trust.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button className="btn-primary hover-lift">
                Start Your Project
              </button>

              <button className="btn-secondary hover-lift group flex items-center gap-3">
                <Play
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                View Our Work
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-white text-sm font-light tracking-wider uppercase">
            Scroll to Explore
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-white to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
