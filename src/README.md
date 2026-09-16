# Daniekeys Studios — Scroll Interaction Update

Drop-in replacements for two components, plus the images they reference.

## Files
- `components/WhoWeAreSection.tsx` — replaces your existing file. Adds the
  Cronix-style TEXT/IMAGE ALIGNMENT interaction to the pillars list only.
  Everything above it (H2, intro paragraph, CTA, avatar row) is untouched.
- `components/ProcessSection.tsx` — replaces your existing file. Adds the
  Cronix-style SEQUENTIAL PROCESS interaction (image + text change together
  as one "chapter"). Header/subhead/CTA are untouched.
- `public/images/who-we-are/*.png` — one image per pillar (Creative
  Excellence, AI-Powered, Growth-Focused, Pan-African).
- `public/images/how-we-work/*` — one image per process step (Discovery
  Call, Strategy & Proposal, Create & Build, Review & Refine, Launch &
  Support).

## Install
1. Copy the `public/images/who-we-are` and `public/images/how-we-work`
   folders into your project's `public/images/` directory.
2. Replace your `components/WhoWeAreSection.tsx` and
   `components/ProcessSection.tsx` with the versions here.
3. No new dependencies — both use `framer-motion`, which is already in the
   project (`motion`, `useScroll`, `useMotionValueEvent`, `AnimatePresence`).

## How the two interactions differ (as specified)
- **Who We Are**: the image column goes `sticky` while the numbered pillar
  text scrolls past beside it. Scroll progress through the stack picks the
  active pillar; the sticky image crossfades to match (scale 1.04 → 1,
  opacity fade, 0.6s ease). Non-active pillar text dims to 35% opacity.
- **How We Work**: a single sticky frame is pinned per section; each step's
  image + numbered badge + title + description crossfade together as one
  unit when the active step changes (a thin progress bar under the frame
  shows position). Nothing scrolls independently — it feels like chapters
  of one story, not a text rail beside a static image.

## Mobile
Both interactions are `hidden lg:block` / `lg:hidden` gated: on mobile
(<1024px) there's no sticky/scroll-linked behaviour at all — each pillar and
each process step just stacks normally with its own inline image, per the
"never force the desktop interaction onto mobile" requirement.

## Note on scope
I only had the two component files plus their shared dependencies
(Button, Eyebrow, GridOverlay, WatermarkGlyph, AvatarGroup, cn) — not your
full repo (tailwind config, design tokens, lib/utils). I matched the
existing token classes (`text-ds-h3`, `rounded-radius-lg`, `bg-dk-blue-1`,
`space-*` spacing scale, `prefersReducedMotion` gating pattern) exactly as
used elsewhere in your components, but you should do a quick visual pass
after dropping these in, since I couldn't build/run the actual site to
verify pixel output.

Nine images were selected out of the sixteen you sent; the unused ones
(two design-sketch shots, one duplicate kanban shot, two UI-overlay shots)
are still in your uploads if you'd rather swap any pairing.
