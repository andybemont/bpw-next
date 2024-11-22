import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Hot Ice",
  description: "A collection of wedding photography featuring wedding rings",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/wedding-ring-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.rings} />;
}
