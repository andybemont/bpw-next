import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | The Wintergarden",
  description:
    "A collection of wedding photography featuring The Wintergarden in Rochester, NY",
  alternates: {
    canonical:
      "https://www.bemontphoto.com/galleries/wintergarden-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.wintergarden} />;
}
