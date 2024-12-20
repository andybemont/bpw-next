import { Metadata } from "next";
import HomePageContent from "@/app/ui/home-page/home-page-content";
import PageBase from "@/app/ui/page-base";
export const metadata: Metadata = {
  title:
    "Rochester, NY Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Learn all about the family photography team capturing weddings in Rochester, NY. Explore packages, prices, and availability, and all the other details you need.",
  alternates: {
    canonical: "https://www.bemontphoto.com/wedding-photography/rochester-ny",
  },
};

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Rochester, NY">
      <HomePageContent location="Rochester, NY" />
    </PageBase>
  );
}
