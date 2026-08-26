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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens after I fill in the form?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A real person (not a bot) will read your project details and send you a personalised response within 24 hours. If your project is urgent, mention it and we'll prioritise your reply.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to know exactly what I want before reaching out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Many of our best clients came to us saying \"I know I need help, I'm just not sure with what.\" We'll ask the right questions on the discovery call and figure it out together.",
      },
    },
    {
      "@type": "Question",
      name: "Is the discovery call really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely. It's a 30-minute conversation — no agenda except understanding your business. We don't charge for the call, and there's no obligation to hire us afterwards.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a proposal after the call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver a written proposal within 48 hours of your discovery call. It includes a clear scope, timeline, and final price — no vague estimates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign NDAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We're happy to sign a mutual NDA before sharing sensitive business information. Just let us know when you reach out.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
