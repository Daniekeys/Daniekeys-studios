import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ServicesPageContent from "../../components/ServicesPageContent";

export const metadata: Metadata = {
  title:
    "Our Services | Daniekeys Studios | Motion Ads, AI Video, Websites & Apps Nigeria",
  description:
    "Daniekeys Studios offers motion graphics ads, AI UGC videos, story and explainer videos, websites and apps, brand identity and social media management for businesses across Nigeria and Africa.",
  keywords: [
    "digital agency services Nigeria",
    "branding agency Nigeria",
    "AI agency services",
    "motion graphics Nigeria",
    "website design agency Nigeria",
    "AI UGC ads Nigeria",
    "brand identity design Lagos",
    "how much does a website cost in Nigeria",
    "best digital agency in Nigeria",
    "explainer video production Nigeria",
  ],
  alternates: {
    canonical: "https://www.daniekeysstudios.com/services",
  },
  openGraph: {
    title:
      "Our Services | Daniekeys Studios | Motion Ads, AI Video, Websites & Apps Nigeria",
    description:
      "From scroll-stopping video to websites that convert, we have the team, the tools and the track record to grow your business. Serving Nigeria and Africa.",
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
        itemOffered: { "@type": "Service", name: "Motion Graphics & Animated Ads" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Video: UGC Ads & Animation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Story & Explainer Videos" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website & App Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brand Identity & Graphics" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Media & Content Management" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Creative Training" },
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
        text: "Yes, we work with clients across Africa and internationally. You can pay through Wise, PayPal or direct bank transfer in USD, GBP, EUR or NGN.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take 1 to 10 weeks depending on scope. A Starter package is about 1 to 2 weeks, and a full Premium transformation is 6 to 10 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't like the first design concepts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project includes two full rounds of revisions, and we won't hand over final work until you're happy with it.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay in instalments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most projects are split 50% upfront and 50% on delivery. For bigger projects above ₦500,000 we can do a 3-stage payment plan.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer monthly retainers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Monthly Video & Content Plans give you a set number of videos and graphics every month. Have a look at the Pricing page.",
      },
    },
    {
      "@type": "Question",
      name: "What is an AI-powered studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It means AI is part of how we produce. We use it to make UGC ads, animation and motion content faster and cheaper than a traditional studio, while our team takes care of the story, the design and the final quality.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can you deliver a video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your first video is usually ready within 7 working days of a confirmed brief. If you need it sooner, rush delivery is available as an add-on.",
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
