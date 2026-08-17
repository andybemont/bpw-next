import PageBase from "../ui/page-base";
import SitePage from "../ui/shared/site-page";
import namedPortfolioImages from "../lib/named-portfolio-images";
import WhoWereForContent from "../ui/who-were-for-content/who-were-for-content";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Who We're For (and Not For) | Bemont Photo",
  description:
    "An honest guide to whether Bemont Photo is the right Rochester wedding photographer for your style, priorities, and personality.",
  path: "who-were-for",
  ogImage: namedPortfolioImages.kacieDip.image.src,
  ogImageAlt: namedPortfolioImages.kacieDip.alt,
  ogImageWidth: namedPortfolioImages.kacieDip.image.width,
  ogImageHeight: namedPortfolioImages.kacieDip.image.height,
});

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="">
      <SitePage
        image={namedPortfolioImages.kacieDip}
        positioning="object-center"
      >
        <WhoWereForContent />
      </SitePage>
    </PageBase>
  );
}
