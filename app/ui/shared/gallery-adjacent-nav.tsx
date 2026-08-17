import Link from "next/link";
import { Gallery } from "@/app/lib/galleries";

export default function GalleryAdjacentNav({
  previousGallery,
  nextGallery,
  className = "",
}: {
  previousGallery: Gallery | null;
  nextGallery: Gallery | null;
  className?: string;
}) {
  if (!previousGallery && !nextGallery) {
    return null;
  }

  return (
    <nav
      className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${className}`.trim()}
      aria-label="Gallery navigation"
    >
      {previousGallery ? (
        <Link
          href={`/galleries/${previousGallery.link}`}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-primary-900/40 px-4 py-3 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50 text-center"
        >
          <span className="mr-1" aria-hidden="true">
            ←
          </span>
          <span className="line-clamp-2">{previousGallery.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {nextGallery ? (
        <Link
          href={`/galleries/${nextGallery.link}`}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-primary-900/40 px-4 py-3 text-sm font-semibold text-primary-900 transition hover:border-primary-900 hover:bg-primary-50 text-center sm:col-start-2"
        >
          <span className="line-clamp-2">{nextGallery.title}</span>
          <span className="ml-1" aria-hidden="true">
            →
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
