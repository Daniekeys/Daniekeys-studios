# 22 — PAGE: /portfolio

Batch scope: the full Portfolio page — a filterable project grid.

## Page Header
- Eyebrow: `// Our Work`
- H1: **"Work That Speaks Before We Do."** (real headline, use as-is)
- Supporting line: "Real projects. Real clients. Real results."

## Filter Tabs
Component per `04-COMPONENTS-SHARED.md`: **All / Branding / Motion / Web / Marketing** — matches the real site's exact filter categories. Active tab styled with `--dk-blue-1` underline or fill.

## Project Grid
3-up desktop / 1-up mobile, 6 real projects:
1. **Afriment — Brand Identity System** — category: Branding
2. **Candexa — Visual Identity Rebrand** — category: Branding
3. **My Lang Coach — Promotional Video Series** — category: Marketing (tag secondarily as Motion if a dual-tag filter is supported)
4. **Buymejollof — Brand Launch Video** — category: Marketing
5. **Digital Commerce Website** — category: Web
6. **Launch Campaign System** — category: Marketing

Each card: project image (sourced fresh per `03-IMAGE-SOURCING-GUIDE.md` — mockup-style presentation shots, not real client screenshots since real assets weren't available for this analysis), category tag, project title, "View Project →" text-link.

**On "View Project"**: since individual case-study detail content wasn't available in the fetched source, either (a) link to `/contact` with a pre-filled reference to that project as a lightweight interim solution, or (b) stub a generic `/portfolio/[slug]` detail route with the project name/category/image and a "Get a project like this →" CTA, ready to be filled in with real case-study detail (challenge/approach/results) later. Prefer (b) if time allows — it's a small addition once the grid exists and sets up the site to hold real case studies as they're written.

## CTA Band
- H3: "Like What You See? Let's Build Something for You."
- Primary button "Book a Free Discovery Call →" → `/contact`

## Mobile
- Filter tabs: horizontal scroll row if all 5 don't fit, or wrap to 2 rows.
- Project grid: 1-up, full-width cards.

## Batch Checklist
- [ ] All 6 real projects present with correct names/categories
- [ ] Filter tabs functional (client-side filter, no page reload), matching the 5 real categories
- [ ] No invented/fake project names beyond the 6 confirmed real ones
- [ ] CTA routes to `/contact`
