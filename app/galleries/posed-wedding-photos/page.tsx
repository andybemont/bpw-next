import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Group Shots | Bemont Photo",
  description:
    "A collection of wedding photography featuring people smiling for the camera",
};

export default function Page() {
  return <GalleryContent gallery={galleries.lookingAtCamera} />;
}
