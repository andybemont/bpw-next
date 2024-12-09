import Image from "next/image";
import { allGalleries } from "../../lib/galleries";
import Link from "next/link";

export default function GalleryContent() {
  var count = 0;
  return (
    <div>
      <h1 className="text-center text-5xl">Wedding Photo Galleries</h1>
      <h2 className="text-center text-2xl">
        Some of our favorite shots since 2018
      </h2>
      <ul className="w-full h-full flex flex-row flex-wrap justify-center">
        {allGalleries.map((gallery) => {
          return (
            <li
              key={++count}
              className={`mx-0 sm:mx-1 mt-1 p-1 pb-2 w-[392px] border-b-2 border-primary-900 transition-all text-primary-900 hover:text-primary-50 hover:bg-primary-950 hover:animate-bounce`}
            >
              <Link href={"../galleries/" + gallery.link}>
                <Image
                  src={gallery.image.image}
                  alt={gallery.image.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading={count <= 8 ? "eager" : "lazy"}
                  style={{ width: "392px", height: "auto" }} // optional
                />
                <h3 className="font-bold text-3xl">{gallery.title + " >"}</h3>
                <h4>{gallery.description}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
