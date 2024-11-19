import { Metadata } from "next";
import FaqContent from "../ui/faq-content/faq-content";
import namedPortfolioImages from "../lib/named-portfolio-images";
import SitePage from "../ui/shared/site-page";

const pageTitle = "Rochester Wedding Photography | FAQ | Bemont Photo";
export const metadata: Metadata = {
  title: pageTitle,
  description:
    "All the information about Rochester's favorite wedding photographers",
};

export default function Page() {
  return (
    <SitePage
      image={namedPortfolioImages.kidsWithDog}
      positioning="object-center"
    >
      <div className="absolute min-w-[342px] w-1/3 bg-primary-50/50 z-1 max-h-full overflow-y-auto">
        <FaqContent />
      </div>
    </SitePage>
  );
}
