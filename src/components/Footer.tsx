"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Share2,
} from "lucide-react";

const services = [
  "Motion Graphics & Video Creation",
  "Brand Visual Identity Design",
  "Social Media Marketing & Strategy",
  "Website & App Development",
  "Rebranding Services",
  "Training & Skills Development",
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/daniekeysstudios",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/daniekeysstudios",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/daniekeysstudios",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@daniekeysstudios",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <Image
                src="/images/logos/daniekeys-logo-light.png"
                alt="Daniekeys Studios Logo"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              Where creativity meets technology. Crafting exceptional digital
              experiences for world-class brands.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-secondary/10 hover:bg-accent-blue transition-colors duration-300 flex items-center justify-center group"
                  aria-label={label}
                >
                  <Icon
                    size={16}
                    className="text-secondary group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-accent-blue mt-1" />
                <div>
                  <p className="text-secondary text-sm">Email</p>
                  <a
                    href="mailto:hello@daniekeys.studio"
                    className="text-white hover:text-accent-blue transition-colors text-sm"
                  >
                    hello@daniekeys.studio
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="text-accent-blue mt-1" />
                <div>
                  <p className="text-secondary text-sm">Phone</p>
                  <a
                    href="tel:+2349030909624"
                    className="text-white hover:text-accent-blue transition-colors text-sm"
                  >
                    +234 903 090 9624
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-blue mt-1" />
                <div>
                  <p className="text-secondary text-sm">Studio</p>
                  <p className="text-white text-sm">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Share2 size={16} className="text-accent-blue mt-1" />
                <div>
                  <p className="text-secondary text-sm">Social Media</p>
                  <p className="text-white text-sm">@daniekeysstudios</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Daniekeys Studios. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-secondary hover:text-accent-blue transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-secondary hover:text-accent-blue transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
