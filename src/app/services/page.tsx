import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ServicesPageContent from "../../components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services - Daniekeys Studios | Creative Digital Solutions",
  description:
    "Comprehensive creative services including motion graphics, branding, web development, social media marketing, video editing, and digital transformation for businesses across Africa.",
  keywords: [
    "motion graphics Lagos",
    "brand identity design Nigeria",
    "web development services",
    "social media marketing",
    "video editing Nigeria",
    "digital transformation",
    "creative agency Lagos",
    "business branding packages",
  ],
  openGraph: {
    title: "Services - Daniekeys Studios",
    description:
      "From motion graphics to web development - comprehensive creative digital solutions for your business.",
    type: "website",
    url: "https://daniekeys.studio/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main className="pt-20">
        <ServicesPageContent />
      </main>
      <Footer />
    </div>
  );
}
