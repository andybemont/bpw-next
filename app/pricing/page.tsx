import PricingContent, { PricingHero } from "../ui/pricing-content/pricing-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";
import PageBase from "../ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";
import { JsonLd, pricingStructuredData } from "@/app/lib/structured-data";
import PageAnalytics from "../ui/analytics/page-analytics";

export const metadata = buildPageMetadata({
  title: "Wedding Photography Packages and Prices | Bemont Photo",
  description:
    "Wedding photography starts at $3,200: six hours with two photographers, planning support, editing, and an online gallery in Rochester, NY.",
  path: "pricing",
});

export default function Page() {
  return (
    <PageBase
      h1Text="Bemont Photo Wedding Photography"
      h2Text="Pricing, Packages, and Availability"
    >
      <JsonLd data={pricingStructuredData} />
      <PageAnalytics event="pricing_view" />
      <SitePage
        image={namedPortfolioImages.lydiaFlowers}
        positioning="object-top"
        hero={<PricingHero />}
      >
        <PricingContent />
      </SitePage>
    </PageBase>
  );
}
