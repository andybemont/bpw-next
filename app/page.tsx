import { Metadata } from "next";
import HomePageContent from "./ui/home-page/home-page-content";
import PageBase from "./ui/page-base";
export const metadata: Metadata = {
  title:
    "Rochester Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Bemont Photo is a family photography team capturing weddings across Western New York. Explore packages, prices, and availability, and all the other details you need.",
  alternates: {
    canonical: "https://www.bemontphoto.com",
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ contact?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const autoOpenContact = resolvedSearchParams?.contact === "1";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    name: "Bemont Photo Wedding Photography",
    url: "https://www.bemontphoto.com",
    image:
      "https://www.bemontphoto.com/portfolio/bemont-photo-230916191334.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Chalet Circle",
      addressLocality: "Rochester",
      addressRegion: "NY",
      postalCode: "14618",
      addressCountry: "US",
    },
    areaServed: [
      "Rochester, NY",
      "Buffalo, NY",
      "Finger Lakes, NY",
      "Western New York",
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
