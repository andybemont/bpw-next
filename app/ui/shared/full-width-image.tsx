import { NamedImage } from "@/app/lib/portfolio";
import Image from "next/image";

export default function FullWidthImage(props: { image: NamedImage }) {
  const { image } = props;

  return (
    <div className="relative w-full">
      <Image
        src={image.image.src}
        alt="Wedding Gallery"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100vh", height: "auto" }} // optional
      />
    </div>
  );
}
