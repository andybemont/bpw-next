import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Favorite Wedding Pictures",
  description: "A collection of great wedding photos",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/favorite-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.favorites} />;
}
