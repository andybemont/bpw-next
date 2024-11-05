import { Metadata } from "next";
import FaqContent from "../ui/faq-content/faq-content";
import { namedPictures } from "../lib/portfolio";
import SitePage from "../ui/shared/site-page";

const pageTitle = "Rochester Wedding Photography | FAQ | Bemont Photo";
export const metadata: Metadata = {
  title: pageTitle,
  description:
    "All the information about Rochester's favorite wedding photographers",
};

export default function Page() {
  return (
    <SitePage image={namedPictures.lydiaFlowers}>
      <div className="absolute min-w-[342px] w-[40%] bg-white/50 z-1 max-h-full overflow-y-auto">
        <FaqContent />
      </div>
    </SitePage>
  );
}
