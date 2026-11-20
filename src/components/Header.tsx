"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Clock from "./Clock";
import Logo from "./Logo";
import { NAV } from "@/lib/site";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isOn = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <>
      <header className="wrap nav">
        <Link href="/" className="logo" aria-label="Daniekeys Studios home">
          <Logo />
        </Link>
        <div className="navr">
          <nav className="links" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={isOn(n.href) ? "on" : ""}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="clock top">
            <i />
            <span>
              Ilorin <Clock />
            </span>
          </div>
          <button className="menu" type="button" onClick={() => setOpen(true)} aria-expanded={open}>
            Menu
          </button>
        </div>
      </header>

      {open && (
        <div className="overlay" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="wrap nav">
            <Link href="/" className="logo" aria-label="Daniekeys Studios home">
              <Logo tone="light" />
            </Link>
            <button className="menu" type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav className="wrap serif" aria-label="Mobile">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="wrap" style={{ marginTop: "auto", paddingBottom: 32, display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span className="serif" style={{ fontSize: 20 }}>Press forward.</span>
            <span style={{ opacity: 0.6 }}>
              Ilorin <Clock />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
