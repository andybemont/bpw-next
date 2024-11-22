import { Metadata } from "next";
import galleries from "../../lib/galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Speeches",
  description: "A collection of wedding photography featuring toasts",
  alternates: {
    canonical: "https://www.bemontphoto.com/galleries/wedding-speech-photos",
  },
};

export default function Page() {
  return <GalleryContent gallery={galleries.speeches} />;
}
