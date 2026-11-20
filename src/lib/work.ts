import { film, image, type Media } from "./media";

export type Industry = "food" | "edu" | "mkt" | "creative" | "fin";
export type Service = "brand" | "web" | "motion" | "social";

export const INDUSTRIES: { value: Industry; label: string; menu: string }[] = [
  { value: "food", label: "Food and drink", menu: "food and drink" },
  { value: "edu", label: "Education and careers", menu: "education and careers" },
  { value: "mkt", label: "Marketing tech", menu: "marketing tech" },
  { value: "creative", label: "Creative services", menu: "creative services" },
  { value: "fin", label: "Finance", menu: "finance" },
];

export const SERVICES: { value: Service; label: string; menu: string }[] = [
  { value: "brand", label: "Brand identity", menu: "brand identities" },
  { value: "web", label: "Websites", menu: "websites" },
  { value: "motion", label: "Film and motion", menu: "film and motion" },
  { value: "social", label: "Social and content", menu: "social and content" },
];

export const industryLabel = (v: Industry) => INDUSTRIES.find((i) => i.value === v)!.label;
export const serviceLabel = (v: Service) => SERVICES.find((s) => s.value === v)!.label;

export type WorkItem = {
  title: string;
  blurb: string;
  media: Media;
  thumb: string; // small image for the Index view
  wide: boolean; // 16:9 full row, otherwise a 4:5 half
  industry: Industry;
  service: Service;
  concept?: boolean; // studio concept, not a paying client
  caseStudy?: string; // slug under /work, only where a case study exists
  year: number;
};

const T = (name: string, alt: string) => image(name, alt);

export const WORK: WorkItem[] = [
  {
    title: "Tej's Bakes",
    blurb: "A warm, grown-up identity for a cake and pastry kitchen. Made for the moment.",
    media: film("tejs-reel", "Tej's Bakes brand reel"),
    thumb: "tejs-reel-poster",
    wide: true, industry: "food", service: "brand", caseStudy: "tejs-bakes", year: 2026,
  },
  {
    title: "Afriment",
    blurb: "Rebrand for a platform that turns trained talent into hired talent.",
    media: T("afriment-cover", "Afriment"),
    thumb: "afriment-cover",
    wide: false, industry: "edu", service: "brand", caseStudy: "afriment", year: 2026,
  },
  {
    title: "Tandari",
    blurb: "An AI creator marketing studio, branded loud and local.",
    media: T("tandari-cover", "Tandari"),
    thumb: "tandari-cover",
    wide: false, industry: "mkt", service: "brand", concept: true, caseStudy: "tandari", year: 2026,
  },
  {
    title: "Daniekeys Studios",
    blurb: "Our own rebrand. Two values, one grey and the arrow-key d.",
    media: T("daniekeys-cover", "Daniekeys Studios"),
    thumb: "daniekeys-cover",
    wide: true, industry: "creative", service: "brand", caseStudy: "daniekeys-studios", year: 2026,
  },
  {
    title: "Tej's Bakes, launch posts",
    blurb: "Five posts for launch week.",
    media: T("tejs-launch-posts", "Tej's Bakes, launch posts"),
    thumb: "tejs-launch-posts",
    wide: false, industry: "food", service: "social", caseStudy: "tejs-bakes", year: 2026,
  },
  {
    title: "Tandari, product screens",
    blurb: "The brief writer and creator match on mobile.",
    media: T("tandari-product-screens", "Tandari, product screens"),
    thumb: "tandari-product-screens",
    wide: false, industry: "mkt", service: "web", concept: true, caseStudy: "tandari", year: 2026,
  },
  {
    title: "Afriment, website",
    blurb: "A homepage that speaks to talent and to hiring teams.",
    media: T("afriment-website", "Afriment, website"),
    thumb: "afriment-website",
    wide: true, industry: "edu", service: "web", caseStudy: "afriment", year: 2026,
  },
  {
    title: "Tej's Bakes, stationery",
    blurb: "The cover on card stock, ready for every order.",
    media: T("tejs-stationery", "Tej's Bakes, stationery"),
    thumb: "tejs-stationery",
    wide: false, industry: "food", service: "brand", caseStudy: "tejs-bakes", year: 2026,
  },
  {
    title: "Daniekeys Studios, out of home",
    blurb: "The ambition line, lit up at night.",
    media: T("daniekeys-ooh", "Daniekeys Studios, out of home"),
    thumb: "daniekeys-ooh",
    wide: false, industry: "creative", service: "brand", caseStudy: "daniekeys-studios", year: 2026,
  },
  {
    title: "Tandari, brand film",
    blurb: "Bring your people. A loud, local launch film.",
    media: film("tandari-film", "Tandari, brand film"),
    thumb: "tandari-film-poster",
    wide: true, industry: "mkt", service: "motion", concept: true, caseStudy: "tandari", year: 2026,
  },
  {
    title: "Afriment, social",
    blurb: "A simple three-step story for every cohort.",
    media: T("afriment-social", "Afriment, social"),
    thumb: "afriment-social",
    wide: false, industry: "edu", service: "social", caseStudy: "afriment", year: 2026,
  },
  {
    title: "Tej's Bakes, how to order",
    blurb: "Three steps, one DM.",
    media: T("tejs-how-to-order", "Tej's Bakes, how to order"),
    thumb: "tejs-how-to-order",
    wide: false, industry: "food", service: "social", caseStudy: "tejs-bakes", year: 2026,
  },
  {
    title: "Daniekeys Studios, merch",
    blurb: "The mark, small and quiet, on black.",
    media: T("daniekeys-merch", "Daniekeys Studios, merch"),
    thumb: "daniekeys-merch",
    wide: false, industry: "creative", service: "brand", caseStudy: "daniekeys-studios", year: 2026,
  },
  {
    title: "Tandari, launch posts",
    blurb: "Pidgin first, bright and fast.",
    media: T("tandari-launch-posts", "Tandari, launch posts"),
    thumb: "tandari-launch-posts",
    wide: false, industry: "mkt", service: "social", concept: true, caseStudy: "tandari", year: 2026,
  },
  {
    title: "Ire, launch film",
    blurb: "Good money moves. A Lagos money app, launched with a 40-second brand film.",
    media: film("ire-launch", "Ire, launch film"),
    thumb: "ire-launch-poster",
    wide: true, industry: "fin", service: "motion", concept: true, caseStudy: "ire", year: 2026,
  },
  {
    title: "Ire, product film",
    blurb: "Tap. Paid. A dark, cinematic app launch film for the Ire money app.",
    media: film("ire-product", "Ire, product film"),
    thumb: "ire-product-poster",
    wide: true, industry: "fin", service: "motion", concept: true, caseStudy: "ire", year: 2026,
  },
  {
    title: "Tej's Bakes, logo system",
    blurb: "Wordmark, seal and rosette, on every colour in the palette.",
    media: T("tejs-logo-system", "Tej's Bakes, logo system"),
    thumb: "tejs-logo-system",
    wide: true, industry: "food", service: "brand", caseStudy: "tejs-bakes", year: 2026,
  },
  {
    title: "Tej's Bakes, small chops",
    blurb: "The party starts here.",
    media: T("tejs-small-chops", "Tej's Bakes, small chops"),
    thumb: "tejs-small-chops",
    wide: false, industry: "food", service: "social", caseStudy: "tejs-bakes", year: 2026,
  },
  {
    title: "Tej's Bakes, wedding cakes",
    blurb: "Say yes to the cake.",
    media: T("tejs-wedding-cakes", "Tej's Bakes, wedding cakes"),
    thumb: "tejs-wedding-cakes",
    wide: false, industry: "food", service: "social", caseStudy: "tejs-bakes", year: 2026,
  },
];
