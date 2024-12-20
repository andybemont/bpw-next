import { Metadata } from "next";
import HomePageContent from "@/app/ui/home-page/home-page-content";
export const metadata: Metadata = {
  title:
    "Western New York Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Learn all about the family photography team capturing weddings in Western New York. Explore packages, prices, and availability, and all the other details you need.",
  alternates: {
    canonical: "https://www.bemontphoto.com/wedding-photography/western-ny",
  },
};

export default function Page() {
  return <HomePageContent location="Western New York" />;
}
