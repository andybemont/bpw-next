import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Natural Poses",
  description:
    "A collection of wedding photography featuring comfortable brides and grooms",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/natural-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.natural} />;
}
