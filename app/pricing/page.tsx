import { Metadata } from "next";
import PricingContent from "../ui/pricing-content/pricing-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";
import PageBase from "../ui/page-base";

export const metadata: Metadata = {
  title: "Wedding Photography Packages and Prices by Bemont Photo",
  description: "Explore pricing, packages, and availability for Bemont Photo.",
  alternates: {
    canonical: "https://www.bemontphoto.com/pricing",
  },
};

export default function Page() {
  return (
    <PageBase
      h1Text="Bemont Photo Wedding Photography"
      h2Text="Pricing, Packages, and Availability"
    >
      <SitePage
        image={namedPortfolioImages.lydiaFlowers.big}
        positioning="object-top"
      >
        <PricingContent />
      </SitePage>
    </PageBase>
  );
}
