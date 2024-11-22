import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Parent Dances",
  description:
    "A collection of wedding photography featuring mother-son and father-daughter dances",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/parent-dance-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.parentDances} />;
}
