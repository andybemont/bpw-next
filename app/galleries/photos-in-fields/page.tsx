import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Fields",
  description:
    "A collection of wedding photography featuring fields, farms and pastures",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/photos-in-fields",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.field} />;
}
