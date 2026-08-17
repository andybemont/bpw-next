import Image from "next/image";
import { PortfolioImage } from "@/app/lib/portfolio";

export default function PhotoBreak({
  images,
  className = "",
}: {
  images: PortfolioImage[];
  className?: string;
}) {
  if (!images.length) {
    return null;
  }

  return (
    <div
      className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${className}`.trim()}
      aria-hidden={images.every((image) => !image.alt) ? true : undefined}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-primary-100"
        >
          <Image
            src={image.image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
