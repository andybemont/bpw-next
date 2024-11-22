import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | First Dances",
  description: "A collection of wedding photography featuring first dances",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/first-dance-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.firstDances} />;
}
