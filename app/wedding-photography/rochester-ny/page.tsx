import HomePageContent from "@/app/ui/home-page/home-page-content";
import PageBase from "@/app/ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title:
    "Rochester, NY Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Rochester wedding photographers for candid, natural coverage at city venues, museums, parks, and suburbs across Monroe County. Packages from $3,200.",
  path: "wedding-photography/rochester-ny",
});

export default function Page() {
  return (
    <PageBase
      h1Text="Bemont Photo Wedding Photography"
      h2Text="Rochester, NY"
    >
      <HomePageContent locationKey="rochester" />
    </PageBase>
  );
}
