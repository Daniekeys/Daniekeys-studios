// Signed upload preset in the Cloudinary account that every studio upload
// goes through. It sets use_filename + unique_filename (and overwrite off), so
// an upload keeps its filename with Cloudinary's random suffix instead of
// getting a fully random public_id — the portfolio's title fallback and
// duplicate check both read that name. Shared by the uploader (which sends it)
// and /api/studio/sign (which refuses anything else).
export const STUDIO_UPLOAD_PRESET = "studio_upload";
