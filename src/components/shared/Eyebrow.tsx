import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
  className?: string;
}

// Bare text, no chip — confirmed against /reference at higher zoom: none of
// its eyebrow instances (hero, "Why Choose Clonix?", "Our Numbers", etc.)
// show a background rectangle behind the "// Label" text at any sampled
// row. `theme` is kept even though both themes render identically today
// (dk-blue-1 reads fine on both --black and --off-white) so call sites
// don't need to change if that ever stops being true.
export default function Eyebrow({ children, theme = "dark", className }: EyebrowProps) {
  void theme;
  return (
    <p
      className={cn(
        "text-ds-small font-semibold uppercase tracking-wide text-dk-blue-1",
        className
      )}
    >
      {children}
    </p>
  );
}
