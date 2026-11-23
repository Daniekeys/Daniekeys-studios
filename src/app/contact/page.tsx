import type { Metadata } from "next";
import { Suspense } from "react";

import Clock from "@/components/Clock";
import ContactForm from "@/components/ContactForm";
import { EMAIL, SOCIAL, WHATSAPP, WHATSAPP_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell us what you sell and who you sell to. We'll show you what we'd fix first. Email, WhatsApp or the form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="wrap" style={{ paddingTop: "clamp(72px,8cqw,140px)", paddingBottom: 140 }}>
      <div className="split-r">
        <Suspense>
          <ContactForm />
        </Suspense>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, fontSize: 15, paddingTop: 24 }}>
          <div>
            <span className="mono mut">Email</span>
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div>
            <span className="mono mut">WhatsApp</span>
            <br />
            <a href={WHATSAPP}>{WHATSAPP_LABEL}</a>
          </div>
          <div>
            <span className="mono mut">Studio</span>
            <br />
            Remote-first, from Nigeria. Nigeria time <Clock />
          </div>
          <div>
            <span className="mono mut">Follow</span>
            <br />
            {SOCIAL.map((s, i) => (
              <span key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
                {i < SOCIAL.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
