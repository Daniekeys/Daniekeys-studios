import Link from "next/link";

import Clock from "./Clock";
import { Newsletter } from "./Forms";
import { EMAIL, NAV, SOCIAL, WHATSAPP, WHATSAPP_LABEL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="split" style={{ alignItems: "end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p className="s serif" style={{ maxWidth: 360 }}>
              Have something ambitious in mind? Let us talk.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="pill inv" href="/contact">
                Start a project
              </Link>
              <a className="pill" style={{ borderColor: "rgba(244,243,239,.35)" }} href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
          </div>
          <nav className="fnav serif" aria-label="Footer">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="g4" style={{ marginTop: 96, fontSize: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="mono mut">Newsletter</span>
            <Newsletter />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="mono mut">Studio</span>
            <span>Ilorin, Nigeria</span>
            <span>Working worldwide</span>
            <span>
              Local time <Clock />
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="mono mut">Contact</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={WHATSAPP}>WhatsApp {WHATSAPP_LABEL}</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="mono mut">Follow</span>
            {SOCIAL.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
            <span>Behance, Contra</span>
          </div>
        </div>

        <div className="giant" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/daniekeys-studios-light.png" alt="" width={1731} height={212} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            paddingBlock: 24,
            borderTop: "1px solid rgba(244,243,239,.15)",
            fontSize: 13,
          }}
        >
          <span className="serif" style={{ fontSize: 20 }}>
            Press forward.
          </span>
          <span className="mut">&#169; {new Date().getFullYear()} Daniekeys Studios</span>
        </div>
      </div>
    </footer>
  );
}
