# Design export (offline copy of the Claude Design canvas)

Source: "Daniekeys Studios Website UI", https://claude.ai/artifact/UMdqDY7K47XGfugD2SjE1j
Exported 2026-11-20 from canvas version 1795168334-e438. This folder is the reference the site must match. Any Claude session can use it without access to the canvas.

## What's here

| Path | What |
| --- | --- |
| `src/styles.css` | The canvas CSS, verbatim (shared by all pages) |
| `src/_header.html`, `src/_footer.html` | Header and footer, verbatim |
| `src/<Page>.html` | Each page body, verbatim: Home, Work, CaseStudy, Services, Studio, Journal, Contact |
| `canvas.json` | Board sizes (desktop 1440 and mobile 390, with heights) and the designer's notes |
| `blob-map.json` | Every `/_blob/<id>` in the design mapped to its Cloudinary name `daniekeys-site/<name>` |
| `build.py` | Builds `pages/*.html` (open in any browser) and, with `--shots`, `screens/*.png` |
| `pages/`, `screens/` | Built output (regenerate any time, gitignored) |

Mobile boards are the same pages at 390px wide. The CSS switches layout with `@container (max-width:760px)`.

## How to use it

- See the design: `python design/build.py`, then open `design/pages/Home.html`.
- Once the media is on Cloudinary, the pages show the real images and films (they load from `daniekeys-site/<name>` on the cloud in `.env.local`).
- Reference screenshots: `python design/build.py --shots` (needs `pip install playwright` and `python -m playwright install chromium`).
- Compare the live site: run `npm run dev` and screenshot the same pages at 1440 and 390, then compare with `screens/`.

## Things the canvas does that the site deliberately does differently

These were decided on 20 Nov (see HANDOFF.md). Don't "fix" them back.
- Wolff Olins showreel, BUCK film and the reference brand film are other studios' work. They render as empty boxes here. The site uses our films instead (`blob-map.json` says which).
- Placeholder copy like "[Role]", "[Name]" and the Tej's "Result" line is hidden on the site until real content exists.
- Journal cards say "Coming soon" and don't link. Cards for pieces without a case study don't link either.
- Designer's note: Afriment stills and some Tandari stills are stand-ins, and the logo mark is a hand trace. Replace them when final assets exist.

## What could not be exported

The image and film files themselves. The design tool doesn't hand them out to any session. Their exact fingerprints are in `media/manifest.json`, and `node scripts/media.mjs find <folders>` finds them on disk.
