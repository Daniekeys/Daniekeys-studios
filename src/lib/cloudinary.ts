// URL helper for the static site imagery (who-we-are, trust, process, cta,
// about). These files live in the repo under /public/images/<publicId>.jpg and
// are served from there; next/image handles resizing and format.
//
// This used to switch to Cloudinary delivery whenever
// NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME was set. The images were never uploaded
// to Cloudinary under these IDs, so setting that variable 404'd every one of
// them. If they are uploaded later (scripts/upload-images.js keeps the same
// folder/filename as the public ID), a Cloudinary branch can come back here.
//
// The portfolio is separate: it reads Cloudinary through the server-only
// lib/cloudinary-portfolio.ts.

export function getImageUrl(publicId: string): string {
  return `/images/${publicId}.jpg`;
}
