"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hashValue, sethashValue] = useState<string>("");

  useEffect(() => {
    const handleHashAndScroll = () => {
      const currentHash = window.location.hash; 
      sethashValue(currentHash);

      const normalizedPathname = window.location.pathname;
      if (normalizedPathname === "/" && currentHash) {
        setTimeout(() => {
          const targetId = currentHash.replace("#", "");
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    handleHashAndScroll();

    window.addEventListener("hashchange", handleHashAndScroll);
    return () => window.removeEventListener("hashchange", handleHashAndScroll);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const targetHash = `#${hash}`;
      return pathname === path && hashValue === targetHash;
    }
    return pathname === href && !hashValue;
  };

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split("#")[1];
    if (!hash) return;

    const targetHash = `#${hash}`;
    sethashValue(targetHash);

    if (pathname === "/") {
      e.preventDefault();

      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      // Update browser URL hash 
      window.history.pushState(null, "", targetHash);
    }
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 h-[3px] overflow-hidden bg-accent-blue">
        <div className="h-full w-[200%] animate-[topBarFlow_3s_linear_infinite] bg-gradient-to-r from-accent-blue via-accent-blue-light to-accent-blue" />
      </div>

      <nav className="fixed left-0 right-0 top-[3px] z-50 border-b border-white/10 bg-primary/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            onClick={() => sethashValue("")}
            className="flex items-center"
            aria-label="Daniekeys Studios home"
          >
            <Image
              src="/images/logos/daniekeys-logo-light.png"
              alt="Daniekeys Studios logo"
              width={150}
              height={42}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                scroll={item.href === "/#about" ? false : undefined}
                onClick={(e) => {
                  if (item.href.includes("#")) {
                    handleHashLinkClick(e, item.href);
                  } else {
                    sethashValue("");
                  }
                }}
                className={`text-sm font-normal uppercase tracking-widest transition-colors hover:text-accent-blue ${isActive(item.href)
                    ? "border-b border-accent-blue pb-0.5 text-accent-blue"
                    : "text-primary-white"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => sethashValue("")}
            className="hidden rounded-lg bg-accent-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-blue-light lg:inline-flex"
          >
            Start a Project →
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 pt-20">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-2xl font-normal uppercase tracking-widest transition-colors hover:text-accent-blue ${isActive(item.href) ? "text-accent-blue font-semibold" : "text-primary-white opacity-60"
                }`}
              onClick={(e) => {
                if (item.href.includes("#")) {
                  handleHashLinkClick(e, item.href);
                } else {
                  sethashValue("");
                }
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 rounded-lg bg-accent-blue px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-blue-light"
            onClick={() => {
              sethashValue("");
              setIsMobileMenuOpen(false);
            }}
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </>
  );
}