# 24 — PAGE: /contact

Batch scope: the full Contact page — the simplest sub-page, build last.

## Page Header
- Eyebrow: `// Get In Touch`
- H1: **"Not Sure Which Service You Need? Let's Figure It Out Together."** (adapted from the real site's services-page closing CTA — fits naturally as a contact-page headline too) — or the simpler alternative: **"Let's Build Something That Actually Works."** (adapted from the real homepage closing CTA). Pick one; both are on-brand.
- Supporting line: "Book a free 30-minute discovery call. No jargon. No hard sell. Just an honest conversation about your business and what will actually move the needle."

## Section: Contact Form + Info (two-column layout, form left ~60%, info sidebar right ~35%)

### Form fields (per `04-COMPONENTS-SHARED.md` Form Fields component)
- Full Name (text, required)
- Email (email, required)
- Phone Number (tel, optional)
- Service Interested In (select — options: AI Digital Strategy, Brand Identity & Design, Website & App Development, Motion Graphics & Video, AI Chatbots & Automation, Digital Marketing, Rebranding, Training, Not Sure Yet)
- Project Budget (select, optional — ranges matching the real pricing tiers: Under ₦100,000 / ₦100,000–₦300,000 / ₦300,000–₦700,000 / ₦700,000+ / Let's Discuss)
- Message (textarea, required) — placeholder: "Tell us about your business and what you're looking to achieve..."
- Submit button (primary Button variant): "Send Message →"
- Note: if the URL includes a `?service=`, `?package=`, or `?retainer=` query param (from links elsewhere on the site, per the `/services` and `/pricing` page CTAs), pre-fill the relevant form field automatically so the person doesn't have to re-select what they already indicated interest in.

### Info sidebar
- **Email**: hello@daniekeysstudios.com (mailto link)
- **Phone**: +234 903 090 9624 (tel link)
- **Location**: Nigeria (serving Pan-Africa & globally)
- **Hours**: Mon–Fri 9am–6pm WAT
- **WhatsApp CTA** (secondary button): "WhatsApp Us Now →" → `https://wa.me/2349030909624?text=Hello!%20I%27d%20like%20to%20discuss%20a%20project.`
- **Social links**: Instagram, LinkedIn, YouTube, Facebook (same real links as the footer)
- Optional: a small map embed or location visual if useful, not required (agency serves remotely across Africa, physical address wasn't published in the source content — don't invent a street address).

## CTA reinforcement (bottom of page, optional)
- Small trust line: "★★★★★ Rated 5.0 by 30+ clients on Google" with link to reviews, reinforcing credibility right before/after the form.

## Mobile
- Form and info sidebar stack (form first, then contact info below).
- Form fields full-width.

## Batch Checklist
- [ ] All form fields present and functional (even if backend submission isn't wired up yet — flag that clearly if the form doesn't actually send anywhere)
- [ ] Query-param pre-fill works for `?service=`, `?package=`, `?retainer=` links coming from `/services` and `/pricing`
- [ ] Contact info matches real Daniekeys details exactly (email, phone, hours)
- [ ] WhatsApp link uses the correct real number and pre-filled message
- [ ] No invented physical street address
