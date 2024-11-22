import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Black and White",
  description: "A collection of black and white wedding photography",
  alternates: {
    canonical:
      "https://www.bemontphoto.com/galleries/black-and-white-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.blackAndWhite} />;
}
