import PageBase from "../ui/page-base";
import SitePage from "../ui/shared/site-page";
import namedPortfolioImages from "../lib/named-portfolio-images";
import WhoWereForContent, { WhoWereForHero } from "../ui/who-were-for-content/who-were-for-content";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Who We're For (and Not For) | Bemont Photo",
  description:
    "An honest guide to whether Bemont Photo is the right Rochester wedding photographer for your style, priorities, and personality.",
  path: "who-were-for",
  ogImage: namedPortfolioImages.flowerGirlProcessional.image.src,
  ogImageAlt: namedPortfolioImages.flowerGirlProcessional.alt,
  ogImageWidth: namedPortfolioImages.flowerGirlProcessional.image.width,
  ogImageHeight: namedPortfolioImages.flowerGirlProcessional.image.height,
});

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="">
      <SitePage
        image={namedPortfolioImages.flowerGirlProcessional}
        positioning="object-center"
        hero={<WhoWereForHero />}
      >
        <WhoWereForContent />
      </SitePage>
    </PageBase>
  );
}
