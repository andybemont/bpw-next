import { Metadata } from "next";
import SitePage from "../ui/shared/site-page";
import GalleryContent from "../ui/gallery-content/gallery-content";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Galleries and Inspo | Bemont Photo",
  description: "Bemont Photo's Favorite Wedding Photos",
};

export default function Page() {
  return (
    <SitePage>
      <GalleryContent />
    </SitePage>
  );
}
