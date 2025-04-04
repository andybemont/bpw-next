import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Extra Cheese",
  description:
    "A collection of wedding photography featuring dramatic poses and backdrops",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/romantic-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.extraCheese} />;
}
