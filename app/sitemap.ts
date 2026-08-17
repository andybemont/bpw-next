import type { MetadataRoute } from "next";
import { getAllGallerySlugs } from "@/app/lib/galleries";
import { SITE_URL } from "@/app/lib/seo";

const staticRoutes: Array<{ path: string; priority: number }> = [
  { path: "", priority: 1 },
  { path: "pricing", priority: 0.9 },
  { path: "faq", priority: 0.8 },
  { path: "gallery", priority: 0.8 },
  { path: "team", priority: 0.7 },
  { path: "who-were-for", priority: 0.6 },
  { path: "wedding-photography/rochester-ny", priority: 0.9 },
  { path: "wedding-photography/buffalo-ny", priority: 0.8 },
  { path: "wedding-photography/finger-lakes", priority: 0.8 },
  { path: "wedding-photography/western-ny", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map(({ path, priority }) => ({
    url: path ? `${SITE_URL}/${path}` : SITE_URL,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const galleryPages = getAllGallerySlugs().map((slug) => ({
    url: `${SITE_URL}/galleries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...galleryPages];
}
