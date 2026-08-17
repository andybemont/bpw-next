import "@/app/ui/global.css";
import { lato } from "@/app/ui/fonts";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnalyticsBootstrap from "./ui/analytics/analytics-bootstrap";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_URL,
} from "@/app/lib/seo";
import { JsonLd, websiteStructuredData } from "@/app/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rochester Wedding Photography by Bemont Photo",
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Bemont Photo",
  category: "Wedding Photography",
  openGraph: {
    siteName: "Bemont Photo Wedding Photography",
    locale: "en_US",
    type: "website",
    url: SITE_URL,
    title: "Rochester Wedding Photography by Bemont Photo",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: DEFAULT_OG_IMAGE_ALT,
        width: 1920,
        height: 1280,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rochester Wedding Photography by Bemont Photo",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <body className={`${lato.className} antialiased`}>
        <GoogleTagManager gtmId="AW-855505561" />
        <AnalyticsBootstrap />
        <JsonLd data={websiteStructuredData} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
