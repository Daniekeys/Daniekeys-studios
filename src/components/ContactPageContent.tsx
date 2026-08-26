"use client";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronDown,
  ClipboardList,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const serviceOptions = [
  "AI Digital Strategy & Consulting",
  "Brand Identity Design (New brand)",
  "Rebranding (Existing brand refresh)",
  "Website Design & Development",
  "E-commerce Website",
  "Mobile App Development",
  "Motion Graphics & Video Production",
  "AI Chatbot & Automation Setup",
  "Digital Marketing & Social Media (Monthly)",
  "Training & Upskilling Workshop",
  "Full Business Package (Multiple services)",
  "Not sure yet — let's talk",
];

const budgetOptions = [
  "Under ₦100,000",
  "₦100,000 – ₦300,000",
  "₦300,000 – ₦650,000",
  "₦650,000 – ₦1,500,000",
  "Above ₦1,500,000",
  "Let's discuss / Custom",
  "International budget (USD/GBP/EUR)",
];

const timelineOptions = [
  "Urgently (within 1 week)",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Planning / Exploring options",
];

const howFoundOptions = [
  "Google Search",
  "Instagram",
  "LinkedIn",
  "Referral",
  "YouTube",
  "Facebook",
  "Other",
];

const faqs = [
  {
    q: "What happens after I fill in the form?",
    a: "A real person (not a bot) will read your project details and send you a personalised response within 24 hours. If your project is urgent, mention it and we'll prioritise your reply.",
  },
  {
    q: "Do I need to know exactly what I want before reaching out?",
    a: 'Not at all. Many of our best clients came to us saying "I know I need help, I\'m just not sure with what." We\'ll ask the right questions on the discovery call and figure it out together.',
  },
  {
    q: "Is the discovery call really free?",
    a: "Completely. It's a 30-minute conversation — no agenda except understanding your business. We don't charge for the call, and there's no obligation to hire us afterwards.",
  },
  {
    q: "How long does it take to get a proposal after the call?",
    a: "We deliver a written proposal within 48 hours of your discovery call. It includes a clear scope, timeline, and final price — no vague estimates.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We're happy to sign a mutual NDA before sharing sensitive business information. Just let us know when you reach out.",
  },
];

const trustSignals = [
  {
    Icon: ClipboardList,
    title: "Clear Proposal",
    body: "Within 48hrs of your call",
  },
  { Icon: Clock, title: "24hr Response", body: "To every enquiry" },
  { Icon: Shield, title: "No Commitment", body: "First call is free" },
  {
    Icon: Globe,
    title: "Remote-Friendly",
    body: "Work with us from anywhere",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const inputCls = (hasError: boolean) =>
  [
    "w-full bg-white rounded-lg px-4 py-3 text-[15px] text-[#111] placeholder-[#999] transition-all outline-none border",
    hasError
      ? "border-[#EF4444] focus:border-[#EF4444] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
      : "border-[#E0E0E0] focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(43,107,255,0.1)]",
  ].join(" ");

const selectCls = (hasError: boolean) =>
  [
    "w-full bg-white rounded-lg px-4 py-3 text-[15px] text-[#111] transition-all outline-none border appearance-none pr-10 cursor-pointer",
    hasError
      ? "border-[#EF4444] focus:border-[#EF4444] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
      : "border-[#E0E0E0] focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(43,107,255,0.1)]",
  ].join(" ");

function FieldGroup({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-[#333] mb-1.5">
        {label}
        {required && <span className="text-accent-blue ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-[12px] text-[#EF4444] mt-1">{error}</p>}
    </div>
  );
}

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
    </div>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  howFound: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

// ─── Component ───────────────────────────────────────────────────────────────

export default function ContactPageContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    howFound: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const set = (key: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Full name is required";
    if (!formData.email.trim()) e.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Please enter a valid email address";
    if (!formData.service) e.service = "Please select a service";
    if (!formData.budget) e.budget = "Please select a budget range";
    if (!formData.message.trim())
      e.message = "Please tell us about your project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          howFound: formData.howFound,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setIsSubmitted(true);
    } catch {
      setErrors((prev) => ({
        ...prev,
        message:
          "Failed to send. Please try again or email us directly at hello@daniekeysstudios.com",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const firstName = formData.name.split(" ")[0] || "there";
  const isFormValid = !!(
    formData.name &&
    formData.email &&
    formData.service &&
    formData.budget &&
    formData.message
  );

  const waLink =
    "https://wa.me/2349030909624?text=Hello!%20I%27d%20like%20to%20discuss%20a%20project%20with%20Daniekeys%20Studios.";

  return (
    <div className="bg-primary text-white ">
      {/* ── SECTION 2: HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-32 px-6 md:px-8 min-h-[600px] flex items-center">
        {/* Subtle grid overlay — matches homepage */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Right-side image — two professionals in a conversation */}
        <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
            alt="African professionals in a business conversation — Daniekeys Studios contact"
            fill
            priority
            sizes="52vw"
            className="object-cover opacity-60"
          />
          {/* Fade from left so content stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/10" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto w-full  px-2 md:px-8">
          {/* Breadcrumb */}
          <nav
            className="text-sm text-secondary mb-8"
            aria-label="Breadcrumb"
          >
            <a href="/" className="hover:text-primary-white transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-primary-white">Contact</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center border border-accent-blue bg-accent-blue/10 text-accent-blue-lighter text-[13px] font-medium px-4 py-1.5 rounded-full mb-6 tracking-wider">
            LET&apos;S TALK
          </div>

          {/* H1 */}
          <h1 className="text-[40px] md:text-[64px] font-extrabold text-primary-white leading-[1.1] mb-6 max-w-2xl animate-fade-up">
            Every Great Project
            <br />
            Starts With a
            <br />
            <span className="text-accent-blue">Conversation.</span>
          </h1>

          {/* Subhead */}
          <p className="text-[18px] text-secondary leading-relaxed max-w-[540px] mb-10 animate-fade-up [animation-delay:150ms]">
            Tell us what you&apos;re building. We&apos;ll tell you exactly how
            we can help — and what it&apos;ll cost. Honest, transparent, and
            always worth the call.
          </p>

          {/* Contact Method Pills */}
          <div className="flex flex-wrap gap-3 animate-fade-up [animation-delay:300ms]">
            {[
              {
                href: "tel:+2349030909624",
                label: "Call Now",
                Icon: Phone,
                external: false,
              },
              {
                href: waLink,
                label: "WhatsApp",
                Icon: MessageCircle,
                external: true,
              },
              {
                href: "mailto:hello@daniekeysstudios.com",
                label: "Email",
                Icon: Mail,
                external: false,
              },
              {
                href: "#project-form",
                label: "Book a Call",
                Icon: Calendar,
                external: false,
              },
            ].map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex items-center gap-2 bg-[#1A1A1A] border border-[#333] text-primary-white text-[14px] px-5 py-2.5 rounded-full hover:bg-accent-blue hover:border-accent-blue transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MAIN CONTACT LAYOUT ───────────────────────────────── */}
      <section
        id="project-form"
        className="bg-primary-white py-24 px-6 md:px-8"
      >
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* LEFT: Form (55%) */}
          <div className="w-full lg:w-[55%]">
            <h2 className="text-[28px] font-bold text-[#111] mb-2">
              Start Your Project
            </h2>
            <p className="text-[14px] text-secondary mb-8">
              Fill in a few details and we&apos;ll get back to you within 24
              hours with a tailored response — not a generic auto-reply.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#F0FFF4] border border-[#22C55E] rounded-2xl p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#111] mb-3">
                  Message Received!
                </h3>
                <p className="text-[#333] mb-6">
                  Thanks, <strong>{firstName}</strong>! We&apos;ve received your
                  project details and will get back to you within 24 hours with
                  a personalised response.
                </p>
                <div className="text-left space-y-3 text-sm text-[#555]">
                  <p className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-accent-blue shrink-0" />
                    <span>
                      Follow us on Instagram for latest work{" "}
                      <a
                        href="https://www.instagram.com/daniekeys_studios/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-blue font-medium hover:underline"
                      >
                        @daniekeys_studios
                      </a>
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-accent-blue shrink-0" />
                    <span>
                      <a
                        href="/portfolio"
                        className="text-accent-blue font-medium hover:underline"
                      >
                        Check out our portfolio
                      </a>{" "}
                      to see recent projects
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-accent-blue shrink-0" />
                    <span>
                      WhatsApp us directly if it&apos;s urgent:{" "}
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-blue font-medium hover:underline"
                      >
                        +234 903 090 9624
                      </a>
                    </span>
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Row 1: Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <FieldGroup
                    label="Full Name"
                    required
                    error={errors.name}
                  >
                    <input
                      type="text"
                      value={formData.name}
                      onChange={set("name")}
                      placeholder="John Doe"
                      className={inputCls(!!errors.name)}
                    />
                  </FieldGroup>
                  <FieldGroup
                    label="Email Address"
                    required
                    error={errors.email}
                  >
                    <input
                      type="email"
                      value={formData.email}
                      onChange={set("email")}
                      placeholder="john@example.com"
                      className={inputCls(!!errors.email)}
                    />
                  </FieldGroup>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="grid md:grid-cols-2 gap-5">
                  <FieldGroup label="Phone Number (WhatsApp preferred)">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={set("phone")}
                      placeholder="+234 XXX XXX XXXX"
                      className={inputCls(false)}
                    />
                  </FieldGroup>
                  <FieldGroup label="Company / Brand Name">
                    <input
                      type="text"
                      value={formData.company}
                      onChange={set("company")}
                      placeholder="Your company name"
                      className={inputCls(false)}
                    />
                  </FieldGroup>
                </div>

                {/* Row 3: Service */}
                <FieldGroup
                  label="What do you need help with?"
                  required
                  error={errors.service}
                >
                  <SelectWrapper>
                    <select
                      value={formData.service}
                      onChange={set("service")}
                      className={selectCls(!!errors.service)}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </SelectWrapper>
                </FieldGroup>

                {/* Row 4: Budget */}
                <FieldGroup
                  label="Budget Range"
                  required
                  error={errors.budget}
                >
                  <SelectWrapper>
                    <select
                      value={formData.budget}
                      onChange={set("budget")}
                      className={selectCls(!!errors.budget)}
                    >
                      <option value="">Select your budget</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </SelectWrapper>
                </FieldGroup>

                {/* Row 5: Timeline */}
                <FieldGroup label="When do you need this?">
                  <SelectWrapper>
                    <select
                      value={formData.timeline}
                      onChange={set("timeline")}
                      className={selectCls(false)}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </SelectWrapper>
                </FieldGroup>

                {/* Row 6: Project details */}
                <FieldGroup
                  label="Tell us about your project"
                  required
                  error={errors.message}
                >
                  <textarea
                    value={formData.message}
                    onChange={set("message")}
                    rows={5}
                    style={{ minHeight: 120, resize: "vertical" }}
                    placeholder="e.g. We are a food delivery startup in Lagos looking for a complete brand identity and landing page website. We're launching in 3 months and need something that feels premium and trustworthy..."
                    className={inputCls(!!errors.message)}
                  />
                </FieldGroup>

                {/* Row 7: How found */}
                <FieldGroup label="How did you find us? (Optional)">
                  <SelectWrapper>
                    <select
                      value={formData.howFound}
                      onChange={set("howFound")}
                      className={selectCls(false)}
                    >
                      <option value="">Select</option>
                      {howFoundOptions.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </SelectWrapper>
                </FieldGroup>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={[
                    "w-full py-4 text-[16px] font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-white",
                    isFormValid && !isSubmitting
                      ? "bg-accent-blue hover:bg-accent-blue-light cursor-pointer"
                      : "bg-accent-blue-light cursor-not-allowed",
                  ].join(" ")}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send My Project Details →"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Info Panel (45%) */}
          <div className="w-full lg:w-[45%]">
            <div className="bg-primary rounded-2xl p-8 sticky top-28">
              <h2 className="text-[20px] font-semibold text-white mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-3">
                {/* Phone */}
                <div className="border border-[#222] rounded-xl p-4">
                  <div className="flex items-center gap-2.5 mb-1">
                    <Phone className="w-4 h-4 text-accent-blue" />
                    <span className="text-[13px] font-semibold text-white">
                      Phone / WhatsApp
                    </span>
                  </div>
                  <p className="text-primary-white text-[15px] font-semibold ml-6 mb-0.5">
                    +234 903 090 9624
                  </p>
                  <p className="text-secondary text-[12px] ml-6 mb-3">
                    Available Mon–Sat, 9am–6pm WAT
                  </p>
                  <div className="ml-6 flex gap-2">
                    <a
                      href="tel:+2349030909624"
                      className="text-[13px] border border-[#333] text-primary-white px-3 py-1.5 rounded-lg hover:bg-accent-blue hover:border-accent-blue transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] border border-[#333] text-primary-white px-3 py-1.5 rounded-lg hover:bg-accent-blue hover:border-accent-blue transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="border border-[#222] rounded-xl p-4">
                  <div className="flex items-center gap-2.5 mb-1">
                    <Mail className="w-4 h-4 text-accent-blue" />
                    <span className="text-[13px] font-semibold text-white">
                      Email
                    </span>
                  </div>
                  <p className="text-primary-white text-[15px] font-semibold ml-6 mb-0.5">
                    hello@daniekeysstudios.com
                  </p>
                  <p className="text-secondary text-[12px] ml-6 mb-3">
                    We reply within 24 hours (often sooner)
                  </p>
                  <div className="ml-6">
                    <a
                      href="mailto:hello@daniekeysstudios.com"
                      className="text-[13px] border border-[#333] text-primary-white px-3 py-1.5 rounded-lg hover:bg-accent-blue hover:border-accent-blue transition-colors"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="border border-[#222] rounded-xl p-4">
                  <div className="flex items-center gap-2.5 mb-1">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <span className="text-[13px] font-semibold text-white">
                      Location
                    </span>
                  </div>
                  <p className="text-primary-white text-[15px] font-semibold ml-6 mb-0.5">
                    Nigeria (Serving Pan-Africa &amp; Globally)
                  </p>
                  <p className="text-secondary text-[12px] ml-6">
                    Remote-first — we work with clients anywhere
                  </p>
                </div>

                {/* Book a Call — highlighted */}
                <div className="bg-accent-blue rounded-xl p-4">
                  <div className="flex items-center gap-2.5 mb-1">
                    <Calendar className="w-4 h-4 text-white" />
                    <span className="text-[13px] font-semibold text-white">
                      Book a Free Discovery Call
                    </span>
                  </div>
                  <p className="text-white/80 text-[13px] ml-6 mb-3">
                    30-minute video call to discuss your project. No pressure,
                    no pitch — just a conversation.
                  </p>
                  <div className="ml-6">
                    <a
                      href="#project-form"
                      className="inline-flex items-center gap-1.5 bg-white text-accent-blue text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-primary-white transition-colors"
                    >
                      Book a Call →
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="border-t border-[#222] mt-6 pt-5 space-y-2">
                {[
                  ["Monday – Friday", "9:00 AM – 6:00 PM WAT"],
                  ["Saturday", "10:00 AM – 4:00 PM WAT"],
                  ["Sunday", "Closed"],
                ].map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between text-[13px]"
                  >
                    <span className="text-secondary">{day}</span>
                    <span className="text-primary-white">{hours}</span>
                  </div>
                ))}
                <p className="text-accent-blue text-[13px] pt-1">
                  Urgent? WhatsApp us 24/7 — we monitor it.
                </p>
              </div>

              {/* Social Links */}
              <div className="border-t border-[#222] mt-5 pt-5">
                <p className="text-[13px] text-secondary mb-3">
                  Follow our work:
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/daniekeys_studios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-white hover:text-accent-blue transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/daniekeys-studios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white hover:text-accent-blue transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@Danieskeys"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="text-white hover:text-accent-blue transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61583310572575"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-white hover:text-accent-blue transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TRUST INDICATORS ──────────────────────────────────── */}
      <section className="bg-primary-white border-t border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E5E5]">
          {trustSignals.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-start px-8 py-8"
            >
              <Icon className="w-6 h-6 text-accent-blue mb-3" />
              <p className="text-[14px] font-semibold text-[#111] mb-1">
                {title}
              </p>
              <p className="text-[12px] text-secondary">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: FAQ ────────────────────────────────────────────────── */}
      <section className="bg-primary py-24 px-6 md:px-8">
        <div className="max-w-[720px] mx-auto">
          <motion.h2
            className="text-[32px] md:text-[48px] font-bold text-primary-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Before You Send That Message
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="border border-[#222] rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-primary-white font-medium hover:bg-[#1A1A1A] transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-secondary text-[15px] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA BANNER ─────────────────────────────────────────── */}
      <section className="bg-accent-blue py-20 px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.h2
            className="text-[40px] md:text-[48px] font-extrabold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Still Not Sure?
            <br />
            Just Say Hello.
          </motion.h2>
          <motion.p
            className="text-white/80 text-[18px] mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            The first conversation costs nothing.
            <br />
            Let&apos;s figure out together what your brand actually needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#project-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent-blue px-8 py-4 rounded-lg font-semibold hover:bg-primary-white transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book Discovery Call →
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
