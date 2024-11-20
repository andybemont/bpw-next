import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title:
    "Rochester Wedding Photography | Favorite Wedding Pictures | Bemont Photo",
  description: "A collection of great wedding photos",
};

export default function Page() {
  return <GalleryContent gallery={galleries.favorites} />;
}
