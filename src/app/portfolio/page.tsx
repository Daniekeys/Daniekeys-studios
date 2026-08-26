import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PortfolioPageContent from "../../components/PortfolioPageContent";

export const metadata: Metadata = {
  title:
    "Our Portfolio — Daniekeys Studios | Brand Identity, Web Design & Motion Graphics Nigeria",
  description:
    "Browse Daniekeys Studios' portfolio of branding, web development, motion graphics, and AI projects across Nigeria and Africa. Real work, real results, real clients.",
  keywords: [
    "creative portfolio Nigeria",
    "branding portfolio Nigeria",
    "digital agency portfolio",
    "best branding work Nigeria",
    "motion graphics examples Nigeria",
    "website design examples Nigeria",
    "brand identity Nigeria",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.daniekeysstudios.com/portfolio",
  },
  openGraph: {
    title:
      "Our Portfolio — Daniekeys Studios | Brand Identity, Web Design & Motion Graphics Nigeria",
    description:
      "Browse Daniekeys Studios' portfolio of branding, web development, motion graphics, and AI projects across Nigeria and Africa.",
    type: "website",
    url: "https://www.daniekeysstudios.com/portfolio",
  },
  other: {
    "theme-color": "#111111",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Daniekeys Studios",
  url: "https://www.daniekeysstudios.com",
  logo: "https://www.daniekeysstudios.com/images/logos/daniekeys-logo.png",
  sameAs: [
    "https://www.instagram.com/daniekeys_studios/",
    "https://www.linkedin.com/company/daniekeys-studios/",
    "https://www.youtube.com/@Danieskeys",
    "https://www.facebook.com/profile.php?id=61583310572575",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2349030909624",
    contactType: "customer service",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Daniekeys Studios Portfolio",
  description:
    "Creative and AI projects across branding, web development, motion graphics, and digital marketing",
  itemListElement: [
    {
      "@type": "CreativeWork",
      position: 1,
      name: "Afriment Website Design & Development",
      description:
        "Website design and development for Afriment's internship platform",
      creator: { "@type": "Organization", name: "Daniekeys Studios" },
    },
    {
      "@type": "CreativeWork",
      position: 2,
      name: "Candexa Website Design",
      description: "Clean, modern website design for Candexa",
      creator: { "@type": "Organization", name: "Daniekeys Studios" },
    },
    {
      "@type": "CreativeWork",
      position: 3,
      name: "My Lang Coach Website Design",
      description:
        "Website design for My Lang Coach's language learning platform",
      creator: { "@type": "Organization", name: "Daniekeys Studios" },
    },
    {
      "@type": "CreativeWork",
      position: 4,
      name: "Buymejollof Website Design",
      description: "Website design for Buymejollof's platform",
      creator: { "@type": "Organization", name: "Daniekeys Studios" },
    },
  ],
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <Navigation />
      <main className="pt-20">
        <PortfolioPageContent />
      </main>
      <Footer />
    </div>
  );
}
