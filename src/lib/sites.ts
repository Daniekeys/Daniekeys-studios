// Brand websites we built, served as real pages from public/sites/<slug>/.
// Each one opens full screen at /work/<slug>/site (see next.config.mjs) and
// shows in its case study as a browser and phone preview (SitePreview).
// To add one: put its index.html and files in public/sites/<slug>/ (paths
// starting /sites/<slug>/), add preview-desktop.jpg (2000x1250) and
// preview-mobile.jpg (780x1688), then add it here.

export type Site = {
  slug: string;
  title: string;
  url: string; // full-screen page
  path: string; // the static file, for the inline preview
  desktop: string; // 1440x900 screenshot at 2x
  mobile: string; // 390x844 screenshot at 2x
};

const site = (slug: string, title: string): Site => ({
  slug,
  title,
  url: `/work/${slug}/site`,
  path: `/sites/${slug}/index.html`,
  desktop: `/sites/${slug}/preview-desktop.jpg`,
  mobile: `/sites/${slug}/preview-mobile.jpg`,
});

export const SITES: Site[] = [site("tandari", "Tandari"), site("ire", "Ire")];

export const getSite = (slug: string) => SITES.find((s) => s.slug === slug);
