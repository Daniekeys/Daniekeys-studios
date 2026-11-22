"use client";

import { useEffect, useRef, useState } from "react";

import type { Site } from "@/lib/sites";

// One device frame. Shows a screenshot first (fast), and loads the real site
// inside it when clicked, scaled down from its true width.
function Screen({ src, poster, width, height, label }: { src: string; poster: string; width: number; height: number; label: string }) {
  const [live, setLive] = useState(false);
  const [scale, setScale] = useState(0);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={box} className="site-view" style={{ aspectRatio: `${width}/${height}` }}>
      {live ? (
        <iframe
          src={src}
          title={label}
          style={{ width, height, transform: `scale(${scale})` }}
        />
      ) : (
        <button type="button" onClick={() => setLive(true)} aria-label={`Load ${label} here`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt={label} loading="lazy" decoding="async" />
          <span className="pill">Try it here</span>
        </button>
      )}
    </div>
  );
}

export default function SitePreview({ site }: { site: Site }) {
  return (
    <div className="site-prev">
      <div className="site-row">
        <div className="site-browser">
          <div className="site-bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>{site.title}, live website</span>
          </div>
          <Screen src={site.path} poster={site.desktop} width={1440} height={900} label={`${site.title} website on desktop`} />
        </div>
        <div className="site-phone">
          <Screen src={site.path} poster={site.mobile} width={390} height={844} label={`${site.title} website on mobile`} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 32 }}>
        <a className="pill" href={site.url}>
          Open the full website &#8599;
        </a>
      </div>
    </div>
  );
}
