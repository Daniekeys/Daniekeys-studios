"use client";

import Link from "next/link";
import { useState } from "react";

import WorkTile from "./WorkTile";
import { img } from "@/lib/media";
import {
  INDUSTRIES,
  SERVICES,
  WORK,
  industryLabel,
  serviceLabel,
  type Industry,
  type Service,
} from "@/lib/work";

export default function WorkIndex() {
  const [svc, setSvc] = useState<Service | "all">("all");
  const [ind, setInd] = useState<Industry | "all">("all");
  const [view, setView] = useState<"grid" | "list">("grid");

  const items = WORK.filter((w) => (svc === "all" || w.service === svc) && (ind === "all" || w.industry === ind));
  const href = (slug?: string) => (slug ? `/work/${slug}` : undefined);

  return (
    <>
      <div
        className="wrap"
        style={{ position: "sticky", top: 12, zIndex: 5, display: "flex", justifyContent: "center", paddingBottom: 40 }}
      >
        <div className="filter">
          <span>We design</span>
          <select aria-label="Service" value={svc} onChange={(e) => setSvc(e.target.value as Service | "all")}>
            <option value="all">everything</option>
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.menu}
              </option>
            ))}
          </select>
          <span>for</span>
          <select aria-label="Industry" value={ind} onChange={(e) => setInd(e.target.value as Industry | "all")}>
            <option value="all">every industry</option>
            {INDUSTRIES.map((i) => (
              <option key={i.value} value={i.value}>
                {i.menu}
              </option>
            ))}
          </select>
          <span className="mut" style={{ fontSize: 13 }}>
            {items.length} {items.length === 1 ? "project" : "projects"}
          </span>
          <div className="seg">
            <button type="button" className={view === "grid" ? "on" : ""} onClick={() => setView("grid")}>
              Grid
            </button>
            <button type="button" className={view === "list" ? "on" : ""} onClick={() => setView("list")}>
              Index
            </button>
          </div>
        </div>
      </div>

      <section className="wrap" style={{ paddingBottom: 140 }}>
        {items.length === 0 ? (
          <p className="serif m mut" style={{ textAlign: "center", paddingBlock: 80 }}>
            Nothing here yet. This is next on our list.
          </p>
        ) : view === "grid" ? (
          <div className="g2" style={{ rowGap: 64 }}>
            {items.map((w) => (
              <div key={w.title} style={{ gridColumn: w.wide ? "1 / -1" : "auto" }}>
                <WorkTile
                  title={w.title}
                  blurb={w.blurb}
                  media={w.media}
                  wide={w.wide}
                  concept={w.concept}
                  tags={[serviceLabel(w.service), industryLabel(w.industry)]}
                  href={href(w.caseStudy)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ borderBottom: "1px solid rgba(17,17,17,.14)" }}>
            <div className="row lrow mono mut hide-m" style={{ paddingBlock: 12 }}>
              <span />
              <span>Project</span>
              <span>Industry</span>
              <span>Service</span>
              <span>Year</span>
            </div>
            {items.map((w) => {
              const cells = (
                <>
                  <div className="ph" style={{ aspectRatio: "4/3", width: 96 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img(w.thumb, 400)} alt={w.title} loading="lazy" />
                  </div>
                  <span style={{ fontSize: 18 }}>
                    {w.title}
                    {w.concept && (
                      <span className="tag concept" style={{ marginLeft: 10, verticalAlign: "middle" }}>
                        Studio concept
                      </span>
                    )}
                  </span>
                  <span className="mut c3">{industryLabel(w.industry)}</span>
                  <span className="mut c4">{serviceLabel(w.service)}</span>
                  <span className="mut c5">{w.year}</span>
                </>
              );
              return w.caseStudy ? (
                <Link key={w.title} href={`/work/${w.caseStudy}`} className="row lrow" style={{ paddingBlock: 14 }}>
                  {cells}
                </Link>
              ) : (
                <div key={w.title} className="row lrow" style={{ paddingBlock: 14 }}>
                  {cells}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
