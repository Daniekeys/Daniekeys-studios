// Vertical grid-column x-positions (% of viewport width), measured directly
// off /reference/desktop-mockup.jpeg and /reference/mobile-mockup-view.jpg
// by sampling pixel brightness across background rows to find the hairline
// columns. Desktop: 6 lines, ~17.6% apart, 6.1% edge margins. Mobile: 5
// lines, ~22.4% apart, 5.25% edge margins — confirmed fewer than desktop,
// not just a scaled-down copy. See the sitewide-sweep report for the raw
// sample data.
export const GRID_COLUMNS_DESKTOP = [6.1, 23.6, 41.1, 58.7, 76.3, 93.9];
export const GRID_COLUMNS_MOBILE = [5.25, 27.5, 49.75, 72.25, 94.75];
