import { Metadata } from "next";
import SitePage from "../ui/shared/site-page";
import { namedPortfolioImages } from "../lib/best-ofs";
import TeamContent from "../ui/team-content/team-content";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Photographers | Bemont Photo",
  description:
    "Bemont Photo is your fun and laid back wedding photography team in Rochester, NY",
};

export default function Page() {
  return (
    <SitePage image={namedPortfolioImages.ringShot} positioning="object-center">
      <div className="w-full max-h-full z-1 absolute top-0 overflow-y-auto flex flex-row flex-wrap justify-evenly">
        <TeamContent />
      </div>
    </SitePage>
  );
}
