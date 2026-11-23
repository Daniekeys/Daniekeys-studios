"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

import { EMAIL } from "@/lib/site";

const NEEDS = [
  "Growth Diagnosis",
  "Brand identity",
  "Website",
  "UI/UX design",
  "Video editing",
  "Motion and video ads",
  "Flyers and graphics",
  "Social media management",
  "Not sure, advise me",
];

// No form backend yet: Send opens the visitor's email app with everything
// filled in, addressed to the studio inbox.
export default function ContactForm() {
  const params = useSearchParams();
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const needs = f.getAll("need").join(", ");
    const body = [
      `Name: ${f.get("name") ?? ""}`,
      `Email: ${f.get("email") ?? ""}`,
      `Company: ${f.get("company") ?? ""}`,
      `WhatsApp: ${f.get("whatsapp") ?? ""}`,
      `Needs: ${needs || "Not sure yet"}`,
      "",
      String(f.get("message") ?? ""),
    ].join("\n");
    const subject = `New project: ${f.get("company") || f.get("name") || "website enquiry"}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 36 }} onSubmit={submit}>
      <h1 className="serif xl">Let&apos;s get you more customers.</h1>
      <div className="g2">
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="mono mut">Name</span>
          <span className="field">
            <input name="name" type="text" placeholder="Your name" required autoComplete="name" />
          </span>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="mono mut">Email</span>
          <span className="field">
            <input name="email" type="email" placeholder="you@company.com" required autoComplete="email" />
          </span>
        </label>
      </div>
      <div className="g2">
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="mono mut">Company</span>
          <span className="field">
            <input name="company" type="text" placeholder="Company and website" autoComplete="organization" />
          </span>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="mono mut">WhatsApp</span>
          <span className="field">
            <input name="whatsapp" type="tel" placeholder="Your WhatsApp number" autoComplete="tel" />
          </span>
        </label>
      </div>
      <fieldset style={{ border: 0, padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        <legend className="mono mut" style={{ padding: 0, marginBottom: 12 }}>
          What do you need
        </legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {NEEDS.map((n) => (
            <label key={n} className="pill line check">
              <input type="checkbox" name="need" value={n} /> {n}
            </label>
          ))}
        </div>
      </fieldset>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="mono mut">Tell us more</span>
        <span className="field" style={{ alignItems: "flex-start" }}>
          <textarea
            name="message"
            rows={4}
            defaultValue={params.get("brief") ?? ""}
            placeholder="What do you sell, who buys it, and what's not working right now?"
            style={{ resize: "vertical" }}
          />
        </span>
      </label>
      <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <button type="submit" className="pill" style={{ height: 56, padding: "0 32px" }}>
          Send &#8594;
        </button>
        {sent && (
          <span className="mut" style={{ fontSize: 15 }}>
            Your email app should open with this filled in. If it doesn&apos;t, write to {EMAIL}.
          </span>
        )}
      </div>
    </form>
  );
}
