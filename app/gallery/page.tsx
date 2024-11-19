import { Metadata } from "next";
import galleries from "./galleries";
import SitePage from "../ui/shared/site-page";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Galleries and Inspo | Bemont Photo",
  description: "Bemont Photo's Favorite Wedding Photos",
};

export default function Page() {
  return (
    <SitePage>
      <ul className="mt-[-30px] w-full h-full flex flex-row flex-wrap text-primary-950">
        {galleries.map((gallery) => {
          return (
            <li
              key={gallery.link}
              className="m-1 p-1 w-[392px] border-y-2 transition-all border-primary-200 hover:border-primary-900"
            >
              <Link href={"./gallery/" + gallery.link}>
                <Image
                  src={gallery.image.image}
                  alt={gallery.image.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "392px", height: "auto" }} // optional
                />
                <h3 className="font-bold text-3xl">{gallery.title}</h3>
                <h4>{gallery.description}</h4>
              </Link>
            </li>
          );
        })}
        {/* <GalleryContent /> */}
      </ul>
    </SitePage>
  );
}
