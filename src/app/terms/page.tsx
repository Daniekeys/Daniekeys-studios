import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Daniekeys Studios | Digital Agency Nigeria",
  description:
    "Review Daniekeys Studios terms for digital strategy, brand identity, website, motion graphics, marketing, and AI services in Nigeria.",
  alternates: {
    canonical: "https://www.daniekeysstudios.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-primary-white text-primary">
      <Navigation />
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-36 md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-blue">
          Legal
        </p>
        <h1 className="mt-4 text-[40px] font-bold leading-tight md:text-[56px]">
          Terms of Service
        </h1>
        <p className="mt-5 text-base leading-8 text-secondary">
          Last updated: June 2, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-8 text-[#444444]">
          <section>
            <h2 className="text-2xl font-semibold text-primary">Scope of Services</h2>
            <p className="mt-3">
              Daniekeys Studios provides AI digital strategy, brand identity design,
              website and app development, motion graphics, video, automation, and
              digital marketing services. Each project is governed by an approved
              proposal, invoice, or written agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">Payments</h2>
            <p className="mt-3">
              Project fees, milestones, deposits, and balances are stated in each
              proposal. Work may pause when required payments are overdue. Deposits
              are generally non-refundable once strategy, design, production, or
              development work has started.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">Revisions and Delivery</h2>
            <p className="mt-3">
              Unless otherwise stated, projects include two rounds of revisions.
              Additional changes, new scope, delayed feedback, or rush requests may
              affect timeline and pricing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">Client Responsibilities</h2>
            <p className="mt-3">
              Clients are responsible for providing accurate information, timely
              feedback, required access, brand assets, approvals, and legal rights to
              any supplied materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">Intellectual Property</h2>
            <p className="mt-3">
              Final approved deliverables transfer to the client after full payment,
              except for third-party tools, licensed assets, reusable frameworks,
              templates, or internal systems owned by Daniekeys Studios or vendors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to
              hello@daniekeysstudios.com.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
