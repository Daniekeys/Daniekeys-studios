import type { Metadata } from "next";

import MediaBox from "@/components/MediaBox";
import StartSection from "@/components/StartSection";
import { film, image, type Media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Services",
  description: "Brand identity, websites, film and motion, and social content from Daniekeys Studios.",
};

const rule = "1px solid rgba(17,17,17,.14)";

const PILLARS: { name: string; line: string; media: Media; offers: [string, string][] }[] = [
  {
    name: "Brand identity",
    line: "Strategy first, then the logo, colour, type, voice and a system your team can use without us.",
    media: film("tejs-reel", "Brand identity example: Tej's Bakes"),
    offers: [
      ["Brand Foundations", "Strategy, logo, colour, type and guidelines"],
      ["Brand 360", "Identity, website, launch film and five launch posts"],
      ["Rebrand", "A sharper version of the brand you already have"],
    ],
  },
  {
    name: "Websites",
    line: "Marketing sites and launch pages, designed and built to load fast and to be easy to update.",
    media: image("afriment-website", "Websites example: Afriment", 1200),
    offers: [
      ["Launch Page", "One page, built for a launch or a campaign"],
      ["Marketing Site", "The full site, with a case study and work system"],
    ],
  },
  {
    name: "Film and motion",
    line: "Motion that makes a brand feel alive, cut for every screen from 16:9 to 9:16.",
    media: film("ire-launch", "Film and motion example: Ire launch film"),
    offers: [
      ["Logo Animation", "A three to five second signature"],
      ["Launch Film", "A product or brand film, with all social cuts"],
      ["Motion Ads", "Short ads, including AI video and UGC style"],
    ],
  },
  {
    name: "Social and content",
    line: "Launch posts and monthly content that keep the brand consistent long after day one.",
    media: image("tejs-launch-posts", "Social and content example: Tej's Bakes posts", 1200),
    offers: [
      ["Launch Set", "Five posts for launch week"],
      ["Content Retainers", "Content Starter, Growth Partner, Agency Partner"],
    ],
  },
];

const STEPS = [
  ["01 Research", "We study your market and the best work in it, and agree a direction before we design."],
  ["02 System", "Logo, colour, type and rules, built as one system so everything after it is consistent."],
  ["03 Make", "Website, film and posts, each checked side by side against the best reference."],
  ["04 Launch", "Files, guidelines and every export your team needs to go live."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: "clamp(72px,8cqw,140px)", paddingBottom: 100 }}>
        <span className="mono mut">Services</span>
        <h1 className="serif xl" style={{ maxWidth: 1200, marginTop: 28 }}>
          Four ways we help ambitious businesses get taken seriously.
        </h1>
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
              <div style={{ marginTop: 12 }}>
                {p.offers.map(([name, desc]) => (
                  <div
                    key={name}
                    style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBlock: 16, borderTop: rule }}
                  >
                    <span style={{ fontSize: 18 }}>{name}</span>
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
          <h2 className="serif l">Research, then system, then craft.</h2>
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
