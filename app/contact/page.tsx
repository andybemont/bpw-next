import { Metadata } from "next";
import ContactContent from "../ui/contact-content/contact-content";
import { namedPictures } from "../lib/portfolio";
import SitePage from "../ui/shared/site-page";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Contact | Bemont Photo",
  description:
    "Get in touch with Bemont Photo for fast and affordable wedding photography.",
};

export default function Page() {
  return (
    <SitePage image={namedPictures.gcvmKiss}>
      <div className="absolute min-w-[342px] w-1/3 bg-white/50 z-1 h-full">
        <ContactContent />
      </div>
    </SitePage>
  );
}
