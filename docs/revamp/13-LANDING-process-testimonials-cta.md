# 13 — LANDING: Process + Testimonials + Pricing Teaser + Final CTA

Batch scope: the closing run of the landing page. This is the last landing batch — after this, the page should be complete and ready for a full top-to-bottom review before moving on to the sub-pages.

## Section: Our Process (compact)
- Background: `--off-white`.
- Eyebrow: `// How We Work`
- H2: **"From First Call to Final Delivery — Here's Exactly How We Work"** (real headline, use as-is)
- Body: "No jargon. No hard sell. Just a clear path from hello to launch."
- 5-step list (Process Step component, per `04-COMPONENTS-SHARED.md`), numbered rows with a connecting vertical rule:
  1. **Discovery Call (Free)** — "30 minutes to understand your business, your goals, and what success looks like for you. No jargon. No hard sell."
  2. **Strategy & Proposal** — "We map out a precise creative and technical strategy, and send you a transparent proposal with clear deliverables and timelines."
  3. **Create & Build** — "Our team gets to work. You get progress updates every 3 days — not radio silence."
  4. **Review & Refine** — "Two rounds of revisions are included. We don't stop until the work is right."
  5. **Launch & Support** — "We go live together. Then we stay close — monitoring, supporting, and optimising for 30 days post-launch."
- Landing version: keep all 5 steps but drop per-step imagery and per-step CTA buttons (the mockup reference gives each step a large photo + "Book a Call" button — that's appropriate for the fuller `/services` version, not needed 5 times on the landing page). Landing steps can be a simpler numbered text list with just the connecting rule, no photos, to keep this section compact.
- Section CTA: primary button **"Book a Free Discovery Call →"** → `/contact`.

## Section: Testimonials
- Background: `--black`.
- Eyebrow: `// Testimonials`
- H2: **"Don't Take Our Word for It. Take Theirs."** (kept from the layout reference — pairs naturally with real Daniekeys quotes)
- Rating line: **"★★★★★ Rated 5.0 by 30+ clients on Google"** with a text-link "Read Reviews ↗" (real, links to the Google reviews search as on the live site).
- Featured Testimonial (component per `04-COMPONENTS-SHARED.md`), cycling through the 3 real quotes:
  1. **Afriment** (verified client) — "The new brand system made us look sharper immediately. More importantly, customers understood what we offered faster."
  2. **Candexa** (verified client) — "Daniekeys Studios gave us structure, better visuals, and a launch plan that felt practical from day one."
  3. **Lagos Business Owner** (verified client) — "The ROI was visible within 30 days. Not just better design — actually more customers coming through the door."
- Secondary row: reuse these same 3 quotes as compact Testimonial Cards (Variant A, text/quote style — no video variant, see `04-COMPONENTS-SHARED.md`) beneath or beside the featured quote, so all 3 are visible without requiring the user to cycle through the featured slot. Do not invent additional client names/quotes to fill out the row.

## Section: Pricing (teaser only)
- Background: `--off-white`.
- Eyebrow: `// Investment`
- H2: "Transparent Pricing. No Hidden Fees. No Surprises." (adapted from the real Pricing page headline "Honest Prices. No Hidden Fees. No Surprises.")
- Body: "We publish our prices because we respect your time. See exactly what things cost — and what you get for every naira."
- **No toggle, no full feature lists here** — this is a teaser only. Show 3 simple name+starting-price blocks side by side (not full Package Cards):
  1. **Starter** — from ₦95,000
  2. **Business** — from ₦250,000 ⭐ Most Popular
  3. **Premium** — from ₦700,000
- Section CTA: primary button **"See Full Pricing →"** → `/pricing`.

## Section: Final CTA
- Background: `--black`, this is the last section before the footer's link columns (may be implemented as part of the Footer component itself — see `10-LANDING-shell-hero.md`'s note on not duplicating this with a separate footer CTA block).
- H2: **"Ready to Build Something That Actually Works?"** (real headline, use as-is)
- Body: "Let's talk about your brand, your goals, and how Daniekeys Studios can help you grow. First call is always free."
- CTA pair: primary button **"Book a Free Discovery Call →"** → `/contact`; secondary button **"WhatsApp Us Now →"** → `https://wa.me/2349030909624` (real link).
- Optional supporting visual: a confident portrait/team photo (per image sourcing guide) can sit alongside this, echoing the mockup's footer-CTA visual weight, but this is not required — text-only is acceptable if it keeps the section clean.
- Rotating badge (per `04-COMPONENTS-SHARED.md`): "★ RATED 5.0 ON GOOGLE ★", positioned near the supporting visual if one is used, or as a standalone element near the CTA.

## Mobile
- Process: numbered list stacks full-width, vertical rule can be simplified to a left border rule.
- Testimonials: featured quote stacks (quote → pagination → name/photo), secondary cards stack 1-up or swipeable row.
- Pricing teaser: 3 price blocks stack full-width.
- Final CTA: headline → body → CTA pair (full-width buttons) → optional visual below.

## Batch Checklist
- [ ] All 5 process steps present with correct real headings/descriptions
- [ ] Testimonials use only the 3 real quotes, correctly attributed (Afriment, Candexa, Lagos Business Owner)
- [ ] "Rated 5.0 by 30+ clients on Google" line present with working link
- [ ] Pricing teaser shows exactly 3 name+price blocks, no feature lists, no toggle
- [ ] Final CTA headline matches real copy, both CTA buttons route correctly (`/contact`, WhatsApp deep link)
- [ ] No duplicate "final CTA" block if the Footer component already includes one
- [ ] Full landing page reviewed top-to-bottom against `02-SITEMAP-AND-PAGE-PLAN.md`'s section list — nothing missing, nothing extra
