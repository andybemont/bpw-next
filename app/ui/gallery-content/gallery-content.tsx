import Image from "next/image";
import { allGalleries, ClientGallery, Gallery } from "../../lib/galleries";
import Link from "next/link";

export default function GalleryContent() {
  var count = 0;
  return (
    <section>
      <div>
        <h2 className="text-center text-5xl">Wedding Photo Galleries</h2>
        <h3 className="text-center text-2xl">
          Some of our favorite shots since 2018
        </h3>
        <ul className="w-full h-full flex flex-row flex-wrap justify-center">
          {allGalleries.map((gallery) => {
            var href = "";
            var target = "";
            if ((gallery as ClientGallery) && (gallery as ClientGallery).url) {
              href = (gallery as ClientGallery).url;
              target = "_blank";
            } else {
              href = "../galleries/" + (gallery as Gallery).link;
              target = "_self";
            }

            return (
              <li
                key={++count}
                className={`mx-0 sm:mx-1 mt-1 p-1 pb-2 w-[392px] border-b-2 border-primary-900 transition-all text-primary-900 hover:text-primary-50 hover:bg-primary-950`}
              >
                <Link href={href} target={target}>
                  <Image
                    src={gallery.image.image}
                    alt={gallery.image.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    loading={count <= 8 ? "eager" : "lazy"}
                    style={{ width: "392px", height: "auto" }} // optional
                  />
                  <h4 className="font-bold text-3xl">{gallery.title}</h4>
                  <h5>{gallery.description}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
