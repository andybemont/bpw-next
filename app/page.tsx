import { Metadata } from "next";
import OverviewContent from "./ui/overview-content/overview-content";
import SitePage from "./ui/shared/site-page";
import { namedPictures } from "./lib/portfolio";

export const metadata: Metadata = {
  title:
    "Rochester Wedding Photography | Packages and Availability | Bemont Photo",
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
