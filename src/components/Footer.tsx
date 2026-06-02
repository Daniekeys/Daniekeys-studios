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

const services = [
  "AI Digital Strategy",
  "Brand Identity Design",
  "Website Development",
  "Motion Graphics & Video",
  "AI Chatbot & Automation",
  "Digital Marketing",
];

const companyLinks = [
  { label: "About Us", href: "/#about" },
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
    <footer className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logos/daniekeys-logo-light.png"
              alt="Daniekeys Studios logo"
              width={165}
              height={46}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-7 text-secondary">
              Africa&apos;s AI-Powered Digital Agency
            </p>

            <div className="mt-7 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:border-accent-blue hover:text-accent-blue"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h2>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-secondary transition-colors hover:text-accent-blue"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h2>
            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary transition-colors hover:text-accent-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h2>
            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <Mail size={17} className="mt-1 text-accent-blue" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary">
                    Email
                  </p>
                  <a
                    href="mailto:hello@daniekeysstudios.com"
                    className="text-sm text-white transition-colors hover:text-accent-blue"
                  >
                    hello@daniekeysstudios.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={17} className="mt-1 text-accent-blue" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary">
                    Phone
                  </p>
                  <a
                    href="tel:+2349030909624"
                    className="text-sm text-white transition-colors hover:text-accent-blue"
                  >
                    +234 903 090 9624
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={17} className="mt-1 text-accent-blue" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary">
                    Location
                  </p>
                  <p className="text-sm text-white">
                    Nigeria (serving Pan-Africa & globally)
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Share2 size={17} className="mt-1 text-accent-blue" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary">
                    Hours
                  </p>
                  <p className="text-sm text-white">Mon-Fri 9am-6pm WAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-secondary md:flex-row md:items-center md:justify-between">
          <p>© 2026 Daniekeys Studios. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-accent-blue">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-accent-blue">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
