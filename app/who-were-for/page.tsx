import { Metadata } from "next";
import PageBase from "../ui/page-base";
import SitePage from "../ui/shared/site-page";
import namedPortfolioImages from "../lib/named-portfolio-images";
import WhoWereForContent from "../ui/who-were-for-content/who-were-for-content";

export const metadata: Metadata = {
  title: "Who We’re For (and Not For) | Bemont Photo",
  description:
    "A clear, honest look at who Bemont Photo is best suited for and who we may not be the right fit for.",
  alternates: {
    canonical: "https://www.bemontphoto.com/who-were-for",
  },
};

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="">
      <SitePage
        image={namedPortfolioImages.kacieDip.big}
        positioning="object-center"
      >
        <WhoWereForContent />
      </SitePage>
    </PageBase>
  );
}
