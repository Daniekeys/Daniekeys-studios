"use client";

import { motion } from "framer-motion";

import ClientLogoStrip from "@/components/shared/ClientLogoStrip";
import { cn } from "@/lib/utils";

// Buymejollof has no logo asset file available — rendered as a clean text
// placeholder inside the same tile per 03-IMAGE-SOURCING-GUIDE.md's rule
// against shipping a broken/missing image.
const clients = [
  { name: "Afriment", src: "/images/logos/AFRIMENT logo.jpg" },
  { name: "Candexa", src: "/images/logos/candexa-logo.png" },
  { name: "My Lang Coach", src: "/images/logos/my-lang-coach-logo.svg" },
  { name: "Buymejollof" },
];

interface TrustBarProps {
  className?: string;
}

// Embedded inline inside the hero's left column (see HeroSection.tsx),
// matching /reference's desktop hero — left-aligned, same width as the
// headline/body content, directly below the founder-credit line. This is
// NOT a standalone full-width section anymore; the mockup doesn't show it
// as one, and it was previously (incorrectly) rendered full-width/centered
// after the hero.
export default function TrustBar({ className }: TrustBarProps) {
  return (
    <motion.div
      className={cn("max-w-xl", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-ds-small uppercase tracking-wide text-light-dark">
        Trusted by Ambitious Brands Across Nigeria and Africa
      </p>
      <ClientLogoStrip logos={clients} className="mt-space-4" />
    </motion.div>
  );
}
