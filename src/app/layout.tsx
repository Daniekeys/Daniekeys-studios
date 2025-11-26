import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniekeys Studios - Where Creativity Meets Technology",
  description:
    "Premium creative studio specializing in motion graphics, website development, branding, and digital marketing. Cinematic visuals and cutting-edge technology for world-class brands.",
  keywords: [
    "creative studio",
    "motion graphics",
    "website development",
    "branding",
    "digital marketing",
    "video production",
    "creative agency",
    "premium design",
    "technology",
    "visual storytelling",
  ],
  authors: [{ name: "Daniekeys Studios" }],
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
    title: "Daniekeys Studios - Where Creativity Meets Technology",
    description:
      "Premium creative studio creating cinematic visuals and cutting-edge digital experiences for world-class brands.",
    images: ["/images/logos/logo-alone.png"],
    type: "website",
    siteName: "Daniekeys Studios",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniekeys Studios - Premium Creative Studio",
    description:
      "Where creativity meets technology. Premium motion graphics, branding, and digital experiences.",
    images: ["/images/logos/logo-alone.png"],
    creator: "@daniekeys",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#111111",
  category: "creative-services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-neue-montreal antialiased">
        {children}

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
