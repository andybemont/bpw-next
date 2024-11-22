import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Animals",
  description:
    "A collection of wedding photography featuring dogs and other animals",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/animal-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.animals} />;
}
