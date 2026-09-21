// Cloudinary delivery helper.
//
// Scaffolded against a placeholder env var per your instruction — no real
// Cloudinary account is wired in yet. Until NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
// is set, getImageUrl() falls back to the matching local file under
// /public/images/<publicId>.jpg, so the site works today with zero config.
//
// To switch a site over to Cloudinary later:
//   1. Upload the files already sitting in /public/images/** to your
//      Cloudinary account, keeping the same folder/filename as the public ID
//      (e.g. public/images/trust/rating-5-0.jpg -> public ID "trust/rating-5-0").
//   2. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME (and, if you use signed
//      uploads elsewhere, NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET) in your
//      deployment env.
//   3. Nothing else changes — every call site here already goes through
//      getImageUrl()/getImageSrcSet(), so it starts serving optimized
//      Cloudinary URLs automatically.
//
// NOTE ON ENV VAR NAMING: your original spec used a VITE_ prefix
// (VITE_CLOUDINARY_CLOUD_NAME), which is a Vite convention. This app is
// Next.js, where client-exposed env vars must be prefixed NEXT_PUBLIC_
// instead — a bare VITE_ var would be undefined in the browser bundle. I've
// used the Next.js-correct names below; let me know if your deploy pipeline
// needs different names.

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

export const isCloudinaryConfigured = Boolean(CLOUD_NAME);

interface CloudinaryUrlOptions {
  width?: number;
  crop?: "fill" | "fit" | "scale";
}

/**
 * Builds an optimized Cloudinary delivery URL (auto format, auto quality,
 * fixed width) for a public ID. Falls back to the local /public/images copy
 * when Cloudinary isn't configured yet.
 */
export function getImageUrl(
  publicId: string,
  { width = 1200, crop = "fill" }: CloudinaryUrlOptions = {}
): string {
  if (!CLOUD_NAME) {
    return `/images/${publicId}.jpg`;
  }

  const transforms = [`f_auto`, `q_auto`, `c_${crop}`, `w_${width}`].join(",");
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

/**
 * Responsive srcset across common breakpoints. Only meaningful once
 * Cloudinary is configured — a static local file has no real variants, so
 * this returns undefined in the fallback case and callers should omit
 * `srcSet` entirely rather than pass a single-URL "set".
 */
export function getImageSrcSet(
  publicId: string,
  widths: number[] = [480, 768, 1024, 1400, 1920]
): string | undefined {
  if (!CLOUD_NAME) return undefined;
  return widths.map((w) => `${getImageUrl(publicId, { width: w })} ${w}w`).join(", ");
}

export const cloudinaryConfig = {
  cloudName: CLOUD_NAME,
  uploadPreset: UPLOAD_PRESET,
};
