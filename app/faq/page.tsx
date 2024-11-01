import { Metadata } from "next";
import FaqContent from "../ui/faq-content/faq-content";
import { namedPictures } from "../lib/portfolio";
import SitePage from "../ui/shared/site-page";

const pageTitle = "Rochester Wedding Photography | FAQ | Bemont Photo";
export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return (
    <SitePage image={namedPictures.lydiaFlowers}>
      <div className="absolute w-1/3 bg-white/50 z-1 max-h-full overflow-y-auto">
        <FaqContent />
      </div>
    </SitePage>
  );
}
