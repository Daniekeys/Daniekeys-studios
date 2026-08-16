import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PricingSection from "../../components/PricingSection";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is there a price range instead of a fixed price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because every project is different. A logo for a solo coach and a logo for a 50-person company have very different requirements. Ranges let you know the ballpark — your exact quote is confirmed before we start, with full itemisation.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my project goes over scope?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We agree on scope before we begin. If you request additions beyond the agreed brief, we'll send a change request with the cost — no surprises, no invoice shock.",
      },
    },
    {
      "@type": "Question",
      name: "Are revisions included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Starter includes 2 rounds. Business includes 2 rounds. Premium includes 3 rounds. Retainer clients have unlimited minor revisions on monthly deliverables.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start with a small package and upgrade later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely — and many of our best long-term clients started with the Starter Package. All previous work is considered when upgrading so we build on it, not restart.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for NGOs or nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we offer 15% discounts for registered NGOs and community organisations. Mention this when you contact us.",
      },
    },
    {
      "@type": "Question",
      name: "What's the minimum project budget you'll take on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our minimum project value is ₦45,000 (single logo design). For new clients, we recommend the Starter Package at ₦95,000+ to get meaningful results.",
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
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
