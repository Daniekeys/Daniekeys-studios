# 01 — DESIGN SYSTEM

## Critical Rule on Color
The mockups (desktop/mobile screenshots + screen recording) are a **layout, shape, spacing, and proportion reference only**. Do not sample, match, or otherwise reuse any color from the mockups — their lime-yellow-on-near-black scheme belongs to the original Clonix template and must not appear anywhere in this build. Every color decision below comes from Daniekeys Studios' own brand tokens. When reading the mockups in later batches, mentally desaturate them: look at where borders sit, how much padding a section has, how a card is shaped, where an accent mark is positioned — never what hue is used there.

## Color Tokens
```
--black:      #111111   /* primary — dark section backgrounds, body text on light bg, primary button icon chips */
--white:      #F9F9F9   /* primary — heading/body text on dark bg */
--light-dark: #818181   /* secondary — muted/meta text, captions, dimmed accordion rows */
--off-white:  #F0F0F0   /* secondary — light section backgrounds */
--dk-blue-1:  #2B6BFF   /* accent — strongest: primary CTAs, active states, key numerals, borders */
--dk-blue-2:  #5F8EFB   /* accent — mid: secondary highlights, hover states, gradient midtones */
--dk-blue-3:  #9DBAFF   /* accent — softest: subtle badges, light tints, soft borders */
```
Note: `DK_BLUE` is Daniekeys Studios' own accent family — this isn't a substitution for someone else's brand color, it's the studio's identity.

### Usage rules
| Element | Color |
|---|---|
| Dark section background | `--black` |
| Light section background | `--off-white` |
| Heading on dark bg | `--white` |
| Heading on light bg | `--black` |
| Body/meta text | `--light-dark` on either background |
| Primary CTA button fill | `--dk-blue-1` |
| Primary CTA button text | `--white` (not black — insufficient contrast on a mid-tone blue) |
| Primary CTA icon chip | `--black` fill, `--white` arrow (unchanged pattern, already correct) |
| Secondary/dark button (Book a Call, Learn More, See Pricing) | `--black` fill, `--white` text/icon |
| Section eyebrow "//" mark | `--dk-blue-1` |
| Logo accent glyph | `--dk-blue-1` |
| Active/expanded accordion numeral | `--dk-blue-1` |
| Stat counter suffix (+, %, ×) | `--dk-blue-1`; numeral itself in `--white`/`--black` per bg |
| Checkmark icons (service deliverable lists, pricing feature lists) | `--dk-blue-1` |
| "Most Popular"/"Recommended" ribbon | `--dk-blue-1` bg, `--white` text |
| Star ratings | `--dk-blue-1` |
| Decorative watermark glyph | `--light-dark` at 6–10% opacity — neutral, not tinted blue |
| Rotating footer badge | `--dk-blue-1` bg, `--black` text |
| Links / underline accents | `--dk-blue-1` |
| Form focus rings / checkbox accents | `--dk-blue-1` |

### Accent ratio
Keep `--dk-blue-1` usage under ~10% of any given viewport — it marks the single most important action or number in a section, never a large fill or body copy.

## Typography
Needs verification against Daniekeys' actual site fonts (not extractable from static assets in this analysis) — recommended production pairing, visually consistent with the confident/modern agency tone of both the mockup reference and the real Daniekeys site:
```
--font-heading: "Plus Jakarta Sans", sans-serif;  /* 600, 700, 800 */
--font-body:    "Inter", sans-serif;               /* 400, 500, 600 */
```

### Type scale (desktop)
| Token | Size | Weight | Line-height | Usage |
|---|---|---|---|---|
| `--text-hero` | 56–64px | 800 | 1.05 | Hero H1 only |
| `--text-h2` | 40–48px | 700 | 1.1 | Section headlines |
| `--text-h3` | 24–28px | 700 | 1.2 | Accordion/card titles |
| `--text-h4` | 18–20px | 600 | 1.3 | Sub-headings |
| `--text-body-lg` | 17–18px | 400 | 1.6 | Section intros |
| `--text-body` | 15–16px | 400 | 1.6 | Standard copy |
| `--text-small` | 13–14px | 500 | 1.4 | Eyebrows, labels, nav |
| `--text-micro` | 11–12px | 600 | 1.3 | Uppercase tags/badges |

Mobile: hero ~34–38px, H2 ~28–32px, body sizes hold roughly steady.

## Spacing Scale
```
--space-1: 4px   --space-6: 32px
--space-2: 8px   --space-7: 48px
--space-3: 12px  --space-8: 64px
--space-4: 16px  --space-9: 96px
--space-5: 24px  --space-10: 128px
```
- Container max-width: **1280px**, gutters `--space-6` desktop / `--space-4` mobile.
- Major section vertical padding: `--space-10` desktop / `--space-7`–`--space-8` mobile.
- Compact sections (logo strips, trust bars): `--space-9`.

## Border Radius
```
--radius-sm: 6px     /* tags, chips */
--radius-md: 10px    /* buttons, inputs */
--radius-lg: 16px    /* cards, images */
--radius-xl: 24px    /* feature images, pricing/package cards */
--radius-full: 999px /* pills, avatars, toggle */
```

## Shadows / Elevation
Flat-first design — favor hairline borders over drop shadows:
```
--border-hairline: 1px solid rgba(255,255,255,0.08)     /* on dark bg */
--border-hairline-light: 1px solid rgba(17,17,17,0.08)  /* on light bg */
--glow-accent: radial-gradient(circle, var(--dk-blue-1) 0%, transparent 70%), blur(60px), opacity 0.35
```
Exception: cards that sit elevated on an off-white section (featured testimonial, pricing/package cards) get a soft lift shadow: `0 20px 40px rgba(0,0,0,0.08)`.

## Breakpoints
```
--bp-mobile:  0–767px
--bp-tablet:  768–1023px
--bp-desktop: 1024–1439px
--bp-wide:    1440px+
```
Mobile-first stacking for every multi-column layout (see individual section files for per-section mobile behavior). Header is logo + hamburger at every breakpoint — this is a deliberate brand choice carried over from the mockup reference, not a mobile-only fallback.
