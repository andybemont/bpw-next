import { Metadata } from "next";
import FaqContent from "../ui/faq-content/faq-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";

const pageTitle = "Rochester Wedding Photography | FAQ";
export const metadata: Metadata = {
  title: pageTitle,
  description:
    "Everything you need to know about Rochester's favorite wedding photographers",
  alternates: {
    canonical: "https://www.bemontphoto.com/faq",
  },
};

export default function Page() {
  return (
    <SitePage
      image={namedPortfolioImages.kidsWithDog.big}
      positioning="object-center"
    >
      <FaqContent />
    </SitePage>
  );
}
