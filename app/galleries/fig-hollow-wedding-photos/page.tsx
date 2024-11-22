import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Fig Hollow",
  description:
    "A collection of wedding photography featuring Fig Hollow in Palmyra, NY",
  alternates: {
    canonical:
      "https://www.bemontphoto.com/galleries/fig-hollow-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.figHollow} />;
}
