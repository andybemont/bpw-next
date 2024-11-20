import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Silly Stuff | Bemont Photo",
  description:
    "A collection of wedding photography featuring silly moments and people",
};

export default function Page() {
  return <GalleryContent gallery={galleries.silly} />;
}
