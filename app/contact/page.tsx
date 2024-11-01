import { Metadata } from "next";
import ContactContent from "../ui/contact-content/contact-content";
import { namedPictures } from "../lib/portfolio";
import SitePage from "../ui/shared/site-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Contact | Bemont Photo",
};

export default function Page() {
  return (
    <SitePage image={namedPictures.gcvmKiss}>
      <ContactContent />
    </SitePage>
  );
}
