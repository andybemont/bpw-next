import { Metadata } from "next";
import ContactContent from "../ui/contact-content/contact-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Contact | Bemont Photo",
  description:
    "Get in touch with Bemont Photo for fast and affordable wedding photography.",
};

export default function Page() {
  return (
    <SitePage image={namedPortfolioImages.kacieDip} positioning="object-center">
      <ContactContent />
    </SitePage>
  );
}
