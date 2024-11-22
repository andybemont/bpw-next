import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Dance Party",
  description: "A collection of wedding photography featuring wild dancing",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/dancing-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.rowdyDancing} />;
}
