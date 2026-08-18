"use client";

import type { PortfolioImage } from "@/app/lib/portfolio";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ExplorablePhoto({
  images,
  className = "",
}: {
  images: PortfolioImage[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % images.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  if (!images.length) return null;

  return (
    <>
      <div className={`overflow-hidden ${className}`.trim()}>
        <div
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-6 pb-2 sm:gap-5 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2))]"
          aria-label="Selected Bemont Photo images. Swipe or scroll for more."
        >
          {images.map((image, index) => (
            <button
              type="button"
              key={image.id}
              onClick={() => setActiveIndex(index)}
              className="relative aspect-[5/3] w-[88vw] max-w-[76rem] flex-none snap-start overflow-hidden bg-primary-100 text-left"
              aria-label={`Enlarge image: ${image.alt}`}
            >
              <Image
                src={image.image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1440px) 88vw, 1216px"
                className="object-cover transition duration-700 ease-out hover:scale-[1.015]"
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Expanded photograph"
          className="fixed inset-0 z-50 grid place-items-center bg-[#171914]/95 p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveIndex(null);
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex min-h-11 items-center px-3 font-display text-lg text-primary-50 underline decoration-primary-300/60 underline-offset-4 sm:right-8"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((activeIndex + 1) % images.length)
            }
            className="relative h-[82svh] w-full max-w-[92rem] cursor-e-resize"
            aria-label="Show next photograph"
          >
            <Image
              src={images[activeIndex].image.src}
              alt={images[activeIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </button>
        </div>
      ) : null}
    </>
  );
}
