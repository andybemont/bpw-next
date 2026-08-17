import type { MetadataRoute } from "next";
import { getAllGallerySlugs } from "@/app/lib/galleries";

const SITE_URL = "https://www.bemontphoto.com";

const staticRoutes = [
  "",
  "faq",
  "pricing",
  "contact",
  "team",
  "who-were-for",
  "gallery",
  "wedding-photography/rochester-ny",
  "wedding-photography/buffalo-ny",
  "wedding-photography/finger-lakes",
  "wedding-photography/western-ny",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((route) => ({
    url: route ? `${SITE_URL}/${route}` : SITE_URL,
    lastModified: now,
  }));

  const galleryPages = getAllGallerySlugs().map((slug) => ({
    url: `${SITE_URL}/galleries/${slug}`,
    lastModified: now,
  }));

  return [...pages, ...galleryPages];
}
