import type { Metadata } from "next";
import HomePageContent from "./ui/home-page/home-page-content";
import PageBase from "./ui/page-base";
import { buildPageMetadata, SITE_URL } from "@/app/lib/seo";
import { JsonLd, businessStructuredData } from "@/app/lib/structured-data";

const homeMetadata = buildPageMetadata({
  title:
    "Rochester Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Bemont Photo is a Rochester wedding photography team serving Western New York. Explore packages from $4,200, view galleries, and check availability.",
  path: "",
});

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ contact?: string }>;
}): Promise<Metadata> {
  const resolved = await searchParams;
  if (resolved?.contact === "1") {
    return {
      ...homeMetadata,
      robots: { index: false, follow: true },
      alternates: { canonical: SITE_URL },
    };
  }
  return homeMetadata;
}

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
        <HomePageContent locationKey="rochester" />
      </PageBase>
    </>
  );
}
