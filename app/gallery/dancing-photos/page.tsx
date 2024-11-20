import { Metadata } from "next";
import galleries from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Dance Party | Bemont Photo",
  description: "A collection of wedding photography featuring wild dancing",
};

export default function Page() {
  return <GalleryContent gallery={galleries.rowdyDancing} />;
}
