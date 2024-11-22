import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Processional",
  description: "A collection of wedding photography featuring processionals",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/processional-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.processionals} />;
}
