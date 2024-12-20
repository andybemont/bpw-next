import { Metadata } from "next";
import HomePageContent from "@/app/ui/home-page/home-page-content";
import PageBase from "@/app/ui/page-base";
export const metadata: Metadata = {
  title:
    "Finger Lakes Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Learn all about the family photography team capturing weddings in the Finger Lakes. Explore packages, prices, and availability, and all the other details you need.",
  alternates: {
    canonical: "https://www.bemontphoto.com/wedding-photography/finger-lakes",
  },
};

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Finger Lakes">
      <HomePageContent location="Finger Lakes" />
    </PageBase>
  );
}
