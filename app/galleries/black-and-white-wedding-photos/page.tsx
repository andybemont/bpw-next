import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Black and White | Bemont Photo",
  description: "A collection of black and white wedding photography",
};

export default function Page() {
  return <GalleryContent gallery={galleries.blackAndWhite} />;
}
