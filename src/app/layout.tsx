import type { Metadata, Viewport } from "next";
import Script from "next/script";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ENTITY, SITE_URL, SOCIAL } from "@/lib/site";

import "./globals.css";

const SITE = SITE_URL;
const TITLE = "Daniekeys Studios | Branding, Video and Websites That Sell";
const DESCRIPTION =
  "AI-powered branding, video editing, motion, flyers, websites, UI/UX and social media management from Nigeria. We study your market first, then build creative that brings you customers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s | Daniekeys Studios",
  },
  description: DESCRIPTION,
  keywords: [
    "branding agency in Nigeria",
    "brand identity design Nigeria",
    "logo design Nigeria",
    "AI video production Nigeria",
    "video editing Nigeria",
    "motion graphics studio Africa",
    "AI video ads",
    "flyer design Nigeria",
    "graphic design Lagos",
    "website design Nigeria",
    "website design Lagos",
    "UI/UX design agency Nigeria",
    "app design Nigeria",
    "social media management Nigeria",
    "creative agency Lagos",
    "remote creative studio",
    "product launch video",
  ],
  applicationName: "Daniekeys Studios",
  authors: [{ name: "Daniekeys Studios", url: SITE }],
  creator: "Daniekeys Studios",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    siteName: "Daniekeys Studios",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1 } },
  verification: { google: "j13HwmdDfAyxcRgD-X_KTTXJfqM2zKsNh1gRP0APgXc" },
};

// Organisation and website structured data, on every page.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#org`,
      name: "Daniekeys Studios",
      url: SITE,
      logo: `${SITE}/brand/daniekeys-studios.png`,
      image: `${SITE}/brand/daniekeys-studios.png`,
      description: ENTITY,
      slogan: "Press forward.",
      email: "daniel@daniekeysstudios.com",
      telephone: "+2349030909624",
      address: { "@type": "PostalAddress", addressCountry: "NG" },
      areaServed: ["Nigeria", "United Arab Emirates", "United Kingdom", "Europe", "United States", "Africa"],
      priceRange: "₦20,000 - ₦1,200,000",
      founder: { "@type": "Person", name: "Daniel Ayeni" },
      knowsAbout: [
        "Brand identity",
        "Logo design",
        "AI video production",
        "Video editing",
        "Motion graphics",
        "Graphic design",
        "Flyer design",
        "Website design",
        "UI/UX design",
        "Social media management",
        "Marketing strategy",
      ],
      sameAs: SOCIAL.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Daniekeys Studios",
      publisher: { "@id": `${SITE}/#org` },
      inLanguage: "en",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F3EF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300..600&family=Geist+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,200..400&display=swap"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        <div className="dk">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-B2RXRGTT8S" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-B2RXRGTT8S');`}
        </Script>
      </body>
    </html>
  );
}
