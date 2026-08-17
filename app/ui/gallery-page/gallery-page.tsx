import { Gallery, allGalleries, isClientGallery } from "../../lib/galleries";
import { allPortfolioImages } from "../../lib/portfolio";
import Link from "next/link";
import PageBase from "../page-base";
import SitePage from "../shared/site-page";
import FavoritesCarousel from "../shared/favorites-carousel";
import PageAnalytics from "../analytics/page-analytics";
import GalleryAdjacentNav from "../shared/gallery-adjacent-nav";
import CheckAvailabilityCta from "../shared/check-availability-cta";

function findAdjacentGallery(
  gallery: Gallery,
  direction: "next" | "previous",
): Gallery | null {
  const navigable = allGalleries.filter(
    (entry): entry is Gallery => !isClientGallery(entry),
  );
  const currentIndex = navigable.findIndex((entry) => entry.link === gallery.link);
  if (currentIndex === -1) {
    return null;
  }

  const step = direction === "next" ? 1 : -1;
  const adjacentIndex =
    (currentIndex + step + navigable.length) % navigable.length;
  return navigable[adjacentIndex];
}

export default function GalleryPage(props: {
  gallery: Gallery;
  text?: string;
}) {
  const { gallery, text } = props;
  const previousGallery = findAdjacentGallery(gallery, "previous");
  const nextGallery = findAdjacentGallery(gallery, "next");

  const pictureList = gallery
    .filter(allPortfolioImages)
    .sort(
      (p1, p2) =>
        p1.image.height / p1.image.width - p2.image.height / p2.image.width,
    );

  return (
    <PageBase
      h1Text="Bemont Photo Wedding Photography"
      h2Text="Galleries & Inspo"
      showFavoritesCarousel={false}
    >
      <PageAnalytics event="gallery_view" gallerySlug={gallery.link} />
      <SitePage fullWidth>
        <div className="space-y-10 px-5 sm:px-6">
          <header className="space-y-3">
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">
              {gallery.title}
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base text-primary-700 sm:text-lg md:text-xl">
              {gallery.description}
            </p>
          </header>

          {text && (
            <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-primary-900">
              <p>{text}</p>
            </div>
          )}

          <section>
            <FavoritesCarousel images={pictureList} shuffle={false} />
          </section>

          <GalleryAdjacentNav
            previousGallery={previousGallery}
            nextGallery={nextGallery}
          />

          <CheckAvailabilityCta
            className="pt-2"
            source={`gallery_${gallery.link}`}
            fullWidthOnMobile
          />

          <div className="pt-1">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Pricing", href: "/pricing" },
                { label: "The Team", href: "/team" },
                { label: "Who We’re For", href: "/who-were-for" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-primary-900/40 px-4 py-2.5 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50 sm:w-[200px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SitePage>
    </PageBase>
  );
}
