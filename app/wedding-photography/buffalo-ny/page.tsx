import { Metadata } from "next";
import HomePageContent from "@/app/ui/home-page/home-page-content";
export const metadata: Metadata = {
  title:
    "Buffalo, NY Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Learn all about the family photography team capturing weddings in Buffalo, NY. Explore packages, prices, and availability, and all the other details you need.",
  alternates: {
    canonical: "https://www.bemontphoto.com/wedding-photography/buffalo-ny",
  },
};

export default function Page() {
  return <HomePageContent location="Buffalo, NY" />;
}
