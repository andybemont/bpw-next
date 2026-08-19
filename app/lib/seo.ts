import type { Metadata } from "next";

export const SITE_URL = "https://www.bemontphoto.com";
export const SITE_NAME = "Bemont Photo";

export const DEFAULT_OG_IMAGE = "/portfolio/bemont-photo-230916191334.jpg";
export const DEFAULT_OG_IMAGE_ALT =
  "Couple in a field at a Rochester, NY wedding photographed by Bemont Photo";

export const DEFAULT_DESCRIPTION =
  "Rochester wedding photographers serving Buffalo, Syracuse, the Finger Lakes, and Western New York. Candid, natural wedding coverage from a family team. Packages from $3,200.";

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  /** Path without leading slash, e.g. "faq" or "galleries/candid-wedding-photos". Empty for home. */
  path?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  noIndex?: boolean;
};

function toAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function toAbsoluteImageUrl(image: string) {
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  ogImageWidth = 1920,
  ogImageHeight = 1280,
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const url = path ? `${SITE_URL}/${path.replace(/^\//, "")}` : SITE_URL;
  const imageUrl = toAbsoluteImageUrl(ogImage);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${SITE_NAME} Wedding Photography`,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: ogImageAlt,
          width: ogImageWidth,
          height: ogImageHeight,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export { toAbsoluteUrl, toAbsoluteImageUrl };
