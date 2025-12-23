"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Professional, modern, and very quick delivery. Our brand looks 10× better. Customer trust has increased dramatically since the rebrand.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b9d1dfd4?auto=format&fit=crop&q=80&w=40&h=40",
    name: "Jane Adebayo",
    role: "Business Owner • Lagos Retail Co.",
  },
  {
    text: "Their motion graphics helped us increase engagement massively. Social media interactions went up 400% after implementing their video strategy.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=40&h=40",
    name: "David Okafor",
    role: "CEO • Tech Innovations",
  },
  {
    text: "The website they built for us has transformed how customers perceive our business. We look like a Fortune 500 company now, and conversions have tripled.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=40&h=40",
    name: "Chidi Emeka",
    role: "Founder • Digital Solutions Ltd",
  },
  {
    text: "Daniekeys doesn't just deliver great design — they understand business. Every recommendation they made directly improved our bottom line.",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=crop&q=80&w=40&h=40",
    name: "Fatima Hassan",
    role: "Marketing Director • Growth Partners",
  },
  {
    text: "Working with Daniekeys was seamless. They captured our vision perfectly and delivered a brand identity that truly represents who we are.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=40&h=40",
    name: "Sarah Mitchell",
    role: "Creative Director • Brand Studio",
  },
  {
    text: "The logo design exceeded all expectations. It's memorable, versatile, and perfectly captures our company's essence. Highly recommend their services.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=40&h=40",
    name: "Michael Chen",
    role: "Startup Founder • InnovateTech",
  },
  {
    text: "Their graphic design work transformed our marketing materials. We've seen a significant increase in brand recognition and customer engagement.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=40&h=40",
    name: "Amanda Rodriguez",
    role: "Marketing Manager • LocalBrand",
  },
  {
    text: "From concept to execution, Daniekeys delivered exceptional web design. Our online presence now truly reflects our premium brand positioning.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=40&h=40",
    name: "James Thompson",
    role: "Business Owner • Elite Services",
  },
  {
    text: "The branding package was comprehensive and perfectly executed. Every touchpoint now communicates our values clearly and professionally.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f87?auto=format&fit=crop&q=80&w=40&h=40",
    name: "Lisa Park",
    role: "CEO • Future Dynamics",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-white/20 shadow-lg shadow-black/20 max-w-xs w-full hover:bg-gray-900/70 hover:border-white/30 transition-all duration-300"
                  key={i}
                >
                  <div className="text-white leading-relaxed">"{text}"</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full ring-2 ring-white/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white">
                        {name}
                      </div>
                      <div className="leading-5 text-white/70 tracking-tight text-sm">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-black/95 my-20 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6 pt-10">
     
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="display-2 text-white mb-8">
            What our
            <span className="text-accent-blue"> Clients say</span>
          </h2>
          <p className="body-large text-secondary max-w-3xl mx-auto">
            See what our customers have to say about working with Daniekeys
            Studio.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,white_25%,white_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
