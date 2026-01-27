import { Gallery, allGalleries } from "../../lib/galleries";
import { allPortfolioImages } from "../../lib/best-ofs";
import Link from "next/link";
import PageBase from "../page-base";
import SitePage from "../shared/site-page";
import FavoritesCarousel from "../shared/favorites-carousel";
import CheckAvailabilityCta from "../shared/check-availability-cta";

export default function GalleryPage(props: {
  gallery: Gallery;
  text?: string;
}) {
  const { gallery, text } = props;

  // Figure out the next gallery so we can make a link to it
  var nextGallery: Gallery | null = null;
  var nextGalleryIndex = allGalleries.indexOf(gallery) + 1;
  while (nextGallery === null) {
    if (nextGalleryIndex >= allGalleries.length) {
      nextGalleryIndex = 0;
    }
    var candidate = allGalleries[nextGalleryIndex] as Gallery;
    if (candidate && candidate.link) {
      nextGallery = candidate;
      break;
    }
    nextGalleryIndex++;
  }

  // Figure out the previous gallery so we can make a link to it
  var previousGallery: Gallery | null = null;
  var previousGalleryIndex = allGalleries.indexOf(gallery) - 1;
  while (previousGallery === null) {
    if (previousGalleryIndex < 0) {
      previousGalleryIndex = allGalleries.length - 1;
    }
    var candidate = allGalleries[previousGalleryIndex] as Gallery;
    if (candidate && candidate.link) {
      previousGallery = candidate;
      break;
    }
    previousGalleryIndex--;
  }

  // Get the list of pictures for this gallery, sorted so landscapes are first (lazy but reasonably effective for now)
  var pictureList = gallery.filter(allPortfolioImages);
  pictureList = pictureList.sort(
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
                    href={`../galleries/${previousGallery.link}`}
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
                    href={`../galleries/${nextGallery.link}`}
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

          <div className="space-y-4 text-base text-primary-900">
            {text && <p>{text}</p>}
          </div>

          <CheckAvailabilityCta className="pt-1" />

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
