import "@/app/ui/global.css";
import { titleText } from "@/app/ui/fonts";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleHelper } from "./ui/google";

export const metadata: Metadata = {
  openGraph: {
    siteName: "Rochester Wedding Photography by Bemont Photo",
    title: "Rochester Wedding Photography by Bemont Photo",
    description:
      "Wedding Photography for Rochester, Buffalo, and the Finger Lakes",
    url: "https://www.bemontphoto.com",
    type: "website",
    images: {
      url: "/portfolio/bemont-photo-230916191334.jpg",
      alt: "Rochester Wedding Photography by Bemont Photo",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="AW-855505561" />
      <GoogleHelper />
      <body className={`${titleText.className} antialiased`}>{children}</body>
    </html>
  );
}
