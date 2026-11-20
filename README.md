# Daniekeys Studios website

Brand, web and film studio site, built from the "Daniekeys Studios Website UI" Claude Design canvas.
Next.js 14 (app router), no CSS framework. All styling lives in `src/app/globals.css`.

## Brand system

- Paper `#F4F3EF`, Ink `#111111`, Stone `#8A8A86`. Colour only comes from the work inside the frame.
- Newsreader Light for display, Geist for text, Geist Mono for labels (Google Fonts).

## Pages

| Route | What |
| --- | --- |
| `/` | Hero, showreel, studio line, selected work, services, start a project |
| `/work` | Work index with service and industry filters, Grid and Index views |
| `/work/[slug]` | Case study template. Data in `src/lib/case-studies.ts` |
| `/services` | Four pillars with named offers, how we work |
| `/studio` | About, values, team, where |
| `/journal` | Journal index (posts marked coming soon until written) |
| `/contact` | Project form (opens an email to the studio inbox) |

## Media (Cloudinary)

Every image and film is served from Cloudinary, folder `daniekeys-site`, cloud name from
`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`. Helpers are in `src/lib/media.ts`:

- `image("tejs-cover", alt)` loads `daniekeys-site/tejs-cover` as an image
- `film("tejs-reel", alt)` loads `daniekeys-site/tejs-reel` as a video, with `daniekeys-site/tejs-reel-poster` as its poster

To add work: upload to `daniekeys-site/<name>` in Cloudinary, then add an entry to `src/lib/work.ts`
(and a case study in `src/lib/case-studies.ts` if it has one). The home showreel plays `daniekeys-site/showreel`.

## Run

```
npm install
npm run dev
```
