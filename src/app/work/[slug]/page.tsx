import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import MediaBox from "@/components/MediaBox";
import SitePreview from "@/components/SitePreview";
import { CASE_STUDIES, getCaseStudy, type Block } from "@/lib/case-studies";
import { getSite } from "@/lib/sites";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudy(params.slug);
  return cs ? { title: cs.title, description: cs.intro, alternates: { canonical: `/work/${cs.slug}` } } : {};
}

const rule = "1px solid rgba(17,17,17,.14)";

function Section({ label, text }: { label: string; text: string }) {
  return (
    <div className="split" style={{ paddingBlock: 44, borderTop: rule }}>
      <span className="mono mut" style={{ paddingTop: 10 }}>
        {label}
      </span>
      <p className="serif m" style={{ maxWidth: 980 }}>
        {text}
      </p>
    </div>
  );
}

function Gallery({ blocks }: { blocks: Block[] }) {
  // Consecutive image blocks share one full-bleed column; a "line" or "section" breaks it.
  const isText = (b: Block) => b.type === "line" || b.type === "section";
  const groups: Block[][] = [];
  for (const b of blocks) {
    if (isText(b) || !groups.length || isText(groups[groups.length - 1][0])) groups.push([b]);
    else groups[groups.length - 1].push(b);
  }
  return (
    <>
      {groups.map((g, gi) => {
        const first = g[0];
        if (first.type === "line")
          return (
            <section key={gi} className="wrap sec" style={{ textAlign: "center" }}>
              <p className="serif l" style={{ maxWidth: 1000, marginInline: "auto" }}>
                {first.text}
              </p>
            </section>
          );
        if (first.type === "section")
          return (
            <section key={gi} className="wrap" style={{ paddingTop: 120, paddingBottom: 48 }}>
              <div className="split" style={{ borderTop: rule, paddingTop: 28 }}>
                <span className="mono mut" style={{ paddingTop: 8 }}>
                  {first.label}
                </span>
                <p className="serif m" style={{ maxWidth: 980 }}>
                  {first.text}
                </p>
              </div>
            </section>
          );
        return (
          <section key={gi} style={{ display: "flex", flexDirection: "column", gap: 24, paddingInline: 24 }}>
            {g.map((b, i) =>
              b.type === "full" ? (
                <MediaBox
                  key={i}
                  media={b.media}
                  ratio={b.ratio ?? "16/10"}
                  style={b.narrow ? { width: "100%", maxWidth: 720, marginInline: "auto" } : undefined}
                />
              ) : b.type === "pair" || b.type === "trio" ? (
                <div key={i} className={b.type === "pair" ? "g2" : "g3"}>
                  {b.media.map((m) => (
                    <MediaBox key={m.src} media={m} ratio={b.ratio ?? "4/5"} />
                  ))}
                </div>
              ) : b.type === "posts" ? (
                <div key={i} className="g4 keep">
                  {b.media.map((m) => (
                    <MediaBox key={m.src} media={m} ratio="4/5" />
                  ))}
                </div>
              ) : b.type === "screens" ? (
                <div key={i} className="g6">
                  {b.media.map((m) => (
                    <MediaBox key={m.src} media={m} ratio="780/1688" />
                  ))}
                </div>
              ) : b.type === "site" && getSite(b.slug) ? (
                <SitePreview key={i} site={getSite(b.slug)!} />
              ) : null
            )}
          </section>
        );
      })}
    </>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  return (
    <>
      <section>
        <MediaBox media={cs.hero} ratio="16/9" style={{ borderRadius: 0, background: cs.heroBg }} priority />
      </section>

      <section className="wrap" style={{ paddingTop: 72, paddingBottom: 40 }}>
        <div className="split" style={{ alignItems: "end" }}>
          <div className="tags" style={{ alignSelf: "start", paddingTop: 12 }}>
            <span className={cs.kind === "Studio concept" ? "tag concept" : "tag"}>{cs.kind}</span>
            <span className="tag">{cs.industry}</span>
            <span className="tag">{cs.year}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h1 className="serif" style={{ fontSize: "clamp(56px,9cqw,150px)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>
              {cs.title}
            </h1>
            <p className="s mut" style={{ maxWidth: 720 }}>
              {cs.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 120 }}>
        <div className="split">
          <div style={{ display: "flex", flexDirection: "column", gap: 22, fontSize: 15, paddingTop: 44 }}>
            <div>
              <span className="mono mut">Client</span>
              <br />
              {cs.title}
            </div>
            <div>
              <span className="mono mut">Industry</span>
              <br />
              {cs.industry}
            </div>
            <div>
              <span className="mono mut">Services</span>
              <br />
              {cs.services}
            </div>
            <div>
              <span className="mono mut">Team</span>
              <br />
              {cs.team}
            </div>
          </div>
          <div>
            <Section label="Brief" text={cs.brief} />
            <Section label="Challenge" text={cs.challenge} />
            <Section label="Approach" text={cs.approach} />
            {cs.result && <Section label="Result" text={cs.result} />}
          </div>
        </div>
      </section>

      <Gallery blocks={cs.gallery} />

      <section className="wrap sec">
        <div className="split">
          <span className="mono mut">Credits</span>
          <div className="g3" style={{ fontSize: 15 }}>
            {cs.credits.map((c) => (
              <div key={c.role}>
                <span className="mut">{c.role}</span>
                <br />
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Link href={cs.next.href} style={{ display: "block", background: "#111111", color: "#F4F3EF" }}>
        <div
          className="wrap"
          style={{ paddingTop: 80, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24 }}
        >
          <span className="mono" style={{ opacity: 0.6 }}>
            Next project
          </span>
          <span className="mono" style={{ opacity: 0.6 }}>
            {cs.next.title}
          </span>
        </div>
        <div className="wrap">
          <p
            className="serif"
            style={{ fontSize: "clamp(56px,10cqw,170px)", lineHeight: 1, paddingBlock: "28px 48px", letterSpacing: "-0.03em" }}
          >
            {cs.next.title} &#8594;
          </p>
          <MediaBox media={cs.next.media} ratio="16/7" style={{ borderRadius: "6px 6px 0 0" }} />
        </div>
      </Link>
    </>
  );
}
