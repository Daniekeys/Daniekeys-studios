# 90 — BUILD PLAN: BATCHES

## Why Batches
This is a revamp of an existing, already-built site. Working through one small, fully-specified batch at a time — and fully finishing and verifying it before moving to the next — keeps each pass grounded in a narrow, concrete reference file instead of the whole spec at once. That's what prevents drift/hallucination on a project this size. **Do not skip ahead or blend batches.** Finish a batch's checklist before opening the next batch's file.

Before Batch 1, read (once, not per-batch): `00-OVERVIEW.md`, `01-DESIGN-SYSTEM.md`, `02-SITEMAP-AND-PAGE-PLAN.md`, `03-IMAGE-SOURCING-GUIDE.md`, `04-COMPONENTS-SHARED.md`, `05-ANIMATIONS-AND-INTERACTIONS.md`. These are your standing reference for every batch — re-check them whenever a batch references a token, component, or rule you're unsure of, rather than re-reading them cover to cover each time.

## Batch Sequence

### Batch 0 — Audit (do this first, every time)
Before writing any code: review the existing repository structure. Identify what already exists (routing setup, existing header/footer, existing homepage sections, design tokens if any) versus what needs to be created or revamped. Note any existing component names/conventions in the codebase and prefer extending those over introducing parallel new ones with different naming. Produce a short internal plan of which existing files map to which batch below before starting Batch 1.

### Batch 1 — Design Tokens
Reference: `01-DESIGN-SYSTEM.md`.
Wire the full color/type/spacing/radius token set into the project's styling system (Tailwind config or equivalent). Load `Plus Jakarta Sans` + `Inter`. No visible output yet — this is foundation only.
✅ Done when: every token in `01-DESIGN-SYSTEM.md` is available as a reusable class/variable, and a throwaway test element proves each color renders correctly.

### Batch 2 — Shared Components, Part 1 (primitives)
Reference: `04-COMPONENTS-SHARED.md`.
Build/revamp: Button (all 3 variants), Numbered Accordion (generic, all 4 variants wired but not yet populated with real content), Stat Counter.
✅ Done when: each component can be dropped into a scratch page with placeholder content and matches the visual/interaction spec.

### Batch 3 — Shared Components, Part 2 (composite)
Reference: `04-COMPONENTS-SHARED.md`, `05-ANIMATIONS-AND-INTERACTIONS.md`.
Build/revamp: Package/Retainer Card, Mode Toggle, Testimonial Card (both variants), Avatar Group, Logo/Client Marks Strip, Timeline Entry, Process Step, Filter Tabs, Project Card, Rotating Badge, Scroll-to-Top Button, Watermark Glyph, Form Fields.
✅ Done when: each component works in isolation with placeholder content and correct motion per the animations doc.

### Batch 4 — Global Shell + Landing Hero
Reference: `10-LANDING-shell-hero.md`.
Build/revamp: Header, Footer, Full-Screen Nav Overlay, Hero section, client trust bar.
✅ Run the Batch 4 checklist in `10-LANDING-shell-hero.md` before continuing.

### Batch 5 — Landing: Who We Are + Numbers
Reference: `11-LANDING-who-we-are-numbers.md`.
✅ Run that file's checklist.

### Batch 6 — Landing: Services Teaser + Featured Work + AI Advantage
Reference: `12-LANDING-services-work-ai.md`.
✅ Run that file's checklist.

### Batch 7 — Landing: Process + Testimonials + Pricing Teaser + Final CTA
Reference: `13-LANDING-process-testimonials-cta.md`.
✅ Run that file's checklist. **After this batch, do a full top-to-bottom review of the live landing page** against `02-SITEMAP-AND-PAGE-PLAN.md`'s section list, on both desktop and mobile widths, before moving to sub-pages.

### Batch 8 — /about
Reference: `20-PAGE-about.md`.
✅ Run that file's checklist.

### Batch 9 — /services
Reference: `21-PAGE-services.md`.
This is the densest content page — budget extra time, and don't rush the 8-item accordion's content accuracy.
✅ Run that file's checklist.

### Batch 10 — /portfolio
Reference: `22-PAGE-portfolio.md`.
✅ Run that file's checklist.

### Batch 11 — /pricing
Reference: `23-PAGE-pricing.md`.
Pay close attention to the Packages-vs-Retainers structure — it is NOT a single toggle between two states, it's a tab pair (Packages/Individual Services) plus a separately-presented Retainers section. Don't collapse this into a simpler single-toggle pattern; match the real site's structure.
✅ Run that file's checklist.

### Batch 12 — /contact
Reference: `24-PAGE-contact.md`.
✅ Run that file's checklist.

### Batch 13 — Legal Stubs
Not separately specced (out of scope for content detail) — create `/legal/privacy-policy` and `/legal/terms-of-service` as simple styled pages using the shared page-header pattern, with placeholder legal text clearly marked as needing real legal copy before launch. Don't invent binding legal terms.

### Batch 14 — Full-Site QA Pass
Reference: all files.
- [ ] Every route in `02-SITEMAP-AND-PAGE-PLAN.md`'s sitemap exists and is reachable from nav/footer
- [ ] No lime-yellow or any mockup-original color anywhere in the shipped site — spot check every page
- [ ] No Clonix-sourced photography anywhere — every image traces to a fresh source per `03-IMAGE-SOURCING-GUIDE.md`
- [ ] All `prefers-reduced-motion` handling in place across animated components
- [ ] Accessibility pass: accordions keyboard-operable with correct `aria-expanded`/`aria-controls`, icon-only buttons have `aria-label`s, contrast-check `--light-dark` body text
- [ ] Mobile pass at 375px width on every page
- [ ] Every "needs verification" / "confirm before shipping" item from `00-OVERVIEW.md` and the individual page specs is collected into a single list and handed back to Daniel for confirmation (founder name, history timeline milestones, FAQ answer copy, testimonial volume)

## If New Mockups Arrive Mid-Build
If updated mockup files are provided after this build plan is underway, treat them the same way as the original mockups: **layout/shape/proportion reference only, never a color source** (per `01-DESIGN-SYSTEM.md`'s critical rule). Compare the new mockup against whichever batch's section it corresponds to, adjust that batch's implementation to match the refined layout, and re-run that batch's checklist — don't restart the whole sequence unless the new mockups represent a structural change to the sitemap itself (in which case, revisit `02-SITEMAP-AND-PAGE-PLAN.md` first).
