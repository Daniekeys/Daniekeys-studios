import type { MetadataRoute } from "next";

import { CASE_STUDIES } from "@/lib/case-studies";

const BASE = "https://www.daniekeysstudios.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/services", "/studio", "/journal", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${BASE}${p}`, lastModified: new Date() })),
    ...CASE_STUDIES.map((c) => ({ url: `${BASE}/work/${c.slug}`, lastModified: new Date() })),
  ];
}
