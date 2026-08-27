import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/shared/Eyebrow";
import GridOverlay from "@/components/shared/GridOverlay";

export const metadata: Metadata = {
  title: "Privacy Policy — Daniekeys Studios",
  description:
    "How Daniekeys Studios handles personal data collected through this site. Placeholder structure pending final legal copy.",
  alternates: {
    canonical: "https://www.daniekeysstudios.com/legal/privacy-policy",
  },
  // Stub content — keep out of the index until real, reviewed policy copy
  // replaces the placeholders below. Flip to index:true at launch.
  robots: { index: false, follow: true },
};

// Generic structural section headings only. No binding terms, no dates, no
// jurisdiction-specific clauses — every section body is an explicit
// placeholder pending real legal copy (Batch 13, 90-BUILD-PLAN-BATCHES.md).
const sections = [
  "Data We Collect",
  "How We Use Your Data",
  "Cookies & Analytics",
  "Data Sharing & Third Parties",
  "Data Retention",
  "Data Security",
  "Your Rights",
  "Children's Privacy",
  "Changes to This Policy",
  "Contact Us",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main>
        {/* Page header — shared compact idiom (eyebrow + H1 + supporting line,
            GridOverlay, bg-primary), matching /about, /services, /portfolio,
            /pricing and /contact. */}
        <section className="relative overflow-hidden bg-primary pb-space-9 pt-24 lg:pb-space-10 lg:pt-32">
          <GridOverlay />
          <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
            <Eyebrow theme="dark">{"// Legal"}</Eyebrow>
            <h1 className="mt-space-4 max-w-4xl text-ds-hero font-heading text-primary-white">
              Privacy Policy
            </h1>
            <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
              How Daniekeys Studios collects, uses, and protects personal
              information submitted through this website.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
          <GridOverlay />
          <div className="relative z-10 mx-auto max-w-3xl px-space-4 md:px-space-6">
            {/* Visible placeholder banner — this is not a code comment on
                purpose; it must be obvious to anyone viewing the page. */}
            <div className="flex gap-space-4 rounded-radius-lg border border-dashed border-dk-blue-1/50 bg-white p-space-5">
              <AlertTriangle className="mt-1 h-5 w-5 flex-none text-dk-blue-1" />
              <p className="text-ds-small text-light-dark">
                <span className="font-semibold text-primary">
                  Placeholder content — not a binding policy.
                </span>{" "}
                The sections below are a structural outline only. Real,
                lawyer-reviewed policy text must replace every placeholder note
                before this site goes live.
              </p>
            </div>

            <div className="mt-space-8 space-y-space-7">
              {sections.map((heading) => (
                <div key={heading}>
                  <h2 className="text-ds-h4 font-heading text-primary">
                    {heading}
                  </h2>
                  <p className="mt-space-3 text-ds-body text-light-dark">
                    [Placeholder — replace with real policy text.]
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-space-8 text-ds-small text-light-dark">
              Questions about this policy can be sent to{" "}
              <a
                href="mailto:hello@daniekeysstudios.com"
                className="text-dk-blue-1 underline underline-offset-4"
              >
                hello@daniekeysstudios.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
