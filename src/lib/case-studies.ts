import { film, image, type Media } from "./media";

// A case study page. Add the next one (Afriment, Tandari, Ire...) as a new
// entry here; /work/[slug] builds it with the same layout.
//
// Gallery blocks render top to bottom: "full" is one 16:10 frame, "pair" two
// 4:5 frames, "trio" three 4:5 frames, "line" a big centred sentence.
export type Block =
  | { type: "full"; media: Media }
  | { type: "pair"; media: [Media, Media] }
  | { type: "trio"; media: [Media, Media, Media] }
  | { type: "line"; text: string };

export type CaseStudy = {
  slug: string;
  title: string;
  kind: "Client" | "Studio concept";
  industry: string;
  year: number;
  intro: string;
  hero: Media;
  heroBg: string;
  services: string;
  team: string;
  brief: string;
  challenge: string;
  approach: string;
  // Only real results, and only once the client has said yes. Left out until then.
  result?: string;
  gallery: Block[];
  credits: { role: string; name: string }[];
  next: { title: string; href: string; media: Media };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tejs-bakes",
    title: "Tej's Bakes",
    kind: "Client",
    industry: "Food and drink",
    year: 2026,
    intro:
      "A warm, grown-up identity for a cake and pastry kitchen, built to look as good on a wedding table as it does in a DM.",
    hero: film("tejs-reel", "Tej's Bakes brand reel"),
    heroBg: "#3A1E1A",
    services: "Strategy, brand identity, social, brand reel",
    team: "Daniel Ayeni, John",
    brief:
      "Tej's makes cakes for birthdays, weddings and every small win in between, plus pastries and small chops. The business had grown on word of mouth and needed a brand that felt as special as the cakes.",
    challenge:
      "Bakery branding is crowded with the same pastel script logos. Tej needed something warm and personal that still looked like a proper business, from the WhatsApp catalogue to the box on the table.",
    approach:
      "We built it around the moment itself. A warm serif wordmark with a rosette and a candle flame tucked into the j, a scalloped seal, a chocolate drip that frames posts and packaging, and a palette named after the table: Zobo Red, Cocoa, Vanilla Cream, Butter, Chin Chin Gold and Icing Blush. One line holds it together: Made for the moment.",
    gallery: [
      { type: "full", media: image("tejs-cover", "Tej's Bakes cover: wordmark and scalloped shapes") },
      {
        type: "pair",
        media: [
          image("tejs-stationery", "Tej's card on a kraft envelope"),
          image("tejs-wedding-cakes", "Post: Say yes to the cake"),
        ],
      },
      { type: "line", text: "Made for the moment." },
      { type: "full", media: image("tejs-logo-system", "Tej's logo versions") },
      { type: "full", media: image("tejs-palette", "Tej's colour palette") },
      {
        type: "trio",
        media: [
          image("tejs-launch-posts", "Post: Another year, sweeter"),
          image("tejs-small-chops", "Post: The party starts here"),
          image("tejs-how-to-order", "Post: Ordering is easy as cake"),
        ],
      },
    ],
    credits: [
      { role: "Strategy and design", name: "Daniel Ayeni" },
      { role: "Design and motion", name: "John" },
      { role: "Made with", name: "Figma, Claude" },
    ],
    next: { title: "Afriment", href: "/work", media: image("afriment-wordmark", "Afriment wordmark") },
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
