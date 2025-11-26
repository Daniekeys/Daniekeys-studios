"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jane Adebayo",
    position: "Business Owner",
    company: "Lagos Retail Co.",
    content:
      "Professional, modern, and very quick delivery. Our brand looks 10× better. Customer trust has increased dramatically since the rebrand.",
    rating: 5,
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "David Okafor",
    position: "CEO",
    company: "Tech Innovations",
    content:
      "Their motion graphics helped us increase engagement massively. Social media interactions went up 400% after implementing their video strategy.",
    rating: 5,
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Chidi Emeka",
    position: "Founder",
    company: "Digital Solutions Ltd",
    content:
      "The website they built for us has transformed how customers perceive our business. We look like a Fortune 500 company now, and conversions have tripled.",
    rating: 5,
    image: "/images/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "Fatima Hassan",
    position: "Marketing Director",
    company: "Growth Partners",
    content:
      "Daniekeys doesn't just deliver great design — they understand business. Every recommendation they made directly improved our bottom line.",
    rating: 5,
    image: "/images/testimonial-4.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-off-white">
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
            Client Testimonials
          </span>
          <h2 className="display-2 text-primary mb-8">
            What Our Clients Say About
            <span className="text-accent-blue"> Our Work</span>
          </h2>
          <p className="body-large text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and
            visionary brands have to say about working with Daniekeys Studios.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 lg:p-10 relative group hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent-blue/20">
                <Quote size={32} />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-accent-blue fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-primary text-lg leading-relaxed mb-8 font-light">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-accent-blue font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-secondary text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-accent-blue text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue via-accent-blue-light to-accent-blue-lighter transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 pt-16 border-t border-secondary/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your brand achieve extraordinary
            results through premium design and cutting-edge technology.
          </p>

          <button className="bg-accent-blue text-white px-8 py-4 font-medium hover:bg-accent-blue-light transition-colors duration-300 hover-lift">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
