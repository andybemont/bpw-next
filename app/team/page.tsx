import SitePage from "../ui/shared/site-page";
import TeamContent from "../ui/team-content/team-content";
import PageBase from "../ui/page-base";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Meet the Wedding Photographers | Bemont Photo Rochester, NY",
  description:
    "Meet Andy, Gillian, and Carly — the Rochester wedding photography team behind Bemont Photo. Family-run, candid-focused, and easy to work with.",
  path: "team",
  ogImage: "/team/bemont-photo-241019151107.jpg",
  ogImageAlt: "Gillian and Carly together on Carly's wedding day",
  ogImageWidth: 2400,
  ogImageHeight: 1597,
});

export default function Page() {
  return (
    <PageBase h1Text="Bemont Photo Wedding Photography" h2Text="Meet the Team">
      <SitePage>
        <TeamContent />
      </SitePage>
    </PageBase>
  );
}
