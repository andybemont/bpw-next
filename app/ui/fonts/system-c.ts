import { IBM_Plex_Sans, Newsreader } from "next/font/google";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontSystemCClassName = `${display.variable} ${body.variable}`;
