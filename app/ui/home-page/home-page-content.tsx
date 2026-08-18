import OverviewContent from "../../ui/overview-content/overview-content";
import { LocationKey } from "../../lib/location-content";

export default function HomePageContent({
  locationKey,
}: {
  locationKey: LocationKey;
}) {
  return <OverviewContent locationKey={locationKey} />;
}
