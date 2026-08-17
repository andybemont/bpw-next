import { IBM_Plex_Sans, Manrope } from "next/font/google";

const display = Manrope({
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

export const fontSystemBClassName = `${display.variable} ${body.variable}`;
