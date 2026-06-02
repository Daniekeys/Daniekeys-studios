import Chatbot from "@/components/Chatbot";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.daniekeysstudios.com/"),

  title:
    "Daniekeys Studios — Daniekeys Studios | AI Digital Strategy, Branding & Web Nigeria",
  description:
    "Daniekeys Studios is Africa's AI-powered digital agency for brand identity, web development, motion graphics, and automation in Nigeria.",
  keywords: [
    "creative studio Nigeria",
    "motion graphics agency",
    "website development",
    "branding agency",
    "digital marketing",
    "video production",
    "creative agency Nigeria",
    "premium design services",
    "visual storytelling",
    "web design",
    "UI/UX design",
    "digital transformation",
    "AI agency Nigeria",
    "AI automation Nigeria",
  ],
  authors: [{ name: "Daniekeys Studios" }],
  creator: "Daniekeys Studios",
  publisher: "Daniekeys Studios",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: "/images/logos/logo-alone.png",
    shortcut: "/images/logos/logo-alone.png",
    apple: "/images/logos/logo-alone.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/logos/logo-alone.png",
    },
  },
  openGraph: {
    title: "Daniekeys Studios - Premium Creative Studio",
    description:
      "Premium creative studio creating cinematic visuals and cutting-edge digital experiences for world-class brands.",
    url: "https://www.daniekeysstudios.com/",
    siteName: "Daniekeys Studios",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.daniekeysstudios.com/images/logos/daniekeys-logo.png",
        width: 1200,
        height: 630,
        alt: "Daniekeys Studios Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniekeys Studios - Premium Creative Studio",
    description:
      "AI engineering + creative excellence + growth strategy - all in one studio.",
    creator: "@daniekeys",
    site: "@daniekeys",
    images: {
      url: "https://www.daniekeysstudios.com/images/logos/daniekeys-logo.png",
      alt: "Daniekeys Studios",
    },
  },
  alternates: {
    canonical: "https://www.daniekeysstudios.com/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "j13HwmdDfAyxcRgD-X_KTTXJfqM2zKsNh1gRP0APgXc",
  },
  category: "creative-services",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Daniekeys Studios",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Daniekeys Studios",
              url: "https://www.daniekeysstudios.com/",
              logo:
                "https://www.daniekeysstudios.com/images/logos/daniekeys-logo.png",
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
            }),
          }}
        />
      </head>
      <body className="font-neue-montreal antialiased text-white">
        {children}
        <Toaster position="top-right" richColors />

        <Chatbot />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-B2RXRGTT8S`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B2RXRGTT8S');
          `}
        </Script>
      </body>
    </html>
  );
}
