"use client";

import type { PortfolioImage } from "@/app/lib/portfolio";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function getPhotoCredit(image: PortfolioImage) {
  const couple = image.caption
    .split(/\s+(?:at|in)\s+/)[0]
    .replace(" and ", " & ");
  const dateParts = image.image.src.match(/bemont-photo-(\d{2})(\d{2})(\d{2})/);

  if (!dateParts) return { couple, date: null, dateTime: undefined };

  const [, year, month, day] = dateParts;
  const dateTime = `20${year}-${month}-${day}`;
  const date = dateFormatter.format(
    new Date(Date.UTC(Number(`20${year}`), Number(month) - 1, Number(day))),
  );

  return { couple, date, dateTime };
}

function getColumnStartIndexes(images: PortfolioImage[]) {
  const starts = new Set([0]);
  const weights = images.map((image) => image.image.height / image.image.width);
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  const targets = [total / 3, total / 2, (total * 2) / 3];

  for (const target of targets) {
    let accumulated = 0;
    for (let index = 0; index < weights.length; index += 1) {
      accumulated += weights[index];
      if (accumulated >= target) {
        starts.add(index);
        starts.add(Math.min(index + 1, images.length - 1));
        break;
      }
    }
  }

  return starts;
}

export default function GalleryGrid({ images }: { images: PortfolioImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const suppressNextClick = useRef(false);
  const columnStartIndexes = getColumnStartIndexes(images);

  const showNext = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
  }, [images.length]);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, images.length, showNext, showPrevious]);

  return (
    <>
      <ul className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
        {images.map((image, index) => {
          const credit = getPhotoCredit(image);

          return (
            <li key={image.id} className="mb-5 break-inside-avoid sm:mb-6">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block w-full overflow-hidden bg-primary-100"
                aria-label={`Enlarge image: ${image.alt}`}
              >
                <Image
                  src={image.image.src}
                  alt={image.alt}
                  width={image.image.width}
                  height={image.image.height}
                  loading={columnStartIndexes.has(index) ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
                  className="h-auto w-full transition duration-700 ease-out group-hover:scale-[1.012]"
                />
              </button>
              <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-0.5 text-center text-[0.67rem] leading-4 tracking-[0.025em] text-primary-600">
                <span>{credit.couple}</span>
                {credit.date ? (
                  <>
                    <span className="h-1 w-1 rounded-full bg-[#a85235]/65" aria-hidden="true" />
                    <time dateTime={credit.dateTime}>{credit.date}</time>
                  </>
                ) : null}
              </p>
            </li>
          );
        })}
      </ul>

      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photograph"
          className="fixed inset-0 z-50 grid place-items-center bg-[#171914]/[0.97] p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex min-h-11 items-center px-3 font-display text-lg text-primary-50 underline decoration-primary-300/60 underline-offset-4 sm:right-8"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              if (suppressNextClick.current) {
                suppressNextClick.current = false;
                return;
              }
              showNext();
            }}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const distance = event.changedTouches[0].clientX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(distance) < 48) return;
              suppressNextClick.current = true;
              if (distance < 0) showNext();
              else showPrevious();
            }}
            className="relative h-[84svh] w-full max-w-[96rem] cursor-e-resize touch-pan-y"
            aria-label="Show next photograph"
          >
            <Image
              src={images[activeIndex].image.src}
              alt={images[activeIndex].alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </button>
          <span className="pointer-events-none absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-primary-50/70 sm:hidden">
            Swipe
          </span>
        </div>
      ) : null}
    </>
  );
}
