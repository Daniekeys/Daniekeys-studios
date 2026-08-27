import { GridTicks } from "@/components/shared/GridPrimitives";

// Fixed, page-level hairline directly under the navbar (h-16 mobile / h-20
// desktop, matching Navigation.tsx's own height), present on every route
// regardless of scroll position — mounted once in the root layout, separate
// from GridOverlay's per-section columns since this specific line has to be
// pinned to the nav rather than to any one section.
export default function NavGridLine() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-16 z-40 lg:top-20"
      aria-hidden="true"
    >
      <div className="h-px w-full bg-light-dark/20" />
      <GridTicks />
    </div>
  );
}
