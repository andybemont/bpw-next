import OverviewContent from "../../ui/overview-content/overview-content";
import SitePage from "../../ui/shared/site-page";
import namedPortfolioImages from "../../lib/named-portfolio-images";
import FaqContent from "../../ui/faq-content/faq-content";
import PricingContent from "../../ui/pricing-content/pricing-content";
import GalleryContent from "../../ui/gallery-content/gallery-content";
import TeamContent from "../../ui/team-content/team-content";
import ContactContent from "../../ui/contact-content/contact-content";
import FullWidthImage from "../../ui/shared/full-width-image";

export default function HomePageContent({ location }: { location: string }) {
  return (
    <>
      <div className="hidden sm:block">
        <SitePage
          image={namedPortfolioImages.aliciaField.big}
          positioning="object-bottom"
        >
          <OverviewContent location={location} />
        </SitePage>
      </div>
      <div className="sm:hidden absolute top-[64px]">
        <FullWidthImage
          image={namedPortfolioImages.aliciaField.small}
          eagerLoad
        />
        <div className="bg-slate-400">
          <OverviewContent location={location} />
        </div>
        <FullWidthImage image={namedPortfolioImages.kidsWithDog.small} />
        <div className="bg-amber-300/80">
          <FaqContent />
        </div>
        <FullWidthImage image={namedPortfolioImages.lydiaFlowers.small} />
        <div className="bg-pink-600/40">
          <PricingContent />
        </div>
        <FullWidthImage image={namedPortfolioImages.kacieDip.small} />
        <div className="bg-sky-500/30">
          <ContactContent />
        </div>
        <FullWidthImage image={namedPortfolioImages.team} />
        <div className="bg-red-100">
          <TeamContent />
        </div>
        <GalleryContent />
      </div>
    </>
  );
}
