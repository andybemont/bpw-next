import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Grand Finales | Bemont Photo",
  description:
    "A collection of wedding photography featuring the end of ceremonies",
};

export default function Page() {
  return <GalleryContent gallery={galleries.grandFinales} />;
}
