import { Gallery, allGalleries, isClientGallery } from "../../lib/galleries";
import { allPortfolioImages } from "../../lib/portfolio";
import Link from "next/link";
import PageBase from "../page-base";
import PageAnalytics from "../analytics/page-analytics";
import CheckAvailabilityCta from "../shared/check-availability-cta";
import GalleryGrid from "./gallery-grid";

function findAdjacentGallery(gallery: Gallery, direction: "next" | "previous") {
  const navigable = allGalleries.filter(
    (entry): entry is Gallery => !isClientGallery(entry),
  );
  const currentIndex = navigable.findIndex((entry) => entry.link === gallery.link);
  if (currentIndex === -1) return null;
  const step = direction === "next" ? 1 : -1;
  return navigable[(currentIndex + step + navigable.length) % navigable.length];
}

function GalleryNavigation({
  previousGallery,
  nextGallery,
}: {
  previousGallery: Gallery | null;
  nextGallery: Gallery | null;
}) {
  return (
    <nav
      aria-label="Gallery navigation"
      className="mx-auto grid max-w-[96rem] grid-cols-[1fr_auto_1fr] border-y border-primary-300/60"
    >
      <Link
        href={`/galleries/${previousGallery?.link}`}
        className="group flex min-h-20 flex-col justify-center px-2 py-4 transition-colors hover:text-[#a85235] sm:min-h-24 sm:px-5"
      >
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#66858a]">← Previous</span>
        <span className="mt-1 hidden font-display text-lg font-medium leading-tight sm:block">{previousGallery?.title}</span>
      </Link>
      <Link
        href="/gallery"
        className="editorial-link mx-3 flex min-h-20 items-center px-1 text-center text-[0.65rem] font-medium uppercase tracking-[0.16em] transition-colors hover:text-[#a85235] sm:min-h-24 sm:px-3"
      >
        All galleries
      </Link>
      <Link
        href={`/galleries/${nextGallery?.link}`}
        className="group flex min-h-20 flex-col items-end justify-center px-2 py-4 text-right transition-colors hover:text-[#a85235] sm:min-h-24 sm:px-5"
      >
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#66858a]">Next →</span>
        <span className="mt-1 hidden font-display text-lg font-medium leading-tight sm:block">{nextGallery?.title}</span>
      </Link>
    </nav>
  );
}

export default function GalleryPage({ gallery, text }: { gallery: Gallery; text?: string }) {
  const previousGallery = findAdjacentGallery(gallery, "previous");
  const nextGallery = findAdjacentGallery(gallery, "next");
  const pictures = gallery.filter(allPortfolioImages);

  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Galleries">
      <PageAnalytics event="gallery_view" gallerySlug={gallery.link} />
      <main className="px-3 pb-20 pt-16 sm:px-5 sm:pb-28 sm:pt-24">
        <header className="mx-auto max-w-5xl px-3 pb-12 text-center sm:px-6 sm:pb-14">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">
            A Bemont Photo gallery
          </p>
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.04em] text-balance">
            {gallery.title}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-primary-700 sm:text-lg sm:leading-8">
            {gallery.description}
          </p>
          {text ? <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-700">{text}</p> : null}
        </header>

        <GalleryNavigation previousGallery={previousGallery} nextGallery={nextGallery} />

        <div className="mt-4 sm:mt-5">
        <GalleryGrid images={pictures} />
        </div>

        <div className="mt-14 sm:mt-20">
          <GalleryNavigation previousGallery={previousGallery} nextGallery={nextGallery} />
        </div>

        <div className="mx-auto mt-12 flex max-w-[96rem] justify-center sm:mt-16 sm:justify-end">
          <CheckAvailabilityCta source={`gallery_${gallery.link}`} fullWidthOnMobile />
        </div>
      </main>
    </PageBase>
  );
}
