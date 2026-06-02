# GLOBAL-SPEC.md
## Daniekeys Studios — Website Revamp Master Specification
### Shared Components, Global Rules, Implementation Order & Claude Prompt

---

## 🧭 HOW TO USE THESE FILES

This repository contains 5 design specification files for the complete Daniekeys Studios website revamp. Each file is a complete, standalone brief for one page. Implement one page at a time, in the order below.

```
specs/
├── GLOBAL-SPEC.md          ← This file. Read first. Always.
├── homepage-spec.md        ← Implement first
├── services-spec.md        ← Implement second
├── portfolio-spec.md       ← Implement third
├── pricing-spec.md         ← Implement fourth
└── contact-spec.md         ← Implement fifth
```

---

## 🤖 MASTER CLAUDE CODE PROMPT

> Copy this prompt when starting each page implementation session with Claude Code:

---

### PROMPT TO USE WITH CLAUDE CODE:

```
You are implementing a website revamp for Daniekeys Studios — a Next.js project using Tailwind CSS.

Before writing any code:
1. Read the file `specs/GLOBAL-SPEC.md` fully
2. Read the spec file for the page you're implementing (e.g. `specs/homepage-spec.md`)
3. Check what existing components can be reused from the current codebase
4. Do not deviate from the spec unless there is a technical blocker — if so, note it as a comment

Implementation rules:
- Follow the exact copy (text) specified — do not paraphrase or simplify
- Follow the exact color tokens from tailwind.config.js
- Use Neue Montreal font (already configured)
- All animations use the existing keyframes: fadeUp, fadeIn, slowZoom
- Images: use Unsplash URLs for development, but note which images need to be downloaded and self-hosted for production
- Do NOT use AI-generated images
- Do NOT use stock photo faces/people from Unsplash in testimonial sections — use initials-based avatars instead
- Mobile-first: build for mobile first, then add desktop breakpoints
- Accessibility: all interactive elements need aria-labels, all images need alt text
- SEO: implement the exact meta tags, schema JSON-LD, and H-tag structure specified in each spec file

Start with: [NAME THE PAGE AND SECTION]
```

---

## 🎨 GLOBAL DESIGN TOKENS

### Colors (from tailwind.config.js — do not change)
```javascript
primary:              "#111111"   // Dark backgrounds, main text on light
secondary:            "#818181"   // Subtext, labels, captions
primary-white:        "#F9F9F9"   // Section backgrounds (light)
off-white:            "#F0F0F0"   // Cards, inputs, dividers
accent-blue:          "#2B6BFF"   // CTAs, highlights, badges, links
accent-blue-light:    "#5F8EFB"   // Hover states
accent-blue-lighter:  "#9DBAFF"   // Subtle accents, badge text
white:                "#FFFFFF"
black:                "#000000"

// Supporting (not in config but used in specs):
dark-card:            "#1A1A1A"   // Card bg on dark sections
darker:               "#0A0A0A"   // Deeper dark sections
border-dark:          "#222222"   // Borders on dark sections
border-light:         "#E5E5E5"   // Borders on light sections
```

### Typography
```
Font family:    "Neue Montreal", system-ui, sans-serif
Hero title:     80px / 48px mobile — weight 800
Section title:  48px / 32px mobile — weight 700
Card title:     22px — weight 600
Body:           16px — weight 400 — line-height 1.7
Small/label:    13px — weight 500
Caption:        12px — weight 400
CTA button:     15px — weight 600
```

### Spacing System
```
Section padding vertical:    py-24 (desktop) / py-16 (mobile)
Section padding horizontal:  px-6 (mobile) / px-8 (tablet) / contained in max-w-[1280px] mx-auto (desktop)
Card padding:                p-8 (large) / p-6 (medium)
Grid gap:                    gap-8 (sections) / gap-5 (cards) / gap-4 (tight)
Border radius:               rounded-2xl (cards) / rounded-lg (buttons) / rounded-full (pills/badges)
```

### Animation Keyframes (already in tailwind.config.js)
```css
fadeUp:    Y: 30px → 0, opacity: 0 → 1, duration: 0.6s ease-out
fadeIn:    opacity: 0 → 1, duration: 0.8s ease-out
slowZoom:  scale: 1 → 1.05, duration: 0.3s ease-out
```

---

## 🧩 SHARED COMPONENTS

### NAV COMPONENT
File: `components/Nav.tsx` (or equivalent)

**Specs:**
- Sticky, `bg-primary/95 backdrop-blur-md`  
- Logo: left-aligned, light version of logo  
- Nav links: `text-primary-white text-sm tracking-widest uppercase font-normal`  
- Active link: `text-accent-blue border-b border-accent-blue pb-0.5`  
- CTA button: `bg-accent-blue text-white rounded-lg px-6 py-2.5 text-sm font-semibold hover:bg-accent-blue-light transition-colors`  
- Mobile: hamburger → full-screen overlay  
- Thin top bar: 3px gradient strip `from-accent-blue via-accent-blue-light to-accent-blue`, animated  

**Nav links (FINAL — consistent across ALL pages):**
```
Services | Portfolio | Pricing | About | Contact
```
> ⚠️ Remove "Process" from nav — it's an anchor that breaks on sub-pages. Process is a section within Services page.

---

### FOOTER COMPONENT  
File: `components/Footer.tsx`

**Specs:**
- Background: `#0A0A0A`  
- 4-column layout: Brand | Services | Company | Contact  
- Logo: light version  
- Tagline: "Africa's AI-Powered Digital Agency"  
- Email: **`hello@daniekeysstudios.com`** — ⚠️ NEVER use starlordflash2@gmail.com  
- Phone: `+234 903 090 9624`  
- Location: "Nigeria — Serving Pan-Africa & Globally" (consistent, no city-specific)  
- Social links: Instagram, LinkedIn, YouTube, Facebook  
- Bottom bar: Copyright | Privacy Policy `/privacy` | Terms of Service `/terms`  

**Footer services column:**
```
AI Digital Strategy
Brand Identity Design
Website Development
Motion Graphics & Video
AI Chatbot & Automation
Digital Marketing
```

**Footer company column:**
```
About Us        → /#about
Portfolio       → /portfolio
Services        → /services
Pricing         → /pricing
Contact         → /contact
Careers         → /careers (placeholder, or omit)
```

---

### CTA BANNER COMPONENT
Reusable across all pages:
```tsx
<CTABanner
  headline="Ready to Build Something That Actually Works?"
  subheadline="First call is always free. No pitch, no pressure."
  primaryCTA={{ label: "Book Free Discovery Call →", href: "/contact" }}
  secondaryCTA={{ label: "WhatsApp Us →", href: "https://wa.me/2349030909624" }}
/>
```
- Background: `#2B6BFF`  
- Headline: white, 48px, weight 800  
- Body: white 80% opacity  
- Buttons: white/transparent styles  

---

### BADGE / PILL COMPONENT
Used for category tags, service labels, new feature indicators:
```tsx
<Badge variant="blue">AI-Powered</Badge>
<Badge variant="outline">Branding</Badge>
<Badge variant="new">NEW</Badge>
```
Variants:
- `blue`: bg `rgba(43,107,255,0.1)`, border `#2B6BFF`, text `#9DBAFF`  
- `outline`: bg transparent, border `#333`, text `#818181`  
- `new`: bg `#2B6BFF`, text white, font-weight 700  
- `dark`: bg `#1A1A1A`, border `#333`, text `#F9F9F9`  

---

### SERVICE CARD COMPONENT
```tsx
<ServiceCard
  icon={<BrainIcon />}
  title="AI Digital Strategy"
  description="..."
  tags={["AI Audit", "Roadmap", "Implementation"]}
  price="From ₦350,000"
  href="/services#ai-strategy"
  isNew={true}
/>
```
Styles defined in services-spec.md.

---

## 🌐 GLOBAL SEO RULES

### Rules that apply to EVERY page:

1. **Title format:** `[Page Name] — Daniekeys Studios | [2–3 keyword descriptors] Nigeria`
2. **Meta description:** 145–160 chars, always include "Nigeria" or "Africa", always end with a benefit
3. **H1:** One per page, matches primary keyword intent  
4. **H2–H3:** Used for sections and sub-sections (no skipping levels)  
5. **Image alt text:** Descriptive, keyword-adjacent, no "image of" prefix  
6. **Internal links:** Every page links to at least /services, /portfolio, /contact  
7. **Canonical:** `https://www.daniekeysstudios.com/[page]`  
8. **robots meta:** `index, follow` on all main pages  
9. **Theme colour:** `#111111` (matches brand)  

### Global schema (add to every page `<head>`):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Daniekeys Studios",
  "url": "https://www.daniekeysstudios.com",
  "logo": "https://www.daniekeysstudios.com/images/logos/daniekeys-logo.png",
  "sameAs": [
    "https://www.instagram.com/daniekeys_studios/",
    "https://www.linkedin.com/company/daniekeys-studios/",
    "https://www.youtube.com/@Danieskeys",
    "https://www.facebook.com/profile.php?id=61583310572575"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+2349030909624",
    "contactType": "customer service"
  }
}
```

---

## 🖼️ GLOBAL IMAGE GUIDE

### Principles:
1. **No AI-generated images** — anywhere on the site
2. **No stock photo faces** in testimonials — use initials avatars
3. **All Unsplash images** — download and self-host, do not hotlink
4. **Format:** WebP preferred, JPEG fallback  
5. **Compression:** Run through Squoosh or Sharp before deployment
6. **Alt text:** Always descriptive  

### Master Image List — Free Resources to Download

#### Unsplash URLs (free commercial use — unsplash.com/license):

| Image | Usage | Unsplash Photo ID | Search Alternative |
|-------|-------|-------------------|--------------------|
| Agency team dark | Homepage hero | `photo-1522071820081-009f0129c71c` | `"creative agency team dark"` |
| African team meeting | About section | `photo-1600880292203-757bb62b4baf` | `"African professionals meeting"` |
| Designer at desk | Process section | `photo-1498050108023-c5249f4df085` | `"designer laptop workspace"` |
| Blue tech abstract | AI section bg | `photo-1451187580459-43490279c0fa` | `"blue technology abstract"` |
| Brand design flatlay | Services page | `photo-1558655146-364adaf1fcc9` | `"brand identity design desk"` |
| Developer coding | Web dev section | `photo-1461749280684-dccba630e2f6` | `"web developer coding dark"` |
| Workshop group | Training section | `photo-1524178232363-1fb2b075b655` | `"workshop training group"` |
| Design mockup | Portfolio hero | `photo-1561070791-2526d30994b5` | `"graphic design mockup workspace"` |
| Video studio | Motion section | `photo-1574717024653-61fd2cf4d44d` | `"video production studio"` |

#### Where to Search for More:
- **Unsplash:** `https://unsplash.com` — search specific terms above
- **Pexels:** `https://www.pexels.com` — free commercial use  
- **Freepik (free tier):** `https://www.freepik.com` — good for device mockups  
- **Storyset:** `https://storyset.com` — free illustrations (good for empty states)
- **Undraw:** `https://undraw.co` — SVG illustrations, customizable colour

#### For device mockups (website/app frames):
- `https://www.mockupworld.co` — free PSD/PNG mockups  
- CSS-only device frames (preferred for performance) — many codepen examples  

---

## 🚨 GLOBAL CRITICAL FIXES — Apply to ALL Pages

These must be fixed across the entire site, not just page by page:

| Issue | Fix | Priority |
|-------|-----|----------|
| Gmail email everywhere | Replace ALL instances of `starlordflash2@gmail.com` with `hello@daniekeysstudios.com` | CRITICAL |
| Privacy Policy link `#` | Create `/privacy` page (basic GDPR/NDPR compliant content) | CRITICAL |
| Terms of Service link `#` | Create `/terms` page | CRITICAL |
| "Process" nav link | Anchor only works on homepage — fix to work on all pages or link to `/services#process` | HIGH |
| Footer location inconsistency | Pricing page says "Lagos", homepage says "Ilorin" — standardise to "Nigeria" everywhere | HIGH |
| Stock photo testimonials | Remove Unsplash people photos — use initial avatars | HIGH |
| Unverified stats | Remove "10 Years Experience", "25+ Team Members", "2M+ Video Views" — replace with verifiable metrics | HIGH |
| No AI positioning | Add AI to nav badge, homepage hero, meta title | HIGH |
| Missing retainer pricing | Add monthly retainer packages to /pricing | MEDIUM |

---

## 📋 IMPLEMENTATION ORDER & CHECKLIST

### Phase 1: Global Fixes (Do BEFORE any page work)
- [ ] Create `hello@daniekeysstudios.com` email and update ALL instances
- [ ] Create `/privacy` page (can be simple text page)
- [ ] Create `/terms` page (can be simple text page)
- [ ] Update Nav component — remove "Process" link, add AI badge to CTA
- [ ] Update Footer component — fix email, fix location, update tagline
- [ ] Add global Organization schema to `_document.tsx` or layout

### Phase 2: Homepage (`/`)
- [ ] Implement per `homepage-spec.md`
- [ ] All 13 sections in order
- [ ] Add FAQ schema
- [ ] Test mobile layout
- [ ] Lighthouse audit target: 90+

### Phase 3: Services (`/services`)
- [ ] Implement per `services-spec.md`
- [ ] Add 2 new AI service cards
- [ ] Add FAQ with schema
- [ ] Add anchor `#process` section
- [ ] Test filter/sticky nav

### Phase 4: Portfolio (`/portfolio`)
- [ ] Implement per `portfolio-spec.md`
- [ ] Update ALL project names to real/credible versions
- [ ] Add masonry grid with filter
- [ ] Remove fabricated stats

### Phase 5: Pricing (`/pricing`)
- [ ] Implement per `pricing-spec.md`
- [ ] Add retainer packages (new section)
- [ ] Add individual services table
- [ ] Fix Lagos/Ilorin inconsistency
- [ ] Add FAQ + schema

### Phase 6: Contact (`/contact`)
- [ ] Implement per `contact-spec.md`
- [ ] Remove video background
- [ ] Add WhatsApp CTA
- [ ] Add success state
- [ ] Add trust signals

### Phase 7: New Pages (Post-revamp)
- [ ] `/about` — Dedicated about page (currently only anchor section on homepage)
- [ ] `/privacy` — Privacy Policy  
- [ ] `/terms` — Terms of Service  
- [ ] `/blog` — Insights/thought leadership (Phase 2 of overall roadmap)

---

## 🎯 NEW TAGLINE & POSITIONING COPY

### Replace "Where Creativity Meets Technology" everywhere with:

**Primary tagline:** `Africa's AI-Powered Digital Agency`  
**Secondary tagline:** `We Build Brands That Grow.`  
**Meta description snippet:** `AI engineering + creative excellence + growth strategy — all in one studio.`

### New headline copy hierarchy:
```
H: Africa's Most Ambitious Brands Don't Just Look Good. They Grow.
SH: Daniekeys Studios combines AI engineering, world-class creative design, 
    and strategic marketing to help businesses across Africa build brands 
    that convert, scale, and dominate their market.
```

### Key brand messages (use throughout site):
1. "We don't just make things look good. We make your business grow."
2. "AI engineering + creative excellence — all in one studio."
3. "Your competitors are still doing this manually. You don't have to."
4. "Strategy before aesthetics. Always."
5. "Built in Africa. Built for Africa — and the world."
6. "Real projects. Real clients. Measurable results."
