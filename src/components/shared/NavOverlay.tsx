"use client";

import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Showreel", href: "/showreel" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/daniekeys_studios/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/daniekeys-studios/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@Danieskeys", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583310572575", label: "Facebook" },
];

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col bg-primary transition-opacity duration-300",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!isOpen}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-end px-space-4 md:px-space-6 lg:h-20">
        <button
          type="button"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          aria-label="Close navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-radius-md border border-white/15 text-white transition-colors hover:border-dk-blue-1 hover:text-dk-blue-1"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col items-center justify-center gap-space-5">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={onClose}
              className={cn(
                "text-ds-h2 font-heading transition-colors",
                isActive ? "text-dk-blue-1" : "text-primary-white hover:text-dk-blue-1"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center justify-center gap-space-4 pb-space-8">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            tabIndex={isOpen ? 0 : -1}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-radius-md border border-white/15 text-white transition-colors hover:border-dk-blue-1 hover:text-dk-blue-1"
          >
            <Icon size={17} />
          </a>
        ))}
      </div>
    </div>
  );
}
