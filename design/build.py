#!/usr/bin/env python3
"""Offline copy of the Claude Design canvas "Daniekeys Studios Website UI".

    python design/build.py            builds design/pages/*.html (open them in a browser)
    python design/build.py --shots    also saves design/screens/<Page>-desktop.png and -mobile.png
                                      (needs: pip install playwright && python -m playwright install chromium)

The pages are assembled from design/src: _header.html + <Page>.html + _footer.html, with the
canvas CSS in src/styles.css. Every /_blob/<id> is swapped for its Cloudinary file
(design/blob-map.json), so once the media is uploaded the pages show the real images and films.
Placeholders from other studios render as a grey box with a note, never their footage.
Python 3.8+, no packages needed for the pages themselves.
"""

import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC, OUT = HERE / "src", HERE / "pages"
PAGES = ["Home", "Work", "CaseStudy", "Services", "Studio", "Journal", "Contact"]
ACTIVE = {"Work": "Work", "CaseStudy": "Work", "Services": "Services", "Studio": "Studio", "Journal": "Journal", "Contact": "Contact"}
VIDEOS = {"tejs-reel", "ire-launch", "ire-product", "tandari-film", "showreel"}


def cloud_name():
    for f in (".env.local", ".env"):
        p = HERE.parent / f
        if p.exists():
            m = re.search(r"^NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME\s*=\s*(\S+)", p.read_text(encoding="utf-8", errors="ignore"), re.M)
            if m:
                return m.group(1).strip("\"'")
    return "gtvnqv9v"


def media_url(cloud, name):
    kind = "video" if name in VIDEOS else "image"
    fmt = "f_auto:video,q_auto" if kind == "video" else "f_auto,q_auto,c_limit,w_2000"
    return f"https://res.cloudinary.com/{cloud}/{kind}/upload/{fmt}/daniekeys-site/{name}"


def build():
    cloud = cloud_name()
    blobs = json.loads((HERE / "blob-map.json").read_text(encoding="utf-8"))["blobs"]
    css = (SRC / "styles.css").read_text(encoding="utf-8")
    header = (SRC / "_header.html").read_text(encoding="utf-8")
    footer = (SRC / "_footer.html").read_text(encoding="utf-8")
    OUT.mkdir(exist_ok=True)
    (OUT / "styles.css").write_text(css + "\n.placeholder-note{position:absolute;inset:auto 12px 12px auto;font:12px/1.4 monospace;background:#111;color:#F4F3EF;padding:4px 8px;border-radius:4px}\n", encoding="utf-8")

    def swap(m):
        name = blobs.get(m.group(1), "")
        if not name or name.startswith("placeholder"):
            return "data:,"  # empty: placeholder from another studio, not used on the site
        return media_url(cloud, name)

    for page in PAGES:
        on = ACTIVE.get(page, "")
        head = re.sub(r"\{\{on:(\w+)\}\}", lambda m: "on" if m.group(1) == on else "", header)
        body = (SRC / f"{page}.html").read_text(encoding="utf-8")
        html = "\n".join([head, body, footer])
        html = re.sub(r"/_blob/([0-9a-f]{32})", swap, html)
        html = html.replace(".dc.html", ".html").replace("{{time}}", "15:00")
        doc = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{page} | Daniekeys Studios design (offline copy)</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300..600&family=Geist+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,200..400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css"></head>
<body><div class="dk">
{html}
</div></body></html>
"""
        (OUT / f"{page}.html").write_text(doc, encoding="utf-8")
    print(f"Built {len(PAGES)} pages in {OUT} (media from Cloudinary cloud '{cloud}').")


def shots():
    from playwright.sync_api import sync_playwright

    out = HERE / "screens"
    out.mkdir(exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for page in PAGES:
            for label, width in (("desktop", 1440), ("mobile", 390)):
                tab = browser.new_page(viewport={"width": width, "height": 900})
                tab.goto((OUT / f"{page}.html").as_uri(), wait_until="load")
                tab.wait_for_timeout(1500)
                tab.screenshot(path=str(out / f"{page}-{label}.png"), full_page=True)
                tab.close()
                print(f"saved screens/{page}-{label}.png")
        browser.close()


if __name__ == "__main__":
    build()
    if "--shots" in sys.argv:
        shots()
