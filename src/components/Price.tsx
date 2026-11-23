"use client";

import { useEffect, useState } from "react";

type Currency = "NGN" | "USD";

// src/middleware.ts sets the `currency` cookie from the visitor's country
// (Nigeria sees naira, everyone else dollars). The toggle overrides it.
const read = (): Currency => (/(?:^|; )currency=USD(?:;|$)/.test(document.cookie) ? "USD" : "NGN");

function useCurrency() {
  const [currency, setCurrency] = useState<Currency>("NGN");
  useEffect(() => {
    const sync = () => setCurrency(read());
    sync();
    window.addEventListener("currencychange", sync);
    return () => window.removeEventListener("currencychange", sync);
  }, []);
  return currency;
}

export default function Price({ ngn, usd, per }: { ngn: number; usd: number; per?: string }) {
  const currency = useCurrency();
  const amount = currency === "USD" ? `$${usd.toLocaleString("en-US")}` : `₦${ngn.toLocaleString("en-US")}`;
  return (
    <span suppressHydrationWarning>
      From {amount}
      {per ? ` ${per}` : ""}
    </span>
  );
}

export function CurrencyToggle() {
  const currency = useCurrency();
  const choose = (c: Currency) => {
    document.cookie = `currency=${c}; path=/; max-age=31536000; samesite=lax`;
    window.dispatchEvent(new Event("currencychange"));
  };
  return (
    <div className="seg" role="group" aria-label="Show prices in">
      {(["NGN", "USD"] as const).map((c) => (
        <button key={c} type="button" className={currency === c ? "on" : ""} aria-pressed={currency === c} onClick={() => choose(c)}>
          {c === "NGN" ? "₦ NGN" : "$ USD"}
        </button>
      ))}
    </div>
  );
}
