import { Metadata } from "next";
import OverviewContent from "./ui/overview-content/overview-content";
import SitePage from "./ui/shared/site-page";
import { namedPictures } from "./lib/portfolio";
import Page from "./contact/page";

export const metadata: Metadata = {
  title:
    "Rochester Wedding Photography | Packages and Availability | Bemont Photo",
  description: "Great wedding photography team for all of Upstate New York.",
  openGraph: {
    siteName: "Rochester Wedding Photography by Bemont Photo",
    title: "Rochester Wedding Photography by Bemont Photo",
    description:
      "Wedding Photography for Rochester, Buffalo, and the Finger Lakes",
    url: "https://www.bemontphoto.com",
    images: {
      url: "/portfolio/BPBO5-1140.jpg",
      alt: "Wedding Photography by Bemont Photo",
    },
  },
};

export default function Page() {
  return (
    <SitePage image={namedPictures.chaseBuildingDip}>
      <div className="absolute w-1/3 bg-white/50 z-1 max-h-full overflow-y-auto">
        <OverviewContent />
      </div>
    </SitePage>
  );
}
