import { film, image, type Media } from "./media";

// A case study page. Add a new project as a new entry here; /work/[slug]
// builds it with the same layout. Point its WORK items at it with caseStudy.
//
// Gallery blocks render top to bottom: "full" is one 16:10 frame, "pair" two
// 4:5 frames, "trio" three 4:5 frames (each can take its own ratio; "narrow"
// centres a very tall full image), "posts" a grid of 4:5 social posts,
// "screens" a row of phone screens, "line" a big centred sentence, "section"
// a label and a line that starts a new part of the page, "site" the brand
// website in a browser and phone frame (see src/lib/sites.ts).
export type Block =
  | { type: "full"; media: Media; ratio?: string; narrow?: boolean }
  | { type: "pair"; media: [Media, Media]; ratio?: string }
  | { type: "trio"; media: [Media, Media, Media]; ratio?: string }
  | { type: "posts"; media: Media[] }
  | { type: "screens"; media: Media[] }
  | { type: "line"; text: string }
  | { type: "section"; label: string; text: string }
  | { type: "site"; slug: string };

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
    services: "Strategy, brand identity, website, social, brand reel",
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
      { type: "section", label: "The website", text: "A homepage that sells the moment: the cake menu, small chops, three steps to order and an order form, all in the brand." },
      { type: "site", slug: "tejs-bakes" },
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
      { type: "full", media: image("tandari-identity", "Tandari identity overview"), ratio: "1600/1100" },
      { type: "full", media: image("tandari-brand-in-the-world", "Tandari creator kit, merch and moments"), ratio: "1600/1240" },
      { type: "section", label: "The logo", text: "Round one had four routes. The bead T is the one that stuck." },
      { type: "full", media: image("tandari-logo-round-1", "Tandari logo, round 1: four ways to say brands meet creators") },
      { type: "full", media: image("tandari-bead-t", "The bead T: people gathering into one") },
      { type: "pair", media: [image("tandari-book-03-logo", "The Tandari logo"), image("tandari-book-04-construction", "Logo construction")], ratio: "16/10" },
      { type: "full", media: image("tandari-book-05-logo-versions", "Tandari logo versions") },
      { type: "line", text: "Brands meet the right creators." },
      { type: "section", label: "Brand book", text: "Seventeen pages: colour, type, shapes and pattern, then the product, the merch and the brand out in the wild." },
      { type: "pair", media: [image("tandari-book-01-cover", "Brand book cover"), image("tandari-book-02-introduction", "Every brand needs a voice people trust")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-book-06-colour", "Colour palette: loud like a danfo, calm like a good brief"), image("tandari-book-07-typography", "Typography")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-book-08-shapes", "Shape system: everything comes from the logo"), image("tandari-book-09-pattern", "Pattern in two colourways")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-book-10-creator-app", "Creator app: one app for every deal"), image("tandari-book-11-dashboard", "Brand dashboard: type one line, get a campaign")], ratio: "16/11" },
      { type: "pair", media: [image("tandari-book-12-in-the-wild", "Where the deals happen"), image("tandari-book-13-stationery", "Stationery and stickers")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-book-14-pop-up", "Pop-up stand and backdrop"), image("tandari-book-15-social", "Social posts")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-book-16-hoodies-caps", "Merch: hoodies and caps"), image("tandari-book-17-polos-tote", "Merch: polos and tote")], ratio: "16/10" },
      { type: "section", label: "Amplified toolkit", text: "The kit for campaigns: named colourways, app icons, the header highlighter, the bead path, stickers, photography and templates." },
      { type: "full", media: image("tandari-kit-a10-toolkit", "The amplified toolkit") },
      { type: "pair", media: [image("tandari-kit-a04-voice", "Voice in action"), image("tandari-kit-a05-colourways", "Named colourways")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-kit-a06-app-icons", "Pick your icon: app icon colourways"), image("tandari-kit-a07-type", "Type specimen")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-kit-a08-highlighter", "Header highlighter"), image("tandari-kit-a09-bead-path", "The bead T as a window")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-kit-a11-photography", "Photography: real people, real places"), image("tandari-kit-a13-stickers", "Sticker library")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-kit-a15-in-hand", "In their hands"), image("tandari-kit-a16-campaign-cards", "Open briefs, styled like tickets")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-kit-a17-social", "Social templates"), image("tandari-kit-a18-poster-wall", "Poster wall")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-kit-a19-merch", "More merch: things people actually keep"), image("tandari-kit-a20-sign-off", "Sign-off: see you on the timeline")], ratio: "16/10" },
      { type: "section", label: "The website", text: "A live landing page for brands and creators. Open it, scroll it, type in the brief box." },
      { type: "site", slug: "tandari" },
      { type: "section", label: "Out in the world", text: "Billboards, walls, the commute, the website and the phone in your hand." },
      { type: "full", media: image("tandari-ooh-skyline", "Tandari billboards over the skyline") },
      { type: "pair", media: [image("tandari-ooh-drive-in", "Drive-in billboard"), image("tandari-ooh-mural", "Street wall mural")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-ooh-commute", "On the commute"), image("tandari-ooh-roadside", "Roadside and street")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-website", "The website"), image("tandari-in-their-hands", "In their hands")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-desk-and-feed", "Desk and feed"), image("tandari-small-details", "Small details, big brand")], ratio: "16/10" },
      { type: "pair", media: [image("tandari-cover", "Tandari billboard at dusk"), image("tandari-launch-posts", "Tandari launch post: Get paid on time")] },
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
      { type: "section", label: "Identity", text: "The ire wordmark and its striped mark, in every colourway, with the rules for using it." },
      { type: "full", media: image("ire-logo-variations", "Ire logo variations and usage"), ratio: "1600/1360" },
      { type: "full", media: image("ire-cards", "Ire cards") },
      { type: "section", label: "The website", text: "The launch site: the striped mark in 3D, Jars, Ajo and cards, told as you scroll." },
      { type: "site", slug: "ire" },
      { type: "section", label: "The app", text: "Six screens: home, Jars, Ajo, cards, a payment and insights." },
      {
        type: "screens",
        media: [
          image("ire-screen-home", "Ire app: Home"),
          image("ire-screen-jars", "Ire app: Jars"),
          image("ire-screen-ajo", "Ire app: Ajo"),
          image("ire-screen-cards", "Ire app: Cards"),
          image("ire-screen-paid", "Ire app: Payment done"),
          image("ire-screen-insights", "Ire app: Insights"),
        ],
      },
      { type: "full", media: image("ire-features", "Ire: Jars, Ajo, Insights, Bills, Cards and Dollar card in one place") },
      { type: "section", label: "The films", text: "Seven boards first: a title, a hook, the approach, then one feature at a time. Then the launch film and the product film." },
      { type: "full", media: image("ire-board-title", "Film board 1: Title"), ratio: "16/9" },
      { type: "pair", media: [image("ire-board-hook", "Film board 2: Light bill? Already sorted."), image("ire-board-approach", "Film board 3: Made for Lagos. Built as a system.")], ratio: "16/9" },
      { type: "pair", media: [image("ire-board-jars", "Film board 4: Every bill gets a Jar"), image("ire-board-cards", "Film board 5: Four colours. One wallet.")], ratio: "16/9" },
      { type: "pair", media: [image("ire-board-ajo", "Film board 6: Ajo with your people"), image("ire-board-end-card", "Film board 7: Good money moves")], ratio: "16/9" },
      { type: "line", text: "Good money moves." },
      { type: "full", media: film("ire-product", "Ire product film: Tap. Paid.") },
      { type: "full", media: image("ire-sorted", "Ire: Your money, sorted") },
      { type: "section", label: "Social", text: "Eight launch posts, one feature each." },
      {
        type: "posts",
        media: [
          image("ire-post-good-money-moves", "Ire post: Good money moves"),
          image("ire-post-bills-sorted", "Ire post: Bills sorted before they bite"),
          image("ire-post-landlord-who", "Ire post: Your rent Jar is 80% full. Landlord who?"),
          image("ire-post-owambe-fund", "Ire post: Aso ebi money? Locked in."),
          image("ire-post-ajo", "Ire post: Ajo with your people"),
          image("ire-post-cards", "Ire post: Pick a colour. Pay anywhere."),
          image("ire-post-good-fortune", "Ire post: Ire means good fortune"),
          image("ire-post-plot-twist", "Ire post: Plot twist"),
        ],
      },
      { type: "section", label: "Out in the world", text: "The website, the merch and the brand at full size." },
      { type: "full", media: image("ire-website", "Ire website: a site that moves like the app") },
      { type: "full", media: image("ire-merch", "Ire cap, embroidered") },
      { type: "full", media: image("ire-brand-at-scale", "Ire brand at scale: app, merch and people"), ratio: "1920/4288", narrow: true },
    ],
    credits: [{ role: "Studio", name: "Daniekeys Studios" }],
    next: { title: "Zaharyn Residences", href: "/work/zaharyn", media: image("zaharyn-tower-bluehour", "The Zaharyn tower at blue hour") },
  },
  {
    slug: "zaharyn",
    title: "Zaharyn Residences",
    kind: "Studio concept",
    industry: "Real estate",
    year: 2026,
    intro:
      "A brand, a launch film and a website for a tower of sea-view residences in Lusail Marina. A studio concept, so the development, the tower and every detail in it are samples.",
    hero: film("zaharyn-film", "Zaharyn Residences launch film"),
    heroBg: "#13233A",
    services: "Naming, brand identity, launch film, website",
    team: "Daniekeys Studios",
    brief:
      "A new address in Lusail needed a name, an identity and a launch kit that feel at home in Qatar and premium to buyers anywhere. We set the brief ourselves: sell a feeling, not square metres.",
    challenge:
      "Gulf property branding leans on black, gold and towers. Everything looks the same, and none of it says home.",
    approach:
      "We built the brand around one picture: your own doorway, with the sun coming up over the Gulf behind it. Both As in Zaharyn are redrawn as pointed arches, and a gold sun rests on the crossbar. Limestone by day, Gulf Night after dark, no black anywhere. Every image is seen through the arch, and the voice stays calm: Everything, minutes away.",
    gallery: [
      { type: "full", media: image("zaharyn-identity", "Zaharyn wordmark with the Doorway mark and the Arabic name"), ratio: "2000/1188" },
      { type: "full", media: image("zaharyn-billboard", "Zaharyn billboard against a dusk sky"), ratio: "2000/1135" },
      { type: "section", label: "The doorway", text: "An A that opens like a door. The crossbar becomes the transom, and the sun sits on it: first light over the Gulf, seen from your own front door." },
      { type: "full", media: image("zaharyn-doorway", "The Doorway mark and the gold wordmark on Gulf Night"), ratio: "2000/1671" },
      { type: "full", media: image("zaharyn-logo-family", "Zaharyn logo family on limestone, Gulf Night and dune"), ratio: "2000/988" },
      { type: "pair", media: [image("zaharyn-card", "Gulf Night card with the Doorway mark in gold foil"), image("zaharyn-invitation", "Private viewing invitation on a kraft envelope")], ratio: "4/3" },
      { type: "section", label: "Colour and type", text: "Limestone by day, Gulf Night after dark. Gold is the light, so it stays small. Bodoni Moda for the headlines, Jost for everything you read." },
      { type: "full", media: image("zaharyn-colour", "Zaharyn colour: limestone, Gulf Night, dune, Katara gold and Corniche"), ratio: "2000/1650" },
      { type: "full", media: image("zaharyn-type", "Zaharyn typography: Bodoni Moda, Jost and Noto Naskh Arabic"), ratio: "2000/940" },
      { type: "section", label: "First light windows", text: "The arch is the camera. Every image in the brand is seen through a doorway, and when there is no photo, the window holds the Gulf itself." },
      { type: "full", media: image("zaharyn-windows", "First light windows at dawn, dusk and one lit room"), ratio: "2000/1356" },
      { type: "section", label: "The film", text: "Sixty seconds from sunrise over the Gulf to one light on in the tower. Doha's dhows, Katara and the marina, then the tower itself, rendered with AI." },
      { type: "pair", media: [image("zaharyn-tower-dawn", "The Zaharyn tower at dawn"), image("zaharyn-tower-bluehour", "The Zaharyn tower at blue hour")], ratio: "16/9" },
      { type: "full", media: film("zaharyn-film-vertical", "Zaharyn launch film, vertical cut"), ratio: "9/16", narrow: true },
      { type: "section", label: "In the world", text: "A private viewing at sunrise, posters for the sales gallery walls, a bus shelter glowing after dark and a mobile site with one arch, one line and one button." },
      { type: "pair", media: [image("zaharyn-poster-palm", "First Light poster in a white frame beside a palm leaf"), image("zaharyn-poster-night", "One Light On poster in a wooden frame")], ratio: "3/2" },
      { type: "full", media: image("zaharyn-bus-shelter", "Come home to Lusail, on a bus shelter at night"), ratio: "3/4", narrow: true },
      { type: "full", media: image("zaharyn-mobile", "The Zaharyn mobile site on a phone"), ratio: "2000/1120" },
      { type: "line", text: "Everything, minutes away." },
      { type: "full", media: image("zaharyn-voice", "Zaharyn voice: few words about light, the sea and time"), ratio: "2000/1127" },
    ],
    credits: [
      { role: "Brand, film and website", name: "Daniekeys Studios" },
      { role: "Made with", name: "Claude" },
    ],
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
      { type: "pair", media: [image("daniekeys-ooh", "Daniekeys poster in a bus shelter at night"), image("daniekeys-merch", "Black hoodie with the small mark")] },
      { type: "line", text: "Press forward." },
      { type: "full", media: image("daniekeys-card", "Daniekeys business card in hand") },
      { type: "full", media: image("daniekeys-billboard", "Daniekeys billboard at dusk") },
      { type: "section", label: "Social", text: "Eight posts for our own feed, one idea each, from the ambition line to how we work." },
      {
        type: "posts",
        media: [
          image("daniekeys-post-ambition", "Post: We turn ambitious businesses into brands the world takes seriously"),
          image("daniekeys-post-own-rebrand", "Post: Two values, one grey and the arrow-key d"),
          image("daniekeys-post-what-we-do", "Post: Four ways we help brands get taken seriously"),
          image("daniekeys-post-built-to-be-seen", "Post: A good brand reads in one second"),
          image("daniekeys-post-how-we-think", "Post: Every project starts with one line"),
          image("daniekeys-post-how-we-work", "Post: Four steps. No guesswork."),
          image("daniekeys-post-every-place", "Post: A brand is every place your name shows up"),
          image("daniekeys-post-tell-us", "Post: Tell us what you are building"),
        ],
      },
    ],
    credits: [{ role: "Studio", name: "Daniekeys Studios" }],
    next: { title: "Tej's Bakes", href: "/work/tejs-bakes", media: image("tejs-cover", "Tej's Bakes cover") },
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
