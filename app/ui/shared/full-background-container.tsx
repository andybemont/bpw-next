import { PortfolioImage } from "@/app/lib/best-ofs";
import Image from "next/image";

export default function FullBackgroundContainer(props: {
  image?: PortfolioImage;
  positioning: string;
  children: React.ReactNode;
}) {
  const { image, children, positioning } = props;

  return (
    <div className="absolute top-0 left-0 bg-blue-950 w-screen h-screen">
      {image && (
        <Image
          src={image.image}
          alt={image.alt}
          className={`w-screen h-screen object-cover ${positioning} z-0`}
        />
      )}
      <div
        className={`absolute left-0 top-[96px] m-6 ${"w-[calc(100vw-48px)] h-[calc(100vh-96px-48px)]"}`}
      >
        {children}
      </div>
    </div>
  );
}
