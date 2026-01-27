import OverviewContent from "../../ui/overview-content/overview-content";
import SitePage from "../../ui/shared/site-page";
import namedPortfolioImages from "../../lib/named-portfolio-images";

export default function HomePageContent({ location }: { location: string }) {
  return (
    <div className="space-y-16">
      <SitePage
        image={namedPortfolioImages.aliciaField.big}
        positioning="object-top"
      >
        <OverviewContent location={location} />
      </SitePage>
    </div>
  );
}
