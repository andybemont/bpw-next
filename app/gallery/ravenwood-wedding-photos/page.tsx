import { Metadata } from "next";
import galleries from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Ravenwood | Bemont Photo",
  description:
    "A collection of wedding photography featuring Ravenwood Golf Club in Victor, NY",
};

export default function Page() {
  return <GalleryContent gallery={galleries.ravenwood} />;
}
