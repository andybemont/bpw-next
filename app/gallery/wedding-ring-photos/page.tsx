import { Metadata } from "next";
import galleries from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Hot Ice | Bemont Photo",
  description: "A collection of wedding photography featuring wedding rings",
};

export default function Page() {
  return <GalleryContent gallery={galleries.rings} />;
}
