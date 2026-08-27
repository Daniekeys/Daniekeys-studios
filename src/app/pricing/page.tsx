import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PricingPageContent from "../../components/PricingPageContent";

export const metadata: Metadata = {
  title:
    "Pricing — Daniekeys Studios | Brand Design, Web Dev & AI Services Nigeria",
  description:
    "Transparent pricing for branding, website development, motion graphics, AI chatbots, and digital marketing. Packages from ₦95,000. No hidden fees. Serving Nigeria and Africa.",
  keywords: [
    "digital agency pricing Nigeria",
    "branding cost Nigeria",
    "website design price Nigeria",
    "how much does branding cost Nigeria",
    "affordable digital agency Nigeria",
    "motion graphics cost Nigeria",
  ],
  alternates: {
    canonical: "https://www.daniekeysstudios.com/pricing",
  },
  openGraph: {
    title:
      "Pricing — Daniekeys Studios | Brand Design, Web Dev & AI Services Nigeria",
    description:
      "Transparent pricing for branding, website development, motion graphics, AI chatbots, and digital marketing. Packages from ₦95,000. No hidden fees.",
    type: "website",
    url: "https://www.daniekeysstudios.com/pricing",
  },
  robots: { index: true, follow: true },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Business Package — Daniekeys Studios",
  description:
    "Complete digital package including landing page website, social media designs, motion graphics, and brand kit.",
  offers: {
    "@type": "Offer",
    priceCurrency: "NGN",
    priceRange: "250000-650000",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Daniekeys Studios" },
  },
};

// Answer text mirrors the DRAFT answers rendered in PricingPageContent's FAQ
// accordion (kept in sync so the structured data matches the visible copy).
// Both are placeholders pending Daniel's real answers — see 00-OVERVIEW.md
// open items ("FAQ answer copy on the Services and Pricing pages"); confirm
// before launch.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is there a price range instead of a fixed price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project's final cost depends on complexity, number of pages/deliverables, and revision rounds — the range reflects standard scope so you can budget accurately before we confirm an exact number.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my project goes over scope?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We'll flag it before doing any extra work and agree on a fair additional cost together — no surprise invoices.",
      },
    },
    {
      "@type": "Question",
      name: "Are revisions included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — every package includes 2–3 rounds of revisions depending on the tier, detailed above.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start with a small package and upgrade later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely — many clients start with Starter and move to Business or a retainer as they grow.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for NGOs or nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — reach out and we'll discuss a scope that fits your budget.",
      },
    },
    {
      "@type": "Question",
      name: "What's the minimum project budget you'll take on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Starter Package begins at ₦95,000 — for anything smaller, let's talk and we'll see what's possible.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Script
        id="pricing-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="pricing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main className="">
        <PricingPageContent />
      </main>
      <Footer />
    </div>
  );
}
