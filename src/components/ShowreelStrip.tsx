"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const showreelClips = [
  {
    video: "/videos/Ads-video.mp4",
    title: "Motion Graphics",
    category: "Visual Effects",
  },
  {
    video: "/videos/Ads-video.mp4",
    title: "Brand Identity",
    category: "Design",
  },
  {
    video: "/videos/Ads-video.mp4",
    title: "Web Development",
    category: "Technology",
  },
  {
    video: "/videos/Ads-video.mp4",
    title: "Digital Campaigns",
    category: "Marketing",
  },
  {
    video: "/videos/Ads-video.mp4",
    title: "Motion Graphics",
    category: "Visual Effects",
  },
];

export default function ShowreelStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-primary-white overflow-hidden">
      <div className="container-padding">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-2 text-primary mb-4">Our Creative Universe</h2>
          <p className="body-regular text-secondary max-w-2xl mx-auto">
            A glimpse into the diverse world of premium visual storytelling and
            digital craftsmanship we create for our clients.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Strip */}
        <div
          ref={scrollRef}
          className="horizontal-scroll gap-8 pb-4"
          style={{
            scrollPaddingLeft: "2rem",
          }}
        >
          {showreelClips.map((clip, index) => (
            <motion.div
              key={index}
              className="horizontal-scroll-item relative group"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="w-80 h-96 bg-primary rounded-none overflow-hidden video-container hover-lift">
                {/* Video */}
                <video
                  className="w-full h-full object-cover video-hover-zoom"
                  autoPlay={isInView}
                  muted
                  loop
                  playsInline
                >
                  <source src={clip.video} type="video/mp4" />
                </video>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-6 z-10">
                  <div className="text-white">
                    <p className="text-sm font-light text-secondary tracking-wider uppercase mb-2">
                      {clip.category}
                    </p>
                    <h3 className="text-xl font-semibold">{clip.title}</h3>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-accent-blue/0 group-hover:bg-accent-blue/10 transition-all duration-300 z-5"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 text-secondary">
            <div className="w-8 h-px bg-secondary"></div>
            <span className="text-sm font-light tracking-wider uppercase">
              Scroll Horizontally
            </span>
            <div className="w-8 h-px bg-secondary"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
