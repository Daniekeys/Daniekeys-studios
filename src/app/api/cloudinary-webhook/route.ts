import { revalidateTag } from "next/cache";

import { cloudinary } from "@/lib/cloudinary-portfolio";

// Cloudinary notification webhook — keeps the portfolio in sync with the
// account without a redeploy. Set as the notification URL in Cloudinary
// (Settings > Webhook Notifications) after deploy:
//   https://www.daniekeysstudios.com/api/cloudinary-webhook
// Webhooks can't reach localhost, so this is tested on a preview/prod deploy.

// Anything that changes what the portfolio shows: a new asset, a removed one,
// a move between folders (a rename of the public_id on this fixed-folder
// account), or an edited title/client.
const PORTFOLIO_NOTIFICATIONS = new Set([
  "upload",
  "delete",
  "rename",
  "move",
  "resource_context_changed",
  "resource_metadata_changed",
]);

export async function POST(request: Request) {
  // The signature covers the exact bytes Cloudinary sent, so read the raw body.
  const body = await request.text();
  const timestamp = Number(request.headers.get("x-cld-timestamp"));
  const signature = request.headers.get("x-cld-signature");

  // Rejects a bad signature and anything older than the SDK's 2-hour window.
  if (
    !signature ||
    !Number.isFinite(timestamp) ||
    !cloudinary.utils.verifyNotificationSignature(body, timestamp, signature)
  ) {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  let notificationType: unknown;
  try {
    notificationType = JSON.parse(body).notification_type;
  } catch {
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }

  const revalidated =
    typeof notificationType === "string" &&
    PORTFOLIO_NOTIFICATIONS.has(notificationType);
  if (revalidated) revalidateTag("portfolio");

  return Response.json({ revalidated });
}
