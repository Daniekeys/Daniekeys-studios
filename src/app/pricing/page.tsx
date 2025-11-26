import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PricingSection from "../../components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing - Daniekeys Studios | Transparent Digital Service Pricing",
  description:
    "Transparent pricing for motion graphics, web development, branding, and digital marketing services. Choose from our comprehensive packages or individual services.",
  keywords:
    "pricing, motion graphics cost, website development pricing, branding packages, digital marketing prices, Lagos Nigeria",
  openGraph: {
    title: "Pricing - Daniekeys Studios",
    description:
      "Transparent pricing for motion graphics, web development, branding, and digital marketing services.",
    type: "website",
    url: "https://daniekeys.studio/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main className="pt-20">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
