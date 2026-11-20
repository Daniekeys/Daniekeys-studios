/** @type {import('next').NextConfig} */
const nextConfig = {
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
