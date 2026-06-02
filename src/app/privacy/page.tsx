import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Daniekeys Studios | Data Protection Nigeria",
  description:
    "Read how Daniekeys Studios handles personal data, enquiries, analytics, and client information in Nigeria and Africa with clear protection.",
  alternates: {
    canonical: "https://www.daniekeysstudios.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-primary-white text-primary">
      <Navigation />
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-36 md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-blue">
          Legal
        </p>
        <h1 className="mt-4 text-[40px] font-bold leading-tight md:text-[56px]">
          Privacy Policy
        </h1>
        <p className="mt-5 text-base leading-8 text-secondary">
          Last updated: June 2, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-8 text-[#444444]">
          <section>
            <h2 className="text-2xl font-semibold text-primary">Information We Collect</h2>
            <p className="mt-3">
              Daniekeys Studios may collect your name, email address, phone number,
              company details, project brief, and any information you submit through
              our contact forms, WhatsApp links, discovery calls, or client onboarding
              process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">How We Use Information</h2>
            <p className="mt-3">
              We use your information to respond to enquiries, prepare proposals,
              deliver services, manage client relationships, improve our website, and
              send relevant project or service updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">Data Protection</h2>
            <p className="mt-3">
              We take reasonable technical and organisational measures to protect
              personal data from unauthorised access, loss, misuse, or disclosure.
              Client project materials are handled confidentially unless written
              permission is granted for portfolio use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">Third-Party Services</h2>
            <p className="mt-3">
              We may use trusted third-party tools for analytics, communication,
              payment processing, hosting, automation, or project delivery. These
              providers only receive information needed to perform their services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary">Your Rights</h2>
            <p className="mt-3">
              You may request access, correction, deletion, or restriction of your
              personal information by contacting hello@daniekeysstudios.com. We will
              respond within a reasonable timeframe.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
