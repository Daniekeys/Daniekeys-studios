// Signed session cookie for the private /studio area.
// Spec: src/specs/cloudinary-portfolio-spec.md (Phase 4).
//
// Web Crypto only, because src/middleware.ts runs this on the Edge runtime
// where Node's crypto module isn't available. The token is
// "<expiry ms>.<HMAC-SHA256 of the expiry, hex>", signed with
// STUDIO_SESSION_SECRET — there is one shared password and no user, so the
// expiry is the only thing worth signing.

export const SESSION_COOKIE = "studio_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

const encoder = new TextEncoder();

async function getKey(): Promise<CryptoKey | null> {
  const secret = process.env.STUDIO_SESSION_SECRET;
  if (!secret) return null;
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createSessionToken(): Promise<string> {
  const key = await getKey();
  if (!key) throw new Error("STUDIO_SESSION_SECRET is not set");

  const expires = String(Date.now() + SESSION_MAX_AGE * 1000);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(expires));
  const hex = Array.from(new Uint8Array(signature), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");

  return `${expires}.${hex}`;
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  const match = token?.match(/^(\d+)\.([0-9a-f]{64})$/);
  if (!match) return false;

  const key = await getKey();
  if (!key) return false;

  const [, expires, hex] = match;
  const signature = Uint8Array.from(hex.match(/../g)!, (pair) => parseInt(pair, 16));
  // subtle.verify compares in constant time.
  const signed = await crypto.subtle.verify("HMAC", key, signature, encoder.encode(expires));

  return signed && Number(expires) > Date.now();
}
