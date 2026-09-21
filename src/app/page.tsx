
import DaniekeysstudiosLandingPage from "./components/DaniekeysstudiosLandingPage";
import type { Metadata } from "next";
//import Script from "next/script";

export default function Home(){
  return <DaniekeysstudiosLandingPage />;
  }

export const metadata: Metadata = {
  title:
    "Daniekeys Studios — AI-Powered Digital Agency in Nigeria | Brand Design, Web & AI Automation",
  description:
    "Daniekeys Studios is Nigeria's leading AI-powered digital agency. We help ambitious brands with professional web design, brand identity, motion graphics, and AI automation. Serving Nigeria and Africa.",
  keywords:
    "digital agency Nigeria, AI agency Nigeria, branding agency Nigeria, web design Nigeria, motion graphics Nigeria, AI automation Nigeria, brand identity Lagos, website design Nigeria",
  alternates: {
    canonical: "https://www.daniekeysstudios.com/",
  },
  openGraph: {
    title: "Daniekeys Studios — Africa's AI-Powered Digital Agency",
    description:
      "From brand identity to AI automation — we help African businesses build brands that convert, scale, and dominate their market.",
    url: "https://www.daniekeysstudios.com/",
    siteName: "Daniekeys Studios",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniekeys Studios AI-powered digital agency",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};



