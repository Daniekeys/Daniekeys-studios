import type { Metadata } from "next";

import Clock from "@/components/Clock";
import MediaBox from "@/components/MediaBox";
import { image } from "@/lib/media";

export const metadata: Metadata = {
  title: { absolute: "About Daniekeys Studios | AI Creative Studio in Nigeria" },
  description:
    "Daniekeys Studios is an AI-powered, remote-first creative and growth studio from Nigeria, helping businesses at home and abroad get more customers.",
  alternates: { canonical: "/studio" },
};

const rule = "1px solid rgba(17,17,17,.14)";

const VALUES = [
  ["Results", "We judge our work by what it does for your business, not by how many likes it gets."],
  ["Clarity", "Say one thing well. Every brand we make can be explained in a sentence."],
  ["Craft", "Spacing, type and detail, checked against the best work in the world."],
  ["Forward", "Ship, learn, improve. Press forward is how we work, not just what we say."],
];

// Add a portrait by giving the person a Cloudinary image name.
const TEAM: { name: string; role: string; portrait?: string }[] = [
  { name: "Daniel Ayeni", role: "Founder and Creative Director" },
  { name: "John", role: "Design and motion" },
];

export default function StudioPage() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: "clamp(72px,8cqw,140px)", paddingBottom: 100 }}>
        <span className="mono mut">The studio</span>
        <h1 className="serif xl" style={{ maxWidth: 1200, marginTop: 28 }}>
          A small, AI-powered team that thinks like a sales team.
        </h1>
      </section>

      <section className="wrap">
        <div className="g2">
          <MediaBox media={image("daniekeys-merch", "Daniekeys hoodie")} ratio="4/5" priority />
          <MediaBox media={image("daniekeys-card", "Daniekeys business card in hand")} ratio="4/5" priority />
        </div>
      </section>

      <section className="wrap sec">
        <div className="split">
          <span className="mono mut">Who we are</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p className="serif m">
              Daniekeys Studios is a remote-first creative and growth studio from Nigeria, working with startups and
              growing businesses at home and abroad.
            </p>
            <p className="s mut" style={{ maxWidth: 760 }}>
              We noticed something. Businesses pay for logos, videos and websites, and sales don&apos;t move. The design
              was never the real problem. So we start with your customers, then build.
            </p>
            <p className="s mut" style={{ maxWidth: 760 }}>
              We use AI across the whole process, from research to motion, so a small team can deliver what usually
              takes a large one. The thinking, the taste and the final call stay human.
            </p>
          </div>
        </div>
      </section>

      <section style={{ borderTop: rule }}>
        {VALUES.map(([word, line]) => (
          <div
            key={word}
            className="wrap"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              paddingBlock: 56,
              borderBottom: rule,
            }}
          >
            <span className="serif" style={{ fontSize: "clamp(56px,9cqw,150px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
              {word}
            </span>
            <span className="mut hide-m" style={{ maxWidth: 340 }}>
              {line}
            </span>
          </div>
        ))}
      </section>

      <section className="wrap sec">
        <div className="split" style={{ paddingBottom: 48 }}>
          <span className="mono mut">Team</span>
          <h2 className="serif l">The people behind the work.</h2>
        </div>
        <div className="g3">
          {TEAM.map((t) => (
            <div key={t.name} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {t.portrait ? (
                <MediaBox media={image(t.portrait, t.name, 1000)} ratio="4/5" />
              ) : (
                <div
                  className="ph"
                  style={{ aspectRatio: "4/5", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <span className="serif" style={{ fontSize: 96, opacity: 0.18 }}>
                    {t.name.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <b style={{ fontWeight: 500 }}>{t.name}</b>
                <br />
                <span className="mut">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 140 }}>
        <div className="split" style={{ paddingTop: 44, borderTop: rule }}>
          <span className="mono mut">Where</span>
          <div className="g2">
            <div>
              <p className="serif m">Remote-first, from Nigeria</p>
              <p className="mut">
                Nigeria time <Clock />
              </p>
            </div>
            <div>
              <p className="serif m">Worldwide</p>
              <p className="mut">Remote with clients across time zones</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
