import type { Metadata } from "next";

import WorkIndex from "@/components/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Brand identity, websites, launch films, motion and social content by Daniekeys Studios, an AI-powered creative and growth studio from Nigeria.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: "clamp(72px,8cqw,140px)", paddingBottom: 56 }}>
        <div className="split" style={{ alignItems: "end" }}>
          <h1 className="serif" style={{ fontSize: "clamp(64px,11cqw,180px)", lineHeight: 0.9, letterSpacing: "-0.03em" }}>
            Work
          </h1>
          <p className="s mut" style={{ maxWidth: 560 }}>
            Brands, websites and films for ambitious businesses. Real clients and studio concepts, each one made to the
            same standard.
          </p>
        </div>
      </section>
      <WorkIndex />
    </>
  );
}
