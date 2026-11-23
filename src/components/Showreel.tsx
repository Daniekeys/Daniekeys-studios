"use client";

import { useRef, useState } from "react";

import Film from "./Film";

// Home showreel, served from public/showreel at full quality. Plays muted on loop;
// the button turns the sound on from the start.
export default function Showreel() {
  const ref = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (!sound) v.currentTime = 0;
    v.muted = sound;
    void v.play();
    setSound(!sound);
  };

  return (
    <div className="ph" style={{ aspectRatio: "16/9", position: "relative", background: "#111111" }}>
      <Film
        ref={ref}
        fallback="/showreel/daniekeys-showreel-2026.mp4"
        poster="/showreel/poster.jpg"
        label="Daniekeys Studios showreel"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(18px,2.4cqw,36px)",
          color: "#F4F3EF",
          // Give the button and label something dark to sit on, whatever frame is playing.
          background: "linear-gradient(to top, rgba(17,17,17,.5), rgba(17,17,17,0) 45%)",
          pointerEvents: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "space-between" }}>
          <button
            type="button"
            className="pill inv"
            onClick={toggle}
            aria-label={sound ? "Mute showreel" : "Play showreel with sound"}
            style={{ height: 52, pointerEvents: "auto" }}
          >
            {sound ? "Mute" : "▶  Play with sound"}
          </button>
          <span className="mono hide-m" style={{ opacity: 0.75 }}>
            Showreel {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
}
