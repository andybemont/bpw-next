import { Metadata } from "next";
import SitePage from "../ui/shared/site-page";
import { namedPictures } from "../lib/portfolio";
import TeamContent from "../ui/team-content/team-content";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Photographers | Bemont Photo",
};

export default function Page() {
  return (
    <SitePage image={namedPictures.flowers}>
      <div className="absolute right-0 top-0 w-1/3 bg-blue-950/40 z-1 max-h-full overflow-y-auto">
        <TeamContent />
      </div>
    </SitePage>
  );
}
