import HomePageContent from "@/app/ui/home-page/home-page-content";
import PageBase from "@/app/ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title:
    "Finger Lakes Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Finger Lakes wedding photographers for relaxed, candid coverage at vineyards, lakefront venues, and celebrations across the region. Packages from $4,200.",
  path: "wedding-photography/finger-lakes",
});

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Finger Lakes">
      <HomePageContent location="Finger Lakes" />
    </PageBase>
  );
}
