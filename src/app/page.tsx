"use client";

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TransformationSection from "../components/TransformationSection";
import PortfolioSection from "../components/PortfolioSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <main className="min-h-screen relative bg-primary">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Transformation Section */}
      <TransformationSection />

      {/* Portfolio Section */}
      <section id="portfolio">
        <PortfolioSection />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section id="contact">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
