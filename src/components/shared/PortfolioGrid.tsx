"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import Image, { type ImageLoaderProps } from "next/image";
import { useState } from "react";

import MediaLightbox, {
  type LightboxMedia,
} from "@/components/shared/MediaLightbox";
import type { PortfolioAsset } from "@/lib/cloudinary-portfolio";
import { cn } from "@/lib/utils";

// Orientation-aware bento grid for Cloudinary portfolio assets, shared by
// /portfolio and the homepage FeaturedWorkSection. Owns its own lightbox.
//
// Every tile renders at its asset's true aspect ratio — nothing is cropped.
// From md up the assets are arranged in "bands": a row of units that all end
// up the same height, where a unit is one tile or two wide tiles stacked. A
// portrait next to a stack of two landscapes is what lets the portrait run
// tall instead of shrinking to a strip. Below md everything is one column.

type Unit = PortfolioAsset[]; // one tile, or two stacked
type Band = Unit[];

const GAP = 24; // px — must match the gap-space-5 used below
const MAX_BAND_HEIGHT = 640; // px — keeps a lone tile from filling the viewport

// Cloudinary resizes; next/image only picks the width.
const cloudinaryLoader = ({ src, width }: ImageLoaderProps) =>
  src.replace("/upload/", `/upload/c_limit,w_${width}/`);

// Aspect ratio of a unit as a whole (gaps aside): stacked tiles share a width,
// so their heights add.
const unitRatio = (unit: Unit) =>
  1 / unit.reduce((sum, asset) => sum + 1 / asset.aspectRatio, 0);

// Splits into rows of at most `perRow`, evened out so the last row is never a
// lone leftover when it can be avoided (5 -> 3 + 2, not 4 + 1).
function chunkEvenly<T>(items: T[], perRow: number): T[][] {
  const rows: T[][] = [];
  let index = 0;
  for (let left = Math.ceil(items.length / perRow); left > 0; left--) {
    const size = Math.ceil((items.length - index) / left);
    rows.push(items.slice(index, index + size));
    index += size;
  }
  return rows;
}

function buildBands(assets: PortfolioAsset[]): Band[] {
  const tall = assets.filter((asset) => asset.orientation === "portrait");
  const wide = assets.filter((asset) => asset.orientation !== "portrait");
  const bands: Band[] = [];

  const single = (list: PortfolioAsset[]): Unit => list.splice(0, 1);
  const stack = (): Unit => wide.splice(0, 2);

  // Mixed bands first, each anchored on a portrait. The wide-count checks keep
  // the leftover wide tiles even, so they pair off below.
  while (tall.length > 0 && wide.length > 0) {
    if (tall.length >= 2) {
      bands.push(
        wide.length === 1 || wide.length === 3
          ? [single(tall), single(wide), single(tall)]
          : [single(tall), stack(), single(tall)]
      );
    } else if (wide.length % 2 === 1) {
      bands.push([single(wide), single(tall)]);
    } else if (wide.length >= 4) {
      bands.push([single(tall), stack(), stack()]);
    } else {
      bands.push([single(tall), stack()]);
    }
  }

  for (const row of chunkEvenly(tall, 4)) bands.push(row.map((asset) => [asset]));
  for (const row of chunkEvenly(wide, 3)) bands.push(row.map((asset) => [asset]));

  return bands;
}

interface TileProps {
  asset: PortfolioAsset;
  sizes: string;
  onOpen: (asset: PortfolioAsset) => void;
}

// Poster/still first (lazy-loaded, exact dimensions, so no layout shift). A
// video only mounts its <video> while hovered on a hover-capable device —
// nothing autoplays on touch screens or under prefers-reduced-motion; the
// lightbox is the way in there.
function Tile({ asset, sizes, onOpen }: TileProps) {
  const [previewing, setPreviewing] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isVideo = asset.type === "video";
  // Portrait videos sit in a phone-style frame so they read as a device, not a strip.
  const framed = isVideo && asset.orientation === "portrait";

  const startPreview = () => {
    if (!isVideo || prefersReducedMotion) return;
    if (window.matchMedia("(hover: hover)").matches) setPreviewing(true);
  };

  return (
    <button
      type="button"
      onClick={() => onOpen(asset)}
      onMouseEnter={startPreview}
      onMouseLeave={() => setPreviewing(false)}
      aria-label={
        isVideo ? `Play ${asset.title} with sound` : `Enlarge ${asset.title}`
      }
      style={{ aspectRatio: `${asset.width} / ${asset.height}` }}
      className={cn(
        "group relative block w-full overflow-hidden bg-primary text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dk-blue-1",
        framed
          ? "mx-auto max-w-[420px] rounded-radius-xl p-space-2 md:max-w-none"
          : "rounded-radius-lg"
      )}
    >
      <span
        className={cn(
          "relative block h-full w-full overflow-hidden",
          framed && "rounded-radius-lg"
        )}
      >
        <Image
          loader={cloudinaryLoader}
          src={asset.posterUrl ?? asset.url}
          alt={isVideo ? "" : asset.title}
          width={asset.width}
          height={asset.height}
          sizes={sizes}
          className="h-full w-full object-contain"
        />

        {previewing && (
          <video
            src={asset.url}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-contain"
          />
        )}

        <span className="pointer-events-none absolute inset-x-0 bottom-0 block bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-space-4">
          {asset.client && (
            <span className="block text-ds-micro uppercase tracking-wide text-dk-blue-3">
              {asset.client}
            </span>
          )}
          <span className="mt-space-1 block text-ds-small text-primary-white">
            {asset.title}
          </span>
        </span>

        {isVideo && (
          <span className="absolute right-space-3 top-space-3 inline-flex h-9 w-9 items-center justify-center rounded-radius-full bg-primary-white/95 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-dk-blue-1 group-hover:text-white">
            <Play className="h-3.5 w-3.5 fill-current" />
          </span>
        )}
      </span>
    </button>
  );
}

interface PortfolioGridProps {
  assets: PortfolioAsset[];
}

export default function PortfolioGrid({ assets }: PortfolioGridProps) {
  const [activeMedia, setActiveMedia] = useState<LightboxMedia | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const openAsset = (asset: PortfolioAsset) =>
    setActiveMedia({
      type: asset.type,
      src:
        asset.type === "video"
          ? asset.url
          : cloudinaryLoader({ src: asset.url, width: 1600 }),
      poster: asset.posterUrl,
      title: asset.title,
      orientation: asset.orientation === "portrait" ? "portrait" : "landscape",
    });

  return (
    <>
      <div className="flex flex-col gap-space-5">
        {buildBands(assets).map((band) => {
          const bandRatio = band.reduce((sum, unit) => sum + unitRatio(unit), 0);

          return (
            <motion.div
              key={band[0][0].id}
              // Content must never be stranded under prefers-reduced-motion —
              // only the entrance offset and duration are dropped.
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
              }
              style={
                {
                  "--band-max": `${Math.round(bandRatio * MAX_BAND_HEIGHT)}px`,
                } as React.CSSProperties
              }
              className="flex flex-col gap-space-5 md:max-w-[var(--band-max)] md:flex-row"
            >
              {band.map((unit) => {
                const ratio = unitRatio(unit);
                const share = ratio / bandRatio;
                // Widths are grow-proportional to each unit's ratio, which makes
                // every unit the same height. A stack's inner gap is taken out
                // of its basis so that still holds exactly.
                const basis = ratio * (100 - (unit.length - 1) * GAP);

                return (
                  <div
                    key={unit[0].id}
                    style={
                      {
                        "--unit-flex": `${ratio} 1 ${basis}px`,
                      } as React.CSSProperties
                    }
                    className="flex min-w-0 flex-col gap-space-5 md:flex-[var(--unit-flex)]"
                  >
                    {unit.map((asset) => (
                      <Tile
                        key={asset.id}
                        asset={asset}
                        sizes={`(min-width: 1280px) ${Math.round(share * 1280)}px, (min-width: 768px) ${Math.round(share * 100)}vw, 100vw`}
                        onOpen={openAsset}
                      />
                    ))}
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>

      <MediaLightbox media={activeMedia} onClose={() => setActiveMedia(null)} />
    </>
  );
}
