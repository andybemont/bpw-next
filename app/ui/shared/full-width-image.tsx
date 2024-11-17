import { PortfolioImage } from "@/app/lib/best-ofs";
import Image from "next/image";

export default function FullWidthImage(props: { image: PortfolioImage }) {
  const { image } = props;

  return (
    <div className="relative w-full">
      <Image
        src={image.image.src}
        alt={image.alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100vh", height: "auto" }} // optional
      />
    </div>
  );
}
