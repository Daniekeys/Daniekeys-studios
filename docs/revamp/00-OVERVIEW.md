# 00 — OVERVIEW (v2 — Daniekeys Studios Revamp)

## This Is a Revamp, Not a New Build
The site already exists in code. Every file in this set describes the **target state** to revamp the existing codebase toward — not a greenfield project. For every batch below: first locate the existing section/page/component in the repo, then update it in place to match this spec. Only create net-new files for things that genuinely don't exist yet (the new dedicated pages in particular). Don't duplicate an existing component just because this spec describes it again — extend/refactor what's there.

## What Changed From v1
The previous doc set cloned **Clonix** (a Framer agency template) 1:1. This version keeps everything that made Clonix's design and copywriting effective — the layout system, the component patterns, the punchy sales-copy rhythm — but:
1. **Rebrands everything** from "Clonix" to **Daniekeys Studios**, Daniel's real Nigeria-based AI-powered digital agency.
2. **Replaces all content** with Daniekeys Studios' real offerings, stats, process, testimonials, and pricing — pulled directly from daniekeysstudios.com — rewritten in Clonix's proven punchy/declarative copy style where it improves on the original phrasing, and kept verbatim where the original Daniekeys copy is already strong (a lot of it is — don't over-rewrite good copy).
3. **Splits the one giant scrolling page into a short landing page + five dedicated sub-pages**, so the homepage stays tight and each deep-content area (Services, Portfolio, Pricing, About, Contact) gets room to breathe on its own route.
4. **Replaces all mockup photography with freely-licensed stock images** sourced at build time — see `03-IMAGE-SOURCING-GUIDE.md`.
5. **Keeps the mockups strictly as a layout/shape/proportion reference.** The mockup's lime-yellow-on-black color scheme is NOT used anywhere. Every color decision comes from `01-DESIGN-SYSTEM.md`'s Daniekeys brand tokens (Black / White / Off White / Light Dark / DK_BLUE 1–3) — note that "DK_BLUE" is literally Daniekeys' own accent, so this isn't a substitution, it's the studio's actual brand color already correctly specified.
6. **Splits the documentation itself into small, single-purpose files** built around a batch sequence — see `90-BUILD-PLAN-BATCHES.md`. Work through one batch at a time, fully, with its own checklist, before starting the next. This is deliberate: a large single-pass build against one giant spec is where hallucination and drift creep in; a short, scoped batch with a narrow file to reference is much easier to execute precisely.

## Read Order
1. `00-OVERVIEW.md` (this file)
2. `01-DESIGN-SYSTEM.md` — colors, type, spacing (unchanged in spirit from v1, Daniekeys tokens confirmed)
3. `02-SITEMAP-AND-PAGE-PLAN.md` — what's on the landing page vs. what moved to its own route, and why
4. `03-IMAGE-SOURCING-GUIDE.md` — how to source and implement replacement photography
5. `04-COMPONENTS-SHARED.md` — the reusable component inventory (mostly carried over from v1, since Clonix's component patterns map cleanly onto Daniekeys' real content)
6. `05-ANIMATIONS-AND-INTERACTIONS.md` — motion spec (unchanged from v1 — this was never color- or content-dependent)
7. Then work through `90-BUILD-PLAN-BATCHES.md` in order, pulling in the numbered `10-…`, `20-…` section/page files as each batch calls for them.

## Brand Snapshot (for quick reference — full detail in later files)
- **Name**: Daniekeys Studios
- **Positioning**: Africa's AI-powered digital agency — brand identity, web/app development, motion graphics, AI chatbots & automation, digital marketing, AI strategy consulting, and training.
- **Tagline direction**: "Africa's Most Ambitious Brands Don't Just Look Good. They Grow." (real, use as-is or lightly adapted)
- **Proof points**: 50+ Projects Delivered, 5+ Years in Business, 3× Average Client Revenue Growth, 100% On-Time Delivery Rate, Rated 5.0 by 30+ clients on Google.
- **Real clients referenced in content**: Afriment, Candexa, My Lang Coach, Buymejollof.
- **Contact**: hello@daniekeysstudios.com · +234 903 090 9624 · Nigeria (serving Pan-Africa & globally) · Mon–Fri 9am–6pm WAT.
- **Socials**: Instagram, LinkedIn, YouTube, Facebook (@daniekeys_studios / daniekeys-studios).
- **Currency**: Nigerian Naira (₦) for all pricing — do not convert to USD anywhere.

## Open Items to Confirm With Daniel Before Shipping
Flagged individually in the relevant files too, collected here for visibility:
- **Founder credit / byline name** for the hero "Founded by…" line and the About page's founder quote. Real name not present in the fetched site content — likely Daniel Ayeni, but confirm before shipping a name publicly. (About page renders `[FOUNDER NAME — confirm]`.)
- **Founder quote wording** — the About page "Founder's Words" `<blockquote>` copy is a drafted paraphrase, not a real supplied quote. Confirm or replace with Daniel's actual words before launch.
- **Founder photo** — About "Founder's Words" currently uses a hot-linked Unsplash portrait placeholder. Needs the real founder photo, then self-hosted under `/public/images/` before launch. Do not ship the stock portrait as final.
- **Company history/timeline milestones** (year-by-year story) for the About page — the real site confirms "5+ years in business" but no published year-by-year narrative was found. A 4–5 entry timeline structure is specced; every entry currently reads `// [YEAR — confirm]`. Confirm actual years/milestones before launch.
- **Image localization** — every content photo in the build is a hot-linked Unsplash placeholder (per `03-IMAGE-SOURCING-GUIDE.md`, hot-linking is fine for the build pass only). Before launch, source final images and self-host all of them under `/public/images/`. Specifically flagged: the landing + About "Who We Are" image, the About founder portrait, and the `/services` Process-step images.
- **FAQ answer copy** on the Services and Pricing pages — the real site's FAQ questions were captured but their expanded answers were not visible in the fetched content (likely collapsed accordions). Draft answers are provided as a starting point; confirm/replace with Daniel's actual answers.
- **Testimonial volume** — only 3 real client quotes were available (Afriment, Candexa, a Lagos business owner). The testimonials section spec reuses these across both the featured slot and the secondary card row rather than inventing additional fake clients. Add more real quotes as they become available.
- **Pricing page H2 "Three Packages. One Honest Price Range Each."** (Batch 11) — drafted house-style copy, **approved by Daniel**. Logged here for visibility only; no action needed.
- **TestimonialsSection reduced-motion defect** (landing, Batch 7) — under `prefers-reduced-motion`, the featured-quote card's text area renders blank while the frame, "FEATURED REVIEW" label and pagination render fine. Same severity class as the ProcessStep / ProcessSection / ProjectCard reduced-motion bugs fixed earlier this cycle. **Flagged for the Batch 14 QA pass** — not fixed in Batch 12.
- **Contact form submission backend** (Batch 12) — `ContactPageContent` keeps the project's existing EmailJS integration (`@emailjs/browser`), but the `NEXT_PUBLIC_EMAILJS_SERVICE_ID` / `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` / `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` env vars are **not set** (only `GEMINI_API_KEY` is in `.env.local`). Until they are configured the form does not deliver anywhere: on submit it shows an honest "not connected yet — email or WhatsApp us" message (no fake success state). Set the EmailJS keys, or swap in an API route / form service, before launch.
- **Contact "Rated 5.0 on Google" reviews link** (Batch 12) — `24-PAGE-contact.md` asks for the trust line to link to the Google reviews page, but no reviews URL is published in the source content. Currently rendered as plain text (no link). Supply the Google Business Profile / reviews URL before launch.
- **Contact physical address** (Batch 12) — none rendered, per `24-PAGE-contact.md` ("physical address wasn't published in the source content — don't invent a street address"). Add a real address + optional map embed if/when Daniel wants one published.
