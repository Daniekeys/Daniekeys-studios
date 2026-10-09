# Daniekeys Studios Website Update: Services, Pricing and Portfolio (October 2026)

This file is an update brief for the existing Daniekeys Studios site (Next.js + Tailwind). The site is already built. Do not rebuild it. Find each section listed below in the codebase and update it in place to match this document.

Work through it in the order of the sections below and stop for review after each one.

---

## 0. What changed and why

1. The studio's focus has shifted. Video is now the lead offer: motion graphics ads, AI-generated UGC ads, AI animation, explainers and story videos. Websites and apps are still a core service.
2. AI chatbots and automation are no longer a service. Every mention of chatbots, WhatsApp/Instagram bots, automation, workflows, "24/7 automation" and "AI agents" must be removed from the site (full checklist in section 9).
3. AI Digital Strategy & Consulting is removed as a standalone service, because its deliverables were mostly chatbot and automation setup.
4. Pricing now has three groups: Website & App Packages, Monthly Video & Content Plans, and One-off Video Projects. The old retainers (Content Starter, Growth Partner, Agency Partner) are replaced.
5. The portfolio now pulls from Cloudinary, so its filter categories must match the Cloudinary folders.

Positioning line (use wherever the site describes the company in one sentence):
"Daniekeys Studios is an AI-powered creative and tech studio. We make motion ads, AI videos and story-led content, and we build websites and apps that convert."

Writing rules for all new copy: no em dashes or en dashes anywhere (use commas, periods or a plain hyphen), no italics, prices always in Naira (₦), write price ranges as "₦95,000 to ₦180,000".

---

## 1. Landing page: Hero

Keep the headline and CTA buttons as they are. Update these parts only.

- Body copy: "Daniekeys Studios combines AI, standout motion design and solid engineering to help businesses across Africa launch faster, look premium and grow."
- Proof-point chips (replace all three):
  1. "3× Brand Lift"
  2. "+64% Lead Flow"
  3. "First Video in 7 Days"
- Remove the "24/7 Automation" chip completely.

---

## 2. Landing page: What We Do (services teaser)

Replace all 6 cards. Keep the same card component, grid and section layout.

- Eyebrow: `// What We Do`
- H2: "Six Ways We Help Your Business Win Online."
- Body: "From scroll-stopping video to websites that convert, every service is built to deliver a measurable return on your investment."

Cards (in this order):

1. **Motion Graphics & Animated Ads** (badge: POPULAR)
   "Animated ads, product launch videos and app promos built to stop the scroll and make people remember your brand."
   Tags: Motion Ads, Product Launch, App Promo

2. **AI Video: UGC Ads & Animation** (badge: NEW)
   "AI-generated UGC ads and animated characters that look like a full production shoot, at a fraction of the cost and time."
   Tags: UGC Ads, AI Animation, Characters

3. **Story & Explainer Videos** (badge: NEW)
   "Brand stories, founder stories, impact films and explainers that make people understand you and trust you fast."
   Tags: Brand Story, Explainers, Impact Films

4. **Website & App Development**
   "Fast, beautiful, mobile-first websites and apps that don't just look impressive. They turn visitors into paying customers."
   Tags: Web Design, E-Commerce, UI/UX, App Dev

5. **Brand Identity & Graphics**
   "Logos, brand kits, flyers, carousels and social graphics that make your business look like it belongs at the top."
   Tags: Logo Design, Brand Kit, Social Graphics

6. **Social Media & Content Management**
   "We plan, create and post video-first content every month, so your channels never go quiet between big moments."
   Tags: Content Calendar, Posting, Storytelling

Each card keeps its "Learn More →" link to `/services`. Section CTA stays: "Explore All Services →".

---

## 3. Landing page: AI Advantage section (rewrite)

This section used to be about chatbots and automation. Rewrite it around AI-powered production. Keep the same layout (text left, visual right, stacked on mobile).

- Eyebrow: `// AI-Powered Studio`
- H2: "Studio-Quality Video Without the Studio Price Tag."
- Body: "Our founder is an AI engineer and a creative director. That means we don't just talk about AI, we use it inside every production. UGC ads without hiring a crowd of creators, animated characters without a full animation team, and finished motion ads in days instead of weeks. You get the quality of a big studio at the speed of a startup."
- Bullet list (checkmark style):
  - **AI UGC Ads**: real-looking creator ads for TikTok, Instagram and Meta campaigns
  - **AI Animation**: original characters and short animated series for your brand
  - **Fast Turnaround**: your first video within 7 working days of a confirmed brief
- CTA: primary button "See Our Video Work →" → `/portfolio`
- Supporting visual: pull one featured video from the Cloudinary `ai-animation` or `ugc-ads` folder instead of a stock image.

---

## 4. Landing page: Featured Work teaser

Show 4 projects pulled from Cloudinary (one each from motion-ads, ugc-ads, ai-animation and explainers-and-stories where available). Section CTA stays "See All Projects →" → `/portfolio`.

Client trust bar under the hero: update the logo row to include newer clients alongside the existing ones. Only show a client logo once Daniel confirms that client is happy to be shown publicly.

Existing: Afriment, Candexa, My Lang Coach, Buymejollof
Candidates to add (confirm each): Cap Wallet, NiMobi Eats, The Digital Ninja Technologies, Medbankr, BGR Consulting, GlobalCareHMS

With more than 6 logos, switch the static row to a slow marquee (the earlier spec said static only because there were 4 logos).

---

## 5. /services page (full replacement of the 8-row accordion)

Page header:
- Eyebrow: `// What We Offer`
- H1: "Every Service We Offer Is Designed to Grow Your Business."
- Supporting line: "We don't sell services. We solve problems. Whether you need a video that stops the scroll, a brand that commands attention or a website that converts, we have the team, the tools and the track record to deliver."
- Stat strip: "50+ Projects · 7 Service Areas · AI-Powered · Pan-African Reach"
- Jump nav tabs: Motion & Ads / AI Video / Story & Explainers / Web & App Dev / Brand & Graphics / Social Media / Training

Core services accordion (7 rows, first one open by default):

**1. Motion Graphics & Animated Ads** (POPULAR)
- Hook: "In a world of infinite scroll, motion is the only language that makes people stop."
- Description: "We design animated ads and launch videos that earn attention and drive action, built for both vertical and widescreen from day one."
- Deliverables: Animated ads for Meta, TikTok and YouTube · Product and app launch videos · App promo videos built from your real UI · Logo reveal and brand intro animations · Event teasers and highlight reels · Every video delivered in 9:16 and 16:9
- Best for: Startups launching an app or product, brands running paid ads, businesses with events.
- Starts from: **₦150,000 per video**
- CTA: "Get a Quote →" → `/contact?service=motion-ads`

**2. AI Video: UGC Ads & Animation** (NEW)
- Hook: "Real-looking creator ads and animated characters, without the shoot."
- Description: "We use AI to produce UGC-style ads and original animated content that would normally need actors, a set and an animation team."
- Deliverables: AI-generated UGC video ads for paid campaigns · Product demo and testimonial-style ads · Original animated brand characters · Short animated series and episodes for social · AI voiceover or your own recorded voice, cleaned and mixed · Captions, music and sound design
- Best for: E-commerce and consumer brands, fintech and crypto apps, distributors and FMCG brands running TikTok and Meta ads.
- Starts from: **₦150,000 per video**
- CTA: "Get a Quote →" → `/contact?service=ai-video`

**3. Story & Explainer Videos** (NEW)
- Hook: "People forget features. They remember stories."
- Description: "We turn your photos, footage and milestones into story-led videos that make people understand what you do and why it matters."
- Deliverables: Brand story films · Founder and personal story videos · Impact and year-in-review films (for companies and NGOs) · Product and service explainers · Event recap stories built from your photos · Speaker quote and stats videos
- Best for: Founders building a personal brand, NGOs speaking to funders, companies with events and milestones to show off.
- Starts from: **₦150,000 per video** (signature story films from ₦950,000)
- CTA: "Get a Quote →" → `/contact?service=story-video`

**4. Website & App Development**
- Hook: "We build websites that look like they cost 10× more than they do."
- Description: "And perform like revenue machines from day one."
- Deliverables: Custom business, portfolio and e-commerce websites · Web apps and platforms (booking, marketplaces, dashboards) · Mobile apps for Android and iOS · Mobile-first, speed-optimised builds · SEO foundations baked in · CMS setup so you can update content yourself · Payment, booking and form integrations · 30-day post-launch support
- Tags: Web Dev, E-Commerce, Web Apps, Mobile Apps
- Best for: Businesses without a website, companies with outdated sites, startups launching a product.
- Starts from: **₦180,000** for websites. Web apps and mobile apps are custom quoted after a free scoping call.
- CTA: "Get a Quote →" → `/contact?service=web-app`

**5. Brand Identity & Graphics**
- Hook: "Your brand is the first thing people judge you by."
- Description: "We make sure that judgement works in your favour, every single time."
- Deliverables: Logo design (primary + variations) · Colour palette and typography system · Brand guidelines document · Animated brand kit (logo animation, lower thirds) · Social media templates · Flyers, carousels, speaker cards and quote cards · Rebrands for businesses that have outgrown their look
- Tags: New Business, Rebranding, Graphics
- Best for: New businesses, growing brands that need a refresh, startups preparing to raise.
- Starts from: **₦120,000** (rebrands from ₦250,000, animated brand kit ₦400,000)
- CTA: "Get a Quote →" → `/contact?service=brand-graphics`

**6. Social Media & Content Management**
- Hook: "Being online isn't enough. Being seen every week is."
- Description: "You send us your photos and updates. We turn them into a steady flow of videos and graphics, and we can post them for you too."
- Deliverables: Monthly content calendar · Story-led videos and graphics every month · Scheduling and posting · Monthly performance report · Monthly strategy call (on higher plans)
- Best for: Busy businesses and NGOs whose channels go quiet between events and launches.
- Starts from: **₦500,000/month** (see Monthly Plans on `/pricing`, NGO rates available)
- CTA: "See Monthly Plans →" → `/pricing#monthly-plans`

**7. AI Creative Training**
- Hook: "The biggest barrier to using AI well isn't the tools. It's knowing how."
- Description: "We train founders, executives and teams to create content with AI themselves."
- Programmes: AI video creation for founders and executives (1-on-1 or small group) · Corporate AI upskilling for teams of 5+ · Motion graphics and AI video fundamentals · Custom workshops for organisations
- Tags: Workshops, Corporate, 1-on-1, AI Video
- Best for: Founders and C-suite who want to show up on video, marketing teams, organisations adopting AI.
- Starts from: **₦45,000 per person** (corporate and 1-on-1 sessions custom quoted)
- CTA: "Get a Quote →" → `/contact?service=training`

Removed from this page: "AI Digital Strategy & Consulting", "AI Chatbots & Business Automation", "Digital Marketing & Social Media Management" (replaced by row 6), and the separate "Rebranding" row (folded into row 5).

Digital Development Spotlight: keep "Websites That Convert" and "Apps That Perform" exactly as they are.

Optional Add-Ons (replace the list): Rush delivery (48 to 72 hours) · Extra aspect ratio or cut-down versions · Human voice-over artist · Second language version (e.g. French, Yoruba, Hausa) · Animated presentation slides · Digital flyers and ad banners · SEO content writing · Landing page design · Photography direction

FAQ (update these answers, keep the others):
- "What is an AI-powered studio?" → "It means AI is built into how we produce. We use it to make UGC ads, animation and motion content faster and at lower cost than a traditional studio, while our team handles the story, design and final quality."
- "How fast can you deliver a video?" (new question) → "Your first video is usually ready within 7 working days of a confirmed brief. Rush delivery is available as an add-on."
- "Do you offer monthly retainers?" → "Yes. Our Monthly Video & Content Plans give you a set number of videos and graphics every month. See the Pricing page."

Remove the FAQ answer text that mentions "chatbot automation".

CTA band: keep as is.

---

## 6. /pricing page

Page header: keep the headline "Honest Prices. No Hidden Fees. No Surprises." and the trust chips.

Top tabs (replace the old "Complete Packages / Individual Services" pair):
**Website & App Packages** (default) · **Monthly Video & Content Plans** · **One-off Video Projects**

Each tab gets an anchor so other pages can link to it: `#packages`, `#monthly-plans`, `#video-projects`.

### Tab 1: Website & App Packages

Prices and timelines stay the same. Only the "Included" lists change.

**Starter Package**
- Description: "Best for getting your brand online fast."
- Price: **₦95,000 to ₦180,000** · One-time · "Final price depends on scope"
- Included: Logo refinement · Landing page consultation · 6 social media post designs · 1 motion graphics video (30s) · Caption writing for posts · Light content strategy guide
- Best for: New businesses, side projects, personal brands starting out.
- Timeline: 1 to 2 weeks
- CTA: "Get Started →" → `/contact?package=starter`

**Business Package** (Most Popular)
- Description: "A complete online presence that drives real results."
- Price: **₦250,000 to ₦650,000** · One-time · "Final price depends on scope"
- Included: Custom landing page website · Starter brand kit (logo, colours, fonts) · 10 to 15 social media post designs · 3 to 5 motion graphics videos · Social media profile optimisation · 30-day content calendar · Hashtag and SEO research · 2 rounds of revisions · 30-day post-delivery support
- Best for: Established small businesses, funded startups, growing brands.
- Timeline: 3 to 4 weeks
- CTA: "Get Started →" → `/contact?package=business`

**Premium Package**
- Description: "Full-scale transformation for serious growth."
- Price: **₦700,000 to ₦3,000,000** · One-time · "Final price depends on scope"
- Included: Full custom website (5 to 7 pages) · E-commerce or booking integration (if needed) · UI/UX design system · Complete brand identity system · Animated brand kit (logo animation, lower thirds) · 20 to 30 social media posts · 6 motion graphics videos · Website copywriting · SEO setup (on-page + technical) · Marketing strategy document · 60-day post-delivery support · 3 rounds of revisions
- Best for: Established businesses, corporate rebrands, investor-facing startups.
- Timeline: 6 to 10 weeks
- CTA: "Get Started →" → `/contact?package=premium`

Removed from Premium: "AI chatbot setup (WhatsApp / Website)".

Below the cards, add a callout: **"Building a Web App or Mobile App?"** "Platforms, marketplaces, booking systems and mobile apps are scoped individually. Book a free scoping call and we'll send a clear quote and timeline." CTA: "Book a Scoping Call →" → `/contact?service=web-app`

Keep the "Need Something Bespoke?" callout and fine print.

### Tab 2: Monthly Video & Content Plans

- H2: "Show Up Every Week. Pay Monthly."
- Body: "You send us your photos, footage and updates. We send a script within 48 hours, then ready-to-post videos and graphics, so your audience sees your work every week."

**Lite**: **₦500,000/month**
- 4 videos a month
- Story-led videos from your photos and footage
- Every video in 9:16 and 16:9
- Captions, music and sound design
- Best for: Businesses that want a steady video presence.
- CTA: "Get Started →" → `/contact?plan=lite`

**Pro** (Most Popular): ~~₦1,000,000~~ **₦800,000/month** (introductory rate for your first 3 months)
- 8 videos a month: 1 signature storyline film, 3 event or update recaps, 2 quote videos, 2 stats or teaser videos
- Monthly content calendar
- 72-hour turnaround after events
- Monthly performance report
- Best for: Brands with regular events, launches or news to share.
- CTA: "Get Started →" → `/contact?plan=pro`

**Premium**: **₦1,200,000/month**
- 20 pieces of content a month: the full Pro video mix plus 12 graphics (flyers, carousels, speaker cards, quote cards)
- We schedule and post for you
- Monthly strategy call
- Free animated brand kit (logo animation, lower thirds) in month one
- Best for: Companies that want their social media fully handled.
- CTA: "Get Started →" → `/contact?plan=premium`

Fine print: "Plans are billed monthly with a 3-month minimum term. NGOs and nonprofits can ask about our NGO rates."

Implementation note: the Pro card needs a strikethrough original price next to the live price. Add a `compareAtPrice` prop to the Package/Retainer Card component if it doesn't exist yet.

Removed: the old retainers Content Starter (₦120,000), Growth Partner (₦250,000) and Agency Partner (₦500,000), including their "AI content pipeline setup" and "AI chatbot maintenance" items.

### Tab 3: One-off Video Projects

Simple card or table layout, not the full package card:

| Project | Price |
|---|---|
| Single video (motion ad, UGC ad, explainer, story video or event reel) | from ₦150,000 |
| Animated brand kit (logo animation, lower thirds, brand motion elements) | ₦400,000 |
| Signature story or impact film (60 to 90 seconds, fully scripted and voiced) | ₦950,000 |

Note under the table: "Every video is delivered in 9:16 and 16:9. Your first video is usually ready within 7 working days of a confirmed brief."
CTA: "Start a Video Project →" → `/contact?service=video-project`

### Payment Flexibility (update)
- **50/50**: 50% upfront to begin, 50% on final delivery, standard for most projects
- **3-Stage**: for projects above ₦500,000, 40% at start, 30% at midpoint, 30% on delivery
- **Monthly Plans**: billed monthly in advance, 3-month minimum term
- International note stays: "We accept payment via Wise, PayPal and direct bank transfer in USD, GBP, EUR and NGN."

### Pricing FAQ (update)
- Q6 "What's the minimum project budget?" → "Our Starter Package begins at ₦95,000 and single videos start at ₦150,000. For anything smaller, let's talk."
- Q5 "Do you offer discounts for NGOs or nonprofits?" → "Yes. We have dedicated NGO rates for monthly content and storytelling. Reach out and we'll share them."
- Add: "Can I switch between monthly plans?" → "Yes. You can move up or down a plan at the end of any month after your first 3 months."

### Landing page pricing teaser (update)
Change the 3 blocks to show one entry point per group:
1. **Websites** from ₦95,000
2. **Monthly Video Plans** from ₦500,000/month (Most Popular)
3. **Single Videos** from ₦150,000

CTA stays "See Full Pricing →" → `/pricing`.

---

## 7. /portfolio page

The portfolio now reads from the Cloudinary folder `DANIEKEYS_STUDIOS_PORFOLIO`. Filter tabs must match the folders:

**All / Motion Ads / AI Animation / UGC Ads / Explainers & Stories / Graphics / Web & Apps / More Work**

| Filter label | Cloudinary folder |
|---|---|
| Motion Ads | motion-ads |
| AI Animation | ai-animation |
| UGC Ads | ugc-ads |
| Explainers & Stories | explainers-and-stories |
| Graphics | graphics |
| More Work | root (uncategorised) |
| Web & Apps | keep the existing website project cards (not from Cloudinary yet) |

Remove the old filters (Branding / Motion / Web / Marketing).

Web & Apps cards to keep or add (confirm before publishing): Afriment platform, Canvarch (canvarch.com), Candexa, Slam Dunk e-commerce site, GlobalCareHMS website (once live).

Page header body: "Real projects. Real clients. Real results. Motion ads, AI videos, stories and the websites behind them."

---

## 8. /contact page and footer

Contact form "Service Interested In" dropdown (replace options):
Motion Graphics & Animated Ads · AI Video (UGC Ads & Animation) · Story & Explainer Videos · Website & App Development · Brand Identity & Graphics · Social Media & Content Management · Monthly Video Plan · AI Creative Training · Not Sure Yet

Project Budget dropdown (replace options):
Under ₦150,000 · ₦150,000 to ₦500,000 · ₦500,000 to ₦1,000,000 · ₦1,000,000+ · Monthly plan · Let's Discuss

Query-param pre-fill: add support for `?plan=` (lite, pro, premium) alongside the existing `?service=` and `?package=`. Map the new service slugs: motion-ads, ai-video, story-video, web-app, brand-graphics, social-media, training, video-project. Remove `?retainer=` handling and the old slugs ai-strategy and ai-automation.

Footer "Services" column (replace links):
Motion Graphics & Ads · AI Video & UGC Ads · Story & Explainer Videos · Website & App Development · Brand Identity & Graphics · Social Media Management

All link to `/services` with the matching anchor.

---

## 9. Automation removal checklist

Search the whole codebase (components, page copy, metadata, SEO descriptions, alt text, structured data, sitemap, OG images text) for these terms and remove or rewrite every hit:

- chatbot, chat bot, AI agent, AI agents
- automation, automate, automated, workflow
- WhatsApp bot, Instagram DM, DM automation, auto-replies
- 24/7 (when it refers to automation)
- "without extra headcount", "works 24/7 and never asks for a salary"
- AI Digital Strategy, AI readiness audit, AI roadmap
- AI content pipeline, AI chatbot maintenance, AI chatbot setup
- CRM integration, lead capture (when it refers to bots)

Keep: the WhatsApp contact button and links (`wa.me/2349030909624`), since that's a contact channel, not a service.

Also update:
- Site meta description: "Daniekeys Studios is an AI-powered creative and tech studio in Nigeria. Motion ads, AI UGC videos, story videos, websites and apps for brands across Africa."
- About page pillars: change "AI-Powered: We use AI to deliver faster, smarter, and more scalable results." to "AI-Powered: We use AI to produce studio-quality video and design, faster and at a better price."
- About page timeline entry "The AI Shift": change the description to "Began building AI into our production, from AI-generated UGC ads to animated characters, well ahead of the market."

---

## 10. Done when

- [ ] No chatbot or automation wording anywhere on the live site (run the section 9 search again after changes, it should return zero service-related hits)
- [ ] Landing services grid shows the 6 new cards in the right order
- [ ] /services shows exactly 7 rows with correct prices
- [ ] /pricing has the 3 tabs with working anchors, and the Pro plan shows the strikethrough price
- [ ] Old retainer names (Content Starter, Growth Partner, Agency Partner) appear nowhere
- [ ] Portfolio filters match the Cloudinary folders
- [ ] Contact dropdowns and query-param pre-fill work for every new slug
- [ ] No em dashes or en dashes in any new copy
- [ ] Desktop and mobile (375px) screenshots of /, /services and /pricing shared for review

## Open items for Daniel to confirm before going live

1. Which newer clients can appear in the logo bar and portfolio (Cap Wallet, NiMobi Eats, Digital Ninja, Medbankr, BGR, GlobalCareHMS).
2. The Monthly Plans use the same prices as the BGR rate card. Confirm these are the public prices or adjust.
3. Training price (₦45,000 per person) is carried over from the old site. Confirm it still stands.
