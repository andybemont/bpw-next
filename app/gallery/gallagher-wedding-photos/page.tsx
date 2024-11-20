import { Metadata } from "next";
import galleries from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | The Gallagher | Bemont Photo",
  description:
    "A collection of wedding photography featuring The Gallagher in Medina, NY",
};

export default function Page() {
  return <GalleryContent gallery={galleries.gallagher} />;
}
