import { Metadata } from "next";
import galleries from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Fig Hollow | Bemont Photo",
  description:
    "A collection of wedding photography featuring Fig Hollow in Palmyra, NY",
};

export default function Page() {
  return <GalleryContent gallery={galleries.figHollow} />;
}
