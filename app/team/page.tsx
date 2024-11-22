import { Metadata } from "next";
import SitePage from "../ui/shared/site-page";
import TeamContent from "../ui/team-content/team-content";
import namedPortfolioImages from "../lib/named-portfolio-images";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Photographers | Bemont Photo",
  description:
    "Bemont Photo is your fun and laid back wedding photography team in Rochester, NY",
};

export default function Page() {
  return (
    <SitePage image={namedPortfolioImages.team} positioning="object-top">
      <TeamContent />
    </SitePage>
  );
}
