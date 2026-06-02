# contact-spec.md
## Page: `/contact` — Contact Page
### Daniekeys Studios Website Revamp

---

## 🎯 PAGE OBJECTIVE
Make it as easy as possible for a warm lead to take the next step. Remove friction from the enquiry process. Every visitor who reaches this page has intent — the page's job is to not waste it. There should be zero ambiguity about what happens next after they submit.

---

## 🎨 BRAND TOKENS
Refer to homepage-spec.md for full token list.
Key: primary `#111111`, accent-blue `#2B6BFF`, secondary `#818181`, primary-white `#F9F9F9`

---

## 🧱 SECTION-BY-SECTION SPECIFICATION

---

### SECTION 1: NAV BAR
Same nav component. "Contact" active state.

---

### SECTION 2: PAGE HERO
**Background:** `#111111`, `py-24`  
**No video background** (current site has hero-video.mp4 here — remove for performance)

**Breadcrumb:** `Home / Contact`

**Tag badge:** `[LET'S TALK]` — `#9DBAFF`, border `#2B6BFF`

**Headline (REWRITTEN):**
```
Every Great Project
Starts With a
Conversation.
```
- 64px desktop / 40px mobile, weight 800, `#F9F9F9`  
- "Conversation." — `#2B6BFF`

**Subhead:**
```
Tell us what you're building. We'll tell you exactly how we can help — 
and what it'll cost. Honest, transparent, and always worth the call.
```
- 18px, `#818181`, max-width 540px

**Contact Method Pills (quick links below subhead):**
```
[📞 Call Now]   [💬 WhatsApp]   [📧 Email]   [📅 Book a Call]
```
- Pill buttons, bg `#1A1A1A`, border `#333`, text `#F9F9F9`  
- Hover: bg `#2B6BFF`, border `#2B6BFF`  
- Font: 14px, flex with icon  
- WhatsApp: `https://wa.me/2349030909624?text=Hello!%20I%27d%20like%20to%20discuss%20a%20project%20with%20Daniekeys%20Studios.`

---

### SECTION 3: MAIN CONTACT LAYOUT
**Background:** `#F9F9F9`  
**Layout:** 55% form left, 45% info right (desktop). Stack on mobile: form top, info bottom.

---

#### LEFT SIDE: PROJECT ENQUIRY FORM

**Form title:**
```
Start Your Project
```
- 28px, weight 700, `#111`

**Subtitle:**
```
Fill in a few details and we'll get back to you within 24 hours 
with a tailored response — not a generic auto-reply.
```
- 14px, `#818181`

**Form Fields:**

**Row 1: Full Name + Email (side by side on desktop, stacked mobile)**
```
Full Name *
─────────────────────────────────────
[                                   ]

Email Address *
─────────────────────────────────────
[                                   ]
```

**Row 2: Phone + Company (side by side)**
```
Phone Number (WhatsApp preferred)
─────────────────────────────────────
[                                   ]

Company / Brand Name
─────────────────────────────────────
[                                   ]
```

**Row 3: Service Dropdown**
```
What do you need help with? *
────────────────────────────────────────
[▼ Select a service                    ]
```
Options:
- AI Digital Strategy & Consulting  *(NEW)*
- Brand Identity Design (New brand)
- Rebranding (Existing brand refresh)
- Website Design & Development
- E-commerce Website
- Mobile App Development
- Motion Graphics & Video Production
- AI Chatbot & Automation Setup  *(NEW)*
- Digital Marketing & Social Media (Monthly)
- Training & Upskilling Workshop
- Full Business Package (Multiple services)
- Not sure yet — let's talk

**Row 4: Budget Dropdown**
```
Budget Range *
────────────────────────────────────────
[▼ Select your budget                  ]
```
Options:
- Under ₦100,000
- ₦100,000 – ₦300,000
- ₦300,000 – ₦650,000
- ₦650,000 – ₦1,500,000
- Above ₦1,500,000
- Let's discuss / Custom
- International budget (USD/GBP/EUR)

**Row 5: Timeline Dropdown**
```
When do you need this?
────────────────────────────────────────
[▼ Select timeline                     ]
```
Options:
- Urgently (within 1 week)
- Within 1 month
- 1–3 months
- 3+ months
- Planning / Exploring options

**Row 6: Project Details**
```
Tell us about your project *
────────────────────────────────────────────────────────
[                                                       ]
[                                                       ]
[   Describe your business, what you need, and what    ]
[   success looks like for you.                        ]
[                                                       ]
```
- Textarea, min-height 120px, resize vertical  
- Placeholder: "e.g. We are a food delivery startup in Lagos looking for a complete brand identity and landing page website. We're launching in 3 months and need something that feels premium and trustworthy..."

**Row 7: How did you hear about us?**
```
How did you find us? (Optional)
────────────────────────────────────────
[▼ Select                              ]
```
Options: Google Search | Instagram | LinkedIn | Referral | YouTube | Facebook | Other

**Submit Button:**
```
[Send My Project Details →]
```
- Full width, bg `#2B6BFF`, white text, py-4, font-size 16px, weight 600  
- Hover: `#5F8EFB`  
- Loading state: "Sending..." with spinner  
- Disabled state: lighter blue when form invalid

**After Submit — Success State:**
```
✅  Message Received!

Thanks, [First Name]! We've received your project details and 
will get back to you within 24 hours with a personalised response.

In the meantime:
→  Follow us on Instagram for latest work @daniekeys_studios
→  Check out our portfolio to see recent projects
→  WhatsApp us directly if it's urgent: +234 903 090 9624
```
- Replace form with success card  
- Green checkmark icon, animated  
- bg: `#F0FFF4`, border `#22C55E`

**Form Field Styles:**
- Labels: 13px, weight 500, `#333`, margin-bottom 6px  
- Inputs: bg white, border `1px solid #E0E0E0`, rounded-lg, px-4 py-3, font-size 15px  
- Focus: border-color `#2B6BFF`, box-shadow `0 0 0 3px rgba(43,107,255,0.1)`  
- Error: border-color `#EF4444`, error message 12px `#EF4444` below field  
- Required `*`: `#2B6BFF`

---

#### RIGHT SIDE: CONTACT INFO PANEL

**Panel bg:** `#111`, rounded-2xl, p-8

**Title:**
```
Other Ways to Reach Us
```
- 20px, weight 600, white

**Contact methods (cards within panel):**

```
📞  Phone / WhatsApp
    +234 903 090 9624
    Available Mon–Sat, 9am–6pm WAT
    [Call Now] [WhatsApp]
```

```
📧  Email
    hello@daniekeysstudios.com
    We reply within 24 hours (often sooner)
    [Send Email]
```

```
📍  Location
    Nigeria (Serving Pan-Africa & Globally)
    Remote-first — we work with clients anywhere
```

```
📅  Book a Free Discovery Call
    30-minute video call to discuss your project.
    No pressure, no pitch — just a conversation.
    [Book a Call →]  (links to Calendly or contact form)
```

**Booking CTA styled distinctly:**
- bg `#2B6BFF`, rounded-xl, p-4  
- Text white, icon calendar  

**Office Hours:**
```
Monday – Friday    9:00 AM – 6:00 PM WAT
Saturday           10:00 AM – 4:00 PM WAT
Sunday             Closed
────────────────────────────────────────
Urgent? WhatsApp us 24/7 — we monitor it.
```
- 13px, `#818181`, border-top `#222`

**Social links:**
```
Follow our work:
[Instagram] [LinkedIn] [YouTube] [Facebook]
```
- Icons, white, hover `#2B6BFF`

---

### SECTION 4: TRUST INDICATORS (NEW)
**Background:** `#F9F9F9`, between form and FAQ  
**Layout:** 4 inline trust signals

```
📋 Clear Proposal            ⏰ 24hr Response           🔒 No Commitment           🌍 Remote-Friendly
Within 48hrs of your call    To every enquiry            First call is free         Work with us from anywhere
```
- Icon: 24px, `#2B6BFF`  
- Title: 14px, weight 600, `#111`  
- Body: 12px, `#818181`  
- Border-right `#E5E5E5` between each (except last)  
- Responsive: 2×2 on tablet, 1-col mobile

---

### SECTION 5: FAQ — CONTACT SPECIFIC
**Background:** `#111111`  
**Layout:** Centered, max-width 720px

**Headline:** "Before You Send That Message"

**Q: What happens after I fill in the form?**  
A: A real person (not a bot) will read your project details and send you a personalised response within 24 hours. If your project is urgent, mention it and we'll prioritise your reply.

**Q: Do I need to know exactly what I want before reaching out?**  
A: Not at all. Many of our best clients came to us saying "I know I need help, I'm just not sure with what." We'll ask the right questions on the discovery call and figure it out together.

**Q: Is the discovery call really free?**  
A: Completely. It's a 30-minute conversation — no agenda except understanding your business. We don't charge for the call, and there's no obligation to hire us afterwards.

**Q: How long does it take to get a proposal after the call?**  
A: We deliver a written proposal within 48 hours of your discovery call. It includes a clear scope, timeline, and final price — no vague estimates.

**Q: Do you sign NDAs?**  
A: Yes. We're happy to sign a mutual NDA before sharing sensitive business information. Just let us know when you reach out.

- Accordion style  
- Add FAQ schema for these questions  

---

### SECTION 6: CTA BANNER
**Background:** `#2B6BFF`

**Headline:**
```
Still Not Sure?
Just Say Hello.
```

**Body:**
```
The first conversation costs nothing.
Let's figure out together what your brand actually needs.
```

**Buttons:**
```
[📅 Book Discovery Call →]   [💬 WhatsApp Now →]
```

---

## 🖼️ IMAGE PROCUREMENT — CONTACT PAGE
No hero photography required on this page. Design is clean/form-focused.  
Optional: Add a small team photo or office photo in the right-side panel if available from real team photos.

📸 If needed: Search `"professional African creative team office"`  
Unsplash: `photo-1600880292203-757bb62b4baf`

---

## 🔍 SEO & AEO — CONTACT PAGE

### Meta Tags
```html
<title>Contact Daniekeys Studios — Book a Free Discovery Call | Nigeria's AI Digital Agency</title>
<meta name="description" content="Get in touch with Daniekeys Studios to discuss your branding, website, motion graphics, or AI project. Free discovery call. Response within 24 hours. Serving Nigeria and Africa." />
```

### Schema — ContactPage
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Daniekeys Studios",
  "description": "Contact form for project enquiries, discovery call bookings, and service information.",
  "url": "https://www.daniekeysstudios.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Daniekeys Studios",
    "telephone": "+2349030909624",
    "email": "hello@daniekeysstudios.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2349030909624",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "NG"
    }
  }
}
```

### H-Tag Structure
```
H1: Every Great Project Starts With a Conversation.
H2: Start Your Project
H2: Other Ways to Reach Us
H2: Before You Send That Message (FAQ)
```

---

## ✅ CRITICAL FIXES CHECKLIST — CONTACT PAGE
- [ ] REMOVE `starlordflash2@gmail.com` — replace with `hello@daniekeysstudios.com` everywhere
- [ ] Remove video background from hero
- [ ] Add WhatsApp CTA button with pre-filled message
- [ ] Add "Book a Call" button (link to Calendly or simple booking modal)
- [ ] Add success state to form after submission
- [ ] Fix "Based in Lagos" copy — use "Nigeria" consistently
- [ ] Add "AI Chatbot & Automation" and "AI Digital Strategy" to service dropdown
- [ ] Add form validation (client-side) before submission
- [ ] Add trust signals section below form
- [ ] Add FAQ with schema markup
- [ ] Fix Privacy Policy and Terms of Service footer links
- [ ] Remove single generic testimonial quote ("Daniekeys Studios transformed...") — replace with trust indicators
