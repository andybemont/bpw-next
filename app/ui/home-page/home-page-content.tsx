import OverviewContent from "../../ui/overview-content/overview-content";
import { LocationKey } from "../../lib/location-content";
import type { PortfolioImage } from "../../lib/portfolio";

export default function HomePageContent({
  locationKey,
  heroImage,
}: {
  locationKey: LocationKey;
  heroImage?: PortfolioImage;
}) {
  return <OverviewContent locationKey={locationKey} heroImage={heroImage} />;
}
