import { buildPageMetadata } from "@/app/lib/seo";
import PageBase from "@/app/ui/page-base";
import PageAnalytics from "@/app/ui/analytics/page-analytics";
import ContactPageContent from "@/app/ui/contact-content/contact-page-content";

export const metadata = buildPageMetadata({
  title: "Contact Bemont Photo | Check Wedding Availability",
  description:
    "Contact Bemont Photo to check wedding photography availability in Rochester, Buffalo, and the Finger Lakes.",
  path: "contact",
});

export default function Page() {
  return (
    <PageBase
      h1Text="Bemont Photo Wedding Photography"
      h2Text="Contact and Availability"
    >
      <PageAnalytics event="contact_form_view" />
      <ContactPageContent />
    </PageBase>
  );
}
