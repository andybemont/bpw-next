import { Metadata } from "next";
import SitePage from "../ui/shared/site-page";
import GalleryContent from "../ui/gallery-content/gallery-content";
import PageBase from "../ui/page-base";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Galleries and Inspo",
  description: "Bemont Photo's Favorite Wedding Photos",
  alternates: {
    canonical: "https://www.bemontphoto.com/gallery",
  },
};

export default function Page() {
  return (
    <PageBase
      h1Text="Bemont Photo Wedding Photography"
      h2Text="Galleries & Inspo"
    >
      <SitePage>
        <GalleryContent />
      </SitePage>
    </PageBase>
  );
}
