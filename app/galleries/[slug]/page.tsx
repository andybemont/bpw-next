import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGallerySlugs, getGalleryBySlug } from "@/app/lib/galleries";
import GalleryPage from "@/app/ui/gallery-page/gallery-page";

const SITE_URL = "https://www.bemontphoto.com";

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

  return {
    title: gallery.seoTitle,
    description: gallery.seoDescription,
    alternates: {
      canonical: `${SITE_URL}/galleries/${gallery.link}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    notFound();
  }

  return <GalleryPage gallery={gallery} />;
}
