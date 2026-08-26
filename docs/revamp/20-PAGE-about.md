# 20 — PAGE: /about

Batch scope: the full About page. Build after all landing batches (10–13) are complete and reviewed.

## Page Header (compact hero, not full hero treatment)
- Eyebrow: `// About Daniekeys Studios`
- H1: **"Built Different. On Purpose."** (borrowed framing from the layout reference — fits well as an About-page headline)
- Supporting line: "Daniekeys Studios exists because average creative work is everywhere in this market — and we're not interested in average."

## Section: Who We Are (full version)
Fuller than the landing teaser — use the complete real copy:
- H2: "We Don't Just Make Things Look Good. We Make Your Business Grow."
- Body (full): "Daniekeys Studios is a full-service AI-powered digital agency based in Nigeria, built for businesses that are ready to compete — locally and globally. We bring together three things that most agencies separate: creative excellence, AI engineering, and growth strategy. The result? Brands that don't just look premium — they perform. Whether you're a startup finding your identity or an established business ready to scale, we become your creative and technology partner from day one."
- 4 pillars (same as landing, full descriptions — no further expansion available from source content, reuse verbatim): Creative Excellence, AI-Powered, Growth-Focused, Pan-African.
- Supporting image: office/team photo (per `03-IMAGE-SOURCING-GUIDE.md` — the real site uses an Unsplash "African professionals meeting in a creative agency office" style shot; source a fresh equivalent, don't reuse their exact asset URL).

## Section: Stats Row
Same 4 stats as the landing page (50+ Projects Delivered, 5+ Years in Business, 3× Average Client Revenue Growth, 100% On-Time Delivery Rate) — full-size treatment here since this is their dedicated page, can be larger/more prominent than the landing version.

## Section: Founder's Words
- Layout: portrait photo (left, ~40%) + pull-quote (right, ~55%), matching the layout reference's Founder's Words pattern (quote-mark glyph, name, title).
- **Needs content**: no real founder quote was available in the fetched site content. Suggested placeholder quote, built from real site language, to replace with Daniel's actual words before shipping:
  > "We started Daniekeys Studios because we were tired of seeing ambitious African brands settle for generic, cookie-cutter creative work. Every project we take on is a chance to prove that AI engineering, sharp design, and relentless execution can change the trajectory of a business."
- Byline: "**[FOUNDER NAME]**, Founder @ Daniekeys Studios" — confirm exact name before shipping (see `00-OVERVIEW.md`).
- Portrait: **use the founder's real photo if available in the existing repo/brand assets; do not ship a stock placeholder as final** — flag clearly in your build summary if a real photo isn't available and a temporary placeholder was used instead.

## Section: Our History (timeline)
**Needs verification** — no published year-by-year company story was found; only "5+ Years in Business" is confirmed. Build the timeline structure (zigzag alternating layout per the mockup reference, 4 entries, "// YEAR" eyebrow + title + description) but populate with placeholder milestones clearly marked for Daniel to confirm/replace:
1. **[YEAR — confirm]** — "The Beginning" — placeholder: "Daniekeys Studios started as a one-person creative operation, taking on brand identity and design projects for early clients."
2. **[YEAR — confirm]** — "Going Full-Service" — placeholder: "Expanded from design-only into web development and motion graphics, becoming a full-service creative partner."
3. **[YEAR — confirm]** — "The AI Shift" — placeholder: "Began integrating AI engineering into client work — chatbots, automation, and AI-powered content pipelines — well ahead of the market."
4. **[YEAR — confirm, likely current/most recent]** — "50+ Projects, Pan-African Reach" — placeholder: "Now serving clients across Nigeria and the wider African market, with a 100% on-time delivery track record and a 5.0 Google rating."
Adjust the entry count/years once real milestones are confirmed — 4 is a structural suggestion matching the layout reference, not a fixed requirement.

## Section: Recognition & Trust (Numbered Accordion, `variant="trust-table"`)
Adapted from the mockup's awards-table pattern — since no formal industry awards were found in the source content, replace "award name + year" rows with real trust/proof-point rows in the same 3-column visual format (No / Title+description / Metric):
- H2: "Why Businesses Trust Daniekeys Studios"
- Supporting line: "We don't have a trophy case yet — we have something better: a track record."
1. **5.0 Rating on Google** — "Rated by 30+ verified clients — see for yourself, we don't hide our reviews." — *30+ reviews*
2. **100% On-Time Delivery** — "Every project, every deadline, no exceptions." — *100%*
3. **50+ Projects Delivered** — "From startups finding their identity to established businesses scaling across Africa." — *50+*
4. **3× Average Revenue Growth** — "Our clients don't just get better design — they get better business results." — *3×*
Expanded row (per accordion pattern) can show a supporting image (client work sample) where available.

## CTA Band (page footer, before global Footer)
- H3: "Ready to work with us?"
- Primary button **"Book a Free Discovery Call →"** → `/contact`

## Mobile
- Founder's Words: portrait stacks above quote.
- Timeline: single left-aligned column, no zigzag.
- Recognition accordion: rows stack number/title/metric vertically instead of 3-column.

## Batch Checklist
- [ ] Full Who We Are copy present (not the shortened landing version)
- [ ] All 4 stats present, correct values
- [ ] Founder quote and byline present, clearly flagged as placeholder pending real name/quote confirmation
- [ ] History timeline structurally complete, years/milestones flagged as needing confirmation
- [ ] Recognition & Trust accordion uses real proof points, not invented awards
- [ ] Page CTA routes to `/contact`
