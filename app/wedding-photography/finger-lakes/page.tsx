import { Metadata } from "next";
import HomePageContent from "@/app/ui/home-page/home-page-content";
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
  return <HomePageContent location="Finger Lakes" />;
}
