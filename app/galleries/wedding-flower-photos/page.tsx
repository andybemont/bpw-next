import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Flowers",
  description:
    "A collection of wedding photography featuring bouquets and other flowers",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/wedding-flower-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.flowers} />;
}
