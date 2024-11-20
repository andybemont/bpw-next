import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Parent Dances | Bemont Photo",
  description:
    "A collection of wedding photography featuring mother-son and father-daughter dances",
};

export default function Page() {
  return <GalleryContent gallery={galleries.parentDances} />;
}
