"use client";

import { useState } from "react";

import MediaBox from "./MediaBox";
import { image } from "@/lib/media";

type Post = { title: string; cat: string; date: string; img: string; lead?: string };

// The articles are not written yet, so entries show "Coming soon" and do not
// link. Give a post an href once its page exists.
const FEATURE: Post = {
  title: "Why we rebuilt our own brand in black and white.",
  cat: "Studio notes",
  date: "Nov 2026",
  img: "daniekeys-billboard",
  lead: "The best studios in the world let the work bring the colour. Here is how we got there, and what we threw away on the way.",
};

const POSTS: Post[] = [
  { title: "Inside the Tej's Bakes identity", cat: "Process", date: "Nov 2026", img: "tejs-cover" },
  { title: "Designing Tandari's bead T", cat: "Case notes", date: "Nov 2026", img: "tandari-film-poster" },
  { title: "Rebranding Afriment without losing its blue", cat: "Case notes", date: "Nov 2026", img: "afriment-cover" },
  { title: "What eight great studio sites taught us", cat: "Studio notes", date: "Nov 2026", img: "daniekeys-cover" },
  { title: "How we plan a launch film", cat: "Process", date: "Nov 2026", img: "tejs-reel-poster" },
  { title: "How we use AI without making AI-looking work", cat: "Studio notes", date: "Nov 2026", img: "daniekeys-card" },
];

const CATS = ["All", "Studio notes", "Process", "Case notes"];

export default function JournalList() {
  const [cat, setCat] = useState("All");
  const show = (p: Post) => cat === "All" || p.cat === cat;
  const posts = POSTS.filter(show);

  return (
    <>
      <section className="wrap" style={{ paddingTop: "clamp(72px,8cqw,140px)", paddingBottom: 56 }}>
        <div className="split" style={{ alignItems: "end" }}>
          <h1 className="serif" style={{ fontSize: "clamp(64px,11cqw,180px)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
            Journal
          </h1>
          <div className="tags">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                className={c === cat ? "tag concept" : "tag"}
                style={{ cursor: "pointer" }}
                onClick={() => setCat(c)}
                aria-pressed={c === cat}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {show(FEATURE) && (
        <section className="wrap" style={{ paddingBottom: 96 }}>
          <div className="g2" style={{ alignItems: "end" }}>
            <MediaBox media={image(FEATURE.img, "Daniekeys billboard at dusk")} ratio="3/2" priority />
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", gap: 10, fontSize: 13 }} className="mut">
                <span>{FEATURE.cat}</span>
                <span>{FEATURE.date}</span>
              </div>
              <h2 className="serif l">{FEATURE.title}</h2>
              <p className="mut" style={{ maxWidth: 520 }}>
                {FEATURE.lead}
              </p>
              <span className="mono mut">Coming soon</span>
            </div>
          </div>
        </section>
      )}

      <section className="wrap" style={{ paddingBottom: 140 }}>
        <div className="g3" style={{ rowGap: 64 }}>
          {posts.map((p) => (
            <div key={p.title} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <MediaBox media={image(p.img, p.title, 1200)} ratio="4/3" />
              <div style={{ display: "flex", gap: 10, fontSize: 13 }} className="mut">
                <span>{p.cat}</span>
                <span>{p.date}</span>
                <span>Coming soon</span>
              </div>
              <p className="serif s">{p.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
