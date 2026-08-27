import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContactPageContent from "../../components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Daniekeys Studios — Book a Free Discovery Call | Nigeria's AI Digital Agency",
  description:
    "Get in touch with Daniekeys Studios to discuss your branding, website, motion graphics, or AI project. Free discovery call. Response within 24 hours. Serving Nigeria and Africa.",
  alternates: {
    canonical: "https://www.daniekeysstudios.com/contact",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Daniekeys Studios — Book a Free Discovery Call",
    description:
      "Get in touch to discuss your branding, website, or AI project. Free discovery call. Response within 24 hours.",
    type: "website",
    url: "https://www.daniekeysstudios.com/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Daniekeys Studios",
  description:
    "Contact form for project enquiries, discovery call bookings, and service information.",
  url: "https://www.daniekeysstudios.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Daniekeys Studios",
    telephone: "+2349030909624",
    email: "hello@daniekeysstudios.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2349030909624",
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "NG",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <div className="min-h-screen bg-primary">
        <Navigation />
        <main className="">
          <ContactPageContent />
        </main>
        <Footer />
      </div>
    </>
  );
}
