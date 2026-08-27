import { GRID_COLUMNS_DESKTOP, GRID_COLUMNS_MOBILE } from "@/lib/grid-columns";

// Shared by GridOverlay (per-section, absolute) and NavGridLine (page-level,
// fixed) so both draw from the same measured column set instead of two
// copies drifting apart.
export function GridLines({ opacityClass = "bg-light-dark/15" }: { opacityClass?: string }) {
  return (
    <>
      <div className="lg:hidden">
        {GRID_COLUMNS_MOBILE.map((pct) => (
          <div
            key={pct}
            className={`absolute inset-y-0 w-px ${opacityClass}`}
            style={{ left: `${pct}%` }}
          />
        ))}
      </div>
      <div className="hidden lg:block">
        {GRID_COLUMNS_DESKTOP.map((pct) => (
          <div
            key={pct}
            className={`absolute inset-y-0 w-px ${opacityClass}`}
            style={{ left: `${pct}%` }}
          />
        ))}
      </div>
    </>
  );
}

export function GridTicks() {
  return (
    <>
      <div className="lg:hidden">
        {GRID_COLUMNS_MOBILE.map((pct) => (
          <Tick key={pct} leftPct={pct} />
        ))}
      </div>
      <div className="hidden lg:block">
        {GRID_COLUMNS_DESKTOP.map((pct) => (
          <Tick key={pct} leftPct={pct} />
        ))}
      </div>
    </>
  );
}

function Tick({ leftPct }: { leftPct: number }) {
  return (
    <span
      className="absolute top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${leftPct}%` }}
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-light-dark/20" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-light-dark/20" />
    </span>
  );
}
