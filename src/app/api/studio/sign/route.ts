import { cloudinary, getUploadFolders } from "@/lib/cloudinary-portfolio";
import { STUDIO_UPLOAD_PRESET } from "@/lib/studio-upload";

// Signs an Upload Widget request. Signed-in only (src/middleware.ts).
//
// The widget sends the exact parameters it is about to upload with; whatever
// is signed here cannot be changed afterwards. So this endpoint is where the
// destination is enforced: it only signs the parameters the studio page uses,
// only for a folder on the live whitelist, and only through the studio upload
// preset. Anything else — a public_id, an overwrite flag, another folder or
// preset — is refused, so the browser can never choose an arbitrary destination.

const ALLOWED_PARAMS = new Set([
  "timestamp",
  "folder",
  "context",
  "source",
  "upload_preset",
]);
const ALLOWED_CONTEXT_KEYS = new Set(["title", "client"]);

// Cloudinary context is "key=value|key=value", with literal = and | escaped by
// a backslash inside values.
function hasOnlyAllowedContextKeys(context: string): boolean {
  return context.split(/(?<!\\)\|/).every((pair) => {
    const separator = pair.search(/(?<!\\)=/);
    return separator > 0 && ALLOWED_CONTEXT_KEYS.has(pair.slice(0, separator));
  });
}

const refuse = (error: string) => Response.json({ error }, { status: 400 });

export async function POST(request: Request) {
  let params: unknown;
  try {
    params = (await request.json()).paramsToSign;
  } catch {
    return refuse("Invalid request");
  }

  if (!params || typeof params !== "object" || Array.isArray(params)) {
    return refuse("Invalid request");
  }
  const paramsToSign = params as Record<string, unknown>;

  const unexpected = Object.keys(paramsToSign).filter((key) => !ALLOWED_PARAMS.has(key));
  if (unexpected.length > 0) {
    return refuse(`Parameter not allowed: ${unexpected.join(", ")}`);
  }

  const { folder, context, upload_preset: uploadPreset } = paramsToSign;
  if (uploadPreset !== STUDIO_UPLOAD_PRESET) {
    return refuse("Upload preset not allowed");
  }
  if (context !== undefined && (typeof context !== "string" || !hasOnlyAllowedContextKeys(context))) {
    return refuse("Context not allowed");
  }

  let folders;
  try {
    folders = await getUploadFolders();
  } catch (error) {
    console.error("Cloudinary folder list failed:", error);
    return Response.json({ error: "Could not verify the folder" }, { status: 502 });
  }
  if (typeof folder !== "string" || !folders.some((allowed) => allowed.folder === folder)) {
    return refuse("Folder not allowed");
  }

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET ?? ""
  );
  return Response.json({ signature });
}
