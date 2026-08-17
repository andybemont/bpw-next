import PricingContent from "../ui/pricing-content/pricing-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";
import PageBase from "../ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";
import { JsonLd, pricingStructuredData } from "@/app/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Wedding Photography Packages and Prices | Bemont Photo",
  description:
    "One wedding photography package at $4,200: two photographers, 8 hours of coverage, engagement session, online gallery, and planning support in Rochester, NY.",
  path: "pricing",
});

export default function Page() {
  return (
    <PageBase
      h1Text="Bemont Photo Wedding Photography"
      h2Text="Pricing, Packages, and Availability"
    >
      <JsonLd data={pricingStructuredData} />
      <SitePage
        image={namedPortfolioImages.lydiaFlowers}
        positioning="object-top"
        heroAlign="center"
      >
        <PricingContent />
      </SitePage>
    </PageBase>
  );
}
