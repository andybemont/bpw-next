import { Metadata } from "next";
import galleries, { Gallery } from "../galleries";
import GalleryContent from "../../ui/gallery-page/gallery-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rochester Wedding Photography | XXXXX | Bemont Photo",
  description: "XXXXX",
};

export default function Page() {
  return (
    <GalleryContent
      gallery={galleries.flowers}
      text=<p>
        Test content
        <Link href="./test">with a link</Link>
      </p>
    />
  );
}
