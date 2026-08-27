# 11 — LANDING: Who We Are (compact) + Numbers

Batch scope: the section directly below the hero's trust bar — a condensed positioning statement, 4 pillars, and the stats row. Full version of this content lives on `/about` (see `20-PAGE-about.md`); this is the shortened landing teaser.

## Section: Who We Are
- Background: `--off-white` (light section — first light break after the dark hero, matches the mockup's dark→light rhythm).
- Eyebrow: `// Who We Are`
- H2: **"We Don't Just Make Things Look Good. We Make Your Business Grow."** (real Daniekeys headline, use as-is)
- Body (trimmed from the real site copy): "We bring together three things most agencies separate: creative excellence, AI engineering, and growth strategy. Whether you're a startup finding your identity or an established business ready to scale, we become your creative and technology partner from day one."
- CTA: secondary button **"Learn More About Us →"** → `/about`

### 4 Pillars (Numbered Accordion, `variant="pillars"`)
Use the shared accordion component per `04-COMPONENTS-SHARED.md`, first item open by default:
1. **Creative Excellence** — "World-class design rooted in strategy and storytelling."
2. **AI-Powered** — "We use AI to deliver faster, smarter, and more scalable results."
3. **Growth-Focused** — "Every deliverable is tied to a business outcome."
4. **Pan-African** — "Built in Africa, built for Africa — and the world."

(These are short one-liners — the accordion here is simpler than the mockup's side-image variant; no forced image per row, just numeral + heading + one-line description, expand reveals nothing additional beyond a touch more breathing room/emphasis. If a static 4-up card grid reads better than an accordion for content this short, that's an acceptable implementation choice — use judgment, but keep the numbered-accordion visual language (numerals, hairline dividers) for consistency with the rest of the site even if you simplify the interaction to "always expanded.")

## Section: Our Numbers
Can sit directly below Who We Are on the same `--off-white` background, or transition to `--black` to match the mockup's alternating rhythm — recommend keeping this on `--off-white` with the Who We Are section since the two are thematically one unit (positioning + proof), saving the next dark break for the Services teaser.

- Eyebrow: `// The Numbers`
- H2 (optional, can be a smaller label if the two sections are visually merged): "Real Results, Not Just Promises."
- 4 stat counters (Stat Counter component, per `04-COMPONENTS-SHARED.md`), horizontal row desktop / 2×2 grid mobile:
  1. **50+** — "Projects Delivered"
  2. **5+** — "Years in Business"
  3. **3×** — "Average Client Revenue Growth"
  4. **100%** — "On-Time Delivery Rate"

## Mobile
- Who We Are: eyebrow → H2 → body → CTA (full-width) → pillars (stacked, full-width rows).
- Numbers: 2×2 stat grid, each stat centered, generous vertical spacing between rows.

## Batch Checklist
- [ ] H2 matches the real Daniekeys copy exactly
- [ ] All 4 pillars present with correct one-liners
- [ ] All 4 stats present with correct real values (50+, 5+, 3×, 100%)
- [ ] Stat counters animate 0→target once on scroll-in, don't replay
- [ ] Section sits on `--off-white`, no leftover dark-section styling from the shared component defaults
