// Portfolio data layer — server only. Reads the portfolio straight from
// Cloudinary so the site reflects whatever is in the account.
// Spec: src/specs/cloudinary-portfolio-spec.md (Phase 1).
//
// Folder model (fixed-folder account, so the folder is part of the public_id):
//   <CLOUDINARY_FOLDER>/<subfolder>/…  -> one section per direct subfolder
//   <CLOUDINARY_FOLDER>/…              -> root-level assets, the "More Work" section
//
// The client-safe URL helper for the static site imagery is lib/cloudinary.ts —
// this file must never be imported from a client component (it holds the API
// secret via the SDK config).

import "server-only";

import { v2 as cloudinary } from "cloudinary";
import { unstable_cache } from "next/cache";

const ROOT_FOLDER = process.env.CLOUDINARY_FOLDER ?? "";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export type PortfolioOrientation = "landscape" | "square" | "portrait";

export type PortfolioAsset = {
  id: string; // asset_id
  publicId: string;
  type: "video" | "image";
  url: string; // delivery URL with f_auto,q_auto
  posterUrl?: string; // video only: JPG frame at ~2s, same aspect ratio as the video
  width: number;
  height: number;
  aspectRatio: number; // exact width / height
  orientation: PortfolioOrientation;
  duration?: number; // video only
  title: string; // context title, else a cleaned-up filename
  client?: string; // from context metadata
  createdAt: string;
};

export type PortfolioSection = {
  folder: string; // full folder path
  slug: string;
  label: string;
  assets: PortfolioAsset[];
};

// Section order and labels, keyed by subfolder name. Edit here to reorder or
// rename a section. A subfolder that isn't listed gets a label derived from
// its name and sits after these; root-level assets are always the last section.
const SECTIONS: { folder: string; label: string }[] = [
  { folder: "motion-ads", label: "Motion Ads" },
  { folder: "ai-animation", label: "AI Animation" },
  { folder: "ugc-ads", label: "UGC Ads" },
  { folder: "explainers-and-stories", label: "Explainers & Stories" },
  { folder: "graphics", label: "Graphics" },
];
const ROOT_SECTION_LABEL = "More Work";

// The subset of a Search API resource this file reads.
interface SearchResource {
  asset_id: string;
  public_id: string;
  folder: string;
  resource_type: string;
  version: number;
  width: number;
  height: number;
  duration?: number;
  etag: string;
  created_at: string;
  // Admin API nests custom context under `custom`; Search returns it flat.
  // No asset in the account had context when this was written, so the Search
  // shape is unconfirmed — both are read.
  context?: { custom?: Record<string, string> } & Record<string, unknown>;
}

// Cloudinary appends "_" + 6 random lowercase alphanumerics to uploaded
// filenames (e.g. david-goliath_bal9al).
const RANDOM_SUFFIX = /_[a-z0-9]{6}$/;

// Exports are often slightly off-ratio (e.g. 1920x1088), so anything within
// 5% of 1:1 counts as square.
const SQUARE_TOLERANCE = 0.05;

function baseName(publicId: string): string {
  return publicId.slice(publicId.lastIndexOf("/") + 1).replace(RANDOM_SUFFIX, "");
}

function toWords(value: string): string {
  return value
    .replace(/[_-]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getOrientation(aspectRatio: number): PortfolioOrientation {
  if (Math.abs(aspectRatio - 1) <= SQUARE_TOLERANCE) return "square";
  return aspectRatio > 1 ? "landscape" : "portrait";
}

function toAsset(resource: SearchResource): PortfolioAsset {
  const isVideo = resource.resource_type === "video";
  const context = resource.context?.custom ?? resource.context;
  const contextTitle = typeof context?.title === "string" ? context.title.trim() : "";
  const client = typeof context?.client === "string" ? context.client.trim() : "";
  const aspectRatio = resource.width / resource.height;

  const delivery = {
    resource_type: resource.resource_type,
    version: resource.version,
    quality: "auto",
  };

  return {
    id: resource.asset_id,
    publicId: resource.public_id,
    type: isVideo ? "video" : "image",
    url: cloudinary.url(resource.public_id, { ...delivery, fetch_format: "auto" }),
    posterUrl: isVideo
      ? cloudinary.url(resource.public_id, {
          ...delivery,
          format: "jpg",
          // A clip shorter than the offset has no frame at 2s.
          start_offset: resource.duration && resource.duration > 2 ? 2 : 0,
        })
      : undefined,
    width: resource.width,
    height: resource.height,
    aspectRatio,
    orientation: getOrientation(aspectRatio),
    duration: isVideo ? resource.duration : undefined,
    title: contextTitle || toWords(baseName(resource.public_id)),
    client: client || undefined,
    createdAt: resource.created_at,
  };
}

async function searchFolder(folder: string): Promise<SearchResource[]> {
  const resources: SearchResource[] = [];
  let cursor: string | undefined;

  do {
    let search = cloudinary.search
      .expression(`folder="${folder}"`)
      .with_field("context")
      .max_results(500);
    if (cursor) search = search.next_cursor(cursor);

    const result = await search.execute();
    resources.push(...result.resources);
    cursor = result.next_cursor;
  } while (cursor);

  return resources.filter(
    (resource) => resource.resource_type === "video" || resource.resource_type === "image"
  );
}

const byNewest = (a: SearchResource, b: SearchResource) =>
  b.created_at.localeCompare(a.created_at);

/**
 * Only one copy of any asset ever renders. Two assets are duplicates when they
 * are the same file (etag) or share a normalized name (folder path and random
 * suffix stripped, lowercased). The copy in a category folder wins over a
 * root-level one; otherwise the newest wins.
 */
function dedupe(resources: SearchResource[]): SearchResource[] {
  const preferred = [...resources].sort((a, b) => {
    const aInRoot = a.folder === ROOT_FOLDER;
    const bInRoot = b.folder === ROOT_FOLDER;
    if (aInRoot !== bInRoot) return aInRoot ? 1 : -1;
    return byNewest(a, b);
  });

  const seenEtags = new Set<string>();
  const seenNames = new Set<string>();

  return preferred.filter((resource) => {
    const name = baseName(resource.public_id).toLowerCase();
    if (seenEtags.has(resource.etag) || seenNames.has(name)) return false;
    seenEtags.add(resource.etag);
    seenNames.add(name);
    return true;
  });
}

async function fetchPortfolioSections(): Promise<PortfolioSection[]> {
  if (!ROOT_FOLDER) throw new Error("CLOUDINARY_FOLDER is not set");

  const { folders } = await cloudinary.api.sub_folders(ROOT_FOLDER, { max_results: 500 });
  const subfolders: { name: string; path: string }[] = folders;

  const position = (name: string) => {
    const index = SECTIONS.findIndex((section) => section.folder === name);
    return index === -1 ? SECTIONS.length : index;
  };

  const sources = [
    ...subfolders
      .sort((a, b) => position(a.name) - position(b.name) || a.name.localeCompare(b.name))
      .map((folder) => ({
        folder: folder.path,
        slug: toSlug(folder.name),
        label:
          SECTIONS.find((section) => section.folder === folder.name)?.label ??
          toWords(folder.name),
      })),
    { folder: ROOT_FOLDER, slug: toSlug(ROOT_SECTION_LABEL), label: ROOT_SECTION_LABEL },
  ];

  const results = await Promise.all(sources.map((source) => searchFolder(source.folder)));
  const kept = new Set(dedupe(results.flat()).map((resource) => resource.asset_id));

  const sections = sources.map((source, index) => ({
    ...source,
    assets: results[index]
      .filter((resource) => kept.has(resource.asset_id))
      .sort(byNewest)
      .map(toAsset),
  }));

  // Sections with nothing to show are dropped.
  return sections.filter((section) => section.assets.length > 0);
}

// The Search API is rate limited per hour, so this cache is required. The
// webhook revalidates the `portfolio` tag; the hourly revalidate is a fallback.
const getCachedPortfolioSections = unstable_cache(
  fetchPortfolioSections,
  ["portfolio-sections"],
  { tags: ["portfolio"], revalidate: 3600 }
);

/**
 * Every portfolio section, deduplicated, newest asset first. A Cloudinary
 * failure is logged and returns an empty list so the page still renders — the
 * failure is thrown inside the cache so an outage is never cached for an hour.
 */
export async function getPortfolioSections(): Promise<PortfolioSection[]> {
  try {
    return await getCachedPortfolioSections();
  } catch (error) {
    console.error("Cloudinary portfolio fetch failed:", error);
    return [];
  }
}
