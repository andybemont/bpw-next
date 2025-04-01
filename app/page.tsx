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

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="">
      <HomePageContent location="Rochester" />
    </PageBase>
  );
}
