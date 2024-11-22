import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | The Gallagher",
  description:
    "A collection of wedding photography featuring The Gallagher in Medina, NY",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/gallagher-wedding-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.gallagher} />;
}
