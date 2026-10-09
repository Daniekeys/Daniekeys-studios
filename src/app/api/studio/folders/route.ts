import { getUploadFolders } from "@/lib/cloudinary-portfolio";

// Folders the studio can upload into. Signed-in only (src/middleware.ts).
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return Response.json({ folders: await getUploadFolders() });
  } catch (error) {
    console.error("Cloudinary folder list failed:", error);
    return Response.json({ error: "Could not load folders" }, { status: 502 });
  }
}
