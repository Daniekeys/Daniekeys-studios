"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding Your Vision",
    description:
      "We dive deep into your brand, goals, and challenges to uncover opportunities that others miss. Every great project starts with the right questions.",
    icon: Search,
    features: [
      "Brand Analysis",
      "Market Research",
      "Goal Definition",
      "Strategy Planning",
    ],
    video: "/videos/Ads-video.mp4",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Crafting the Experience",
    description:
      "Our creative team transforms insights into compelling visual concepts that resonate with your audience and align with your objectives.",
    icon: Palette,
    features: [
      "Concept Development",
      "Visual Design",
      "Prototyping",
      "User Testing",
    ],
    video: "/videos/Ads-video.mp4",
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "Building Excellence",
    description:
      "Using cutting-edge technology and best practices, we bring designs to life with precision, performance, and scalability in mind.",
    icon: Code,
    features: [
      "Technical Development",
      "Quality Assurance",
      "Performance Optimization",
      "Integration",
    ],
    video: "/videos/Ads-video.mp4",
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Launching Success",
    description:
      "We ensure smooth deployment and provide ongoing support to maximize the impact of your investment and achieve measurable results.",
    icon: Rocket,
    features: [
      "Launch Strategy",
      "Performance Monitoring",
      "Optimization",
      "Ongoing Support",
    ],
    video: "/videos/Ads-video.mp4",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-primary">
      {/* Section Header */}
      <div className="section-padding">
        <div className="container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="display-2 text-white mb-8">
              How We Create
              <span className="text-accent-blue"> Extraordinary Results</span>
            </h2>
            <p className="body-large text-primary-white max-w-3xl mx-auto">
              Our proven methodology combines strategic thinking, creative
              excellence, and technical expertise to deliver solutions that
              exceed expectations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Process Steps */}
      {processSteps.map((step, index) => (
        <motion.div
          key={step.number}
          className="relative min-h-screen flex items-center border-t border-secondary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Video */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="service-video opacity-5"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={step.video} type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10 container-padding w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Step Number */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-6xl lg:text-8xl font-bold text-accent-blue/20 leading-none">
                  {step.number}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="lg:col-span-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent-blue/10 flex items-center justify-center">
                    <step.icon size={24} className="text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-accent-blue text-lg font-light">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <p className="body-large text-primary-white mb-8 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + featureIndex * 0.1,
                      }}
                    >
                      <div className="w-2 h-2 bg-accent-blue"></div>
                      <span className="text-secondary text-sm font-light">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                className="lg:col-span-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  {/* Decorative background */}
                  <div className="w-full h-64 bg-gradient-to-br from-accent-blue/10 to-accent-blue-light/5 relative overflow-hidden">
                    {/* Animated elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-32 h-32 border-2 border-accent-blue/30"
                        animate={{
                          rotate: 360,
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      />

                      <motion.div
                        className="absolute w-16 h-16 bg-accent-blue/20"
                        animate={{
                          rotate: -360,
                          x: [0, 20, 0],
                          y: [0, -20, 0],
                        }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          x: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      />
                    </div>
                  </div>

                  {/* Step indicator */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-blue flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
