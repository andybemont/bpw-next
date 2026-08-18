import type { PortfolioImage } from "@/app/lib/portfolio";
import Image from "next/image";

export default function SitePage({
  image,
  hero,
  children,
  positioning = "object-center",
  fullWidth = false,
}: {
  image?: PortfolioImage;
  hero?: React.ReactNode;
  children: React.ReactNode;
  positioning?: string;
  fullWidth?: boolean;
}) {
  return (
    <section className="w-full">
      {image ? (
        <div className={`${hero ? "mx-auto max-w-[96rem] lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-center lg:gap-16 lg:px-12 lg:py-16" : "bg-primary-50 sm:px-8 lg:px-12"}`}>
          <div className="relative aspect-[4/3] min-h-[22rem] w-full overflow-hidden bg-primary-100 sm:aspect-[3/2] sm:min-h-0">
            <Image
              src={image.image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 1280px"
              className={`object-cover ${positioning}`}
            />
          </div>
          {hero ? <div className="px-6 py-12 sm:px-8 sm:py-16 lg:px-0 lg:py-0">{hero}</div> : null}
        </div>
      ) : null}
      <div
        className={
          fullWidth
            ? "py-14 sm:py-20"
            : `mx-auto max-w-7xl px-6 sm:px-8 ${hero ? "pb-16 sm:pb-24" : "py-16 sm:py-24"}`
        }
      >
        {children}
      </div>
    </section>
  );
}
