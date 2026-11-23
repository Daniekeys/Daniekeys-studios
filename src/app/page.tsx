import Link from "next/link";

import StartSection from "@/components/StartSection";
import Showreel from "@/components/Showreel";
import WorkTile from "@/components/WorkTile";
import { FAQ } from "@/lib/faq";
import { film, image } from "@/lib/media";
import { ENTITY, LAUNCH_OFFER } from "@/lib/site";
import { WORK } from "@/lib/work";

const SERVICES = [
  ["Growth Diagnosis", "Who buys from you, why they should pick you, and what's stopping them. A one-page plan before we design anything.", "Credited to your project"],
  ["Brand identity", "Logo, colour, type, voice and the full system, ready for every screen and surface.", "Brand Foundations, Brand 360, Rebrand"],
  ["Websites, apps and UI/UX", "Websites, landing pages and app screens that turn visitors into enquiries and users.", "Launch Page, Marketing Site, UI/UX Design"],
  ["Video editing, film and motion", "Edited reels and YouTube videos, motion graphics, AI video ads and launch films.", "Video Editing, Motion Ads, Launch Film"],
  ["Graphic design and social media", "Flyers, posters, social graphics and pitch decks, plus your pages managed every month.", "Flyers and Graphics, Social Media Management"],
];

const WHY = [
  ["Strategy before design", "Every project starts with a Growth Diagnosis. We find out who your best customer is, why they should choose you and what's stopping them. Then we design."],
  ["Built to sell", "A beautiful logo that doesn't bring customers is an expense. We judge our work by enquiries, bookings and sales, not compliments."],
  ["Fast, because we're AI-native", "Most projects are delivered in 48 to 72 hours. AI does the heavy lifting. People do the thinking, the taste and the final call."],
];

const MOMENTS = [
  ["Launching", "A new product, app or business. We build the brand, launch film, launch page and launch week posts."],
  ["Growing", "You're selling, but growth has stalled. We sharpen the message and add motion ads, a website that converts and monthly content."],
  ["Going online", "Good offline, invisible online. We set up the brand basics, a simple website and social pages ready for WhatsApp and Instagram enquiries."],
  ["Expanding", "A new city, a new country or buyers abroad. We position you for the new market, with video that travels and a site that works for overseas customers."],
];

const STEPS = [
  ["01 Diagnose", "Who buys from you, why they should pick you over competitors, what's stopping them and where they spend their time."],
  ["02 Plan", "A one-page marketing plan: who we target, what we say, what we build and why."],
  ["03 Build", "Brand, video, website and content, each one tied to a goal in the plan."],
  ["04 Launch and improve", "We go live, watch what brings enquiries and sharpen what doesn't."],
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const rule = "1px solid rgba(17,17,17,.14)";

export default function Home() {
  return (
    <>
      <section
        className="wrap"
        style={{
          paddingTop: "clamp(96px,13cqw,210px)",
          paddingBottom: "clamp(72px,9cqw,150px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        <span className="mono mut">AI-powered creative and growth studio</span>
        <h1 className="serif xl" style={{ maxWidth: 1180 }}>
          Branding, video and websites that bring you customers.
        </h1>
        <p className="s mut" style={{ maxWidth: 820 }}>
          Most studios make you look good. We make you sell. We study your market and your buyers first, then build
          the brand, video and website that fix what&apos;s stopping them from buying. AI-powered, so you get it in
          days, not months.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          <Link className="pill" href="/contact">
            Get a Growth Diagnosis
          </Link>
          <a className="pill line" href="#showreel">
            Watch the showreel
          </a>
        </div>
        <Link href="/services" className="mono mut" style={{ maxWidth: 720, textDecoration: "underline", textUnderlineOffset: 5 }}>
          {LAUNCH_OFFER}
        </Link>
      </section>

      <section className="wrap" id="showreel" aria-label="Showreel 2026">
        <Showreel />
      </section>

      <section className="wrap sec">
        <div className="split">
          <span className="mono mut">The studio</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <p className="serif m">{ENTITY}</p>
            <Link href="/studio" style={{ fontSize: 15, textDecoration: "underline", textUnderlineOffset: 5 }}>
              About the studio
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="split" style={{ paddingBottom: 48 }}>
          <span className="mono mut">Why us</span>
          <h2 className="serif l">Creative that thinks like a sales team.</h2>
        </div>
        <div className="g3">
          {WHY.map(([name, text]) => (
            <div key={name} style={{ display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid #111111", paddingTop: 20 }}>
              <h3 className="s" style={{ fontWeight: 400 }}>{name}</h3>
              <p className="mut">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 140 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 28 }}>
          <h2 className="serif m">Selected work</h2>
          <Link href="/work" style={{ fontSize: 15 }}>
            All work ({WORK.length}) &#8594;
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
          <WorkTile
            title="Tej's Bakes"
            blurb="A warm, grown-up identity for a cake and pastry kitchen. Made for the moment."
            media={film("tejs-reel", "Tej's Bakes")}
            wide
            tags={["Brand identity", "Film", "Social"]}
            href="/work/tejs-bakes"
          />
          <div className="g2">
            <WorkTile
              title="Afriment"
              blurb="Rebrand for a platform that turns trained talent into hired talent."
              media={image("afriment-cover", "Afriment")}
              wide={false}
              tags={["Brand identity", "Website"]}
              href="/work/afriment"
            />
            <WorkTile
              title="Tandari"
              blurb="An AI creator marketing studio, branded loud and local."
              media={image("tandari-cover", "Tandari")}
              wide={false}
              concept
              tags={["Brand identity", "Product"]}
              href="/work/tandari"
            />
          </div>
          <WorkTile
            title="Ire, launch film"
            blurb="Good money moves. A Lagos money app, launched with a 40-second brand film."
            media={film("ire-launch", "Ire, launch film")}
            wide
            concept
            tags={["Film and motion", "Brand identity"]}
            href="/work/ire"
          />
          <WorkTile
            title="Daniekeys Studios"
            blurb="Our own rebrand. Two values, one grey and the arrow-key d."
            media={image("daniekeys-cover", "Daniekeys Studios")}
            wide
            tags={["Brand identity"]}
            href="/work/daniekeys-studios"
          />
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="split" style={{ paddingBottom: 48 }}>
          <span className="mono mut">What we do</span>
          <h2 className="serif l">Everything your brand needs. One goal: more customers.</h2>
        </div>
        {SERVICES.map(([name, line, offers], i) => (
          <div
            key={name}
            className="row"
            style={i === SERVICES.length - 1 ? { borderBottom: rule } : undefined}
          >
            <span className="s">{name}</span>
            <span className="mut">{line}</span>
            <span className="mut hide-m">{offers}</span>
          </div>
        ))}
        <div style={{ paddingTop: 28 }}>
          <Link className="pill line" href="/services">
            All services
          </Link>
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="split" style={{ paddingBottom: 48 }}>
          <span className="mono mut">Where are you now</span>
          <h2 className="serif l">Tell us your moment. We&apos;ll build what it needs.</h2>
        </div>
        <div className="g4">
          {MOMENTS.map(([name, text]) => (
            <div key={name} style={{ display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid #111111", paddingTop: 20 }}>
              <h3 className="s" style={{ fontWeight: 400 }}>{name}</h3>
              <p className="mut">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="split" style={{ paddingBottom: 48 }}>
          <span className="mono mut">How we work</span>
          <h2 className="serif l">The Growth Diagnosis, then the craft.</h2>
        </div>
        <div className="g4">
          {STEPS.map(([name, text]) => (
            <div key={name} style={{ display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid #111111", paddingTop: 20 }}>
              <span className="mono">{name}</span>
              <p className="mut">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec" style={{ paddingTop: 0 }}>
        <div className="split" style={{ paddingBottom: 48 }}>
          <span className="mono mut">Questions</span>
          <h2 className="serif l">Frequently asked questions</h2>
        </div>
        <div className="split">
          <span className="hide-m" />
          <div>
            {FAQ.map(([q, a], i) => (
              <div key={q} style={{ paddingBlock: 28, borderTop: rule, borderBottom: i === FAQ.length - 1 ? rule : undefined }}>
                <h3 className="s" style={{ fontWeight: 400 }}>{q}</h3>
                <p className="mut" style={{ marginTop: 12, maxWidth: 760 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      </section>

      <StartSection />
    </>
  );
}
