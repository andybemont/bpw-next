import { Metadata } from "next";
import SitePage from "../ui/shared/site-page";
import GalleryContent from "../ui/gallery-content/gallery-content";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Galleries and Inspo",
  description: "Bemont Photo's Favorite Wedding Photos",
  alternates: {
    canonical: "https://www.bemontphoto.com/gallery",
  },
};

export default function Page() {
  return (
    <SitePage>
      <GalleryContent />
    </SitePage>
  );
}
