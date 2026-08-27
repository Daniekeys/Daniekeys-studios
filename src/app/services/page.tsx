import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ServicesPageContent from "../../components/ServicesPageContent";

export const metadata: Metadata = {
  title:
    "Our Services — Daniekeys Studios | AI Strategy, Brand Design, Web Dev & Motion Graphics Nigeria",
  description:
    "Daniekeys Studios offers AI consulting, brand identity design, website development, motion graphics, AI chatbots, and digital marketing for businesses across Nigeria and Africa. Transparent pricing from ₦80,000.",
  keywords: [
    "digital agency services Nigeria",
    "branding agency Nigeria",
    "AI agency services",
    "motion graphics Nigeria",
    "website design agency Nigeria",
    "AI chatbot Nigeria",
    "brand identity design Lagos",
    "how much does a website cost in Nigeria",
    "best digital agency in Nigeria",
    "AI automation for small business Nigeria",
  ],
  alternates: {
    canonical: "https://www.daniekeysstudios.com/services",
  },
  openGraph: {
    title:
      "Our Services — Daniekeys Studios | AI Strategy, Brand Design, Web Dev Nigeria",
    description:
      "From brand identity to AI automation — we have the team, tools, and track record to grow your business. Serving Nigeria and Africa.",
    type: "website",
    url: "https://www.daniekeysstudios.com/services",
    siteName: "Daniekeys Studios",
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Organization", name: "Daniekeys Studios" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Agency Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Digital Strategy & Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brand Identity Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website Development" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motion Graphics & Video Production",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbots & Business Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing & Social Media",
        },
      },
    ],
  },
};

// Answer text mirrors the DRAFT answers rendered in ServicesPageContent's FAQ
// accordion (kept in sync so the structured data matches the visible copy).
// Both are placeholders pending Daniel's real answers — see 00-OVERVIEW.md
// open items; confirm before launch.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with businesses outside Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work with clients across Africa and internationally. We accept payment via Wise, PayPal, and direct bank transfer in USD, GBP, EUR, and NGN.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take 1–10 weeks depending on scope — a Starter package is 1–2 weeks, a full Premium transformation is 6–10 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't like the first design concepts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project includes two full rounds of revisions. We don't submit final work until you're happy with it.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay in instalments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most projects use a 50% upfront / 50% on delivery split. Larger projects above ₦500,000 can use a 3-stage payment plan.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer monthly retainers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — see our Retainer plans on the Pricing page for ongoing content, marketing, and AI automation support.",
      },
    },
    {
      "@type": "Question",
      name: "What is an AI-powered agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It means AI isn't a buzzword we mention — it's built into how we deliver: from AI content pipelines to chatbot automation, we use AI to work faster and smarter for you.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Script
        id="services-service-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main className="">
        <ServicesPageContent />
      </main>
      <Footer />
    </div>
  );
}
