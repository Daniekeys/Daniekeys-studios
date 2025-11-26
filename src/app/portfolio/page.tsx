import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PortfolioPageContent from "../../components/PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio - Daniekeys Studios | Our Creative Work",
  description:
    "Explore our portfolio of motion graphics, branding, web development, and digital marketing projects. See how we've helped brands across Nigeria and Africa transform their digital presence.",
  keywords: [
    "creative portfolio Lagos",
    "motion graphics portfolio Nigeria",
    "branding case studies",
    "web development portfolio",
    "digital marketing results",
    "creative agency work Nigeria",
  ],
  openGraph: {
    title: "Portfolio - Daniekeys Studios",
    description:
      "Discover our creative work across motion graphics, branding, web development and digital marketing.",
    type: "website",
    url: "https://daniekeys.studio/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main className="pt-20">
        <PortfolioPageContent />
      </main>
      <Footer />
    </div>
  );
}
