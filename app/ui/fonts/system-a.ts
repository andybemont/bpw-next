import { Fraunces, Source_Sans_3 } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontSystemAClassName = `${display.variable} ${body.variable}`;
