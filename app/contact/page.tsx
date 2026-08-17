import { permanentRedirect } from "next/navigation";
import { buildPageMetadata } from "@/app/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Bemont Photo | Check Wedding Availability",
  description:
    "Contact Bemont Photo to check wedding photography availability in Rochester, Buffalo, and the Finger Lakes.",
  path: "contact",
});

export default function Page() {
  permanentRedirect("/?contact=1");
}
