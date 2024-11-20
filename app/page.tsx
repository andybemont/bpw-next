import { Metadata } from "next";
import OverviewContent from "./ui/overview-content/overview-content";
import SitePage from "./ui/shared/site-page";
import namedPortfolioImages from "./lib/named-portfolio-images";
import FaqContent from "./ui/faq-content/faq-content";
import PricingContent from "./ui/pricing-content/pricing-content";
import TeamContent from "./ui/team-content/team-content";
import ContactContent from "./ui/contact-content/contact-content";
import FullWidthImage from "./ui/shared/full-width-image";

export const metadata: Metadata = {
  title:
    "Rochester Wedding Photography | Packages and Availability | Bemont Photo",
  description: "Great wedding photography team for all of Upstate New York.",
};

export default function Page() {
  return (
    <>
      <div className="hidden sm:block">
        <SitePage
          image={namedPortfolioImages.aliciaField}
          positioning="object-bottom"
        >
          <OverviewContent />
        </SitePage>
      </div>
      <div className="sm:hidden absolute top-[64px]">
        <FullWidthImage image={namedPortfolioImages.aliciaField} />
        <div className="bg-slate-400">
          <OverviewContent />
        </div>
        <FullWidthImage image={namedPortfolioImages.kidsWithDog} />
        <div className="bg-amber-300/80">
          <FaqContent />
        </div>
        <FullWidthImage image={namedPortfolioImages.lydiaFlowers} />
        <div className="bg-pink-600/40">
          <PricingContent />
        </div>
        <FullWidthImage image={namedPortfolioImages.kacieDip} />
        <div className="bg-sky-500/50">
          <ContactContent />
        </div>

        {/* <FullWidthImage image={namedPortfolioImages.TEAM} />
        <div className="bg-lime-100">
          <TeamContent />
        </div> */}
      </div>
    </>
  );
}
