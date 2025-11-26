"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    description:
      "Modern, fast, mobile-first websites that elevate your brand and convert visitors into customers.",
    video: "/videos/Ads-video.mp4",
    features: [
      "Custom Development",
      "E-commerce Solutions",
      "UI/UX Design",
      "Performance Optimization",
    ],
    bgColor: "bg-primary",
  },
  {
    title: "Motion Graphics & Animation",
    description:
      "Eye-catching visuals, logo reveals, explainer videos & high-impact motion graphics that stop the scroll.",
    video: "/videos/Ads-video.mp4",
    features: [
      "Brand Animations",
      "Explainer Videos",
      "Logo Reveals",
      "Social Media Content",
    ],
    bgColor: "bg-primary-white",
  },
  {
    title: "Branding & Rebranding",
    description:
      "From logos to full identity systems — we craft visual brands that stand out, stay memorable & sell.",
    video: "/videos/Ads-video.mp4",
    features: [
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Rebranding Strategy",
    ],
    bgColor: "bg-primary",
  },
  {
    title: "Digital Marketing & Social Media",
    description:
      "Content that builds relationships, grows your community & strengthens your online presence.",
    video: "/videos/Ads-video.mp4",
    features: [
      "Social Media Creative",
      "Digital Campaigns",
      "Content Strategy",
      "Performance Marketing",
    ],
    bgColor: "bg-primary-white",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-off-white">
      {/* Section Header */}
      <div className="section-padding bg-primary-white">
        <div className="container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="display-2 text-primary mb-8">
              Services That Drive
              <span className="text-accent-blue"> Real Results</span>
            </h2>
            <p className="body-large text-secondary max-w-3xl mx-auto">
              We combine strategic thinking with creative excellence to deliver
              solutions that not only look exceptional but drive measurable
              business outcomes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          className={`relative min-h-screen flex items-center ${service.bgColor}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Video */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="service-video opacity-20"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={service.video} type="video/mp4" />
            </video>

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 ${
                service.bgColor === "bg-primary"
                  ? "bg-gradient-to-r from-primary/90 to-primary/60"
                  : "bg-gradient-to-r from-primary-white/90 to-primary-white/60"
              }`}
            ></div>
          </div>

          <div className="relative z-10 container-padding w-full">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Content */}
              <motion.div
                className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <h3
                    className={`text-4xl lg:text-5xl font-bold ${
                      service.bgColor === "bg-primary"
                        ? "text-white"
                        : "text-primary"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`body-large ${
                      service.bgColor === "bg-primary"
                        ? "text-primary-white"
                        : "text-secondary"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className={`flex items-center gap-3 ${
                          service.bgColor === "bg-primary"
                            ? "text-secondary"
                            : "text-secondary"
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + featureIndex * 0.1,
                        }}
                      >
                        <div className="w-2 h-2 bg-accent-blue"></div>
                        <span className="text-lg font-light">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`group flex items-center gap-3 mt-8 ${
                      service.bgColor === "bg-primary"
                        ? "text-white hover:text-accent-blue"
                        : "text-primary hover:text-accent-blue"
                    } transition-colors duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <span className="text-lg font-medium">Learn More</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </motion.button>
                </div>
              </motion.div>

              {/* Service Number/Visual Element */}
              <motion.div
                className={`${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                } flex items-center justify-center`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div
                  className={`text-[200px] lg:text-[300px] font-bold opacity-10 ${
                    service.bgColor === "bg-primary"
                      ? "text-white"
                      : "text-primary"
                  } leading-none`}
                >
                  0{index + 1}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
