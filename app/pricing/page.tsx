import { Metadata } from "next";
import PricingContent from "../ui/pricing-content/pricing-content";
import { namedPictures } from "../lib/portfolio";
import SitePage from "../ui/shared/site-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Pricing | Bemont Photo",
  description:
    "Pricing and packages for Rochester, Buffalo, and Finger Lakes wedding photography",
};

export default function Page() {
  return (
    <SitePage image={namedPictures.gianStepsKiss}>
      <div className="absolute min-w-[342px] w-[40%] right-0 top-0 bg-white/50 z-1 overflow-y-auto">
        <PricingContent />
      </div>
    </SitePage>
  );
}
