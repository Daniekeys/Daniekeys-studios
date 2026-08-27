"use client";

import { useEffect, useState } from "react";

import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

import Button from "@/components/shared/Button";
import Eyebrow from "@/components/shared/Eyebrow";
import { SelectField, TextAreaField, TextField } from "@/components/shared/FormFields";
import GridOverlay from "@/components/shared/GridOverlay";

// WhatsApp deep-link — number + pre-filled message verbatim from
// 24-PAGE-contact.md. Same number as the phone line and the footer.
const WHATSAPP_URL =
  "https://wa.me/2349030909624?text=Hello!%20I%27d%20like%20to%20discuss%20a%20project.";

// Service options from 24-PAGE-contact.md. Each `value` is the exact slug the
// /services per-row CTAs link with (`/contact?service=<slug>`, Batch 9), so a
// param round-trips straight into this select.
const SERVICE_OPTIONS = [
  { value: "ai-strategy", label: "AI Digital Strategy" },
  { value: "brand-identity", label: "Brand Identity & Design" },
  { value: "web-app", label: "Website & App Development" },
  { value: "motion-video", label: "Motion Graphics & Video" },
  { value: "ai-automation", label: "AI Chatbots & Automation" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "rebranding", label: "Rebranding" },
  { value: "training", label: "Training" },
  { value: "not-sure", label: "Not Sure Yet" },
];

// Budget ranges from 24-PAGE-contact.md — matched to the real pricing tiers.
const BUDGET_OPTIONS = [
  "Under ₦100,000",
  "₦100,000–₦300,000",
  "₦300,000–₦700,000",
  "₦700,000+",
  "Let's Discuss",
].map((range) => ({ value: range, label: range }));

// /pricing links here with ?package= / ?retainer= / ?type=custom (Batch 11).
// There's no package field on this form, so those params seed the message
// instead — the person still doesn't have to re-type what they came in for.
const PACKAGE_LABELS: Record<string, string> = {
  starter: "Starter Package",
  business: "Business Package",
  premium: "Premium Package",
};
const RETAINER_LABELS: Record<string, string> = {
  "content-starter": "Content Starter retainer",
  "growth-partner": "Growth Partner retainer",
  "agency-partner": "Agency Partner retainer",
};

const INFO_ROWS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@daniekeysstudios.com",
    href: "mailto:hello@daniekeysstudios.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 903 090 9624",
    href: "tel:+2349030909624",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nigeria (serving Pan-Africa & globally)",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 9am–6pm WAT",
    href: null,
  },
];

// Same real links as the footer.
const SOCIALS = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/daniekeys_studios/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/daniekeys-studios/",
    label: "LinkedIn",
  },
  { icon: Youtube, href: "https://www.youtube.com/@Danieskeys", label: "YouTube" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61583310572575",
    label: "Facebook",
  },
];

// The project already carries an EmailJS integration (@emailjs/browser). Next
// inlines these at build time; they're currently unset (see 00-OVERVIEW.md open
// items), so `emailjsReady` is false and the form reports an honest
// "not connected yet" state instead of faking a success.
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const emailjsReady = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY,
);

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success" }
  | { type: "error" }
  | { type: "unconfigured" };

const EMPTY_FORM: ContactForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactPageContent() {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  // ?service= / ?package= / ?retainer= / ?type=custom pre-fill. Read from the
  // URL on mount (client-only) — no useSearchParams, so no Suspense boundary
  // needed for a progressive-enhancement nicety.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const service = params.get("service");
    if (service && SERVICE_OPTIONS.some((option) => option.value === service)) {
      setForm((prev) => ({ ...prev, service }));
    }

    const pkg = params.get("package");
    const retainer = params.get("retainer");
    const type = params.get("type");
    let intro = "";
    if (pkg && PACKAGE_LABELS[pkg]) {
      intro = `Hi — I'd like to discuss the ${PACKAGE_LABELS[pkg]}.`;
    } else if (retainer && RETAINER_LABELS[retainer]) {
      intro = `Hi — I'd like to discuss the ${RETAINER_LABELS[retainer]}.`;
    } else if (type === "custom") {
      intro = "Hi — I'd like to discuss a custom scope for my project.";
    }
    if (intro) {
      setForm((prev) =>
        prev.message ? prev : { ...prev, message: `${intro}\n\n` },
      );
    }
  }, []);

  const setField = (key: keyof ContactForm) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const firstName = form.name.trim().split(" ")[0] || "there";
  const serviceLabel =
    SERVICE_OPTIONS.find((option) => option.value === form.service)?.label ??
    "Not specified";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const el = event.currentTarget;
    if (!el.checkValidity()) {
      el.reportValidity();
      return;
    }
    if (!emailjsReady) {
      setStatus({ type: "unconfigured" });
      return;
    }
    setStatus({ type: "sending" });
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          phone: form.phone || "—",
          service: serviceLabel,
          budget: form.budget || "—",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY!,
      );
      setStatus({ type: "success" });
    } catch {
      setStatus({ type: "error" });
    }
  };

  // Global scroll-reveal (05-ANIMATIONS-AND-INTERACTIONS.md). Reduced motion:
  // render the final state immediately — no translate, no delay — matching the
  // ProcessStep / ProcessSection / ProjectCard / PricingPageContent fixes so
  // nothing can freeze at opacity:0.
  const reveal = (delay = 0) =>
    prefersReducedMotion
      ? {
          initial: false as const,
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
            delay,
          },
        };

  // State-swap panels (success / notice) animate on mount, not on scroll.
  // Reduced motion: no entrance, just the static panel.
  const panelMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <>
      {/* Page header — compact (eyebrow + H1 + supporting line), not a full
          hero. On --black so the transparent nav-over-header stays legible,
          matching /about, /services, /portfolio and /pricing. */}
      <section className="relative overflow-hidden bg-primary pb-space-9 pt-24 lg:pb-space-10 lg:pt-32">
        <GridOverlay />
        <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
          <Eyebrow theme="dark">{"// Get In Touch"}</Eyebrow>
          <h1 className="mt-space-4 max-w-4xl text-ds-hero font-heading text-primary-white">
            Not Sure Which Service You Need? Let&apos;s Figure It Out Together.
          </h1>
          <p className="mt-space-5 max-w-2xl text-ds-body-lg text-light-dark">
            Book a free 30-minute discovery call. No jargon. No hard sell. Just an
            honest conversation about your business and what will actually move
            the needle.
          </p>
        </div>
      </section>

      {/* Contact form + info sidebar. On --off-white so the hairline-bordered
          form fields (04-COMPONENTS-SHARED.md Form Fields) read with proper
          contrast. Two columns on desktop (form ~60% / info ~37%), stacked on
          mobile with the form first (24-PAGE-contact.md). */}
      <section className="relative overflow-hidden bg-off-white py-space-8 lg:py-space-10">
        <GridOverlay />

        <div className="relative z-10 mx-auto max-w-[1280px] px-space-4 md:px-space-6">
          <div className="grid gap-space-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-space-10">
            {/* Form */}
            <motion.div {...reveal()}>
              <h2 className="text-ds-h3 font-heading text-primary">
                Send Us a Message
              </h2>
              <p className="mt-space-3 max-w-lg text-ds-body text-light-dark">
                Tell us a little about your project and we&apos;ll get back to you
                within one business day.
              </p>

              {status.type === "success" ? (
                <motion.div
                  {...panelMotion}
                  className="mt-space-6 rounded-radius-lg border border-dk-blue-1/30 bg-white p-space-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-radius-full bg-dk-blue-1/10">
                    <Check className="h-5 w-5 text-dk-blue-1" />
                  </span>
                  <h3 className="mt-space-4 text-ds-h4 text-primary">
                    Message sent — thanks, {firstName}.
                  </h3>
                  <p className="mt-space-2 text-ds-body text-light-dark">
                    We&apos;ve got your details and will reply within one business
                    day. If it&apos;s urgent, WhatsApp us on +234 903 090 9624.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-space-6 space-y-space-5"
                >
                  <div className="grid gap-space-5 sm:grid-cols-2">
                    <TextField
                      id="contact-name"
                      name="name"
                      label="Full Name"
                      required
                      autoComplete="name"
                      className="bg-white"
                      value={form.name}
                      onChange={(e) => setField("name")(e.target.value)}
                    />
                    <TextField
                      id="contact-email"
                      name="email"
                      type="email"
                      label="Email"
                      required
                      autoComplete="email"
                      className="bg-white"
                      value={form.email}
                      onChange={(e) => setField("email")(e.target.value)}
                    />
                  </div>

                  <TextField
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    label="Phone Number (optional)"
                    autoComplete="tel"
                    className="bg-white"
                    value={form.phone}
                    onChange={(e) => setField("phone")(e.target.value)}
                  />

                  <SelectField
                    id="contact-service"
                    name="service"
                    label="Service Interested In"
                    required
                    placeholder="Select a service"
                    options={SERVICE_OPTIONS}
                    className="bg-white"
                    value={form.service}
                    onChange={(e) => setField("service")(e.target.value)}
                  />

                  <SelectField
                    id="contact-budget"
                    name="budget"
                    label="Project Budget (optional)"
                    placeholder="Select a range"
                    options={BUDGET_OPTIONS}
                    className="bg-white"
                    value={form.budget}
                    onChange={(e) => setField("budget")(e.target.value)}
                  />

                  <TextAreaField
                    id="contact-message"
                    name="message"
                    label="Message"
                    required
                    rows={6}
                    placeholder="Tell us about your business and what you're looking to achieve..."
                    className="bg-white"
                    value={form.message}
                    onChange={(e) => setField("message")(e.target.value)}
                  />

                  {(status.type === "unconfigured" ||
                    status.type === "error") && (
                    <motion.div
                      {...panelMotion}
                      role="status"
                      className="rounded-radius-md border border-dk-blue-1/30 bg-dk-blue-1/[0.06] p-space-4 text-ds-small text-primary"
                    >
                      {status.type === "unconfigured" ? (
                        <>
                          This form isn&apos;t connected to a mailbox yet. Please
                          email{" "}
                          <a
                            href="mailto:hello@daniekeysstudios.com"
                            className="font-semibold text-dk-blue-1 underline underline-offset-2"
                          >
                            hello@daniekeysstudios.com
                          </a>{" "}
                          or{" "}
                          <a
                            href={WHATSAPP_URL}
                            className="font-semibold text-dk-blue-1 underline underline-offset-2"
                          >
                            message us on WhatsApp
                          </a>{" "}
                          and we&apos;ll get right back to you.
                        </>
                      ) : (
                        <>
                          Something went wrong sending your message. Please email{" "}
                          <a
                            href="mailto:hello@daniekeysstudios.com"
                            className="font-semibold text-dk-blue-1 underline underline-offset-2"
                          >
                            hello@daniekeysstudios.com
                          </a>{" "}
                          or WhatsApp us and we&apos;ll pick it up.
                        </>
                      )}
                    </motion.div>
                  )}

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={status.type === "sending"}
                  >
                    {status.type === "sending" ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info sidebar */}
            <motion.aside
              {...reveal(0.08)}
              className="lg:border-l lg:border-primary/10 lg:pl-space-8"
            >
              <h2 className="text-ds-h3 font-heading text-primary">
                Other Ways to Reach Us
              </h2>

              <dl className="mt-space-6 divide-y divide-primary/10 border-y border-primary/10">
                {INFO_ROWS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-space-4 py-space-4">
                    <Icon className="mt-1 h-4 w-4 flex-none text-dk-blue-1" />
                    <div>
                      <dt className="text-ds-small text-light-dark">{label}</dt>
                      <dd className="mt-space-1 text-ds-body text-primary">
                        {href ? (
                          <a
                            href={href}
                            className="transition-colors hover:text-dk-blue-1"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-space-6">
                <Button variant="secondary" href={WHATSAPP_URL}>
                  WhatsApp Us Now
                </Button>
              </div>

              <div className="mt-space-6">
                <p className="text-ds-small text-light-dark">Follow our work</p>
                <div className="mt-space-3 flex gap-space-3">
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-radius-md border border-primary/15 text-primary transition-colors hover:border-dk-blue-1 hover:text-dk-blue-1"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>

          {/* CTA reinforcement — trust line (24-PAGE-contact.md, optional).
              Stars in --dk-blue-1 per 01-DESIGN-SYSTEM.md. Not linked: no Google
              reviews URL is published yet (flagged in 00-OVERVIEW.md open
              items). */}
          <motion.p
            {...reveal()}
            className="mt-space-9 flex flex-wrap items-center justify-center gap-space-2 text-center text-ds-small text-light-dark"
          >
            <span aria-hidden className="tracking-[0.15em] text-dk-blue-1">
              ★★★★★
            </span>
            <span>Rated 5.0 by 30+ clients on Google</span>
          </motion.p>
        </div>
      </section>
    </>
  );
}
