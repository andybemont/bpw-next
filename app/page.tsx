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
        <OverviewContent />
        <FullWidthImage image={namedPortfolioImages.kidsWithDog} />
        <FaqContent />
        <FullWidthImage image={namedPortfolioImages.lydiaFlowers} />
        <PricingContent />
        <FullWidthImage image={namedPortfolioImages.kacieDip} />
        <ContactContent />
        <FullWidthImage image={namedPortfolioImages.hyattDip} />
        <TeamContent />
        <FullWidthImage image={namedPortfolioImages.ilonaInField} />
        {/* More links*/}
      </div>
    </>
  );
}
