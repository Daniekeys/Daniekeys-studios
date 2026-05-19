"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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
  const portfolioImages = [
    ...baseImages,
    ...baseImages,
    "/images/marquee-pictures/DK_Slide 7.png",
    "/images/marquee-pictures/DK_Slide 12.png",
    "/images/marquee-pictures/DK_Slide 15.png",
    "/images/marquee-pictures/DK_Slide 22.png",
  ];

  return (
    <div className="relative mx-auto flex h-screen w-full max-w-full flex-col items-center justify-center overflow-hidden bg-[#111111]">
      
      {/* Ambient Glowing Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none z-15" />
      <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none z-15" />

      {/* Main Content Container */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto flex flex-col items-center justify-center h-full pt-16">
        
        {/* Dynamic Studio Status Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent-blue-light mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Creative Web & Motion Studio</span>
        </motion.div>

        {/* Dynamic Staggered Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 mx-auto max-w-5xl text-center font-neue-montreal text-4xl sm:text-6xl lg:text-[76px] font-black tracking-tight text-white leading-[1.08] text-balance"
        >
          Where Creativity Meets{" "}
          <span className="relative z-20 inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-blue-light via-blue-400 to-emerald-400 drop-shadow-[0_2px_10px_rgba(43,107,255,0.15)]">
            Technology
          </span>
        </motion.h1>

        {/* Descriptive Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 mx-auto max-w-2xl mt-6 text-center text-sm sm:text-base text-gray-300 leading-relaxed font-medium opacity-90 text-balance"
        >
          We design and develop digital experiences that captivate audiences,
          drive engagement, and transform brands into unforgettable stories.
        </motion.p>

        {/* Interactive Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 w-full sm:w-auto"
        >
          <button className="group w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-accent-blue hover:bg-accent-blue-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent-blue/20 hover:shadow-xl hover:shadow-accent-blue/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            Start Your Project
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="group w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            <Play className="h-5 w-5 text-accent-blue-light" />
            Watch Our Reel
          </button>
        </motion.div>

        {/* Brand Tagline Sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-20 mt-14 flex items-center justify-center gap-4 text-[10px] tracking-[0.3em] font-extrabold uppercase text-gray-400"
        >
          <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-gray-400/50"></div>
          <span className="font-neue-montreal">Daniekeys Studios</span>
          <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent to-gray-400/50"></div>
        </motion.div>
      </div>

      {/* Radial & linear gradient overlay for ultimate contrast and high-end aesthetics */}
      <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-[#111111]/80 via-[#111111]/70 to-[#111111]/95 pointer-events-none" />
      <div className="absolute inset-0 z-10 h-full w-full bg-[radial-gradient(circle_at_center,transparent_20%,#111111_90%)] pointer-events-none" />

      {/* 3D Marquee Skewed Grid Background */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={portfolioImages}
      />
    </div>
  );
}
