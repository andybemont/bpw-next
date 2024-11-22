import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Happy Couples",
  description:
    "A collection of wedding photography featuring smiling brides and grooms",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/happy-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.happyCouple} />;
}
