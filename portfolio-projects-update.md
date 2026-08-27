# portfolio-projects-update.md
## Feature: Live Portfolio Project Cards with Website Preview
### Daniekeys Studios — Portfolio Page Update

---

## 🎯 FEATURE OBJECTIVE

Add a "Live Projects" section to the portfolio page that showcases every real client website we've built. Each card uses the **Open Graph / link-preview pattern** — the same technique Twitter, LinkedIn, and iMessage use when you paste a URL. The card shows a live screenshot or OG image of the website, the site name, description, category tag, and a "Visit Live Site →" link. If the preview image fails to load, a high-quality fallback is shown.

This section serves two purposes:
1. **Trust signal** — real, clickable, verifiable websites prove we deliver
2. **Persuasion engine** — visitors can immediately see the quality and range of work across industries: AI, legal, sport, language, photography, education, community, creator economy

---

## 📊 PROJECT RESEARCH — ALL 11 CLIENTS

Verified by checking each website. Used to write card copy and determine display order.

| # | Client | URL | Category | Industry | What We Observe |
|---|--------|-----|----------|----------|-----------------|
| 1 | **Candexa AI** | candexa.ai | SaaS / AI | HR Tech | Email-native ATS. Clean, product-led SaaS design. Has OG image hosted on Cloudinary. Live, indexed. |
| 2 | **Lawploy** | lawploy.com | SaaS / Legal | LegalTech | AI-powered legal ecosystem for Nigeria — connects lawyers, handles compliance. Strong OG image. Very credible brand. |
| 3 | **Sqod** | sqod-u.vercel.app | Web App | Developer Platform | "Upwork for teams" — gamified dev outsourcing platform. Has dashboard screenshot. Strong tech branding. |
| 4 | **FLUX AI** | fluxai-eosin.vercel.app | AI Tool | Creative AI | AI creative studio — generates images, videos, voice. Dark theme, `#080810`. Minimal meta but strong brand identity. |
| 5 | **Afriment** | afriment.com | Platform | EdTech | Mentorship + internship platform for African tech talent. Strong OG image, fully indexed. Established brand. |
| 6 | **Buymejollof** | buymejollof.com | Platform | Creator Economy | Creator support platform (Nigeria's Buy Me a Coffee). Live OG image on Cloudinary. Established, well-known brand. |
| 7 | **Nexus** | nexus-ihez.vercel.app | Web App | Team Productivity | "Where teams build the future." Minimal meta — JS-rendered. Dark theme. |
| 8 | **Ghost AI** | ghost-ai-henna.vercel.app | AI Tool | AI SaaS | Auth-gated — sign-in redirect. Dark, sleek. AI tool category. |
| 9 | **My LangCoach** | mylangcoach.com | Platform | EdTech / Language | Language coaching booking platform. Minimal meta. |
| 10 | **Photomaster Studios** | photomasterstudios.com | Portfolio | Photography | Photography portfolio for Harrison Ben-Okafor. Has OG image. Professional personal brand. |
| 11 | **Daniekeys Studios** | daniekeysstudios.com | Agency | Digital Agency | Our own website — showcase as "self-built" to demonstrate we eat our own cooking. |

---

## 🎯 STRATEGIC DISPLAY ORDER (MOST PERSUASIVE SEQUENCE)

The order is designed using the **peak-end rule** and **social proof ladder**: start with the most impressive/recognisable work (AI + SaaS), build through diverse industries, end strong with your own site.

```
DISPLAY ORDER:
─────────────────────────────────────────────────────────────────────────
01  Candexa AI       ← Opens with polished SaaS AI product. Immediately signals "these people build for serious companies"
02  Lawploy          ← Legal AI platform. Credibility + institutional trust. Nigeria-specific prestige.
03  Sqod             ← Striking sports-meets-tech brand. Dashboard screenshot = tangible proof of build quality.
04  FLUX AI          ← Dark, premium AI aesthetic. Proves we can do cutting-edge design.
05  Afriment         ← Established platform. Largest brand recognition. Anchors credibility mid-sequence.
06  Buymejollof      ← Well-known Nigeria creator brand. Social proof for consumer-facing work.
07  Nexus            ← Team productivity app. Shows product/SaaS range.
08  Ghost AI         ← Auth-gated AI tool. Intrigue factor — visitors want to see more.
09  My LangCoach     ← Global reach. Language platform. Adds international feel.
10  Photomaster      ← Beautiful photography portfolio. Creative / visual contrast.
11  Daniekeys Studios ← Ends with our own site. "We built this too" — closes the loop perfectly.
─────────────────────────────────────────────────────────────────────────
```

**Why this order works:**
- Opens with TWO AI/SaaS companies → immediately repositions Daniekeys as an AI-era agency
- Lawploy at #2 adds institutional weight (legal + AI = enterprise credibility)
- Sqod's visual dashboard at #3 provides tangible proof of technical build quality
- Afriment and Buymejollof (positions 5–6) are recognisable Nigerian brands — local visitors trust them
- Ghost AI at #8 creates curiosity — auth-gated, so the card is teaser-only
- Ending with daniekeysstudios.com is the "mic drop" — we built ourselves too

---

## 🧱 COMPONENT SPECIFICATION

### Component Name: `<ProjectPreviewCard />`

### Location in Codebase:
```
components/portfolio/ProjectPreviewCard.tsx
```

### Where It Appears:
1. **Portfolio page** (`/portfolio`) — full grid section: "Live Client Websites"
2. **Homepage** (`/`) — curated 4-card row within the portfolio preview section (show cards 1, 2, 5, 6 — the most recognisable)

---

### CARD ANATOMY

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   [WEBSITE PREVIEW IMAGE — 16:9 ratio]           │
│   Real OG image or screenshot                    │
│   Hover: slight zoom (scale 1.04, 400ms)         │
│   Fallback: gradient + logo if image 404s        │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  [CATEGORY TAG]   [YEAR TAG]                     │
│  e.g. "AI SaaS"   "2024"                         │
│                                                  │
│  Client / Project Name                           │  ← 20px, weight 700, #111
│  One-line description                            │  ← 14px, #818181
│                                                  │
│  ──────────────────────────────────────────────  │
│                                                  │
│  [🌐 domain.com]            [Visit Live Site →]  │
│   13px, #818181                  #2B6BFF link    │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Card dimensions:** Width flexible (grid-controlled), aspect ratio for image: `aspect-[16/9]`  
**Card bg:** White  
**Card border:** `1px solid #E8E8E8`  
**Card border-radius:** `rounded-2xl`  
**Card overflow:** `hidden`  
**Card shadow:** `shadow-sm` default, `shadow-lg` on hover  
**Card hover:** `translateY(-6px)` transition 300ms ease  

---

### IMAGE PREVIEW SYSTEM

#### Strategy: 3-Layer Fallback

```
Layer 1 (Primary):   OG image fetched via screenshot API
Layer 2 (Secondary): Client's known OG:image URL directly
Layer 3 (Fallback):  Branded gradient card with client logo/initial
```

#### Layer 1 — Screenshot API (recommended approach)

Use a free screenshot-as-a-service API. Best free options:

**Option A — `screenshotone.com`** (free tier: 100/month)
```javascript
const previewUrl = `https://api.screenshotone.com/take?url=${encodeURIComponent(siteUrl)}&viewport_width=1200&viewport_height=630&format=webp&cache=true&access_key=YOUR_KEY`
```

**Option B — `urlbox.io`** (free tier available)
```javascript
const previewUrl = `https://api.urlbox.io/v1/YOUR_KEY/png?url=${encodeURIComponent(siteUrl)}&width=1200&height=630&thumb_width=800`
```

**Option C — Self-hosted with Puppeteer** (zero cost, most control)
```javascript
// api/screenshot.ts — Next.js API route
import puppeteer from 'puppeteer'
export default async function handler(req, res) {
  const { url } = req.query
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630 })
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 })
  const screenshot = await page.screenshot({ type: 'webp', quality: 80 })
  await browser.close()
  res.setHeader('Content-Type', 'image/webp')
  res.setHeader('Cache-Control', 'public, max-age=86400')
  res.end(screenshot)
}
```

> ⚠️ For Vercel deployment, use `@sparticuz/chromium` instead of full Puppeteer:
> ```
> npm install puppeteer-core @sparticuz/chromium
> ```

**Recommended approach for this project:**  
Use **static pre-generated screenshots** stored in `/public/previews/` — take screenshots manually once at build time, name them consistently, and serve them as static assets. This is the most reliable approach with zero API dependency.

#### Layer 2 — OG Image Direct (known, verified URLs)

For clients where OG image URL is confirmed from our research:

| Client | OG Image URL | Confirmed? |
|--------|-------------|-----------|
| Candexa AI | `https://res.cloudinary.com/www-daniekeys-com/image/upload/v1772811209/candexa-meta_hibjoy.png` | ✅ Yes |
| Buymejollof | `https://res.cloudinary.com/groomlyhq/image/upload/q_60/v1693640963/marketing-website/happy_superfans-min_txjaax` | ✅ Yes |
| Afriment | `https://afriment.com/data/images/afriment-logo.png` | ✅ Yes |
| Photomaster | `https://www.photomasterstudios.com/images/photo-icon.jpg` | ✅ Yes |
| Lawploy | `https://lawploy.com/logo.png` | ✅ (logo, not full OG) |

> ⚠️ Do NOT hotlink third-party Cloudinary URLs in production — download and host locally in `/public/previews/`

#### Layer 3 — Branded Fallback Card

When screenshot fails AND OG image is unavailable:

```tsx
// Fallback: gradient card with client initial + name
<div className="w-full aspect-[16/9] flex flex-col items-center justify-center"
     style={{ background: `linear-gradient(135deg, ${client.fallbackGradientFrom}, ${client.fallbackGradientTo})` }}>
  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white text-3xl font-bold mb-3">
    {client.name[0]}
  </div>
  <span className="text-white/80 text-sm font-medium">{client.domain}</span>
</div>
```

Fallback gradient colors per client (chosen to match their brand):

| Client | Gradient From | Gradient To |
|--------|--------------|------------|
| Candexa AI | `#1a1a2e` | `#16213e` |
| Lawploy | `#0f2027` | `#203a43` |
| Sqod | `#0d0d0d` | `#1a1a1a` |
| FLUX AI | `#080810` | `#0f0f1f` |
| Afriment | `#003d2e` | `#005c47` |
| Buymejollof | `#000000` | `#1a0a00` |
| Nexus | `#0a0a14` | `#14142a` |
| Ghost AI | `#0d0d0d` | `#1a0d1a` |
| My LangCoach | `#003087` | `#0050d0` |
| Photomaster | `#1a1205` | `#2d2010` |
| Daniekeys | `#111111` | `#1a1a2e` |

---

### IMPLEMENTATION: `ProjectPreviewCard.tsx`

```tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface ProjectPreviewCardProps {
  client: {
    name: string
    domain: string
    url: string
    category: string
    year: string
    description: string
    previewImage: string       // path to /public/previews/[name].webp
    ogImageUrl?: string        // direct OG URL as secondary fallback
    fallbackGradient: [string, string]
    service: string            // what DK did: "Brand Identity + Web Design"
  }
}

export function ProjectPreviewCard({ client }: ProjectPreviewCardProps) {
  const [imgError, setImgError] = useState(false)
  const [ogError, setOgError] = useState(false)

  const showFallback = imgError && ogError

  return (
    <div className="group bg-white border border-[#E8E8E8] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
      
      {/* Preview Image — 16:9 */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F0F0F0]">
        {!showFallback ? (
          <Image
            src={imgError && client.ogImageUrl ? client.ogImageUrl : client.previewImage}
            alt={`${client.name} website preview`}
            fill
            className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
            onError={() => {
              if (!imgError) setImgError(true)
              else setOgError(true)
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          /* Layer 3: Branded fallback */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: `linear-gradient(135deg, ${client.fallbackGradient[0]}, ${client.fallbackGradient[1]})` }}
          >
            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center text-white text-2xl font-bold">
              {client.name[0]}
            </div>
            <span className="text-white/70 text-xs font-medium tracking-wide">{client.domain}</span>
          </div>
        )}

        {/* Hover overlay — "Visit Site" */}
        <div className="absolute inset-0 bg-[#2B6BFF]/0 group-hover:bg-[#2B6BFF]/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex items-center gap-2 bg-white text-[#2B6BFF] font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg">
            <ExternalLink size={14} />
            Visit Live Site
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Tags row */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2B6BFF] bg-[#EEF3FF] px-2.5 py-1 rounded-full">
            {client.category}
          </span>
          <span className="text-[10px] font-medium text-[#818181] bg-[#F5F5F5] px-2.5 py-1 rounded-full">
            {client.year}
          </span>
        </div>

        {/* Client name */}
        <h3 className="text-[17px] font-bold text-[#111111] mb-1 leading-tight">
          {client.name}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-[#818181] leading-relaxed mb-4 line-clamp-2">
          {client.description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0]">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#22C55E]" /> {/* live indicator */}
            <span className="text-[12px] text-[#818181]">{client.domain}</span>
          </div>
          <Link
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-semibold text-[#2B6BFF] hover:underline flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Site <ExternalLink size={11} />
          </Link>
        </div>

        {/* Service tag — what DK built */}
        <div className="mt-3">
          <span className="text-[10px] text-[#818181] italic">By Daniekeys Studios: {client.service}</span>
        </div>
      </div>
    </div>
  )
}
```

---

### DATA FILE: `data/portfolio-projects.ts`

```typescript
export const portfolioProjects = [
  {
    id: 'candexa-ai',
    name: 'Candexa AI',
    domain: 'candexa.ai',
    url: 'https://www.candexa.ai/',
    category: 'AI SaaS',
    year: '2024',
    description: 'Email-native applicant tracking system for modern recruitment teams. Source, screen, and hire — directly from your inbox.',
    previewImage: '/previews/candexa-ai.webp',
    ogImageUrl: 'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1772811209/candexa-meta_hibjoy.png',
    fallbackGradient: ['#1a1a2e', '#16213e'] as [string, string],
    service: 'Brand Identity · Web Design · Product UI',
    featured: true,
  },
  {
    id: 'lawploy',
    name: 'Lawploy',
    domain: 'lawploy.com',
    url: 'https://lawploy.com/',
    category: 'LegalTech',
    year: '2024',
    description: 'The AI-powered legal operating system for Nigeria — connecting businesses with verified lawyers and handling compliance seamlessly.',
    previewImage: '/previews/lawploy.webp',
    ogImageUrl: 'https://lawploy.com/logo.png',
    fallbackGradient: ['#0f2027', '#203a43'] as [string, string],
    service: 'Web Design · Brand Visual Identity',
    featured: true,
  },
  {
    id: 'sqod',
    name: 'Sqod',
    domain: 'sqod-u.vercel.app',
    url: 'https://sqod-u.vercel.app/',
    category: 'Developer Platform',
    year: '2024',
    description: '"Upwork for teams." Gamified software outsourcing — build your startup\'s engineering squad from a pool of vetted developers.',
    previewImage: '/previews/sqod.webp',
    ogImageUrl: null,
    fallbackGradient: ['#0d0d0d', '#1a1a1a'] as [string, string],
    service: 'Web Design · UI/UX · Brand Identity',
    featured: true,
  },
  {
    id: 'flux-ai',
    name: 'FLUX AI',
    domain: 'fluxai-eosin.vercel.app',
    url: 'https://fluxai-eosin.vercel.app/',
    category: 'AI Creative Tool',
    year: '2024',
    description: 'AI creative studio that generates images, videos, and voice from a single idea. Dark, premium interface built for creators and teams.',
    previewImage: '/previews/flux-ai.webp',
    ogImageUrl: null,
    fallbackGradient: ['#080810', '#0f0f1f'] as [string, string],
    service: 'Web Design · UI/UX · Brand Design',
    featured: false,
  },
  {
    id: 'afriment',
    name: 'Afriment',
    domain: 'afriment.com',
    url: 'https://www.afriment.com/',
    category: 'EdTech Platform',
    year: '2024',
    description: 'Africa\'s mentorship and internship platform — bridging the gap between education and real-world tech experience for young professionals.',
    previewImage: '/previews/afriment.webp',
    ogImageUrl: 'https://afriment.com/data/images/afriment-logo.png',
    fallbackGradient: ['#003d2e', '#005c47'] as [string, string],
    service: 'Brand Identity · Web Design · Motion Graphics',
    featured: true,
  },
  {
    id: 'buymejollof',
    name: 'Buymejollof',
    domain: 'buymejollof.com',
    url: 'https://buymejollof.com/',
    category: 'Creator Economy',
    year: '2024',
    description: 'Nigeria\'s leading creator support platform — receive one-time and monthly support from fans, run shops, and host ticketed events.',
    previewImage: '/previews/buymejollof.webp',
    ogImageUrl: 'https://res.cloudinary.com/groomlyhq/image/upload/q_60/v1693640963/marketing-website/happy_superfans-min_txjaax',
    fallbackGradient: ['#000000', '#1a0a00'] as [string, string],
    service: 'Brand Motion Graphics · Video Production',
    featured: false,
  },
  {
    id: 'nexus',
    name: 'Nexus',
    domain: 'nexus-ihez.vercel.app',
    url: 'https://nexus-ihez.vercel.app/',
    category: 'Team Productivity',
    year: '2024',
    description: 'Where teams build the future. A modern collaboration platform for distributed teams — clean, fast, and built for serious product work.',
    previewImage: '/previews/nexus.webp',
    ogImageUrl: null,
    fallbackGradient: ['#0a0a14', '#14142a'] as [string, string],
    service: 'Web Design · UI/UX Design',
    featured: false,
  },
  {
    id: 'ghost-ai',
    name: 'Ghost AI',
    domain: 'ghost-ai-henna.vercel.app',
    url: 'https://ghost-ai-henna.vercel.app/',
    category: 'AI Tool',
    year: '2024',
    description: 'A sleek AI-powered platform built for modern workflows. Clean dark interface with seamless authentication and intelligent automation.',
    previewImage: '/previews/ghost-ai.webp',
    ogImageUrl: null,
    fallbackGradient: ['#0d0d0d', '#1a0d1a'] as [string, string],
    service: 'UI/UX Design · Web Development',
    featured: false,
  },
  {
    id: 'mylangcoach',
    name: 'My LangCoach',
    domain: 'mylangcoach.com',
    url: 'https://www.mylangcoach.com/',
    category: 'EdTech',
    year: '2024',
    description: 'Book your dedicated expert language coach in seconds. A seamless booking platform connecting language learners with professional coaches globally.',
    previewImage: '/previews/mylangcoach.webp',
    ogImageUrl: null,
    fallbackGradient: ['#003087', '#0050d0'] as [string, string],
    service: 'Brand Identity · Web Design · Motion Graphics',
    featured: false,
  },
  {
    id: 'photomaster',
    name: 'Photomaster Studios',
    domain: 'photomasterstudios.com',
    url: 'https://www.photomasterstudios.com/',
    category: 'Photography',
    year: '2024',
    description: 'Professional photography portfolio for Harrison Ben-Okafor — portraits, weddings, and lifestyle photography that turns moments into timeless art.',
    previewImage: '/previews/photomaster.webp',
    ogImageUrl: 'https://www.photomasterstudios.com/images/photo-icon.jpg',
    fallbackGradient: ['#1a1205', '#2d2010'] as [string, string],
    service: 'Web Design · Brand Visual Identity',
    featured: false,
  },
  {
    id: 'daniekeys-studios',
    name: 'Daniekeys Studios',
    domain: 'daniekeysstudios.com',
    url: 'https://www.daniekeysstudios.com/',
    category: 'Digital Agency',
    year: '2025',
    description: 'Our own studio — Africa\'s AI-powered digital agency. We practice what we preach: every pixel of this website was designed and built in-house.',
    previewImage: '/previews/daniekeys-studios.webp',
    ogImageUrl: 'https://www.daniekeysstudios.com/images/logos/daniekeys-logo.png',
    fallbackGradient: ['#111111', '#1a1a2e'] as [string, string],
    service: 'Self-built — our own brand',
    featured: false,
  },
]

// Featured 4 for homepage use
export const featuredProjects = portfolioProjects.filter(p => p.featured)
```

---

## 🧱 PAGE SECTION SPECIFICATION

### Section: "Live Client Websites" — Full Portfolio Page (`/portfolio`)

**Position:** After "All Projects" filter grid, before "Why Our Work Stands Out"  
**Anchor:** `#live-sites`

**Background:** `#F9F9F9`  
**Section padding:** `py-24`

**Label:**
```
LIVE & SHIPPED
```
- 11px, uppercase, tracking-widest, `#2B6BFF`

**Headline:**
```
Real Websites.
Real Businesses.
Click and See.
```
- 48px desktop / 32px mobile, weight 800, `#111111`  
- "Click and See." — `#2B6BFF`

**Subheadline:**
```
Every website below is live, indexed on Google, and serving real customers today.
These aren't mockups. They're businesses we built — from the first brief to the final launch.
```
- 17px, `#818181`, max-width 600px

**Industry filter (horizontal scroll on mobile):**
```
[All]  [AI & SaaS]  [EdTech]  [Legal]  [Creator Economy]  [Photography]  [Productivity]
```
- Pill tabs, same style as portfolio filter  
- Filter the grid by `category`

**Grid:**
- 3 columns desktop (`grid-cols-3`)
- 2 columns tablet (`md:grid-cols-2`)
- 1 column mobile (`grid-cols-1`)
- Gap: `gap-6`
- All 11 cards displayed

**Animated entry:** Cards fade up (`animation: fadeUp`) as they enter viewport using `IntersectionObserver`. Stagger: 80ms delay between each card.

**Below grid — context line:**
```
11 live projects  ·  7 industries  ·  All built by Daniekeys Studios  ·  All available to verify independently
```
- 12px, `#818181`, centered, italic

---

### Section: Homepage Portfolio Preview (`/`) — Curated 4 Cards

**Position:** Within the existing "Projects That Define Excellence" section on homepage  
**Replace:** The current static filter grid with this live cards component (show 4 featured cards only)

**Headline stays:** "Work That Speaks Before We Do." (per homepage-spec.md)

**Show only:** Cards 1–4 from display order (Candexa, Lawploy, Sqod, Afriment) in a 2×2 grid  
**CTA below:** "See All 11 Live Projects →" links to `/portfolio#live-sites`

---

## 📸 SCREENSHOT GENERATION GUIDE

You must pre-generate screenshots for all 11 sites. Steps:

### Option A: Manual (Recommended — zero cost)
```
1. Open each URL in Chrome
2. Resize browser to exactly 1440 × 900px
   (DevTools → ... → Sensors → set viewport)
3. Wait for full page load (especially JS-heavy sites)
4. Press Cmd+Shift+4 (Mac) or use Chrome DevTools "Capture Screenshot"
5. Crop to 1200 × 630px (standard OG ratio)
6. Convert to WebP at 80% quality (use squoosh.app)
7. Save to /public/previews/[id].webp
```

### Option B: Automated with Node (for CI/CD)
```javascript
// scripts/generate-previews.mjs
import puppeteer from 'puppeteer'
import sharp from 'sharp'
import { portfolioProjects } from '../data/portfolio-projects.js'

const browser = await puppeteer.launch({ headless: 'new' })
for (const project of portfolioProjects) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  try {
    await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 15000 })
    await new Promise(r => setTimeout(r, 2000)) // extra settle time
    const buffer = await page.screenshot({ type: 'webp', quality: 80 })
    await sharp(buffer)
      .resize(1200, 630, { fit: 'cover', position: 'top' })
      .webp({ quality: 75 })
      .toFile(`./public/previews/${project.id}.webp`)
    console.log(`✅  ${project.name}`)
  } catch (err) {
    console.log(`⚠️  ${project.name} — fallback will be used: ${err.message}`)
  }
  await page.close()
}
await browser.close()
```

### Special Notes per Site:
| Client | Screenshot Note |
|--------|----------------|
| Ghost AI | Auth-gated — screenshot the sign-in page (shows brand, not blank). Label card: "Preview — Login Required" |
| FLUX AI | Dark theme — ensure screenshot captures the dark bg correctly |
| Sqod | Dashboard image visible above fold — captures well |
| Nexus | JS-rendered — add 3s wait before capture |
| My LangCoach | May load slowly — increase timeout to 20s |
| Buymejollof | Requires JS — use `waitUntil: 'networkidle0'` |

---

## 🗂️ FILE STRUCTURE ADDITIONS

```
public/
└── previews/
    ├── candexa-ai.webp
    ├── lawploy.webp
    ├── sqod.webp
    ├── flux-ai.webp
    ├── afriment.webp
    ├── buymejollof.webp
    ├── nexus.webp
    ├── ghost-ai.webp
    ├── mylangcoach.webp
    ├── photomaster.webp
    └── daniekeys-studios.webp

components/
└── portfolio/
    └── ProjectPreviewCard.tsx

data/
└── portfolio-projects.ts

scripts/
└── generate-previews.mjs  (optional automation)
```

---

## 🔍 SEO IMPACT — THIS FEATURE

Each live project card adds real SEO value:

1. **Internal linking to client domains** — builds a rich outbound link graph (Google sees this as content quality signal)
2. **Real client names as text content** — "Candexa AI", "Lawploy", "Afriment" are indexed brand names that may drive branded search to us
3. **`rel="noopener noreferrer"` on all outbound links** — correct security practice
4. **Alt text on preview images** — `"Candexa AI website preview — Email-native ATS for recruiters"`
5. **Structured data** — add `CreativeWork` schema for each card (see below)

### Schema for live projects section:
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Daniekeys Studios — Live Client Websites",
  "description": "Live websites and digital products designed and developed by Daniekeys Studios",
  "numberOfItems": 11,
  "itemListElement": [
    {
      "@type": "CreativeWork",
      "position": 1,
      "name": "Candexa AI — Email-Native ATS",
      "url": "https://www.candexa.ai/",
      "creator": { "@type": "Organization", "name": "Daniekeys Studios" },
      "description": "Email-native applicant tracking system for modern recruitment teams"
    },
    {
      "@type": "CreativeWork",
      "position": 2,
      "name": "Lawploy — AI-Powered Legal Platform",
      "url": "https://lawploy.com/",
      "creator": { "@type": "Organization", "name": "Daniekeys Studios" }
    }
  ]
}
```

---

## ✅ IMPLEMENTATION CHECKLIST

### Before coding:
- [ ] Generate all 11 screenshots using manual method or script
- [ ] Convert all to WebP at 75–80% quality
- [ ] Save to `/public/previews/[id].webp`
- [ ] Download and save fallback OG images locally for Candexa, Buymejollof, Afriment, Photomaster

### Component:
- [ ] Build `ProjectPreviewCard.tsx` with 3-layer image fallback
- [ ] Build `data/portfolio-projects.ts` with all 11 entries
- [ ] Add `line-clamp-2` to description (Tailwind: `@tailwindcss/line-clamp` or CSS)
- [ ] Add green live indicator dot
- [ ] Add hover overlay with "Visit Live Site" pill
- [ ] Add `IntersectionObserver` for staggered fade-up animation

### Portfolio page:
- [ ] Add "Live Client Websites" section in correct position (after filter grid)
- [ ] Add industry filter tabs
- [ ] Display all 11 cards in strategic order
- [ ] Add context line below grid
- [ ] Add `ItemList` schema markup

### Homepage:
- [ ] Replace static portfolio grid section with 4 featured `ProjectPreviewCard` components (Candexa, Lawploy, Sqod, Afriment)
- [ ] Add "See All 11 Live Projects →" CTA below

### Ghost AI special handling:
- [ ] Screenshot sign-in page
- [ ] Add "Preview — Sign In Required" label to card
- [ ] Optionally add tooltip: "This is a private AI tool — sign up to access"

### Final QA:
- [ ] Test all 11 image load / fallback states by temporarily breaking image paths
- [ ] Test on mobile (cards should be full-width, 1-col)
- [ ] Confirm all "Visit Live Site" links open in new tab with correct rel attributes
- [ ] Validate schema markup at schema.org/validator
- [ ] Run Lighthouse on portfolio page — target 90+ with images lazy-loaded
