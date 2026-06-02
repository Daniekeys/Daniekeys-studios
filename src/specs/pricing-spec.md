# pricing-spec.md
## Page: `/pricing` — Pricing Page
### Daniekeys Studios Website Revamp

---

## 🎯 PAGE OBJECTIVE
Convert hesitant visitors into paying clients by removing price anxiety, clearly communicating value, and making the next step feel low-risk. This page must also serve as a trust signal — the fact that prices are public is itself a differentiator in the Nigerian agency market.

---

## 🎨 BRAND TOKENS
Refer to homepage-spec.md for full token list.
Key: primary `#111111`, accent-blue `#2B6BFF`, secondary `#818181`, primary-white `#F9F9F9`

---

## 🧱 SECTION-BY-SECTION SPECIFICATION

---

### SECTION 1: NAV BAR
Same nav component. "Pricing" active state.

---

### SECTION 2: PAGE HERO
**Background:** `#111111`, `py-28`

**Breadcrumb:** `Home / Pricing`

**Tag badge:** `[TRANSPARENT PRICING]` — `#9DBAFF`, border `#2B6BFF`

**Headline (REWRITTEN):**
```
Honest Prices.
No Hidden Fees.
No Surprises.
```
- 64px desktop / 40px mobile, weight 800, `#F9F9F9`  
- "No Surprises." — `#2B6BFF`

**Subhead:**
```
We publish our prices because we respect your time. Most agencies make you 
jump on a call just to tell you it's expensive. We don't do that. 
Here's exactly what things cost — and what you get for every naira.
```
- 18px, `#818181`, max-width 600px

**Trust signals row:**
```
✓ No hidden fees    ✓ Transparent deliverables    ✓ Flexible payment plans    ✓ Free first consultation
```
- 13px, `#818181`, flex row with `•` separator

---

### SECTION 3: PACKAGE TOGGLE
**Background:** `#F9F9F9`

**Toggle:** "Complete Packages" | "Individual Services"
- Pill toggle, active side: bg `#111`, white text; inactive: bg `#E0E0E0`, `#666` text  
- Default: Complete Packages selected  
- Smooth content transition on toggle  

---

### SECTION 4A: COMPLETE PACKAGES (DEFAULT VIEW)
**Layout:** 3 cards + 1 custom CTA — 3-col desktop, 1-col mobile  
**Background:** `#F9F9F9`

#### Card 1: Starter Package
```
STARTER
━━━━━━━━━━━━━━━━━━━━━━━━━
Best for getting your brand online fast.

₦95,000 – ₦180,000
One-time

──────────────────────────────

What's included:
✓ Brand touch-up (logo refinement)
✓ 6 social media post designs
✓ 1 motion graphics video (30s)
✓ Basic page optimisation
✓ Caption writing for posts
✓ Light content strategy guide
✓ Landing page consultation (advisory only)

──────────────────────────────

Best for: New businesses, side projects, 
personal brands starting out.

Timeline: 1–2 weeks

[Get Started →]
```
- Card bg: white, border `1px solid #E5E5E5`, rounded-2xl  
- Price: 36px, weight 800, `#111`  
- Range note: 13px, `#818181` — "Final price depends on scope"  

#### Card 2: Business Package *(FEATURED — "Most Popular")*
```
BUSINESS  ⭐ Most Popular
━━━━━━━━━━━━━━━━━━━━━━━━━
Complete digital package that drives real results.

₦250,000 – ₦650,000
One-time

──────────────────────────────

What's included:
✓ Landing page website (custom design)
✓ 10–15 social media post designs
✓ 3–5 motion graphics videos
✓ Starter brand kit (logo, colours, fonts)
✓ Social media optimisation (all platforms)
✓ 30-day content calendar
✓ Hashtag & SEO research
✓ 2 rounds of revisions
✓ 30-day post-delivery support

──────────────────────────────

Best for: Established small businesses, 
funded startups, growing brands.

Timeline: 3–4 weeks

[Get Started →]
```
- Card bg: `#111`, border `2px solid #2B6BFF`  
- All text: white / `#9DBAFF` for body  
- Price: `#2B6BFF`  
- "Most Popular" badge: `#2B6BFF` bg, white text, rounded-full, positioned top-right  
- Slightly elevated: `shadow-2xl`, `scale(1.03)` on desktop  

#### Card 3: Premium Package
```
PREMIUM
━━━━━━━━━━━━━━━━━━━━━━━━━
Full-scale transformation for serious growth.

₦700,000 – ₦3,000,000
One-time

──────────────────────────────

What's included:
✓ Full website (5–7 pages, custom)
✓ E-commerce integration (if needed)
✓ Complete brand identity system
✓ 20–30 social media posts
✓ 6 motion graphics videos
✓ Marketing strategy document
✓ SEO setup (on-page + technical)
✓ Website copywriting
✓ UI/UX design system
✓ AI chatbot setup (WhatsApp / Website)  ← NEW
✓ 60-day post-delivery support
✓ 3 rounds of revisions

──────────────────────────────

Best for: Established businesses, corporate 
rebrands, investor-facing startups.

Timeline: 6–10 weeks

[Get Started →]
```
- Card bg: white, border `1px solid #E5E5E5`  
- Add the AI chatbot line to Premium — this is a real value differentiator  

#### Custom CTA Card (4th position):
```
┌─────────────────────────────┐
│  🧩 Need Something Bespoke? │
│                             │
│  Every business is          │
│  different. If none of      │
│  these fit your goals,      │
│  we'll build you a custom   │
│  scope from scratch.        │
│                             │
│  No obligation. No hard     │
│  sell. Just an honest       │
│  conversation.              │
│                             │
│  [Get Custom Quote →]       │
└─────────────────────────────┘
```
- bg: `#F0F0F0`, dashed border `#C0C0C0`, rounded-2xl  
- Icon: puzzle piece, `#2B6BFF`  
- Button: solid `#2B6BFF`

**Pricing note below all cards:**
```
💡 Final pricing depends on project complexity, number of revisions, and timeline. 
Ranges shown represent standard scope. We'll confirm your exact price before any work begins.
```
- 13px, `#818181`, bg `#F5F5F5`, rounded-xl, p-4, border-left 3px `#2B6BFF`

---

### SECTION 4B: INDIVIDUAL SERVICES (TOGGLE VIEW)
**Show when "Individual Services" is selected**

**Layout:** Clean table / card list

```
SERVICE                          STARTING FROM      TIMELINE
────────────────────────────────────────────────────────────
Logo Design                      ₦45,000            3–5 days
Full Brand Identity System        ₦120,000           2–3 weeks
Website (Landing Page)            ₦80,000            1–2 weeks
Website (Full — 5 pages)          ₦250,000           4–6 weeks
E-commerce Website                ₦350,000           5–8 weeks
Motion Graphics Video (30s)       ₦45,000            5–7 days
Motion Graphics Video (60–90s)    ₦80,000            7–10 days
Explainer Video                   ₦100,000           1–2 weeks
Social Media Post Designs (10)    ₦40,000            3–5 days
Social Media Management (monthly) ₦120,000/mo        Ongoing
Digital Marketing (monthly)       ₦150,000/mo        Ongoing
Rebranding Package                ₦250,000+          4–6 weeks
AI Chatbot Setup                  ₦150,000           2–4 weeks
AI Strategy Consultation          ₦50,000/session    1 day
Corporate AI Training             ₦200,000+          Custom
App Development (mobile)          ₦500,000+          8–12 weeks
```

- Table: clean, `border-bottom: 1px solid #F0F0F0` per row  
- Alternating row bg: white / `#FAFAFA`  
- Starting From: `#2B6BFF`, weight 600  
- Timeline: `#818181`, italic  
- Hover row: bg `#F5F8FF`  
- On mobile: Convert to card list (SERVICE name + price + timeline stacked)  

**Below table:**
```
All prices are in Nigerian Naira (₦). International clients — we accept USD, GBP, and EUR. 
Contact us for FX rates and international payment options.
```
- 13px, `#818181`

---

### SECTION 5: RETAINER / MONTHLY SERVICES (NEW SECTION)
**Background:** `#111111`  
**Layout:** 3 cards

**Label:** `MONTHLY RETAINERS`  
**Headline:** "Grow Consistently. Pay Monthly."  
**Subhead:** "For businesses that want reliable, ongoing results without managing it themselves."

#### Retainer Card 1: Content & Social
```
CONTENT STARTER
━━━━━━━━━━━━━━
₦120,000 / month

→ 12 social media posts/month
→ Caption writing & hashtag strategy
→ 1 short motion graphics video/month
→ Monthly performance report

Best for: Businesses wanting consistent online presence
```

#### Retainer Card 2: Growth Partner *(Featured)*
```
GROWTH PARTNER  ⭐ Most Popular
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
₦250,000 / month

→ 20 social media posts/month
→ 3 short videos / reels/month
→ Paid ads management (Meta + Google)
→ SEO monitoring & updates
→ AI content pipeline setup
→ Weekly strategy call (30 min)
→ Monthly analytics & recommendations report

Best for: Growing businesses ready to scale their online presence
```
- Dark card `#0D0D0D`, border `#2B6BFF`

#### Retainer Card 3: Agency Partner
```
AGENCY PARTNER
━━━━━━━━━━━━━━
₦500,000 / month

→ Full content production (30 posts/month)
→ 5 videos/month
→ Multi-platform ad campaigns
→ AI chatbot maintenance
→ Full SEO management
→ Bi-weekly strategy calls
→ Dedicated account manager
→ Priority turnaround on all requests

Best for: Established businesses, funded startups, 
companies preparing for scale
```

**Retainer note:**
```
All retainer packages are billed monthly, cancel anytime after 3 months.
Minimum initial term: 3 months.
```
- 13px, `#818181`

---

### SECTION 6: PAYMENT PLAN (TRUST BUILDER)
**Background:** `#F9F9F9`  
**Layout:** 2-col or centered

**Headline:** "Flexible Payment — So Cash Flow Never Slows Your Growth"

**3 payment options:**

| Option | How it works |
|--------|-------------|
| 50/50 | 50% upfront to begin, 50% on final delivery — standard for most projects |
| 3-Stage | For projects above ₦500,000 — 40% start / 30% midpoint / 30% delivery |
| Retainer | Monthly billing, due on the 1st of each month |

- Table: clean, white bg, border `#E5E5E5`  

**International payments note:**
```
🌍 International clients: We accept payment via Wise (TransferWise), PayPal, 
and direct bank transfer in USD, GBP, EUR, and NGN.
```

---

### SECTION 7: FAQ — PRICING SPECIFIC
**Background:** `#F9F9F9`

**Headline:** "Questions About Pricing"

**Q: Why is there a price range instead of a fixed price?**  
A: Because every project is different. A logo for a solo coach and a logo for a 50-person company have very different requirements. Ranges let you know the ballpark — your exact quote is confirmed before we start, with full itemisation.

**Q: What happens if my project goes over scope?**  
A: We agree on scope before we begin. If you request additions beyond the agreed brief, we'll send a change request with the cost — no surprises, no invoice shock.

**Q: Are revisions included?**  
A: Yes. Starter includes 2 rounds. Business includes 2 rounds. Premium includes 3 rounds. Retainer clients have unlimited minor revisions on monthly deliverables.

**Q: Can I start with a small package and upgrade later?**  
A: Absolutely — and many of our best long-term clients started with the Starter Package. All previous work is considered when upgrading so we build on it, not restart.

**Q: Do you offer discounts for NGOs or nonprofits?**  
A: Yes — we offer 15% discounts for registered NGOs and community organisations. Mention this when you contact us.

**Q: What's the minimum project budget you'll take on?**  
A: Our minimum project value is ₦45,000 (single logo design). For new clients, we recommend the Starter Package at ₦95,000+ to get meaningful results.

- Accordion style, consistent with services-spec  
- Add FAQ schema markup  

---

### SECTION 8: CTA
**Background:** `#2B6BFF`

**Headline:**
```
Not Sure Which Package Is Right?
Let's Talk — It's Free.
```

**Body:**
```
Book a 30-minute discovery call. We'll understand your goals, 
recommend the right solution, and give you an exact quote — 
no obligation, no pressure.
```

**Buttons:**
```
[Book Free Call →]   [WhatsApp Us →]
```
- WhatsApp link: `https://wa.me/2349030909624?text=Hello!%20I%27d%20like%20to%20discuss%20a%20project.`

---

## 🖼️ IMAGE PROCUREMENT — PRICING PAGE
Pricing page is mostly text/data — no hero images needed.  
Use subtle background textures:
- Pricing card section: clean white/light gray  
- Dark sections: `#111111` solid, subtle dot grid pattern overlay (CSS)  
- No photographic images required on this page

---

## 🔍 SEO & AEO — PRICING PAGE

### Meta Tags
```html
<title>Pricing — Daniekeys Studios | Brand Design, Web Dev & AI Services Nigeria</title>
<meta name="description" content="Transparent pricing for branding, website development, motion graphics, AI chatbots, and digital marketing. Packages from ₦95,000. No hidden fees. Serving Nigeria and Africa." />
```

### Schema — Offer / Product
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Business Package — Daniekeys Studios",
  "description": "Complete digital package including landing page website, social media designs, motion graphics, and brand kit.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "NGN",
    "priceRange": "250000-650000",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Daniekeys Studios" }
  }
}
```

### H-Tag Structure
```
H1: Honest Prices. No Hidden Fees. No Surprises.
H2: Complete Packages
H3: Starter / Business / Premium / Custom
H2: Individual Services
H2: Monthly Retainers
H2: Flexible Payment Options
H2: Questions About Pricing
```

### Target Keywords
`digital agency pricing Nigeria`, `branding cost Nigeria`, `website design price Nigeria`, `how much does branding cost Nigeria`, `affordable digital agency Nigeria`, `motion graphics cost Nigeria`

---

## ✅ CRITICAL FIXES CHECKLIST — PRICING PAGE
- [ ] Fix footer location: currently says "Lagos" on pricing page but "Ilorin" on homepage — standardise to "Nigeria"
- [ ] Add retainer/monthly packages (currently MISSING from pricing page entirely)
- [ ] Add individual services pricing table
- [ ] Add AI Chatbot to Premium package
- [ ] Add payment options section
- [ ] Add FAQ with schema markup
- [ ] Add international payments note
- [ ] Replace Gmail in footer with `hello@daniekeysstudios.com`
- [ ] Fix broken Privacy Policy and Terms links
- [ ] Add WhatsApp CTA with pre-filled message link
