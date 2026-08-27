import { cn } from "@/lib/utils";

interface WatermarkGlyphProps {
  size?: number;
  className?: string;
}

export default function WatermarkGlyph({
  size = 400,
  className,
}: WatermarkGlyphProps) {
  const petals = Array.from({ length: 8 });

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={cn("pointer-events-none text-light-dark opacity-[0.08]", className)}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {petals.map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="55"
            rx="18"
            ry="45"
            transform={`rotate(${(360 / petals.length) * i} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="14" />
      </g>
    </svg>
  );
}
