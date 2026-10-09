"use server";

import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  SESSION_COOKIE,
  SESSION_MAX_AGE,
  createSessionToken,
} from "@/lib/studio-session";

export type LoginState = { error?: string };

// Hashing first gives timingSafeEqual two equal-length buffers, so neither the
// content nor the length of the real password leaks through timing.
function matchesPassword(candidate: string, expected: string): boolean {
  const digest = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(candidate), digest(expected));
}

export async function login(
  _previous: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = formData.get("password");
  const expected = process.env.STUDIO_PASSWORD;

  if (
    typeof password !== "string" ||
    !expected ||
    !process.env.STUDIO_SESSION_SECRET ||
    !matchesPassword(password, expected)
  ) {
    // Fixed delay on every failure to slow down guessing.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { error: "Incorrect password." };
  }

  cookies().set(SESSION_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  redirect("/studio");
}

export async function logout() {
  cookies().delete(SESSION_COOKIE);
  redirect("/studio/login");
}
