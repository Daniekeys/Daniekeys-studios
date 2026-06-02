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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with businesses outside Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We work with clients across Africa and internationally. Our entire process is remote-ready — strategy, design, revisions, and delivery all happen seamlessly online. We've delivered projects to clients in the UK, US, and across West Africa.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brand identity: 2–3 weeks. Website: 3–5 weeks. Full rebrand + website: 6–8 weeks. Motion graphics: 1–2 weeks per video. AI automation setup: 2–4 weeks. Timelines are always confirmed in your proposal before we start.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't like the first design concepts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project includes two rounds of revisions as standard. If we're still not aligned after that, we'll have an honest conversation about why — and find a solution. We've never delivered a project a client wasn't happy with.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay in instalments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We typically work on a 50% upfront, 50% on completion structure. For larger projects, we can discuss a 3-stage payment plan.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer monthly retainers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — digital marketing, social media management, AI maintenance, and content production are all available as monthly retainers. Most retainer clients start from ₦120,000/month. Contact us to discuss what a retainer looks like for your business.",
      },
    },
    {
      "@type": "Question",
      name: "What is an AI-powered agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI-powered agency uses artificial intelligence tools to deliver better, faster, and more scalable results. At Daniekeys Studios, our founder is an AI engineer. That means we use AI for content generation, strategy analysis, chatbot deployment, design assistance, and performance analytics — passing the time and cost savings directly to our clients.",
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
      <main className="pt-[83px]">
        <ServicesPageContent />
      </main>
      <Footer />
    </div>
  );
}
