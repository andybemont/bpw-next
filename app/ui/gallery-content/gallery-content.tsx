"use client";

import Image from "next/image";
import {
  allGalleries,
  ClientGallery,
  Gallery,
  isClientGallery,
} from "../../lib/galleries";
import Link from "next/link";
import CheckAvailabilityCta from "../shared/check-availability-cta";
import { trackEvent } from "@/app/lib/analytics";

export default function GalleryContent() {
  return (
    <section>
      <div className="w-full">
        <h1 className="text-center text-5xl">Wedding Photo Galleries</h1>
        <p className="text-center text-2xl">
          Some of our favorite shots since 2018
        </p>
        <ul className="mt-8 grid w-full gap-5 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {allGalleries.map((gallery) => {
            const isExternal = isClientGallery(gallery);
            const href = isExternal
              ? (gallery as ClientGallery).url
              : `/galleries/${(gallery as Gallery).link}`;

            return (
              <li
                key={isExternal ? gallery.url : gallery.link}
                className="group overflow-hidden rounded-2xl border border-primary-900/30 bg-white text-primary-900 transition-all hover:bg-primary-950 hover:text-primary-50"
              >
                <Link
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  onClick={
                    isExternal
                      ? () =>
                          trackEvent("full_wedding_link_click", {
                            gallery: gallery.title,
                          })
                      : undefined
                  }
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={gallery.image.image}
                      alt={gallery.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 px-4 py-4">
                    <h3 className="text-xl font-semibold sm:text-2xl">
                      {gallery.title}
                    </h3>
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
