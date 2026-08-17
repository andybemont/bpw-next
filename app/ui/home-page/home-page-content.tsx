import OverviewContent from "../../ui/overview-content/overview-content";
import SitePage from "../../ui/shared/site-page";
import { getLocationContent, LocationKey } from "../../lib/location-content";

export default function HomePageContent({
  locationKey,
}: {
  locationKey: LocationKey;
}) {
  const location = getLocationContent(locationKey);

  return (
    <div className="space-y-16">
      <SitePage image={location.heroImage} positioning="object-top">
        <OverviewContent locationKey={locationKey} />
      </SitePage>
    </div>
  );
}
