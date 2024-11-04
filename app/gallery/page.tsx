import { Metadata } from "next";
import GalleryContent from "../ui/gallery-content/gallery-content";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | Photographers | Bemont Photo",
  description:
    "Bemont Photo is your fun and laid back wedding photography team in Rochester, NY",
};

export default function Page() {
  return (
    <div className="w-screen bg-white">
      <div className="z-10 pt-[84px]">
        <GalleryContent />
      </div>
    </div>
  );
}
