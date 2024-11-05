import Image from "next/image";
import { fullPortfolio } from "@/app/lib/portfolio";

export default function GalleryContent() {
  let count = 0;
  return (
    <div className="w-full max-w-screen mx-auto flex">
      <div className="grow" />
      <div>
        {fullPortfolio.map((p) => {
          return (
            <Image
              key={++count}
              src={p.src}
              className="pt-4"
              alt="Wedding Gallery"
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
