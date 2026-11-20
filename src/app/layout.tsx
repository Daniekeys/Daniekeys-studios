import type { Metadata, Viewport } from "next";
import Script from "next/script";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const SITE = "https://www.daniekeysstudios.com";
const DESCRIPTION =
  "Daniekeys Studios is a brand, web and film studio from Nigeria. We turn ambitious businesses into brands the world takes seriously.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Daniekeys Studios | Brand, web and film studio",
    template: "%s | Daniekeys Studios",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Daniekeys Studios",
    description: DESCRIPTION,
    url: SITE,
    siteName: "Daniekeys Studios",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Daniekeys Studios", description: DESCRIPTION },
  alternates: { canonical: "/" },
  verification: { google: "j13HwmdDfAyxcRgD-X_KTTXJfqM2zKsNh1gRP0APgXc" },
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
