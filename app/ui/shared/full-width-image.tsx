import { PortfolioImage } from "@/app/lib/best-ofs";
import Image from "next/image";
import Link from "next/link";

export default function FullWidthImage(props: {
  image: PortfolioImage;
  priority?: boolean;
}) {
  const { image, priority } = props;

  return (
    <Link href="./gallery">
      <div className="relative w-full">
        <Image
          priority={priority}
          src={image.image.src}
          alt={image.alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100vh", height: "auto" }} // optional
        />
      </div>
    </Link>
  );
}
