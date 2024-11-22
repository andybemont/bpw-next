import { Metadata } from "next";
import ContactContent from "../ui/contact-content/contact-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Contact for Availability",
  description:
    "Get in touch with Bemont Photo for beautiful and natural wedding photography.",
  alternates: {
    canonical: "https://www.bemontphoto.com/contact",
  },
};

export default function Page() {
  return (
    <SitePage image={namedPortfolioImages.kacieDip} positioning="object-center">
      <ContactContent />
    </SitePage>
  );
}
