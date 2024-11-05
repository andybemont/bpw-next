import { Metadata } from "next";
import OverviewContent from "./ui/overview-content/overview-content";
import SitePage from "./ui/shared/site-page";
import { namedPictures } from "./lib/portfolio";
import FaqContent from "./ui/faq-content/faq-content";
import PricingContent from "./ui/pricing-content/pricing-content";
import TeamContent from "./ui/team-content/team-content";
import GalleryContent from "./ui/gallery-content/gallery-content";
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
        <SitePage image={namedPictures.chaseBuildingDip}>
          <div className="absolute min-w-[342px] w-1/3 bg-white/50 z-1 max-h-full overflow-y-auto">
            <OverviewContent />
          </div>
        </SitePage>
      </div>
      <div className="sm:hidden absolute top-[64px] w-[calc(100%)]">
        <FullWidthImage image={namedPictures.chaseBuildingDip} />
        <OverviewContent />
        <FullWidthImage image={namedPictures.lydiaFlowers} />
        <FaqContent />
        <FullWidthImage image={namedPictures.dadPokingBubble} />
        <PricingContent />
        <FullWidthImage image={namedPictures.gianStepsKiss} />
        <ContactContent />
        <FullWidthImage image={namedPictures.mimiGolfCart} />
        {/* <TeamContent /> */}
        {/* <FullWidthImage image={namedPictures.flowers} /> */}
        {/* More links*/}
      </div>
    </>
  );
}
