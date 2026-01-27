import Image from "next/image";
import { allGalleries, ClientGallery, Gallery } from "../../lib/galleries";
import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";

export default function GalleryContent() {
  var count = 0;
  return (
    <section>
      <div className="w-full">
        <h2 className="text-center text-5xl">Wedding Photo Galleries</h2>
        <h3 className="text-center text-2xl">
          Some of our favorite shots since 2018
        </h3>
        <ul className="mt-8 grid w-full gap-5 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {allGalleries.map((gallery) => {
            var href = "";
            var target = "";
            if ((gallery as ClientGallery) && (gallery as ClientGallery).url) {
              href = (gallery as ClientGallery).url;
              target = "_blank";
            } else {
              href = "../galleries/" + (gallery as Gallery).link;
              target = "_self";
            }

            return (
              <li
                key={++count}
                className={`group overflow-hidden rounded-2xl border border-primary-900/30 bg-white text-primary-900 transition-all hover:bg-primary-950 hover:text-primary-50`}
              >
                <Link href={href} target={target}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={gallery.image.image}
                      alt={gallery.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={count <= 8 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 px-4 py-4">
                    <h4 className="text-xl font-semibold sm:text-2xl">
                      {gallery.title}
                    </h4>
                    <p className="text-sm text-primary-700 group-hover:text-primary-100">
                      {gallery.description}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <CheckAvailabilityCta className="pt-8" />
      </div>
    </section>
  );
}
