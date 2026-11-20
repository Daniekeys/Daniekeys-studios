import { StartField } from "./Forms";

export default function StartSection() {
  return (
    <section
      className="wrap sec"
      style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}
    >
      <span className="mono mut">Start something</span>
      <h2 className="serif l" style={{ maxWidth: 900 }}>
        Tell us what you are building.
      </h2>
      <StartField style={{ width: "min(640px,100%)" }} />
    </section>
  );
}
