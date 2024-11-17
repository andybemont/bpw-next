import Image from "next/image";
import { allPortfolioImages } from "@/app/lib/best-ofs";

export default function GalleryContent() {
  let count = 0;
  return (
    <div className="w-full max-w-screen mx-auto flex">
      <div className="grow" />
      <div>
        {allPortfolioImages
          .filter((p) => p.rating > 1)
          .map((p) => {
            return (
              <Image
                key={++count}
                src={p.image}
                className="pt-4"
                alt={p.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100vh", height: "auto" }} // optional
                loading="lazy"
              />
            );
          })}
      </div>
      <div className="grow" />
    </div>
  );
}
