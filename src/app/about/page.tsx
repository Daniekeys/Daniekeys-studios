import type { Metadata } from "next";
import Script from "next/script";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title:
    "About Daniekeys Studios — Africa's AI-Powered Digital Agency | Our Story, Team & Track Record",
  description:
    "Daniekeys Studios is a full-service AI-powered digital agency based in Nigeria, built for businesses ready to compete locally and globally. 50+ projects delivered, 5+ years in business, 100% on-time delivery, rated 5.0 by 30+ clients on Google.",
  keywords: [
    "about Daniekeys Studios",
    "AI digital agency Nigeria",
    "creative agency Nigeria story",
    "Pan-African digital agency",
    "AI-powered agency founder",
    "digital agency track record Nigeria",
  ],
  alternates: {
    canonical: "https://www.daniekeysstudios.com/about",
  },
  openGraph: {
    title: "About Daniekeys Studios — Africa's AI-Powered Digital Agency",
    description:
      "Creative excellence, AI engineering, and growth strategy under one roof. Meet the agency helping ambitious African brands look premium and perform.",
    type: "website",
    url: "https://www.daniekeysstudios.com/about",
    siteName: "Daniekeys Studios",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Daniekeys Studios",
  description:
    "Full-service AI-powered digital agency based in Nigeria — brand identity, web and app development, motion graphics, AI chatbots and automation, and digital marketing for businesses across Africa.",
  url: "https://www.daniekeysstudios.com",
  email: "hello@daniekeysstudios.com",
  telephone: "+2349030909624",
  areaServed: ["Nigeria", "Africa"],
  sameAs: [
    "https://www.instagram.com/daniekeys_studios/",
    "https://www.linkedin.com/company/daniekeys-studios/",
    "https://www.youtube.com/@Danieskeys",
    "https://www.facebook.com/profile.php?id=61583310572575",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "30",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Script
        id="about-organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navigation />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  );
}
