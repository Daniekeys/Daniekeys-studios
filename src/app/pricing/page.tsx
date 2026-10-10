import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PricingPageContent from "../../components/PricingPageContent";

export const metadata: Metadata = {
  title:
    "Pricing - Daniekeys Studios | Brand Design, Web Dev & AI Services Nigeria",
  description:
    "Clear pricing for websites and apps, monthly video and content plans, and one-off video projects. Packages from ₦95,000 with no hidden fees, for clients in Nigeria and across Africa.",
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
      "Pricing - Daniekeys Studios | Brand Design, Web Dev & AI Services Nigeria",
    description:
      "Clear pricing for websites and apps, monthly video and content plans, and one-off video projects. Packages from ₦95,000 with no hidden fees.",
    type: "website",
    url: "https://www.daniekeysstudios.com/pricing",
  },
  robots: { index: true, follow: true },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Business Package - Daniekeys Studios",
  description:
    "A complete digital package with a landing page website, social media designs, motion graphics and a brand kit.",
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
        text: "The final cost of a project depends on how complex it is, how many pages or deliverables it has and how many revision rounds you need. The range covers standard scope, so you can budget before we confirm an exact number.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my project goes over scope?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We'll tell you before doing any extra work and agree on a fair extra cost together. No surprise invoices.",
      },
    },
    {
      "@type": "Question",
      name: "Are revisions included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every package includes 2 to 3 rounds of revisions depending on the tier, as listed above.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start with a small package and upgrade later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Plenty of clients start with Starter and move up to Business or a retainer as they grow.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for NGOs or nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have dedicated NGO rates for monthly content and storytelling. Just reach out and we'll share them.",
      },
    },
    {
      "@type": "Question",
      name: "What's the minimum project budget you'll take on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Starter Package begins at ₦95,000 and single videos start at ₦150,000. If your budget is smaller than that, let's talk anyway.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch between monthly plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After your first 3 months you can move up or down a plan at the end of any month.",
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
