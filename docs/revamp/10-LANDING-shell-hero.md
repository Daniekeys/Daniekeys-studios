# 10 — LANDING: SHELL (Header + Footer) + Hero + Trust Bar

Batch scope: the global Header and Footer (used on every route) plus the landing page's Hero section and client-logo trust bar. This is the first build batch — get the shell right once, everything else sits inside it.

## Header
- Fixed, transparent over the hero → solid `--black` (or `backdrop-blur` + 80% `--black`) on scroll.
- Left: logo lockup — wordmark **"Daniekeys Studios"** (or the shortened "Daniekeys." if space is tight on smaller viewports), set in `--font-heading`. Optional small spark/asterisk accent glyph in `--dk-blue-1`, positioned as a subtle mark near the wordmark (echoing the layout reference's logo-accent trick) — treat this as a nice-to-have design flourish, not a hard requirement, since Daniekeys' real logo assets weren't available for this analysis. If Daniel's real logo file exists in the repo already, use it instead of inventing a new mark.
- Right: single hamburger icon, opens the Full-Screen Nav Overlay (see `04-COMPONENTS-SHARED.md`) with links to Home / About / Services / Portfolio / Pricing / Contact.
- Height: ~80px desktop, ~64px mobile.

## Footer
Two-part, `--black` background, layout per the mockup reference (CTA block + 4-column link block):

**CTA block**: this is the same content as the landing page's own Final CTA section (see `13-LANDING-process-testimonials-cta.md`) — do not duplicate it in both the footer and mid-page; build it once as part of the Footer component and simply don't repeat a separate "final CTA" section elsewhere if your implementation places it in the footer. (If your build treats the mid-page CTA and footer as visually distinct — mid-page CTA band + separate slimmer footer sign-off — that's also fine; just avoid two nearly-identical large CTA blocks stacked back to back.)

**Link columns** (4, collapsing to 1 on mobile):
- **Services**: AI Digital Strategy, Brand Identity Design, Website Development, Motion Graphics & Video, AI Chatbot & Automation, Digital Marketing — each linking to `/services`.
- **Company**: About Us (`/about`), Portfolio (`/portfolio`), Services (`/services`), Pricing (`/pricing`), Process (`/services#process`), Contact (`/contact`), Careers (`/careers` — stub if no page exists yet).
- **Contact**: `hello@daniekeysstudios.com`, `+234 903 090 9624`, "Nigeria (serving Pan-Africa & globally)", "Mon–Fri 9am–6pm WAT".
- **Follow**: Instagram, LinkedIn, YouTube, Facebook (link to Daniekeys' real profiles: instagram.com/daniekeys_studios, linkedin.com/company/daniekeys-studios, youtube.com/@Danieskeys, facebook profile as listed on the live site).
- Legal row: Privacy Policy (`/legal/privacy-policy`), Terms of Service (`/legal/terms-of-service`).
- Copyright: "© 2026 Daniekeys Studios. All rights reserved."
- Scroll-to-top button, bottom-left, aligned with logo.

## Hero Section
- Eyebrow: `// Meet Daniekeys Studios`
- H1 (two lines, `--text-hero`): **"Africa's Most Ambitious Brands Don't Just Look Good. They Grow."** (real Daniekeys headline — use as-is, it's strong)
- Body: "Daniekeys Studios combines AI engineering, world-class creative design, and strategic marketing to help businesses across Africa build brands that convert, scale, and dominate their market."
- CTA pair: primary button **"Start a Project →"** (links `/contact`), secondary text-link **"View Our Work ↗"** (links `/portfolio`)
- Proof-point chips row (3, matches the mockup's small-badge treatment): **"3× Brand Lift"**, **"+64% Lead Flow"**, **"24/7 Automation"**
- Founder credit line (optional avatar treatment): "Founded by [FOUNDER NAME — confirm with Daniel before shipping, see `00-OVERVIEW.md`]"
- Layout: follow the mockup reference's hero proportions — left ~60% text zone, right ~35% zone for a supporting visual (use a single strong hero photo here rather than the mockup's auto-cycling "Featured Work" mini-card, since we don't have a live multi-device product to showcase in the same way — a static, well-chosen photo of a creative workspace/team is a better fit for this content, see `03-IMAGE-SOURCING-GUIDE.md`).
- Below the text zone: **client trust bar** — "Trusted by Ambitious Brands Across Nigeria and Africa" + logo row: **Afriment, Candexa, My Lang Coach, Buymejollof** (real client logos/wordmarks). Static row, not a marquee (see `05-ANIMATIONS-AND-INTERACTIONS.md` — only 4 logos, marquee would loop awkwardly).
- No large bordered hero video/banner section below the trust bar on this build — the mockup's big yellow-bordered video banner is cut for the landing page to keep it short; if Daniekeys has a real brand/reel video, it can live on `/about` or `/portfolio` instead, not required for this batch.

## Mobile
- Header: logo + hamburger, ~64px height.
- Hero: eyebrow → H1 → body → CTA pair (stacked, full-width buttons) → proof-point chips (wrap to 2+1 or scroll row) → founder credit → hero photo (below text, full-width) → trust bar (logos wrap or scroll horizontally).
- Footer: CTA block stacks (text above any visual), link columns stack to single column in the order Services → Company → Contact → Follow → Legal → Copyright.

## Batch Checklist
- [ ] Header renders on every route, hamburger opens overlay with correct 6 links
- [ ] Footer renders on every route with all 4 link columns populated with real Daniekeys links/contact info
- [ ] Hero headline is the real Daniekeys line, not a rephrase
- [ ] CTA buttons route to `/contact` and `/portfolio` respectively
- [ ] Client logo row shows the 4 real client names/marks, static (no marquee)
- [ ] No lime-yellow or any mockup-sourced color present anywhere
- [ ] Founder name flagged as TBD if not yet confirmed
