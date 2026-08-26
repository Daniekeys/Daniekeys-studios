# 12 — LANDING: Services Teaser + Featured Work Teaser + AI Advantage

Batch scope: the three "proof and differentiation" sections between the stats row and the process section. Each is a teaser pointing to a fuller page except AI Advantage, which is unique to Daniekeys and lives on the landing page in full.

## Section: Services (teaser)
- Background: `--black` (dark break after the Who We Are/Numbers light section).
- Eyebrow: `// What We Do`
- H2: **"Six Ways We Help Your Business Win Online."** (real headline, use as-is)
- Body: "From brand identity to AI automation — every service is built to deliver a measurable return on your investment."
- Layout: **card grid, not accordion** for the landing teaser (the full accordion with deliverables lives on `/services` — the landing version should be scannable at a glance, not another expandable list). 6 cards, 3-up desktop / 1-up mobile:
  1. **AI Digital Strategy** *(NEW badge)* — "We use AI to audit, plan, and execute digital strategies that give your business an unfair advantage over competitors still doing things manually."
  2. **Brand Identity & Design** — "Logos, visual systems, colour palettes, and brand guidelines that make your business look like it belongs at the top." Tags: Logo Design, Visual Identity, Brand Guidelines
  3. **Website & App Development** — "Fast, beautiful, mobile-first websites and apps that don't just look impressive — they convert visitors into paying customers." Tags: Web Design, E-Commerce, UI/UX, App Dev
  4. **Motion Graphics & Video** — "Animated ads, brand videos, explainer reels, and motion graphics that stop the scroll and build instant brand recall." Tags: Brand Video, Animated Ads, Explainer Videos
  5. **AI Chatbots & Automation** *(NEW badge)* — "Deploy AI agents on your website, WhatsApp, and Instagram that handle enquiries, qualify leads, and book appointments — 24/7 without extra headcount."
  6. **Digital Marketing & Social Media** — "AI-enhanced content strategies, social media management, SEO, and ad campaigns that build audiences and drive consistent revenue."
- Each card: heading, description, tags (where listed), text-link "Learn More →" → `/services`.
- Section CTA (below the grid): secondary button **"Explore All Services →"** → `/services`.

## Section: Featured Work (teaser)
- Background: continue `--black` or break to `--off-white` — recommend `--off-white` here to keep the dark/light alternation going and to let project imagery pop against a lighter background (matches how the mockup's Projects section reads against its dark bg via strong photography — with real photography this may work either way; use judgment, default to `--off-white`).
- Eyebrow: `// Our Work`
- H2: **"Work That Speaks Louder Than Pitches."** (borrowed/adapted framing — this phrase tests well and fits Daniekeys' "Work That Speaks" real portfolio-page energy)
- Body: "Real projects. Real clients. Real results."
- Layout: Project Card grid (see `04-COMPONENTS-SHARED.md`), 3–4 cards, no filter tabs on the landing teaser (filters live on `/portfolio`):
  1. **Afriment** — Brand Identity System — tag: Branding
  2. **Candexa** — Visual Identity Rebrand — tag: Branding
  3. **My Lang Coach** — Promotional Video Series — tag: Marketing/Motion
  4. **Buymejollof** — Brand Launch Video — tag: Marketing
- Each card: image (sourced per `03-IMAGE-SOURCING-GUIDE.md`, project-mockup style), category tag, project name, "View Project →".
- Section CTA: secondary button **"See All Projects →"** → `/portfolio`.

## Section: AI Advantage
This section is unique to Daniekeys and has no Clonix equivalent — it's their strongest differentiator, keep it in full on the landing page (don't defer to a sub-page).
- Background: `--black`.
- Eyebrow: `// AI-Powered Agency`
- H2: **"Your Competitors Are Still Doing This Manually. You Don't Have To."** (real headline, strong as-is, use verbatim)
- Body: "Our founder is an AI engineer. That means we don't just talk about using AI — we actually build it into your brand systems. From AI chatbots that handle your DMs, to content pipelines that produce 30 days of material in 48 hours, to strategy tools that predict what your audience wants next — we give your brand AI superpowers."
- Bullet list (checkmark style, `--dk-blue-1` icons):
  - **AI Chatbots** — deployed on WhatsApp, website & Instagram
  - **AI Content Pipelines** — 30 days of content, 48-hour turnaround
  - **AI Brand Analytics** — real-time insights, not monthly PDFs
- CTA: primary button **"Explore AI Services →"** → `/services#ai`
- Optional supporting visual: an abstract AI/technology image or a simple UI mockup of a chatbot interface (per image sourcing guide) alongside the text — layout: text left ~55%, image right ~40%, stacked on mobile.

## Mobile
- Services teaser: cards stack 1-up, full-width.
- Featured Work teaser: cards stack 1-up, full-width, or a horizontal swipe row if preferred — either is acceptable, prioritize the 1-up stack for simplicity/consistency with the rest of the mobile layout.
- AI Advantage: text stacks above the supporting visual.

## Batch Checklist
- [ ] All 6 service cards present with correct real names/descriptions, NEW badges on AI Strategy and AI Chatbots only
- [ ] Services teaser is a card grid, not an accordion (accordion is reserved for `/services`)
- [ ] Featured Work shows the 4 real client names, no invented client names
- [ ] AI Advantage headline and all 3 bullet points match the real copy
- [ ] Every teaser section has a working CTA to its corresponding full page
- [ ] Dark/light background alternation is intentional and consistent with the rest of the page rhythm
