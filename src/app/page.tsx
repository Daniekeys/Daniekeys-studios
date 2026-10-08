import AIAdvantageSection from "@/components/AIAdvantageSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import OurNumbersSection from "@/components/OurNumbersSection";
import PricingTeaserSection from "@/components/PricingTeaserSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesTeaserSection from "@/components/ServicesTeaserSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Daniekeys Studios — AI-Powered Digital Agency in Nigeria | Brand Design, Web & AI Automation",
  description:
    "Daniekeys Studios is Nigeria's leading AI-powered digital agency. We help ambitious brands with professional web design, brand identity, motion graphics, and AI automation. Serving Nigeria and Africa.",
  keywords:
    "digital agency Nigeria, AI agency Nigeria, branding agency Nigeria, web design Nigeria, motion graphics Nigeria, AI automation Nigeria, brand identity Lagos, website design Nigeria",
  alternates: {
    canonical: "https://www.daniekeysstudios.com/",
  },
  openGraph: {
    title: "Daniekeys Studios — Africa's AI-Powered Digital Agency",
    description:
      "From brand identity to AI automation — we help African businesses build brands that convert, scale, and dominate their market.",
    url: "https://www.daniekeysstudios.com/",
    siteName: "Daniekeys Studios",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniekeys Studios AI-powered digital agency",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Daniekeys Studios",
  description:
    "AI-powered digital agency offering brand identity, web development, motion graphics, and AI automation services in Nigeria and Africa.",
  url: "https://www.daniekeysstudios.com",
  telephone: "+2349030909624",
  email: "hello@daniekeysstudios.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ilorin",
    addressRegion: "Kwara State",
    addressCountry: "NG",
  },
  areaServed: ["Nigeria", "Africa"],
  serviceType: [
    "Brand Identity Design",
    "Web Development",
    "Motion Graphics",
    "AI Automation",
    "Digital Marketing",
  ],
  priceRange: "₦₦₦",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Daniekeys Studios do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daniekeys Studios is an AI-powered digital agency in Nigeria that provides brand identity design, website development, motion graphics, AI automation, and digital marketing services to businesses across Africa.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Daniekeys Studios charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daniekeys Studios offers packages starting from ₦95,000 for basic digital presence up to ₦3,000,000+ for full-scale AI-powered brand transformation. Custom quotes are available.",
      },
    },
    {
      "@type": "Question",
      name: "Is Daniekeys Studios an AI agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Daniekeys Studios is founded by an AI engineer and integrates AI tools into brand strategy, content creation, chatbot deployment, and digital marketing — making it one of Nigeria's few truly AI-native digital agencies.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Script
        id="homepage-professional-service-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Navigation />
      <HeroSection />
      <WhoWeAreSection />
      <OurNumbersSection />
      <ServicesTeaserSection />
      <FeaturedWorkSection />
      <AIAdvantageSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingTeaserSection />
      <Footer />
    </main>
  );
}
