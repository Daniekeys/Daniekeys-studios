# Daniekeys Studios — ImageAccordion + StackingImageScroll

Reusable, data-driven components for the two effects you specified, wired
into the four sections we confirmed, with a Cloudinary delivery layer
scaffolded behind a placeholder env var.

## New reusable components
- `components/shared/ImageAccordion.tsx` — **EFFECT 1**. Click-to-expand;
  one item open at a time; the image renders INSIDE the expanded item only.
  Takes `items: ImageAccordionItem[]` (`title`, `description`, optional
  `metaRight` badge, optional `image` Cloudinary public ID — omit `image`
  to leave that item without one).
- `components/shared/StackingImageScroll.tsx` — **EFFECT 2**. Image 01
  holds sticky while 02→05 progressively join as a cascading stack on
  scroll (scroll up reverses it). Exports the desktop version plus
  `StackingImageScrollMobile`, the non-sticky mobile fallback with the same
  data/order. Takes `items: StackingImageScrollItem[]` — every item needs
  an image here (no text-only state, unlike the accordion).

## Where they're used (exactly the four spots you confirmed)
| Section | Page | Effect | File |
|---|---|---|---|
| Who We Are pillars | Home | ImageAccordion | `components/WhoWeAreSection.tsx` |
| Who We Are pillars | About | ImageAccordion | `components/AboutPageContent.tsx` |
| Recognition & Trust | About | ImageAccordion | `components/AboutPageContent.tsx` |
| Our Process (5 steps) | Services | StackingImageScroll | `components/ServicesPageContent.tsx` |
| CTA banner image | Global footer | plain swap, no effect | `components/Footer.tsx` |

Nothing else changed — same copy, same headings, same page structure. The
old `NumberedAccordion`/`ProcessStep` components are untouched and still
used elsewhere (Services FAQ, service-detail accordion), so other pages
aren't affected.

## Image mapping (you delegated "best fit" — here's what I picked and why)

**Recognition & Trust** (About):
1. 5.0 Rating on Google → `trust/rating-5-0` — phone-in-hand 5.0★ graphic
2. 100% On-Time Delivery → `trust/on-time-delivery` — thumbs-up/checklist graphic
3. 50+ Projects Delivered → `trust/projects-delivered` — literal "50+ PROJECTS DELIVERED" wall display
4. 3× Average Revenue Growth → `trust/revenue-growth` — financial dashboard/scoreboard shot

**Who We Are pillars** (Home + About):
1. Creative Excellence → `who-we-are/creative-excellence` — designer sketching a logo/brand system
2. AI-Powered → `who-we-are/ai-powered` — AI/chatbot interface graphic
3. Growth-Focused → `who-we-are/growth-focused` — team strategy meeting
4. Pan-African → **no image** — nothing in the supplied set matched this one, so per your "leave it without an image rather than reusing" rule it's the one item that stays text-only

**Our Process** (Services), in this order:
1. Free Discovery Call → `process/discovery-call` — video call screen
2. Proposal & Strategy → `process/proposal-strategy` — handshake over a signed document
3. Creative Production → `process/creative-production` — studio team on motion-graphics screens
4. Revisions & Refinement → `process/revisions-refinement` — team reviewing a report together
5. Launch & 30-Day Support → `process/launch-support` — customer-satisfaction/5★ graphic

**Footer CTA**: `cta/build-something` — designer's desk (sticky notes, color swatches, laptop). One image not used anywhere else, as required.

Every one of the 13 supplied images is used exactly once, nowhere repeated.

## Cloudinary
`lib/cloudinary.ts` exports `getImageUrl(publicId)` / `getImageSrcSet(publicId)`.
Right now `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` isn't set, so it falls back to
the matching local file under `public/images/<publicId>.jpg` (all 13 are
included here, already placed) — the site works today with zero config.

To switch to real Cloudinary delivery later:
1. Upload each file in `public/images/**` to your Cloudinary account, using
   the same folder/filename as its public ID (e.g.
   `public/images/trust/rating-5-0.jpg` → public ID `trust/rating-5-0`).
2. Set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` in your deploy env (and
   `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` if you're doing unsigned uploads
   elsewhere in the app).
3. Nothing else changes — every image call already routes through
   `getImageUrl()`, so it starts serving `f_auto,q_auto` optimized
   Cloudinary URLs automatically, no code edits needed.

**One naming correction from your original spec:** you wrote
`VITE_CLOUDINARY_CLOUD_NAME` — that's a Vite convention. This is a Next.js
app, where client-exposed env vars need the `NEXT_PUBLIC_` prefix instead
(a bare `VITE_` var would be `undefined` in the browser bundle). I used the
Next.js-correct names above; shout if your deploy pipeline expects
different ones.

## Install
1. Copy `lib/cloudinary.ts` into your `lib/`.
2. Copy `components/shared/ImageAccordion.tsx` and
   `components/shared/StackingImageScroll.tsx` into `components/shared/`.
3. Replace `components/WhoWeAreSection.tsx`, `components/AboutPageContent.tsx`,
   `components/ServicesPageContent.tsx`, and `components/Footer.tsx` with
   the versions here.
4. Copy the `public/images/` folder in (trust/, who-we-are/, process/, cta/
   — 13 files total).
5. No new dependencies.

## Note on scope
I couldn't build/run the actual Next.js app to verify pixel output — I
matched your existing token classes (`text-ds-h3`, `rounded-radius-lg`,
`bg-dk-blue-1`, the `space-*` scale, the `prefersReducedMotion` gating
pattern) exactly as used elsewhere in your components, but a visual pass
after dropping these in is worth doing.
