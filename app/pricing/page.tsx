import { Metadata } from "next";
import PricingContent from "../ui/pricing-content/pricing-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Pricing",
  description:
    "Pricing and packages for Rochester, Buffalo, and Finger Lakes wedding photography",
  alternates: {
    canonical: "https://www.bemontphoto.com/pricing",
  },
};

export default function Page() {
  return (
    <SitePage
      image={namedPortfolioImages.lydiaFlowers}
      positioning="object-top"
    >
      <PricingContent />
    </SitePage>
  );
}
