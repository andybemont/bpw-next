import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Desserts | Bemont Photo",
  description:
    "A collection of wedding photography featuring cakes, cake cutting, and other desserts",
};

export default function Page() {
  return <GalleryContent gallery={galleries.dessert} />;
}
