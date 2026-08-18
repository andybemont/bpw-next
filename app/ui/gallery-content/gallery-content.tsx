"use client";

import Image from "next/image";
import Link from "next/link";
import { allGalleries, ClientGallery, Gallery, isClientGallery } from "../../lib/galleries";
import CheckAvailabilityCta from "../shared/check-availability-cta";
import { trackEvent } from "@/app/lib/analytics";

export default function GalleryContent() {
  return (
    <section className="px-4 sm:px-6">
      <header className="mx-auto max-w-6xl px-2 pb-14 sm:pb-20 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#a85235]">The work</p>
          <h1 className="font-display text-[clamp(3.4rem,8vw,8.5rem)] font-medium leading-[0.91] tracking-[-0.05em] text-balance">
            Weddings are gloriously unrepeatable.
          </h1>
        </div>
        <p className="mt-8 max-w-lg text-base leading-7 text-primary-700 sm:text-lg sm:leading-8 lg:mt-0">
          Explore the loud moments, the quiet ones, the beautiful plans, and the excellent accidents. These photographs span every year we’ve been in business.
        </p>
      </header>

      <ul className="mx-auto grid max-w-6xl border-l border-t border-primary-300/60 sm:grid-cols-2 lg:grid-cols-3">
        {allGalleries.map((gallery, index) => {
          const external = isClientGallery(gallery);
          const href = external ? (gallery as ClientGallery).url : `/galleries/${(gallery as Gallery).link}`;

          return (
            <li
              key={external ? gallery.url : gallery.link}
              className="border-b border-r border-primary-300/60"
            >
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex h-full flex-col p-4 sm:p-5"
                onClick={external ? () => trackEvent("full_wedding_link_click", { gallery: gallery.title }) : undefined}
              >
                <div className="flex min-h-4 items-start justify-between gap-4 text-[0.62rem] font-medium uppercase tracking-[0.19em] text-[#66858a]">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {external ? <span>Complete wedding ↗</span> : null}
                </div>

                <div
                  className={`relative mt-4 aspect-[4/3] overflow-hidden ${
                    external ? "bg-[#66858a]" : "bg-[#a85235]"
                  }`}
                >
                  <Image
                    src={gallery.image.image}
                    alt={gallery.image.alt}
                    fill
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:opacity-15 group-focus-visible:scale-[1.025] group-focus-visible:opacity-15"
                  />
                  <span className="absolute inset-0 grid translate-y-2 place-items-center px-4 text-center text-xs font-medium uppercase tracking-[0.22em] text-primary-50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {external ? "View complete wedding ↗" : "View gallery →"}
                  </span>
                </div>

                <h2
                  className={`mt-4 font-display text-[clamp(1.45rem,2.2vw,2rem)] font-medium leading-[1.04] tracking-[-0.02em] transition-colors ${
                    external
                      ? "group-hover:text-[#66858a] group-focus-visible:text-[#66858a]"
                      : "group-hover:text-[#a85235] group-focus-visible:text-[#a85235]"
                  }`}
                >
                  {gallery.title}
                </h2>
                <p className="mt-2 max-w-md text-xs leading-5 text-primary-700">
                  {gallery.description}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mx-auto max-w-5xl py-20 text-center sm:py-28">
        <p className="mx-auto mb-8 max-w-3xl font-display text-[clamp(2.3rem,4.5vw,4.8rem)] font-medium leading-[1.03] tracking-[-0.035em] text-balance">
          If these feel like people you’d want at your own wedding, we should probably talk.
        </p>
        <CheckAvailabilityCta fullWidthOnMobile />
      </div>
    </section>
  );
}
