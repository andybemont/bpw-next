import { Metadata } from "next";
import galleries from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Details | Bemont Photo",
  description:
    "A collection of wedding photography featuring decor, clothes, and other details",
};

export default function Page() {
  return <GalleryContent gallery={galleries.otherDetails} />;
}
