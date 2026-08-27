"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import NavOverlay from "@/components/shared/NavOverlay";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          isScrolled || isOverlayOpen
            ? "border-b border-white/10 bg-primary/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-space-4 md:px-space-6 lg:h-20">
          <Link href="/" aria-label="Daniekeys Studios home" className="flex items-center">
            <Image
              src="/images/logos/daniekeys-logo-light.png"
              alt="Daniekeys Studios logo"
              width={150}
              height={42}
              priority
              className="h-8 w-auto lg:h-9"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOverlayOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOverlayOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-radius-md border border-white/15 text-white transition-colors hover:border-dk-blue-1 hover:text-dk-blue-1"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <NavOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
    </>
  );
}
