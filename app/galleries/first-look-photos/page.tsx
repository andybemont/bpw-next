import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | First Looks",
  description: "A collection of wedding photography featuring first looks",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/first-look-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.firstLook} />;
}
