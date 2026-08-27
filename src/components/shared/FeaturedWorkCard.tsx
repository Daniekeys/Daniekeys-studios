import { Zap } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface FeaturedWorkCardProps {
  label?: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  className?: string;
}

// Traced from /reference/desktop-mockup.jpeg's "Featured Work" element:
// label sits flush with the card's left edge, ~11px above it; the card is a
// borderless ~4:5 portrait image (radius-lg per spec); caption sits ~12px
// below, not overlaid. See the Batch 4 side-by-side report for exact
// pixel measurements and the deviations called out there.
export default function FeaturedWorkCard({
  label = "Featured Work",
  imageSrc,
  imageAlt,
  caption,
  className,
}: FeaturedWorkCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-2 text-ds-h4 font-heading text-primary-white">
        <Zap className="h-5 w-5 flex-none" fill="currentColor" />
        <span>{label}</span>
      </div>

      <div className="relative mt-space-3 aspect-[4/5] w-full overflow-hidden rounded-radius-lg">
        <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
      </div>

      <p className="mt-space-4 text-ds-small text-light-dark">{caption}</p>
    </div>
  );
}
