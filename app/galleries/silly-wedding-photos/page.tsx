import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Silly Stuff",
  description:
    "A collection of wedding photography featuring silly moments and people",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/silly-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.silly} />;
}
