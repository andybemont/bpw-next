import { IBM_Plex_Sans, Literata } from "next/font/google";

const display = Literata({
  subsets: ["latin"],
  variable: "--font-bemont-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-bemont-body",
  display: "swap",
});

export function getBrandFontClassName() {
  return `${display.variable} ${body.variable}`;
}
