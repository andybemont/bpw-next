import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Candid Photos | Bemont Photo",
  description: "A collection of unposed wedding photos",
};

export default function Page() {
  return <GalleryContent gallery={galleries.otherCandids} />;
}
