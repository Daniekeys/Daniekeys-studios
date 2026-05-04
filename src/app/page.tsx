"use client";

import { useEffect } from "react";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import OurServices from "../components/OurServices";
import PortfolioSection from "../components/PortfolioSection";
import TransformationSection from "../components/TransformationSection";
import Hero3DMarquee from "../components/ui/3d-marquee-demo-2";
import { About3 } from "../components/ui/about-3";
import Testimonials from "../components/ui/testimonials-columns-1";
import WhyChooseUsHero from "../components/WhyChooseUsHero";

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
      <Hero3DMarquee />

      {/* About Section - Integrated with Trust Bar */}
      <section id="about">
        <About3 />
      </section>

      {/* Why Choose Us Hero */}
      <WhyChooseUsHero />

      {/* Services Section */}
      {/* <section id="services">
        <ServicesSection />
      </section> */}

      {/* Our Services Platform Section */}
      <section id="our-services">
        <OurServices />
      </section>

      {/* Transformation Section */}
      <TransformationSection />

      {/* Portfolio Section */}
      <section id="portfolio">
        <PortfolioSection />
      </section>

      {/* Carousel Rotation Section */}
    

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section id="contact">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
