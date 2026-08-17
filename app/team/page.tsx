import SitePage from "../ui/shared/site-page";
import TeamContent from "../ui/team-content/team-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import PageBase from "../ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Meet the Wedding Photographers | Bemont Photo Rochester, NY",
  description:
    "Meet Andy, Gillian, and Carly — the Rochester wedding photography team behind Bemont Photo. Family-run, candid-focused, and easy to work with.",
  path: "team",
  ogImage: namedPortfolioImages.team.image.src,
  ogImageAlt: namedPortfolioImages.team.alt,
  ogImageWidth: namedPortfolioImages.team.image.width,
  ogImageHeight: namedPortfolioImages.team.image.height,
});

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Meet the Team">
      <SitePage image={namedPortfolioImages.team} positioning="object-top">
        <TeamContent />
      </SitePage>
    </PageBase>
  );
}
