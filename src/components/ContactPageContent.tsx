"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
} from "lucide-react";
import React, { useState } from "react";
import DemoPopupModal from "@/components/common/demoPopup";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "+234 903 090 9624",
    href: "tel:+2349030909624",
    description: "Call us directly for immediate assistance",
    gradient: "from-accent-blue to-accent-blue-light",
  },
  {
    icon: Mail,
    title: "Email",
    value: "starlordflash2@gmail.com",
    href: "mailto:starlordflash2@gmail.com",
    description: "Send us a detailed message about your project",
    gradient: "from-accent-blue-light to-accent-blue-lighter",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@daniekeys_studios",
    href: "https://www.instagram.com/daniekeys_studios/", 
    description: "Follow our latest work and behind-the-scenes",
    gradient: "from-accent-blue-lighter to-primary",
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "Daniekeys Studios",
    href: "https://www.facebook.com/profile.php?id=61583310572575",
    description: "Connect with our community and updates",
    gradient: "from-primary to-accent-blue",
  },
];

const services = [
  "Motion Graphics & Video Creation",
  "Brand Visual Identity Design",
  "Social Media Marketing",
  "Website Development",
  "App Development",
  "Rebranding Services",
  "Training & Development",
  "Community Campaign Videos",
];

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Timeline varies by project scope. Motion graphics: 1-2 weeks, Websites: 2-4 weeks, Full rebranding: 3-6 weeks. We always discuss realistic timelines during consultation.",
  },
  {
    question: "Do you work with clients outside Lagos?",
    answer:
      "Absolutely! We serve clients across Nigeria and internationally. Most of our process is digital, and we conduct meetings via video calls for seamless collaboration.",
  },
  {
    question: "What's included in your pricing?",
    answer:
      "Our pricing includes all design work, revisions (typically 2-3 rounds), final files in multiple formats, and basic consultation. Additional services like rush delivery or extensive revisions may have extra costs.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Yes! Check out our portfolio page to see case studies and examples across all our service categories. We're also happy to share relevant samples during our initial consultation.",
  },
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    timeline: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interested: ${formData.service}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}
    `;

    // Open mailto link
    window.open(
      `mailto:starlordflash2@gmail.com?subject=New Project Inquiry from ${formData.name
      }&body=${encodeURIComponent(emailBody)}`,
      "_blank",
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        timeline: "",
      });
    }, 2000);
  };

  return (
    <div className="bg-primary text-white">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="hero-video opacity-20"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-blue-light/10"></div>
          </video>

          {/* Subtle atmospheric overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/80"></div>
        </div>

        <div className="container-padding relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero-sm lg:text-hero font-bold mb-6">
              Let's Create Something{" "}
              <span className="text-accent-blue">Extraordinary</span>
            </h1>
            <p className="text-xl lg:text-2xl text-secondary leading-relaxed mb-8">
              Ready to transform your brand? We're here to listen, collaborate,
              and bring your vision to life. Every great project starts with a
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+2349030909624"
                className="bg-accent-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-blue-light transition-all duration-300 flex items-center gap-2 justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                Call Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="mailto:starlordflash2@gmail.com"
                className="border-2 border-accent-blue text-accent-blue px-8 py-4 rounded-lg font-medium hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Send Email
              </motion.a>
            </div>
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 px-6 py-4 w-full max-w-[300px] text-sm text-gray-200 rounded-lg bg-accent-blue hover:bg-accent-blue-light hover:text-white transition-colors"
              >
                Book a Demo
              </button>
              <DemoPopupModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-title-sm lg:text-section-title font-bold mb-4">
              Get in <span className="text-accent-blue">Touch</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Choose your preferred way to reach us. We're responsive and always
              excited to discuss new projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="bg-secondary/5 rounded-2xl p-6 border border-secondary/20 hover:border-accent-blue/30 transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${method.gradient} flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent-blue transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-accent-blue font-semibold mb-2">
                    {method.value}
                  </p>
                  <p className="text-sm text-secondary">{method.description}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-secondary/5">
        <div className="container-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-section-title-sm font-bold mb-6">
                Start Your <span className="text-accent-blue">Project</span>
              </h2>
              <p className="text-secondary mb-8">
                Tell us about your project and we'll get back to you within 24
                hours with a detailed proposal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-primary/50 border border-secondary/20 rounded-lg px-4 py-3 text-white placeholder-secondary/60 focus:border-accent-blue focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-primary/50 border border-secondary/20 rounded-lg px-4 py-3 text-white placeholder-secondary/60 focus:border-accent-blue focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-primary/50 border border-secondary/20 rounded-lg px-4 py-3 text-white placeholder-secondary/60 focus:border-accent-blue focus:outline-none transition-colors"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Needed *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-primary/50 border border-secondary/20 rounded-lg px-4 py-3 text-white focus:border-accent-blue focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full bg-primary/50 border border-secondary/20 rounded-lg px-4 py-3 text-white focus:border-accent-blue focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under ₦100,000">Under ₦100,000</option>
                      <option value="₦100,000 - ₦300,000">
                        ₦100,000 - ₦300,000
                      </option>
                      <option value="₦300,000 - ₦650,000">
                        ₦300,000 - ₦650,000
                      </option>
                      <option value="₦650,000 - ₦1,500,000">
                        ₦650,000 - ₦1,500,000
                      </option>
                      <option value="Above ₦1,500,000">Above ₦1,500,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full bg-primary/50 border border-secondary/20 rounded-lg px-4 py-3 text-white focus:border-accent-blue focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3+ months">3+ months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-primary/50 border border-secondary/20 rounded-lg px-4 py-3 text-white placeholder-secondary/60 focus:border-accent-blue focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your project, goals, target audience, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-blue-light transition-all duration-300 flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Office Hours */}
              <div className="bg-primary/50 rounded-2xl p-8 border border-secondary/20 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                    <div className="space-y-2 text-secondary">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-accent-blue text-sm mt-4">
                        Emergency projects? We're available on WhatsApp 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">
                  Frequently Asked Questions
                </h3>

                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary/50 rounded-lg p-6 border border-secondary/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4 className="font-semibold mb-2 text-accent-blue">
                      {faq.question}
                    </h4>
                    <p className="text-secondary text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="bg-gradient-to-r from-accent-blue/10 to-accent-blue-light/10 rounded-2xl p-6 border border-accent-blue/20 mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-5 h-5 text-accent-blue fill-current" />
                  <Star className="w-5 h-5 text-accent-blue fill-current" />
                  <Star className="w-5 h-5 text-accent-blue fill-current" />
                  <Star className="w-5 h-5 text-accent-blue fill-current" />
                  <Star className="w-5 h-5 text-accent-blue fill-current" />
                </div>
                <p className="text-white font-medium mb-2">
                  "Daniekeys Studios transformed our entire brand identity.
                  Professional, creative, and always on time!"
                </p>
                <p className="text-secondary text-sm">- Happy Client</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Location */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            className="bg-secondary/5 rounded-2xl p-8 border border-secondary/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-accent-blue" />
              <h3 className="text-2xl font-bold">Our Location</h3>
            </div>

            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              Based in Lagos, Nigeria, but serving clients globally. We leverage
              technology to collaborate seamlessly regardless of location.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-primary/30 rounded-lg p-4">
                <h4 className="font-semibold text-accent-blue mb-2">Nigeria</h4>
                <p className="text-secondary text-sm">
                  Primary market serving local businesses and startups
                </p>
              </div>
              <div className="bg-primary/30 rounded-lg p-4">
                <h4 className="font-semibold text-accent-blue mb-2">Africa</h4>
                <p className="text-secondary text-sm">
                  Expanding reach across the African continent
                </p>
              </div>
              <div className="bg-primary/30 rounded-lg p-4">
                <h4 className="font-semibold text-accent-blue mb-2">Global</h4>
                <p className="text-secondary text-sm">
                  Remote collaboration with international clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
