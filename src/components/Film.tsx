"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// A muted looping film. It only loads near the screen, then streams at whatever
// quality the visitor's connection and the size of the frame can carry.
const Film = forwardRef<
  HTMLVideoElement,
  { stream: string; fallback: string; poster: string; label: string }
>(function Film({ stream, fallback, poster, label }, ref) {
  const inner = useRef<HTMLVideoElement>(null);
  useImperativeHandle(ref, () => inner.current as HTMLVideoElement);

  useEffect(() => {
    const v = inner.current;
    if (!v) return;
    let stopped = false;
    let started = false;
    let destroy = () => {};

    const start = async () => {
      const { default: Hls } = await import("hls.js/light");
      if (stopped) return;
      if (Hls.isSupported()) {
        const hls = new Hls({ capLevelToPlayerSize: true });
        destroy = () => hls.destroy();
        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (!data.fatal) return;
          hls.destroy();
          v.src = fallback;
          void v.play().catch(() => {});
        });
        hls.loadSource(stream);
        hls.attachMedia(v);
      } else if (v.canPlayType("application/vnd.apple.mpegurl")) {
        v.src = stream; // iPhone plays HLS itself
      } else {
        v.src = fallback;
      }
      void v.play().catch(() => {});
    };

    const seen = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (started) void v.play().catch(() => {});
          else {
            started = true;
            void start();
          }
        } else if (started) {
          v.pause();
        }
      },
      { rootMargin: "300px" },
    );
    seen.observe(v);

    return () => {
      stopped = true;
      seen.disconnect();
      destroy();
    };
  }, [stream, fallback]);

  return <video ref={inner} poster={poster} muted loop playsInline preload="none" aria-label={label} />;
});

export default Film;
