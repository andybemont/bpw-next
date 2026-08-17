import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGallerySlugs, getGalleryBySlug } from "@/app/lib/galleries";
import GalleryPage from "@/app/ui/gallery-page/gallery-page";
import { buildPageMetadata } from "@/app/lib/seo";
import {
  breadcrumbStructuredData,
  galleryStructuredData,
  JsonLd,
} from "@/app/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllGallerySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    return {};
  }

  return buildPageMetadata({
    title: gallery.seoTitle,
    description: gallery.seoDescription,
    path: `galleries/${gallery.link}`,
    ogImage: gallery.image.image.src,
    ogImageAlt: gallery.image.alt,
    ogImageWidth: gallery.image.image.width,
    ogImageHeight: gallery.image.image.height,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          galleryStructuredData({
            title: gallery.title,
            description: gallery.seoDescription,
            slug: gallery.link,
            imagePath: gallery.image.image.src,
          }),
          breadcrumbStructuredData([
            { name: "Home", path: "" },
            { name: "Galleries", path: "gallery" },
            { name: gallery.title, path: `galleries/${gallery.link}` },
          ]),
        ]}
      />
      <GalleryPage gallery={gallery} />
    </>
  );
}
