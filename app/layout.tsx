import "@/app/ui/global.css";
import { titleText } from "@/app/ui/fonts";
import Header from "./ui/header/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    siteName: "Rochester Wedding Photography by Bemont Photo",
    title: "Rochester Wedding Photography by Bemont Photo",
    description:
      "Wedding Photography for Rochester, Buffalo, and the Finger Lakes",
    url: "https://www.bemontphoto.com",
    images: {
      url: "/portfolio/BPBO5-1140.jpg",
      alt: "Wedding Photography by Bemont Photo",
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
      <body className={`${titleText.className} antialiased`}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
