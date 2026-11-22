/** @type {import('next').NextConfig} */
const nextConfig = {
  // Brand websites we built live in public/sites/<slug>/ and open full screen here.
  async rewrites() {
    return [{ source: "/work/:slug/site", destination: "/sites/:slug/index.html" }];
  },
  async headers() {
    return [
      { source: "/sites/:slug/:dir(img|fonts|vendor)/:file*", headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }] },
    ];
  },
  // Old URLs from the previous site point at their new homes.
  async redirects() {
    return [
      { source: "/about", destination: "/studio", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/portfolio/:slug*", destination: "/work", permanent: true },
      { source: "/showreel", destination: "/work", permanent: true },
      { source: "/pricing", destination: "/services", permanent: true },
      { source: "/privacy", destination: "/", permanent: false },
      { source: "/terms", destination: "/", permanent: false },
      { source: "/legal/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
