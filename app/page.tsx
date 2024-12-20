import { Metadata } from "next";
import HomePageContent from "./ui/home-page/home-page-content";
export const metadata: Metadata = {
  title:
    "Rochester Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Learn all about the family photography team capturing weddings across Western New York. Explore packages, prices, and availability, and all the other details you need.",
  alternates: {
    canonical: "https://www.bemontphoto.com",
  },
};

export default function Page() {
  return <HomePageContent location="Rochester" />;
}
