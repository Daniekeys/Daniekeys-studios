import { StartField } from "./Forms";

export default function StartSection() {
  return (
    <section
      className="wrap sec"
      style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}
    >
      <span className="mono mut">Start something</span>
      <h2 className="serif l" style={{ maxWidth: 900 }}>
        Tell us what&apos;s not selling.
      </h2>
      <p className="s mut" style={{ maxWidth: 640, marginTop: -12 }}>
        Share what you sell and who you sell to. We&apos;ll tell you what we&apos;d fix first.
      </p>
      <StartField style={{ width: "min(640px,100%)" }} />
    </section>
  );
}
