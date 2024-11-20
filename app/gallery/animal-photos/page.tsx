import { Metadata } from "next";
import galleries from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Animals | Bemont Photo",
  description:
    "A collection of wedding photography featuring dogs and other animals",
};

export default function Page() {
  return <GalleryContent gallery={galleries.animals} />;
}
