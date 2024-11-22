import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Getting Ready",
  description:
    "A collection of wedding photography featuring wedding preparations",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/getting-ready-photos",
  },
};
export default function Page() {
  return <GalleryContent gallery={galleries.gettingReady} />;
}
