# Fix: missing Pan-African image + off-brand About hero photo

Two things fixed, both confirmed against your screenshots of the live site:

## 1. Pan-African pillar had no image
In the last round I left it without one because nothing in the first
supplied image batch matched. It turns out one of your *original* three
uploads (from the very first request) does fit well — a photo of three
Black professionals at a whiteboard with a city skyline behind them, which
wasn't used in the current build (it was only wired into an earlier
version of WhoWeAreSection that's since been replaced). Now wired in as
`who-we-are/pan-african` in both:
- `components/WhoWeAreSection.tsx` (Home)
- `components/AboutPageContent.tsx` (About)

## 2. About page "Who We Are" hero photo
You're right that the high-five stock photo was two white professionals,
which doesn't fit a company that leads with "Pan-African." Replaced with
one of your supplied Nigerian-subject images (hands at a laptop, dark
skin clearly visible, checkmark/results overlay) — reads as "we deliver,"
which fits the surrounding copy better than a generic high-five stock shot
anyway. Wired in as `about/who-we-are-hero` in `components/AboutPageContent.tsx`.

Note: I left the "Founder's Words" portrait on the About page alone — it's
already flagged in the code as an explicit placeholder pending your real
founder photo, not something to swap for another stock image.

## Install
Copy the updated `components/WhoWeAreSection.tsx` and
`components/AboutPageContent.tsx` in, and add the two new files under
`public/images/who-we-are/pan-african.jpg` and
`public/images/about/who-we-are-hero.jpg`. Same Cloudinary fallback pattern
as before — works locally now, upgrades automatically once you set
`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and upload these under the matching
public IDs.
