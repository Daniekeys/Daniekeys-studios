import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Share2,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/shared/Button";
import RotatingBadge from "@/components/shared/RotatingBadge";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import WatermarkGlyph from "@/components/shared/WatermarkGlyph";

const services = [
  "AI Digital Strategy",
  "Brand Identity Design",
  "Website Development",
  "Motion Graphics & Video",
  "AI Chatbot & Automation",
  "Digital Marketing",
];

// About and Careers point ahead to routes built in later batches
// (see docs/revamp/90-BUILD-PLAN-BATCHES.md — Batch 8 for /about).
const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/services#process" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const socialLinks = [
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
  {
    icon: Youtube,
    href: "https://www.youtube.com/@Danieskeys",
    label: "YouTube",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61583310572575",
    label: "Facebook",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA block — doubles as the landing page's Final CTA per
          docs/revamp/10-LANDING-shell-hero.md, not duplicated mid-page. */}
      <div className="relative overflow-hidden border-b border-white/10">
        <WatermarkGlyph size={420} className="absolute -right-16 -top-24 hidden lg:block" />
        <div className="relative mx-auto max-w-[1280px] px-space-4 py-space-9 md:px-space-6 lg:py-space-10">
          <Image
            src="/images/logos/daniekeys-logo-light.png"
            alt="Daniekeys Studios logo"
            width={150}
            height={42}
            className="h-8 w-auto"
          />

          <div className="mt-space-8 grid gap-space-8 lg:grid-cols-[60fr_40fr] lg:items-center">
            <div>
              <h2 className="text-ds-h2 font-heading text-primary-white">
                Ready to Build Something
                <br />
                That Actually Works?
              </h2>
              <p className="mt-space-4 max-w-xl text-ds-body-lg text-light-dark">
                Let&apos;s talk about your brand, your goals, and how Daniekeys Studios
                can help you grow. First call is always free.
              </p>
              <div className="mt-space-6 flex flex-col gap-space-4 sm:flex-row sm:items-center">
                <Button
                  variant="primary"
                  href="/contact"
                  className="w-full justify-between sm:w-auto"
                >
                  Book a Free Discovery Call
                </Button>
                <Button
                  variant="secondary"
                  href="https://wa.me/2349030909624"
                  className="w-full justify-between sm:w-auto"
                >
                  WhatsApp Us Now
                </Button>
              </div>
            </div>

            <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm overflow-hidden rounded-radius-xl lg:block">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                alt="Daniekeys Studios creative team mapping out a brand strategy session"
                fill
                sizes="400px"
                className="object-cover"
              />
              <RotatingBadge className="absolute -bottom-6 -left-6 h-24 w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-[1280px] px-space-4 py-space-8 md:px-space-6 lg:py-space-9">
        <div className="grid gap-space-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-ds-micro uppercase tracking-widest text-primary-white">
              Services
            </h3>
            <ul className="mt-space-5 space-y-space-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-ds-body text-light-dark transition-colors hover:text-dk-blue-1"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-ds-micro uppercase tracking-widest text-primary-white">
              Company
            </h3>
            <ul className="mt-space-5 space-y-space-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-ds-body text-light-dark transition-colors hover:text-dk-blue-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-ds-micro uppercase tracking-widest text-primary-white">
              Contact
            </h3>
            <div className="mt-space-5 space-y-space-4">
              <div className="flex gap-space-3">
                <Mail size={17} className="mt-1 flex-none text-dk-blue-1" />
                <a
                  href="mailto:hello@daniekeysstudios.com"
                  className="text-ds-body text-light-dark transition-colors hover:text-dk-blue-1"
                >
                  hello@daniekeysstudios.com
                </a>
              </div>
              <div className="flex gap-space-3">
                <Phone size={17} className="mt-1 flex-none text-dk-blue-1" />
                <a
                  href="tel:+2349030909624"
                  className="text-ds-body text-light-dark transition-colors hover:text-dk-blue-1"
                >
                  +234 903 090 9624
                </a>
              </div>
              <div className="flex gap-space-3">
                <MapPin size={17} className="mt-1 flex-none text-dk-blue-1" />
                <p className="text-ds-body text-light-dark">
                  Nigeria (serving Pan-Africa &amp; globally)
                </p>
              </div>
              <div className="flex gap-space-3">
                <Share2 size={17} className="mt-1 flex-none text-dk-blue-1" />
                <p className="text-ds-body text-light-dark">Mon–Fri 9am–6pm WAT</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-ds-micro uppercase tracking-widest text-primary-white">
              Follow
            </h3>
            <div className="mt-space-5 flex gap-space-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-radius-md border border-white/15 text-white transition-colors hover:border-dk-blue-1 hover:text-dk-blue-1"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal row + copyright + scroll-to-top, all sharing the container's
            left edge so the scroll button aligns under the logo above. */}
        <div className="mt-space-8 flex flex-col gap-space-5 border-t border-white/10 pt-space-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-space-4">
            <ScrollToTopButton />
            <p className="text-ds-small text-light-dark">
              © 2026 Daniekeys Studios. All rights reserved.
            </p>
          </div>
          <div className="flex gap-space-5">
            <Link
              href="/legal/privacy-policy"
              className="text-ds-small text-light-dark transition-colors hover:text-dk-blue-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-ds-small text-light-dark transition-colors hover:text-dk-blue-1"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
