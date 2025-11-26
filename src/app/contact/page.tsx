import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContactPageContent from "../../components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us - Daniekeys Studios | Get In Touch",
  description:
    "Ready to bring your creative vision to life? Contact Daniekeys Studios for motion graphics, branding, web development and digital marketing services. Based in Lagos, Nigeria.",
  keywords: [
    "contact creative agency Lagos",
    "motion graphics Nigeria contact",
    "branding services contact",
    "web development Lagos",
    "digital marketing contact Nigeria",
    "creative studio contact",
  ],
  openGraph: {
    title: "Contact Us - Daniekeys Studios",
    description:
      "Ready to transform your brand? Get in touch with Daniekeys Studios today.",
    type: "website",
    url: "https://daniekeys.studio/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main className="pt-20">
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  );
}
