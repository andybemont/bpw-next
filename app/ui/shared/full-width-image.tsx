import { PortfolioImage } from "@/app/lib/best-ofs";
import Image from "next/image";
import Link from "next/link";

export default function FullWidthImage(props: {
  image: PortfolioImage;
  eagerLoad?: boolean;
}) {
  const { image, eagerLoad } = props;

  return (
    <Link href="./gallery">
      <div className="w-full h-[calc(2.0/3.0*100vw)] bg-primary-600">
        <div className="relative w-full">
          <Image
            src={image.image.src}
            alt={image.alt}
            width={0}
            height={0}
            sizes="100vw"
            loading={eagerLoad ? "eager" : "lazy"}
            style={{ width: "100vh", height: "auto" }} // optional
          />
        </div>
      </div>
    </Link>
  );
}
