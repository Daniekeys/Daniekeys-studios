# Cloudinary Portfolio + Studio Upload - Build Spec

Daniekeys Studios website (Next.js + Tailwind). Portfolio media lives in Cloudinary and the site reflects it automatically. A private `/studio` page lets the team upload into the right folder with basic metadata.

Work one phase at a time. At the end of each phase, stop, summarize what changed, and wait for review before starting the next one.

## Ground rules

- Read the existing code, folder structure, and component patterns before writing anything. Match the existing style.
- State assumptions before coding. If something in this spec conflicts with the codebase, flag it, don't guess.
- Allowed new dependencies: `cloudinary` (Node SDK, server only) and `next-cloudinary`. Justify anything else before adding it.
- The API secret never reaches the browser. Anything that uses it lives in server-only code (`import 'server-only'`).
- Don't invent Cloudinary API parameters. Check them against the SDK and docs, and confirm with a real call in Phase 0.
- Handle empty, error, and loading states, not just the happy path.

## Environment variables

Already set locally and in production:

```
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_FOLDER=          # root portfolio folder, must match Cloudinary exactly
```

Added in Phase 4:

```
STUDIO_PASSWORD=            # shared password for /studio
STUDIO_SESSION_SECRET=      # long random string for signing the session cookie
```

## Folder model

```
<CLOUDINARY_FOLDER>/
  BGR/
  latest-videos/
  latest-graphics/      (planned)
  ...any future subfolder
```

- Each direct subfolder of the root = one section on the portfolio page.
- Section label comes from the folder name, made readable ("latest-videos" -> "Latest Videos").
- Videos and images can live in any folder. The site renders based on each asset's `resource_type`.
- Assets sitting directly in the root (not in a subfolder) are NOT shown. Report them in Phase 0.

## Phase 0 - Explore, no app code

Write a throwaway script (outside `app/`, delete it or gitignore it afterwards) using the Cloudinary SDK and env vars to:

1. Confirm whether the account uses dynamic folders (`asset_folder`) or fixed folders (`folder` in public_id).
2. List the direct subfolders of `CLOUDINARY_FOLDER`.
3. For the root and each subfolder: asset count by `resource_type`, formats, largest file size.
4. List any assets sitting directly in the root (public_id + type), so they can be moved.
5. Confirm the exact Search API expression that returns the assets of one subfolder, by running it.
6. Report any folder names with spaces or special characters.

Report findings and stop.

## Phase 1 - Data layer

`lib/cloudinary.ts` (server only):

- Configure the SDK from env vars.
- `getPortfolioSections()`: lists subfolders, fetches each folder's assets via the Search API, returns:

```ts
type PortfolioAsset = {
  id: string;            // asset_id
  publicId: string;
  type: 'video' | 'image';
  url: string;           // delivery URL with f_auto,q_auto
  posterUrl?: string;    // video only: JPG frame at ~2s
  width: number;
  height: number;
  duration?: number;     // video only
  title?: string;        // from context metadata
  client?: string;       // from context metadata
  createdAt: string;
};

type PortfolioSection = {
  folder: string;        // full folder path
  slug: string;
  label: string;
  assets: PortfolioAsset[];
};
```

- Sort assets newest first.
- Cache the fetch with Next's caching, tagged `portfolio`, with a fallback revalidate of 1 hour.
- Search is rate limited per hour, so the cache is required, not optional.
- If Cloudinary fails, log it and return an empty list so the page still renders.

## Phase 2 - Portfolio UI

- Server component fetches `getPortfolioSections()`.
- One section per folder, in a sensible order (newest folder activity first, or alphabetical, state which).
- Videos: `next-cloudinary` player or `<video>` with `muted`, `playsInline`, `preload="none"`, poster frame. No autoplaying a grid of videos on mobile.
- Images: `next/image` (or `CldImage`) with proper width/height to avoid layout shift.
- Lazy load below the fold. Handle mixed aspect ratios (16:9, 9:16, square) cleanly.
- Use the existing brand tokens and components already in the codebase.
- Empty folder = hide the section.

## Phase 3 - Auto updates via webhook

`app/api/cloudinary-webhook/route.ts`:

- Verify the request with the SDK's notification signature check (`X-Cld-Signature`, `X-Cld-Timestamp`, API secret). Reject invalid or stale requests with 401.
- On upload, delete, rename/move, or context/metadata update notifications: `revalidateTag('portfolio')`.
- Ignore other notification types, return 200.
- Note for setup: the notification URL gets set in Cloudinary settings after deploy:
  `https://www.daniekeysstudios.com/api/cloudinary-webhook`
- Webhooks can't reach localhost. Test on a preview or prod deploy.

## Phase 4 - Protect /studio

- Routes: `/studio`, `/studio/login`, and everything under `/api/studio/*`.
- Login page checks `STUDIO_PASSWORD` server-side, sets an httpOnly, secure, sameSite=lax cookie signed with `STUDIO_SESSION_SECRET`, 7-day expiry.
- Middleware (or `proxy.ts`, whichever this Next version uses) redirects unauthenticated `/studio` requests to login and returns 401 for `/api/studio/*`.
- Compare passwords in constant time. Add basic rate limiting or a delay on failed logins.
- `/studio` pages: `noindex`, not linked anywhere on the public site.
- Logout button clears the cookie.

## Phase 5 - Upload page

`/studio` page:

1. Folder dropdown, populated from `GET /api/studio/folders` (server lists direct subfolders of the root). New Cloudinary folders appear automatically.
2. Optional metadata fields: Title, Client. Keep it to these two for now.
3. Upload via `next-cloudinary`'s `CldUploadWidget` in signed mode:
   - `signatureEndpoint="/api/studio/sign"`
   - resource type auto (video or image detected automatically)
   - multiple files allowed, local file source only
   - chunked upload for large videos
4. `POST /api/studio/sign`:
   - Protected by the Phase 4 auth.
   - Rejects any folder that isn't the root or one of its direct subfolders (whitelist against the live folder list). The browser must not be able to choose an arbitrary destination.
   - Signs with `cloudinary.utils.api_sign_request`, including the folder param and the `context` string, so they can't be changed after signing.
   - Escape `=` and `|` in context values.
5. After upload: success message with thumbnail, plus a "View on site" link. The webhook handles revalidation.
6. Show clear errors for file too large (check the plan's max video size from Phase 0), wrong type, and network failures.

Out of scope for now: delete/edit from the studio page, structured metadata, multiple users.

## Phase 6 - Verify

- [ ] `npm run build` passes, no type errors.
- [ ] API secret appears nowhere in the client bundle (search the build output).
- [ ] `/studio` and `/api/studio/*` blocked when logged out.
- [ ] Sign endpoint rejects a folder outside the root.
- [ ] Upload a test image and a test video via `/studio` -> both appear on the live site within a minute.
- [ ] Delete them in Cloudinary -> both disappear within a minute.
- [ ] Portfolio page works on a phone: no autoplay storm, no layout shift.
