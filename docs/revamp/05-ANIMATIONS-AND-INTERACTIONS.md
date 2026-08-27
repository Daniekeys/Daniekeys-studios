# 05 — ANIMATIONS AND INTERACTIONS

Source: frame-by-frame analysis of the reference screen recording. This is layout/motion reference only — nothing here implies any color. Where exact timing couldn't be measured precisely, a recommended default is given and marked as such.

## Global Scroll-Reveal (applies everywhere)
- Trigger: element enters viewport (~15–20% visibility).
- Motion: `opacity 0→1` + `translateY(24–32px)→0`, 500–600ms, `ease-out` (cubic-bezier(0.16,1,0.3,1)).
- Stagger sibling groups (stat blocks, cards, timeline entries, footer columns) ~80–120ms apart.
- Fires once per element (`viewport once: true`), no replay on scroll-back.
- Implementation: Framer Motion `whileInView` + `viewport={{ once: true, amount: 0.2 }}`.

## Hero
- Client-logo marquee / trust bar: if implemented as a scrolling strip, use a slow linear CSS marquee (~40–60px/s), pause on hover. Static row is also acceptable given only 4 real client logos exist — a static row is actually the safer default here (a marquee with only 4 logos loops awkwardly fast; prefer static unless more logos are added).
- Hero image: fades/scales in on load (`opacity 0→1`, `scale 0.96→1`, ~600ms ease-out) — same as the mockup reference's banner entrance, no border-color implication.
- Stat/proof-point chips (3×, +64%, 24/7): scroll-reveal per the global pattern, staggered.

## Numbered Accordions (Who We Are pillars, Services detail, Trust table, FAQ)
- Click header → expand/collapse via measured-height animation (`height:0→auto`), ~400–450ms `ease-in-out`. Framer Motion `AnimatePresence` with `initial/animate/exit` on height+opacity (CSS can't transition to `auto` directly).
- Toggle icon rotates 45° ("+"→"×") in sync, ~300ms.
- Row heading/numeral color transitions from dimmed to full-contrast + accent, ~250ms, concurrent with expand.
- Single-open-per-group behavior: opening a row closes any previously open row in the same accordion instance; both animations run concurrently, not sequentially.
- First row open by default on initial render.

## Stat Counters
- Trigger: ~30% viewport visibility, fires once.
- Motion: count 0 → target, ~1.5–2s, `ease-out` (fast start, decelerate into final number).
- Implementation: Framer Motion `useMotionValue` + `animate()`, round to integer, apply suffix statically after counting completes.
- Stagger multiple counters ~150ms apart.

## Package/Retainer Mode Toggle (`/pricing`)
- Click → filled segment slides between "Packages"/"Retainers" positions, ~250ms `ease-in-out`.
- Card grid content crossfades (~250–300ms) when switching modes, rather than an abrupt swap — the two modes show entirely different card sets (3 packages vs. 3 retainers), so treat this as a content swap with a fade transition, not a simple toggle animation.

## Testimonials
- Featured quote: auto-advances every ~6s (recommended default) and is manually navigable via prev/next arrows; crossfade quote text + name + photo together (~400ms).
- Secondary card row: user-controlled horizontal scroll (native scroll-snap or a lightweight carousel library), not an autoplaying marquee — with only 3 real quotes available, an autoplay marquee would loop too fast to read comfortably.

## Filter Tabs (`/portfolio`)
- Click a tab → active tab indicator (underline or filled pill) slides/fades to the new position, ~200ms.
- Project grid re-filters: fade out non-matching cards (~150ms), fade/reflow remaining cards into new grid position (~250ms). A simple crossfade of the whole grid on filter change is an acceptable, safer default if a smooth reflow proves complex.

## Process Steps
- Each step scroll-reveals per the global pattern as it enters the viewport (not globally staggered as a set — each triggers independently, matching the mockup reference's timeline-style reveal).

## Rotating Badge (Footer)
- Continuous 360° rotation, linear, infinite, ~15–20s per rotation (recommended default) — reads as ambient texture, not a spinner. CSS `@keyframes spin` + `animation: spin 18s linear infinite`.

## Scroll-to-Top Button
- Click → smooth-scroll to top, ~600–800ms `ease-in-out`.

## Form Interactions (`/contact`)
- Field focus: border color transitions to `--dk-blue-1`, ~150ms.
- Submit: button shows a loading state (spinner or pulsing label) while the request is in flight; success/error states should scroll-reveal in below the form using the global pattern, not a jarring instant swap.

## Reduced Motion
Respect `prefers-reduced-motion`: disable/shorten scroll-reveal translate distances, jump stat counters straight to their final value, freeze the rotating badge and any marquee on a static frame, and skip crossfade transitions in favor of instant swaps where motion isn't essential to comprehension.

## Page Transitions
Simple fade (200–300ms) between route changes across the now-multi-page site — this is more load-bearing in this version than in the single-page mockup reference, since users will actually navigate between `/`, `/services`, `/portfolio`, `/pricing`, `/about`, `/contact`. Keep it subtle and consistent everywhere.
