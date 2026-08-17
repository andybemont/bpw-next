import { Gallery, allGalleries, isClientGallery } from "../../lib/galleries";
import { allPortfolioImages } from "../../lib/portfolio";
import Link from "next/link";
import PageBase from "../page-base";
import SitePage from "../shared/site-page";
import FavoritesCarousel from "../shared/favorites-carousel";

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
      <SitePage fullWidth>
        <div className="space-y-10">
          <header className="space-y-3">
            <div className="relative mx-auto flex w-fit flex-col items-center">
              <div className="relative flex items-center justify-center">
                {previousGallery && (
                  <Link
                    href={`/galleries/${previousGallery.link}`}
                    className="absolute right-full mr-16 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-900/40 text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
                    aria-label={`Previous: ${previousGallery.title}`}
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </Link>
                )}
                <h2 className="text-4xl sm:text-5xl">{gallery.title}</h2>
                {nextGallery && (
                  <Link
                    href={`/galleries/${nextGallery.link}`}
                    className="absolute left-full ml-16 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-900/40 text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
                    aria-label={`Next: ${nextGallery.title}`}
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
            <p className="text-center text-lg text-primary-700 sm:text-xl">
              {gallery.description}
            </p>
          </header>

          {text && (
            <div className="space-y-4 text-base text-primary-900">
              <p>{text}</p>
            </div>
          )}

          <section>
            <FavoritesCarousel images={pictureList} shuffle={false} />
          </section>

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
                  className="inline-flex w-[200px] items-center justify-center rounded-full border border-primary-900/40 px-4 py-2 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50"
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
