"use client";

import { PortfolioImage } from "@/app/lib/best-ofs";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function SitePage(props: {
  image?: PortfolioImage;
  children: React.ReactNode;
  positioning?: string;
  heroAlign?: "auto" | "left" | "center" | "right";
  fullWidth?: boolean;
}) {
  const { image, children, positioning, heroAlign = "auto", fullWidth } = props;
  const heroContainerRef = useRef<HTMLDivElement | null>(null);
  const [autoAlign, setAutoAlign] = useState<"center" | "right">("center");

  useEffect(() => {
    if (!image) {
      return;
    }

    const updateAlign = () => {
      const container = heroContainerRef.current;
      if (!container) {
        return;
      }

      const viewportHeight = window.innerHeight;
      const containerWidth = container.clientWidth;
      const imageAspect = image.image.width / image.image.height;
      const imageWidthAtViewportHeight = viewportHeight * imageAspect;
      const shouldOverflow = imageWidthAtViewportHeight > containerWidth + 1;

      setAutoAlign(shouldOverflow ? "right" : "center");
    };

    updateAlign();
    window.addEventListener("resize", updateAlign);
    return () => window.removeEventListener("resize", updateAlign);
  }, [image]);

  const resolvedAlign =
    heroAlign === "auto"
      ? autoAlign
      : (heroAlign as "left" | "center" | "right");

  const heroAlignClass = useMemo(() => {
    return resolvedAlign === "right"
      ? "justify-end"
      : resolvedAlign === "left"
        ? "justify-start"
        : "justify-center";
  }, [resolvedAlign]);

  const heroObjectClass = useMemo(() => {
    return resolvedAlign === "right"
      ? "object-right"
      : resolvedAlign === "left"
        ? "object-left"
        : "object-center";
  }, [resolvedAlign]);

  const contentAlignClass = useMemo(() => "sm:mx-auto", []);
  return (
    <section className={`relative w-full ${image ? "" : "pt-[128px]"}`}>
      {image && (
        <div className="w-full bg-white">
          <div className="block md:hidden">
            <Image
              src={image.image}
              alt={image.alt}
              width={image.image.width}
              height={image.image.height}
              sizes="100vw"
              className={`w-full h-auto ${positioning || heroObjectClass}`}
            />
          </div>
          <div
            className={`hidden md:flex w-full h-[100svh] min-h-[420px] items-center ${heroAlignClass} overflow-hidden`}
          >
            <div
              ref={heroContainerRef}
              className={`flex w-full h-full ${heroAlignClass}`}
            >
              <Image
                src={image.image}
                alt={image.alt}
                width={image.image.width}
                height={image.image.height}
                sizes="100vw"
                className={`h-[100svh] w-auto max-w-none ${
                  positioning || heroObjectClass
                }`}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
      <div className={`relative ${image ? "md:-mt-[20svh]" : ""} pb-16`}>
        {fullWidth ? (
          <div className="w-full">{children}</div>
        ) : (
          <div className={`max-w-3xl px-6 sm:px-8 ${contentAlignClass}`}>
            <div className="bg-primary-50/95 text-primary-900 border border-primary-200/50">
              <div className="p-6 sm:p-10">{children}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
