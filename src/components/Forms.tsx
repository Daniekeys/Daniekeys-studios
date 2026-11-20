"use client";

import { useRouter } from "next/navigation";
import { useState, type CSSProperties } from "react";

import { EMAIL } from "@/lib/site";

// "Tell us what you are building." One line that carries the brief over to
// the contact form.
export function StartField({ style }: { style?: CSSProperties }) {
  const router = useRouter();
  const [value, setValue] = useState("");
  return (
    <form
      className="field s"
      style={style}
      onSubmit={(e) => {
        e.preventDefault();
        router.push(value.trim() ? `/contact?brief=${encodeURIComponent(value.trim())}` : "/contact");
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="A new brand, a website, a launch film..."
        aria-label="Tell us about your project"
      />
      <button type="submit" aria-label="Continue to the contact form">
        &#8594;
      </button>
    </form>
  );
}

// Footer newsletter. There is no mailing list service yet, so this opens an
// email to the studio inbox with the address filled in.
export function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <form
      className="field"
      style={{ maxWidth: 320 }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.trim()) return;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
          "Newsletter signup"
        )}&body=${encodeURIComponent(`Please add ${email.trim()} to the Daniekeys Studios newsletter.`)}`;
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Your email"
        style={{ color: "#F4F3EF" }}
      />
      <button type="submit" aria-label="Sign up">
        &#8594;
      </button>
    </form>
  );
}
