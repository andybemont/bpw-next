import HomePageContent from "@/app/ui/home-page/home-page-content";
import PageBase from "@/app/ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title:
    "Western NY Wedding Photography by Bemont Photo | Packages and Availability",
  description:
    "Western New York wedding photographers based in Rochester, serving couples across Buffalo, the Finger Lakes, and the wider region. Packages from $4,200.",
  path: "wedding-photography/western-ny",
});

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Western New York">
      <HomePageContent location="Western New York" />
    </PageBase>
  );
}
