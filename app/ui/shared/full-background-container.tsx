import { NamedImage } from "@/app/lib/portfolio";
import Image from "next/image";

interface FullBackgroundContainerProps {
  image: NamedImage;
  children: React.ReactNode;
}

export default function FullBackgroundContainer(
  props: FullBackgroundContainerProps
) {
  const { image, children } = props;
  const fullScreenMinusHeaderStyle = "w-screen h-[calc(100vh-104px)]";
  const fullScreenMinusHeaderStyleMinus48 =
    "w-[calc(100vw-48px)] h-[calc(100vh-152px)]";
  return (
    <div className="relative">
      <Image
        src={image.image}
        alt={image.alt}
        className={`${fullScreenMinusHeaderStyle} object-cover ${image.positioning} z-0`}
        style={{ objectPosition: image.positioning }}
      />
      <div
        className={`absolute left-0 top-0 m-6 ${fullScreenMinusHeaderStyleMinus48}`}
      >
        {children}
      </div>
    </div>
  );
}
