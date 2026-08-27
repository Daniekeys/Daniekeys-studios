/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  // Legal pages moved to their sitemap paths (docs/revamp/02-SITEMAP-AND-PAGE-PLAN.md).
  // Keep the old flat URLs working for existing links / bookmarks.
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/legal/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/legal/terms-of-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
