"use client";

import { useEffect, useState } from "react";

const fmt = () =>
  new Date().toLocaleTimeString("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
  });

// Local studio time in Ilorin, refreshed every 20 seconds.
export default function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 20000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time || "  :  "}</span>;
}
