// The Daniekeys Studios logo files (mark, "daniekeys" and "STUDIOS"). Dark for Paper, light for Ink.
const FILES = {
  dark: { src: "/brand/daniekeys-studios.png", w: 1731, h: 212 },
  light: { src: "/brand/daniekeys-studios-light.png", w: 1731, h: 212 },
};

export default function Logo({ tone = "dark", height = 22 }: { tone?: "dark" | "light"; height?: number }) {
  const f = FILES[tone];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={f.src} alt="Daniekeys Studios" width={Math.round((f.w / f.h) * height)} height={height} />
  );
}
