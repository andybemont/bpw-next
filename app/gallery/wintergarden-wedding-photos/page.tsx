import { Metadata } from "next";
import galleries from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | The Wintergarden | Bemont Photo",
  description:
    "A collection of wedding photography featuring The Wintergarden in Rochester, NY",
};

export default function Page() {
  return <GalleryContent gallery={galleries.wintergarden} />;
}
