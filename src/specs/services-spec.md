# services-spec.md
## Page: `/services` — Services Page
### Daniekeys Studios Website Revamp

---

## 🎯 PAGE OBJECTIVE
Communicate clearly and powerfully what Daniekeys Studios offers, position AI services as the leading differentiator, and move every visitor toward booking a discovery call or requesting a proposal. This page must answer: "Can they solve MY specific problem?"

---

## 🎨 BRAND TOKENS
Same as homepage-spec.md — refer to that file for full token list.
Key colors: primary `#111111`, accent-blue `#2B6BFF`, secondary `#818181`, primary-white `#F9F9F9`

---

## 🧱 SECTION-BY-SECTION SPECIFICATION

---

### SECTION 1: NAV BAR
Same component as homepage. "Services" nav link should be in active state (`#2B6BFF` underline).

---

### SECTION 2: PAGE HERO
**Background:** `#111111`, full width, `py-32`  
**NO video background** (current site uses hero-video.mp4 here — replace with static for performance)

**Breadcrumb:**
```
Home / Services
```
- Font: 13px, color `#818181`, with `›` separator

**Tag badge:**
```
[WHAT WE OFFER]
```
- Pill, border `#2B6BFF`, bg `rgba(43,107,255,0.08)`, text `#9DBAFF`, 12px

**Headline (REWRITTEN):**
```
Every Service We Offer
Is Designed to Grow
Your Business.
```
- 72px desktop / 44px mobile, weight 800, color `#F9F9F9`  
- "Your Business." — color `#2B6BFF`

**Subhead:**
```
We don't sell services. We solve problems. Whether you need a brand that commands 
attention, a website that converts, or AI systems that run while you sleep — 
we have the team, the tools, and the track record to deliver.
```
- 18px, `#818181`, max-width 620px

**Stats row below subhead:**
```
50+ Projects  |  8 Service Areas  |  AI-Powered  |  Pan-African Reach
```
- 13px, `#818181`, separated by `|`

---

### SECTION 3: SERVICE CATEGORY NAVIGATION (NEW)
**Background:** `#1A1A1A` sticky bar that appears below nav when scrolling  
**Pill tabs — smooth scroll to each section:**
```
AI Strategy  |  Brand & Identity  |  Web & App Dev  |  Motion & Video  |  AI Automation  |  Digital Marketing  |  Training
```
- Active: bg `#2B6BFF`, white text  
- Inactive: bg transparent, `#818181` text, hover: white  
- Horizontal scroll on mobile  

---

### SECTION 4: SERVICES GRID — CORE SERVICES

**Background:** `#F9F9F9`  
**Tag:** `CORE SERVICES`

#### SERVICE 1: AI Digital Strategy & Consulting *(NEW — featured card, full width or 2/3 width)*
**Background:** Dark card `#111111`, accent border-left 3px `#2B6BFF`
```
[AI-Powered] badge

AI Digital Strategy & Consulting
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your competitors are already adopting AI. We help you do it right — with a 
clear roadmap, the right tools, and an implementation partner who actually 
understands your business.

What's included:
→ AI readiness audit for your business
→ Custom AI roadmap (3-month implementation plan)
→ Tool recommendation & setup (chatbots, automation, content AI)
→ Staff training on AI tools
→ Monthly strategy review calls

Best for: SMEs, startups, and growing businesses ready to work smarter.
Starts from: ₦350,000

[Book a Strategy Session →]
```

#### SERVICE 2: Brand Identity & Design
```
Brand Identity & Design
━━━━━━━━━━━━━━━━━

Your brand is the first thing people judge you by. We make sure that 
judgement works in your favour — every single time.

Deliverables:
→ Logo design (primary + variations)
→ Brand colour palette & typography system
→ Brand guidelines document (20+ pages)
→ Social media kit (templates for 5 platforms)
→ Business card & stationery design
→ Flyer and poster design templates

Best for: New businesses, rebranding companies, startups seeking investment.
Starts from: ₦120,000
```

#### SERVICE 3: Website & App Development
```
Website & App Development
━━━━━━━━━━━━━━━━━━━━━━

We build websites that look like they cost 10× more than they do — and 
perform like revenue machines from day one.

Deliverables:
→ Custom business / portfolio / e-commerce website
→ Mobile-first, speed-optimised development
→ SEO foundations baked in from build
→ CMS setup so you can update content yourself
→ Contact forms, booking systems, payment integration
→ 30-day post-launch support

Mobile Apps:
→ Android & iOS apps (UI/UX to deployment)
→ App Store Optimisation (ASO)

Best for: Businesses without a website, those with outdated sites, startups launching.
Starts from: ₦180,000
```

#### SERVICE 4: Motion Graphics & Video Production
```
Motion Graphics & Video Production
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In a world of infinite scroll, motion is the only language that makes 
people stop. We create video content that earns views and drives action.

What we produce:
→ Brand intro / logo reveal animations
→ Promotional and ad videos
→ Explainer videos for products / services
→ Social media reels (30s, 60s, 90s)
→ Event highlight videos
→ Community and NGO awareness films

Best for: Businesses launching products, brands building social presence, events.
Starts from: ₦80,000 per video
```

#### SERVICE 5: AI Chatbots & Business Automation *(NEW — highlight)*
**Card style:** Slightly elevated, `#2B6BFF` subtle gradient bg tint  
```
[NEW] AI Chatbots & Business Automation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine having a team member who works 24/7, never sleeps, answers 
every customer question, and books appointments — without a salary. 
That's what we build for you.

What we deploy:
→ Website AI chat assistant (answers FAQs, qualifies leads)
→ WhatsApp Business AI bot (handles enquiries, sends quotes)
→ Instagram DM automation (auto-replies, story responses)
→ Lead capture and CRM integration
→ AI-powered email response systems

Best for: E-commerce, service businesses, clinics, restaurants, real estate.
Starts from: ₦150,000 + ₦50,000/month maintenance
```

#### SERVICE 6: Digital Marketing & Social Media Management
```
Digital Marketing & Social Media Management
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Being online isn't enough. Being found — by the right people, at the 
right time, saying the right thing — is what drives growth.

Services:
→ Social media content creation & scheduling
→ Community management & engagement
→ Paid social advertising (Meta, TikTok, LinkedIn)
→ Google Ads management
→ SEO (on-page, technical, content)
→ Email marketing campaigns
→ Monthly performance analytics report

Best for: Businesses wanting consistent online growth without doing it themselves.
Starts from: ₦120,000/month (retainer)
```

#### SERVICE 7: Rebranding for Established Businesses
```
Rebranding
━━━━━━━━━

Your brand built you this far. Now it needs to take you further. 
Rebranding isn't admitting failure — it's strategic evolution.

What we do:
→ Brand audit (current perception vs. desired positioning)
→ Competitive landscape analysis
→ New visual identity system
→ Brand voice & messaging refresh
→ Launch strategy & announcement assets
→ Updated motion intro + social templates

Best for: Businesses that have grown but whose brand hasn't kept up.
Starts from: ₦250,000
```

#### SERVICE 8: Training & Skills Development
```
Training & AI Upskilling
━━━━━━━━━━━━━━━━━━━━━

The biggest barrier to AI adoption in African businesses isn't tools — 
it's knowledge. We fix that.

Programmes:
→ AI Tools for Business Owners (1-day workshop)
→ Social Media Marketing Masterclass (2-day)
→ Canva & Graphic Design for Non-Designers (online)
→ Motion Graphics Fundamentals (4-week course)
→ Corporate AI Upskilling (custom, for teams of 5+)

Best for: Entrepreneurs, marketing teams, young professionals, NGO staff.
Starts from: ₦45,000 per person
```

**Card layout for all service cards:**
- White bg, border `1px solid #E8E8E8`, rounded-2xl, p-8  
- Icon top: 48px SVG in `#2B6BFF`  
- Title: 22px, weight 700, `#111`  
- Description: 15px, `#555`, line-height 1.7  
- Tags/deliverables: small pills, bg `#F0F0F0`, text `#444`, rounded-full  
- Pricing line: `font-size: 13px`, color `#2B6BFF`, weight 600  
- CTA link: "Learn More & Get a Quote →", color `#2B6BFF`, hover underline  
- Hover: `translateY(-6px)`, border-color `#2B6BFF`, shadow-lg  

**Grid:** 3-col desktop, 2-col tablet, 1-col mobile  
AI Strategy card spans full width (featured).

---

### SECTION 5: WEBSITE & APP DEVELOPMENT (DEDICATED SUBSECTION)
**Background:** `#111111` (dark contrast block)  
**Anchor ID:** `#web-and-app`

**Tag:** `DIGITAL DEVELOPMENT`

**Headline:**
```
Your Business Deserves
a Website That Actually Works.
```

**Split layout — two cards side by side:**

**Card Left: Website Development**
- Visual: device mockup showing website (dark bg, blue glow)
- Headline: "Websites That Convert"
- Copy: "Every website we build is mobile-first, SEO-optimised, and designed around one goal: turning visitors into customers."
- Feature list: Custom Design | Fast Loading | SEO Ready | CMS Integration | E-Commerce
- CTA: "See Website Projects →" → links to `/portfolio?filter=web`

**Card Right: App Development**
- Visual: phone mockup (dark, blue glow)
- Headline: "Apps That Perform"
- Copy: "Mobile apps that bring your brand closer to your customers — built for Android and iOS, designed for real users."
- Feature list: Android & iOS | UI/UX Design | ASO | Cross-Platform
- CTA: "Discuss Your App →" → links to `/contact`

📸 **Image:** Use device mockup SVG/CSS frames — avoid generic stock photos here. Use CSS-rendered phone/laptop frames with placeholder screenshots.

---

### SECTION 6: ADD-ON SERVICES
**Background:** `#F9F9F9`  
**Layout:** Horizontal scrollable pill list or 4-column grid

**Label:** `OPTIONAL ADD-ONS`  
**Headline:** "Need Something Extra? We've Got You."

**Add-ons list (pill/badge style):**
Voice-over Integration | Presentation Slides (Animated) | Digital Flyers & Ad Banners | SEO Content Writing | E-Commerce Integration | Landing Page Design | WhatsApp Business Setup | AI Content Calendar | Photography Direction

- Each: rounded-full, border `#E0E0E0`, bg white, `#333` text, `px-5 py-2.5`, hover: border `#2B6BFF`, text `#2B6BFF`

---

### SECTION 7: PROCESS (INLINE ON THIS PAGE)
**Background:** `#0A0A0A` (dark)  
**Anchor ID:** `#process`

**Headline:**
```
How We Work — 
From First Hello to Final Launch
```

**5-step horizontal stepper:**

| Step | Label | Copy |
|------|-------|------|
| 01 | Free Discovery Call | 30 minutes. No pitch. Just listening. We learn exactly what your business needs. |
| 02 | Proposal & Strategy | A tailored scope, timeline, and pricing document — delivered within 48 hours of your call. |
| 03 | Creative Production | Design, development, and content creation. Progress updates every 3 days. |
| 04 | Revisions & Refinement | Two full rounds of revisions included. We don't submit final work until you love it. |
| 05 | Launch & 30-Day Support | Go live with confidence. We monitor, support, and optimise for 30 days post-delivery. |

- Step number: large `#2B6BFF`, 20% opacity, 72px font  
- Connector line: dashed, `#333`  
- Icon: small circle with `#2B6BFF` border on active  

---

### SECTION 8: FAQ (NEW)
**Background:** `#F9F9F9`  
**Layout:** 2-column on desktop (left: headline, right: accordion), 1-col mobile  

**Headline:**
```
Common Questions,
Honest Answers.
```

**FAQ items (AEO optimised — these become rich results on Google):**

**Q: Do you work with businesses outside Nigeria?**
A: Absolutely. We work with clients across Africa and internationally. Our entire process is remote-ready — strategy, design, revisions, and delivery all happen seamlessly online. We've delivered projects to clients in the UK, US, and across West Africa.

**Q: How long does a typical project take?**
A: Brand identity: 2–3 weeks. Website: 3–5 weeks. Full rebrand + website: 6–8 weeks. Motion graphics: 1–2 weeks per video. AI automation setup: 2–4 weeks. Timelines are always confirmed in your proposal before we start.

**Q: What if I don't like the first design concepts?**
A: Every project includes two rounds of revisions as standard. If we're still not aligned after that, we'll have an honest conversation about why — and find a solution. We've never delivered a project a client wasn't happy with.

**Q: Can I pay in instalments?**
A: Yes. We typically work on a 50% upfront, 50% on completion structure. For larger projects, we can discuss a 3-stage payment plan.

**Q: Do you offer monthly retainers?**
A: Yes — digital marketing, social media management, AI maintenance, and content production are all available as monthly retainers. Most retainer clients start from ₦120,000/month. Contact us to discuss what a retainer looks like for your business.

**Q: What is an AI-powered agency?**
A: An AI-powered agency uses artificial intelligence tools to deliver better, faster, and more scalable results. At Daniekeys Studios, our founder is an AI engineer. That means we use AI for content generation, strategy analysis, chatbot deployment, design assistance, and performance analytics — passing the time and cost savings directly to our clients.

- Accordion style: border-bottom `#E5E5E5`, smooth expand/collapse  
- Active: question text `#2B6BFF`, icon rotates 45°  
- Answer: 15px, `#555`, line-height 1.8  

**Add FAQ schema markup** (JSON-LD) for all questions — AEO essential.

---

### SECTION 9: CTA SECTION
**Background:** `#2B6BFF`

**Headline:**
```
Not Sure Which Service You Need?
Let's Figure It Out Together.
```

**Body:**
```
Book a free 30-minute discovery call. We'll ask the right questions, 
understand your business, and tell you honestly what will move the needle.
```

**Buttons:**
```
[Book Free Discovery Call →]   [See Pricing →]
```
- Primary: white bg, `#2B6BFF` text  
- Secondary: transparent, white border + text  

---

## 🖼️ IMAGE PROCUREMENT LIST — SERVICES PAGE

| Use Case | Description | Search Query | Source |
|----------|-------------|--------------|--------|
| Service hero | Abstract dark tech | `"digital technology abstract dark"` | Unsplash: `photo-1518770660439-4636190af475` |
| Web dev section | Developer working | `"web developer coding laptop dark"` | Unsplash: `photo-1461749280684-dccba630e2f6` |
| Branding section | Design desk flatlay | `"brand design desk creative workspace"` | Unsplash: `photo-1558655146-364adaf1fcc9` |
| AI section | Abstract network | `"AI neural network blue abstract"` | Unsplash: `photo-1677442135703-1787eea5ce01` |
| Training section | Workshop group | `"workshop training African professionals"` | Unsplash: `photo-1524178232363-1fb2b075b655` |

---

## 🔍 SEO & AEO — SERVICES PAGE

### Meta Tags
```html
<title>Our Services — Daniekeys Studios | AI Strategy, Brand Design, Web Dev & Motion Graphics Nigeria</title>
<meta name="description" content="Daniekeys Studios offers AI consulting, brand identity design, website development, motion graphics, AI chatbots, and digital marketing for businesses across Nigeria and Africa. Transparent pricing from ₦80,000." />
```

### Structured Data — Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": { "@type": "Organization", "name": "Daniekeys Studios" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Agency Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Digital Strategy & Consulting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motion Graphics & Video Production" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Chatbots & Business Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing & Social Media" } }
    ]
  }
}
```

### Target Keywords for This Page
Primary: `digital agency services Nigeria`, `branding agency Nigeria`, `AI agency services`  
Secondary: `motion graphics Nigeria`, `website design agency Nigeria`, `AI chatbot Nigeria`, `brand identity design Lagos`  
Long-tail: `how much does a website cost in Nigeria`, `best digital agency in Nigeria`, `AI automation for small business Nigeria`

### H-Tag Structure
```
H1: Every Service We Offer Is Designed to Grow Your Business.
H2: Core Services
H3: [Each service name]
H2: Website & App Development
H2: Our Process
H2: Frequently Asked Questions
```

---

## ✅ CRITICAL FIXES CHECKLIST — SERVICES PAGE
- [ ] Remove video background from hero (performance + AEO hit)
- [ ] Add anchor IDs to each service section for direct linking
- [ ] Add 2 new service cards: AI Strategy & AI Automation
- [ ] Add pricing starting-from to every service card
- [ ] Add FAQ section with schema markup
- [ ] Link "Learn More" on each card to a dedicated anchor or sub-section
- [ ] Update email from Gmail to `hello@daniekeysstudios.com`
- [ ] Add process section with anchor `#process` so nav link works on this page
