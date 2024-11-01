import { Metadata } from "next";
import PricingContent from "../ui/pricing-content/pricing-content";
import { namedPictures } from "../lib/portfolio";
import SitePage from "../ui/shared/site-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Pricing | Bemont Photo",
};

export default function Page() {
  return (
    <SitePage image={namedPictures.gianStepsKiss}>
      <PricingContent />
    </SitePage>
  );
}
