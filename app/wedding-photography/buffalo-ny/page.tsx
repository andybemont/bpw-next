import HomePageContent from "@/app/ui/home-page/home-page-content";
import PageBase from "@/app/ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title:
    "Buffalo, NY Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Buffalo wedding photographers for city, waterfront, and industrial celebrations. Rochester-based team with travel included. Packages from $4,200.",
  path: "wedding-photography/buffalo-ny",
});

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Buffalo, NY">
      <HomePageContent locationKey="buffalo" />
    </PageBase>
  );
}
