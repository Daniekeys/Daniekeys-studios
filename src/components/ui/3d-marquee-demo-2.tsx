"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export default function Hero3DMarquee() {
  // Base marquee images from marquee-pictures folder (14 images)
  const baseImages = [
    "/images/marquee-pictures/11401972_4749774.jpg",
    "/images/marquee-pictures/119708.jpg",
    "/images/marquee-pictures/124533.jpg",
    "/images/marquee-pictures/22912338_6712669.jpg",
    "/images/marquee-pictures/44009.jpg",
    "/images/marquee-pictures/6071585_3130384.jpg",
    "/images/marquee-pictures/60732.jpg",
    "/images/marquee-pictures/6113933_3163310.jpg",
    "/images/marquee-pictures/6208034_3215434.jpg",
    "/images/marquee-pictures/6208035_3215557.jpg",
    "/images/marquee-pictures/DK_Slide 12.png",
    "/images/marquee-pictures/DK_Slide 15.png",
    "/images/marquee-pictures/DK_Slide 22.png",
    "/images/marquee-pictures/DK_Slide 7.png",
  ];

  // Create 32 images by strategically reusing the 14 base images
  // Some images appear 2 times, others 3 times to reach exactly 32 total
  const portfolioImages = [
    // First round - all 14 images (14 total)
    ...baseImages,
    // Second round - all 14 images again (28 total)
    ...baseImages,
    // Third round - select 4 best images to reach 32 total
    "/images/marquee-pictures/DK_Slide 7.png", // Studio slide
    "/images/marquee-pictures/DK_Slide 12.png", // Studio slide
    "/images/marquee-pictures/DK_Slide 15.png", // Studio slide
    "/images/marquee-pictures/DK_Slide 22.png", // Studio slide
  ];

  return (
    <div className="relative mx-auto flex h-screen w-full max-w-full flex-col items-center justify-center overflow-hidden  bg-primary">
      {/* Main Content */}
      <div className="relative z-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 mx-auto max-w-5xl text-center font-neue-montreal text-4xl font-bold text-balance text-primary-white md:text-6xl lg:text-hero"
        >
          Where Creativity Meets{" "}
          <span className="relative z-20 inline-block rounded-xl bg-accent-blue/45 px-6 py-2 text-primary-white underline decoration-accent-blue-light decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
            Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 mx-auto max-w-2xl py-8 text-center text-lg text-off-white md:text-xl"
        >
          We design and develop digital experiences that captivate audiences,
          drive engagement, and transform brands into unforgettable stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 flex flex-wrap items-center justify-center gap-6 pt-4"
        >
          <button className="group flex items-center gap-3 rounded-lg bg-accent-blue px-8 py-4 text-base font-medium text-primary-white transition-all duration-300 hover:bg-accent-blue-light hover:shadow-lg hover:shadow-accent-blue/25 focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-primary focus:outline-none">
            Start Your Project
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="group flex items-center gap-3 rounded-lg border border-off-white/20 bg-primary-white/10 px-8 py-4 text-base font-medium text-primary-white backdrop-blur-sm transition-all duration-300 hover:bg-primary-white/20 hover:border-off-white/40 focus:ring-2 focus:ring-primary-white/20 focus:ring-offset-2 focus:ring-offset-primary focus:outline-none">
            <Play className="h-5 w-5" />
            Watch Our Reel
          </button>
        </motion.div>

        {/* Brand tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-20 mt-12 flex items-center justify-center gap-4 text-sm text-secondary"
        >
          <div className="h-px w-16 bg-secondary"></div>
          <span className="font-neue-montreal uppercase tracking-wider">
            Daniekeys Studios
          </span>
          <div className="h-px w-16 bg-secondary"></div>
        </motion.div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-10 h-full w-full bg-primary/85" />

      {/* 3D Marquee Background */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={portfolioImages}
      />
    </div>
  );
}
