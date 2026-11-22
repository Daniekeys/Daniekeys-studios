#!/usr/bin/env node
// Media helper for the site. Plain Node 18+, no packages.
//
//   node scripts/media.mjs status                 what is ready in media/files, what is missing
//   node scripts/media.mjs find <folder> [...]    find the exact design files on disk (by size + sha256) and copy them in
//   node scripts/media.mjs add <name> <file>      use a file you picked by hand for <name> (see media/manifest.json)
//   node scripts/media.mjs check                  test the Cloudinary keys in .env.local
//   node scripts/media.mjs upload [name ...]      upload everything ready (or only the names given) to daniekeys-site/<name>
//   node scripts/media.mjs sites [slug ...]       move a brand website's images (public/sites/<slug>/img) to Cloudinary
//                                                 and point its index.html at them (f_auto,q_auto). Safe to re-run.
//
// Files are copied to media/files/<name>.<ext>. That folder is gitignored.

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const FILES = join(ROOT, "media", "files");
const manifest = JSON.parse(readFileSync(join(ROOT, "media", "manifest.json"), "utf8"));
const items = manifest.items;
const byName = Object.fromEntries(items.map((i) => [i.name, i]));
mkdirSync(FILES, { recursive: true });

function loadEnv() {
  const env = {};
  for (const f of [".env", ".env.local"]) {
    const p = join(ROOT, f);
    if (!existsSync(p)) continue;
    for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
  return { ...env, ...process.env };
}

// The file for an item, following "same_as" (showreel reuses the Tandari film).
function fileFor(name) {
  const it = byName[name];
  const key = it.same_as ?? name;
  const hit = readdirSync(FILES).find((f) => f.replace(/\.[^.]+$/, "") === key);
  return hit ? join(FILES, hit) : null;
}

const sha = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");

function status() {
  const ready = [], missing = [];
  for (const it of items) (fileFor(it.name) ? ready : missing).push(it.name);
  console.log(`Ready (${ready.length}): ${ready.join(", ") || "none"}`);
  console.log(`Missing (${missing.length}):`);
  for (const n of missing) console.log(`  ${n.padEnd(24)} ${byName[n].hint}`);
}

function find(dirs) {
  const wanted = new Map(); // bytes -> items
  for (const it of items) if (it.sha256) wanted.set(it.bytes, [...(wanted.get(it.bytes) ?? []), it]);
  let found = 0;
  const walk = (dir) => {
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (e.name === "node_modules" || e.name.startsWith(".")) continue;
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.isFile()) {
        const cands = wanted.get(statSync(p).size);
        if (!cands) continue;
        const h = sha(p);
        for (const it of cands) {
          if (it.sha256 !== h || fileFor(it.name)) continue;
          const dest = join(FILES, it.name + (extname(p).toLowerCase() || (it.type === "video" ? ".mp4" : ".jpg")));
          copyFileSync(p, dest);
          console.log(`found ${it.name}  <-  ${p}`);
          found++;
        }
      }
    }
  };
  for (const d of dirs) walk(resolve(d));
  console.log(`\n${found} new file(s) matched.\n`);
  status();
}

function add(name, file) {
  if (!byName[name]) throw new Error(`Unknown name "${name}". See media/manifest.json.`);
  const dest = join(FILES, name + extname(file).toLowerCase());
  copyFileSync(resolve(file), dest);
  console.log(`added ${name} -> ${dest}`);
}

function creds() {
  const env = loadEnv();
  const cloud = env.CLOUDINARY_CLOUD_NAME, key = env.CLOUDINARY_API_KEY, secret = env.CLOUDINARY_API_SECRET;
  if (!cloud || !key || !secret) throw new Error("Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in .env.local");
  if (!/^[a-z0-9-_]+$/i.test(cloud))
    throw new Error(`CLOUDINARY_CLOUD_NAME "${cloud}" is not a valid cloud name (no dots or spaces). Copy the Cloud name from the Cloudinary dashboard.`);
  if (env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME !== cloud)
    console.warn(`Warning: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME (${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}) differs from CLOUDINARY_CLOUD_NAME (${cloud}). The site reads the NEXT_PUBLIC one. Make them the same.`);
  return { cloud, key, secret };
}

async function check() {
  const { cloud, key, secret } = creds();
  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/usage`, {
    headers: { Authorization: "Basic " + Buffer.from(`${key}:${secret}`).toString("base64") },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Cloudinary said ${res.status}: ${body?.error?.message ?? "unknown error"}`);
  console.log(`Keys work. Cloud "${cloud}", plan ${body.plan ?? "?"}, storage used ${Math.round((body.storage?.usage ?? 0) / 1e6)} MB.`);
}

async function upload(names) {
  const { cloud, key, secret } = creds();
  const list = names.length ? names : items.map((i) => i.name);
  let ok = 0, skipped = [];
  for (const name of list) {
    const it = byName[name];
    const file = it && fileFor(name);
    if (!file) { skipped.push(name); continue; }
    const params = { invalidate: "true", overwrite: "true", public_id: `${manifest.folder}/${name}`, timestamp: String(Math.floor(Date.now() / 1000)) };
    const toSign = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join("&");
    const form = new FormData();
    for (const [k, v] of Object.entries(params)) form.append(k, v);
    form.append("api_key", key);
    form.append("signature", createHash("sha1").update(toSign + secret).digest("hex"));
    form.append("file", new Blob([readFileSync(file)]), file.split(/[\\/]/).pop());
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/${it.type}/upload`, { method: "POST", body: form });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) { console.error(`FAILED ${name}: ${res.status} ${body?.error?.message ?? ""}`); continue; }
    console.log(`uploaded ${name.padEnd(24)} ${body.secure_url}`);
    ok++;
  }
  console.log(`\n${ok} uploaded.${skipped.length ? ` Not ready yet: ${skipped.join(", ")}` : ""}`);
}

// Brand websites (public/sites/<slug>/) ship with their images next to them so
// they work straight away. This moves those images to Cloudinary, which serves
// them as AVIF/WebP at the right quality, and rewrites the page to use them.
async function sites(slugs) {
  const { cloud, key, secret } = creds();
  const root = join(ROOT, "public", "sites");
  const list = slugs.length ? slugs : readdirSync(root).filter((d) => existsSync(join(root, d, "index.html")));
  for (const slug of list) {
    const dir = join(root, slug, "img");
    const page = join(root, slug, "index.html");
    if (!existsSync(dir)) { console.log(`${slug}: no img folder, skipped`); continue; }
    let html = readFileSync(page, "utf8");
    let ok = 0;
    for (const file of readdirSync(dir)) {
      const local = `/sites/${slug}/img/${file}`;
      if (!html.includes(local)) continue; // already moved, or not used
      const id = `${manifest.folder}/sites/${slug}/${file.replace(/\.[^.]+$/, "")}`;
      const params = { invalidate: "true", overwrite: "true", public_id: id, timestamp: String(Math.floor(Date.now() / 1000)) };
      const toSign = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join("&");
      const form = new FormData();
      for (const [k, v] of Object.entries(params)) form.append(k, v);
      form.append("api_key", key);
      form.append("signature", createHash("sha1").update(toSign + secret).digest("hex"));
      form.append("file", new Blob([readFileSync(join(dir, file))]), file);
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, { method: "POST", body: form });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) { console.error(`FAILED ${slug}/${file}: ${res.status} ${body?.error?.message ?? ""}`); continue; }
      html = html.split(local).join(`https://res.cloudinary.com/${cloud}/image/upload/f_auto,q_auto,c_limit,w_1600/${id}`);
      ok++;
    }
    writeFileSync(page, html);
    console.log(`${slug}: ${ok} image(s) moved to Cloudinary. Check /work/${slug}/site, then commit public/sites/${slug}/index.html.`);
  }
}

const [cmd, ...args] = process.argv.slice(2);
try {
  if (cmd === "status") status();
  else if (cmd === "find" && args.length) find(args);
  else if (cmd === "add" && args.length === 2) add(...args);
  else if (cmd === "check") await check();
  else if (cmd === "upload") await upload(args);
  else if (cmd === "sites") await sites(args);
  else console.log(readFileSync(new URL(import.meta.url), "utf8").split("\n").slice(1, 12).join("\n"));
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
