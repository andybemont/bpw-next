import HomePageContent from "@/app/ui/home-page/home-page-content";
import PageBase from "@/app/ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title:
    "Rochester, NY Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Rochester wedding photographers for candid, natural coverage across Western New York. View packages from $4,200 and check Bemont Photo availability.",
  path: "wedding-photography/rochester-ny",
});

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Rochester, NY">
      <HomePageContent location="Rochester, NY" />
    </PageBase>
  );
}
