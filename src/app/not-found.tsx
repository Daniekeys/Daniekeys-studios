import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="wrap sec"
      style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}
    >
      <span className="mono mut">404</span>
      <h1 className="serif xl">This page has moved on.</h1>
      <Link className="pill" href="/">
        Back to home
      </Link>
    </section>
  );
}
