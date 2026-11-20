import { film, image, type Media } from "./media";

// A case study page. Add a new project as a new entry here; /work/[slug]
// builds it with the same layout. Point its WORK items at it with caseStudy.
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
  kind: "Client" | "Studio concept" | "Own brand";
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
    next: { title: "Afriment", href: "/work/afriment", media: image("afriment-wordmark", "Afriment wordmark") },
  },
  {
    slug: "afriment",
    title: "Afriment",
    kind: "Client",
    industry: "Education and careers",
    year: 2026,
    intro: "A rebrand for a platform that turns trained talent into hired talent, without losing the blue people already know.",
    hero: image("afriment-wordmark", "Afriment wordmark with the constellation of linked points"),
    heroBg: "#F4F3EF",
    services: "Brand identity, website, social",
    team: "Daniekeys Studios",
    brief:
      "Afriment takes people from training to internships to real jobs. It needed one brand that speaks to the talent and to the teams hiring them.",
    challenge:
      "People already knew Afriment by its blue. The new brand had to feel sharper and ready for hiring teams, without throwing that away.",
    approach:
      "We kept the blue and gave it a system. A clean wordmark with an orange full stop, and a constellation of linked points for people connecting to work. The story fits in three steps, Learn, Intern, Get hired, and it runs from the bus shelter to the homepage. The first round explored four routes in new colours before the final brand settled on the blue.",
    gallery: [
      {
        type: "pair",
        media: [
          image("afriment-cover", "Afriment poster in a bus shelter: From trained to hired"),
          image("afriment-social", "Afriment post: Learn. Intern. Get hired."),
        ],
      },
      { type: "line", text: "From trained to hired." },
      { type: "full", media: image("afriment-website", "Afriment homepage on a laptop: Talent, ready for work") },
      { type: "full", media: image("afriment-logo-round-1", "Afriment logo, round 1: four routes") },
    ],
    credits: [{ role: "Studio", name: "Daniekeys Studios" }],
    next: { title: "Tandari", href: "/work/tandari", media: image("tandari-cover", "Tandari billboard at dusk") },
  },
  {
    slug: "tandari",
    title: "Tandari",
    kind: "Studio concept",
    industry: "Marketing tech",
    year: 2026,
    intro:
      "An AI creator marketing studio, branded loud and local. A studio concept: we wrote the brief ourselves, and the brands, names and amounts in it are samples.",
    hero: film("tandari-film", "Tandari brand film: Bring your people"),
    heroBg: "#2B2FD9",
    services: "Brand identity, product design, brand film, social",
    team: "Daniekeys Studios",
    brief:
      "Tandari is a platform where brands post briefs, get matched with the right creators, and creators get paid on time. We wanted to see what a Nigerian creator platform could look like if it felt as loud as the culture it serves.",
    challenge:
      "Creator platforms tend to look like generic tech. Tandari had to feel local and full of life, and still be clear enough to trust with a brief and a payment.",
    approach:
      "The mark is the bead T. Five beads, like the resist dots in Adire cloth or people coming together, line up into a T, and one bead is the AI spark. The palette is named after home: Danfo yellow, Adire indigo, Zobo pink and Palm green. The voice goes Pidgin first, and the film says it in three words: Bring your people.",
    gallery: [
      { type: "full", media: image("tandari-logo-round-1", "Tandari logo, round 1: four ways to say brands meet creators") },
      { type: "full", media: image("tandari-bead-t", "The bead T: people gathering into one") },
      { type: "line", text: "Brands meet the right creators." },
      {
        type: "pair",
        media: [
          image("tandari-cover", "Tandari billboard at dusk"),
          image("tandari-launch-posts", "Tandari launch post: Get paid on time"),
        ],
      },
      { type: "full", media: image("tandari-product-screens", "Tandari brief writer and creator match on a phone") },
      { type: "full", media: image("tandari-app-screens", "Tandari onboarding screens") },
      { type: "full", media: image("tandari-open-briefs", "Tandari open briefs") },
      { type: "full", media: image("tandari-icons", "Twelve Tandari app icons: pick your mood") },
    ],
    credits: [{ role: "Studio", name: "Daniekeys Studios" }],
    next: { title: "Ire", href: "/work/ire", media: image("ire-launch-poster", "Ire wordmark and cards") },
  },
  {
    slug: "ire",
    title: "Ire",
    kind: "Studio concept",
    industry: "Finance",
    year: 2026,
    intro:
      "Good money moves. A brand and motion system for a Lagos money app, launched with two films. A studio concept, so the names and amounts are samples.",
    hero: film("ire-launch", "Ire launch film"),
    heroBg: "#241A33",
    services: "Brand identity, motion, launch film, product film",
    team: "Daniekeys Studios",
    brief:
      "Ire is a money app for Lagos. Every bill gets a Jar, Ajo lets friends save together, and there are insights and a dollar card. We set the brief ourselves: build the brand, then the films that would launch it.",
    challenge:
      "Money apps tend to look cold, or all the same shade of blue. Ire had to feel warm and confident, and each feature had to make sense in a few seconds of film.",
    approach:
      "We built a brand motion framework first: the ire wordmark and its striped mark, bold cards, and lime and lilac on a deep night purple. Then two films. The launch film walks through the system, from the cards to the website to the merch. The product film goes dark and cinematic: Money moves fast in Lagos. Your money, sorted.",
    gallery: [
      { type: "full", media: image("ire-jars", "Ire: Every bill gets a Jar") },
      { type: "full", media: image("ire-cards", "Ire cards") },
      { type: "full", media: image("ire-website", "Ire website: a site that moves like the app") },
      { type: "full", media: image("ire-merch", "Ire cap, embroidered") },
      { type: "line", text: "Good money moves." },
      { type: "full", media: film("ire-product", "Ire product film: Tap. Paid.") },
      { type: "full", media: image("ire-sorted", "Ire: Your money, sorted") },
      { type: "full", media: image("ire-features", "Ire: Jars, Ajo, Insights, Bills, Cards and Dollar card in one place") },
    ],
    credits: [{ role: "Studio", name: "Daniekeys Studios" }],
    next: { title: "Daniekeys Studios", href: "/work/daniekeys-studios", media: image("daniekeys-billboard", "Daniekeys billboard at dusk") },
  },
  {
    slug: "daniekeys-studios",
    title: "Daniekeys Studios",
    kind: "Own brand",
    industry: "Creative services",
    year: 2026,
    intro: "Our own rebrand. Two values, one grey and the arrow-key d.",
    hero: image("daniekeys-cover", "Press forward poster with the arrow-key d"),
    heroBg: "#F4F3EF",
    services: "Brand identity",
    team: "Daniekeys Studios",
    brief: "We make brands for other people, so ours has to say what we believe without shouting. We rebuilt it from scratch, along with this site.",
    challenge:
      "The best studios let the work bring the colour. Our brand had to step back so client work could lead, and still be easy to spot on its own.",
    approach:
      "Two values and one grey: Paper, Ink and Stone. Newsreader Light for display, Geist for text and Geist Mono for labels. The mark is the arrow-key d, and the line is Press forward.",
    gallery: [
      {
        type: "pair",
        media: [
          image("daniekeys-ooh", "Daniekeys poster in a bus shelter at night"),
          image("daniekeys-merch", "Black hoodie with the small mark"),
        ],
      },
      { type: "line", text: "Press forward." },
      { type: "full", media: image("daniekeys-card", "Daniekeys business card in hand") },
      { type: "full", media: image("daniekeys-billboard", "Daniekeys billboard at dusk") },
    ],
    credits: [{ role: "Studio", name: "Daniekeys Studios" }],
    next: { title: "Tej's Bakes", href: "/work/tejs-bakes", media: image("tejs-cover", "Tej's Bakes cover") },
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
