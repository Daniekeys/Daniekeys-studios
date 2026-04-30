import Chatbot from "@/components/Chatbot";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.daniekeysstudios.com/"),

  title:
    "Daniekeys Studios - Premium Creative Studio | Motion Graphics & Web Design",
  description:
    "Award-winning creative studio based in Ilorin, Kwara State, specializing in motion graphics, website development, branding, and digital marketing. We create cinematic visuals and cutting-edge digital experiences for world-class brands.",
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
    "creative services Ilorin",
    "creative agency Kwara State",
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
        url: "/images/logos/logo-alone.png",
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
      "Where creativity meets technology. Premium motion graphics, branding, and digital experiences.",
    creator: "@daniekeys",
    site: "@daniekeys",
    images: {
      url: "/images/logos/logo-alone.png",
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
    google: "google15ceedf174cb66b0",
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
        <meta
          name="google-site-verification"
          content="j13HwmdDfAyxcRgD-X_KTTXJfqM2zKsNh1gRP0APgXc"
        />
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
              logo: "https://www.daniekeysstudios.com/images/logos/logo-alone.png",
              description:
                "Premium creative studio specializing in motion graphics, website development, branding, and digital marketing.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "NG",
                addressRegion: "Kwara State",
                addressLocality: "Ilorin",
              },
              sameAs: [
                "https://www.linkedin.com/company/daniekeys-studios/about/",
                "https://www.facebook.com/profile.php?id=61583310572575",
                "https://www.instagram.com/daniekeys_studios/",
                "https://www.youtube.com/@Danieskeys",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Business Inquiry",
                url: "https://www.daniekeysstudios.com/contact",
              },
            }),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Daniekeys Studios",
              description:
                "Creative studio offering motion graphics, web design, branding, and digital marketing services based in Ilorin, Kwara State",
              url: "https://www.daniekeysstudios.com/",
              image:
                "https://www.daniekeysstudios.com/images/logos/logo-alone.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ilorin",
                addressLocality: "Ilorin",
                addressRegion: "Kwara State",
                postalCode: "",
                addressCountry: "NG",
              },
              priceRange: "$$",
              areaServed: ["NG", "US", "UK", "CA"],
              serviceType: [
                "Motion Graphics",
                "Web Design",
                "Branding",
                "Digital Marketing",
                "Video Production",
              ],
            }),
          }}
        />
      </head>
      <body className="font-neue-montreal antialiased text-white">
        {children}

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
