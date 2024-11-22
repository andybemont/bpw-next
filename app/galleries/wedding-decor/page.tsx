import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Details",
  description:
    "A collection of wedding photography featuring decor, clothes, and other details",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/wedding-decor",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.otherDetails} />;
}
