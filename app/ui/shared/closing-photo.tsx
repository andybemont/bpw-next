import Image from "next/image";
import type { PortfolioImage } from "@/app/lib/portfolio";

export default function ClosingPhoto({
  image,
  positioning = "object-center",
}: {
  image: PortfolioImage;
  positioning?: string;
}) {
  return (
    <div className="relative mb-10 mt-20 aspect-[3/2] overflow-hidden bg-primary-100 sm:mb-14 sm:mt-28">
      <Image
        src={image.image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1280px) calc(100vw - 3rem), 1280px"
        className={`object-cover ${positioning}`}
      />
    </div>
  );
}
