import { Metadata } from "next";
import galleries from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Happy Couples | Bemont Photo",
  description:
    "A collection of wedding photography featuring smiling brides and grooms",
};

export default function Page() {
  return <GalleryContent gallery={galleries.happyCouple} />;
}
