"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export interface LightboxMedia {
  type: "video" | "image";
  src: string;
  title: string;
  poster?: string;
  orientation?: "landscape" | "portrait";
}

interface MediaLightboxProps {
  media: LightboxMedia | null;
  onClose: () => void;
}

// Fullscreen viewer for a single clip or still. Video plays UNMUTED with native
// controls — opening it is always a user gesture (the "View video" button), so
// autoplay-with-sound is allowed. Scroll-lock / Escape / focus handling mirrors
// NavOverlay so the two modals behave the same.
export default function MediaLightbox({ media, onClose }: MediaLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = media !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!media) return null;

  const isPortrait = media.orientation === "portrait";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={media.title}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-space-4 backdrop-blur-sm md:p-space-8"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-space-4 top-space-4 inline-flex h-11 w-11 items-center justify-center rounded-radius-md border border-white/20 text-white transition-colors hover:border-dk-blue-1 hover:text-dk-blue-1 md:right-space-6 md:top-space-6"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-full overflow-hidden rounded-radius-lg bg-black",
          isPortrait ? "max-w-[420px]" : "max-w-[1100px]"
        )}
      >
        {media.type === "video" ? (
          <video
            key={media.src}
            src={media.src}
            poster={media.poster}
            controls
            autoPlay
            playsInline
            className={cn(
              "h-auto w-full",
              isPortrait ? "max-h-[85vh]" : "max-h-[80vh]"
            )}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media.src}
            alt={media.title}
            className={cn(
              "h-auto w-full object-contain",
              isPortrait ? "max-h-[85vh]" : "max-h-[80vh]"
            )}
          />
        )}
      </div>
    </div>
  );
}
