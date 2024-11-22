import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Group Shots",
  description:
    "A collection of wedding photography featuring people smiling for the camera",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/posed-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.lookingAtCamera} />;
}
