# 23 — PAGE: /pricing

Batch scope: the full Pricing page — the most content-dense sub-page, built on the Mode Toggle + Package/Retainer Card components.

## Page Header
- Eyebrow: `// Transparent Pricing`
- H1: **"Honest Prices. No Hidden Fees. No Surprises."** (real headline, use as-is)
- Supporting line: "We publish our prices because we respect your time. Most agencies make you jump on a call just to tell you it's expensive. We don't do that. Here's exactly what things cost — and what you get for every naira."
- Trust chips row: "✓ No hidden fees · ✓ Transparent deliverables · ✓ Flexible payment plans · ✓ Free first consultation"

## Mode Toggle
"Complete Packages" ↔ "Individual Services" — wait: the real site actually has **two separate top-level tab groups**, not one toggle — re-check source structure: the fetched page shows "Complete Packages / Individual Services" as one tab pair, AND separately "Monthly Retainers" as its own section below (not toggled, just presented sequentially after the packages). Build it this way, matching the real structure exactly rather than forcing everything into a single toggle:
1. First: a tab pair **"Complete Packages"** (default active) / **"Individual Services"** — "Individual Services" tab can link through to `/services` (which already lists each service's individual starting price) rather than duplicating that content here, since the real site's pricing page focuses on packages/retainers, not a third repetition of the per-service list.
2. Below that: the **Complete Packages** grid (3 cards).
3. Below that, as its own clearly-labeled section (not behind the same toggle): **Monthly Retainers** (3 cards).

## Section: Complete Packages (3 cards)
Package/Retainer Card component, price displayed as a **range** (not a fixed monthly figure):

1. **Starter Package**
   Description: "Best for getting your brand online fast."
   Price: **₦95,000 – ₦180,000** · One-time · "Final price depends on scope"
   Included: Brand touch-up (logo refinement) · 6 social media post designs · 1 motion graphics video (30s) · Basic page optimisation · Caption writing for posts · Light content strategy guide · Landing page consultation (advisory only)
   Best for: New businesses, side projects, personal brands starting out.
   Timeline: 1–2 weeks
   CTA: "Get Started →" → `/contact?package=starter`

2. **Business Package** ⭐ Most Popular
   Description: "Complete digital package that drives real results."
   Price: **₦250,000 – ₦650,000** · One-time · "Final price depends on scope"
   Included: Landing page website (custom design) · 10–15 social media post designs · 3–5 motion graphics videos · Starter brand kit (logo, colours, fonts) · Social media optimisation (all platforms) · 30-day content calendar · Hashtag & SEO research · 2 rounds of revisions · 30-day post-delivery support
   Best for: Established small businesses, funded startups, growing brands.
   Timeline: 3–4 weeks
   CTA: "Get Started →" → `/contact?package=business`

3. **Premium Package**
   Description: "Full-scale transformation for serious growth."
   Price: **₦700,000 – ₦3,000,000** · One-time · "Final price depends on scope"
   Included: Full website (5–7 pages, custom) · E-commerce integration (if needed) · Complete brand identity system · 20–30 social media posts · 6 motion graphics videos · Marketing strategy document · SEO setup (on-page + technical) · Website copywriting · UI/UX design system · AI chatbot setup (WhatsApp / Website) · 60-day post-delivery support · 3 rounds of revisions
   Best for: Established businesses, corporate rebrands, investor-facing startups.
   Timeline: 6–10 weeks
   CTA: "Get Started →" → `/contact?package=premium`

Below the 3 cards: "Need Something Bespoke?" callout — "Every business is different. If none of these fit your goals, we'll build you a custom scope from scratch. No obligation. No hard sell." CTA: "Get Custom Quote →" → `/contact?type=custom`. Fine print: "Final pricing depends on project complexity, number of revisions, and timeline. Ranges shown represent standard scope. We'll confirm your exact price before any work begins."

## Section: Monthly Retainers (3 cards)
Same card component, price displayed as a **fixed monthly figure**:
- H2: "Grow Consistently. Pay Monthly."
- Body: "For businesses that want reliable, ongoing results without managing it themselves."

1. **Content Starter** — **₦120,000/month** — 12 social media posts/month · Caption writing & hashtag strategy · 1 short motion graphics video/month · Monthly performance report. Best for: Businesses wanting consistent online presence. CTA: "Get Started →" → `/contact?retainer=content-starter`

2. **Growth Partner** ⭐ Most Popular — **₦250,000/month** — 20 social media posts/month · 3 short videos/reels/month · Paid ads management (Meta + Google) · SEO monitoring & updates · AI content pipeline setup · Weekly strategy call (30 min) · Monthly analytics & recommendations report. Best for: Growing businesses ready to scale their online presence. CTA: "Get Started →" → `/contact?retainer=growth-partner`

3. **Agency Partner** — **₦500,000/month** — Full content production (30 posts/month) · 5 videos/month · Multi-platform ad campaigns · AI chatbot maintenance · Full SEO management · Bi-weekly strategy calls · Dedicated account manager · Priority turnaround on all requests. Best for: Established businesses, funded startups, companies preparing for scale. CTA: "Get Started →" → `/contact?retainer=agency-partner`

Fine print: "All retainer packages are billed monthly, cancel anytime after 3 months. Minimum initial term: 3 months."

## Section: Payment Flexibility
Simple table/list, not a card grid:
- **50/50** — 50% upfront to begin, 50% on final delivery — standard for most projects
- **3-Stage** — For projects above ₦500,000: 40% start / 30% midpoint / 30% delivery
- **Retainer** — Monthly billing, due on the 1st of each month
- International note: "We accept payment via Wise (TransferWise), PayPal, and direct bank transfer in USD, GBP, EUR, and NGN."

## Section: Pricing FAQ (Numbered Accordion, `variant="faq"`)
Questions confirmed (draft answers, flag for confirmation per `00-OVERVIEW.md`):
1. "Why is there a price range instead of a fixed price?" — draft: "Every project's final cost depends on complexity, number of pages/deliverables, and revision rounds — the range reflects standard scope so you can budget accurately before we confirm an exact number."
2. "What happens if my project goes over scope?" — draft: "We'll flag it before doing any extra work and agree on a fair additional cost together — no surprise invoices."
3. "Are revisions included?" — draft: "Yes — every package includes 2–3 rounds of revisions depending on the tier, detailed above."
4. "Can I start with a small package and upgrade later?" — draft: "Absolutely — many clients start with Starter and move to Business or a retainer as they grow."
5. "Do you offer discounts for NGOs or nonprofits?" — draft: "Yes — reach out and we'll discuss a scope that fits your budget."
6. "What's the minimum project budget you'll take on?" — draft: "Our Starter Package begins at ₦95,000 — for anything smaller, let's talk and we'll see what's possible."

## CTA Band
- H3: "Not Sure Which Package Is Right? Let's Talk — It's Free."
- Body: "Book a 30-minute discovery call. We'll understand your goals, recommend the right solution, and give you an exact quote — no obligation, no pressure."
- CTA pair: primary "Book Free Call →" → `/contact`; secondary "WhatsApp Us →" → `https://wa.me/2349030909624?text=Hello!%20I%27d%20like%20to%20discuss%20a%20project.` (real link, pre-filled message included)

## Mobile
- Package/Retainer cards stack full-width, one per row.
- Payment flexibility table collapses to stacked label/value pairs.

## Batch Checklist
- [ ] Packages tab shows 3 cards with correct range pricing, deliverables, timelines
- [ ] Retainers section shows 3 cards with correct fixed monthly pricing and deliverables
- [ ] Business Package and Growth Partner both correctly marked ⭐ Most Popular
- [ ] Payment flexibility section present with correct 50/50, 3-Stage, and international payment info
- [ ] FAQ present with all 6 questions, draft answers flagged
- [ ] All prices in Naira, ranges preserved exactly as sourced (don't round or simplify)
