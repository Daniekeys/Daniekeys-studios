"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustLogos = [
  {
    name: "AFRIMENT",
    logo: "/images/logos/AFRIMENT logo.jpg",
    width: 150,
    height: 75,
  },
  {
    name: "Candexa",
    logo: "/images/logos/candexa-logo.png",
    width: 170,
    height: 65,
  },
  {
    name: "Daniekeys Studio",
    logo: "/images/logos/daniekeys-logo.png",
    width: 160,
    height: 70,
  },
  {
    name: "My Lang Coach",
    logo: "/images/logos/my-lang-coach-logo.svg",
    width: 135,
    height: 50,
  },
  {
    name: "buymejollof",
    isTextLogo: true,
    width: 140,
    height: 50,
  },
];

export default function TrustBar() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-padding">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-secondary text-lg font-meduim">
            Trusted by brands, businesses & organizations across Nigeria and
            beyond.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {trustLogos.map((company, index) => (
            <motion.div
              key={company.name}
              className="relative flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {company.isTextLogo ? (
                <div
                  className="text-white font-bold text-lg bg-black px-4 py-3 rounded-lg"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    maxWidth: "140px",
                  }}
                >
                  <span className="text-orange-400">buyme</span>
                  <span style={{ color: "#efa92f" }}>jollof</span>
                </div>
              ) : (
                <Image
                  src={company.logo!}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain transition-all duration-300 max-h-16"
                  style={{
                    maxWidth: "140px",
                    height: "auto",
                  }}
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
