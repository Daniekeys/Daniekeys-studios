# portfolio-spec.md
## Page: `/portfolio` — Portfolio Page
### Daniekeys Studios Website Revamp

---

## 🎯 PAGE OBJECTIVE
Prove credibility through real, well-presented work. This page must answer the unspoken question every visitor has: "Have they done something like my project before, and did it actually work?" Every project card must tell a mini story — not just show a pretty image.

---

## 🎨 BRAND TOKENS
Refer to homepage-spec.md for full token list.
Key: primary `#111111`, accent-blue `#2B6BFF`, secondary `#818181`, primary-white `#F9F9F9`

---

## 🧱 SECTION-BY-SECTION SPECIFICATION

---

### SECTION 1: NAV BAR
Same nav component. "Portfolio" link active state.

---

### SECTION 2: PAGE HERO
**Background:** `#111111`, `py-32`  
**No video background** — replace with static + subtle animated particles (CSS only, 20 small dots, opacity 0.15)

**Breadcrumb:** `Home / Portfolio`

**Tag badge:** `[OUR WORK]` — `#9DBAFF` text, border `#2B6BFF`, pill

**Headline (REWRITTEN):**
```
Work That Speaks
Before We Do.
```
- 72px desktop / 44px mobile, weight 800, `#F9F9F9`  
- "Before We Do." — `#2B6BFF`

**Subhead:**
```
Real projects. Real clients. Measurable results. 
Browse our work across branding, web, motion, and AI.
```
- 18px, `#818181`

**Stats bar (UPDATED — use only verifiable numbers):**
```
[50+]              [30+]              [4+]                [5]
Projects           Happy Clients      Industries          Service Areas
```
- Number: 48px, `#2B6BFF`, weight 800  
- Label: 13px, `#818181`  

---

### SECTION 3: FEATURED PROJECTS (REDESIGNED)
**Background:** `#0A0A0A`  
**Label:** `FEATURED WORK`  
**Headline:** "Our Most Impactful Projects"

**Layout:** Large feature cards — alternating left/right layout (not grid)

#### Feature Card Structure:
```
[Large image/video — 55%] | [Text content — 45%]
```
On mobile: stacked (image top, text bottom)

**Feature Card 1: Afriment Brand Identity**
- Visual: DK_Slide images (use existing `/images/marquee-pictures/DK_Slide 12.png`)
- Year badge: `2024`
- Category tags: `Branding` `Identity System`
- Headline: "Afriment — Complete Brand Identity System"
- Short description: "Full visual identity for Afriment's internship platform — logo, colour system, typography, social templates, and brand guidelines."
- Results row:
  ```
  Brand Consistency: ✓ Achieved across all platforms
  Delivery: 3 weeks
  Service: Full Brand Identity
  ```
- Client: "Afriment"
- CTA: "View Case Study →" (links to `/portfolio/afriment` — future detail page)

**Feature Card 2: Candexa Visual Rebrand** (alternate — text left, image right)
- Visual: `/images/samples/branding-b.png`
- Category tags: `Rebranding` `Visual Identity`
- Headline: "Candexa — Modern Brand Redesign"
- Description: "A comprehensive rebrand for Candexa — clean aesthetics, modern typography, and a visual language that positions them for enterprise clients."
- Results row:
  ```
  Visual Refresh: Complete identity overhaul
  Brand perception: Significantly elevated
  Service: Rebranding + Brand Guidelines
  ```

**Feature Card 3: My Lang Coach — Promotional Video**
- Visual: Video player (use `/videos/motion-vids1.mp4` if real, else placeholder)
- Category: `Motion Graphics` `Video Production`
- Headline: "My Lang Coach — Promotional Video Series"
- Description: "Engaging explainer and promo videos that communicate the platform's value in under 60 seconds — designed for social media performance."

**Feature Card 4: Buymejollof — Brand Launch**
- Category: `Branding` `Launch Campaign`
- Headline: "Buymejollof — Brand Identity & Launch Assets"

> ⚠️ DEVELOPER NOTE: Only add projects where you have real assets. If a project doesn't have a real client image or genuine case study data, use a placeholder card with "Case study coming soon" rather than fabricating results. Credibility > quantity.

**Card style:**
- Dark card bg `#111`, rounded-3xl, overflow-hidden  
- Image: full bleed, hover: `scale(1.03)` transition 500ms  
- Content padding: `p-10`  
- Category tags: `bg-[#1A1A1A]`, text `#9DBAFF`, rounded-full, text-xs  
- Results: small table, border-bottom `#222`, 13px text  
- CTA: `#2B6BFF` text, arrow icon, hover: underline  

---

### SECTION 4: ALL PROJECTS GRID (REDESIGNED)
**Background:** `#F9F9F9`  
**Anchor:** `#all-projects`

**Filter tabs (sticky when scrolling this section):**
```
[All]  [Branding]  [Motion]  [Web]  [Marketing]  [Events]  [AI]
```
- Pill style  
- Active: bg `#2B6BFF`, white text  
- Inactive: bg `#111`, text `#818181`, border `#333`  
- Add `[AI]` category for new AI work  
- Filter with CSS/JS animation (fade + scale transition)

**Grid:** Masonry-style, 3-col desktop, 2-col tablet, 1-col mobile  
**Gap:** `gap-5`

#### Project Card Structure:
```
┌─────────────────────────────┐
│  [IMAGE / VIDEO — 16:9]     │  ← Full bleed, hover overlay
│                             │
│ ─────────────────────────── │
│  CATEGORY • YEAR            │  ← 11px, #818181
│  Project Title              │  ← 18px, weight 600, #111
│  Client Name                │  ← 13px, #818181
│                    [View →] │
└─────────────────────────────┘
```

**Hover state:**
- Image: `brightness(0.5)` + overlay text fades in  
- Overlay: gradient bottom `rgba(43,107,255,0.8)` → transparent  
- Overlay text: Project name + "View Project →"  
- Cursor: pointer  

**Featured badge:** 4 cards get a `[Featured]` badge — top-right corner, `#2B6BFF` bg, white text, 10px

**Updated project list — rename all generic titles:**

| Old Title | New Title | Client | Category |
|-----------|-----------|--------|----------|
| Brand Identity Design — Premium Business Solutions | Full Brand Identity System | Afriment | Branding |
| Creative Brand System — Innovation Hub | Modern Visual Rebrand | Candexa | Branding |
| Motion Graphics Campaign — Digital Marketing Agency | Promotional Video Series | My Lang Coach | Motion |
| Hero Video Production — Corporate Solutions | Brand Launch Video | Buymejollof | Motion |
| Brand Video Production — Creative Studio | Company Identity Video | Daniekeys Studios | Motion |
| Marketing Campaign Design — E-commerce Platform | Digital Campaign Assets | [Client TBC] | Marketing |
| Digital Marketing Suite — Retail Brand | Social Media Templates & Strategy | [Client TBC] | Marketing |
| Social Media Campaign — Lifestyle Brand | Instagram Content Strategy | [Client TBC] | Marketing |
| Corporate Event Branding — Business Conference | Event Identity Package | [Client TBC] | Events |
| Cultural Event Promotion — Heritage Cultural Festival | Cultural Festival Branding | [Client TBC] | Events |
| Premium Launch Event — Luxury Brands Ltd | Product Launch Identity | [Client TBC] | Events |

> ⚠️ Where real client name isn't available: use "[Client Name Confidential]" — this is MORE credible than fake names.

---

### SECTION 5: WHY OUR WORK STANDS OUT (REDESIGNED)
**Background:** `#111111`  
**Layout:** 3 cards horizontal

**Headline:**
```
Not Just Beautiful.
Actually Effective.
```

**Card 1: Strategy-First**
- Icon: chess piece / strategy SVG, `#2B6BFF`
- Title: "Strategy Before Aesthetics"
- Copy: "We don't start with 'what looks good.' We start with 'what does this business need to achieve?' The visual comes last — the thinking comes first."

**Card 2: Results You Can Measure**
- Icon: chart/graph SVG, `#2B6BFF`
- Title: "Every Brief Has a Business Goal"
- Copy: "We don't deliver work without understanding what success looks like for you. Every project has defined outcomes — and we track them."

**Card 3: Original, Always**
- Icon: fingerprint SVG, `#2B6BFF`
- Title: "100% Original, Zero Templates"
- Copy: "Every concept is built from scratch. We don't buy templates and swap colours. Your brand is unique — your work should be too."

**Card style:**
- bg `#1A1A1A`, border `#222`, rounded-2xl, p-8  
- Hover: border `#2B6BFF`

---

### SECTION 6: CLIENT LOGOS (SOCIAL PROOF)
**Background:** `#F9F9F9`  
**Label:** `BRANDS WE'VE WORKED WITH`

**Logo strip — horizontal, center-aligned:**
Afriment | Candexa | My Lang Coach | Buymejollof  

- Logos: grayscale filter, `opacity-60`, hover: full color `opacity-100`  
- bg: light card per logo, rounded-xl, p-6  
- Grid: `flex flex-wrap justify-center gap-8`  

> Add empty "Your Brand Here" placeholder card with dashed border — this is a conversion tactic.

---

### SECTION 7: TESTIMONIALS PULL-QUOTE (1 FEATURED)
**Background:** `#0A0A0A`  
**Single large centered quote:**

```
"                                                     "

Working with Daniekeys Studios changed how we show up online.
They didn't just deliver a logo — they gave us a brand
our team is proud of and our clients trust immediately.

— [Real Client Name], [Role], [Company]
```
- Font: 28px, italic, `#F9F9F9`, weight 300  
- Quote marks: `#2B6BFF`, 96px  
- Attribution: 14px, `#818181`  

> ⚠️ Replace with actual client quote when available. If not available, remove this section rather than fabricating.

---

### SECTION 8: CTA
**Background:** `#2B6BFF`

**Headline:**
```
Ready to Be Our
Next Success Story?
```

**Body:**
```
Let's build something together that you'll be proud to show — 
and that your customers can't ignore.
```

**Buttons:**
```
[Start a Project →]   [See Our Services →]
```

---

## 🖼️ IMAGE PROCUREMENT LIST — PORTFOLIO PAGE

| Use Case | Description | Search Query | Notes |
|----------|-------------|--------------|-------|
| Case study hero | Design workspace dark | `"graphic designer workspace dark aesthetic"` | Unsplash: `photo-1561070791-2526d30994b5` |
| Branding work | Brand identity flat lay | `"brand identity design mockup"` | Unsplash: `photo-1561070791-36a28e3d36f1` |
| Web dev preview | Website on devices | `"responsive website mockup devices"` | Unsplash: `photo-1467232004584-a241de8bcf5d` |
| Video production | Camera/studio setup | `"video production studio professional"` | Unsplash: `photo-1574717024653-61fd2cf4d44d` |

> ⚠️ All images: Unsplash free commercial license. Download and self-host. Do NOT hotlink Unsplash URLs in production.

---

## 🔍 SEO & AEO — PORTFOLIO PAGE

### Meta Tags
```html
<title>Our Portfolio — Daniekeys Studios | Brand Identity, Web Design & Motion Graphics Nigeria</title>
<meta name="description" content="Browse Daniekeys Studios' portfolio of branding, web development, motion graphics, and AI projects across Nigeria and Africa. Real work, real results, real clients." />
```

### Schema — ItemList for Portfolio
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Daniekeys Studios Portfolio",
  "description": "Creative and AI projects across branding, web development, motion graphics, and digital marketing",
  "itemListElement": [
    {
      "@type": "CreativeWork",
      "position": 1,
      "name": "Afriment Brand Identity System",
      "description": "Complete brand identity system for Afriment internship platform",
      "creator": { "@type": "Organization", "name": "Daniekeys Studios" }
    }
  ]
}
```

### H-Tag Structure
```
H1: Work That Speaks Before We Do.
H2: Featured Projects
H3: [Each featured project title]
H2: All Projects
H2: Not Just Beautiful. Actually Effective.
H2: Ready to Be Our Next Success Story?
```

### Target Keywords
Primary: `creative portfolio Nigeria`, `branding portfolio Nigeria`, `digital agency portfolio`  
Long-tail: `best branding work Nigeria`, `motion graphics examples Nigeria`, `website design examples Nigeria`

---

## ✅ CRITICAL FIXES CHECKLIST — PORTFOLIO PAGE
- [ ] Replace ALL generic/fake project names with real or credible names
- [ ] Remove "2M+ Video Views Generated" stat — unverified
- [ ] Remove "30+ Happy Clients" if not verified — use "50+ projects" instead
- [ ] Remove video background from hero
- [ ] Replace "Enterprise Solutions Ltd", "Innovation Hub Nigeria" placeholder names
- [ ] Add `[AI]` filter category
- [ ] Add hover overlay to all portfolio cards
- [ ] Add real client logos section
- [ ] Remove or replace the single fake testimonial quote at bottom
- [ ] Add `creativeWork` schema for featured items
