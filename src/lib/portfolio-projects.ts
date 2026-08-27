// The 6 real Daniekeys Studios projects per docs/revamp/22-PAGE-portfolio.md.
// No invented project names beyond these. `categories[0]` is the tag shown on
// the card; the full array drives the client-side filter (My Lang Coach and
// Buymejollof are video work, so they carry a secondary "Motion" tag — this is
// the "dual-tag filter" the spec allows, and keeps the Motion tab from being
// empty).
//
// Images are fresh presentation/mockup-style stock per
// docs/revamp/03-IMAGE-SOURCING-GUIDE.md — NOT real client screenshots, and
// NOT reused from /public/images/samples/ or any live-site asset. The four
// client projects share the same Unsplash sources as the landing
// FeaturedWorkSection so a given project reads as the same project across the
// site; the two non-client entries use their own fresh sources. Hot-linked for
// the build pass — localise under /public/images/ before launch.

export interface PortfolioProject {
  slug: string;
  title: string;
  categories: string[];
  image: string;
  imageAlt: string;
  blurb: string;
}

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Branding",
  "Motion",
  "Web",
  "Marketing",
] as const;

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "afriment-brand-identity-system",
    title: "Afriment — Brand Identity System",
    categories: ["Branding"],
    image:
      "https://images.unsplash.com/photo-1717994818194-5760d533cab6?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Brand identity presentation — logo, colour, and type system laid out on a studio wall",
    blurb:
      "A full identity system — logo suite, colour, typography, and usage rules — built to give Afriment a confident, consistent presence across every touchpoint.",
  },
  {
    slug: "candexa-visual-identity-rebrand",
    title: "Candexa — Visual Identity Rebrand",
    categories: ["Branding"],
    image:
      "https://images.unsplash.com/photo-1695634281254-e94a29d234c0?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Rebrand presentation — refreshed logo and brand collateral arranged on a desk",
    blurb:
      "A strategic rebrand that kept what made Candexa recognisable and modernised everything else — a sharper mark, a tighter palette, and a system that scales.",
  },
  {
    slug: "my-lang-coach-promotional-video-series",
    title: "My Lang Coach — Promotional Video Series",
    categories: ["Marketing", "Motion"],
    image:
      "https://images.unsplash.com/photo-1635360381874-edd74cbd57f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Motion design frames from a promotional video series shown on screen",
    blurb:
      "A run of short promotional videos built for the feed — hook in the first second, one clear message each, cut for sound-off viewing.",
  },
  {
    slug: "buymejollof-brand-launch-video",
    title: "Buymejollof — Brand Launch Video",
    categories: ["Marketing", "Motion"],
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Video production still framed as a brand launch film presentation",
    blurb:
      "A launch film that introduced Buymejollof with energy and warmth — brand story, product, and call to action in under sixty seconds.",
  },
  {
    slug: "digital-commerce-website",
    title: "Digital Commerce Website",
    categories: ["Web"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Website design shown on a desktop screen in a low-lit studio workspace",
    blurb:
      "A mobile-first commerce site designed around one goal — turning visitors into customers — with SEO foundations and a CMS the client can run themselves.",
  },
  {
    slug: "launch-campaign-system",
    title: "Launch Campaign System",
    categories: ["Marketing"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Marketing analytics dashboard on a laptop, used as a campaign presentation shot",
    blurb:
      "An end-to-end launch system — content calendar, paid social, email sequence, and a single analytics view so every channel is accountable to the same numbers.",
  },
];

export function getPortfolioProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}
