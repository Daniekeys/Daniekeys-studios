# 03 — IMAGE SOURCING GUIDE

## Rule
None of the mockup's original photography ships in this build. Every photo is a placeholder to be replaced with **freely-licensed stock imagery**, sourced fresh. Daniekeys Studios' real site already does this well (it uses an Unsplash photo for its "Who We Are" section) — follow the same approach throughout.

## Sources (in order of preference)
1. **Unsplash** (unsplash.com) — primary source, broadest African-business/creative-agency coverage, free for commercial use, no attribution required (attribution appreciated but not mandatory).
2. **Pexels** (pexels.com) — secondary source, same license terms, good for lifestyle/office/tech imagery.
3. Avoid Pixabay/Freepik-style sources with mixed licensing unless a specific image is confirmed free-for-commercial-use.

## Implementation
- Use `next/image` for every photo, with `images.unsplash.com` and `images.pexels.com` added to `next.config.js` `remotePatterns` if pulling directly by URL during development.
- **For production**, download and self-host the final chosen images (under `/public/images/`) rather than hot-linking indefinitely — hot-linking is fine for the initial batch-build pass so images render immediately, but flag a follow-up task to localize the final image set before launch.
- Every image needs a real, descriptive `alt` attribute — never leave `alt=""` on a content photo (only the decorative watermark glyph and background gradients get `alt=""`/`aria-hidden`).
- Match the moody/professional tone implied by the layout reference (confident office/creative-work photography) — avoid generic overly-staged corporate stock (fake handshakes, forced smiles at laptops) in favor of candid-feeling creative/work-in-progress shots, matching Daniekeys' own existing site imagery style.

## Suggested Search Terms Per Section
| Section | Search terms |
|---|---|
| Hero banner | "African creative agency team meeting", "Nigerian tech office", "designers collaborating dark office" |
| Who We Are | "African professionals office meeting" (matches the real site's existing choice — reuse this style), "team brainstorming session" |
| Services — Brand Identity | "logo design mood board", "brand identity sketches", "graphic designer workspace" |
| Services — Web & App Dev | "developer coding laptop dark", "website mockup screen", "UI UX design process" |
| Services — Motion Graphics | "video editing studio", "motion graphics workstation", "camera film production" |
| Services — AI Chatbots/Automation | "AI technology abstract", "chatbot interface phone", "automation dashboard screen" |
| Services — Digital Marketing | "social media content planning", "marketing analytics dashboard", "content calendar flat lay" |
| Services — Training | "workshop presentation African professionals", "team training session" |
| Featured Work / Portfolio | Use neutral case-study-style images: "laptop mockup website design", "branding mockup stationery", "phone screen app UI mockup" — treat these as project *presentation* shots, not real client screenshots, since no client permission/assets are available |
| Process section | "strategy meeting whiteboard", "designer sketching notebook", "handshake project kickoff" (one per step, varied) |
| Testimonials — avatars | Use neutral professional headshot stock ("business portrait African professional") for the client photos since we don't have real client headshots — clearly a placeholder to swap for real client photos when available |
| Pricing page | "creative studio desk overhead", "designer tools flat lay" (used sparingly — pricing pages should stay text/table-forward, not photo-heavy) |
| About — Founder's Words | "confident professional portrait office" as a placeholder for the founder's actual photo — **flag this clearly as needing the real founder photo**, don't ship a stock placeholder as final |
| Footer / Final CTA | "African entrepreneur laptop confident", or reuse the hero's photographic style for visual continuity |

## What NOT to Do
- Don't reuse the exact photos referenced in the fetched Daniekeys site markdown (those are their existing production assets, e.g. the specific Unsplash photo ID already in use, the `/images/marquee-pictures/`, `/images/samples/` files) — source fresh alternatives in the same style rather than duplicating their live asset URLs.
- Don't pull any imagery from the Clonix mockup screenshots or video frames — those are copyrighted template assets, layout reference only.
- Don't leave any image as a broken/placeholder gray box in a "finished" batch — if a suitable free image can't be found for something highly specific (e.g. an actual client logo), use a clean text/icon-based placeholder instead (matches the design system's flat, hairline-border aesthetic) and flag it rather than shipping a broken image tag.
