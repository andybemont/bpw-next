import SitePage from "../ui/shared/site-page";
import GalleryContent from "../ui/gallery-content/gallery-content";
import PageBase from "../ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";
import {
  JsonLd,
  breadcrumbStructuredData,
} from "@/app/lib/structured-data";
import PageAnalytics from "../ui/analytics/page-analytics";

export const metadata = buildPageMetadata({
  title: "Wedding Photo Galleries & Inspiration | Bemont Photo",
  description:
    "Browse Rochester wedding photography galleries: candid moments, first dances, venues, kids, details, and favorite images from Bemont Photo.",
  path: "gallery",
});

export default function Page() {
  return (
    <PageBase
      h1Text="Bemont Photo Wedding Photography"
      h2Text="Galleries & Inspo"
    >
      <JsonLd
        data={breadcrumbStructuredData([
          { name: "Home", path: "" },
          { name: "Galleries", path: "gallery" },
        ])}
      />
      <PageAnalytics event="gallery_index_view" />
      <SitePage fullWidth>
        <GalleryContent />
      </SitePage>
    </PageBase>
  );
}
