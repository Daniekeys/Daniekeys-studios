import { GridLines, GridTicks } from "@/components/shared/GridPrimitives";
import { cn } from "@/lib/utils";

interface GridOverlayProps {
  className?: string;
}

// Page-level decorative grid, confirmed present through every section of
// /reference (light and dark backgrounds alike), not hero-specific. Drop as
// the first child of any `relative` section — it fills that section via
// inset-0 and sits behind a sibling content wrapper (give that wrapper
// `relative z-10`), so columns line up continuously as the page scrolls
// past section-color boundaries. Ticks mark this instance's own top edge,
// matching the tick-at-section-start pattern measured in the reference.
export default function GridOverlay({ className }: GridOverlayProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <GridLines />
      <GridTicks />
    </div>
  );
}
