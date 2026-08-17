"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import galleries from "@/app/lib/galleries";
import { allPortfolioImages, PortfolioImage } from "@/app/lib/portfolio";
import namedPortfolioImages from "@/app/lib/named-portfolio-images";

const SLIDE_INTERVAL_MS = 6500;
const MANUAL_PAUSE_MS = 30_000;

const EXCLUDED_FAVORITE_IDS = new Set([
  namedPortfolioImages.aliciaField.id,
  namedPortfolioImages.kidsWithDog.id,
  namedPortfolioImages.kacieDip.id,
  namedPortfolioImages.lydiaFlowers.id,
]);

type FavoritesCarouselProps = {
  images?: PortfolioImage[];
  shuffle?: boolean;
  priorityActiveImage?: boolean;
  pauseForeverOnManual?: boolean;
};

export default function FavoritesCarousel({
  images,
  shuffle = true,
  priorityActiveImage = true,
  pauseForeverOnManual = false,
}: FavoritesCarouselProps) {
  const baseImages = useMemo(() => {
    if (images?.length) {
      return images;
    }

    return galleries.favorites
      .filter(allPortfolioImages)
      .filter((image) => !EXCLUDED_FAVORITE_IDS.has(image.id))
      .filter((image) => image.image.width >= image.image.height);
  }, [images]);

  const [shuffledImages, setShuffledImages] = useState(baseImages);
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasBeenFullscreen, setHasBeenFullscreen] = useState(false);
  const [isAutoAdvancePaused, setIsAutoAdvancePaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const resumeTimerRef = useRef<number | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!baseImages.length) {
      return;
    }

    if (!shuffle || prefersReducedMotion) {
      setShuffledImages(baseImages);
      setIndex(0);
      return;
    }

    const copy = [...baseImages];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const swapIndex = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[swapIndex]] = [copy[swapIndex], copy[i]];
    }

    setShuffledImages(copy);
    setIndex(copy.length ? Math.floor(Math.random() * copy.length) : 0);
  }, [baseImages, shuffle, prefersReducedMotion]);

  useEffect(() => {
    if (
      shuffledImages.length <= 1 ||
      isFullscreen ||
      isAutoAdvancePaused ||
      prefersReducedMotion
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % shuffledImages.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [shuffledImages.length, isFullscreen, isAutoAdvancePaused, prefersReducedMotion]);

  const pauseAutoplayTemporarily = useCallback(() => {
    setIsAutoAdvancePaused(true);

    if (pauseForeverOnManual) {
      return;
    }

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setIsAutoAdvancePaused(false);
      resumeTimerRef.current = null;
    }, MANUAL_PAUSE_MS);
  }, [pauseForeverOnManual]);

  const goNext = useCallback(
    (manual?: boolean) => {
      if (manual) {
        pauseAutoplayTemporarily();
      }
      setIndex((current) => (current + 1) % shuffledImages.length);
    },
    [pauseAutoplayTemporarily, shuffledImages.length],
  );

  const goPrevious = useCallback(
    (manual?: boolean) => {
      if (manual) {
        pauseAutoplayTemporarily();
      }
      setIndex(
        (current) =>
          (current - 1 + shuffledImages.length) % shuffledImages.length,
      );
    },
    [pauseAutoplayTemporarily, shuffledImages.length],
  );

  useEffect(() => {
    if (!isFullscreen) {
      return;
    }

    setHasBeenFullscreen(true);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
      if (event.key === "ArrowLeft") {
        goPrevious(true);
      }
      if (event.key === "ArrowRight") {
        goNext(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isFullscreen, goNext, goPrevious]);

  useEffect(() => {
    if (isFullscreen || !hasBeenFullscreen) {
      return;
    }
    openerRef.current?.focus();
  }, [isFullscreen, hasBeenFullscreen]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  if (!shuffledImages.length) {
    return null;
  }

  const activeImage = shuffledImages[index];
  const previousImage =
    shuffledImages[(index - 1 + shuffledImages.length) % shuffledImages.length];
  const nextImage = shuffledImages[(index + 1) % shuffledImages.length];

  return (
    <section className="bg-white overflow-x-hidden">
      <div className="relative w-full overflow-visible">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
          <div className="relative w-full overflow-visible">
            <div className="relative grid w-full items-center gap-4 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
              <div className="hidden sm:flex justify-end">
                <button
                  type="button"
                  onClick={() => goPrevious(true)}
                  aria-label="Previous image"
                  className="relative h-[300px] w-auto max-w-[520px] flex-none overflow-hidden rounded-2xl sm:h-[420px] md:h-[520px]"
                  style={{
                    aspectRatio: `${previousImage.image.width} / ${previousImage.image.height}`,
                  }}
                >
                  <Image
                    src={previousImage.image.src}
                    alt={previousImage.alt}
                    fill
                    sizes="(max-width: 1024px) 40vw, 560px"
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </button>
              </div>

              <button
                type="button"
                ref={openerRef}
                onClick={() => setIsFullscreen(true)}
                aria-label="Open full screen gallery"
                className="relative mx-auto h-[300px] w-auto max-w-[800px] flex-none overflow-hidden rounded-2xl sm:h-[420px] md:h-[520px]"
                style={{
                  aspectRatio: `${activeImage.image.width} / ${activeImage.image.height}`,
                }}
              >
                <Image
                  src={activeImage.image.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                  priority={priorityActiveImage}
                />
              </button>

              <div className="hidden sm:flex justify-start">
                <button
                  type="button"
                  onClick={() => goNext(true)}
                  aria-label="Next image"
                  className="relative h-[300px] w-auto max-w-[520px] flex-none overflow-hidden rounded-2xl sm:h-[420px] md:h-[520px]"
                  style={{
                    aspectRatio: `${nextImage.image.width} / ${nextImage.image.height}`,
                  }}
                >
                  <Image
                    src={nextImage.image.src}
                    alt={nextImage.alt}
                    fill
                    sizes="(max-width: 1024px) 40vw, 560px"
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent" />
                </button>
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2">
                <button
                  type="button"
                  onClick={() => goPrevious(true)}
                  aria-label="Previous image"
                  className="pointer-events-auto absolute left-0 top-0 z-20 flex h-full w-16 items-center justify-center text-primary-900/80 transition hover:text-primary-900 focus-visible:text-primary-900"
                >
                  <span className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow-sm transition hover:bg-white hover:ring-1 hover:ring-primary-900/20">
                    <svg
                      className="h-6 w-6"
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
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => goNext(true)}
                  aria-label="Next image"
                  className="pointer-events-auto absolute right-0 top-0 z-20 flex h-full w-16 items-center justify-center text-primary-900/80 transition hover:text-primary-900 focus-visible:text-primary-900"
                >
                  <span className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-white/90 via-white/60 to-transparent" />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow-sm transition hover:bg-white hover:ring-1 hover:ring-primary-900/20">
                    <svg
                      className="h-6 w-6"
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
                  </span>
                </button>
              </div>
            </div>

            {activeImage.caption && (
              <p className="mt-3 text-center text-sm text-primary-700">
                {activeImage.caption}
              </p>
            )}
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[70] bg-black/90"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsFullscreen(false);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen gallery"
        >
          <button
            type="button"
            ref={closeButtonRef}
            onClick={(event) => {
              event.stopPropagation();
              setIsFullscreen(false);
            }}
            aria-label="Close full screen gallery"
            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:text-white"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => goPrevious(true)}
            aria-label="Previous image"
            className="absolute left-0 top-0 z-10 flex h-full w-20 items-center justify-center text-white/80 transition hover:text-white"
          >
            <span className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/50 to-transparent" />
            <svg
              className="relative h-7 w-7"
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
          </button>

          <button
            type="button"
            onClick={() => goNext(true)}
            aria-label="Next image"
            className="absolute right-0 top-0 z-10 flex h-full w-20 items-center justify-center text-white/80 transition hover:text-white"
          >
            <span className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-black/50 to-transparent" />
            <svg
              className="relative h-7 w-7"
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
          </button>

          <div className="absolute inset-0 z-0 flex items-center justify-center px-6 pointer-events-none">
            <div className="relative h-full w-full max-w-6xl">
              <Image
                src={activeImage.image.src}
                alt={activeImage.alt}
                fill
                sizes="(min-width: 1536px) 1152px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
