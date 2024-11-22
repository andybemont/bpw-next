import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Ravenwood",
  description:
    "A collection of wedding photography featuring Ravenwood Golf Club in Victor, NY",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/ravenwood-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.ravenwood} />;
}
