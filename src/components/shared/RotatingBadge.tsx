import { cn } from "@/lib/utils";

interface RotatingBadgeProps {
  text?: string;
  className?: string;
}

const RADIUS = 50;

export default function RotatingBadge({
  text = "★ RATED 5.0 ON GOOGLE ★",
  className,
}: RotatingBadgeProps) {
  const pathId = "rotating-badge-path";
  const repeated = `${text} `.repeat(2);

  return (
    <div
      className={cn(
        "relative flex h-32 w-32 flex-none items-center justify-center rounded-radius-full bg-dk-blue-1",
        "animate-[spin_18s_linear_infinite] motion-reduce:animate-none",
        className
      )}
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full">
        <path
          id={pathId}
          fill="none"
          d={`M 60,60 m -${RADIUS},0 a ${RADIUS},${RADIUS} 0 1,1 ${
            RADIUS * 2
          },0 a ${RADIUS},${RADIUS} 0 1,1 -${RADIUS * 2},0`}
        />
        <text className="fill-black text-[9px] font-semibold uppercase tracking-wide">
          <textPath href={`#${pathId}`} startOffset="0%" spacing="auto">
            {repeated}
          </textPath>
        </text>
      </svg>
      <span className="sr-only">{text}</span>
    </div>
  );
}
