import Image from "next/image";

import { cn } from "@/lib/utils";

interface ClientLogo {
  name: string;
  src?: string;
}

interface ClientLogoStripProps {
  logos: ClientLogo[];
  className?: string;
}

// Every logo (including source files with a baked-in white background, like
// AFRIMENT's JPG) sits in the same off-white tile so mixed formats read as
// one deliberate "logo card" row instead of a stray white/gray box.
export default function ClientLogoStrip({ logos, className }: ClientLogoStripProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-space-4", className)}>
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex h-16 w-36 flex-none items-center justify-center rounded-radius-md border border-black/[0.06] bg-primary-white px-space-4"
        >
          {logo.src ? (
            <div className="relative h-8 w-full">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>
          ) : (
            <span className="text-ds-small font-semibold text-primary">{logo.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
