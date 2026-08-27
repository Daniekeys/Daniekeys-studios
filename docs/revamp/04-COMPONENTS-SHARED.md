# 04 — COMPONENTS (SHARED)

These are reused across the landing page and multiple sub-pages. Build each once, drive differences via props — don't fork copies per section. Colors/spacing referenced here always mean the tokens in `01-DESIGN-SYSTEM.md`.

## Button
Same as the layout reference: rectangle, `--radius-md`, label left, small square icon-chip right with an arrow.
- `primary`: `--dk-blue-1` bg, `--white` text, `--black` icon chip with `--white` arrow. Use for the single most important action per section ("Start a Project," "Book a Free Discovery Call").
- `secondary`: `--black` bg, `--white` text/icon chip. Use for everything else ("Learn More," "See Pricing," "View Our Work," "Get Started").
- `text-link`: no fill, trailing "→", underline on hover. Use for tertiary actions ("View Project →," "Explore All Services →").
- Hover: icon chip arrow slides ~4px right, 200ms ease. Focus-visible: 2px `--dk-blue-1` outline, 2px offset.

## Numbered Accordion (generic, `variant` prop)
Single-open-at-a-time expandable list, row = numeral + heading + toggle icon ("+"↔"×", 45° rotate), hairline divider, collapsed rows dimmed (`--light-dark`), open row full-contrast with `--dk-blue-1` numeral accent. Height-auto expand animation per `05-ANIMATIONS-AND-INTERACTIONS.md`. First item open by default.

Variants needed for this build:
- `variant="pillars"` — landing "Who We Are" 4-pillar list. Expanded content: short description only (no image needed, these are one-liners — simpler than the mockup's side-image variant).
- `variant="service-detail"` — `/services` page, 8 rows. Expanded content: full deliverables bullet list, tag pills, "Best for" line, "Starts from ₦X" price line, CTA button. This is a richer version of the mockup's overlay-image accordion — use a **side list, no forced photo overlay** (a supporting image is optional per-row, not mandatory, since deliverable lists are dense enough to stand alone).
- `variant="trust-table"` — `/about` recognition/trust rows (3-column header pattern from the mockup's awards table, adapted to trust metrics instead of award names+years).
- `variant="faq"` — `/services` and `/pricing` FAQ. Category or flat list (see individual page specs); expanded content = plain answer paragraph, no image.

## Stat Counter
Numeral counts 0 → target once on scroll-into-view (see animations doc). Numeral `--white`/`--black` per bg, suffix (+, %, ×) in `--dk-blue-1`, one-line caption below in `--light-dark`. Used on landing (Who We Are stats) and `/about` (full stats row).

## Package / Retainer Card (was "Pricing Card")
Dark panel (`--radius-xl`), blurred `--dk-blue-1`/`--dk-blue-2` radial glow behind (contained, `overflow:hidden`), content stack: plan name, one-line description, "What's Included?" label, checklist (`--dk-blue-1` checkmarks), price row (large numeral + "/month" or range display for one-time packages), "Best for" line, timeline line (packages only), CTA button, fine-print line. `isRecommended` (⭐ Most Popular) → vertical ribbon, `--dk-blue-1` bg. Needs to support **two price display modes**: a fixed "/month" recurring price (retainers) and a **range** display ("₦250,000 – ₦650,000" one-time) — build the price row as a flexible slot, not hardcoded to a single number+period pattern.

## Mode Toggle (was "Pricing Toggle")
Pill switch, `--dk-blue-1` filled active segment, ~250ms slide. On the landing teaser this is **not used** (teaser shows static package names only). On `/pricing` it switches the full card grid between "Packages" and "Retainers" modes — labels change accordingly (not "Projects/Monthly" as in the mockup).

## Testimonial Card (two sub-variants)
- Variant A — quote card: small avatar, name, company, 5-star row (`--dk-blue-1`), quote paragraph. (No real video testimonials exist yet for Daniekeys — **drop the mockup's video-testimonial variant entirely** for this build; all testimonial cards are text/quote style.)
- Variant B — featured large quote: oversized quote-mark glyph (`--dk-blue-1`), pull-quote (`--text-h3`), "FEATURED REVIEW" vertical label, pagination + prev/next arrows if more than one quote is cycling, client name/company/photo. With only 3 real quotes available, pagination reads "01/03" and cycles all 3 — the secondary row below can reuse the same 3 quotes in card format (see `00-OVERVIEW.md` open items).

**Pull-quote alignment convention (established Batch 8 — do not re-litigate).** Every large pull-quote / `<blockquote>` sitewide is **left-aligned**, including the `/about` "Founder's Words" quote. This is a deliberate divergence from the mockup, whose Founder's Words block is right-aligned — left wins for readability and for consistency with Variant A / TestimonialCard. Any later batch that adds or touches a quote component (pricing testimonials, case-study pull-quotes, etc.) follows the left-aligned convention; don't reopen the mockup comparison on this point.

## Avatar Group
3 overlapping circular photos + caption, used for founder credit (landing hero) and any "trusted by X clients" trust line.

## Logo / Client Marks Strip
Horizontal row of client logos (Afriment, Candexa, My Lang Coach, Buymejollof — real logos referenced on the live site), muted/grayscale treatment, evenly spaced. Used in the landing hero trust bar.

## Timeline Entry
Zigzag alternating layout (desktop) / single-column (mobile), connected by a vertical rule. Used once, on `/about`'s History section. Entry = "// YEAR" eyebrow + bold milestone title + one-line description.

## Process Step
Numbered row (image left, heading/description/CTA right), connected by a vertical rule across all steps. Used on landing (condensed, first 3–4 of 5 steps or all 5 compact) and `/services` (full 5, complete descriptions).

## Filter Tabs (new — for `/portfolio`)
Horizontal row of pill/text tabs (All / Branding / Motion / Web / Marketing), active tab underlined or filled with `--dk-blue-1`, filters the project grid below on click (client-side filter, no page reload). Not present in the mockup reference — build fresh, keeping the same flat/hairline visual language as the rest of the site.

## Project Card (new — for landing teaser and `/portfolio` grid)
Image (rounded, `--radius-lg`), category tag, project title, "View Project →" text-link. Grid: 3-up desktop / 1-up mobile on `/portfolio`; landing teaser shows 3–4 in a row/carousel, no filter tabs needed there.

## Nav Header
Logo (wordmark "Daniekeys Studios" or "Daniekeys." lockup — see `10-LANDING-shell-hero.md` for the exact logo treatment) + hamburger, transparent-over-hero → solid on scroll. Same pattern as the mockup reference.

## Full-Screen Nav Overlay
Full-viewport `--black` panel, large stacked links matching the real sitemap (Home, About, Services, Portfolio, Pricing, Contact), close (×) button, optional social icons at the bottom.

## Rotating Badge
Circular disc, `--dk-blue-1` fill, `--black` text on a circular path, continuous slow rotation. Content: "★ RATED 5.0 ON GOOGLE ★" (real, replaces the mockup's "AN AWARD WINNING MARKETING AGENCY" text since it's a stronger, factual claim).

## Scroll-to-Top Button
Small square, `--dk-blue-1` fill, `--black` chevron-up icon, sits in the footer's document flow (not fixed-floating), smooth-scrolls to top on click.

## Decorative Watermark Glyph
Large (300–500px), low-opacity (`--light-dark` 6–10%) flower/pinwheel outline, absolute-positioned, `pointer-events:none`, used sparingly (2–3 places total, e.g. landing "Who We Are" and the footer CTA) for continuity, exactly as in the layout reference — shape only, no color change needed since it was already neutral gray in the source.

## Form Fields (new — for `/contact`)
Text input, textarea, select (service interest dropdown) — `--radius-md`, hairline border, `--dk-blue-1` focus ring, label above field in `--text-small`/`--light-dark`. Submit button = `primary` Button variant.
