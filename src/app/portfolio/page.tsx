import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PortfolioPageContent from "../../components/PortfolioPageContent";
import { portfolioProjects } from "../../lib/portfolio-projects";

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

// Mirrors the 6 real projects rendered by PortfolioPageContent (single source
// in lib/portfolio-projects.ts) so the structured data can't drift from the
// visible grid.
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Daniekeys Studios Portfolio",
  description:
    "Creative and AI projects across branding, motion graphics, web development, and digital marketing",
  itemListElement: portfolioProjects.map((project, index) => ({
    "@type": "CreativeWork",
    position: index + 1,
    name: project.title,
    description: project.blurb,
    url: `https://www.daniekeysstudios.com/portfolio/${project.slug}`,
    creator: { "@type": "Organization", name: "Daniekeys Studios" },
  })),
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Script
        id="portfolio-organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="portfolio-itemlist-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <Navigation />
      <main className="">
        <PortfolioPageContent />
      </main>
      <Footer />
    </div>
  );
}
