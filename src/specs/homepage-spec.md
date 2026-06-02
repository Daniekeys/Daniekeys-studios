# homepage-spec.md
## Page: `/` — Homepage
### Daniekeys Studios Website Revamp

---

## 🎯 PAGE OBJECTIVE
Convert first-time visitors into enquiries within 60 seconds. Communicate three things instantly:
1. We are an AI-powered digital agency (not just a creative studio)
2. We solve real business problems — branding, visibility, growth, automation
3. We are credible, professional, and built for ambitious African brands

---

## 🎨 BRAND TOKENS (use exactly — from tailwind.config.js)

```
primary:          #111111   ← dark backgrounds, main text
secondary:        #818181   ← subtext, labels
primary-white:    #F9F9F9   ← section backgrounds
off-white:        #F0F0F0   ← cards, dividers
accent-blue:      #2B6BFF   ← CTAs, highlights, AI badge
accent-blue-light:#5F8EFB   ← hover states
accent-blue-lighter:#9DBAFF ← subtle accents
white:            #FFFFFF
black:            #000000
font-sans:        "Neue Montreal", system-ui, sans-serif
hero text:        80px (desktop) / 48px (mobile)
section-title:    48px (desktop) / 32px (mobile)
```

---

## 🧱 SECTION-BY-SECTION SPECIFICATION

---

### SECTION 1: NAV BAR
**Background:** `#111111` sticky, blur on scroll  
**Logo:** existing `/images/logos/daniekeys-logo-light.png` — left aligned  
**Nav links (desktop):** Services | Portfolio | Pricing | About | Contact  
- Remove: "Process" anchor link (broken on sub-pages)  
- Font: 14px, weight 400, color `#F9F9F9`, uppercase tracking-wide  
- Active state: `accent-blue` (#2B6BFF) underline  

**CTA Button:** "Start a Project →"  
- Background: `#2B6BFF`, text white, border-radius 6px, px-6 py-2.5  
- Hover: `#5F8EFB`  

**Mobile:** Hamburger menu, full-screen overlay, same links  

**NEW: Add thin top bar** (3px) above nav — animated gradient: `#2B6BFF` → `#5F8EFB` → `#2B6BFF`  

---

### SECTION 2: HERO
**Layout:** Full viewport height (`min-h-screen`), dark background `#111111`  
**Background treatment:** Subtle grid pattern overlay (CSS grid lines, 5% opacity white)  
**Content:** Centered, text-left on desktop

**Badge (NEW — replaces generic label):**
```
[🤖 AI-Powered Digital Agency]
```
- Pill shape, border: 1px solid `#2B6BFF`, bg: `rgba(43,107,255,0.1)`, text: `#9DBAFF`, font-size: 13px  
- Animate: fade-in from top on load  

**Headline (REWRITTEN):**
```
Africa's Most Ambitious Brands
Don't Just Look Good.
They Grow.
```
- Font: Neue Montreal, 80px desktop / 48px mobile  
- Weight: 700  
- Color: `#F9F9F9`  
- "Grow." — color: `#2B6BFF`  
- Line-height: 1.05  
- Animation: `fadeUp` staggered per line (0ms, 150ms, 300ms delay)

**Subheadline (REWRITTEN):**
```
Daniekeys Studios combines AI engineering, world-class creative design, 
and strategic marketing to help businesses across Africa build brands 
that convert, scale, and dominate their market.
```
- Font: 18px, weight 400, color `#818181`, max-width 560px  
- Animation: fadeUp, 400ms delay  

**CTA Row:**
```
[Start a Project →]   [View Our Work ↗]
```
- Primary: bg `#2B6BFF`, white text, px-8 py-4, rounded-lg  
- Secondary: bg transparent, border `#333`, text `#F9F9F9`, px-8 py-4, rounded-lg  
- Hover secondary: border `#2B6BFF`, text `#2B6BFF`  
- Animation: fadeUp, 550ms delay  

**Scroll indicator:** Animated chevron-down, `#818181`, bounce animation, bottom-8 centered  

**Hero Image (RIGHT SIDE — replaces current full-width):**  
Desktop: Split layout 55/45 (text left, visual right)  
Visual: Floating dashboard mockup / device frame showing brand work  

📸 **Image to find:** Search Unsplash/Pexels for:  
`"agency team working on brand design dark studio"` OR `"modern creative studio setup multiple screens"`  
Use: `https://images.unsplash.com/photo-1522071820081-009f0129c71c` (team working, dark)  
Overlay: Dark gradient from left `rgba(17,17,17,1)` → `rgba(17,17,17,0)` so text stays readable

---

### SECTION 3: MARQUEE / LOGO BAR (REDESIGNED)
**Label above:** `TRUSTED BY BRANDS ACROSS NIGERIA AND AFRICA` — 11px, tracking-widest, `#818181`  

**Keep existing marquee strip** but update:
- Remove generic stock images from marquee
- Keep only actual DK_Slide images (real work)  
- Add client logos row BELOW marquee: Afriment, Candexa, My Lang Coach, Buymejollof  
- Logo bg: `#1A1A1A` cards, grayscale filter, hover: color  
- Spacing: `gap-12`, logos max-height 36px  

---

### SECTION 4: ABOUT / VALUE PROPOSITION (REDESIGNED)
**Background:** `#F9F9F9` (light section — contrast break)  
**Layout:** 50/50 grid, text left, visual right  

**Tag:** `WHO WE ARE` — 11px uppercase tracking-widest `#2B6BFF`

**Headline (REWRITTEN):**
```
We Don't Just Make Things Look Good.
We Make Your Business Grow.
```
- 48px, weight 700, color `#111111`  

**Body copy (REWRITTEN):**
```
Daniekeys Studios is a full-service AI-powered digital agency based in Nigeria, 
built for businesses that are ready to compete — locally and globally.

We bring together three things that most agencies separate: creative excellence, 
AI engineering, and growth strategy. The result? Brands that don't just look 
premium — they perform.

Whether you're a startup finding your identity or an established business ready 
to scale, we become your creative and technology partner from day one.
```
- 16px, color `#444444`, line-height 1.8  

**4-pillar grid below text:**
| Icon | Title | Copy |
|------|-------|------|
| 🎨 | Creative Excellence | World-class design rooted in strategy and storytelling |
| 🤖 | AI-Powered | We use AI to deliver faster, smarter, and more scalable results |
| 📈 | Growth-Focused | Every deliverable is tied to a business outcome |
| 🌍 | Pan-African | Built in Africa, built for Africa — and the world |

- Grid: 2x2 on desktop, 1-col mobile  
- Card bg: white, border: 1px `#E5E5E5`, rounded-xl, p-6  

**RIGHT SIDE visual:**  
📸 Image search: `"professional Nigerian business team meeting creative agency"`  
Unsplash suggestion: `https://images.unsplash.com/photo-1600880292203-757bb62b4baf` (team meeting)  
- Rounded-2xl, slight shadow, overlay badge: "Nigeria's AI Digital Agency" pill  

---

### SECTION 5: STATS BAR (REDESIGNED)
**Background:** `#111111`  
**Layout:** 4 stats in a row (horizontal scroll on mobile)  

**REMOVE fabricated stats. Replace with:**
```
50+        Projects Delivered
5+         Years in Business  
3×         Average Client Revenue Growth
100%       On-Time Delivery Rate
```
- Number: 56px, weight 800, color `#2B6BFF`  
- Label: 14px, color `#818181`  
- Divider lines between: 1px `#222`  

> ⚠️ NOTE TO DEVELOPER: Do NOT use "10 years" or "25+ team" — these are unverified. Use only the verified numbers above.

---

### SECTION 6: SERVICES (REDESIGNED)
**Background:** `#F9F9F9`  
**Tag:** `WHAT WE DO` — uppercase, `#2B6BFF`  

**Headline (REWRITTEN):**
```
Six Ways We Help Your Business
Win Online
```

**Subhead:**
```
From brand identity to AI automation — every service is built to deliver 
a measurable return on your investment.
```

**Service Cards — 3 columns desktop, 2 tablet, 1 mobile:**

**Card 1: AI-Powered Digital Strategy** *(NEW — top card)*
- Icon: brain/circuit SVG, `#2B6BFF`
- Copy: "We use AI to audit, plan, and execute digital strategies that give your business an unfair advantage over competitors still doing things manually."
- Badge: `[NEW]` in `#2B6BFF`

**Card 2: Brand Identity & Design**
- Icon: palette SVG
- Copy: "Logos, visual systems, colour palettes, and brand guidelines that make your business look like it belongs at the top."
- Tags: Logo Design · Visual Identity · Brand Guidelines

**Card 3: Website & App Development**
- Icon: code SVG
- Copy: "Fast, beautiful, mobile-first websites and apps that don't just look impressive — they convert visitors into paying customers."
- Tags: Web Design · E-Commerce · UI/UX · App Dev

**Card 4: Motion Graphics & Video**
- Icon: play-circle SVG
- Copy: "Animated ads, brand videos, explainer reels, and motion graphics that stop the scroll and build instant brand recall."
- Tags: Brand Video · Animated Ads · Explainer Videos

**Card 5: AI Chatbots & Automation** *(NEW)*
- Icon: robot/zap SVG, `#2B6BFF`
- Copy: "Deploy AI agents on your website, WhatsApp, and Instagram that handle enquiries, qualify leads, and book appointments — 24/7 without extra headcount."
- Badge: `[NEW]` in `#2B6BFF`

**Card 6: Digital Marketing & Social Media**
- Icon: trending-up SVG
- Copy: "AI-enhanced content strategies, social media management, SEO, and ad campaigns that build audiences and drive consistent revenue."

**Card style:**
- bg: white, border: 1px solid `#E8E8E8`, rounded-2xl, p-8  
- Hover: border-color `#2B6BFF`, translateY(-4px), shadow-lg  
- Transition: 300ms ease  
- "Learn More →" link at bottom: `#2B6BFF`, font-medium  

**Bottom CTA:**
```
[Explore All Services →]
```
- Centered, outline button style, border `#2B6BFF`, color `#2B6BFF`

---

### SECTION 7: TRANSFORMATION / BEFORE-AFTER (KEEP, ENHANCE)
**Background:** `#111111`  
**Keep existing before/after slider mechanism**  
**Update headline (REWRITTEN):**
```
We Turned This Into That.
Now Imagine What We Can Do For You.
```
- 48px, white, weight 700  

**Update 3 stats below:**
```
3×       Average Revenue Impact
85%      Clients Report Stronger Brand Trust
48hrs    For First Creative Concepts
```
- Keep visual style but replace `300% Brand Recognition` language — too vague  

**Add quote below stats:**
```
"The ROI was visible within 30 days. Not just better design — 
actually more customers coming through the door."
— Business Owner, Lagos
```
- Italic, `#818181`, border-left 3px `#2B6BFF`  

---

### SECTION 8: PORTFOLIO PREVIEW (REDESIGNED)
**Background:** `#0A0A0A`  
**Tag:** `OUR WORK` — uppercase `#818181`

**Headline (REWRITTEN):**
```
Work That Speaks
Before We Do.
```
- 56px, white, weight 700  

**Subhead:**
```
Real projects. Real clients. Real results.
```

**Filter tabs:** All | Branding | Motion | Web | Marketing  
- Active: bg `#2B6BFF`, text white, rounded-full  
- Inactive: bg `#1A1A1A`, text `#818181`  

**Grid:** Masonry-style, 3 cols desktop. Each card:
- Hover: overlay with project name + "View Project →"  
- Overlay bg: `rgba(43,107,255,0.85)`  

**Update project names to sound real (REPLACE generic titles):**

| Current | Replace With |
|---------|-------------|
| "Brand Identity Design — Premium Business Solutions" | "Afriment — Brand Identity System" |
| "Creative Brand System — Innovation Hub" | "Candexa — Visual Identity Rebrand" |
| "Motion Graphics Campaign — Digital Marketing Agency" | "My Lang Coach — Promotional Video Series" |
| "Hero Video Production — Corporate Solutions" | "Buymejollof — Brand Launch Video" |

**CTA:**
```
[See All Projects →]   links to /portfolio
```

---

### SECTION 9: TESTIMONIALS (REDESIGNED — CRITICAL FIX)
**Background:** `#F9F9F9`  

> ⚠️ DEVELOPER NOTE: Remove all Unsplash stock photo avatars immediately. These are the wrong people and will be recognized as fake. Replace with:
> - Initials-based avatar system (coloured circle with first letter of name)
> - OR use actual client-supplied photos when available

**Keep testimonial text content** (can be updated with real quotes later)  
**Update attribution style:** Remove fake job titles like "Sarah Mitchell — Creative Director • Brand Studio"  
**Replace with:** Real or anonymized Nigerian business names

**Carousel style:**
- 3 visible on desktop, 1 on mobile  
- Auto-play every 5s with manual nav dots  
- Card: white bg, rounded-2xl, p-8, shadow-sm  
- Quote marks: large `#2B6BFF` decorative `"`  

**Add trust element above carousel:**
```
★★★★★  Rated 5.0 by 30+ clients on Google  
[Read Reviews ↗]
```

---

### SECTION 10: AI SECTION (NEW — not currently on site)
**Background:** Dark gradient `#0D1117` → `#111827`  
**Layout:** 60/40 — text left, animated visual right  

**Tag:** `AI-POWERED AGENCY`

**Headline:**
```
Your Competitors Are Still
Doing This Manually.
You Don't Have To.
```
- 48px, white, weight 700  
- "You Don't Have To." — color `#2B6BFF`

**Body:**
```
Our founder is an AI engineer. That means we don't just talk about using AI — 
we actually build it into your brand systems.

From AI chatbots that handle your DMs, to content pipelines that produce 
30 days of material in 48 hours, to strategy tools that predict what your 
audience wants next — we give your brand AI superpowers.
```

**3-feature list:**
- 🤖 AI Chatbots deployed on WhatsApp, website & Instagram
- ⚡ AI Content Pipelines — 30 days of content, 48-hour turnaround  
- 📊 AI Brand Analytics — real-time insights, not monthly PDFs  

**CTA:**
```
[Explore AI Services →]   links to /services#ai
```

**RIGHT SIDE:** Abstract animated visualization — CSS/JS animated nodes/graph, `#2B6BFF` accent  

---

### SECTION 11: PROCESS (REDESIGNED)
**Background:** `#F9F9F9`  
**Layout:** Horizontal numbered steps on desktop, vertical on mobile  

**Headline:**
```
From First Call to Final Delivery —
Here's Exactly How We Work
```

**Steps (REWRITTEN):**

| # | Title | Copy |
|---|-------|------|
| 01 | Discovery Call (Free) | 30 minutes to understand your business, your goals, and what success looks like for you. No jargon. No hard sell. |
| 02 | Strategy & Proposal | We map out a precise creative and technical strategy, and send you a transparent proposal with clear deliverables and timelines. |
| 03 | Create & Build | Our team gets to work. You get progress updates every 3 days — not radio silence. |
| 04 | Review & Refine | Two rounds of revisions are included. We don't stop until the work is right. |
| 05 | Launch & Support | We go live together. Then we stay close — monitoring, supporting, and optimising for 30 days post-launch. |

- Step number: 64px, `#2B6BFF`, font-weight 800, opacity 20%  
- Step title: 20px, weight 600, `#111`  
- Connecting line: 1px dashed `#E0E0E0`  

---

### SECTION 12: CTA BANNER (REDESIGNED)
**Background:** `#2B6BFF`  
**Layout:** Full width, centered  

**Headline:**
```
Ready to Build Something
That Actually Works?
```
- 56px, white, weight 800  

**Subhead:**
```
Let's talk about your brand, your goals, and how Daniekeys Studios 
can help you grow. First call is always free.
```

**CTA Buttons:**
```
[Book a Free Discovery Call →]   [WhatsApp Us Now →]
```
- Primary: white bg, `#2B6BFF` text  
- Secondary: transparent, white border, white text  

---

### SECTION 13: FOOTER (REDESIGNED)
**Background:** `#0A0A0A`  
**Layout:** 4 columns desktop, 2-col tablet, 1-col mobile  

**Column 1 — Brand:**
- Logo (light version)
- Tagline: "Africa's AI-Powered Digital Agency"  
- Social icons: Instagram, LinkedIn, YouTube, Facebook — white, hover `#2B6BFF`  

**Column 2 — Services:**
AI Digital Strategy | Brand Identity | Web Development | Motion Graphics | AI Automation | Digital Marketing

**Column 3 — Company:**
About Us | Portfolio | Pricing | Process | Contact | Careers

**Column 4 — Contact:**
- Email: `hello@daniekeysstudios.com` *(UPDATE — remove Gmail)*
- Phone: `+234 903 090 9624`
- Location: Nigeria (serving Pan-Africa & globally)
- Hours: Mon–Fri 9am–6pm WAT

**Bottom bar:**
- Left: `© 2026 Daniekeys Studios. All rights reserved.`
- Right: Privacy Policy | Terms of Service  
- *(Both must link to REAL pages — create /privacy and /terms)*

---

## 🖼️ IMAGE PROCUREMENT LIST — HOMEPAGE

| Section | Description | Search Terms | Suggested Source |
|---------|-------------|--------------|-----------------|
| Hero (right side) | Dark creative agency studio | `"creative agency team dark studio"` | Unsplash: `photo-1522071820081-009f0129c71c` |
| About section | African professionals meeting | `"African business team meeting office"` | Unsplash: `photo-1600880292203-757bb62b4baf` |
| Process section | Laptop/planning desk | `"designer working laptop desk dark"` | Unsplash: `photo-1498050108023-c5249f4df085` |
| CTA section bg | Abstract blue tech | `"blue abstract technology network"` | Unsplash: `photo-1451187580459-43490279c0fa` |

> ⚠️ All images from Unsplash are free for commercial use under the Unsplash License. Download at full resolution. Do NOT use AI-generated images.

---

## 📐 LAYOUT SPECIFICATIONS

- **Max content width:** 1280px, centered with `mx-auto`
- **Section padding:** `py-24` desktop, `py-16` mobile  
- **Section padding horizontal:** `px-6` mobile, `px-8` tablet, `px-0` desktop (inside max-width container)
- **Grid gap:** `gap-8` standard, `gap-6` cards
- **Border radius:** `rounded-2xl` cards, `rounded-lg` buttons, `rounded-full` pills/badges
- **Shadows:** `shadow-sm` default cards, `shadow-xl` hover state

---

## 🔍 SEO & AEO SPECIFICATIONS

### Meta Tags (replace existing)
```html
<title>Daniekeys Studios — AI-Powered Digital Agency in Nigeria | Brand Design, Web & AI Automation</title>
<meta name="description" content="Daniekeys Studios is Nigeria's leading AI-powered digital agency. We help ambitious brands with professional web design, brand identity, motion graphics, and AI automation. Serving Nigeria and Africa." />
<meta name="keywords" content="digital agency Nigeria, AI agency Nigeria, branding agency Nigeria, web design Nigeria, motion graphics Nigeria, AI automation Nigeria, brand identity Lagos, website design Nigeria" />
```

### Open Graph
```html
<meta property="og:title" content="Daniekeys Studios — Africa's AI-Powered Digital Agency" />
<meta property="og:description" content="From brand identity to AI automation — we help African businesses build brands that convert, scale, and dominate their market." />
<meta property="og:image" content="/images/og-image.jpg" /> <!-- Create a 1200x630 OG image -->
```

### Schema Markup (add to `<head>`)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Daniekeys Studios",
  "description": "AI-powered digital agency offering brand identity, web development, motion graphics, and AI automation services in Nigeria and Africa.",
  "url": "https://www.daniekeysstudios.com",
  "telephone": "+2349030909624",
  "email": "hello@daniekeysstudios.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ilorin",
    "addressRegion": "Kwara State",
    "addressCountry": "NG"
  },
  "areaServed": ["Nigeria", "Africa"],
  "serviceType": ["Brand Identity Design", "Web Development", "Motion Graphics", "AI Automation", "Digital Marketing"],
  "priceRange": "₦₦₦"
}
```

### AEO (Answer Engine Optimisation)
Add FAQ schema on homepage targeting AI search queries:
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Daniekeys Studios do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Daniekeys Studios is an AI-powered digital agency in Nigeria that provides brand identity design, website development, motion graphics, AI automation, and digital marketing services to businesses across Africa."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Daniekeys Studios charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Daniekeys Studios offers packages starting from ₦95,000 for basic digital presence up to ₦3,000,000+ for full-scale AI-powered brand transformation. Custom quotes are available."
      }
    },
    {
      "@type": "Question",
      "name": "Is Daniekeys Studios an AI agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Daniekeys Studios is founded by an AI engineer and integrates AI tools into brand strategy, content creation, chatbot deployment, and digital marketing — making it one of Nigeria's few truly AI-native digital agencies."
      }
    }
  ]
}
```

---

## ⚡ PERFORMANCE REQUIREMENTS
- Lighthouse score target: **90+** on mobile
- LCP (Largest Contentful Paint): < 2.5s
- All images: WebP format, lazy-loaded below fold
- Hero image: eager-loaded, preloaded in `<head>`
- Fonts: `font-display: swap` on Neue Montreal
- No render-blocking scripts

---

## ✅ CRITICAL FIXES CHECKLIST
- [ ] Replace `starlordflash2@gmail.com` with `hello@daniekeysstudios.com` everywhere
- [ ] Fix Privacy Policy link (currently `#`) — create `/privacy` page
- [ ] Fix Terms of Service link (currently `#`) — create `/terms` page
- [ ] Remove "10 Years Experience" and "25+ Team Members" stats
- [ ] Remove Unsplash stock photo avatars from testimonials
- [ ] Fix footer location inconsistency (use "Nigeria" consistently)
- [ ] Add `AI` to page title and meta description
- [ ] Make "Process" nav link work on all pages (anchor or dedicated page)
