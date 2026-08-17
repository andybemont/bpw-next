import { fontSystemAClassName } from "./fonts/system-a";
import { fontSystemBClassName } from "./fonts/system-b";
import { fontSystemCClassName } from "./fonts/system-c";

export type FontSystemId = "a" | "b" | "c";

export const fontSystemLabels: Record<FontSystemId, string> = {
  a: "Editorial / Documentary — Fraunces + Source Sans 3",
  b: "Modern Humanist — Manrope + IBM Plex Sans",
  c: "Distinctive Classic — Newsreader + IBM Plex Sans",
};

export function getActiveFontSystem(): FontSystemId {
  const value = process.env.NEXT_PUBLIC_FONT_SYSTEM;
  if (value === "b" || value === "c") {
    return value;
  }
  return "a";
}

export function getFontSystemClassName() {
  switch (getActiveFontSystem()) {
    case "b":
      return fontSystemBClassName;
    case "c":
      return fontSystemCClassName;
    case "a":
    default:
      return fontSystemAClassName;
  }
}
