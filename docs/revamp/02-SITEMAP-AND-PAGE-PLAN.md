# 02 — SITEMAP AND PAGE PLAN

## Why We're Splitting the Page
The mockup reference is one long scrolling page with 14 stacked sections. That worked for Clonix as a template demo, but for a real working agency site it makes the homepage bloated and buries the deep content (full service deliverables, full portfolio, full pricing) that serious prospects actually want to dig into. Daniekeys Studios' real site already solves this correctly — it has dedicated `/services`, `/portfolio`, `/pricing`, and `/contact` routes with an `/about` anchor — so this revamp follows that same real, working structure rather than the mockup's single-page format.

## Site Map
```
/                     Landing page (short — see section list below)
/about                Full company story, pillars, stats, founder's words, history, recognition/trust
/services             All 8 services, full deliverables, pricing-from, add-ons, process, FAQ
/portfolio            Filterable project grid (All / Branding / Motion / Web / Marketing)
/pricing              Complete Packages (Starter/Business/Premium) + Monthly Retainers, toggle-switched
/contact              Discovery call CTA, contact form, contact info, WhatsApp
/legal/privacy-policy
/legal/terms-of-service
```

## Landing Page — Section List (in order)
Keep this tight. Every section here is either a *decision-maker* (proof, differentiation, trust) or a *funnel* pointing to a full page — none of them try to be the complete story.

1. **Header** (fixed, logo + hamburger) — shared shell, see `10-LANDING-shell-hero.md`
2. **Hero** — headline, CTA pair, proof-point chips, client logo marquee, hero image — `10-LANDING-shell-hero.md`
3. **Who We Are (compact)** — positioning statement + 4 pillars + stats row — `11-LANDING-who-we-are-numbers.md`
4. **Services (teaser)** — 6 core service cards, each linking to `/services` — `12-LANDING-services-work-ai.md`
5. **Featured Work (teaser)** — 3–4 project highlights + "See All Projects" → `/portfolio` — `12-LANDING-services-work-ai.md`
6. **AI Advantage** — Daniekeys' unique differentiator section (AI chatbots/pipelines/analytics) — `12-LANDING-services-work-ai.md`
7. **Our Process (compact)** — 5-step process, condensed — `13-LANDING-process-testimonials-cta.md`
8. **Testimonials** — featured quote + secondary card row — `13-LANDING-process-testimonials-cta.md`
9. **Pricing (teaser only)** — 3 package names + starting price + single CTA to `/pricing`, no toggle, no full feature lists — `13-LANDING-process-testimonials-cta.md`
10. **Final CTA** — "Ready to Build Something That Actually Works?" + Book a Call / WhatsApp — `13-LANDING-process-testimonials-cta.md`
11. **Footer** — shared shell, see `10-LANDING-shell-hero.md`

**Explicitly cut from the landing page** (moved to their own routes, not duplicated in shortened form): the full numbered-accordion service deliverables, the full company history timeline, the awards/recognition accordion, the full project grid with filters, and the full pricing packages+retainers toggle. If you find yourself tempted to add a 6th paragraph of detail to any landing section, that detail belongs on the linked sub-page instead.

## Sub-Page Section Lists

### `/about` (spec: `20-PAGE-about.md`)
1. Page header (small hero: eyebrow + H1 + supporting line)
2. Who We Are — full version (positioning + 4 pillars, expanded copy vs. the landing teaser)
3. Stats row (50+ Projects / 5+ Years / 3× Growth / 100% On-Time)
4. Founder's Words — pull quote
5. Our History — timeline (needs-verification milestones, see `00-OVERVIEW.md`)
6. Recognition & Trust — accordion of trust proof points (adapted from the mockup's awards-table pattern)
7. CTA band → `/contact`

### `/services` (spec: `21-PAGE-services.md`)
1. Page header
2. Core services accordion — all 8 services, full deliverables/pricing-from/best-for per item
3. Digital Development spotlight (Websites That Convert / Apps That Perform)
4. Optional Add-Ons list
5. Process (full 5-step, same content as landing but complete, not condensed)
6. FAQ accordion
7. CTA band → `/contact` and `/pricing`

### `/portfolio` (spec: `22-PAGE-portfolio.md`)
1. Page header
2. Filter tabs: All / Branding / Motion / Web / Marketing
3. Project grid (6 real projects)
4. CTA band → `/contact`

### `/pricing` (spec: `23-PAGE-pricing.md`)
1. Page header
2. Mode toggle: **Packages** ↔ **Retainers** (reuses the mockup's pricing-toggle component, repurposed from "Projects/Monthly" to "Packages/Retainers")
3. Packages mode: 3 cards (Starter / Business ⭐ / Premium)
4. Retainers mode: 3 cards (Content Starter / Growth Partner ⭐ / Agency Partner)
5. Payment flexibility explainer (50/50, 3-Stage, Retainer billing + international payment note)
6. Pricing FAQ accordion
7. CTA band → `/contact`

### `/contact` (spec: `24-PAGE-contact.md`)
1. Page header
2. Contact form (name, email, phone, service interest, message)
3. Contact info sidebar (email, phone, location, hours)
4. WhatsApp CTA
5. Social links

## Shared Shell (every page)
Header and Footer are identical across all routes (content in `10-LANDING-shell-hero.md`, since the shell ships alongside the hero as the very first build batch). Sub-pages get a compact "page header" pattern (eyebrow + H1 + one-line supporting text, no full hero treatment) rather than repeating the landing hero.
