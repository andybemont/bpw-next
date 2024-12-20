import { Metadata } from "next";
import SitePage from "../ui/shared/site-page";
import TeamContent from "../ui/team-content/team-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import PageBase from "../ui/page-base";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Photographers",
  description:
    "Bemont Photo is your fun and laid back wedding photography team in Rochester, NY",
  alternates: {
    canonical: "https://www.bemontphoto.com/team",
  },
};

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Meet the Team">
      <SitePage image={namedPortfolioImages.team} positioning="object-top">
        <TeamContent />
      </SitePage>
    </PageBase>
  );
}
