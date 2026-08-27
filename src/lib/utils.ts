import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// tailwind-merge doesn't know about the custom scales added in
// tailwind.config.js for 01-DESIGN-SYSTEM.md (ds-* font sizes, radius-*,
// space-*). Without this, e.g. cn("text-ds-hero", "text-primary-white")
// silently drops "text-ds-hero" because tailwind-merge's default class
// groups treat any unrecognized `text-*` suffix as a text-color utility
// and dedupes it away. Registering the real groups keeps merges correct.
const SPACE_SCALE = [
  "space-1",
  "space-2",
  "space-3",
  "space-4",
  "space-5",
  "space-6",
  "space-7",
  "space-8",
  "space-9",
  "space-10",
];
const SPACING_GROUPS = [
  "p",
  "px",
  "py",
  "pt",
  "pr",
  "pb",
  "pl",
  "m",
  "mx",
  "my",
  "mt",
  "mr",
  "mb",
  "ml",
  "w",
  "h",
  "min-w",
  "max-w",
  "min-h",
  "max-h",
  "gap",
  "gap-x",
  "gap-y",
];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "ds-hero",
            "ds-h2",
            "ds-h3",
            "ds-h4",
            "ds-body-lg",
            "ds-body",
            "ds-small",
            "ds-micro",
          ],
        },
      ],
      rounded: [
        { rounded: ["radius-sm", "radius-md", "radius-lg", "radius-xl", "radius-full"] },
      ],
      ...Object.fromEntries(
        SPACING_GROUPS.map((group) => [group, [{ [group]: SPACE_SCALE }]])
      ),
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
