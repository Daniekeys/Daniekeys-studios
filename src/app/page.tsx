import Link from "next/link";

import StartSection from "@/components/StartSection";
import Showreel from "@/components/Showreel";
import WorkTile from "@/components/WorkTile";
import { film, image } from "@/lib/media";
import { WORK } from "@/lib/work";

const SERVICES = [
  ["Brand identity", "Strategy, naming, logo and the full system, ready for every screen and surface.", "Brand Foundations, Brand 360"],
  ["Websites", "Marketing sites and launch pages that look as good as the brand and load fast.", "Launch Page, Marketing Site"],
  ["Film and motion", "Logo animations, product launch films and AI video ads, made for every format.", "Launch Film, Motion Ads"],
  ["Social and content", "Launch posts and monthly content that keep the brand consistent after day one.", "Content Retainers"],
];

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
        <span className="mono mut">Brand, web and film studio</span>
        <h1 className="serif xl" style={{ maxWidth: 1180 }}>
          We turn ambitious businesses into brands the world takes seriously.
        </h1>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          <Link className="pill" href="/contact">
            Start a project
          </Link>
          <Link className="pill line" href="/work">
            See the work
          </Link>
        </div>
      </section>

      <section className="wrap">
        <Showreel name="showreel" />
      </section>

      <section className="wrap sec">
        <div className="split">
          <span className="mono mut">The studio</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <p className="serif m">
              We are a brand, web and film studio from Nigeria, working with startups and growing businesses
              everywhere. Strategy, identity, websites and launch films, made by a small team that sweats every
              detail and uses AI to move like a big one.
            </p>
            <Link href="/studio" style={{ fontSize: 15, textDecoration: "underline", textUnderlineOffset: 5 }}>
              About the studio
            </Link>
          </div>
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
          <h2 className="serif l">Four ways we help brands get taken seriously.</h2>
        </div>
        {SERVICES.map(([name, line, offers], i) => (
          <div
            key={name}
            className="row"
            style={i === SERVICES.length - 1 ? { borderBottom: "1px solid rgba(17,17,17,.14)" } : undefined}
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

      <StartSection />
    </>
  );
}
