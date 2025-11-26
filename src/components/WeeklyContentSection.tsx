"use client";

import { motion } from "framer-motion";
import { Play, Eye, Zap, TrendingUp } from "lucide-react";

const contentTypes = [
  {
    title: "Motion Graphics",
    description:
      "Weekly deep dives into animation techniques, industry trends, and behind-the-scenes looks at our latest motion work.",
    video: "/videos/Ads-video.mp4",
    icon: Zap,
    stats: "50K+ Views",
    color: "accent-blue",
  },
  {
    title: "Website Reviews",
    description:
      "Expert analysis of cutting-edge web design, UX patterns, and development techniques that are shaping the digital landscape.",
    video: "/videos/Ads-video.mp4",
    icon: Eye,
    stats: "25K+ Views",
    color: "accent-blue-light",
  },
  {
    title: "Branding Insights",
    description:
      "Exploring visual identity evolution, brand strategy insights, and case studies of successful rebranding initiatives.",
    video: "/videos/Ads-video.mp4",
    icon: TrendingUp,
    stats: "35K+ Views",
    color: "accent-blue-lighter",
  },
  {
    title: "Marketing Creative",
    description:
      "Analyzing viral campaigns, creative strategies, and the intersection of technology and marketing communications.",
    video: "/videos/Ads-video.mp4",
    icon: Play,
    stats: "40K+ Views",
    color: "accent-blue",
  },
];

export default function WeeklyContentSection() {
  return (
    <section className="section-padding bg-white">
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
            Weekly Content
          </span>
          <h2 className="display-2 text-primary mb-8">
            Knowledge Sharing &
            <span className="text-accent-blue"> Industry Insights</span>
          </h2>
          <p className="body-large text-secondary max-w-3xl mx-auto">
            Stay ahead of the curve with our weekly content series. We share
            insights, tutorials, and industry analysis to help creatives and
            brands excel.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentTypes.map((content, index) => (
            <motion.div
              key={content.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Video Container */}
              <div className="relative aspect-[9/16] mb-6 overflow-hidden bg-off-white hover-lift">
                <video
                  className="w-full h-full object-cover video-hover-zoom"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={content.video} type="video/mp4" />
                  <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                    <content.icon size={48} className="text-secondary" />
                  </div>
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-light">
                        {content.stats}
                      </span>
                      <Play
                        size={20}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play size={16} className="text-white" />
                </div>
              </div>

              {/* Content Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 bg-${content.color}/10 flex items-center justify-center`}
                  >
                    <content.icon
                      size={16}
                      className={`text-${content.color}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent-blue transition-colors">
                    {content.title}
                  </h3>
                </div>

                <p className="text-secondary text-sm leading-relaxed">
                  {content.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-off-white">
                  <span className="text-xs text-secondary uppercase tracking-wide">
                    Weekly Series
                  </span>
                  <span className={`text-xs font-medium text-${content.color}`}>
                    {content.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blue Divider */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="h-px w-24 bg-accent-blue"></div>
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Never Miss an Update
          </h3>
          <p className="text-secondary mb-8 max-w-md mx-auto">
            Get our weekly insights delivered directly to your inbox. Industry
            trends, tutorials, and exclusive behind-the-scenes content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-secondary/20 text-primary placeholder-secondary/60 focus:outline-none focus:border-accent-blue transition-colors"
            />
            <button className="bg-accent-blue text-white px-6 py-3 font-medium hover:bg-accent-blue-light transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
