import { Metadata } from "next";
import SitePage from "../ui/shared/site-page";
import { namedPictures } from "../lib/portfolio";
import TeamContent from "../ui/team-content/team-content";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Photographers | Bemont Photo",
  description:
    "Bemont Photo is your fun and laid back wedding photography team in Rochester, NY",
};

export default function Page() {
  return (
    <SitePage image={namedPictures.flowers}>
      <div className="w-full z-1 absolute bottom-0 overflow-y-auto flex flex-row flex-wrap">
        <TeamContent />
      </div>
    </SitePage>
  );
}
