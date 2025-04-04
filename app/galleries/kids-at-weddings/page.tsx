import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Kids",
  description:
    "A collection of wedding photography featuring children at weddings",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/kids-at-weddings",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.kids} />;
}
