import HomePageContent from "./ui/home-page/home-page-content";
import PageBase from "./ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";
import {
  JsonLd,
  businessStructuredData,
} from "@/app/lib/structured-data";

export const metadata = buildPageMetadata({
  title:
    "Rochester Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Bemont Photo is a Rochester wedding photography team serving Western New York. Explore packages from $4,200, view galleries, and check availability.",
  path: "",
});

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ contact?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const autoOpenContact = resolvedSearchParams?.contact === "1";

  return (
    <>
      <JsonLd data={businessStructuredData} />
      <PageBase
        h1Text="Bemont Photo Wedding Photography"
        h2Text=""
        autoOpenContact={autoOpenContact}
      >
        <HomePageContent location="Rochester" />
      </PageBase>
    </>
  );
}
