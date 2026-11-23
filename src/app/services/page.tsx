import type { Metadata } from "next";

import MediaBox from "@/components/MediaBox";
import Price, { CurrencyToggle } from "@/components/Price";
import StartSection from "@/components/StartSection";
import { film, image, type Media } from "@/lib/media";
import { LAUNCH_OFFER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Branding, Video and Website Services",
  description:
    "Brand identity, video editing, AI video and motion ads, flyers and graphics, websites, UI/UX and social media management for businesses that want more customers. From Nigeria, working worldwide.",
  alternates: { canonical: "/services" },
};

const rule = "1px solid rgba(17,17,17,.14)";

// Starting prices: [name, what it is, naira, dollars, per]. Market research, 23 Nov 2026.
type Offer = [string, string, number, number, string?];

const PILLARS: { name: string; fixes: string; line: string; media: Media; offers: Offer[] }[] = [
  {
    name: "Brand identity",
    fixes: "Customers can't tell you apart from competitors, or don't trust you enough to pay.",
    line: "Strategy first, then the logo, colour, type, voice and a system your team can use without us.",
    media: film("tejs-reel", "Brand identity example: Tej's Bakes"),
    offers: [
      ["Brand Foundations", "Strategy, logo, colour, type and guidelines", 350000, 800],
      ["Brand 360", "Identity, website, launch film and five launch posts", 1200000, 2500],
      ["Rebrand", "A sharper version of the brand you already have", 350000, 800],
    ],
  },
  {
    name: "Websites, apps and UI/UX design",
    fixes: "People visit but don't enquire, book, buy or keep using your product.",
    line: "Fast, clear marketing sites, landing pages and app screens, built to turn visitors into enquiries and users.",
    media: image("afriment-website", "Websites example: Afriment", 1200),
    offers: [
      ["Launch Page", "One page, built for a launch or a campaign", 200000, 450],
      ["Marketing Site", "The full site, with case studies and clear calls to action", 450000, 1200],
      ["UI/UX Design", "App and dashboard screens, user flows and clickable prototypes", 400000, 900],
    ],
  },
  {
    name: "Video editing, film and motion",
    fixes: "People scroll straight past you.",
    line: "Edits, launch films, motion ads and AI video that stop the scroll and give people a reason to buy. Cut for every screen, 16:9 to 9:16.",
    media: film("ire-launch", "Film and motion example: Ire launch film"),
    offers: [
      ["Video Editing", "Your raw footage turned into reels, ads, YouTube videos and event recaps", 50000, 100],
      ["Logo Animation", "A three to five second signature", 60000, 120],
      ["Motion Ads", "Short ads, including AI video and UGC style", 150000, 350],
      ["Launch Film", "A product or brand film, with all social cuts", 350000, 900],
    ],
  },
  {
    name: "Graphic design and social media",
    fixes: "You post randomly, or not at all, and nothing comes from it.",
    line: "Flyers and graphics that make people stop and act, and social media managed every month around your sales goals.",
    media: image("tejs-launch-posts", "Social and content example: Tej's Bakes posts", 1200),
    offers: [
      ["Flyers and Graphics", "Flyers, posters, social graphics, banners and pitch decks", 20000, 50, "each"],
      ["Launch Set", "Five posts for launch week", 80000, 200],
      ["Social Media Management", "We plan, design, post and manage your pages, and report what brings enquiries", 200000, 500, "a month"],
    ],
  },
];

const STEPS = [
  ["01 Diagnose", "Who buys from you, why they should pick you over competitors, what's stopping them and where they spend their time."],
  ["02 Plan", "A one-page marketing plan: who we target, what we say, what we build and why."],
  ["03 Build", "Brand, video, website and content, each one tied to a goal in the plan."],
  ["04 Launch and improve", "We go live, watch what brings enquiries and sharpen what doesn't."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: "clamp(72px,8cqw,140px)", paddingBottom: 100 }}>
        <span className="mono mut">Services</span>
        <h1 className="serif xl" style={{ maxWidth: 1200, marginTop: 28 }}>
          Everything your brand needs. One goal: more customers.
        </h1>
        <p className="s mut" style={{ maxWidth: 820, marginTop: 28 }}>
          Every service starts with the same question: what will make your customers buy? We answer it first, then
          use the right tools to fix it. Most projects are delivered in 48 to 72 hours.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", marginTop: 40 }}>
          <CurrencyToggle />
          <span className="mono mut">Starting prices. Your exact quote comes after the diagnosis.</span>
        </div>
        <p className="mono" style={{ marginTop: 20 }}>
          {LAUNCH_OFFER}
        </p>
      </section>

      <section className="wrap">
        <div className="split" style={{ paddingBlock: 72, borderTop: rule }}>
          <span className="mono mut">00</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <h2 className="serif l">Growth Diagnosis</h2>
            <p className="s mut" style={{ maxWidth: 720 }}>
              What it fixes: guessing. You get a clear picture of your buyer, your competitors, your message and what
              to build first, delivered as a one-page marketing plan. Credited against your project if you go ahead.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBlock: 16, borderTop: rule }}>
              <span style={{ fontSize: 18 }}>Growth Diagnosis</span>
              <span className="mut" style={{ textAlign: "right" }}>
                <Price ngn={50000} usd={100} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        {PILLARS.map((p, i) => (
          <div key={p.name} className="split" style={{ paddingBlock: 72, borderTop: rule }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <span className="mono mut">0{i + 1}</span>
              <MediaBox media={p.media} ratio="4/3" style={{ maxWidth: 420 }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <h2 className="serif l">{p.name}</h2>
              <p className="s mut" style={{ maxWidth: 720 }}>
                {p.line}
              </p>
              <p className="mut" style={{ maxWidth: 720 }}>
                What it fixes: {p.fixes}
              </p>
              <div style={{ marginTop: 12 }}>
                {p.offers.map(([name, desc, ngn, usd, per]) => (
                  <div
                    key={name}
                    style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBlock: 16, borderTop: rule }}
                  >
                    <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ fontSize: 18 }}>{name}</span>
                      <span className="mono mut">
                        <Price ngn={ngn} usd={usd} per={per} />
                      </span>
                    </span>
                    <span className="mut" style={{ textAlign: "right", maxWidth: "60%" }}>
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="wrap sec">
        <div className="split" style={{ paddingBottom: 48 }}>
          <span className="mono mut">How we work</span>
          <h2 className="serif l">The Growth Diagnosis, then the craft.</h2>
        </div>
        <div className="g4">
          {STEPS.map(([name, text]) => (
            <div
              key={name}
              style={{ display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid #111111", paddingTop: 20 }}
            >
              <span className="mono">{name}</span>
              <p className="mut">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <StartSection />
    </>
  );
}
