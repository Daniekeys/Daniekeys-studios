// The arrow-key "d" mark plus the daniekeys wordmark.
export function Mark({ width = 26, height = 18 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 245 170" aria-hidden="true">
      <polygon
        points="0,35 140,35 140,75 58,75 125,118 197,70 170,0 210,0 245,90 125,170 0,90"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <>
      <Mark />
      <span>daniekeys</span>
    </>
  );
}
